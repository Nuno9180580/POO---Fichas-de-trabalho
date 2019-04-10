class Car {
    constructor(brand, plate, color, deposit, fuelType) {
        this.brand = brand
        this.plate = plate
        this.color = color
        this.deposit = deposit
        this.fuelType = fuelType
    }

    updateColor(newColor) {
        this.color = newColor
    }    

    refuel(liters) {
        this.deposit = liters
    }

    distance (kmsNumber) {
        const temp = nkms * 5 /100
        if (temp > this.deposit) {
            console.log("Cannot drive to destination");
        }
        else {
            this.deposit -= nkms * 5 /100
            console.log("Good trip!")
        }
    }
}
const car1 = new Car ("Ford", "91-GH-15", "verde", 40, "Gasóleo")
const car2 = new Car ("Opel", "23-AB-23", "branco", 50, "Gasolina")
const car3 = new Car ( "Nissan", "12-CX-45", "preto", 22, "Gasóleo")
const car4 = new Car ( "Nissan", "12-CX-45", "preto", 22, "Gasóleo")

const cars = [] //Array cars

cars.push(car1, car2, car3, car4);

//function para contar os carros com a mesma marca
function sameBrand(brand) {
    let cont = 0 //contador para o numero de carros iguais

    for (const car of cars) {
        if (car.brand === brand) {
            cont++
        }
    }
    return cont
}

//function para soma dos litros do mesmo tipo de combustivel
function litersOfSameFuel(fuelType, deposit) {
    let result = 0
    for (const car of cars) {
        if(car.fuelType === fuelType) {
            result += car.deposit
        }
    }
    return result
}