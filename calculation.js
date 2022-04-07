console.log("ziokceh");
let ms = document.getElementById("salary").value;
let m = document.getElementById("no_of_months").value;
let b = document.getElementById("b").value;
let id = document.getElementById("Employee");

console.log(ms);
console.log(m);
console.log(b);
console.log(id);

const total= (ms*m+b);

console.log(total);

var x = function() {
    $("total").value =  calcTaxes();
function calcTaxes(){

    if (id=="Unmarried"){
        //married
        if(total >= 4,00,000){
            tax = (0.01*total);
        }
        else if( total >= 5,00,000){
        tax = (0.10*total);    
        }
        else if(total >= 7,00,000){
        tax = (0.20*total);
        }
        else if(total >= 20,00,000){
            tax = (0.30*total);
        }
        else if(total >= 40,00,000){
                tax = (0.36*total);
        }
        return tax;
    }
    else if (id=="Married"){
        if(total >= 4,50,000){
            tax = (0.01*total);
        }
        else if( total >= 5,50,000){
        tax = (0.10*total);    
        }
        else if(total >= 7,50,000){
        tax = (0.20*total);
        }
        else if(total >= 20,00,000){
            tax = (0.30*total);
        }
        else if(total >= 40,00,000){
                tax = (0.36*total);
        }
        return tax;

    }

}

    
}

window.onload = function () {
    $("Calculate").onclick = x;
}
