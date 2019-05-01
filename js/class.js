/*
 * @Author: Heyunqiang 
 * @Date: 2019-04-30 22:20:38 
 * @Last Modified by: Heyunqiang
 * @Last Modified time: 2019-04-30 23:01:33
 */

function Student(options){
    this._init(options);
}

Student.prototype = {
    _init: function(){},
    // 方法
    render(){}
}

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    say(){
        return this.name +"--"+ this.age;
    }
}


(function(){
    // 小闭包
    // 封闭作用域
    // 匿名空间、
})()