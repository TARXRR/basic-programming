function add (a: number, b: number) {return a+b}
console.log(add(8,4))

function down(a: number, b: number) {return a-b}
console.log(down(8,4))

function star(a: number, b: number, c: number, d: number) {return a*b*c*d}
console.log(star(5, 6, 9, 7))

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

console.log(grad(25,30,30))