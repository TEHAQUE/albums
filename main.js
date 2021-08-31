let info = document.querySelector('.info');


const showInfo=(e)=>{
    if(e.target.closest('img').className=='image'){
        informations();
        console.log('elo');
    }
}
const informations=()=>{
    toggle.className.informations;
    console.log('elo');
}
info.addEventListener('click', showInfo);