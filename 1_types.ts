const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 42;
const float: number = 1.5;
const num: number = 3e10;

const message: string = 'Hello TypeScript';

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13];
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13];//generic

const words: string[] = ['Hello', 'TypeScrypt'];

//Tuple
const contact: [string, number] = ['Yury', 1234567];

//Any
let variable: any = 42;
//.....
variable = 'New String'
variable = [];


//---------------//
//Void
function sayMyName(name: string): void {
    console.log(name)
}

sayMyName('dvfgbvfgdb')

//Never
function throwError(message: string): never {
    throw new Error(message)
}

function infinite(): never {
    while (true) {

    }
}

//own Type
type Login = string; //Alias
const login: Login = 'admin';

type ID = string | number;
const userId1: ID = 1234;
const userId2: ID = '1234';
// const userId3: ID = true; ERROR

//Null
type SomeType = string | null | undefined;










