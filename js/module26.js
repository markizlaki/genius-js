// створити початковий клас Abonent, де зберігатимуться ім*я і номер
// створити set який прийматиме телефон і номер
// створити get який виводитиме данні про абонента
// створити три різних юзери
// вивести данні

class Abonent {
    constructor(props) {
        this.name = props.name;
        this.tel = props.tel;
    }

    set abonentInfo(tel) {
        this.tel = newTel;
    }

    get abonentInfo() {
        return `Abonent ${this.name} has tel with number ${this.tel}`
    }
}

const Kris = new Abonent({
    name: "Kristina",
    tel: "2545236541"
})

console.log(Kris.abonentInfo);


const Max = new Abonent({
    name: "Maximilian",
    tel: "56565849"
})

console.log(Max.abonentInfo);

const Nat = new Abonent({
    name: "Nataniel",
    tel: "67798798798"
})

console.log(Nat.abonentInfo);