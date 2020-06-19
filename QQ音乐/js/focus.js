// 精彩推荐
window.addEventListener('load',function () {
    var focus = document.querySelector('.focus');
    var leftBtn = focus.querySelector('.leftBtnB');
    var rightBtn = focus.querySelector('.rightBtnB');
    var focusList = document.querySelector('.focus_list');
    var focusListWidth = focusList.offsetWidth;

    focus.addEventListener('mouseenter',function () {
        leftBtn.style.display = 'block';
        rightBtn.style.display = 'block';
    });
    focus.addEventListener('mouseleave',function () {
        leftBtn.style.display = 'none';
        rightBtn.style.display = 'none';
    });

    var ul = focusList.querySelector('ul');
    var switch0 = focus.querySelector('.switchB');
    var switchUl = switch0.querySelector('ul');

    for (var i = 0; i < ul.children.length / 2; i++){
        // 创建一个小li
        var li = document.createElement('li');
        // index记录当前小圆圈的索引号
        // setAttribute() 方法为一个或一组元素添加指定的属性，并且为其赋指定的值。（主要针对自定义属性）
        li.setAttribute('index',1);
        switchUl.appendChild(li);
        li.addEventListener('click',function () {
            for (var i = 0; i < switchUl.children.length; i++){
                switchUl.children[i].className = '';
            }
            this.className = 'current';
            var index = this.getAttribute('index');
            num = index;
            circle = index;
            // console.log(index*focusListWidth);
            animate(ul,-index*focusListWidth);
        })
    }
    switchUl.children[0].className = 'current';

    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    var second = ul.children[1].cloneNode(true);
    ul.appendChild(second);
    var num = 0;
    var circle = 0;

    function circleChange() {
        for (var i= 0; i < switchUl.children.length; i++ ){
            switchUl.children[i].className = '';
        }
        switchUl.children[circle].className = 'current';
    }

    rightBtn.addEventListener('click',function () {
        if (num === ul.children.length/2 - 1){
            ul.style.left = 0;
            num = 0;
        }
        num++;
        animate(ul,-num * focusListWidth);
        circle++;
        if (circle === switchUl.children.length){
            circle = 0;
        }
        circleChange();
    });

    leftBtn.addEventListener('click',function () {
        if (num === 0){
            num = ul.children.length/2 - 1;
            ul.style.left = -num * focusListWidth + px;
        }
        num --;
        animate(ul,-num * focusListWidth);
        circle --;
        if (circle < 0) {
            circle = switchUl.children.length - 1;  //防止克隆的最后一份图片
        }
        circleChange();
    });
});