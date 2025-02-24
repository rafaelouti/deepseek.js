# DeepSeek Coder API - Exemplo em JavaScript

Este projeto demonstra como utilizar a API do **DeepSeek Coder** para gerar código automaticamente com base em prompts fornecidos pelo usuário. Ele é escrito em **Node.js** e executado via linha de comando (CLI).

## 🚀 Requisitos

- Node.js 14+
- Biblioteca `axios` para requisições HTTP
- Biblioteca `dotenv` para carregar variáveis de ambiente
- Chave de API do DeepSeek (crie uma conta no serviço para obter a chave)

## 📥 Instalação

1. Clone este repositório:
   ```sh
   git clone https://github.com/seu-usuario/deepseek-js.git
   cd deepseek-js
   ```

2. Instale as dependências:
   ```sh
   npm install
   ```

3. Crie um arquivo `.env` na raiz do projeto e adicione sua chave de API:
   ```env
   API_KEY=SUA_CHAVE_AQUI
   ```

## ▶ Uso

Execute o script para gerar código automaticamente:

```sh
node deepseek.js "Escreva um código em JavaScript para calcular o fatorial"
```

### 📌 Exemplo de Código (`deepseek.js`)

```javascript
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
```

## 📝 Exemplo de Uso

```sh
node deepseek.js "Escreva um código em JavaScript para calcular a sequência de Fibonacci"
```

💡 **Saída esperada:**
```js
function fibonacci(n) {
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}
console.log(fibonacci(10));
```

## 📜 Licença

Este projeto é distribuído sob a licença MIT.

