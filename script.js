const object = document.querySelector('#object');
const arena = document.querySelector('#arena');
const btnUp = document.querySelector('#btnUp');
const btnDown = document.querySelector('#btnDown');
const sizeArena = arena.getBoundingClientRect();
const sizeObject = object.getBoundingClientRect();

btnUp.addEventListener('click',function(){
    const sizeObject = object.getBoundingClientRect();
    if(sizeObject.top <= sizeArena.top){
        alert('mentok atas')
    }else{
        object.style.top = object.offsetTop-5+"px";
    }
});
btnDown.addEventListener('click',function(){
    const sizeObject = object.getBoundingClientRect();
    if(sizeObject.bottom >= sizeArena.bottom){
        alert('mentok bawah')
    }else{
        object.style.top = object.offsetTop+5+"px";
    }
});