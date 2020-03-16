function operation(array, op1, op2) {
	let result = null
	let aux = false
	for(let i in array){
		
		
		i = Number(i)
		if(i+1 === array.length){
			break;
		}
		if(result !== null) {			
			if(aux === true) {
				console.log(result, array[i+1], op1)
				result = result + op1 + array[i+1]
				aux = !aux
			} else {
				console.log(result, array[i+1], op2)
				result = result + op2 + array[i+1]
				aux = !aux
			}
		} else {
			
			result = array[i] + op1 + array[i+1]
		}
		console.log(`Result ${i+1}: ${result}`)
	}
	return result
}

console.log('Final Result: ', eval(operation([2,3,4,5], '*', '+')))

