// 计算
var onmessage = function(event){
    var result =0,
    num  = event.data;

    for(var i = 1; i < num ;i ++){
        result += i;
    }
    //向主线程返回消息
    postMessage(result);
}

// 测试性能
var fibonacci = function(n) {
    return n<2 ? n : arguments.callee(n-1) + arguments.callee(n-2);
};
this.addEventListener('message', function(event) {
    this.postMessage(fibonacci(event.data))
}, false);
