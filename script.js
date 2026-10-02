function percentage(){
const part=Number(document.getElementById("part").value), whole=Number(document.getElementById("whole").value), result=document.getElementById("result");
if(!Number.isFinite(part)||!Number.isFinite(whole)||whole===0){result.textContent="Enter valid numbers. The second number cannot be zero.";return;}
result.textContent=`${(part/whole*100).toFixed(2)}%`;
}
function tip(){
const bill=Number(document.getElementById("bill").value), tipRate=Number(document.getElementById("tipRate").value), people=Number(document.getElementById("people").value), result=document.getElementById("result");
if(!Number.isFinite(bill)||!Number.isFinite(tipRate)||!Number.isFinite(people)||bill<0||tipRate<0||people<1){result.textContent="Enter valid values.";return;}
const tipAmount=bill*tipRate/100, total=bill+tipAmount;
result.textContent=`Tip: $${tipAmount.toFixed(2)} | Total: $${total.toFixed(2)} | Per person: $${(total/people).toFixed(2)}`;
}
function discount(){
const price=Number(document.getElementById("price").value), discountRate=Number(document.getElementById("discountRate").value), result=document.getElementById("result");
if(!Number.isFinite(price)||!Number.isFinite(discountRate)||price<0||discountRate<0){result.textContent="Enter valid values.";return;}
const saved=price*discountRate/100;
result.textContent=`You save $${saved.toFixed(2)} | Sale price: $${(price-saved).toFixed(2)}`;
}
function salesTax(){
const price=Number(document.getElementById("taxPrice").value), rate=Number(document.getElementById("taxRate").value), result=document.getElementById("result");
if(!Number.isFinite(price)||!Number.isFinite(rate)||price<0||rate<0){result.textContent="Enter valid values.";return;}
const tax=price*rate/100;
result.textContent=`Tax: $${tax.toFixed(2)} | Total: $${(price+tax).toFixed(2)}`;
}
function average(){
const values=document.getElementById("numbers").value.split(",").map(x=>Number(x.trim())).filter(x=>Number.isFinite(x)), result=document.getElementById("result");
if(!values.length){result.textContent="Enter numbers separated by commas.";return;}
result.textContent=`Average: ${(values.reduce((a,b)=>a+b,0)/values.length).toFixed(2)}`;
}
