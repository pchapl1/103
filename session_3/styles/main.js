// function add(num1, num2) {
//     num1 = prompt('enter a number: ');
//     num2 = prompt('enter a number: ');
//     let result = num1 + num2
//     console.log(result)
//     return result
// }

function calculator() {
    console.log('calculator function: ${}');
    let num1 = Number(prompt('enter a number: '));
    let num2 = Number(prompt('enter another number: '));
    let sum = num1 + num2
    let difference = num1 - num2
    let product = num1 * num2
    let quotient = num1 / num2
    
    console.log(sum)
    console.log(difference)
    console.log(product)
    console.log(quotient)

    document.getElementById('results').innerHTML =`
    <p class = 'answers'> sum = ${sum} </p>
    <p class = 'answers'> difference = ${difference} </p>
    <p class = 'answers'> product= ${product} </p>
    <p class = 'answers'> quotient = ${quotient} </p>
    `

    // return Number(num1) + Number(num2);
};

// add()