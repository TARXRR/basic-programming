const score = [10,23,26,30,33]

let sum: number = 0

for (let i = 0; i < score.length; i++){
    sum = sum + score[i]
}

let avg = sum / score.length
console.log("Total: ", sum)
console.log("avg: ", avg)

const myStudents: string = "เซน,แทน,เวฟ,รุ้ง,เท็ก,สร"

const myStudentsArray: string[] = myStudents.split(',')

console.log(myStudents)
console.log(myStudentsArray)

const fullname: string = 'สุดสวย สวยสุด'

console.log(fullname.split(' ')[0])

console.log(fullname.slice(0, fullname.indexOf(' ')))

const mypet: string = "เสือ*ม้า*ปลา*งู"

const mypetArray: string[] = mypet.split("*")

console.log(mypet)
console.log(mypetArray)


const mypet: string = "เสือ*ม้า*ปลา*งู"

const mypetArray: string[] = mypet.split("*")

console.log("ตั้งต้น: ", mypetArray)

mypetArray.pop() //เอาตัวสุดท้ายออก

console.log("เอาตัวสุดท้ายออก: ", mypetArray)

mypetArray.push('สิงโต') //ใส่9jvmhkp

console.log("เอาตัวสุดท้ายออก: ", mypetArray)

mypetArray.shift() //เอาตัวหน้าออก

console.log("เอาตัวหน้าออก: ", mypetArray)

mypetArray.unshift('ไก่ชน') //ใส่ตัวหน้า

console.log("ใส่ตัวหน้า: ", mypetArray)

const namefriend: string = "อาท,ต้า,ปาม,พี"

const namefriendArray: string[] = namefriend.split(',')

console.log(namefriendArray)

namefriendArray.sort()
namefriendArray.reverse()

console.log(namefriend)
console.log(namefriendArray)

const me = {
    firstName: 'Panuwit',
    lastName: 'Kanason',
    age: 19
}

// ประวัติส่วนตัว

//ชื่อ: Panuwit
//นามสกุล: Kanason
//อายุ: 15