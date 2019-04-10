class Dice {
    constructor () {
        this.quantity = 6
    }

    get faceValue () {
        return this._faceValue
    }

    set faceValue (newValue) {
        this._faceValue = newValue
    }

    get quantityFaces() {
        return this.quantity
    }

    roll() {
        const randomValue = Math.floor((Math.random() * this.quantity) + 1)
        this.faceValue = randomValue
    }
}

const frequencyTable = [0,0,0,0,0,0]

//lanca 100x
for (let i = 0; i < 100; i++) {
    const dice = new Dice()
    dice.roll()
    const currentValue = dice.faceValue
    frequencyTable[currentValue-1] += 1    
}

console.table(frequencyTable)

const table = document.querySelector("table");

table.innerHTML += `
    <tr>
        <td>Frequência</td>
        <td>${frequencyTable[0]}</td>
        <td>${frequencyTable[1]}</td>
        <td>${frequencyTable[2]}</td>
        <td>${frequencyTable[3]}</td>
        <td>${frequencyTable[4]}</td>
        <td>${frequencyTable[5]}</td>
    </tr>
`