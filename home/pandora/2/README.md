---
title: "魔盒挑战 - 第二期"
---

## 暂定流程

1. 参赛者在[俱乐部官网](https://sumsc.xin)使用苏州大学统一身份认证进行登录

2. 参赛者同意比赛要求后登记报名

3. 参赛者通过官方提供的 Github 仓库获取赛题（Fork 或直接下载均可）

4. 参赛者完成题目后在提交页面输入自己的repo地址完成提交

5. 每天凌晨在Azure Pipeline上进行自动评分

6. 参赛者可以在[参赛页面](https://pandora.sumsc.xin)查看评分记录

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

参赛者在[参赛页面](https://pandora.sumsc.xin)上提交自己的 Github Repo（HTTPS Checkout URL，形如：`https://github.com/<YOUR_USERNAME>/<YOUR_REPO>.git`），使用 PyTest 进行对参赛者提交的答案进行测试，按测试结果进行评分。

评分测试机每天运行一次，用户可以在参赛页面上查看自己的成绩。

函数中的评分点均以`TODO`的形式标出，并有一些与流程相关的评分点。
