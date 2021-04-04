
##### vuex使用

1. 在对应的页面，创建对应的mudule，位置在store/modules下，可以将actions、state、mutation拆分出去

2. action用于派发请求，即调用定义的request方法，发送请求，拿到相对应的状态之后，派发到对应的mutation中

   ```js
   // 格式参考home中例子
   getUserInfo(
   	req().then(res=>{
           commit('xxx',payload)
       })
   )
   ```

3. mutation用于对state状态进行更新，action中有异步，但是mutation中都是同步的

4. state即状态，状态发生变化，驱动视图更新

5. mapactions、mapStates，用于将store中action和state传递到组件中，语法糖

可以切到 gmc-dev 分支 commit  