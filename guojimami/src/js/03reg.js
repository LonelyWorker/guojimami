document.addEventListener('DOMContentLoaded',function(){

    // 表单焦点操作
    var input01 = document.querySelectorAll('input')[0];
    // console.log(input01.value);
    if(input01.value == ''){
        input01.value = '请输入正确的手机号';
    }
    // if(input01.onfocus){
    //     input01.value = "";
    //     input01.style.border = "1px solid skyblue";

    // }
    input01.onfocus = show;
    


    function show(){
        var e = e || window.event;
        // console.log(e);
        if(this.value !== ''){
            this.style.border = '1px solid skyblue';
            this.value = '';
        }else{
            console.log('234');
        }
    }
    // show();



    //侧边小图标显示信息的设置


})