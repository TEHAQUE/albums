let $albumCover= document.querySelector('.albums-cover');
let $itemTable = document.getElementsByClassName('item');

function delay(e) {
    return new Promise(resolve=>{
        setTimeout(resolve,e);
    });
};
async function itemAnimation (){
        for (let item of $itemTable) {
            item.style.opacity = '1';
            item.style.transform= 'translateY(-80px)';
            item.style.transition = '2s';
            await delay(1000);
        }
        
};

$albumCover.addEventListener('mouseover',showInfo=(e)=>{
    if(e.target.closest('div').classList.contains('album-info')){
    e.target.closest('div').style.transition = '0.5s';
    e.target.closest('div').style.height = '50%';}
    });
$albumCover.addEventListener('mouseout',hideInfo=(e)=>{
    if(e.target.closest('div').classList.contains('album-info')){
    e.target.closest('div').style.transition = '0.5s';
    e.target.closest('div').style.height = '12%';}
    });
window.addEventListener('scroll', ()=>{
    const scrollPosition = window.scrollY;
    if(scrollPosition>=1400){
        itemAnimation();
        }
});