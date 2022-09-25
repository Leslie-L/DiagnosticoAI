/*
    highBP
    highChol
    cholCheck
    bmi
    smoker
    stroke
    heartDiseaseorAttack
    physActivity
    fruits
    veggies
    hvyAlcoholConsump
    anyHealthcare
    noDocbcCost
    genHlth
    mentHlth
    physhlth
    diffWalk
    sex 
    age 
    education
    income
*/
const API_URL= 'http://35.166.241.144/model/diabetes';
const botonProcesar= document.getElementById("procesar");
botonProcesar.addEventListener('click',()=>modeloDiabetes());

async function modeloDiabetes(){
    const highBP = document.getElementById("highBP").value;
    const highChol = document.getElementById("highChol").value;
    const cholCheck = document.getElementById("cholCheck").value;
    const bmi = document.getElementById("bmi").value;
    const smoker = document.getElementById("smoker").value;
    const stroke = document.getElementById("stroke").value;
    const heartDiseaseorAttack = document.getElementById("heartDiseaseorAttack").value;
    const physActivity = document.getElementById("physActivity").value;
    const fruits = document.getElementById("fruits").value;
    const veggies = document.getElementById("veggies").value;
    const hvyAlcoholConsump = document.getElementById("hvyAlcoholConsump").value;
    const anyHealthcare = document.getElementById("anyHealthcare").value;
    const noDocbcCost = document.getElementById("noDocbcCost").value;
    const genHlth = document.getElementById("genHlth").value;
    const mentHlth = document.getElementById("mentHlth").value;
    const physhlth = document.getElementById("physhlth").value;
    const diffWalk = document.getElementById("diffWalk").value;
    const sex  = document.getElementById("sex").value;
    const age  = document.getElementById("age").value;
    const education = document.getElementById("education").value; 
    const income = document.getElementById("income").value;
    if (isNaN(bmi)||bmi==""||bmi==null|| bmi<0 || bmi>98 ) {
        alert("Ingrese un valor correcto");
    }
    if (isNaN(mentHlth) || mentHlth==""||mentHlth==null|| mentHlth<0 || mentHlth>98 ) {
        alert("Ingrese un valor correcto");
    }
    if (isNaN(physhlth)|| physhlth=="" ||physhlth==null|| physhlth<0 || physhlth>98 ) {
        alert("Ingrese un valor correcto");
    }
    
    const peticion = JSON.stringify({
        highBP: Number(highBP),
        highChol: Number(highChol),
        cholCheck: Number(cholCheck),
        bmi: Number(bmi),
        smoker: Number(smoker),
        stroke:Number(stroke),
        heartDiseaseorAttack:Number(heartDiseaseorAttack),
        physActivity: Number(physActivity),
        fruits:Number(fruits),
        veggies: Number(veggies),
        hvyAlcoholConsump: Number(hvyAlcoholConsump),
        anyHealthcare: Number(anyHealthcare),
        noDocbcCost: Number(noDocbcCost),
        genHlth: Number(genHlth),
        mentHlth: Number(mentHlth),
        physhlth: Number(physhlth),
        diffWalk: Number(diffWalk),
        sex: Number(sex) ,
        age: Number(age),
        education: Number(education),
        income: Number(income)
    });
    
    const res = await fetch(API_URL, {
        method: 'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body: peticion,
    });
    if (res.status!==200) {
        alert("Ocurrio un error");
    }else{
        const data = await res.json();
        resultados_diabetes(data);
    }
    
    //console.log(data);
}

function resultados_diabetes(data) {
    const titulo_form= document.getElementById("titulo_form");
    titulo_form.classList.add("hidden");
    const principal_form = document.getElementById("principal_form");
    principal_form.classList.add("hidden")
    const button_principal = document.getElementById("button_principal");
    button_principal.classList.add("hidden");

    const res_diabetes = document.getElementById("res_diabetes");
    res_diabetes.classList.remove("hidden");
    document.getElementById("diabetes_res").innerText = data?.Diagnostico;
    document.getElementById("diabetes_pCorrecto").innerText=data?.pCorrecto;
   // document.getElementById("diabetes_precision").innerText=data?.precision;
}