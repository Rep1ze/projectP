function a(){
    let a = prompt("Enter T in F")
    if(!a || isNaN(a)){
        alert("Wrong number")
    }else{
        alert(a++ + 240 + " F")
    }
}