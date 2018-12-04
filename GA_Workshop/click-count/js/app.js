// Desired Behavior
//
// 1: User clicks on #clickme (this element is the size of the window - so the user clicks anywhere)
// 2: Increment the value of #click-num by one for each click (eg if clicknum is 0, make it 1; it clicknum is 10, make it 11; etc.)
// 3: If the number of clicks is less than or equal to 5, change the backgroundColor of <body> to red
// 4: Else if the number of clicks is greater than 5, but less than 10, change the backgroundColor of <body> to green
// 5: Else if the number of clicks is greater than 15, change the backgroundColor of <body> to blue

// Instructions
//
// 1. Create a variable, count, and set it equal to 0
// 2. Use document.querySelector to search for the #clickme element
// 3. Attach the .onclick method to the above query and set this equal to handleClick
// 4. Create a function named handleClick, inside of this function:
// 5. Increment the value of count variable by 1
// 6. Use conditional logic to enable the desired behavior, above


// var count = 0
// count = count + 1

var count = 0

document.querySelector('#clickme').onclick = handleClick

function handleClick() {
	count = count + 1
	console.log(count)
	document.querySelector('#click-num').innerHTML = count


if (count <= 5) {
	console.log(document.querySelector('body').style.backgroundColor = 'red')
} 	else if (count <= 10) { 
	console.log(document.querySelector('body').style.backgroundColor = 'green')
}	else if (count <=15) {
	console.log(document.querySelector('body').style.backgroundColor = 'blue')
}	else if (count > 15) {
	console.log(document.querySelector('body').style.backgroundColor = 'purple')
}	
}





