# X Sweeper / X清道夫

<p align="center">
  <img src="assets/icon.png" width="96" alt="X Sweeper">
</p>

Tampermonkey script for cleaning posts on the X timeline that is already open.

在已经打开的 X 时间线上，按类型、时间和关键词清理帖子。界面跟在侧栏里，可以收起，也可以拖出来。面板语言默认英文，可在标题栏改成中文，不跟随 X 页面语言。

## Install / 安装

1. Install [Tampermonkey](https://www.tampermonkey.net/).
2. Open the install link: https://raw.githubusercontent.com/YociLam/XSweeper/main/x-sweeper.user.js
3. Open x.com and use the X Sweeper / X清道夫 panel.

油猴会按自己的检查间隔对比 `@version`。第一次要从上面的地址安装，之后版本号升高时会提示更新。不需要发布到 Greasy Fork。

如果油猴里还留着旧的「删自己的旧帖」或「时间线清理」，先停用或删掉，只保留这一份。

## Time / 时间

预设：不限、最近 7 天、最近 30 天、最近 1 年、1 年前、3 年前、5 年前、10 年前。

选「自定义」后可以直接输入日期，例如 `2026-10-05`，`/` 和 `.` 也可以。开始和结束默认是今天。

The preset list covers any time, the last 7 days, 30 days, and 1 year, plus anything older than 1, 3, 5, or 10 years. Custom dates are typed, for example `2026-10-05`, and default to today.
