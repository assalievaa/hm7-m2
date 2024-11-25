class Cars{
    constructor(model, color, wheels){
        this.model = model
        this.color = color
        this.wheels = wheels
    }
    start(){
        console.log("Машина заведена")
    }
}

class Bus  extends Cars{
    constructor(model, color, wheels,speed) {
        super(model, color, wheels);
        this.speed = speed;
    }
}

class Kcar extends Cars{
    constructor(model, color, wheels,maxSpeed) {
        super(model, color, wheels);
        this.maxSpeed = maxSpeed;
    }
}

const kcar = new Kcar('honda fit','black','5','80');
const bus = new Bus('ZhongTong','yellow','4','4');
bus.start();
kcar.start();

console.log(kcar);
console.log(bus);


//2
class TrafficLight {
    constructor() {
        this.red = document.querySelector('.red');
        this.yellow = document.querySelector('.yellow');
        this.green = document.querySelector('.green');
    }

    resetColors() {
        this.red.classList.remove('active');
        this.yellow.classList.remove('active');
        this.green.classList.remove('active');
    }

    changeColor(color) {
        this.resetColors();

        switch (color.toLowerCase()) {
            case 'красный':
                this.red.classList.add('active');
                alert('STOP');
                break;
            case 'желтый':
                this.yellow.classList.add('active');
                alert('WAIT');
                break;
            case 'зеленый':
                this.green.classList.add('active');
                alert('GO');
                break;
            default:
                console.log('Неправильный цвет');
        }
    }
}


const trafficLight = new TrafficLight();
const writeColor = prompt('Введите цвет светофора (Красный, Желтый, Зеленый)');


trafficLight.changeColor(writeColor);
