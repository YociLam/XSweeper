<div align="right">

[English](README.md) | [简体中文](README.zh-CN.md)

</div>

# X Sweeper

<p align="center">
  <img src="assets/icon.png" width="96" alt="X Sweeper">
</p>

Tampermonkey script that cleans your own posts on the X timeline already open. Choose type, time, and keywords. The panel sits in the sidebar, can collapse, and can be dragged out. Its language follows the X page.

## Install

1. Install [Tampermonkey](https://www.tampermonkey.net/).
2. Open https://raw.githubusercontent.com/YociLam/XSweeper/main/x-sweeper.user.js
3. Open x.com and use the panel.

The first install has to come from the link above. After that, opening X checks for a newer version and Tampermonkey shows a notification. The same check is in the Tampermonkey menu for this script. Click the notification to install. Greasy Fork is not required.

If an older script such as “删自己的旧帖” or “时间线清理” is still installed, disable or remove it and keep only this one.

## Time

Presets: any time, last 7 days, last 30 days, last year, older than 1 year, 3 years, 5 years, or 10 years.

Custom dates are typed, for example `2026-10-05`. `/` and `.` also work. The start and end default to today.
