var buscar = "";


    function criptografar() {

    buscar = document.getElementById('decodificar').value;

    texto = buscar.replace(/e/g, "fai").replace(/i/g, "fe").replace(/a/g, "de").replace(/o/g, "pla").replace(/u/g, "cet");

    document.getElementById('digito').innerHTML = texto;


    if (buscar == "") {
        document.getElementById("limpar").style.display = "block";
    } else {
        document.getElementById("limpar").style.display = "none";
    }


    if (buscar == "") {
        document.getElementById("aparecer").style.display = "none";
    } else {
        document.getElementById("aparecer").style.display = "block";
    }
}

function descriptografar() {

    buscar = document.getElementById('decodificar').value;

    texto = buscar.replace(/fai/g, "e").replace(/fe/g, "i").replace(/de/g, "a").replace(/pla/g, "o").replace(/cet/g, "u");

    document.getElementById('digito').innerHTML = texto;

    if (buscar == "") {
        document.getElementById("limpar").style.display = "block";
    } else {
        document.getElementById("limpar").style.display = "none";
    }
    

    if (buscar == "") {
        document.getElementById("aparecer").style.display = "none";
    } else {
        document.getElementById("aparecer").style.display = "block";
    }
}


function copia(){
    navigator.clipboard.writeText(texto).then(() => {
        
    })

}




