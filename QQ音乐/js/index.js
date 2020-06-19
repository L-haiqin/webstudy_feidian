window.addEventListener('load',function () {
    // 1.获取元素
    var leftBtn = document.querySelector('.leftBtn');
    var rightBtn = document.querySelector('.rightBtn');
    var recSong = document.querySelector('.recommend_song');
    var playlist = document.querySelector('.playlist');
    var playlistWidth = playlist.offsetWidth;
    // 2.鼠标经过recommend_song就显示隐藏的左右按钮
    recSong.addEventListener('mouseenter',function () {
        leftBtn.style.display = 'block';
        rightBtn.style.display = 'block';
        // clearInterval(timer);
        // timer = null; // 清除定时器变量
    });
    recSong.addEventListener('mouseleave',function () {
        leftBtn.style.display = 'none';
        rightBtn.style.display = 'none';
        // timer = setInterval(function () {
        //     // 手动调用右侧按钮点击事件
        //     rightBtn.click();
        // },2000)
    });

    // 3.动态生成小圆圈
    var ul = playlist.querySelector('ul');
    var switch0 = recSong.querySelector('.switch');
    var switchUl = switch0.querySelector('ul');
    // console.log(ul.children.length);
    for(var i = 0; i < ul.children.length/5; i++){
        // 创建一个小li
        var li = document.createElement('li');
        // 记录当前小圆圈的索引号，通过自定义属性来做
        li.setAttribute('index',1);
        // 把小li插入到switch ul里面
        switchUl.appendChild(li);
        // 4.小圆圈的排他思想 在生成小圆圈的同时直接绑定点击事件
        li.addEventListener('click',function () {
            // 干掉所有人 把所有的小li清除current 类名
            for (var i = 0; i<switchUl.children.length; i++){
                switchUl.children[i].className = '';
            }
            // 留下我自己 当前的小li设置current类名
            this.className = 'current';
            // 5.点击小圆圈，移动图片，移动的是ul
            // ul的移动距离：小圆圈的索引号 * ul的宽度
            // 当我们点击某个小li时，就拿到当前小li的索引号
            var index = this.getAttribute('index');
            // 当我们点击了某个小li，就要把这个li的索引号给num
            num  = index;
            // 当我们点击了某个小li，就要把这个li的索引号给circle
            circle = index;
            // console.log(playlistWidth);
            animate(ul,-index * playlistWidth);
        })
    }
    // 把switch ul里面的第一个小li设置类名为 current
    switchUl.children[0].className = 'current';
    // 6.前五张图片（li）放在ul最后面
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    var second = ul.children[1].cloneNode(true);
    ul.appendChild(second);
    var three = ul.children[2].cloneNode(true);
    ul.appendChild(three);
    var four = ul.children[3].cloneNode(true);
    ul.appendChild(four);
    var five = ul.children[4].cloneNode(true);
    ul.appendChild(five);
    //7.点击右侧按钮，图片滚动一张
    var num = 0;
    // circle 控制小圆圈的播放
    var circle = 0;

    rightBtn.addEventListener('click',function () {
        // 如果走到了最后复制的一张图片，此时我们的ul要快速复原left为0
        if (num === ul.children.length/5 - 1){
            ul.style.left = 0;
            num = 0;
        }
        num++;
        animate(ul,-num * playlistWidth);
        // 8.点击右侧按钮，小圆圈跟随一起变化
        circle++;
        if (circle === switchUl.children.length){
            circle = 0;  //防止克隆的最后一份图片
        }
        circleChange();
    });

    // 左侧按钮
    leftBtn.addEventListener('click',function () {
        if (num === 0){
            num = ul.children.length/5 - 1;
            ul.style.left = -num * playlistWidth + px;
        }
        num --; // 修改num
        animate(ul,-num * playlistWidth)
        // 8.点击右侧按钮，小圆圈跟随一起变化
        circle --;
        if (circle < 0){
            circle = switchUl.children.length - 1;  //防止克隆的最后一份图片
        }
        // 可以用三元表达式 circle = circle < 0 ? switchUl.children.length - 1 : circle;
        // 调用函数
        circleChange();
    });

    function circleChange() {
        // 先清除其余小圆圈的current类名
        for (var i= 0; i < switchUl.children.length; i++ ){
            switchUl.children[i].className = '';
        }
        // 留下当前的小圆圈的current类名
        switchUl.children[circle].className = 'current';
    }
    // 10.自动播放轮播图
    // var timer = setInterval(function () {
    //     // 手动调用右侧按钮点击事件
    //     rightBtn.click();
    // },2000)
} );