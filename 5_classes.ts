class Typescrypt {
    version: string

    constructor(version: string) {
        this.version = version
    }

    info(name: string) {
        return `[${name}]: Typescrypt version is ${this.version}`
    }
}

// class Car {
//     readonly model: string
//     readonly numberOfWheels: number = 4
//
//     constructor(theModel: string) {
//         this.model = theModel
//     }
// }

class Car {
    readonly numberOfWheels: number = 4
    constructor(readonly model: string) {}
}
//==========

class Animal {
    protected voice: string = '';
    public color: string = 'black'

    private go () {
        console.log('GO')
    }
}
class Cat extends Animal {
    setVoice(voice: string): void {
        this.voice = voice;
    }
}
const cat = new Cat()
cat.setVoice('test')
console.log(cat.color)
//================================

abstract class Component {
    abstract render(): void
    abstract info(): string
}

class AppComponet extends Component {
    render(): void {
        console.log('Component on render')
    }

    info(): string {
        return 'This is info';
    }
}






