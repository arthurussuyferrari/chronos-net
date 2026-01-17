# Chronos Net ⏱️

Chronos Net é uma extensão para **Google Chrome** que monitora e organiza o tempo gasto em sites de forma automática, local e transparente.

A extensão registra quanto tempo o usuário permanece ativo em cada domínio, permitindo uma visão clara dos hábitos de navegação e ajudando no foco, produtividade e uso consciente da internet.

---

## ✨ Funcionalidades

- ⏳ Monitoramento automático do tempo gasto por site
- 🌐 Agrupamento por domínio (ex: `youtube.com`)
- 📊 Visualização simples via popup
- 🧠 Identificação clara dos hábitos de navegação
- 🔒 Dados armazenados **somente localmente**
- 🚫 Ignora páginas internas do Chrome (`new tab`, `chrome://`)

---

## 🧱 Arquitetura

A extensão utiliza o **Manifest V3** e segue uma arquitetura simples e eficiente:

- **Service Worker (background)**  
  Responsável por detectar abas ativas e contabilizar o tempo de uso.

- **Popup UI**  
  Interface que exibe estatísticas de tempo por site.

- **Chrome Storage API**  
  Armazena os dados localmente no navegador.

---

## 🛠️ Tecnologias Utilizadas

- TypeScript
- Chrome Extensions (Manifest V3)
- Service Workers
- Chrome Tabs API
- Chrome Storage API
- HTML + CSS (UI do popup)
- Node.js (build)

---

## 📁 Estrutura do Projeto

chronos-net/
├── src/
│ ├── background.ts
│ └── popup/
│ ├── popup.html
│ ├── popup.css
│ └── popup.ts
├── dist/ # gerado no build
├── copy-assets.js
├── manifest.json
├── package.json
├── tsconfig.json
└── README.md

yaml
Copy code

---

## ⚙️ Build do Projeto

O projeto utiliza **TypeScript puro**, sem bundler (por enquanto).  
Arquivos estáticos (`.html` e `.css`) são copiados manualmente via script Node.

### 📦 Instalar dependências

```bash
npm install
🔨 Gerar build
bash
Copy code
npm run build
Esse comando:

Remove a pasta dist

Compila os arquivos TypeScript

Copia popup.html e popup.css para dist/popup

📂 Estrutura gerada no build
Após o build, a pasta dist ficará assim:

arduino
Copy code
dist/
├── background.js
└── popup/
    ├── popup.js
    ├── popup.html
    └── popup.css
🧪 Rodando a extensão no Chrome
Abra chrome://extensions

Ative Modo do desenvolvedor

Clique em Carregar sem compactação

Selecione a pasta do projeto (chronos-net/)

🔐 Privacidade
O Chronos Net respeita totalmente a privacidade do usuário:

❌ Nenhuma coleta de dados externos

❌ Nenhuma comunicação com servidores

✔️ Todos os dados ficam no chrome.storage.local

✔️ Código aberto e auditável

🚀 Próximos Passos (Roadmap)
📊 Gráficos de uso (diário / semanal)

⏱️ Contador em tempo real no popup

🚫 Limite de tempo por site

🌙 Modo foco

📤 Exportação de dados (CSV)

🧩 Migração para Vite (build otimizado)

📄 Licença
MIT © Chronos Net

yaml
Copy code

---

Se quiser, no próximo passo posso:
- melhorar o README para **publicação na Chrome Web Store**
- criar **badges**
- escrever um **texto de descrição oficial**
- organizar um **roadmap técnico**

Só dizer 🚀






```
