'use strict'

function factorial(num = 1) {
	if(num <= 1) {
		return 1
	}

	return num * factorial(num - 1)
}

console.log(factorial(4));