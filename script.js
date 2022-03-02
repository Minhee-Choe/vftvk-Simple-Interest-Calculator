function compute()
{
    //calculate the total sum in the targeted year
    var principal = document.getElementById("principal");
    
    //validation of principal value. 
    if(principal.value<=0 || principal.value == "")
    { 
        alert("Enter a positive number");
        principal.focus();        
    }
    else
    {
        principal=principal.value;
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var sum = principal * years * rate /100;
        var year = new Date().getFullYear()+parseInt(years);
        document.getElementById("result").innerHTML="If you deposit \<mark\>"+principal+"\</mark\>,\<br\>at an interest rate of \<mark\>"+rate+"\</mark\>%\<br\>You will receive an amount of \<mark\>"+sum+"\</mark\>,\<br\>in the year \<mark\>"+year+"\</mark\>\<br\>"
    }
}
function updateRate() 
{
    //to show the updated rate as text
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}
function validate()
{
    //to check if entered amount is negative
    var amount=document.getElementById("principal").value;
    if(amount<=0)
    { 
        alert("Enter a positive number");
        amount.focus();
        return false;
    }
    return true;
}