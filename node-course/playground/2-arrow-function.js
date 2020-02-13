// const square = function (x) {
//     return x * x
// }

// const square = (x) => {
//     return x * x
// }

// const square = (x) => x * x

const event = {
    name: 'Festa de aniversário',
    guestList: ['Gabriel', 'Olesio', 'Markin', 'Lucas'],
    printGuestList(){
        console.log('Lista de convidados para ' + this.name)

        this.guestList.forEach((guest) => {
            console.log(guest + ' está em ' + this.name)
        })
    }
}

event.printGuestList()