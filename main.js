
const base_api = "https://api.genderize.io";
const  cowok =  document.getElementById("cowok");
const  cewek =  document.getElementById("cewek");

const genderCowok = document.getElementById ("titleCowok");
const genderCewek = document.getElementById ("titleCewek");


function showResult(name, gender, probability) {
    const tanda = document.getElementById ("tanda");

    const probabilityPercent = probability * 100;

    let genderDecode;
    if (gender == "male") {
        genderDecode = "laki-laki";
    } else {
        genderDecode = "Perempuan"
    }

    const text = `Halo ${name}, jenis kelamin kamu kemungkinan ${genderDecode}, dengan akurasi ${probabilityPercent}%`;
    
    tanda.textContent = text; 
    if(gender ==  "male" && gender != "female") {
        cewek.style.opacity = .2;
        genderCowok.style.color = "skyblue";
    }else if(gender == "female") {
        cowok.style.opacity = .2;
        genderCewek.style.color = "rgb(0, 174, 255)";
    }
}

async function predict(event) {
    if(event.key == "Enter") {
        const firstName = event.target.value;
        const queryUrl = `${base_api}/?name=${firstName}&country_id=ID`;
        
        const response = await fetch(queryUrl);
        const result = await response.json();
        showResult(result.name, result.gender, result.probability);
        }
    }


