const ojo = document.getElementById('card_ojo');
const modal_ocular =document.getElementById('modal-ocular');
const closeM =document.getElementById('close');
const depresion = document.getElementById('card_depresion');
const modal_depresion =document.getElementById('modal-depresion');
const close_depresion =document.getElementById('close_depresion');


/*OJO */
ojo.addEventListener('click', ()=>{
    modal_ocular.classList.remove("hidden");

});

closeM.addEventListener('click', ()=>{
    modal_ocular.classList.add("hidden");
    var imagen = document.getElementById("ojo_nuevo");
    imagen.src= "~/../images/png.png";
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


/*
CARGAR FOTO
*/
function cambiarFoto(){
    
    var input=document.getElementById("archivo");
    var reader = new FileReader(); //Leemos el contenido
    var imagen = document.getElementById("ojo_nuevo");
    
    reader.onload = function(e) { 
        imagen.src= e.target.result;
    }
    reader.readAsDataURL(input.files[0]);
  }