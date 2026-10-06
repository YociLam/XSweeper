<div align="right">

[English](README.md) | [简体中文](README.zh-CN.md)

</div>

# X清道夫

<p align="center">
  <img src="assets/icon.png" width="96" alt="X清道夫">
</p>

油猴脚本。在已经打开的 X 时间线上，按类型、时间和关键词清理自己的帖子。面板跟在侧栏里，可以收起，也可以拖出来。面板语言跟随 X 页面。

## 安装

1. 安装 [Tampermonkey](https://www.tampermonkey.net/)。
2. 打开 https://raw.githubusercontent.com/YociLam/XSweeper/main/x-sweeper.user.js
3. 打开 x.com，使用侧栏里的面板。

第一次要从上面的地址安装。之后打开 X 会检查新版本，有更新时油猴弹出通知，点通知即可安装。油猴菜单里这个脚本下也有「检查更新」。不需要发布到 Greasy Fork。

如果油猴里还留着旧的「删自己的旧帖」或「时间线清理」，先停用或删掉，只保留这一份。

## 时间

预设：不限、最近 7 天、最近 30 天、最近 1 年、1 年前、3 年前、5 年前、10 年前。

选「自定义」后直接输入日期，例如 `2026-10-05`，`/` 和 `.` 也可以。开始和结束默认是今天。
