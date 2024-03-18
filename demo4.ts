/*var num:number=2;
var num2:number=1;

while(num2<11)
{
    console.log(num2*num);
    num2++;

}
*/


/* let rows: number = 5;
let i: number = 1;

while (i <= rows) {
    let j: number = 1;
    let stars: string = '';

    while (j <= i) {
        stars += '* ';
        j++;
    }

    console.log(stars);
    i++;
}
*/



/*
 var n:number=10;
do{
    console.log(n);
    n--;

}while(n>=0)


*/

/*
var n:number=1;
do{
    if(n%2==0){
        console.log(n);
        n++;

    }
 n++;
    
}while(n<=101);
*/

/*
var num:number=5;
var i:number;
var factorial=1;

for (i=num;i>=1;i--)
{
    factorial*=i;

}
console.log(factorial)
*/

/*
let num: number = 1231;

let Num1: number = num;
let Num2: number = 0;

while (num > 0) {
    let digit: number = num % 10;
    Num2 = Num2 * 10 + digit;
    num = Math.floor(num / 10);
}

if (Num1 === Num2) {
    console.log(`${Num1} is a palindrome.`);
} else {
    console.log(`${Num1} is not a palindrome.`);
}
*/


/*
var j:any;
var n:any="a b c"  //to print everything on ther next line
for(j in n)
{
    console.log(n[j])
}
*/

/*
var i:number =1;
while(i<=100)
{
    if(i% 5==0)
    {
        console.log(+i) //first multiple of 5 between 1 to 100 is printed
        break // exit the loop if the first multiple is found
    }
    i++
}
*/

/*
var num:number=0
var count:number=0;

for(num=0;num<=20;num++)
{
    if(num%2==0)
    {
        continue
    }
    count++
}
console.log(+count)           //outputs 10

*/


   /* function disp_details(id:number,name:string,mail_id?:string):
    void 
    {
        console.log("ID:", id);
        console.log("Name", name);

        if(mail_id!==undefined)
        console.log("Email_ID",mail_id);


    }
    disp_details(123,"John");
    disp_details(111,"mary","mary@xyz.com"); 


*/

/*
function addNumbers(...nums:number[])
{
    var i;
    var sum:number=0;

    for(i=0;i<nums.length;i++)
    {
        sum=sum+nums[i];

    }
    console.log(sum)

}
addNumbers(1,2,3)
addNumbers(10,10,10,10,10)
*/

/*
//Default Prameters
function calculate_discount(price:number,rate:number=0.50)
{
    var discount=price*rate;
    console.log("Discount Amount:",discount);
    
}
calculate_discount(1000)
calculate_discount(1000,0.30)
*/


//Anonymous Function
/*
var msg=function(){
    return "Hello World";

}
console.log(msg())
*/

//Length Function  provides the length of the string use d for palindrome
/*
var uname=new String('Hello World')
console.log(uname)
console.log("Length"+uname.length)
*/

//Array
/* 
var alphas:string[];
alphas=["1","2","3","4"]
console.log(alphas[0]);
console.log(alphas[1]);
*/


