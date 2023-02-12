let stu1 ={
    name : "Mahir",
    surname : "Safarov",
    age:20,
    born: new Date("2002, April, 18")
}
let stu2 ={
    name : "Musa",
    surname : "Afendiyev",
    age:20,
    born: new Date("2002, April, 18")
}
let stu3 ={
    name : "Murad",
    surname : "Jafarov",
    age:19,
    born: new Date("2002, April, 18")
}
let stu4 ={
    name : "Cavid",
    surname : "Basirov",
    age:29,
    born: new Date("2002, April, 18")
}
let stu5 ={
    name : "Fatime",
    surname : "dfdsfsd",
    age:20,
    born: new Date("2002, April, 18")
}

let users = [stu1,stu2,stu3,stu4,stu5]

function filterUser(arr){
    for (const item of arr) {
        for (const key in item) {
            if(key == "age" && item[key]>15){
                console.log(item.surname +" / "+ item.name +" / "+ item.born)
            }
        }
    }
}   

filterUser(users)