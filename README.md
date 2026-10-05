# Revisões da Profª Ana Clara

Sites de revisão para o 6º ano, com explicação, quiz e joguinhos. São só HTML, CSS e JavaScript, sem instalar nada.

## Estrutura

```
index.html            página inicial com a lista de matérias
assets/estilo.css     visual (igual para todas as matérias)
assets/motor.js       funcionamento dos quizzes e joguinhos (igual para todas)
historia/             História · módulos 14 e 15 (Roma)
  index.html
  conteudo.js         todo o conteúdo da matéria
modelo/               base para criar uma matéria nova
  index.html
  conteudo.js         explica cada campo e traz exemplos de todos os tipos de jogo
.nojekyll             avisa o GitHub Pages para publicar os arquivos como estão
```

## Publicar no GitHub Pages

1. Crie um repositório no GitHub (ex.: `revisoes`).
2. Envie todos os arquivos desta pasta para ele (botão **Add file → Upload files**, arrastando a pasta inteira).
3. No repositório, abra **Settings → Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**, branch `main`, pasta `/ (root)`, e salve.
5. Em um ou dois minutos o site fica em `https://SEU-USUARIO.github.io/revisoes/`.

## Criar uma matéria nova

1. Copie a pasta `modelo` e dê um nome novo (ex.: `geografia`).
2. Na pasta nova, edite só o `conteudo.js`:
   - em `SITE`, troque `id` (ex.: `"geografia"`), título, série e textos;
   - em `SECOES` e `MODS`, coloque os cards (explicação + quiz);
   - em `JOGOS`, mantenha só os tipos de jogo que combinam com o que cai na prova.
3. No `index.html` da pasta nova, troque o `<title>`.
4. No `index.html` da raiz, copie um dos cards `<a class="mod">` e aponte para a pasta nova.

No quiz, a **primeira alternativa é sempre a certa**: o site embaralha sozinho.

## Testar no computador

Basta abrir o `index.html` de uma matéria no navegador. As notas e recordes ficam salvos no navegador de quem usa, separados por matéria (campo `id`).
