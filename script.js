//declarado as variaveis
const dayselements=document.getElementById('days');
const hourselements=document.getElementById('hours');
const minuteselements=document.getElementById('minutes');
const secondselements=document.getElementById('seconds');
 
//data desejada de projeto
const dataprog=" 16 aug 2022";

//inicia a função
function countdown() {
    const dateNewProject= new Date(dataprog);
    const currentDate= new Date();
     
    const totalSeconds=(dateNewProject - currentDate) / 1000;
    const days= Math.floor(totalSeconds / 3600 / 24);
    const hours=Math.floor(totalSeconds / 3600) % 24; // % retornará a resto da soma e math.flor retornara o menor numero inteiro da conta
    const minutes=Math.floor(totalSeconds/60) % 60;
    const seconds=Math.floor(totalSeconds) % 60;

    dayselements.innerHTML= days;
    hourselements.innerHTML=formatTime(hours)
    minuteselements.innerHTML=formatTime(minutes) ;
    secondselements.innerHTML=formatTime(seconds) ;


}
function formatTime(time) {
    return time <10 ? `0 ${time}`: time;
    
}
countdown();
setInterval(countdown, 1000);