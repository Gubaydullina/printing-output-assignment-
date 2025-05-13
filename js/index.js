let a = 3;
let b = 5;
let c = undefined;

let output = `
let a = 3;
let b = 5;
let c = undefined;
-----------------
a+b=${a+b}
a-b=${a-b}
a*b=${a*b}
a/b=${a/b}
a%b=${a%b}
a+=b=${a+=b}
a-=b=${a-=b}
a*=b=${a*=b}
a/=b=${a/=b}
a%=b=${a%=b}
a==b=${a==b}
a!=b=${a!=b}
a>b=${a>b}
a<b=${a<b}
!a&&!c=${!a&&!c}
!a||!c=${!a||!c}`

console.log(output);


//task 2

let name = 'yuliya'
let lname = 'gubaydullina' 
let email = 'guba0005@algonquinlive.com'
let outputn;

output = 'My name is '+ name + ' ' + lname + '. You can contact me at ' + email

alert(output) 
