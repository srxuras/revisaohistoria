/* =====================================================================
   MODELO DE SITE DE REVISÃO · Profª Ana Clara
   ---------------------------------------------------------------------
   Para fazer outra matéria: copie a pasta "modelo", renomeie (ex.: "geografia"),
   edite SÓ este arquivo (conteudo.js) e troque o <title> no index.html da pasta.
   O motor (assets/motor.js) e o visual (assets/estilo.css) são os mesmos para todas.

   1) SITE ......... nome, série, rabiscos da lousa, textos da tela inicial
   2) SECOES ....... os títulos que separam os cards (ex.: um por módulo)
   3) MODS ......... cada card = um assunto: explicação (study) + quiz
   4) JOGOS ........ lista de joguinhos: escolha os tipos que combinam

   QUIZ: em cada questão, a PRIMEIRA alternativa é sempre a certa
   (o site embaralha sozinho). Campos: q (pergunta), o (alternativas),
   e (explicação depois de responder), ex (trecho opcional),
   ref (página opcional, ex.: "pág. 45").

   TIPOS DE JOGO (campo "tipo") e o formato de "dados":
   - "ordem"       sequências para pôr em ordem (linha do tempo, etapas, enredo)
                   {instrucao, partes:[rótulos], sets:[{t, p:[itens em ordem], d:[rótulo revelado]}]}
   - "antesdepois" dois cartões: qual vem primeiro? (datas, tamanhos, distâncias)
                   {pergunta, regra, distanciaMinima, itens:[{t, v:número, label}]}
                   (menor v vem primeiro; use maiorPrimeiro:true para inverter)
   - "quemsou"     adivinhar pelas pistas  [{r:"resposta", pistas:[4 pistas, da mais difícil à mais fácil]}]
   - "liga"        ligar pares, ex.: causa → consequência  {rotuloA, rotuloB, pergunta, pares:[[a,b]]}
   - "simbolos"    reconhecer a categoria pelo desenho ou pela situação
                   {cats:{chave:{nome,dica,svg}}, situacoes:[[texto,chave]]}
   - "separa"      classificar rápido em caixas  [{nome, dica, bins:[{k,label,sub}], items:[[texto,k]]}]
   - "vf"          relâmpago verdadeiro ou falso  [[frase, true/false, explicação]]
   - "memoria"     jogo da memória  [[termo, significado]]
   - "forca"       forca  [["PALAVRA","dica"]]
   Ícones disponíveis (campo "icone"): balao, raio, cartas, alvo, letras,
   lista, linha, templo, relogio, lupa, setas, balanca.
   ===================================================================== */

const SITE={
 id:"modelo",            // nome curto e único: separa o progresso salvo de cada matéria
 titulo:"Revisão de Exemplo",
 serie:"6º ano · modelo",
 doodles:["A B C","2+3=5","3x4=12","1 2 3"],
 contato:"https://wa.me/5511976280903",
 subModulos:"Este é o modelo. Os cards de exemplo mostram como cada parte funciona.",
 subJogos:"Todos os tipos de joguinho disponíveis, com dados de exemplo sobre o Sistema Solar.",
 rodapeModulos:"Quando aparece “pág.”, vale abrir a apostila e olhar o texto citado.",
 rodapeJogos:"Em cada matéria, mantenha só os joguinhos que combinam com o conteúdo."
};

const SECOES=[
 {mod:0,t:"Como usar este modelo",s:"Um card que mostra todos os blocos de explicação disponíveis."},
 {mod:1,t:"Exemplo · Sistema Solar",s:"Dois cards de exemplo, como ficaria uma matéria de verdade."}
];

/* Desenhos para o jogo do tipo "simbolos" (SVG simples, com traço) */
const S='stroke="currentColor" stroke-width="3" fill="none" stroke-linejoin="round" stroke-linecap="round"';
const SVG={
 sol:`<svg viewBox="0 0 120 80"><circle cx="60" cy="40" r="16" ${S}/><path ${S} d="M60 8v8M60 64v8M28 40h8M84 40h8M38 18l6 6M76 56l6 6M82 18l-6 6M44 56l-6 6"/></svg>`,
 rochoso:`<svg viewBox="0 0 120 80"><circle cx="60" cy="40" r="26" ${S}/><circle cx="50" cy="32" r="5" ${S}/><circle cx="68" cy="50" r="7" ${S}/><circle cx="70" cy="28" r="3" ${S}/></svg>`,
 gasoso:`<svg viewBox="0 0 120 80"><circle cx="60" cy="40" r="22" ${S}/><path ${S} d="M40 33h40M38 42h44M42 50h36"/><ellipse cx="60" cy="40" rx="46" ry="10" ${S}/></svg>`,
 lua:`<svg viewBox="0 0 120 80"><path ${S} d="M70 10 A30 30 0 1 0 70 70 A24 24 0 1 1 70 10Z"/></svg>`,
 cometa:`<svg viewBox="0 0 120 80"><circle cx="84" cy="26" r="9" ${S}/><path ${S} d="M76 32 20 66M78 22 26 50M86 36 44 72"/></svg>`
};

const MODS=[
{
 id:"guia", mod:0, tag:"?", color:"#FFD23F",
 title:"Guia do modelo", pages:"Todos os blocos que dá para usar na explicação",
 study:`
<p class="book"><i class='ib'></i> Este selo indica a página da apostila: &lt;p class="book"&gt;</p>
<h3>Títulos e texto</h3>
<p>Cada assunto começa com um título &lt;h3&gt;, seguido de parágrafos curtos. Use <strong>negrito</strong> para as palavras que caem na prova.</p>
<ul><li>Listas ajudam a separar ideias.</li><li>Uma ideia por item.</li></ul>
<h3>Comparação lado a lado</h3>
<div class="vs">
 <div style="background:#DDEFFF;color:#1B1F3B">Coisa A<span class="big">EM 2 PALAVRAS</span>explicação curta</div>
 <div style="background:#FFE0EA;color:#1B1F3B">Coisa B<span class="big">EM 2 PALAVRAS</span>explicação curta</div>
</div>
<p>Para três colunas, use <code>class="vs three"</code>.</p>
<h3>Truque e destaque</h3>
<div class="trick"><strong>Truque:</strong> caixa tracejada para macetes de memorização (class="trick").</div>
<div class="box">Caixa azul para uma definição ou um resumo importante (class="box").</div>
<h3>Tabela</h3>
<div class="tbl"><table><tr><th>Coluna 1</th><th>Coluna 2</th></tr><tr><td>Item</td><td>Explicação</td></tr></table></div>
<h3>Linha do tempo ou etapas</h3>
<div class="tl">
 <div><b>Etapa 1</b><span>Serve para datas, fases ou passos (class="tl").</span></div>
 <div><b>Etapa 2</b><span>Cada &lt;div&gt; tem um &lt;b&gt; e um &lt;span&gt;.</span></div>
</div>
<h3>Pirâmide</h3>
<div class="pyr">
 <div style="width:50%;background:#FFD23F">Topo</div>
 <div style="width:75%;background:#7FD3FF">Meio</div>
 <div style="width:100%;background:#9EE6B8">Base</div>
</div>`,
 quiz:[
  {q:"No quiz, qual alternativa deve ser escrita primeiro?", o:["A correta","A mais longa","A mais engraçada","Tanto faz"], e:"O site embaralha as alternativas sozinho. A primeira da lista é sempre a certa."},
  {q:"Onde se escreve a página da apostila de uma questão?", o:["No campo ref","No campo e","No título do site","Não dá para colocar"], e:"Ex.: ref:\"pág. 45\". Aparece como selo na questão."},
  {q:"Quantas questões um card precisa ter?", o:["Quantas o assunto pedir","Exatamente 10","Exatamente 5","Pelo menos 20"], e:"O site conta sozinho e mostra a nota sobre o total."}
 ]
},
{
 id:"planetas", mod:1, tag:"1", color:"#7FD3FF",
 title:"Os planetas", pages:"Exemplo de card · Sistema Solar",
 study:`
<h3>O Sistema Solar</h3>
<p>O <strong>Sol</strong> é uma estrela. Em volta dele giram <strong>oito planetas</strong>, além de luas, cometas e asteroides.</p>
<div class="tl">
 <div><b>Rochosos</b><span>Mercúrio, Vênus, Terra e Marte: menores e mais perto do Sol.</span></div>
 <div><b>Gasosos</b><span>Júpiter, Saturno, Urano e Netuno: gigantes e mais longe do Sol.</span></div>
</div>
<div class="trick"><strong>Truque da ordem:</strong> “<strong>M</strong>inha <strong>V</strong>ó <strong>T</strong>em <strong>M</strong>uitas <strong>J</strong>oias, <strong>S</strong>ó <strong>U</strong>sa <strong>N</strong>o pescoço”.</div>`,
 quiz:[
  {q:"O Sol é:", o:["uma estrela","um planeta","uma lua","um cometa"], e:"É a estrela no centro do Sistema Solar."},
  {q:"Quantos planetas tem o Sistema Solar?", o:["8","9","7","10"], e:"Mercúrio, Vênus, Terra, Marte, Júpiter, Saturno, Urano e Netuno."},
  {q:"Qual destes é um planeta rochoso?", o:["Marte","Júpiter","Saturno","Netuno"], e:"Os rochosos são os quatro mais perto do Sol."},
  {q:"Qual é o planeta mais perto do Sol?", o:["Mercúrio","Vênus","Terra","Netuno"], e:"É o primeiro da frase: “Minha…”."}
 ]
},
{
 id:"movimentos", mod:1, tag:"2", color:"#9EE6B8",
 title:"Os movimentos da Terra", pages:"Exemplo de card · Sistema Solar",
 study:`
<div class="vs">
 <div style="background:#FFF1C2;color:#1B1F3B">Rotação<span class="big">GIRA EM SI</span>cerca de 24 horas: dia e noite</div>
 <div style="background:#DDEFFF;color:#1B1F3B">Translação<span class="big">VOLTA NO SOL</span>cerca de 365 dias: um ano</div>
</div>
<p>As <strong>estações do ano</strong> acontecem por causa da inclinação do eixo da Terra junto com a translação.</p>`,
 quiz:[
  {q:"O movimento que forma o dia e a noite é a:", o:["rotação","translação","inclinação","órbita da Lua"], e:"A Terra gira em torno de si mesma em cerca de 24 horas."},
  {q:"A volta completa da Terra em torno do Sol dura cerca de:", o:["365 dias","24 horas","30 dias","7 dias"], e:"É a translação: um ano."},
  {q:"As estações do ano são causadas:", o:["pela inclinação do eixo da Terra junto com a translação","pela distância da Lua","pela rotação apenas","pelos cometas"], e:"Por isso os hemisférios recebem mais ou menos luz em cada época."}
 ]
}
];

const JOGOS=[
{id:"ordem",tipo:"ordem",icone:"linha",cor:"#FFC98A",titulo:"Em Ordem",desc:"Exemplo do tipo “ordem”: ponha os itens na sequência certa.",
 dados:{instrucao:"Toque nos planetas do mais perto ao mais longe do Sol.",partes:["Mais perto","Depois","Depois","Mais longe"],fimTitulo:"Tudo em ordem!",outro:"Outra sequência",
  sets:[{t:"Planetas rochosos",p:["Mercúrio","Vênus","Terra","Marte"],d:["1º planeta","2º planeta","3º planeta","4º planeta"]},
        {t:"Planetas gasosos",p:["Júpiter","Saturno","Urano","Netuno"],d:["5º planeta","6º planeta","7º planeta","8º planeta"]}]}},
{id:"antes",tipo:"antesdepois",icone:"relogio",cor:"#FFD23F",titulo:"Qual Vem Primeiro?",desc:"Exemplo do tipo “antesdepois”: corrida contra o relógio.",
 dados:{pergunta:"Qual está mais perto do Sol?",regra:"o planeta mais perto do Sol",
  itens:[{t:"Mercúrio",v:1,label:"1º"},{t:"Vênus",v:2,label:"2º"},{t:"Terra",v:3,label:"3º"},{t:"Marte",v:4,label:"4º"},{t:"Júpiter",v:5,label:"5º"},{t:"Saturno",v:6,label:"6º"},{t:"Urano",v:7,label:"7º"},{t:"Netuno",v:8,label:"8º"}]}},
{id:"quem",tipo:"quemsou",icone:"lupa",cor:"#7FD3FF",titulo:"Quem Sou Eu?",desc:"Exemplo do tipo “quemsou”: menos pistas, mais pontos.",rodadas:4,
 dados:[
  {r:"Terra",pistas:["Sou um planeta rochoso.","Tenho uma lua.","Sou o terceiro a partir do Sol.","Tenho água líquida e seres vivos."]},
  {r:"Saturno",pistas:["Sou um planeta gasoso.","Sou o sexto a partir do Sol.","Sou muito maior que a Terra.","Sou famoso pelos meus anéis."]},
  {r:"Sol",pistas:["Não sou um planeta.","Fico no centro do sistema.","Produzo luz e calor.","Sou uma estrela."]},
  {r:"Mercúrio",pistas:["Sou um planeta rochoso.","Sou o menor dos planetas.","Não tenho lua.","Sou o mais perto do Sol."]},
  {r:"Marte",pistas:["Sou um planeta rochoso.","Sou o quarto a partir do Sol.","Robôs já andaram na minha superfície.","Sou conhecido como planeta vermelho."]}
 ]},
{id:"liga",tipo:"liga",icone:"setas",cor:"#9EE6B8",titulo:"Causa e Consequência",desc:"Exemplo do tipo “liga”: escolha o par certo.",rodadas:3,
 dados:{rotuloA:"Causa",rotuloB:"Consequência",pergunta:"Qual é a consequência?",
  pares:[["A Terra gira em torno de si mesma.","Existem o dia e a noite."],["A Terra dá a volta no Sol.","Um ano tem cerca de 365 dias."],["O eixo da Terra é inclinado.","Existem as estações do ano."],["A Lua reflete a luz do Sol.","Vemos a Lua brilhar à noite."]]}},
{id:"simb",tipo:"simbolos",icone:"templo",cor:"#C9B6FF",titulo:"Reconheça o Desenho",desc:"Exemplo do tipo “simbolos”: categoria pelo desenho ou pela situação.",
 dados:{perguntaDesenho:"O que este desenho representa?",perguntaSituacao:"Qual combina com:",
  cats:{sol:{nome:"Estrela",dica:"produz luz própria, como o Sol",svg:SVG.sol},rochoso:{nome:"Planeta rochoso",dica:"pequeno, de superfície sólida",svg:SVG.rochoso},gasoso:{nome:"Planeta gasoso",dica:"gigante, feito principalmente de gases",svg:SVG.gasoso},lua:{nome:"Lua (satélite)",dica:"gira em volta de um planeta",svg:SVG.lua},cometa:{nome:"Cometa",dica:"tem uma cauda quando chega perto do Sol",svg:SVG.cometa}},
  situacoes:[["Marte","rochoso"],["Júpiter","gasoso"],["Gira em volta da Terra","lua"],["Tem cauda brilhante","cometa"],["Produz luz própria","sol"]]}},
{id:"separa",tipo:"separa",icone:"alvo",cor:"#FF9EC0",titulo:"Separa Rápido",desc:"Exemplo do tipo “separa”: classifique nas caixas.",
 dados:[{nome:"Rochoso ou gasoso?",dica:"Esse planeta é rochoso ou gasoso?",bins:[{k:"r",label:"Rochoso"},{k:"g",label:"Gasoso"}],
  items:[["Mercúrio","r"],["Vênus","r"],["Terra","r"],["Marte","r"],["Júpiter","g"],["Saturno","g"],["Urano","g"],["Netuno","g"]]}]},
{id:"vf",tipo:"vf",icone:"raio",cor:"#FFD23F",titulo:"Relâmpago V ou F",desc:"Exemplo do tipo “vf”: 60 segundos e 3 vidas.",
 dados:[["O Sol é uma estrela.",true,"Fica no centro do Sistema Solar."],["A Lua é um planeta.",false,"É um satélite da Terra."],["Júpiter é um planeta gasoso.",true,"É o maior de todos."],["A rotação dura cerca de 365 dias.",false,"Isso é a translação. A rotação dura cerca de 24 horas."]]},
{id:"mem",tipo:"memoria",icone:"cartas",cor:"#9EE6B8",titulo:"Caça-Pares",desc:"Exemplo do tipo “memoria”: termo e significado.",
 dados:[["Rotação","gira em torno de si"],["Translação","volta em torno do Sol"],["Estrela","tem luz própria"],["Satélite","gira em volta de um planeta"],["Órbita","caminho em volta de um astro"],["Cometa","tem cauda brilhante"]]},
{id:"forca",tipo:"forca",icone:"letras",cor:"#7FD3FF",titulo:"Forca",desc:"Exemplo do tipo “forca”: adivinhe pela dica.",
 dados:[["SATURNO","Planeta famoso pelos anéis"],["ROTAÇÃO","Movimento que forma o dia e a noite"],["ESTRELA","Astro com luz própria"],["MERCÚRIO","Planeta mais perto do Sol"],["TRANSLAÇÃO","Volta da Terra em torno do Sol"]]}
];
