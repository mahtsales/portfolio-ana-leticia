# Portfólio Ana Letícia Santana

Site estático de portfólio construído para Ana Letícia Santana, estudante de Biomedicina na Uninorte.

## Arquivos

- `index.html` — estrutura da página.
- `styles.css` — tema rosa claro, layout profissional e responsivo.
- `script.js` — animações de rolagem, contadores e barra de progresso.
- `photo/profile.jpg` — foto de perfil usada no card principal.

## Como visualizar localmente

1. Abra `index.html` no navegador.
2. Ou use um servidor local simples:

```bash
cd /Users/mahtsales/Documentos/portfolio-santana
python3 -m http.server 8000
```

Depois acesse `http://127.0.0.1:8000`.

## Como hospedar na internet

### GitHub Pages

1. Crie um repositório no GitHub.
2. No terminal:

```bash
git init
git add .
git commit -m "Portfólio Ana Letícia Santana"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/NOME_DO_REPO.git
git push -u origin main
```

3. No GitHub, ative GitHub Pages em `Settings > Pages`.
4. Escolha `main` como branch e salve.

### Netlify ou Vercel

1. Conecte sua conta GitHub.
2. Selecione o repositório.
3. Configure o build como nenhum (build command vazio) e `publish directory` como `/`.
4. Publicar.

## Atualizações realizadas

- Tema rosa claro feminino e profissional.
- Links reais de contato e redes sociais.
- Foto de perfil inserida no card do hero.
- Conteúdo adaptado à área de Biomedicina.
- Animações suaves e barra de progresso.
