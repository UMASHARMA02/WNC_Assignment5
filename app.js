var arr= [];

function getNumber(){
    let num = document.getElementById("number");
    let val = num.value;
    if(isNaN(val) || num.value ===""){
        
        alert("Enter valid number");         //Popping out alert
        return;                   //if we submit random thing in between
    }
    arr.push(parseInt(num.value));
    console.log(arr);
    num.value = "";
}

function addition(){
    let num = document.getElementById("number");
    let res = arr[0] ;
    for(let i = 1 ; i<arr.length;i++ ){
        res = res + arr[i];
    }
    num.value = res;
    arr=[];
    /**
    * This return addition of all the input numbers
    */
}
function subtraction(){
    let num = document.getElementById("number");
    let res = arr[0] ;
    for(let i = 1 ; i<arr.length;i++ ){
        res = res - arr[i];
    }
    num.value = res;
    arr=[];
    /**
    * This return subtraction of all the input numbers
    */
}
function multiplication(){
    let num = document.getElementById("number");
    let res = arr[0] ;
    for(let i = 1 ; i<arr.length;i++ ){
        res = res * arr[i];
    }
    num.value = res;
    arr=[];
    /**
    * This return multiplication of all the input numbers
    */
}
function division(){
    let num = document.getElementById("number");
    let res = arr[0] ;
    for(let i = 1 ; i<arr.length;i++ ){
        res = res / arr[i];
    }
    num.value = res;
    arr=[];
    /**
    * This return division of all the input numbers
    */
}
function clr(){
    let num = document.getElementById("number");
    num.value=""
    arr=[];
}