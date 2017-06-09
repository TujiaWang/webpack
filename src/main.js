// spread运算符
// ...必须在对象中使用
// ...后面接的是一个表达式，表达式的值必须是一个对象

let {...obj} = {a:100,b:200,c:400};
console.log(obj);

// 相当于拷贝(浅拷贝)
const animal = {
    category : '鸟类',
    area : '亚洲'
}
function f1(){
    return {
        username : 'vue',
        age : 3
    }
}
// 定义一个新对象
const bird  = {
    ...animal,
    ...obj,
    swing : 2,
    age : 100,
    ...f1()
}
console.log(bird);