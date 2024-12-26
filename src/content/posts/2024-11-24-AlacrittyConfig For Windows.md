---
title: "Alacritty Config"
description: ""
slug: "alacritty-config"
publishDate: 2024-11-24T23:51:09+08:00
tags: ["alacritty", "终端"]
---

### Windows

```bash
配置文件路径
C:\Users\Admin\AppData\Roaming\alacritty\alacritty.toml
```

```toml
general.live_config_reload = true

general.import = [
  #"C:\\Users\\Admin\\AppData\\Roaming\\alacritty\\colour\\catppuccin-latte.toml"
   "C:\\Users\\Admin\\AppData\\Roaming\\alacritty\\colour\\catppuccin-frappe.toml"
  # "C:\\Users\\Admin\\AppData\\Roaming\\alacritty\\colour\\catppuccin-macchiato.toml"
  # "C:\\Users\\Admin\\AppData\\Roaming\\alacritty\\colour\\catppuccin-mocha.toml"
]

[env]
TERM = "xterm-256color"

[window]

dimensions = { columns = 150, lines = 30 }
decorations = "Full"
dynamic_title = false
dynamic_padding = false
opacity = 0.98
padding = { x = 20, y = 10 }

[font]
size = 8.0

[font.bold]
family = "JetBrainsMono Nerd Font"
style = "Heavy"

[font.bold_italic]
family = "JetBrainsMono Nerd Font"
style = "Heavy Italic"

[font.italic]
family = "JetBrainsMono Nerd Font"
style = "Medium Italic"

[font.normal]
family = "JetBrainsMono Nerd Font"
style = "Medium"

[terminal]
shell = { program = "wsl" }
osc52 = "CopyPaste"

```

### MacOS

```bash
# 配置文件位置
/Users/kevin/.config/alacritty/alacritty.toml
```

```toml
general.live_config_reload = true

general.import = [
  "~/.config/alacritty/colour/alacritty/catppuccin-latte.toml"
  # "~/.config/alacritty/colour/alacritty/ccatppuccin-frappe.toml"
  # "~/.config/alacritty/colour/alacritty/catppuccin-macchiato.toml"
  # "~/.config/alacritty/colour/alacritty/catppuccin-mocha.toml"
]

[env]
TERM = "xterm-256color"

[window]

dimensions = { columns = 150, lines = 30 }
decorations = "Full"
dynamic_title = false
dynamic_padding = false
opacity = 0.9
blur = true
padding = { x = 20, y = 20 }

[font]
size = 14.0

[font.bold]
family = "FiraCode Nerd Font"
style = "Heavy"

[font.bold_italic]
family = "FiraCode Nerd Font"
style = "Heavy Italic"

[font.italic]
family = "FiraCode Nerd Font"
style = "Medium Italic"

[font.normal]
family = "FiraCode Nerd Font"
style = "Medium"
```

### 主题仓库

https://github.com/catppuccin/alacritty

### 字体

https://www.nerdfonts.com/font-downloads