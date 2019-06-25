## 前言

一直想学习 React 源码，终于今天看完了 ReactChildren 的源码，特来阐述下学到的知识。写这篇文章，是受到 [剖析 React 源码：先热个身](https://juejin.im/post/5cbae9a8e51d456e2809fba3) 的启发，希望这篇文章可以带来不一样的体验。

## 正文

打开 `ReactChildren.js` 文件内部暴露出下面几个方法。

```js
export {
  forEachChildren as forEach,
  mapChildren as map,
  countChildren as count,
  onlyChild as only,
  toArray,
};
```

### forEachChildren

1. 判断 children 是否为 null，如果是，则 return children
2. 通过调用 getPooledTraverseContext 方法获取 traverseContext 对象，此方法是维护一个对象池，每次都会先去对象池内取对象，如果对象池没有对象，则新建，否则取出最后一个对象，修改属性值再使用。

    ```js
    function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
      if (traverseContextPool.length) {
        const traverseContext = traverseContextPool.pop();
        traverseContext.result = mapResult;
        traverseContext.keyPrefix = keyPrefix;
        traverseContext.func = mapFunction;
        traverseContext.context = mapContext;
        traverseContext.count = 0;
        return traverseContext;
      } else {
        return {
          result: mapResult,
          keyPrefix: keyPrefix,
          func: mapFunction,
          context: mapContext,
          count: 0,
        };
      }
    }
    ```

## 附录

### 对象池

对象池概念可以从**js 设计模式 - 享元模式**说起。

> 享元模式
> 
> 享元模式是一种软件设计模式，核心是使用共享物件，用来尽可能减少内存使用量以及分享咨询给尽可能多的相似物件；它适用于当大量物件只是因为重复因而导致使用大量内存的情景。


