//Day-1:->
//Module-12
//1-> Variable
// var a;
// let bananaPrice = 10;
// console.log(bananaPrice);

//Data Types
//String->
// var name="Sohanur";
// console.log(typeof name);
// var name=`String name`;
// console.log(name.toLowerCase());
// console.log(name.toUpperCase());
// console.log(name.indexOf('name'));
// console.log(name.split(" "));
// var n1=5;
// var n2="15.5";
// n2=parseFloat(n2);
// console.log("Sum of two number: ",(n1+n2));

//Mathematical Operations->
// var n1=-234;
// console.log(Math.abs(n1));

// var n2=4.5345;
// console.log(Math.round(n2));


// var n2=4.5345;
// console.log(Math.floor(n2));


// var n2=4.5345;
// console.log(Math.ceil(n2));


//Conditions->
// var n=prompt();
// if(n>9 && n<15){
//     document.write("Condition false");

// }

// else{
//     document.write("Condition false");
// }
// var date=new Date();
// console.log(date);


//Day-2:->
//Module-13

//Array in js->
var age=[21,23,22];
// var index=age.indexOf(23);
// console.log(index);
// age.push(25);
// console.log(age);
// console.log(age.length);
// age.pop();
// console.log(age);
// age.shift();
// console.log(age);
// age.unshift(20,24);
// console.log(age);

//Loops in js->
// var n=1
// while(n<4){
//     console.log("loops in js");
//     n++;
// }

// //for loop->
// for(var i=0;i<n;i++){
//     console.log(i);
// }


// //Function in js->
// function fun(){
//     console.log("learn function");
// }

// fun();


//Object in js->
// var student={
//     id:106,Name:"Sohanur", Department:"cse"
// }
// console.log(student);
// var phoneNo=student["Name"];
// student.Name="Nur";
// console.log(student);

//Day-3
//Module-14->
// function fun(inch){
//     var feet=inch/12;
//     return feet;
// }


// console.log(fun(156));
// console.log(fun(112));


//Variable,Let,constants
// let name='Sohanur';
// const PI=3.1416;
// // PI=9;
// console.log(name);
// console.log(PI);


//Leaf year or not
// function isLeafyear(year){
    
// }

// //factorial of a number->
// function fact(num){
//     let fact=1;
// for(let i=1;i<=5;i++){
//     fact=fact*i;
// }
// return fact;
// }

// console.log(fact(5));

//factorial using recursion->
// function factorial(n){
//     if(n==0){
//         return 1;
//     }
//     else{
//         return n*factorial(n-1);
//     }
// }
// console.log(factorial(5));


//Fibonacci number->
// function prime(number){
//     for(let i=2;i<number;i++){
//         if(number%i==0){
//             console.log("not prime numeber");
//             return;
//         }

//     }
//     console.log("prime number");
// }
//prime(5);   


//Swap of two number
// let a=5,b=9;
// let temp;
// console.log("Before swap a=",a,"b=",b);
// temp=a;
// a=b;
// b=temp;
// console.log("After swap a=",a,"b=",b);

// var number=3.4532;
// console.log(Math.floor(number));
// console.log(Math.ceil(number));
// console.log(Math.round(number));
// console.log(parseInt(Math.random()*10));



//find max of three number
// var a=9,b=4,c=12;
// var max=Math.max(a,b,c);
// console.log(max);

//Sum of all number in aarray
// let array=[1,2,3,4,5];
// var sum=0;
// for(let i=0;i<array.length;i++){
//     sum=sum+array[i];
// }
// console.log("sum of array is: ",sum);


//Count the number of words->
// var String="Hello I am Md. Sohanur Rahman";
// let count=0;
// for(let i=0;i<String.length;i++){
//     if(String[i]==" "){
//         count++;
//     }
// }
// count++;
// console.log(count);



//Day-5
//Module-16->
// let Variable_1=40;
// const constants=3.1416;
// var marks=[12,23,43,45];
// console.log(marks.length," ",marks[2]);
// function fun(){
//     for(let i=0;i<marks.length;i++){
//         console.log(marks[i]);
//     }
// }
// fun()

function sum(n1,n2){
    let sum=n1+n2;
    return sum;
}

console.log(sum(10,20));






