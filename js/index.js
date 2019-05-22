function math() {
	
	var checkAdd = document.getElementById("add").checked;
	var checkSub = document.getElementById("subtract").checked;
	var checkMul = document.getElementById("multiply").checked;
	var checkDiv = document.getElementById("divide").checked;

	var x = document.getElementById("num1").value * 1;
	var y = document.getElementById("num2").value * 1;
	var result = null;
  
	if(checkAdd == true) {
		result = x + y;  
	} else if(checkSub == true) {
		result = x - y;
	} else if(checkMul == true) {
		result = x * y;
	} else if(checkDiv == true) {
		result = x / y;
	}

	document.getElementById("result").innerHTML = result;

}