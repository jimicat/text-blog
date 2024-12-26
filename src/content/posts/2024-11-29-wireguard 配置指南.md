---
title: "wireguard 配置指南"
description: ""
slug: "wireguard-pei-zhi-zhi-nan"
publishDate: 2024-11-29T14:00:53+08:00
tags: ["wireguard", "linux", "vpn"]
---

> 基于 ubuntu 24.04.1 LTS

### 服务端配置

```bash
apt install wireguard
echo "net.ipv4.ip_forward = 1" >> /etc/sysctl.conf
echo "net.ipv4.conf.all.proxy_arp = 1" >> /etc/sysctl.conf
sysctl -p /etc/sysctl.conf

# 生成密钥对
umask 0077
wg genkey > private
wg pubkey < private > public

# 新增配置文件
vim /etc/wireguard/wg0.conf
-----------------
[Interface]
Address = 10.10.0.1/24 #本机分配的 IP
PostUp = iptables -A FORWARD -i wg0 -j ACCEPT; iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE; ip6tables -A FORWARD -i wg0 -j ACCEPT; ip6tables -t nat -A POSTROUTING -o eth0 -j MASQUERADE
PostDown = iptables -D FORWARD -i wg0 -j ACCEPT; iptables -t nat -D POSTROUTING -o eth0 -j MASQUERADE; ip6tables -D FORWARD -i wg0 -j ACCEPT; ip6tables -t nat -D POSTROUTING -o eth0 -j MASQUERADE
ListenPort = 11820 #自定义端口
PrivateKey = <your server private key>
-----------------

# 启动
wg-quick up wg0

# 在服务端添加客户端的公钥
wg set wg0 peer KWwqR9qfGYrXnNOLa33cKwlgVOH4tAPgg5BWya3EA0o= allowed-ips 10.10.0.2/32
# 此时在服务器端重启 wg0 会看到客户端公钥和对应 IP 地址被写入 /etc/wireguard/wg0.conf 中

# 重启服务端
wg-quick down wg0
wg-quick up wg0
```

### 客户端配置

```bash
# 安装
apt install wireguard

# 生成客户端密钥对
umask 0077
wg genkey > private
wg pubkey < private > public

# 新增客户端配置文件
vim /etc/wireguard/wg0.conf
---------------------------
[Interface]
PrivateKey = <your client private key>
Address = 10.10.0.2/32
DNS = 8.8.8.8

[Peer]
PublicKey = <your server public key>
AllowedIPs = 10.10.0.0/24
Endpoint = <your server public ip>:11820
--------------------------

# 启动客户端
wg-quick up wg0
```