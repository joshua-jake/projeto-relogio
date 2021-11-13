// SELECIONAR OS ELEMENTOS PARA MANIPULAR 

let ditalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

// ATUALIZAR O RELOGIO DIGITAL CRIAÇÃO DE UM TIMER 


function updateClock() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    ditalElement.innerHTML =`${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;// Inserido a hora no relógio digital 
    

    //Montando o Relógio Ananogico 


    let sDeg = ((360 / 60) * second) - 90;
    let mDeg = ((360 / 60) * minute) - 90;
    let hDeg = ((360 / 12) * hour) - 90;

    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;


}
//Acrecentando o zero para não quebrar 
function fixZero(time) {
    if(time < 10) {
        return '0'+time;
    }
    else {
        return time;
    }
}


setInterval(updateClock, 1000);
updateClock();



function akertar () {
    alert("Relogio Criado com Sucesso!");
}

