function grad(homework: number, midterm: number, final: number){
    let score: number = homework + midterm + final
    
        if (score<50){
            return 'เกรด F'
        }else if (score<60) {
            return 'เกรด D'
        }else if (score<70) {
            return 'เกรด C'
        }else if (score<80) {
            return 'เกรด B'   
        }else{
            return 'เกรด A'
        } 
    }
    console.log(grad(100,100,100))
    
    function helloWorld() {
        console.log("สวัสดี")
    }
    
    helloWorld()
    
    function helloName(name: string) {
        console.log(name)
    }
    helloName('Max')
    
    function getPi(){
        return 3.14
    }
    
    console.log(getPi())

    function st(frame: string, sname: string, aname: string){

        if (frame === 'mix' && sname === 'zane' || aname === 'forth') {
            console.log('พร้อมเรียน')
        } else {
            console.log('ไม่พร้อมเรียน')
        }
    }
    
    st('mix', 'zane','forth')

    function st(sex: string, tall: number, weit: number){

        if (sex=== 'ชาย' && (tall > 170 || weit  >50 && weit <= 110 )) {
            console.log('จับใบดำใบแดง')
        } else {
            console.log('ไม่เข้าเกณฑ์')
        }
    }
    
    st('ชาย', 170 ,  70)

    function st(age: number, salary: number, deposit: number){

        if (age >= 16 && salary < 70000 && deposit < 500000) {
            console.log('รับ10000บาท')
        } else {
            console.log("อด....")
        }
    }
    
    st (15, 52000 , 450000)