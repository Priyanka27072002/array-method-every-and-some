let a=[{
        name:"abi",
        age:21
    },
    {
        name:"priya",
        age:20
    },
    {
        name:"raja",
        age:19
    }
]
document.write(JSON.stringify(a)+"<br>")
let y=a.every((n)=>{
    return n.age>18
})
document.write("age greater than 18 ----->"+y+"<br>")

let arr=[
    {
        rollno:1,
        age:23
    },
    {
        rollno:12,
        age:20
    },
    {
        rollno:2,
        age:19
    }
]
document.write(JSON.stringify(arr)+"<br>")
let x=arr.some((e)=>{
    return e.rollno>10
})

document.write("rollno greater than 10 ----->"+x);