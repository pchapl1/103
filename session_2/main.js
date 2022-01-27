let product = prompt('enter a product: ');
let quantity = prompt('enter how many of the product you would like to buy: ');
let price = prompt('enter a price please: ');
let salesTax = .16
let preTax =( price * quantity )
let finalPrice = preTax + (preTax * salesTax)
console.log(`product: ${product}`)
console.log(`quantity: ${quantity}`)
console.log(`final price ${finalPrice}`)

if (quantity > 1) {
    document.write(`For ${quantity} ${product}'s, your total is: ${finalPrice}`)
} else {
    document.write(`For ${quantity} ${product}, your total is: ${finalPrice}`) 
}
