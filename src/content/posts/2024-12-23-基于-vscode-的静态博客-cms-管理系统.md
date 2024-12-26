---
title: 使用 VSCode Front Matter 插件管理静态博客
slug: vscode-front-matter-cms
description: 这篇文章介绍了如何使用 VSCode 插件 Front Matter 来管理静态博客。通过该插件，用户可以在 VSCode 中像在后台一样管理博客文章，包括修改文章的标题、标签和描述等信息。此外，文章还详细讲解了如何通过 FM 插件新建文章，并利用 Copilot 智能生成文章的元数据。
publishDate: 2024-12-23
tags:
    - blog
    - Front Matter
    - VSCode
    - 插件
    - 静态博客
    - AI
---

许多博客主习惯使用 hexo、hugo 等静态博客生成器，这样无需购买服务器即可通过静态页面托管自己的网站。当然，这类生成器也有一些不足之处，其中最大的缺点可能就是无法像动态博客那样方便地管理文章。今天，我向大家推荐一款 VSCode 插件——Front Matter。通过这款插件，你可以在 VSCode 中轻松地管理自己地博客文章。

## Front Matter 插件（下面简称 FM）

在 vscode 插件市场搜索 `Front Matter`，点击安装即可。

仓库地址：https://github.com/estruyf/vscode-front-matter

安装 FM 插件后，你可以在 vscode 中看到一个新的侧边栏，打开 FM 根据提示初始化一个项目 --> 选择自己的博客框架 --> 选择自己的文章目录,目前经过迭代已经支持市面上主流的静态博客框架，如 hexo、hugo、astro 等。当初始化成功后，打开 `Open dashboard` 可以看到你的文章列表，点击文章后，你可以看到文章的 Front Matter 信息，你可以在这里修改文章的标题、标签、描述等信息。

![dash](/images/dashboard-7.1.0.png)

## 通过 FM 新建一篇文章

点击 `Create content`，输入文章标题，回车确认即可新建一篇文章。新建文章后，你可以在文章的 Front Matter 中看到文章的标题、标签、描述等信息，你可以在这里修改文章的信息。开启 Copilot 后，你还可以通过 Copilot 来智能生成 title、slug、description 等信息。

![new-post](/images/new-post.png)

## Front Matter 优势总结

1. **快速新建文章**：通过 FM 插件，你可以快速新建一篇文章，不用再手动创建文件，修改文件名等操作。
2. **智能生成文章元数据**：开启 Copilot 后，你可以通过 Copilot 来智能生成文章的元数据，提高工作效率。
3. **文章信息可视化**：通过 FM 插件，你可以在 vscode 中直观地看到文章的 Front Matter 信息，方便修改文章的信息。