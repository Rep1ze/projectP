function forengeit(){
    let a = prompt("Enter T")
    if(!a || isNaN(a)){
        for(; ; ){
            alert("Numb is not correct")
            return
        }
    }else{
        alert(a++ + 240 + "C")
        alert(a++ - 240 + " F")
    }
}
