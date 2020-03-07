window.addEventListener('load',function() {
//    获取元素
    var arrow_l = document.querySelector('.arrow-l');
    var arrow_r = document.querySelector('.arrow-r');
    var focus = document.querySelector('.focus');
    var focusWidth = focus.offsetWidth;
    focus.addEventListener('mouseenter',function(){
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
    })
    focus.addEventListener('mouseleave',function(){
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
    })
    // 动态生成小圆圈 根据图片的张数来生成几个小圆圈
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.circle');
    for(var i = 0; i < ul.children.length;i++){
        // 创建小li
        var li =this.document.createElement('li');
        // 记录当前小圆圈的索引号 通过自定义属性来做
        li.setAttribute('index',i);
        // 把li插入到ol里面
        ol.appendChild(li);
        //排他思想 在生成小圆圈的同时直接绑定点击事件
        li.addEventListener('click',function(){
            //干掉所有人
        for(var i=0;i < ol.children.length;i++){
            ol.children[i].className = '';
        }
        // 留下我自己  当前的li 设置current
        this.className = 'current';
        // 点击小圆圈，移动图片
        //ul的移动距离 小圆圈的索引号 * 图片的宽度 负值
        //点击了某个li 拿到当前li的索引号
        var index = this.getAttribute('index');
        // 当点击了某个小li 就把这个li的索引号给 num
        num = index;
         // 当点击了某个小li 就把这个li的索引号给circle
        circle = index;
        animate(ul,-index * focusWidth)
        })

    }
    // 把ol里面的第一个li设置类名为current
    ol.children[0].className = 'current';
    // 6.克隆第一张图片(li)放在ul 最后面
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    // 7.点击右侧按钮，图片滚动一张
    var num = 0;
    //控制小圆圈的播放
    var circle = 0;
    arrow_r.addEventListener('click',function(){
        // 如果走到了最后复制的图片 ul 要快速复原 left 为0
        if(num == ul.children.length-1){
            ul.style.left = 0;
            num = 0;
        }
        num++;
        animate(ul,-num * focusWidth);
        // 8.点击右侧按钮，小圆圈跟随一起变化 可以再声明一个变量控制小圆圈的播放
        circle++;
        // 如果circle==4说明走到最后一张克隆的图片
        if(circle == ol.children.length){
            circle = 0;
        }
        circleChange();
    })
     // 9.点击右侧按钮，图片滚动一张
     var num = 0;
     //控制小圆圈的播放
     var circle = 0;
     arrow_l.addEventListener('click',function(){
         // 如果走到了第一张的图片 ul 要快速复原 left 为0
         if(num == 0){
            num =ul.children.length-1;
            ul.style.left = -num * focusWidth+'px';
            
         }
         num--;
         animate(ul,-num * focusWidth);
         // 8.点击右侧按钮，小圆圈跟随一起变化 可以再声明一个变量控制小圆圈的播放
         circle--;
         // 如果circle<0说明走到第一张图片,则小圆圈要改为第4个小圆圈
        //  if(circle <0){
        //      circle = ol.children.length - 1;
        //  }
        circle= circle<0?ol.children.length - 1:circle;
        // 调用函数
         circleChange();
     })
     function circleChange(){
            // 先清除其余小圆圈的current类名
            for(var i = 0;i<ol.children.length;i++){
                ol.children[i].className=''
            }
            //留下当前的小圆圈的current类名 
            ol.children[circle].className = 'current';
     }
})