//declarado as variaveis
const dayselements=document.getElementById('days');
const hourselements=document.getElementById('hours');
const minuteselements=document.getElementById('minutes');
const secondselements=document.getElementById('seconds');
 
//data desejada de projeto
const dataprog="19 aug 2022 ";//dd/mm/aa

//inicia a função
function countdown() {
    const dateNewProject= new Date(dataprog);//atribui a const dataprog, que é a data desejada em new date()
    const currentDate= new Date(); //data atua !
    
     
    const totalSeconds=(dateNewProject - currentDate) / 1000;
    const days= Math.floor(totalSeconds / 3600 / 24);
    const hours=Math.floor(totalSeconds / 3600) % 24; // % retornará a resto da soma e math.flor retornara o menor numero inteiro da conta
    const minutes=Math.floor(totalSeconds/60) % 60;
    const seconds=Math.floor(totalSeconds) % 60;

    dayselements.innerHTML= days;
    hourselements.innerHTML=formatTime(hours);//passa a função de add um zero 
    minuteselements.innerHTML=formatTime(minutes) ;
    secondselements.innerHTML=formatTime(seconds) ;

}
function formatTime(time) {//função para adicionar um zero quando o numero da hora, minuto e segundo estiver menor que 10 
    return time <10 ? `0${time}`: time;
    
}
countdown();//executa a função pricipal 
setInterval(countdown, 1000);//passa um intervalo para a a função de 1000 ms... Ela executa uma função de retorno após determinado tempo.