alert("Let's do some math!");
number1 = prompt("first number");
float1 = parseFloat(number1);
number2 = prompt("second number");
float2 = parseFloat(number2);

message = "<h1>"+"Math  with the numbers "+number1+" and "+number2+"</h1><br/>"+number1+"+"+number2+" = "+(float1+float2)+"<br/>"+number1+"*"+number2+" = "+(float1*float2)+"<br/>"+number1+"/"+number2+"= "+(float1/float2)+"<br/>"+number1+"-"+number2+" = "+(float1-float2)+"<br/>";

document.write(message);