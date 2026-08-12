# Vantto Clone

Site institucional construído com TanStack Start, TypeScript, React e Tailwind CSS.

## Tecnologias

- [TanStack Start](https://tanstack.com/start)
- TypeScript
- React
- Tailwind CSS

## Como rodar localmente

Requisitos: Node.js instalado ([instalar com nvm](https://github.com/nvm-sh/nvm#installing-and-updating)).

\`\`\`sh
git clone <url-deste-repositorio>
cd <nome-do-repositorio>
npm install
npm run dev
\`\`\`

## Scripts disponíveis

- \`npm run dev\` — inicia o servidor de desenvolvimento
- \`npm run build\` — gera o build de produção
- \`npm run preview\` — visualiza o build de produção localmente
- \`npm run lint\` — executa o linter
- \`npm run format\` — formata o código com Prettier

## Publicar no GitHub Pages

Este projeto está configurado para gerar uma versão estática (prerender) e publicar automaticamente no GitHub Pages via GitHub Actions.

1. No repositório do GitHub, vá em **Settings → Pages**.
2. Em **Source**, selecione **GitHub Actions**.
3. Faça um push para a branch `main` — o workflow em `.github/workflows/deploy.yml` builda e publica o site automaticamente.
4. O site ficará disponível em `https://<seu-usuario>.github.io/oficialvanttoia/`.
