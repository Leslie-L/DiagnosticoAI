
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
const API_URL_UPLOAD = 'http://35.166.241.144/model/eye';

modelo_ojo.addEventListener('click', ()=>modelo_ocular());

async function modelo_ocular() {
    const image = document.getElementById('archivo');
    if( image.files.length == 0 ){
        alert("No ha seleccionado una imagen");
        return;
    }
    const formData = new FormData();
    formData.append('image', image.files[0]);

    const res = await fetch(API_URL_UPLOAD, {
        method: 'POST',
        body: formData,
    });
    if(res.status!==200){
        alert("Ocurrio un error");
    }else{
        const data = await res.json();
        resultados_ocular(data);
    }
    
    //console.log(data);
}
function resultados_ocular(data) {
    const res_ocular = document.getElementById("res_ocular");
    res_ocular.classList.remove("hidden");
    document.getElementById("ocular_res").innerText = data?.Diagnostico;
    document.getElementById("ocular_pCorrecto").innerText=data?.pCorrecto;
    //document.getElementById("ocular_precision").innerText=data?.precision;
}

/*========================= Modelo Depresion =========================== */
const bdepresion = document.getElementById("modelo_depresion");
const API_URL_DEPRESION = 'http://35.166.241.144/model/depresion';
bdepresion.addEventListener('click', ()=>modelo_depresion());

async function modelo_depresion() {

    const tweet = document.getElementById('tweet').value;
    if (tweet.length<=0 || tweet=="") {
        alert("Ingrese un tweet");
        return;
    }
    const peticion = JSON.stringify({
        tweet:tweet
    });
    const res = await fetch(API_URL_DEPRESION, {
        method: 'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body: peticion,
    });
    if(res.status!==200){
        alert("Ocurrio un error");
    }else{
        const data = await res.json();
        resultados_depresion(data);
    }
    
    //console.log(data);
}

function resultados_depresion(data) {
    const res_depresion = document.getElementById("res_depresion");
    res_depresion.classList.remove("hidden");
    document.getElementById("depresion_res").innerText = data?.Diagnostico;
    document.getElementById("depresion_pCorrecto").innerText=data?.pCorrecto;
    //document.getElementById("depresion_precision").innerText=data?.precision;
}