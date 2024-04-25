let arr = [
    {
        "userId" : 1,
        "id" : 1 ,
        "title" : "fgeafg",
        "completed" : false
    },
    {
        "userId" : 1,
        "id" : 2 ,
        "title" : "fgeafg",
        "completed" : false
    },
    {
        "userId" : 1,
        "id" : 3 ,
        "title" : "fgeafg",
        "completed" : false
    },
    {
        "userId" : 1,
        "id" : 4 ,
        "title" : "fgeafg",
        "completed" : true
    },
    {
        "userId" : 1,
        "id" : 5 ,
        "title" : "fgeafg",
        "completed" : false
    },
    {
        "userId" : 1,
        "id" : 6 ,
        "title" : "fgeafg",
        "completed" : false
    },
    {
        "userId" : 1,
        "id" : 7 ,
        "title" : "fgeafg",
        "completed" : true
    },
    {
        "userId" : 1,
        "id" : 8 ,
        "title" : "fgeafg",
        "completed" : true
    },
    {
        "userId" : 1,
        "id" : 9 ,
        "title" : "fgeafg",
        "completed" : false
    },
    {
        "userId" : 1,
        "id" : 10 ,
        "title" : "fgeafg",
        "completed" : true
    }

]

let a = {
    count :0 ,
    arr : []
}
let b = {
    count :0 ,
    arr : []
}


for (let item of arr) {
    if (item.completed) {
        b.arr.push(item);
        b.count++;
    } else {
        a.arr.push(item);
        a.count++;
    }
}
console.log(
    a,b
    );




let pwd  = prompt('password?')
let attemp = 3
do {
    pwd  =  +prompt('password?')
    if (pwd !==7777 ) {
        alert(attemp--)
    }  else if (attemp <=0){
        prompt('dont write')
    }
} while (pwd !== 7777 && attemp > 0  ) {
    alert('good')
} 
if (pwd ===7777) {
    alert('ggood')
 } else {
    alert('no attemp')
 }
