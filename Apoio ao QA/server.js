const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
require('dotenv').config(); // Importa as variáveis de ambiente do .env

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Chave da API da OpenAI (carregada do .env)
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

if (!OPENAI_API_KEY) {
    console.error("Erro: A chave da API da OpenAI não está configurada. Verifique o arquivo .env.");
    process.exit(1); // Finaliza o processo se a chave não estiver configurada
}

app.post('/api/generate', async (req, res) => {
    const { userStory } = req.body;

    if (!userStory) {
        return res.status(400).json({ error: 'História de usuário não fornecida' });
    }

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: 'gpt-4',
                messages: [{ role: 'user', content: `Gere cenários de teste em Gherkin para: "${userStory}"` }],
                max_tokens: 300,
                temperature: 0.7
            })
        });

        const data = await response.json();

        if (response.ok) {
            res.json({ scenarios: data.choices[0].message.content });
        } else {
            console.error("Erro na resposta da OpenAI:", data);
            res.status(500).json({ error: 'Erro ao gerar os cenários de teste.' });
        }
    } catch (error) {
        console.error("Erro no servidor:", error);
        res.status(500).json({ error: 'Erro no servidor.' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});