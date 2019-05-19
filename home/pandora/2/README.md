---
title: "魔盒挑战 - 第二期"
---

## 魔盒挑战参赛地址

> [点击这里参加比赛](https://pandora.sumsc.xin)

## 暂定流程

1. 参赛者在上方链接的[参赛页面](#魔盒挑战参赛地址)使用苏州大学统一身份认证进行登录

2. 参赛者阅读并同意比赛要求后登记报名

3. 参赛者通过官方提供的 Github 仓库获取赛题（Fork 或直接下载均可）

4. 参赛者完成题目后在提交页面输入自己的 repo 地址完成提交

    4.1 >> [Pandora-2nd 赛题使用指南](https://github.com/SUMSC/Pandora-2nd-Competition/blob/master/README.md)

    4.2 >> [SSH Key赛题简介](#ssh-key-相关)

5. 每天凌晨在 Azure Pipeline 上进行自动评分

6. 参赛者可以在[参赛页面](#魔盒挑战参赛地址)登陆后查看评分记录以及错误报告

## 考察点

- 网络
  - `POST`，`GET`
  - `HTML` 文档解析
- 命令行操作
  - `Git`
  - `SSH Key`
  - `Scp`
- Python 编程
  - `Flask` 基本使用
  - `PIL` 图片处理
  - `JSON`序列化与反序列化
  - `Base64`、`md5`编码使用
  - 字符串处理
  - 文件操作

## 评分方式

- 参赛者在[参赛页面](https://pandora.sumsc.xin)上提交自己的 Github Repo（HTTPS Checkout URL，形如：`https://github.com/<YOUR_USERNAME>/<YOUR_REPO>.git`），使用 PyTest 进行对参赛者提交的答案进行测试，按测试结果进行评分。

- 评分测试机每天运行一次，用户可以在参赛页面上查看自己的成绩。

- 函数中的评分点均以`TODO`的形式标出，并有一些与流程相关的评分点。

## SSH Key 相关


参赛者需要将自己的SSH公钥发送至`https://pandora.sumsc.xin/ssh`

### 注意：
- 加密方式必须是rsa
- comment请设置成自己的学号

上述注意点是判分依据，请务必遵守

发送格式如下：

```json
Request Method: POST
JSON 格式
{
    "key":"<YOUR_SSH_PUB_KEY>"
}
```

如果成功服务器会返回一个带有 "Success"的消息。

如果你到成功进行到这一步，那么你可以使用刚才上传的公钥对应的私钥登录地址为`pandora.sumsc.xin`的服务器上的`pandora`用户了，等你成功登陆后会有更多的提示消息在那等着你。

***请各位选手注意严格遵守[《魔盒挑战参赛协议》](/pandora/2/license.html)***

活动最终解释权归**苏州大学微软学生俱乐部**所有
