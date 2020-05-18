# MarkDown 基本语法
## 副标题
### 三级标题
普通文字
**加粗**
*斜体*
***这是斜体加粗的文字***
~~这是加删除线的文字~~
>这是引用的内容
>>这是引用的内容

第一行<br>第二行


分割线标题
---
上面是分割线

![图片alt]( /avatar.png "title")

[超链接名](http://www.baidu.com "超链接title")
<a href="超链接地址" target="_blank">用a标签代替超链接MD</a>

无序列表
---
* 你好
   * 三个空格就是嵌套
   * 就是这样
      * 再来
* 你好

有序列表
---
1. 好的
   1. 嵌套
2. 你好

表格
---
姓名|技能|排行
--|:--:|--:
刘备|哭|大哥
关羽|打|二哥
张飞|骂|三弟

单行代码
---
```html
<div>123</div>
```
代码块
---
```js
import Vue from 'vue';
import Vuex from 'vuex';

import iconfont from './icons' // 引入一个模块 icons

Vue.use(Vuex);

const store = () => new Vuex.Store({

  state: { // 全局state, 无命名空间
    counter: 0
  },
  mutations: {  // 全局mutation, 无命名空间
    increment(state) {
      state.counter++;
    }
  },
  modules: {  // 注册模块
    iconfont  // 缩写，  iconfont: iconfont
  }
});

export default store;
```

