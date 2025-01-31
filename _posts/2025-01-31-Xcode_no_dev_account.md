---
title: Xcode 无需开发者账号分发 iOS app
date: 2025-01-31 23:06:00 +0800
categories: [Development]
tags: [Xcode]
pin: false
author: jo
toc: true
commments: true
typora-root-url: ../../Jo-CRuiSe.github.io/
math: false
mermaid: false
---

在菜单栏上选择"Product->Archieve"，稍等片刻，项目归档完毕后会弹出窗口

<img src="/assets/blog_res/2025-02-01-Xcode_no_dev_account.assets/image-20250131224831200.png" alt="image-20250131224831200" style="zoom:30%;" />

![image-20250131225128896](/assets/blog_res/2025-02-01-Xcode_no_dev_account.assets/image-20250131225128896.png)

在弹出的窗口中右键，选择“在访达中显示”

<img src="/assets/blog_res/2025-02-01-Xcode_no_dev_account.assets/image-20250131225225989.png" alt="image-20250131225225989" style="zoom:50%;" />

对`xcarchive`后缀的文件右键，选择“显示包内容”

<img src="/assets/blog_res/2025-02-01-Xcode_no_dev_account.assets/image-20250131225604477.png" alt="image-20250131225604477" style="zoom:50%;" />

进入文件"Products"，将"Applications"这个文件夹改名为"Payload"，之后右键压缩。将压缩的`zip`文件后缀改为`ipa`，前面文件名可以自定义，这样就得到了安装包

<img src="/assets/blog_res/2025-02-01-Xcode_no_dev_account.assets/image-20250131225913187.png" alt="image-20250131225913187" style="zoom:50%;" />

> 必须有`Payload`文件夹，这是iOS程序正确运行的关键
{:.prompt-info}

最后使用自签工具即可安装到其他人的设备上，这样无需开发者账号，也无需Xcode多次部署。