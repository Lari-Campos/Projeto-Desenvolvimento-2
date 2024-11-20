async function submitStory() {
    const userStory = document.getElementById("userStory").value;
    const output = document.getElementById("output");

    output.textContent = "Processando...";

    if (userStory.trim() === "") {
        output.textContent = "Por favor, insira uma história de usuário.";
        return;
    }

    try {
        // Requisição ao backend
        const response = await fetch("http://localhost:3000/api/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ userStory })
        });

        const data = await response.json();

        if (response.ok) {
            output.textContent = data.scenarios;
        } else {
            output.textContent = "Erro ao gerar os cenários.";
            console.error("Erro retornado do backend:", data);
        }
    } catch (error) {
        output.textContent = "Erro ao se conectar ao servidor.";
        console.error("Erro ao processar a solicitação:", error);
    }
}