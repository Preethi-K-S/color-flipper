let a=document.getElementById("color")
let b=document.getElementById("bg1")
let c=document.getElementById("btn")
let arr=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
c.addEventListener("click",display)
function display(){
    let str="#"
    for(let i=1;i<=6;i++){
        str += random()
    }
   b.style.backgroundColor =str
   a.innerHTML=str
   a.style.color=str
 
}
//console.log(random())
function random(){
    let index= Math.floor(Math.random()*16)
   return arr[index]
}
