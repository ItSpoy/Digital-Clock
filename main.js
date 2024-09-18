const hourEl = document.getElementById("hour");
const minutesEl = document.getElementById("minutes");
const secondeEl = document.getElementById("secondes");
const ampmEl = document.getElementById("ampm");

function updateclock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "Am";
    
    
    if ( h > 12){
        h = h - 12;
        ampm = "PM" ;
    }
    h = h < 10 ? "0" + h : h ;
    m = m < 10 ? "0" + m : m ;
    s = s < 10 ? "0" + s : s ;
    hourEl.innerText = h ;
    minutesEl.innerText = m ;
    secondeEl.innerText = s ;
    ampmEl.innerText = ampm;
    setTimeout(()=>{
        updateclock();
    },1000)
}
updateclock();

