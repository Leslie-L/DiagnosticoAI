
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


  /*
    CONSUMO DE APIS
  */

/*========================= Modelo ocular =========================== */
const modelo_ojo = document.getElementById("modelo_ojo");
const API_URL_UPLOAD = 'http://127.0.0.1:8000/model/eye';

modelo_ojo.addEventListener('click', ()=>modelo_ocular());

async function modelo_ocular() {
    const image = document.getElementById('archivo');
    const formData = new FormData();
    formData.append('image', image.files[0]);

    const res = await fetch(API_URL_UPLOAD, {
        method: 'POST',
        body: formData,
    });
    
    /*const res = await fetch('http://127.0.0.1:8000');*/
    const data = await res.json();
    //console.log(data);
}


/*========================= Modelo Depresion =========================== */
const bdepresion = document.getElementById("modelo_depresion");
const API_URL_DEPRESION = 'http://127.0.0.1:8000/model/depresion';
bdepresion.addEventListener('click', ()=>modelo_depresion());

async function modelo_depresion() {

    const tweet = document.getElementById('tweet').value;
    //console.log(tweet);
    const peticion = JSON.stringify({
        tweet:tweet
    });
    //console.log(peticion)
    const res = await fetch(API_URL_DEPRESION, {
        method: 'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body: peticion,
    });
    
    const data = await res.json();
    //console.log(data);
}
