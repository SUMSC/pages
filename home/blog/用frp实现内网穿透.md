---
title: 用frp实现内网穿透
date: 2018-07-12 16:46:25
author: Artorius
---

## 前言

最近把家里的旧电脑换了 redhat 做服务器，因为没有家里公网 ip，就用 frp 实现了内网穿透

## 准备工作

一台有公网 ip 的电脑
一台能上网的机子

## 安装

这里以 0.20.0 版本为例
[https://github.com/fatedier/frp/releases/download/v0.20.0/frp_0.20.0_linux_amd64.tar.gz](https://github.com/fatedier/frp/releases/download/v0.20.0/frp_0.20.0_linux_amd64.tar.gz)
其他的 release 参见[https://github.com/fatedier/frp/releases](https://github.com/fatedier/frp/releases)

```bash
$ wget https://github.com/fatedier/frp/releases/download/v0.20.0/frp_0.20.0_linux_a    md64.tar.gz
```

下载后解压

```bash
$ tar -xvf frp_0.20.0_linux_amd64.tar.gz
```

### 服务端

```bash
$ cd frp_0.20.0_linux_amd64
```

编辑配置文件

```bash
vim frps.ini
```

修改地址和端口

```
[common]
vhost_http_port = 8080
bind_port = 7000

[web]
type = http
custom_domains = your.domains
```

确保你的服务器开启的你填的端口并且没有被占用

### 客户端

同样下载解压之后编辑 frpc.ini

```bash
$ vim frpc.ini
```

配置文件内容如下

```
[common]
server_addr = your.server.address
server_port = 7000

[ssh]
type = tcp
local_ip = 127.0.0.1
local_port = 22
remote_port = 6000
```

之后运行就 ok 了

## 可选

将 frps 写入系统服务(frpc 只要将下面所有的 frps 换成 frpc 即可)
先移动文件

```bash
$ sudo cp frps /usr/bin
$ sudo mkdir /etc/frp
$ sudo cp frps.ini /etc/frp
```

之后是写服务文件

```bash
$ sudo vim /etc/systemd/system/frps.service
```

文件如下

```
[Unit]
Description=frps daemon
After=network.target syslog.target
Wants=network.target

[Service]
Type=simple
#启动服务的命令（此处xxx换做你的实际安装目录）
ExecStart=/usr/bin/frps -c /etc/frps/frps.ini
Restart= always
RestartSec=1min
ExecStop=/usr/bin/killall frps

[Install]
WantedBy=multi-user.target
```

这样我们就可以用 systemed 进行控制并且开机启动

```bash
$ sudo systemctl enable frps
$ sudo systemctl start frps
```

这样我们就可以偷(yu)税(kuai)地进行内网穿透了！
