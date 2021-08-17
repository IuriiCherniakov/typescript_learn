interface Rect {
    readonly id: string
    color?: string
    size: {
        width: number
        height: number
    }
}

const rectangle1: Rect = {
    id: 'asddf',
    size: {
        width: 20,
        height: 30
    },
    color: '#fff'
}

const rect2: Rect = {
    id: 'dfvfdv',
    size: {
        width: 10,
        height: 32
    }
}
rect2.color = 'black';

const rect3 = {} as Rect
const rect4 = <Rect>{}

//======================================

interface RectWithArea extends Rect {
    getArea: () => number
}

const rect5: RectWithArea = {
    id: '12345',
    size: {
        width: 20,
        height: 20
    },
    getArea(): number {
        return this.size.width * this.size.height
    }
}

//=========================================
interface IClock {
    time: Date
    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date()
    setTime(date: Date): void {
        this.time = date;
    }
}

//================================

interface Styles {
    [key: string] : string
}


const css: Styles = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'

}







