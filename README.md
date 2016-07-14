# webApp02-bugs
  通过一套简单的webapp，把一些基本的坑给踩一遍~~
####【1】布局时避免因border&&padding值的重计算，[box-sizing属性](http://zh.learnlayout.com/box-sizing.html)
```css
*{
   -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
            box-sizing: border-box;
  }
```
####【2】除输入框内阴影,及input[type="submit"]和input[type="reset"]的重渲染
在iOS上，输入框默认有内部阴影，但无法使用 box-shadow 来清除，如果不需要阴影，可以这样关闭：
```css
input,textarea {
    border: 0; /* 方法1 */
    -webkit-appearance: none; /* 方法2 */
}
```
![渲染前](http://7xpwoc.com1.z0.glb.clouddn.com/webapp02-1.png)![渲染后](http://7xpwoc.com1.z0.glb.clouddn.com/webapp02-2.png)
####【3】使用 a标签做按钮及input输入框点击时会出现一个“暗色”的背景，去掉该背景的方法如下
```css
a,button,input,optgroup,select,textarea {
    -webkit-tap-highlight-color:rgba(0,0,0,0); /*去掉a、input和button点击时的蓝色外边框和灰色半透明背景*/
}
```
####【4】禁止长按 a，img 标签长按出现菜单栏
```css
a, img {
    -webkit-touch-callout: none; /*禁止长按链接与图片弹出菜单*/
}
```
####【5】[改变placeholder颜色](https://segmentfault.com/q/1010000000397925)
```css
::-webkit-input-placeholder { /* WebKit browsers */
    color:    #909;
  }
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
   color:    #909;
   opacity:  1;
  }
::-moz-placeholder { /* Mozilla Firefox 19+ */
   color:    #909;
   opacity:  1;
  }
:-ms-input-placeholder { /* Internet Explorer 10+ */
   color:    #909;
  }
  /*opacity: 1;是为了修改FF的默认透明度导致颜色偏差;*/
  ```
