document.addEventListener("DOMContentLoaded", function () {

    const Botao = document.getElementById("calcula");
    const resultado = document.getElementById("resultado");

    Botao.addEventListener("click", function () {

        const opcao = document.getElementById("opcao").value;
        const N = parseInt(document.getElementById("N").value);

        if (isNaN(N)) {
            resultado.textContent = "Quantidade inválida.";
            return;
        }

        const PercaMascara = 66;
        const Mascara = 1986;
        const Tecido = 0.30;
        const Elastico = 0.20;
        
            
        switch (opcao) {
            case "a":
           
                const PercaDiaPorcento =(((N * 3.32326284)/100) * 100)/ N;
                const PercaTotal =  (((N * 3.32326284)/100) * 100)/ N ; 
                resultado.textContent = `Perda diária: ${PercaDiaPorcento.toFixed(2)}%\nPerda total: ${PercaTotal.toFixed(2)}%`;
                break;

            case "b":
                const TecidoUsado = Tecido * N;
                resultado.textContent = `Metros quadrados de tecido utilizados: ${TecidoUsado.toFixed(2)} m²`;
                break;

            case "c":
                const ElasticoUsado = Elastico * N;
                resultado.textContent = `Metros de elástico utilizados: ${ElasticoUsado.toFixed(2)} m`;
                break;

            case "d":
                const PercaTecido = (N / 66) * Tecido;
                const PercaElastico = ( N / 66 ) * Elastico;
                resultado.textContent = `Perda de tecido: ${PercaTecido.toFixed(2)} m² \nPerda de elástico: ${PercaElastico.toFixed(2)} m`;
                break;
        }
    });
});
