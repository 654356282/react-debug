# React18   ConcurrentMode

根节点事件注册 -> createRoot -> createFiberRoot -> listenToAllSupportedEvents

## 事件注册
在`import ReactDOM from 'react-dom'`的时候，就调用了事件插件的注册

`topLevelEventsToReactNames`: 原生事件名称映射成react合成事件名称的map<br/>
`allNativeEvents`: 存储原生事件名称的set

```js
SimpleEventPlugin.registerEvents();
EnterLeaveEventPlugin.registerEvents();
ChangeEventPlugin.registerEvents();
SelectEventPlugin.registerEvents();
BeforeInputEventPlugin.registerEvents();
```

## 疑惑点：
```js
// ???
function markAndClear(name) {
  performance.mark(name);
  performance.clearMarks(name);
}
```