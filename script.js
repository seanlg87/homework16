function greaterNumber(){
	let userNumber1 = parseInt(prompt('Please enter 1st number'));
	let userNumber2 = parseInt(prompt('Please enter 2nd number'));
	let userNumber3 = parseInt(prompt('Please enter 3rd number'));
	if(userNumber1 > userNumber2 && userNumber1 > userNumber3){
		console.log("The greater Number");
		document.getElementById('displayGreater').innerHTML = "The Greater Number +  ".value;
	}
}