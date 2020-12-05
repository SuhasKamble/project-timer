const hour = document.getElementById('hour')
const min = document.getElementById('min')
const sec = document.getElementById('sec')
const submit = document.getElementById('submit')
const input = document.getElementById('input')
const output = document.getElementById('output')
const timeDisplay  = document.getElementById('time')
const reset = document.getElementById('reset')
const back = document.getElementById('back')
let isPlaying = false
let timeRun 
let totalHour = 0
let totalMin = 0
let totalSec = 0

const audio = new Audio('alarm.mp3')

submit.addEventListener('click',(e)=>{
    e.preventDefault()
    if(hour.value=="" && sec.value==""&& min.value==""){
        alert("Please enter the time")
    }
    else{

    
    let calHour = hour.value * 3600
    let calMin = min.value * 60 
    let calSec = sec.value *1
    let totalSeconds = calHour+calMin+calSec
    let time = totalSeconds
    
    
    


    console.log(totalSeconds)
    input.style.display='none'
    output.style.display='block'
    isPlaying = true

     timeRun = setInterval(countDown,1000)

   function countDown(){
        if(time>0){
            timeDisplay.style.color="#fff"
            time--;
        }
        else if(time==0){
            timeDisplay.style.color="#eb3b5a"
            reset.autofocus=true
            audio.play()
        }
        if(time<=60){
            timeDisplay.innerHTML = time+'s'
        }   
        else{
            console.log("high")
             totalHour = Math.floor(time/3600)
           //  console.log("hour",totalHour)
             totalMin = Math.floor(time/60)
             if(totalMin<10){
                totalMin = `0${totalMin}`
            }
             if(totalMin<=60){
                 totalMin = totalMin
             }
             else{
                totalMin =  Math.floor(totalMin%60)
             }
             console.log("min",totalMin)
             totalSec = time % 60
             if(totalSec<10){
                 totalSec = `0${totalSec}`
             }
            
             timeDisplay.innerHTML = `${totalHour}:${totalMin}:${totalSec}`
        }
           
    }



    reset.addEventListener('click',()=>{
        // clearInterval(timeRun)
        clearInterval(timeRun)
        audio.pause()
        time = totalSeconds
        timeRun = setInterval(countDown,1000)
    
    
    })

    back.addEventListener('click',()=>{
        time = 0
        clearInterval(timeRun)
        audio.pause()
        input.style.display='block'
        output.style.display='none'


    })
}
})

