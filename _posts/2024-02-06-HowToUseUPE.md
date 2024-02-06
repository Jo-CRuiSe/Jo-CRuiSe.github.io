---
title: How to Use UPE
date: 2024-02-06 09:41:00 +0800
categories: [tutorial]
tags: []
pin: false
author: jo
toc: true
commments: true
typora-root-url: ../../Jo-CRuiSe.github.io/
math: false
mermaid: true
public: true
---

## 先决条件

请先根据 [README](https://github.com/Jo-CRuiSe/unpublished-posts-enhancement/blob/main/README.md) 来完成基本配置。

## 配置方法

### 注册 Leancloud

为了能够使用登录功能，请注册Leancloud作为后端

登录注册网址：https://console.leancloud.cn/register，在左上角选择**华北节点**

>华东地区节点在2024.1.30关闭，国际版对国内评论系统有限制
{: .prompt-info}

![LeancloudRegisterDark](/assets/blog_res/2024-02-06-HowToUseUPE.assets/LeancloudRegisterDark.png){: .dark }

![LeancloudRegisterLight](/assets/blog_res/2024-02-06-HowToUseUPE.assets/LeancloudRegisterLight.png){: .light }

### 创建应用

注册完成后左上角选择<kbd>Create app</kbd>，App name随意取，在"App price plan"中选择<kbd>Developer</kbd>，完成后点击<kbd>Create</kbd>

![CreateAppDark](/assets/blog_res/2024-02-06-HowToUseUPE.assets/CreateAppDark.png){: .dark }

![CreateAppLight](/assets/blog_res/2024-02-06-HowToUseUPE.assets/CreateAppLight.png){: .light }

### 应用设置

进入app的设置，在侧边栏选择"Settings"-"App keys"（可能需要向下滚动）

![AppKeysLight.png](/assets/blog_res/2024-02-06-HowToUseUPE.assets/AppKeysLight.png){: .light }

![AppKeysDark](/assets/blog_res/2024-02-06-HowToUseUPE.assets/AppKeysDark.png){: .dark }

这里的AppID、AppKey和Server URLs对应_config.yml文件中的相应内容

```yml
Leancloud:
  appId: 'example' # fill with your Leancloud appId
  appKey: 'example' # fill with your Leancloud appKey
  serverURL: 'example' # fill with your Leancloud serverURL
  allowRegister: true # allow registration for your website
```

### 安全

由于App ID、App Key、ServerURL是在配置文件中以明文形式储存的，使用为了安全，请在"Settings"-"Security"（可能需要向下滚动）中的"Web secure domains"下的文本框中添加您的域名，例如`https://username.github.io`。同时为了方便在本地调试，可以添加`127.0.0.1:4000`

![SecurityLight](/assets/blog_res/2024-02-06-HowToUseUPE.assets/SecurityLight.png){: .light }

![SecurityDark](/assets/blog_res/2024-02-06-HowToUseUPE.assets/SecurityDark.png){: .dark }

>127.0.0.是本机ip，4000是本地调试端口号，如果您未修改过相关配置，Jekyll默认使用4000端口
{: .prompt-info }

>当添加多个域名的时候需要换行
{: .prompt-warning }

### 用户信息存储

用户信息存储在"Data Storage"-"Data"（可能需要向下滚动）下的"_User"内。

![UsersLight](/assets/blog_res/2024-02-06-HowToUseUPE.assets/UsersLight.png){: .light }

![UsersDark](/assets/blog_res/2024-02-06-HowToUseUPE.assets/UsersDark.png){: .dark }

为了使登录的用户能够更改头像和昵称，请在上方的"Permission"-"Default ACL"-<kbd>Edit</kbd>将读写权限改为"All users"

![ChangeACLDark](/assets/blog_res/2024-02-06-HowToUseUPE.assets/ChangeACLDark.png){: .dark }

![ChangeACLLight](/assets/blog_res/2024-02-06-HowToUseUPE.assets/ChangeACLLightt.png){: .light }

### 邮箱注册权限

为了便使用邮箱更改密码和防止恶意注册，请在"Authentication"-"Settings"（可能需要向下滚动）中将前两个属性打勾

- [x] Enable email address verification

- [x] Do not allow users with unverified email addresses to log in

![EmailConfigDark.png](/assets/blog_res/2024-02-06-HowToUseUPE.assets/EmailConfigDark.png){: .dark }

![EmailConfigLight](/assets/blog_res/2024-02-06-HowToUseUPE.assets/EmailConfigLight.png){: .light }

## 登录测试

现在登录您自定义的网址：`https://username.github.io/unpublished-posts-enhancement`，如果运行正确您会被redirect到`https://username.github.io/unpublished-posts-enhancement/login`。现在尝试注册一个账号，需要填写用户名、密码、邮箱。进行邮箱验证后就可以正常登录了。

再到Leancloud下的"Data Storage"-"Data"-"_User"，您就可以看到已注册的用户信息了。

>由于Leancloud的安全限制，您无法查看任何人的密码
{: .prompt-info}

## 登录后的使用

### 基础使用

如果以上步骤您都顺利通过，那么您现在可以像使用原本的Chirpy主题的博客一样来对当前项目进行更改。

>在提交时请注意仓库名称是否选取正确
{: .prompt-warning}

### 进阶使用

<span style="color: red">请确保您有html相关知识，并且您有足够的信心来更新这个项目中的代码。</span>

#### _includes

```
.
├── _includes
│   └── loader.html 
│   └── login-check.html
│   └── sidebar.html
```
 - `loader.html` 是有关加载等待动画的代码，相关的scss已经写在"_sass"-"addon"-"loader.scss"
 - `login-check.html` 是有关检查用户是否登录的代码
 - `sidebar.html` 在原作者Chirpy的代码基础上将侧边栏进行了修改

#### _guestAvatar

```
.
├── _assets
│   └── config
│   	└── guest-avatar.jpg
```
 - `guest-avatar.jpg` 存放默认用户头像，如果进行更改，请仍命名为`guest-avatar.jpg`，否则要到"_config.yml"中修改头像路径

#### login and forgot

```
.
├── login
│   └── index.html
│   └── forgot
│   	└── index.html
```

```
.
├── _layouts
│   └── login.html
│   └── forgot.html
```
 - 修改有关login和forgot相关代码请到第二个目录结构下

## 最后

该文章详细地指导您如何使用[unpublished-posts-enhancement](https://github.com/Jo-CRuiSe/unpublished-posts-enhancement)，如果您遇到任何困难可以到评论区进行留言或使用邮件等通讯方式与我取得联系。如果您觉得我的项目还不错的话不要忘记给我一个star😉