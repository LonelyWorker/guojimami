    
    //获取轮播图
    document.addEventListener('DOMContentLoaded',function(){
        (function(){
        //获取轮播图总框
         let banner = document.querySelector('.banner');
         // console.log(banner);
         
         //获取banner下的banner_tab
         let banner_tab = banner.children[0];
         // console.log(banner_tab);
        
        //复制第一张图片到最后
        banner_tab.appendChild(banner_tab.children[0].cloneNode(true));
        // console.log(banner_tab.children[0]);

         //获取banner_tab下的照片数量
         let len = banner_tab.children.length;
         // console.log(len);
         let index = 0;
         

         //生成下标分页符
         let page = document.createElement('div');
         page.className = 'page';
         for(var i = 1;i < len;i++){
            let span = document.createElement('span');
            span.innerText = i;
            if(i === 1){
                span.classList.add('active');
            }


            page.appendChild(span);
         }


         banner.appendChild(page);
         console.log( banner.appendChild(page));





         //获取ul总和(宽高)
         //定义一个装宽高的容器
         var imgWidth;
         banner_tab.querySelector('img').onload = function(){
                imgWidth = this.offsetWidth;
                console.log(this);
                // console.log(imgWidth);
                



                // 1)设置ul宽度，达到水平排列的效果
                banner_tab.style.width = imgWidth * len + 'px';
         }







         //设置定时器自动滚动(定时器)
            let timer = setInterval(autoPlay,3000);


            //鼠标移入
            banner.onmouseenter = function(){
                clearInterval(timer);
            }

            //鼠标移出
            banner.onmouseleave = function(){
                timer = setInterval(autoPlay,3000);
            }

            //点击分页
            banner.onclick = e=>{
                if(e.target.parentNode.className === 'page'){
                    index = e.target.innerText - 1;

                    show();
                }

            }

            function autoPlay(){
                 index++;
                // if(index >= len){
                //     index = 0;
                // }
               show();
            }


            function show(){
                 if(index >= len){//4
                    banner_tab.style.left = 0;
                    index = 1;
                }

                //定义滚动的长度
                let target = -1200 * index;

                banner_tab.style.left = target + 'px';
                // console.log(banner_tab);



                // 页面高亮
                for(let i = 0;i < len-1;i++){
                    page.children[i].className = '';
                }
                if(index === len-1){
                    page.children[0].className = 'active';
                }else{
                    page.children[index].className = 'active';
                }
            }


})();
    (function(){
            var falsh = document.querySelector('.falsh_sale');
            console.log(falsh);
            var limit_ul = document.createElement('ul');
             var limit_ul = document.createElement('ul');
                // console.log(limit_tab)
            limit_ul.classList.add('limit_tab');
             // console.log(limit_ul);
             limit_ul.style.padding = '0px';
             limit_ul.style.margin = '0px';
          
            function limit(n){
                for(var i = 1; i < n; i++){ 
                    // 限时特卖li标签
                    var limit_li = document.createElement('li');
                    limit_li.className = 'limit_li';

                    //限时特卖打折总框
                    var discount = document.createElement('div');
                    discount.classList.add('discount');
                    discount.className = 'discount';
                    limit_li.appendChild(discount);







                    if(i % 2 === 0){
                        limit_li.style.margin = '10px 0 20px 0px';

                    }else{
                        limit_li.style.margin = '10px 30px 20px 0px';
                    }
                    // console.log(limit_li:nthChild(2n));
                    // limit_li:nthChild(2n).style.marginRight = '0';
                    limit_ul.appendChild(limit_li);
                    falsh.appendChild(limit_ul);
                    // console.log(limit_li)

                }
            }
            limit(31);
})();
        });




      
        
       