/*
 * @Author: Heyunqiang 
 * @Date: 2019-04-30 23:01:58 
 * @Last Modified by: Heyunqiang
 * @Last Modified time: 2019-04-30 23:06:49
 */


 function Tools(){
     var money  = 200;
     function getMoney(){
        money += 10;
        console.log("收入一笔，总资产"+money+"元");
     };
     function costMoney(){
        money -= 20;
        console.log("消费一笔，总资产"+money+"元");
     };
     return {
        getMoney,
        costMoney
     }
 }