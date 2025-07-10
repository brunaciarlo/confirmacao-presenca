document.addEventListener("DOMContentLoaded", function () {
    const numeroInput = document.getElementById("numero");
    const convidadosDiv = document.querySelector(".convidados");
    document.getElementById("loading-popup").style.display = "none";

    numeroInput.addEventListener("input", function () {
        let numConvidados = parseInt(numeroInput.value);
        convidadosDiv.innerHTML = "";

        if (!isNaN(numConvidados) && numConvidados > 0) {
            for (let i = 1; i <= numConvidados; i++) {

                convidadosDiv.classList.remove("hidden");
                let label = document.createElement("label");
                label.textContent = `Nome convidado ${i}:`;

                let input = document.createElement("input");
                input.classList.add("input-convidado");
                input.type = "text";
                input.name = `convidado-${i}`;
                input.required = true;
                input.autocomplete = "off";

                convidadosDiv.appendChild(label);
                convidadosDiv.appendChild(document.createElement("br"));
                convidadosDiv.appendChild(input);
                convidadosDiv.appendChild(document.createElement("br"));
            }
        }
    });

    document.getElementById("presenca-form").addEventListener("submit", function (event) {
        event.preventDefault();
    
        let convidados = document.querySelectorAll(".input-convidado");
        let nomesConvidados = [];
    
        convidados.forEach(input => {
            if (input.value.trim() !== "") {
                nomesConvidados.push(input.value);
            }
        });

        document.getElementById("loading-popup").style.display = "flex";

        // -- Envio de dados para o Google Sheets via Apps Script
        // Este trecho foi desativado por motivos de segurança no repositório público.
        // Ele realizava uma requisição POST para um endpoint do Google Apps Script,
        // enviando os dados de confirmação de presença para uma planilha vinculada.
        // let endpoint = "URL_REAL_REMOVIDA";
        // let dados = { convidados: nomesConvidados };
    
        // fetch(endpoint, {
        //     method: "POST",
        //     mode: "no-cors",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(dados)
        // }).then(() => {
        //     console.log("Dados enviados com sucesso!");
        //     window.location.href = "confirmacao.html";
        // }).catch(error => console.error("Erro ao enviar:", error));

        console.log("Os dados seriam enviados neste momento");
        setTimeout(() => {window.location.href = "confirmacao.html";}, 1500);
    });
    
});