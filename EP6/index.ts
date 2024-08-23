let sum: number = 0

for(let i = 1; i <= 365; i++) {
    sum = sum + i
}

console.log('Total: ', sum)

let sum: number = 0
let i : number = 1

while (i <= 31){
    sum = sum +i
    i++
}

console.log('Total:', sum)

let sum: number = 0
let i: number = 1

do {
    sum = sum + i
    i++
} while (i <= 31)

console.log('Total:', sum)


let count: number = 0

while(true){
    console.log("โสดโว้ย")
    count++
    if (count === 10){
        break
    }
}

//for(let i = 1; i <= 19; i++){
//    console.log('ฉันอายุ' + i + 'ปี')
//}

//let i: number = 1
//while (i <= 19){
//    console.log('ฉันอายุ' + i + 'ปี')
//   i++
//}

let i: number = 1
do {
    console.log('ฉันอายุ' + i + 'ปี')
    i++
}while( i <= 19)

const cars: string[] = ['Toyota', 'Honda', 'Zuzuki', 'Yamaha', 'Mazda']

for(let i = 0; i < cars.length; i++){
    if (cars[i] === 'Yamaha') {
        console.log('รถซื้อแกงจะ แรงได้ไง')
    }

}

const friend: string[] = ['plam', 'Tar', 'Art', 'Pee', 'Var']

for(let i = 0; i < friend.length; i++){
    if (friend[i] === 'Art'){
        console.log('ไปกินหมูกระทะกัน')
    }
}


const party: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let i = 0; i <10 ; i++){
    if (party[i] === 3 ||party[i] ===  5 ||party[i] ===  7 ){
        party[i] = 0
    }
}

console.log(party)