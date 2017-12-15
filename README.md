# WebWorker
  javascript是单线程脚本，但H5新增了WebWorker API支持前端开发人员尝试多线程开发，可以解决前端因为计算大且复杂的代码导致的性能问题。

### 简单实用

1、Node模拟本地服务器 本地配置node环境，在控制台输入命令`node ./http.js`,看见'服务器开启成功'表示成功。
2、浏览器打开 http://localhost:3000/index.html 观察控制台

### 误区

1、必须在服务器环境下才能运行此程序，因为子线程要依赖后端去运行，不然会导致下面错误
![error](C:\Users\admin\Desktop\TIM图片20171215153144.png)

### 思考

1、复杂繁琐的计算直接依赖后端去做就行了，为何还要webworker去模拟多线程？是否还有其他适用场景？