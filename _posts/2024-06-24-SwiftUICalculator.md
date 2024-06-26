---
title: 使用 SwfitUI 来做仿做一个原生计算器(技术篇)
date: 2024-06-24 14:40:00 +0800
categories: [SwiftUI]
tags: []
pin: false
unpublished: true
author: jo
toc: true
commments: true
typora-root-url: ../../Jo-CRuiSe.github.io/
math: true
mermaid: false

---

## 概述

这里我们将会使用MVVM架构来编写这个项目，本文将主要探讨计算器计算功能实现的步骤。

>代码已开源：https://github.com/Jo-CRuiSe/SwiftUICalculator
{ :.prompt-info}

## Views

`calcButtonView`：单个按钮样式

`contentsView`：计算器app样式

## ViewModel(`ContentViewModel`)

### 变量定义

```swift
@Published var display: String = "0" //计算器显示字符
@Published var action: Action? //按键操作
@Published var constantlyLit: Bool = false //操作是否常亮
@Published var ACPressed = false //是否按下AC键

private var operandStack: [String] = [] //数字栈
private var operatorStack: [String] = [] //符号栈
private var lastPressedButton: lastOprationType = .clear//上次按下按钮类型
private var shouldClearAll: Bool = true //清除全部栈还是清除当前数字栈的最后一位
private var lastNum = "" //上次按下数字
private var lastOperator = "" //上次按下操作
var canDeleteLastDigit = true //是否允许左右滑动显示界面来删除最后一位
var stacked = false //是否有元素入栈
```

### 基本运算逻辑

#### 按键类型

- 数字（0～9）
- 运算（\+，\-，×，÷ ）
- 符号切换键（\+/\-)
- 百分号（%）
- 等于（=）
- 清除（AC）

#### 数字处理逻辑

- 追加：当上一个输入的是数字时，追加新数字。如果数字栈中最后一个元素是0，则直接显示当前数字。数字除去小数点后最大长度为9。

- 清除重新显示：当上次进行了运算，显示当前数字；若上次进行了特殊操作或清除，先清空栈再显示当前数字

```swift
if lastPressedButton == .operand {
    var operand = operandStack.popLast() ?? "0"
    if operand == "0" {
        operand = text
    } else {
        operand.append(text)
    }
    operandStack.append(operand)
    lastPressedButton = .operand
} else if lastPressedButton == .clear || lastPressedButton == .specialOperator {
    _ = operandStack.popLast()
    operandStack.append(text)
}
else {
    display = text
    operandStack.append(text)
}
lastPressedButton = .operand
```

#### 运算处理逻辑

- 更改算符：上一个输入也为算符，并且当前操作不是 = 或 \+/\- 则替换符号栈最后一个符号

```swift
if lastPressedButton == .operation && action != .equals && action != .plusMinus{
    _ = operatorStack.popLast()
}
```

- 压入运算符栈：上一个运算符优先级小于等于当前运算符优先级
-  \+  \-  ×  ÷进行运算：上一个运算符优先级大于当前运算符优先级

> 当输入运算符后，运算符栈内只可能有3种情况：
>
> - 有一个运算符：运算符为刚输入的运算符，则不做任何操作
> - 有两个运算符：可能组合为低优先级\+高优先级，或高优先级\+低优先级，后者对高优先级进行处理
> - 有三个运算符：可能组合为低优先级\+高优先级\+高优先级，例如\+  ×  ×，或低优先级\+高优先级\+低优先级，例如\+  ×  \+

#### 符号切换键处理逻辑

- 当上个操作为运算符时，将“\-0”压入数字栈
- 当上个操作不为运算符时，取出上个数字，并取相反数

```swift
if lastPressedButton == .operation {
    operandStack.append("-0")
    display = "-0"
} else {
    var last = operandStack.popLast() ?? "0"
    if last.first == "-" {
        last.removeFirst()
    } else {
        last = "-" + last
    }
    operandStack.append(last)
    display = last
}
lastPressedButton = .plusMinus
```

#### 百分号处理逻辑

- 数字栈中最后一个元素 ÷ 100

```swift
canDeleteLastDigit = false
if operandStack.last == "0" && operandStack.last == nil {
    lastPressedButton = .percent
    return
} else if lastPressedButton == .operand || lastPressedButton == .percent || lastPressedButton == .equal {
    let numString = operandStack.popLast() ?? "0"
    let num = (convertToDouble(numString) ?? 0.0) / 100.0
    operandStack.append(String(num))
    display = convertToString(num)
} else if lastPressedButton == .operation {
    let numString = operandStack.popLast() ?? "0"
    let num = (convertToDouble(numString) ?? 0.0) / 100.0
    operandStack.append(numString)
    operandStack.append(String(num))
    display = convertToString(num)
}
lastPressedButton = .percent
```

#### 等于号处理逻辑

将数字栈与符号栈进行组合运算

> 按下等于号前，符号栈内可能情况为
>
> - 无运算符：则重复运算上次运算符与操作数组合。5\-2*3 \-> \-1 \-3 \-9 \-27
> - 有一个运算符：
> - 有两个运算符：组合为低优先级\+高优先级
> - 有三个运算符

```swift
private func equalButtonPressed() {
    canDeleteLastDigit = false

    if lastPressedButton == .operation,
       let operand = operandStack.last
    {
        operandStack.append(operand)
    }

    if operatorStack.count == 1{
        guard
            let operation = operatorStack.popLast(),
            let rightNum = operandStack.popLast(),
            let leftNum = operandStack.popLast()
        else {return}

        lastOperator = operation
        lastNum = rightNum
        let answer = solve(leftNum: leftNum, operation: operation, rightNum: rightNum)
        operandStack.append(answer)
        display = answer
    } else if operatorStack.count == 2{
        guard
            let secondOperator = operatorStack.popLast(),
            let firstOperator = operatorStack.popLast(),
            let thirdNum = operandStack.popLast(),
            let secondNum = operandStack.popLast(),
            let firstNum = operandStack.popLast()
        else { return }

        lastOperator = secondOperator
        lastNum = thirdNum
        let answer1 = solve(leftNum: secondNum, operation: secondOperator, rightNum: thirdNum)
        let answer2 = solve(leftNum: firstNum, operation: firstOperator, rightNum: answer1)
        operandStack.append(answer2)
        display = answer2
    } else {
        // count == 0
        if lastNum == "" && lastOperator == ""
        {
            display = operandStack.last ?? "0"
        } else {
            let operand = operandStack.popLast() ?? "0"
            let answer = solve(leftNum: operand, operation: lastOperator, rightNum: lastNum)
            operandStack.append(answer)
            display = answer
        }
    }
}
```

#### 清除处理逻辑

恢复初始设置

```swift
private func clearAll() {
    display = "0"
    action = nil
    constantlyLit = false
    canDeleteLastDigit = false
    ACPressed = true
    operandStack = []
    operatorStack = []
    stacked = false
    lastNum = ""
    lastOperator = ""
}
```

#### 显示处理逻辑

- 数字栈为空则显示0
- 数字栈不为空则显示栈内最后一个元素
- 显示最大长度为9个字符，长于9个使用科学计数法，2.81531e10，3.362826e9，除去小数点和负号，最长显示9个字符
- 对超过显示范围的数字使用科学计数法（代码中限制了精度为10^{\-15}）

>2.457343726 -> 2.45734373
>
>2.81531e10
>
>3.72529e
>
>-9

### 测试集

3 \+ 2 × 5 \- 4

3 × 2 \+ 5 × 4

3 \+ 2 = % % % % %

1 ÷ 4 = = = = = = = = = = = = = = =

123 × = = = = =

5 \+ \+/\- 3 = 

5\+ \+/\- =

## 附加功能

表情雨