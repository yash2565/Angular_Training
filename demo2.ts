
let num1:number=2; //global Variable

class Calculation{

    add():void{
    let num2:number=1;  //local variable
    let addition:number=0;
    addition=num1+num2;
    console.log(addition);
    }
      
    sub():void{
        let num2:number=1;//local variable
        let subtract:number=0;
        subtract=num1-num2;
        console.log(subtract);
        }

        mult():void{
            let num2:number=1;//local variable
            let multiply:number=0;
            multiply=num1*num2;
            console.log(multiply);
            }


            div():void{
                let num2:number=1; //local variable
                let divide:number=0;
                divide=num1/num2;
                console.log(divide);
                }






}
var obj=new Calculation();
obj.add();

var obj=new Calculation();
obj.sub();

var obj=new Calculation();
obj.mult();

var obj=new Calculation();
obj.div();
