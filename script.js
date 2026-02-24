"use strict";
// console.log("Hello");
// //a=10;
// //datatype variable name
// //int a, b
// let a:number;
// a=10;
// //int a=10;
// let b:number=20;
// //a="Test";
// let c=10;
//c="Test";
// let d;
// d=10;
// d="test";
//add(int x, int y);
// function add(x:number,y:number):number{
//     let result=x+y;
//     console.log(result);
//     return result;
// }
// let y=add(10,20);
// console.log(y);
// console.log(a);
// let arr=[1,2,3,"Code"];
// let arr1:number[]=[1,2,3];
// arr1.forEach((item)=>{
//     console.log(item);
// })
//Tuple ->Record ->Fixed lenght array
// let tuple:[number,string]=[1,"Code"];
// console.log(tuple[0]);
// let small=1;
// let medium=2;
// let large=3;
// let data:number=3;
// if(data==small)
//    const enum Size{
//         small=10,
//         medium=20,
//         large
//     }
//     let data1:Size;
//     data1=Size.small;
//     console.log(data1);
//data1=3;
// //optional parameter
// //default parameter
// function add(x:number,y:number=0)
// {
//     //narrowing
//     // if(!y)
//     //     y=0;
//     // if(y==undefined)
//     //     y=0;
//     //y=y||1;
//     let result=x+y;
//     console.log(result);
// }
// //add(20,10);
// add(20);
//objects
//let obj={name:"Test",city:"ABC"};
//console.log(obj);
//obj.city="ABC";//Dynamic keys javascript
//Inline type
// let obj:{name:string,city:string,years?:number}={name:"ABC",city:"Test"};
// //initilize
// obj={"name":"Test",city:"ABC"};
// obj.name="Data";
// obj.years=100;
// let emp1:{id:number,name:string}={id:1,name:"Test"};
// let emp2:{id:number,name:string}={id:1,name:"Test"};
// type Employee={
//     readonly id:number,
//     name:string,
//     display:()=>void
// }
// let emp1:Employee={id:1,name:"Test",display:()=>{}};
// let emp2:Employee={id:2,name:"Test",display:()=>{}};
// emp1.name="Code";
// //emp1.id=20;
// console.log(emp1);
//let empArray:Employee[]=[ {id:1,name:"Test"},{id:2,name:"Tes1"}]
//Number, union
// let data:string | number;
// data="Est";
// data=10;
// function price(weight:number|string)
// {
//     if(typeof weight=="string")
//         return parseInt(weight)*10;
//     else
//     return weight*10;
// }
// console.log(price(5));
// console.log(price('a51Kg2'));
//Intersection 
// type Resizable={
//     resize:()=>void;
// }
// type Draggable={
//     drag:()=>void;
// }
// type UI=Resizable&Draggable;
// let button:UI={
//     resize:()=>{
//     },
//     drag:()=>{
//     }
// }
// let data:10|20|30
// data=20;
// let metric:'cm'|'inch';
// metric='cms';
