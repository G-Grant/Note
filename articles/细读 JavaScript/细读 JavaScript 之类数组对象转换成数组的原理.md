## 定义

我们来看下 MDN 对 Array.prototype.slice 的定义。 `slice()` 方法返回一个新的数组对象，这一对象是一个由 `begin` 和 `end`（不包括 `end` ）决定的原数组的浅拷贝。原始数组不会被改变。

+ `begin` 如果为负数，表示从原数组中的倒数第几个元素开始，如果省略，则从索引 0 开始。
+ `end` 如果为负数，则表示从数组中倒数第几个元素结束开始提取。如果 `end` 被省略，则一直提取到原数组末尾。如果 `end` 大于数组长度，也会一直提取到原数组末尾。

## 解释

下面是 MDN 上 Array.prototype.slice 的代码，我们可以发现，如果通过 Array.prototype.slice.call(类数组对象) 转换类数组，相当于新建了一个数组，从 0 一直提取到最后一位。

```js
Array.prototype.slice = function (begin, end) {
    end = (typeof end !== 'undefined') ? end : this.length;

    // For array like object we handle it ourselves.
    var i, cloned = [],
        size, len = this.length;

    // Handle negative value for "begin"
    var start = begin || 0;
    start = (start >= 0) ? start : Math.max(0, len + start);

    // Handle negative value for "end"
    var upTo = (typeof end == 'number') ? Math.min(end, len) : len;
    if (end < 0) {
        upTo = len + end;
    }

    // Actual expected size of the slice
    size = upTo - start;

    if (size > 0) {
        cloned = new Array(size);
        if (this.charAt) {
            for (i = 0; i < size; i++) {
                cloned[i] = this.charAt(start + i);
            }
        } else {
            for (i = 0; i < size; i++) {
                cloned[i] = this[start + i];
            }
        }
    }

    return cloned;
};
```
既然我们可以通过 Array.prototype.slice.call() 把一个类数组对象转换成数组，那为什么我们无法通过 `Array.prototype.reverse.call()` 来把字符串反转？

由于字符串是**原始值**类型，它是不可变的。字符串不可变是指字符串的成员函数不会改变其原始值，而是创建并返回一个新的字符串。