document.addEventListener('DOMContentLoaded' , function(){
    document.getElementById('form-sort').addEventListener('submit',function(evento){
        evento.preventDefault();
        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.random() * numeroMaximo;
        numeroAleatorio = Math.floor(numeroAleatorio+1);
        document.getElementById('resultado').innerText = numeroAleatorio;
        document.querySelector('.resultado').style.display='block';
    })
} )