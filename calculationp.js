
var calculate_tax= function (){
//creating variables to grab elements from DOM 
    var ms = document.getElementById("monthly").value;
    var m = document.getElementById("month").value;
    var b = document.getElementById("bonus").value;
    var id = document.getElementById("Employee").value;
    let t = document.getElementById("total-tax");

//converting the string into integer    
    var a=parseInt(ms);
    var bo=parseInt(m);
    var c=parseInt(b);
    var d=parseInt(id);

//calculating total amount to be taxed
    var total= (a*bo);  
    var x= total+=c;

//display the total tax to be paid in the webpage
    t.textContent=calculatetax(x);

function calculatetax(amount){

    if (d==1){
        //unmarried conditions
    
        if(amount >= 4000000){
            var tax = (0.36*amount);
        }
        else if(amount >= 2000000){
            var tax = (0.30*amount);
        }
        else if(amount >= 700000){
            var tax = (0.20*amount);
        }
        else if(amount >= 500000){
            var tax = (0.10*amount);  
        }
        else if(amount >= 400000){  
            var tax = (0.01*amount);   
        }

        }
        //married conditions
     else{
        if(amount >= 4000000){
            var tax = (0.36*amount);
        }
        else if(amount >=  2000000){
            var tax = (0.30*amount);   
        }
        else if(amount >= 750000){
            var tax = (0.20*amount);
        }
        else if(amount >= 550000){
            var tax = (0.10*amount);
        }
        else if(amount >= 450000){
            var tax = (0.01*amount);
        }
        

    }
    return tax;

}
   
    
}