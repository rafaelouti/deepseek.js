const axios = require("axios");
require("dotenv").config();

const API_URL = "https://api.deepseek.com/v1/completions";
const API_KEY = process.env.API_KEY;

async function generateCode(prompt) {
    try {
        const response = await axios.post(
            API_URL,
            {
                model: "deepseek-coder",
                prompt: prompt,
                max_tokens: 100
            },
            {
                headers: {
                    Authorization: `Bearer ${API_KEY}`,
                    "Content-Type": "application/json"
                }
            }
        );
        console.log("Código gerado:\n", response.data.choices[0].text);
    } catch (error) {
        console.error("Erro ao gerar código:", error.response ? error.response.data : error.message);
    }
}

// Executar via CLI
const userPrompt = process.argv.slice(2).join(" ");
if (userPrompt) {
    generateCode(userPrompt);
} else {
    console.log("Uso: node deepseek.js \"Escreva um código em JavaScript para calcular fatorial\"");
}
