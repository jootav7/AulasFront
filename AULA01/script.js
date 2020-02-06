
const $calcular = document.getElementById('CALCULAR');

function calcularMedia(){
    const $nome = document.getElementById('nome');
    const $nota1 = document.getElementById('nota1');
    const $nota2 = document.getElementById('nota2');
    const $media = document.getElementById('media');

    $media.valeu = (parseInt($nota1.valeu) + parseInt($nota2.value)) / 2;

    if (media >= 5){
        $situacao.value = "Aprovado";
        $situacao.style.color = "green";
        
    }
}

$calcular.addEventListener('click', CALCULARMedia);

  