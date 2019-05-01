/*
 * @Author: Heyunqiang 
 * @Date: 2019-04-30 22:20:01 
 * @Last Modified by: Heyunqiang
 * @Last Modified time: 2019-04-30 22:35:51
 */

let btns = document.getElementsByTagName("button");

for (var i = 0; i < btns.length; i++) {
    var btn = btns[i];
    btn.onclick = function () {
        console.log("点击了第" + (i + 1) + "个按钮");
    }
}
//  output ==> 点击了第4个按钮  


for (var i = 0; i < btns.length; i++) {
    (function(i){
        var btn = btns[i];
        btn.onclick = function () {
            console.log("点击了第" + (i + 1) + "个按钮");
        }
    })(i);
}

//  output ==> 点击了第i个按钮   OK



/**
 * 如何产生闭包？
 */
