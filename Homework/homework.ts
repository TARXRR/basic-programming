function BMI(Hight_m: number, Weit_kg: number){
    let BMI: number = Hight_m/Weit_kg **2 
}
function criterion(Hight_m: number, Weit_kg: number) {
    let BMI: number = Hight_m/Weit_kg **2 
    if (BMI < 18.5) {
        return ('ผอมเกิน ภาวะเสี่ยงโรคน้อยกว่าคนปกติ')
    } else if (BMI > 18.5 && BMI < 24){
        return ('ปกติ ภาวะเสี่ยงโรคปกติ')
    }else if (BMI > 24 && BMI < 29.9){
        return ('ท้วม ภาวะเสี่ยงอันตรายระดับ1')
    }else if (BMI > 29.9 && BMI < 30.0){
        return ('อ้วน ภาวะเสี่ยงอันตรายระดับ2')
    }else if (BMI  < 30.0){
        return ('อ้วนมาก ภาวะเสี่ยงอันตรายระดับ3')
    }
}

console.log (BMI (1.67,61))
console.log (criterion(61,1.67))