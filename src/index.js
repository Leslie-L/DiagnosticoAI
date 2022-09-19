const ojo = document.getElementById('card_ojo');
const modal_ocular =document.getElementById('modal-ocular');
const close =document.getElementById('close');
const depresion = document.getElementById('card_depresion');
const modal_depresion =document.getElementById('modal-depresion');
const close_depresion =document.getElementById('close_depresion');


/*OJO */
ojo.addEventListener('click', ()=>{
    modal_ocular.classList.remove("hidden");
});

close.addEventListener('click', ()=>{
    modal_ocular.classList.add("hidden");
});
/*
Depresion
*/
depresion.addEventListener('click', ()=>{
    modal_depresion.classList.remove("hidden");
});

close_depresion.addEventListener('click', ()=>{
    modal_depresion.classList.add("hidden");
});
