废话少说，先奉上一道美味的大餐。

```js
function bar(){
    console.log(this);
}
var obj1 = {
    foo1: bar,
    foo2: function(){
        bar();
    },
    foo3: bar.bind(this),
    foo4: bar.bind(obj1)
}
obj1.foo1()
obj1.foo2()
obj1.foo3()
obj1.foo4()
var obj2 = {
    name: 'obj2',
    foo5: bar.bind(obj2.name)
}
obj2.foo5()
```

看到上面题目，如果心里有答案的，此文就不用再看啦。如果回答错误的话，建议还是需要看看的。上面题目的正确答案是：

```js
obj1
window
window
window
Uncaught TypeError 报错
```

## 定义

我们先来看下 this 在 MDN 上的定义。在绝大多数情况下，函数的调用方式决定了this的值。this 不能在执行期间被赋值，并且在每次函数被调用时 this 的值也可能会不同。ES5 引入了 bind 方法来设置函数的 this 值，而不用考虑函数如何被调用的，ES2015 引入了支持 this 词法解析的箭头函数（它在闭合的执行环境内设置 this 的值）。

## 判断依据

如果要判断一个运行中函数的 this 的绑定，就需要找到这个函数的直接调用位置。找到之后就可以顺序应用下面四条规则来判断 this 的绑定对象。

1.由 new 调用？绑定到新创建的对象。
2.由 call 或者 apply ( 或者 bind ) 调用？绑定到指定的对象。
3.由上下文对象调用？绑定到那个上下文对象。
4.默认：在严格模式下绑定到 undefined，否则绑定到全局对象。
5.箭头函数除外，它是根据当前的词法作用域来决定 this。箭头函数会继承外层函数调用的 this 绑定。

