function forengeit(){
    let a = prompt("Enter T")
    if(!a || isNaN(a)){
        for(; ; ){
            alert("Numb is not correct")
        }
    }else{
        alert(a + 240 + "C")
        alert(a - 240 + " F")
    }
}