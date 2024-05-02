var textInput = document.querySelector("#input-texto");
var textOutput = document.querySelector("#saida-texto");

//função para remover letras maiúsculas e caracteres especiais
textInput.addEventListener('input', function(event) {
    
    var inputText = event.target.value;
    var filteredText = inputText.replace(/[^a-z]/g, '');

    event.target.value = filteredText;
});

function criptografar(){
    var texto = textInput.value;

    var textoCriptografado = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/, "ober")
    .replace(/u/g, "ufat");

    document.getElementById("saida-texto").innerHTML = textoCriptografado;
    document.getElementById("saida-texto").style.display = "block";
    document.getElementById("copia").style.display = "block";
    document.getElementById("texto-mensagem").style.display = "none";
    
}

function descriptografar(){
    var texto = textInput.value;

    var textoDescriptografado = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o")
    .replace(/ufat/g, "u");

    document.getElementById("saida-texto").innerHTML = textoDescriptografado;

}

function copiar(){

    var textoCop = document.getElementById("saida-texto").innerHTML;

    navigator.clipboard.writeText(textoCop);

    alert("O texto foi copiado!");
}
