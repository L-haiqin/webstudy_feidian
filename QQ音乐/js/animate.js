function animate(obj, target,callback) {
    //定时器setInterval(参数1，参数2)
    // 描述：定时执行 间隔执行
    // 注意：
    // 1.参数1可以是一个匿名函数 也可以是函数名
    // 2.参数2 定时执行的毫秒数

    //obj.timer给不同的元素指定不同的定时器
    //清除原来的定时器，使其只有一个定时器
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        // 缓动动画原理：（目标值-现在的位置）/10 作为每次移动的步长值step
        // 匀速动画原理：step值为一个固定值
        var step = (target - obj.offsetLeft) /10; //Math.ceil取整操作
        step = step > 0 ? Math.ceil(step) : Math.floor(step);  //若步长值step>0, 则Math.ceil取整操作(
        if (obj.offsetLeft === target){
            //停止动画，本质是停止定时器 clearInterval(定时器的变量名)
            clearInterval(timer);
            //回调函数写在定时器结束里面
            if (callback){
                callback();
            }
        }

        obj.style.left = obj.offsetLeft + step + 'px';
        // offsetLeft和style.left的区别：
        // 1，style.left返回的是字符串如28px,offsetLeft返回的是数值28。
        // 2，style.left是读写的，offsetLeft是只读的。所以要改变div的位置，只能修改style.left.
        // 3，element.style.left 只能获得element的行内样式，所以一般写在style或css文件内的left就无法获得。,解决办法是可以用element.offsetLeft来获取。
    },30)
}