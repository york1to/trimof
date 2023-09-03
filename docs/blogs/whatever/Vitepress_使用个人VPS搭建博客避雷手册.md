---
title: Vitepress 使用个人 VPS 搭建博客避雷手册
---

# Vitepress 使用个人 VPS 搭建博客避雷手册

[[toc]]

## 引子

静态博客发展到现在已经非常方便了，即使是我这种没有接触过任何前端的非计算机系学生，都能非常快捷地部署一个个人博客。即便如此，要满足我的需求，仍然存在需要调试的地方。经过两天的研究，有些调出来了有些没调出来，心里嘀咕着咱也不学这个差不多得了，所以写一篇手册防止自己忘掉。

## 1 VPS 租赁，Cloudfare 域名解析 Github Pages

为了给我的专线打掩护，租的是搬瓦工的 50 刀一年的服务器，之后润了也方便访问。

### 1.1 cloudfare 域名解析

[教程](https://www.bandwagonhost.net/5986.html)

### 1.2 nginx 代理

1. 安装

   包管理器安装

2. [配置文件](https://www.nginx.com/resources/wiki/start/topics/examples/full/)

3. systemctl enable

### 1.3 https 证书

使用 cloudfare 的免费证书[link](https://www.cloudflare.com/zh-cn/learning/ssl/what-is-an-ssl-certificate/)

[教程](https://seviche.cc/2022-06-12-cloudflare/)

### 1.4 Github Pages

#### 1.4.1 Github Pages部署

由于服务器在境外，在配置的过程中被污染了ssh都上不去，所以最后还是换成了github pages。github pages的自动化程度非常高，可以说编辑完commit之后直接就能在我的网站上看到了。

整个博客项目我创建了三个库，一个源代码，一个github.io，一个图床，感谢微软爸爸。

网上教程极其多，基本步骤是用自己的github用户名建立一个`username.github.io`的仓库然后直接把网站源文件push上去。具体脚本见

*[4 git 服务器自动部署](## 4 git 服务器自动部署)

#### 1.4.2 Github DNS以及

## 2 Vitepress 安装与配置

### 2.1 Vitepress 安装

[官网](https://vitepress.dev/);

框架抄的[Arch-guide](https://arch.icekylin.online/)；写到 json 里面直接用 pnpm 安装；

用的 pnpm，更新用`pnpm i` , [husky](https://typicode.github.io/husky/guide.html)虽然有但是没用过.

### 2.2 Vitepress 根据内容自动编写侧边栏 Index

不会任何 ts，所以用了 vitepress-plugin-auto-sidebar。

顶端导航手写的。

### 2.3 Vitepress Algolia 搜索

沙皮玩意儿，一坨屎，不想弄了，没有就没有吧。

## 3 mac 下 typora 配合调教

### 3.1 typora 直接拖拽 MAC 截图的图片格式问题以及其解决方法：上传到 github

typora 有个非常不错的功能，用 mac 自带的截图直接拖到 typora 里面可以直接 Copy 一份到目标文件夹，并把路径转换为相对路径。以前都这么用过来的，结果发现 Mac 自带的时间格式里面有空格，自带的 html 解释器不能解释带空格的路径。解决方法是使用图床，于是采取了 picgo+github 图床的组合。

[Picgo 文档](https://picgo.github.io/PicGo-Doc/)

csdn 上的 picgo 的 config 他妈的乱写，浪费了我十分钟，这里找了另一篇[文章](https://www.jianshu.com/p/33e7da24ee36)，写一下步骤方便 cv：

- 安装 npm 包管理器`brew install node`
- 安装 picgo`npm install picgo -g`
- 安装 github 插件`picgo install github-plus `理论上我不用 cdn 我也不需要这歌，不过无所谓了
- 安装重命名插件`picgo install rename-file` 重命名
- `vim ~/.picgo/config.json`

```json
{
  "picBed": {
    "uploader": "githubPlus",
    "current": "githubPlus",
    "githubPlus": {
      "branch": "main",
      "customUrl": "",
      "origin": "github",
      "repo": "yorkitokang/trimof_image",
      "path": "images",
      "token": "xxx"
    }
  },
  "picgoPlugins": {
    "picgo-plugin-github-plus": true,
    "picgo-plugin-rename-file": true
  },
  "picgo-plugin-rename-file": {
    "format": "{y}_{m}_{d}_{hash}_{origin}_{rand:6}"
  }
}
```

**注意：不要写//注释，不然他会报错**

`customUrl`是留给 github 的中国 cdn 的，我没用成功，所以我留空

`token`在[这个地方](https://github.com/settings/tokens)生成

typora 配置很简单，[官网](https://support.typora.io/Upload-Image)说的很明白。

最终实现效果，截图然后拖到 typora 里面，自动上传到 github 图床然后博客就能访问了，爽！

## 4 git 服务器自动部署



### 4.3 自定义域名CNAME的自动部署

在使用github pages的自动部署时，发现了一个问题

![screenshot 2023-08-29 at 2.40.53 PM](https://raw.githubusercontent.com/yorkitokang/trimof_image/main/images/2023_08_29_f4f749bc5754ab7dd97748b303d5d9ed.png)

## 5 接入谷歌，bing

还在想怎么搞
