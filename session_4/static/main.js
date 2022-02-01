let hunger = 80;
let happiness = 50;
let energy = 40;

function displayInfo() {
    document.getElementById('hunger-info').innerHTML = `<p>🥨 Hunger: ${hunger} </p>`
    document.getElementById('happiness-info').innerHTML = `<p> 😊 Happiness: ${happiness} </p>`
    document.getElementById('energy-info').innerHTML = `<p> 🔥  Energy: ${energy} </p>`
}

function feed () {
    console.log('feed function')
    if ( hunger > 11 ) {
        hunger -= 10;
        displayInfo()
    }else{
        alert('Your pet is too full to eat anymore!')
    }
}

function pet () {
    console.log('pet function')
    if (happiness < 91 && energy < 91) {
        happiness += 10;
        energy += 10;
        console.log(happiness, energy)
        displayInfo()
    }else{
        alert('Your pet either has too much energy or is too happy for any more petting lol')
    }
}

function play () {
    console.log('play function')
    if (energy > 10) {
        energy -= 10;
        console.log(energy)
        displayInfo()
    }
    else {
        alert("Your pet doesn't have the energy for playing around right now")
    }
}
 
displayInfo()