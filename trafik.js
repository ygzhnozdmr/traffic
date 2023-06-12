
function UI() {
this.dur = document.querySelector("#dur"),
this.sure = document.querySelector("#sure")
this.kirmizi = document.querySelector("#kirmizi")
this.yesil = document.querySelector("#yesil")
this.sari = document.querySelector("#sari")
this.start = document.querySelector("#start")

}
const ui = new UI();
function redLight() {
    if (ui.kirmizi.classList.contains("active") = true){
        startTime(10);
        ui.kirmizi.classList.remove("active");
    }
    }



let counter;
function startTime(time) {
    counter = setInterval(timer,1000);

    function timer() {
     sure.textContent = time ;
       time-- ;
       if (time < 0){
        clearInterval(counter);
       ui.kirmizi.classList.add("active");
       ui.yesil.classList.remove("active");
       }
       else {
        ui.yesil.classList.add("active");
        ui.kirmizi.classList.remove("active");
       }
       if(ui.kirmizi.classList.contains("active")) {
         redTime(10);

       }
    }
}


function redTime(time) {
    counter = setInterval(timerRed,1000);
    function timerRed() {
        sure.textContent = time ;
          time-- ;
          if (time < 0){
            clearInterval(counter);
            ui.yesil.classList.add("active");
            ui.kirmizi.classList.remove("active");
            startTime(20);
            ui.dur.classList.remove("disabled")

        }
    }
}
let stopper;
function durdur(time) {
    stopper = setInterval(timerStop,1000);
    function timerStop() {
    time-- ;
    if(time < 0 ){
    clearInterval(counter);
    redTime(10);
    ui.kirmizi.classList.add("active");
    ui.yesil.classList.remove("active");
    clearInterval(stopper);
        }
    }
}

ui.start.addEventListener("click", function(){
    startTime(20);
    ui.start.classList.add("disabled");
    console.log(ui.kirmizi.classList.contains("active"))
})

ui.dur.addEventListener("click", function(){ ui.dur.classList.add("disabled");
durdur(3)

})
