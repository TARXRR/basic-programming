function sayHi(dayofweak: number) {
    
    if(dayofweak === 1){
        console.log('สวัสดีวันอาทิตย์')
   
    }else if(dayofweak === 2){
        console.log('สวัสดีวันจันทร์')
    
    }else if(dayofweak === 3){
        console.log('สวัสดีวันอังคาร')
    
    }else if(dayofweak === 4){
        console.log('สวัสดีวันพุทธ')
    
    }else if(dayofweak === 5){
        console.log('สวัสดีวันพฤหัสบดี')
   
    }else if(dayofweak === 6){
        console.log('สวัสดีวันศุกร์')
    
    }else if(dayofweak === 7){
        console.log('สวัสดีวันเสาร์')
    }
}

sayHi(5)

function sayHi2(dayofweak: number){
    switch (dayofweak) {
    case 1:
    console.log('สวัสดีวันอาทิตย์')
        break
    case 2:
    console.log('สวัสดีวันจันทร์')
        break
    case 3:
    console.log('สวัสดีวันอังคาร')
        break
    case 4:
    console.log('สวัสดีวันพุทธ')
        break
    case 5:
    console.log('สวัสดีวันพฤหัสบดี')
        break
    case 6:
    console.log('สวัสดีวันศุกร์')
        break
    case 7:
    console.log('สวัสดีวันเสาร์')
        break
    default:
    console.log('มี7วันนายใส่เกิน')                           
    
    }
}

sayHi2(8)



function shirt(shirtSize: string){
    switch(shirtSize){
        case 's' :
            console.log("ผอม")
            break
        case 'm' :
            console.log("ผอม")
            break
        case 'l' :
            console.log("ท้วม")
            break
        case 'xl' :
            console.log("อ้วน")
            break
        case '2xl' :
            console.log("อ้วน")
            break
        default:
            console.log('มีไซส์แค่นี้อย่าถามเยอะ')    
    } 
}  
shirt('l')

const x: number = 99999999999999
const y: number = 99999999999999

console.log('x',x)
console.log('y',y)

function fixDecimal(n: number, digit: number){
    const x = n.toFixed(digit)
    return x 

}

console.log(fixDecimal(40.67676,15))

function toCurrency(Y: number){
    return Y.toLocaleString()
}
console.log(toCurrency(100000))

function cheakStingLengh(a: string){
    console.log(a.length)
}
cheakStingLengh ("สวัสดีชาวไทยทั้งหลาย")

function goToMarget(a: string, b: number){
    return a.charAt(b)
    
}
    
console.log(goToMarget('ซื้อของ',4))

const str: string = 'ฉันรักเธอ'

console.log(str.includes('รัก'))

function cheakBox(V: string, N: string){
    if (V.includes(N)) {
        console.log(V.indexOf(N))
    }else{
        console.log('ไม่พบคำที่ค้นหา')
    }
}

cheakBox('อยากกลับบ้าน', 'กลับ')