window.addEventListener('load',function(){
    var preview_img =document.querySelector('.preview_img');
    var mask =document.querySelector('.mask');
    var big = document.querySelector('.big');
    // 1.当鼠标经过 preview_img 就显示和隐藏 mask 遮罩层 和 big 大盒子
    preview_img.addEventListener('mouseover',function(){
        mask.style.display = "block";
        big.style.display = "block" ;
    })
    preview_img.addEventListener('mouseleave',function(){
        mask.style.display = "none";
        big.style.display = "none" ;
    })
    // 2.鼠标移动，黄盒子跟着鼠标走
    preview_img.addEventListener('mousemove',function(e){
        // 1.先计算出鼠标在盒子内的坐标
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        // 2.鼠标位于mask的中心，mask的left和top值 就要减去盒子高度的一半
        // 3.mask移动的距离
        var maskX =  x - mask.offsetWidth / 2 ;
        var maskY =  y -  mask.offsetHeight / 2 ;
        // 4.控制遮罩层跑出去，如果x的坐标小于0，就让它停在0的位置
        //遮罩层的最大移动距离
        var maskMax =  preview_img.offsetWidth - mask.offsetWidth;
        if (maskX <= 0){
            maskX = 0;
        }else if (maskX > maskMax)
        {
            maskX = maskMax;
        }
        if (maskY <= 0){
            maskY = 0;
        }else if (maskY> maskMax)
        {
            maskY = maskMax;
        }
        mask.style.left = maskX + 'px';
        mask.style.top = maskY  + 'px';
        // 大图片的移动距离 = 遮罩层的移动距离 * 大图片的最大移动距离 /遮罩层的最大移动距离
        var bigImg = document.querySelector('.bigImg');
        // 大图片的最大移动距离
        var bigMax =  bigImg.offsetWidth - big.offsetWidth;
        //  大图片的移动距离
        var bigX = maskX * bigMax / maskMax ;
        var bigY = maskY * bigMax / maskMax ;
        bigImg.style.left =- bigX + 'px';
        bigImg.style.top =- bigY + 'px';
    })
})