document.addEventListener('DOMContentLoaded',function(){

    // 返回顶部
    var icon_li = document.querySelectorAll('.icon_li')[0];
    // console.log(icon_li);
    window.onscroll = function(){
        var scrollTop = window.scrollY;
        //当滚动条滚动过的距离大于1000
        //显示返回顶部按钮
        if(scrollTop >= 100){
            icon_li.style.display = "block";
        }else{
            icon_li.style.display = "none";
        }
    }

    //点击回到顶部
    icon_li.onclick = function(){
        var timer = setInterval(function(){
            var scrollTop = window.scrollY;
            var speed = parseInt(scrollTop/5);
            scrollTop -= speed;
            if(speed <= 10){
                clearInterval(timer);
                scrollTop = 0;
            }

            scrollTo(0,scrollTop);
        },30)
    }








    //手机账号验证
     var input01 = document.querySelector('#username');
     var user_box = document.querySelector('.user_box');
     var span01 = user_box.querySelector('span');
     span01.style.display = 'none';
     // console.log(span01);
     var pwd_box = document.querySelector('.pwd_box');
     var span02 = pwd_box.querySelector('span');
     span02.style.display = 'none';
     var input02 = document.querySelector('#pwd');
     // console.log(input02);
     input02.onblur = function(){
        if(!/^[\d]{1}[0-9a-z_]{2-10}$/gi){
            alert('输入信息错误');
        }
     }







})
