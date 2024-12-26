---
title: "actual-server 备份脚本"
description: ""
slug: "actual-server-bei-fen-jiao-ben"
publishDate: 2024-11-25T12:46:02+08:00
tags: ["actual", "shell", "AI"]
---

以下是一个脚本，可以完成每天凌晨1点定时打包 `/opt/actual-server` 目录，并将其传输到远程服务器 `192.168.9.100` 的 `/data/` 目录下。

### 脚本实现步骤

1. **压缩文件**：使用 `tar` 打包和压缩目录。
2. **远程传输**：通过 `scp` 将压缩包传输到远程服务器。
3. **设置定时任务**：使用 `cron` 设置每天凌晨1点执行。

### 脚本内容

保存以下脚本为 `/opt/shell/backup_actual_server.sh`：

```bash
#!/bin/bash

# 设定变量

SOURCE_DIR="/opt/actual-server"

BACKUP_DIR="/tmp"

REMOTE_SERVER="192.168.9.103"

REMOTE_DIR="/Users/kevin/actual-data-backup"

TIMESTAMP=$(publishDate +"%Y%m%d_%H%M%S")

BACKUP_FILE="actual-server-backup-${TIMESTAMP}.tar.gz"

REMOTE_USER="kevin" # 替换为远程服务器用户名

# 打包目录

echo "开始打包 ${SOURCE_DIR} ..."

tar -czf "${BACKUP_DIR}/${BACKUP_FILE}" -C "$(dirname "${SOURCE_DIR}")" "$(basename "${SOURCE_DIR}")"

# 检查是否打包成功

if [ $? -ne 0 ]; then

    echo "打包失败！"

    exit 1

fi

echo "打包完成，文件存储在 ${BACKUP_DIR}/${BACKUP_FILE}"

# 传输到远程服务器

echo "传输文件到 ${REMOTE_SERVER}:${REMOTE_DIR} ..."

scp "${BACKUP_DIR}/${BACKUP_FILE}" "${REMOTE_USER}@${REMOTE_SERVER}:${REMOTE_DIR}"

# 检查传输是否成功

if [ $? -ne 0 ]; then

    echo "文件传输失败！"

    exit 1

fi

echo "文件传输完成"

# 删除本地备份文件

echo "清理本地备份文件 ${BACKUP_DIR}/${BACKUP_FILE} ..."

rm -f "${BACKUP_DIR}/${BACKUP_FILE}"
```

### 配置权限

1. **赋予执行权限**：
    
    ```bash
    chmod +x /opt/shell/backup_actual_server.sh
    ```
    
2. **测试脚本**：
    
    ```bash
    /opt/shell/backup_actual_server.sh
    ```
    

### 设置定时任务

1. 编辑定时任务：
    
    ```bash
    crontab -e
    ```
    
2. 添加如下内容，设置每天凌晨1点执行：
    
    ```bash
    0 1 * * * /opt/shell/backup_actual_server.sh >> /var/log/backup_actual_server.log 2>&1
    ```
    

### 日志管理

脚本的输出会保存在 `/var/log/backup_actual_server.log` 中，便于日后查看备份日志。

### 注意事项

- 替换 `your_username` 为远程服务器的实际用户名。
- 确保本机到远程服务器已经配置了免密码登录（使用 `ssh-keygen` 和 `ssh-copy-id` 配置）。
- 确保本地和远程都有足够的磁盘空间存储备份文件。