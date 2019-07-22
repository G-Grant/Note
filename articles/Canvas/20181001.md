---
title: Canvas学习笔记（一）
date: 2018-04-24 14:14:45
tags:
---

# 什么是 Canvas

`Canvas` 是一个可以使用脚本（通常为 `JavaScript`）来绘制图形的 `HTML` 元素。

# 直线

`moveTo` 把笔触移到某一点，`lineTo` 绘制一条从当前位置到指定 (x, y) 的直线

```js
ctx.moveTo(0, 0);
ctx.lineTo(100, 100);
ctx.stroke();
```

# 矩形

画矩形使用 `fillRect` 或 `strokeRect` 方法，前一个画实心矩形，后一个画空心矩形

```js
ctx.beginPath();
ctx.fillStyle = '#000';
ctx.fillRect(110, 0, 100, 100);
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = '#F00';
ctx.strokeRect(0, 110, 100, 100);
ctx.closePath();
```

# 圆或圆弧

画圆或圆弧使用 `arc` 方法，此方法接收 6 个参数，分别为 横坐标, 纵坐标, 半径, 开始弧度, 结束弧度, 是否逆时针。

> 弧的圆形的三点钟方向是 0 度

```js
// 执行以下 2 段代码，可以清晰看清 0 度在哪里
ctx.beginPath();
ctx.arc(160, 160, 50, 0, 0.5 * Math.PI, false);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(160, 160, 50, 0, 0.5 * Math.PI, true);
ctx.fillStyle = '#F00';
ctx.fill();
ctx.closePath();
```

# 贝塞尔曲线

贝塞尔曲线主要用来绘制复杂有规律的图形，贝塞尔曲线分为二次和三次贝塞尔曲线。

```js
// 二次贝塞尔曲线
ctx.beginPath();
ctx.moveTo(220, 220);
ctx.quadraticCurveTo(245, 300, 300, 300);
ctx.stroke();
ctx.closePath();
// 三次贝塞尔曲线
ctx.beginPath();
ctx.moveTo(0, 310);
ctx.bezierCurveTo(50, 275, 75, 375, 100, 400);
ctx.stroke();
ctx.closePath();
```