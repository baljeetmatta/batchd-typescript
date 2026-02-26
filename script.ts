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
// function drawPoint(x:number,y:number)
// {
//     console.log(x,y);
// }
// function getDistance(x:number,y:number,x1:number,y1:number)
// {
    
// }
//drawPoint(10,20)

// function drawPoint(point:{x:number,y:number})
// {
//     console.log(point.x,point.y)
// }
// function getDistance(point1:{x:number,y:number},point2:{x:number,y:number})
// {

// }


// drawPoint({x:20,y:40})

// type Point={
//     x:number,
//     y:number
// }
// function drawPoint(point:Point)
// {

// }
// function getDistance(point1:Point,point2:Point)
// {

// }
class Point{
//    private _x:number;
//    private _y:number
    constructor(private _x:number=0,private _y:number=0)
    {
        // this._x=_x;
        // this._y=y;
    }
    ini(x:number,y:number)
    {
        this._x=x;
        this._y=y;
    }
    drawPoint()
    {
        //object->caller object->this
        console.log(this._x,this._y)
    }
    getDistance(point:Point)//caller,argument
    {
        //point.getDistance(point1);
        //this->point
        //point-point1

    }
    set x(value:number)
    {
        if(value<0)
            this._x=0;
        else
        this._x=value;
    }
    get x()
    {
        return this._x;
    }
}
// let point:Point;
// point=new Point();

//let point:Point=new Point();
let point=new Point();
//point.x=-40;
//point.drawPoint();
// point.X=30;//set
// console.log(point.X);//get
point.x=20;


//point.setX(-40);
point.drawPoint();

point.ini(20,30);

let point1=new Point(10,20);


point.drawPoint();
point.getDistance(point1);



