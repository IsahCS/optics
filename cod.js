let esfEsq = document.getElementById("grau-esf-esq")
let esfDir = document.getElementById("grau-esf-dir")
let cilEsq = document.getElementById("grau-cil-esq")
let cilDir = document.getElementById("grau-cil-dir")
const resultado = document.getElementById("resultado")

const select = document.getElementById("test")

console.log(resultado)

criaGraus()

function criaGraus() {
    for(let i = -15; i <= 0; i++){
        let grau = i
    }

    let i = -15;
    let graus = []
    while(i <= 0) {
        graus.push(i)
        
        esfDir.innerHTML += `
            <option value="${i}">
            ${i}
            </option>
        `

        esfEsq.innerHTML += `
            <option value="${i}">
            ${i}
            </option>
        `

        cilDir.innerHTML += `
            <option value="${i}">
            ${i}
            </option>
        `

        cilEsq.innerHTML += `
            <option value="${i}">
            ${i}
            </option>
        `

        i = i + 0.25
    }

    console.log(graus)
}


function exibirLente() {
    console.log("exibindo lente...")
    console.log(esfEsq.value, esfDir.value, cilEsq.value, cilDir.value)
    if (((-12 <= esfEsq.value && esfEsq.value <= -3) || (-12 <= esfDir.value && esfDir.value <= -3))) {
        if (((-2 <= cilEsq.value && cilEsq.value <= 0) || (-2 <= cilDir.value && cilDir.value <= 0)) 
            || (-3 <= cilDir.value && cilDir.value <= -10) || (-3 <= cilEsq.value && cilEsq.value <= -10)) {
            document.getElementById("resultado").style.display = "flex"
            console.log("SUA LENTE É A PRIME")
            resultado.innerText = "SUA LENTE É A PRIME"
        }
    } else if (((-15 < esfDir.value && esfDir.value < 0) || (-15 < esfEsq.value && esfEsq.value < 0)) && 
        ((-5 < cilDir.value && cilDir.value < 0) || (-5 < cilEsq.value && cilEsq.value < 0))) {
            document.getElementById("resultado").style.display = "flex"
            console.log("SUA LENTE É VISION")
            resultado.innerText = "SUA LENTE É A VISION"
    }
}



