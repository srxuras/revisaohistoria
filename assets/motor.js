/* =====================================================================
   MOTOR DO SITE DE REVISÃO · não precisa mexer aqui.
   Tudo o que muda de uma matéria para outra fica no bloco CONFIG acima.
   ===================================================================== */
const L = ["a","b","c","d"];
const NS = (typeof SITE!=="undefined"&&SITE.id)?SITE.id+":":"";  /* separa o progresso salvo de cada matéria */
const root = document.getElementById("root");
let state = {view:"home"};

function getBest(id){ try{ const v = localStorage.getItem(NS+"best-"+id); return v===null?null:+v; }catch(e){ return null; } }
function setBest(id,n){ try{ const b=getBest(id); if(b===null||n>b) localStorage.setItem(NS+"best-"+id,String(n)); }catch(e){} }
function shuffle(a){ a=a.slice(); for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a; }
const pick=(a,n)=>shuffle(a).slice(0,n);
const norm=t=>t.normalize("NFD").replace(/[̀-ͯ]/g,"").toUpperCase();
const starsTxt=n=>"★".repeat(n)+"☆".repeat(3-n);

/* ===== IDENTIDADE · Profª Ana Clara ===== */
const pacWa=`<svg class="pac-wa" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>`;
const pacNome=()=>`<span class="pac-sr">Professora Ana Clara</span><span aria-hidden="true">Prof<span class="pac-ord">a</span> Ana Clara</span>`;
function pacSignature(){
  const d=SITE.doodles||["","","",""];
  return `<div class="pac">
    <div class="pac-board">
      <span class="pac-doodle tl" aria-hidden="true">${d[0]}</span><span class="pac-doodle tr" aria-hidden="true">${d[1]}</span>
      <span class="pac-doodle bl" aria-hidden="true">${d[2]}</span><span class="pac-doodle br" aria-hidden="true">${d[3]}</span>
      <span class="pac-name">${pacNome()}</span>
    </div>
    <div class="pac-tray" aria-hidden="true"><i class="c1"></i><i class="c2"></i><i class="er"></i></div>
  </div>`;
}
function pacPlate(){ return `<div class="pac-plate">${pacNome()}</div>`; }
function pacMini(){ return SITE.contato?`<a class="pac-mini" href="${SITE.contato}" target="_blank" rel="noopener" aria-label="Chamar no WhatsApp">${pacWa}<span>Contato</span></a>`:""; }

/* ===== ícones (traço, sem emoji) ===== */
const SV=(d)=>`<svg viewBox="0 0 24 24" aria-hidden="true">${d}</svg>`;
const CHEV=SV('<path d="M9 5l7 7-7 7"/>');
const ICONES={
 balao:SV('<path d="M5 5h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-7l-5 4v-4H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"/>'),
 raio:SV('<path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"/>'),
 cartas:SV('<rect x="3" y="8" width="12" height="13" rx="2"/><path d="M8 4.5h11a2 2 0 0 1 2 2V17"/>'),
 alvo:SV('<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4.5"/><path d="M12 12h.01"/>'),
 letras:SV('<path d="M3 16.5 5.8 7l2.8 9.5M4.2 13.3h3.2"/><path d="M11.5 17h3.5M17.5 17h3.5"/>'),
 lista:SV('<path d="M9 6.5h12M9 12h12M9 17.5h12"/><path d="M3.5 6.5h.01M3.5 12h.01M3.5 17.5h.01"/>'),
 linha:SV('<path d="M3 12h18"/><circle cx="6" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="18" cy="12" r="2"/><path d="M6 6v4M12 14v4M18 6v4"/>'),
 templo:SV('<path d="M4 9h16L12 4 4 9Z"/><path d="M6 9v9M10 9v9M14 9v9M18 9v9"/><path d="M3 21h18M4 18h16"/>'),
 relogio:SV('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'),
 lupa:SV('<circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5"/><path d="M10.5 8v.01M10.5 10.5v3"/>'),
 setas:SV('<path d="M4 7h11M12 4l3 3-3 3"/><path d="M20 17H9M12 14l-3 3 3 3"/>'),
 balanca:SV('<path d="M12 4v16M7 20h10M5 7h14"/><path d="M5 7 2.5 13h5L5 7ZM19 7l-2.5 6h5L19 7Z"/>')
};
const HEART=on=>`<svg class="hrt${on?"":" off"}" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 2.7 5 6 5c2 0 3.4 1 4.4 2.5C11.4 6 12.8 5 15 5c3.3 0 5.1 3.4 3.6 6.8C16.5 16.4 12 21 12 21Z"/></svg>`;
const hearts=(n,t)=>`<span role="img" aria-label="${n} de ${t} vidas">${Array.from({length:t},(_,i)=>HEART(i<n)).join("")}</span>`;

/* =============== BASE DOS JOGUINHOS =============== */
let GT=[];
function gClear(){ GT.forEach(t=>{clearInterval(t);clearTimeout(t);}); GT=[]; }
function gTimeout(fn,ms){ const t=setTimeout(fn,ms); GT.push(t); return t; }
function gInterval(fn,ms){ const t=setInterval(fn,ms); GT.push(t); return t; }
function gBest(id){ try{ const v=localStorage.getItem(NS+"gbest-"+id); return v===null?null:+v; }catch(e){ return null; } }
function gSetBest(id,n,low){ try{ const b=gBest(id); if(b===null||(low?n<b:n>b)) localStorage.setItem(NS+"gbest-"+id,String(n)); }catch(e){} }
function anim(node,cls){ node.classList.remove(cls); void node.offsetWidth; node.classList.add(cls); }
function gEnd(el,o){
  el.innerHTML=`<div class="panel"><span class="qnum">${o.title||"Resultado"}</span>
    <div class="score">${o.big}</div><p class="q">${o.msg}</p>${o.extra||""}
    <button class="btn" id="gagain">Jogar de novo</button>
    ${o.alt?`<button class="btn alt" id="galt">${o.alt.label}</button>`:""}
    <button class="btn alt" id="gmenu">Voltar aos joguinhos</button></div>`;
  document.getElementById("gagain").addEventListener("click",o.again);
  if(o.alt) document.getElementById("galt").addEventListener("click",o.alt.fn);
  document.getElementById("gmenu").addEventListener("click",()=>{ gClear(); home("games"); });
  window.scrollTo({top:0});
}
function reviewBox(rows){
  return rows.length?`<p style="margin:0;font-weight:800">Para revisar:</p><div class="review">${rows.map(r=>`<div>${r}</div>`).join("")}</div>`:"";
}
const nota=(n,t,ok,meio,ruim)=>n===t?ok:n>=t*0.7?meio:ruim;
function feedback(ok,txt,last,onNext){
  const fb=document.getElementById("gfb");
  fb.innerHTML=`<div class="balloon ${ok?"ok":"bad"}"><span class="tag">${ok?"Acertou!":"Quase!"}</span>${txt}</div>
    <button class="btn" id="gnx">${last?"Ver resultado":"Próxima"}</button>`;
  const nx=document.getElementById("gnx");
  nx.addEventListener("click",onNext);
  nx.scrollIntoView({behavior:"smooth",block:"nearest"});
}

/* ---------- TIPO "simbolos": reconheça a categoria pelo desenho ou pela situação ---------- */
function jogoSimbolos(el,g){
  const d=g.dados, keys=Object.keys(d.cats);
  const nA=Math.min(d.rodadasDesenho??3,keys.length), nB=Math.min(d.rodadasSituacao??5,d.situacoes.length);
  const rounds=shuffle(pick(keys,nA).map(k=>({t:"A",k})).concat(pick(d.situacoes,nB).map(s=>({t:"B",txt:s[0],k:s[1]}))));
  let i=0,score=0;
  function show(){
    const r=rounds[i]; let body;
    if(r.t==="A"){
      const opts=shuffle([r.k].concat(pick(keys.filter(k=>k!==r.k),3)));
      body=`<p class="q" style="margin-top:0">${d.perguntaDesenho||"O que este desenho representa?"}</p><div class="gballoon" aria-hidden="true">${d.cats[r.k].svg}</div>
        <div class="opts">${opts.map(k=>`<button class="opt" data-k="${k}"><span>${d.cats[k].nome}</span></button>`).join("")}</div>`;
    } else {
      body=`<p class="q" style="margin-top:0">${d.perguntaSituacao||"Qual combina com:"} <em>${r.txt}</em></p>
        <div class="svgrid">${shuffle(keys).map(k=>`<button class="svbtn" data-k="${k}" aria-label="${d.cats[k].nome}">${d.cats[k].svg}<span class="svl">${d.cats[k].nome}</span></button>`).join("")}</div>`;
    }
    el.innerHTML=`<div class="hud"><span class="chip">Rodada ${i+1}/${rounds.length}</span><span class="chip hot" id="bS">Acertos: ${score}</span></div>
      <div class="panel">${body}<div id="gfb" aria-live="polite"></div></div>`;
    el.querySelectorAll("[data-k]").forEach(b=>b.addEventListener("click",()=>answer(b.dataset.k,b)));
    window.scrollTo({top:0});
  }
  function answer(k,btn){
    const r=rounds[i], ok=k===r.k; if(ok) score++;
    el.querySelectorAll("[data-k]").forEach(b=>{ b.disabled=true; if(b.dataset.k===r.k) b.classList.add("right"); else if(b===btn) b.classList.add("wrong"); });
    document.getElementById("bS").textContent="Acertos: "+score;
    const last=i===rounds.length-1;
    feedback(ok,`${d.cats[r.k].nome}: ${d.cats[r.k].dica}.`,last,()=>{ if(last) end(); else { i++; show(); } });
  }
  function end(){
    gSetBest(g.id,score);
    gEnd(el,{big:score+"/"+rounds.length,msg:nota(score,rounds.length,"Perfeito! Você reconhece todos.","Muito bem! Só falta afiar um pouquinho.",d.dicaFim||"Vale reler a explicação e jogar de novo."),again:()=>jogoSimbolos(el,g)});
  }
  show();
}

/* ---------- TIPO "vf": relâmpago verdadeiro ou falso ---------- */
function jogoVF(el,g){
  const VF=g.dados, T=g.segundos||60;
  function intro(){
    el.innerHTML=`<div class="panel"><span class="qnum">Regras</span>
      <p class="q">Você tem ${T} segundos e 3 vidas. Leia a frase e toque em VERDADEIRO ou FALSO. Acertos seguidos valem mais pontos!</p>
      <button class="btn" id="gstart">Valendo!</button></div>`;
    document.getElementById("gstart").addEventListener("click",play);
  }
  function play(){
    let deck=shuffle(VF), n=0, score=0, hits=0, lives=3, streak=0, t=T, done=false; const misses=[];
    el.innerHTML=`<div class="hud"><span class="chip" id="vS"></span><span class="chip" id="vL"></span><span class="chip hot" id="vC"></span></div>
      <div class="bar" id="vBar"><i id="vB"></i></div>
      <div class="panel gcard txt" id="vQ"></div>
      <div class="ans"><button class="btn vt" id="vT">VERDADEIRO</button><button class="btn vf" id="vF">FALSO</button></div>
      <div class="vfb" id="vfb" aria-live="polite"></div>`;
    const $=id=>document.getElementById(id);
    function hud(){ $("vS").textContent=score+" pts"; $("vL").innerHTML=hearts(lives,3); $("vC").textContent=streak>=2?"Combo x"+streak:"Combo"; }
    function show(){ if(n>=deck.length){ deck=shuffle(VF); n=0; } $("vQ").textContent=deck[n][0]; anim($("vQ"),"pop"); }
    function fim(){
      if(done) return; done=true; gClear();
      gSetBest(g.id,score);
      gEnd(el,{big:score+" pts",
        msg:`${hits} acerto${hits===1?"":"s"}. ${hits>=15?"Que velocidade! Você está afiado.":hits>=8?"Muito bom! Dá para bater o recorde.":"Bora tentar de novo e ir mais longe."}`,
        extra:reviewBox(misses.slice(0,4).map(m=>`${m[0]}<br><strong>${m[1]?"VERDADEIRO":"FALSO"}: ${m[2]}</strong>`)),
        again:play});
    }
    function ans(v){
      if(done) return;
      const [txt,val,why]=deck[n], ok=v===val;
      if(ok){ score+=10+Math.min(streak,5)*2; hits++; streak++; $("vfb").innerHTML=`<span class="okm">Certo!${streak>=3?" Combo x"+streak+"!":""}</span>`; }
      else { lives--; streak=0; misses.push([txt,val,why]); $("vfb").innerHTML=`<span class="badm">Era ${val?"VERDADEIRO":"FALSO"}: ${why}</span>`; }
      n++; hud();
      if(lives<=0) return fim();
      show();
    }
    $("vT").addEventListener("click",()=>ans(true));
    $("vF").addEventListener("click",()=>ans(false));
    gInterval(()=>{
      t-=0.1; const bar=$("vBar");
      if(bar){ $("vB").style.width=(Math.max(t,0)/T*100)+"%"; bar.classList.toggle("low",t<=10); }
      if(t<=0){ t=0; fim(); }
    },100);
    hud(); show();
  }
  intro();
}

/* ---------- TIPO "antesdepois": qual vem primeiro? (corrida contra o relógio) ---------- */
function jogoAntesDepois(el,g){
  const d=g.dados, T=g.segundos||60, gap=d.distanciaMinima??0;
  function intro(){
    el.innerHTML=`<div class="panel"><span class="qnum">Regras</span>
      <p class="q">${T} segundos e 3 vidas. Aparecem dois cartões: toque em ${d.regra||"o que vem primeiro"}. Acertos seguidos valem mais pontos!</p>
      <button class="btn" id="gstart">Valendo!</button></div>`;
    document.getElementById("gstart").addEventListener("click",play);
  }
  function par(){
    for(let k=0;k<200;k++){ const [a,b]=pick(d.itens,2); if(Math.abs(a.v-b.v)>gap&&a.v!==b.v) return [a,b]; }
    return pick(d.itens,2);
  }
  function play(){
    let score=0,hits=0,lives=3,streak=0,t=T,done=false,cur; const misses=[];
    el.innerHTML=`<div class="hud"><span class="chip" id="aS"></span><span class="chip" id="aL"></span><span class="chip hot" id="aC"></span></div>
      <div class="bar" id="aBar"><i id="aB"></i></div>
      <p class="q" style="text-align:center;margin:14px 0 0">${d.pergunta||"O que vem primeiro?"}</p>
      <div class="duel" id="aD"></div>
      <div class="vfb" id="afb" aria-live="polite"></div>`;
    const $=id=>document.getElementById(id);
    function hud(){ $("aS").textContent=score+" pts"; $("aL").innerHTML=hearts(lives,3); $("aC").textContent=streak>=2?"Combo x"+streak:"Combo"; }
    function show(){
      cur=par();
      $("aD").innerHTML=cur.map((it,k)=>`<button class="ev" data-k="${k}">${it.t}</button>`).join("");
      $("aD").querySelectorAll(".ev").forEach(b=>b.addEventListener("click",()=>ans(+b.dataset.k)));
      anim($("aD"),"pop");
    }
    function ans(k){
      if(done) return;
      const first=(d.maiorPrimeiro? (cur[0].v>cur[1].v?0:1) : (cur[0].v<cur[1].v?0:1)), ok=k===first;
      const A=cur[first], B=cur[1-first];
      const why=`${A.t} (${A.label}) vem antes de ${B.t.charAt(0).toLowerCase()+B.t.slice(1)} (${B.label}).`;
      if(ok){ score+=10+Math.min(streak,5)*2; hits++; streak++; $("afb").innerHTML=`<span class="okm">Certo! ${A.label} → ${B.label}${streak>=3?" · Combo x"+streak+"!":""}</span>`; }
      else { lives--; streak=0; misses.push(why); $("afb").innerHTML=`<span class="badm">Não: ${A.label} vem antes de ${B.label}.</span>`; }
      hud();
      if(lives<=0) return fim();
      show();
    }
    function fim(){
      if(done) return; done=true; gClear();
      gSetBest(g.id,score);
      gEnd(el,{big:score+" pts",msg:`${hits} acerto${hits===1?"":"s"}. ${hits>=15?"Que linha do tempo afiada!":hits>=8?"Muito bom! Dá para bater o recorde.":"Bora tentar de novo e ir mais longe."}`,
        extra:reviewBox(misses.slice(0,4)),again:play});
    }
    gInterval(()=>{
      t-=0.1; const bar=$("aBar");
      if(bar){ $("aB").style.width=(Math.max(t,0)/T*100)+"%"; bar.classList.toggle("low",t<=10); }
      if(t<=0){ t=0; fim(); }
    },100);
    hud(); show();
  }
  intro();
}

/* ---------- TIPO "quemsou": adivinhe pelas pistas ---------- */
function jogoQuemSou(el,g){
  const d=g.dados, N=Math.min(g.rodadas||6,d.length), rounds=pick(d,N);
  let i=0,total=0; const max=N*4;
  function show(){
    const r=rounds[i], opts=shuffle([r.r].concat(pick(d.filter(x=>x.r!==r.r).map(x=>x.r),3)));
    let shown=1, done=false;
    el.innerHTML=`<div class="hud"><span class="chip">Rodada ${i+1}/${N}</span><span class="chip hot" id="qT">Pontos: ${total}</span><span class="chip" id="qV"></span></div>
      <div class="panel"><p class="q" style="margin-top:0">${g.pergunta||"Quem sou eu?"}</p>
      <ol class="clues" id="qC"></ol>
      <button class="btn alt" id="qMais" style="margin:0 0 14px">Mais uma pista</button>
      <div class="opts">${opts.map(o=>`<button class="opt" data-o="${o}"><span>${o}</span></button>`).join("")}</div>
      <div id="gfb" aria-live="polite"></div></div>`;
    const $=id=>document.getElementById(id);
    function paint(){
      $("qC").innerHTML=r.pistas.map((p,k)=>k<shown?`<li>${p}</li>`:`<li class="hide">Pista escondida</li>`).join("");
      $("qV").textContent=`Vale ${Math.max(1,5-shown)} pt${5-shown===1?"":"s"}`;
      $("qMais").disabled=shown>=r.pistas.length;
    }
    function finish(ok){
      done=true; shown=r.pistas.length; paint();
      const pts=ok?Math.max(1,5-revealedAtGuess):0; total+=pts; $("qT").textContent="Pontos: "+total;
      el.querySelectorAll(".opt").forEach(b=>{ b.disabled=true; if(b.dataset.o===r.r) b.classList.add("right"); });
      $("qMais").disabled=true;
      const last=i===N-1;
      feedback(ok,`${ok?`+${pts} ponto${pts===1?"":"s"}. `:""}A resposta é <strong>${r.r}</strong>.${r.extra?" "+r.extra:""}`,last,()=>{ if(last) end(); else { i++; show(); } });
    }
    let revealedAtGuess=1;
    $("qMais").addEventListener("click",()=>{ if(done) return; shown=Math.min(shown+1,r.pistas.length); paint(); });
    el.querySelectorAll(".opt").forEach(b=>b.addEventListener("click",()=>{
      if(done) return;
      revealedAtGuess=shown;
      if(b.dataset.o===r.r) finish(true);
      else {
        b.disabled=true; b.classList.add("wrong","off"); anim(b,"shake");
        if(shown<r.pistas.length){ shown++; paint(); }
        else finish(false);
      }
    }));
    paint(); window.scrollTo({top:0});
  }
  function end(){
    gSetBest(g.id,total);
    gEnd(el,{big:total+" pts",msg:`De ${max} possíveis. ${total>=max*0.75?"Detetive de primeira!":total>=max*0.45?"Muito bem! Tente acertar com menos pistas.":"Vale reler a matéria e tentar de novo."}`,again:()=>jogoQuemSou(el,g)});
  }
  show();
}

/* ---------- TIPO "liga": ligue cada item ao seu par (ex.: causa → consequência) ---------- */
function jogoLiga(el,g){
  const d=g.dados, N=Math.min(g.rodadas||8,d.pares.length), rounds=pick(d.pares,N);
  let i=0,score=0; const miss=[];
  function show(){
    const [a,b]=rounds[i], opts=shuffle([b].concat(pick(d.pares.filter(p=>p[1]!==b).map(p=>p[1]),3)));
    el.innerHTML=`<div class="hud"><span class="chip">Rodada ${i+1}/${N}</span><span class="chip hot" id="lS">Acertos: ${score}</span></div>
      <div class="panel"><span class="qnum">${d.rotuloA||"Item"}</span>
      <p class="excerpt">${a}</p>
      <p class="q">${d.pergunta||"Qual é o par certo?"}</p>
      <div class="opts">${opts.map((o,k)=>`<button class="opt" data-k="${k}"><span class="l">${L[k]})</span><span>${o}</span></button>`).join("")}</div>
      <div id="gfb" aria-live="polite"></div></div>`;
    el.querySelectorAll(".opt").forEach(btn=>btn.addEventListener("click",()=>{
      const k=+btn.dataset.k, ok=opts[k]===b; if(ok) score++; else miss.push(`${a}<br><strong>→ ${b}</strong>`);
      el.querySelectorAll(".opt").forEach((x,j)=>{ x.disabled=true; if(opts[j]===b) x.classList.add("right"); else if(x===btn) x.classList.add("wrong"); });
      document.getElementById("lS").textContent="Acertos: "+score;
      const last=i===N-1;
      feedback(ok,`${d.rotuloB||"Par"}: ${b}`,last,()=>{ if(last) end(); else { i++; show(); } });
    }));
    window.scrollTo({top:0});
  }
  function end(){
    gSetBest(g.id,score);
    gEnd(el,{big:score+"/"+N,msg:nota(score,N,"Perfeito! Você ligou tudo certinho.","Muito bem!","Vale reler a matéria e tentar de novo."),extra:reviewBox(miss),again:()=>jogoLiga(el,g)});
  }
  show();
}

/* ---------- TIPO "memoria": jogo da memória termo × significado ---------- */
function jogoMemoria(el,g){
  const ps=pick(g.dados,6);
  const cards=shuffle(ps.flatMap((p,k)=>[{k,t:p[0],term:true},{k,t:p[1],term:false}]));
  let first=null, lock=false, moves=0, found=0;
  el.innerHTML=`<p class="sub" style="margin-bottom:10px">Vire duas cartas: as amarelas são os termos, as brancas são os significados.</p>
    <div class="hud"><span class="chip" id="mM">Jogadas: 0</span><span class="chip hot" id="mF">Pares: 0/6</span></div>
    <div class="mem">${cards.map((c,j)=>`<button class="mcard ${c.term?"term":"def"}" data-j="${j}" aria-label="Carta ${j+1}"><span class="mb" aria-hidden="true">?</span><span class="mf">${c.t}</span></button>`).join("")}</div>`;
  const btn=j=>el.querySelector(`.mcard[data-j="${j}"]`);
  el.querySelectorAll(".mcard").forEach(b=>b.addEventListener("click",()=>flip(+b.dataset.j)));
  function flip(j){
    const b=btn(j);
    if(lock||b.classList.contains("up")||b.classList.contains("done")) return;
    b.classList.add("up");
    if(first===null){ first=j; return; }
    moves++; document.getElementById("mM").textContent="Jogadas: "+moves;
    const a=first; first=null;
    if(cards[a].k===cards[j].k){
      [a,j].forEach(x=>{ const c=btn(x); c.classList.remove("up"); c.classList.add("done"); });
      found++; document.getElementById("mF").textContent=`Pares: ${found}/6`;
      if(found===6) gTimeout(win,700);
    } else {
      lock=true;
      gTimeout(()=>{ btn(a).classList.remove("up"); btn(j).classList.remove("up"); lock=false; },900);
    }
  }
  function win(){
    gSetBest(g.id,moves,true);
    const s=moves<=8?3:moves<=12?2:1;
    gEnd(el,{big:starsTxt(s),msg:`Você achou os 6 pares em ${moves} jogadas. ${s===3?"Memória de elefante!":s===2?"Muito bom! Dá para fazer em menos.":"Boa! Tente de novo para usar menos jogadas."}`,again:()=>jogoMemoria(el,g)});
  }
}

/* ---------- TIPO "separa": classifique rápido em caixas ---------- */
function jogoSepara(el,g){
  const SEP=g.dados;
  function menu(){
    el.innerHTML=`<div class="panel"><span class="qnum">Escolha o desafio</span>
      <div class="opts">${SEP.map((c,k)=>`<button class="opt" data-c="${k}"><span>${c.nome}</span></button>`).join("")}</div></div>`;
    el.querySelectorAll("[data-c]").forEach(b=>b.addEventListener("click",()=>play(SEP[+b.dataset.c])));
  }
  function play(c){
    gClear();
    const items=pick(c.items,Math.min(10,c.items.length)); let i=0,score=0,streak=0,lock=false; const miss=[];
    el.innerHTML=`<div class="hud"><span class="chip" id="sP"></span><span class="chip hot" id="sS"></span><span class="chip" id="sC"></span></div>
      <p class="sub" style="margin-bottom:0">${c.dica}</p>
      <div class="panel gcard word" id="sW"></div>
      <div class="bins">${c.bins.map(b=>`<button class="btn bin" data-b="${b.k}">${b.label}${b.sub?`<small>${b.sub}</small>`:""}</button>`).join("")}</div>`;
    const $=id=>document.getElementById(id), bins=[...el.querySelectorAll(".bin")];
    function hud(){ $("sP").textContent=`${Math.min(i+1,items.length)}/${items.length}`; $("sS").textContent=`Acertos: ${score}`; $("sC").textContent=streak>=2?`Combo x${streak}`:""; }
    function show(){ lock=false; bins.forEach(b=>b.classList.remove("right","wrong")); const w=$("sW"); w.textContent=items[i][0]; w.classList.toggle("long",items[i][0].length>14); anim(w,"pop"); hud(); }
    function choose(k,btn){
      if(lock) return; lock=true;
      const right=items[i][1], ok=k===right;
      if(ok){ score++; streak++; btn.classList.add("right"); }
      else { streak=0; btn.classList.add("wrong"); bins.find(b=>b.dataset.b===right).classList.add("right"); miss.push(items[i]); }
      hud();
      gTimeout(()=>{ i++; if(i>=items.length) end(); else show(); }, ok?550:1400);
    }
    function end(){
      gSetBest(g.id,score);
      gEnd(el,{title:"Resultado · "+c.nome,big:score+"/"+items.length,
        msg:score===items.length?"Perfeito! Nenhum escapou.":score>=items.length*0.7?"Muito bom!":"Vale reler a matéria e tentar de novo.",
        extra:reviewBox(miss.map(m=>`<strong>${m[0]}</strong> → ${c.bins.find(b=>b.k===m[1]).label}`)),
        again:()=>play(c), alt:{label:"Escolher outro desafio",fn:menu}});
    }
    bins.forEach(b=>b.addEventListener("click",()=>choose(b.dataset.b,b)));
    show();
  }
  if(SEP.length===1) play(SEP[0]); else menu();
}

/* ---------- TIPO "forca": adivinhe a palavra pela dica ---------- */
function jogoForca(el,g){
  const words=pick(g.dados,5); let wi=0, found=0;
  function word(){
    const [w,dica]=words[wi], letters=[...w], used=new Set(); let lives=6, done=false;
    el.innerHTML=`<div class="hud"><span class="chip">Palavra ${wi+1}/${words.length}</span><span class="chip hot">Acertei: ${found}</span><span class="chip" id="fL"></span></div>
      <div class="panel"><p class="q" style="margin-top:0">Dica: ${dica}</p>
      <div class="fw" id="fW" aria-live="polite"></div>
      <div class="fk">${"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(l=>`<button class="key" data-l="${l}">${l}</button>`).join("")}</div>
      <div id="ffb" aria-live="polite"></div></div>`;
    const $=id=>document.getElementById(id);
    function paint(reveal){
      $("fW").innerHTML=letters.map(ch=>{ if(ch===" ") return `<span class="fl sp"></span>`; const got=used.has(norm(ch)); return `<span class="fl${reveal&&!got?" miss":""}">${got||reveal?ch:""}</span>`; }).join("");
      $("fL").innerHTML=hearts(lives,6);
    }
    function finish(won){
      done=true; paint(!won);
      el.querySelectorAll(".key").forEach(k=>k.disabled=true);
      const last=wi===words.length-1;
      $("ffb").innerHTML=`<div class="balloon ${won?"ok":"bad"}"><span class="tag">${won?"Acertou!":"Não foi dessa vez"}</span>A palavra era <strong>${w}</strong>.</div>
        <button class="btn" id="fnx">${last?"Ver resultado":"Próxima palavra"}</button>`;
      $("fnx").addEventListener("click",()=>{ if(last) end(); else { wi++; word(); } });
      $("fnx").scrollIntoView({behavior:"smooth",block:"nearest"});
    }
    function guess(l,btn){
      if(done||used.has(l)) return;
      used.add(l); btn.disabled=true;
      if(letters.some(ch=>norm(ch)===l)) btn.classList.add("right"); else { btn.classList.add("wrong"); lives--; }
      paint(false);
      if(letters.every(ch=>ch===" "||used.has(norm(ch)))){ found++; finish(true); }
      else if(lives<=0) finish(false);
    }
    el.querySelectorAll(".key").forEach(k=>k.addEventListener("click",()=>guess(k.dataset.l,k)));
    paint(false); window.scrollTo({top:0});
  }
  function end(){
    gSetBest(g.id,found);
    gEnd(el,{big:found+"/"+words.length,msg:found===words.length?"Sem errar nenhuma! Que vocabulário.":found>=3?"Muito bem! Quase lá.":"Vale reler a matéria e tentar de novo.",again:()=>jogoForca(el,g)});
  }
  word();
}

/* ---------- TIPO "ordem": coloque em ordem (linha do tempo, etapas, enredo) ---------- */
function jogoOrdem(el,g){
  const d=g.dados;
  if(!g._fila||!g._fila.length) g._fila=shuffle(d.sets.map((h,k)=>k));
  const h=d.sets[g._fila.shift()], n=h.p.length, partes=h.partes||d.partes||h.p.map((_,k)=>`${k+1}º`);
  const cards=shuffle(h.p.map((t,k)=>({t,k})));
  let next=0, errs=0;
  el.innerHTML=`<div class="hud"><span class="chip">${h.t}</span><span class="chip hot" id="eE">Erros: 0</span></div>
    <p class="sub" style="margin-bottom:10px">${d.instrucao||"Toque nos itens na ordem certa."}</p>
    <div class="slots">${partes.map((p,k)=>`<div class="slot" id="sl${k}"><b>${k+1} · ${p}</b><span>toque no item certo</span></div>`).join("")}</div>
    <div class="cards">${cards.map(c=>`<button class="ecard" data-k="${c.k}">${c.t}</button>`).join("")}</div>
    <div id="efb" aria-live="polite"></div>`;
  el.querySelectorAll(".ecard").forEach(b=>b.addEventListener("click",()=>{
    if(+b.dataset.k===next){
      const sl=document.getElementById("sl"+next);
      sl.classList.add("full"); if(h.d&&h.d[next]) sl.querySelector("b").textContent=`${next+1} · ${h.d[next]}`;
      sl.querySelector("span").textContent=b.textContent; b.classList.add("used"); next++;
      if(next===n) win();
    } else {
      errs++; document.getElementById("eE").textContent="Erros: "+errs; anim(b,"shake");
    }
  }));
  function win(){
    const s=errs===0?3:errs<=2?2:1; gSetBest(g.id,s);
    document.getElementById("efb").innerHTML=`<div class="balloon ok"><span class="tag">${d.fimTitulo||"Tudo em ordem!"} ${starsTxt(s)}</span>${errs===0?"Sem nenhum erro.":errs+(errs===1?" erro":" erros")+" no caminho."} ${d.fimDica||""}</div>
      <button class="btn" id="eNext">${d.outro||"Outra sequência"}</button><button class="btn alt" id="eMenu">Voltar aos joguinhos</button>`;
    document.getElementById("eNext").addEventListener("click",()=>jogoOrdem(el,g));
    document.getElementById("eMenu").addEventListener("click",()=>{ gClear(); home("games"); });
    document.getElementById("efb").scrollIntoView({behavior:"smooth",block:"nearest"});
  }
}

const TIPOS={simbolos:jogoSimbolos,vf:jogoVF,antesdepois:jogoAntesDepois,quemsou:jogoQuemSou,liga:jogoLiga,memoria:jogoMemoria,separa:jogoSepara,forca:jogoForca,ordem:jogoOrdem};
const FMT={
 simbolos:(b,g)=>`melhor: ${b} acertos`, vf:b=>`recorde: ${b} pts`, antesdepois:b=>`recorde: ${b} pts`,
 quemsou:b=>`recorde: ${b} pts`, liga:b=>`melhor: ${b} acertos`, memoria:b=>`recorde: ${b} jogadas`,
 separa:b=>`melhor: ${b} acertos`, forca:b=>`melhor: ${b}/5`, ordem:b=>`melhor: ${starsTxt(b)}`
};

function openGame(id){
  gClear(); root.classList.remove("wide");
  const g=JOGOS.find(x=>x.id===id);
  state={view:"game",id};
  root.innerHTML=`<button class="back" id="back">← Todos os joguinhos</button>
    <h1 style="font-size:clamp(1.8rem,7vw,2.5rem)">${g.titulo}</h1>
    ${pacPlate()}
    <p class="sub">${g.desc}</p>
    <div id="game"></div>`;
  document.getElementById("back").addEventListener("click",()=>{ gClear(); home("games"); });
  window.scrollTo({top:0});
  TIPOS[g.tipo](document.getElementById("game"),g);
}

/* =============== TELA INICIAL =============== */
function home(tab){
  tab = typeof tab==="string" ? tab : "mods";
  gClear(); root.classList.add("wide");
  state={view:"home",tab};
  const cap=t=>t.charAt(0).toUpperCase()+t.slice(1);
  const prog=(label,n,t)=>`<div class="prog"><span>${label}</span><span class="track"><i style="width:${Math.round(n/t*100)}%"></i></span><b>${n}/${t}</b></div>`;
  const doneM=MODS.filter(m=>getBest(m.id)!==null).length, doneG=JOGOS.filter(g=>gBest(g.id)!==null).length;
  const card=(m,i)=>{
    const b=getBest(m.id);
    return `<button class="mod" data-id="${m.id}" style="--c:${m.color};--i:${i}">
      <span class="badge${m.tag.length>2?" sm":""}" style="background:${m.color}">${m.tag}</span>
      <span class="mt"><h2>${m.title}</h2><p>${m.pages}</p>${b!==null?`<span class="pill">Melhor nota: ${b}/${m.quiz.length}</span>`:""}</span>
      <span class="go" aria-hidden="true">${CHEV}</span>
    </button>`;};
  const secs=(typeof SECOES!=="undefined"&&SECOES.length)?SECOES:[{mod:0}];
  const grupo=(sec)=>{ const ms=MODS.filter(m=>(m.mod||0)===(sec.mod||0)); if(!ms.length) return "";
    return `${sec.t?`<h2 class="sec">${sec.t}</h2>`:""}${sec.s?`<p class="secsub">${sec.s}</p>`:""}<div class="grid${ms.length===1?" solo":""}">${ms.map(card).join("")}</div>`; };
  const mods = prog("Quizzes feitos",doneM,MODS.length)+secs.map(grupo).join("")+
    `<p class="foot"><i class='ib'></i> ${SITE.rodapeModulos||"Quando aparece “pág.”, vale abrir a apostila."}</p>`;
  const games = prog("Jogos já jogados",doneG,JOGOS.length)+`<div class="grid">${JOGOS.map((g,i)=>{
    const b=gBest(g.id);
    return `<button class="mod" data-g="${g.id}" style="--c:${g.cor};--i:${i}">
      <span class="badge" style="background:${g.cor}">${ICONES[g.icone]||ICONES.alvo}</span>
      <span class="mt"><h2>${g.titulo}</h2><p>${g.desc}</p>${b!==null?`<span class="pill">${cap(FMT[g.tipo](b,g))}</span>`:""}</span>
      <span class="go" aria-hidden="true">${CHEV}</span>
    </button>`;}).join("")}</div>
  <p class="foot">${SITE.rodapeJogos||"Errou? Sem problema: é treinando que se aprende."}</p>`;
  root.innerHTML = `
  <div class="hero">
  <div class="toprow"><span class="eyebrow">${SITE.serie}</span>${pacMini()}</div>
  <h1>${SITE.titulo}</h1>
  ${pacSignature()}
  <p class="sub">${tab==="games"?SITE.subJogos:SITE.subModulos}</p>
  </div>
  <div class="htabs" role="tablist">
    <button class="htab" role="tab" aria-selected="${tab==="mods"}" id="hMods">Módulos <span class="cnt">${MODS.length}</span></button>
    <button class="htab" role="tab" aria-selected="${tab==="games"}" id="hGames">Joguinhos <span class="cnt">${JOGOS.length}</span></button>
  </div>
  ${tab==="games"?games:mods}`;
  document.getElementById("hMods").addEventListener("click",()=>home("mods"));
  document.getElementById("hGames").addEventListener("click",()=>home("games"));
  root.querySelectorAll(".mod[data-id]").forEach(b=>b.addEventListener("click",()=>openMod(b.dataset.id,"study")));
  root.querySelectorAll(".mod[data-g]").forEach(b=>b.addEventListener("click",()=>openGame(b.dataset.g)));
  window.scrollTo({top:0});
}

/* =============== MÓDULOS: explicação + quiz =============== */
function header(m,tab){
  return `<button class="back" id="back">← Todos os módulos</button>
  <h1 style="font-size:clamp(1.8rem,7vw,2.5rem)">${m.title}</h1>
  ${pacPlate()}
  <p class="sub" style="margin-bottom:0">${m.pages}</p>
  <div class="tabs" role="tablist">
    <button class="tab" role="tab" aria-selected="${tab==="study"}" id="tStudy">Estudar</button>
    <button class="tab" role="tab" aria-selected="${tab==="quiz"}" id="tQuiz">Quiz (${m.quiz.length})</button>
  </div>`;
}
function wireHeader(m){
  document.getElementById("back").addEventListener("click",()=>home("mods"));
  document.getElementById("tStudy").addEventListener("click",()=>openMod(m.id,"study"));
  document.getElementById("tQuiz").addEventListener("click",()=>openMod(m.id,"quiz"));
}
function openMod(id,tab){
  root.classList.remove("wide");
  const m = MODS.find(x=>x.id===id);
  if(tab==="study"){
    state={view:"study",m};
    root.innerHTML = header(m,"study") + `<div class="panel study">${m.study}</div>
      <button class="btn" id="go">Fazer o quiz deste módulo</button>`;
    wireHeader(m);
    document.getElementById("go").addEventListener("click",()=>openMod(id,"quiz"));
    window.scrollTo({top:0});
  } else {
    const qs = shuffle(m.quiz).map(q=>{
      const opts = shuffle(q.o.map((t,k)=>({t,right:k===0})));
      return {...q, opts, a:opts.findIndex(o=>o.right)};
    });
    state={view:"quiz",m,qs,i:0,ans:[]};
    renderQ();
  }
}
function bar(){
  const {qs,i,ans}=state;
  return `<div class="progress" aria-hidden="true">${qs.map((q,k)=>{
    const c = ans[k]===undefined ? (k===i?"now":"") : (ans[k]===q.a?"ok":"bad");
    return `<span class="${c}"></span>`;}).join("")}</div>`;
}
function renderQ(){
  const {m,qs,i}=state, q=qs[i];
  root.innerHTML = header(m,"quiz") + `<div class="panel" aria-live="polite">
    ${bar()}
    <span class="qnum">Questão ${i+1} de ${qs.length}</span>${q.ref?`<span class="book"><i class='ib'></i> Apostila, ${q.ref}</span>`:""}
    ${q.ex?`<p class="excerpt">${q.ex}</p>`:""}
    <p class="q">${q.q}</p>
    <div class="opts">${q.opts.map((o,k)=>`<button class="opt" data-k="${k}"><span class="l">${L[k]})</span><span>${o.t}</span></button>`).join("")}</div>
    <div id="fb"></div></div>`;
  wireHeader(m);
  root.querySelectorAll(".opt").forEach(b=>b.addEventListener("click",()=>choose(+b.dataset.k)));
  window.scrollTo({top:0});
}
function choose(k){
  const {qs,i}=state, q=qs[i];
  state.ans[i]=k;
  root.querySelectorAll(".opt").forEach((b,j)=>{
    b.disabled=true;
    if(j===q.a) b.classList.add("right"); else if(j===k) b.classList.add("wrong");
  });
  root.querySelector(".progress").outerHTML = bar();
  const ok = k===q.a, last = i===qs.length-1;
  document.getElementById("fb").innerHTML =
    `<div class="balloon ${ok?"ok":"bad"}"><span class="tag">${ok?"Acertou!":"Quase!"}</span>${q.e}</div>
     <button class="btn" id="nx">${last?"Ver meu resultado":"Próxima questão"}</button>`;
  const nx=document.getElementById("nx");
  nx.addEventListener("click",()=>{ if(last) finish(); else { state.i++; renderQ(); } });
  nx.focus({preventScroll:true});
  nx.scrollIntoView({behavior:"smooth",block:"nearest"});
}
function finish(){
  const {m,qs,ans}=state, T=qs.length;
  const n = qs.filter((q,k)=>ans[k]===q.a).length;
  setBest(m.id,n);
  const msg = n===T?"Nota máxima! Mandou muito bem.":n>=T*0.8?"Muito bom! Revise só as que errou.":n>=T*0.5?"Na média. Releia a explicação e tente de novo.":"Bora reler a explicação e tentar outra vez.";
  const wrong = qs.filter((q,k)=>ans[k]!==q.a);
  root.innerHTML = header(m,"quiz") + `<div class="panel">
    <span class="qnum">Resultado</span>
    <div class="score">${n}/${T}</div>
    <p class="q">${msg}</p>
    ${wrong.length?`<p style="margin:0;font-weight:800">Para revisar:</p><div class="review">${wrong.map(q=>`<div>${q.ex?`<em>${q.ex}</em><br>`:""}${q.q}<br><strong>Resposta: ${q.opts[q.a].t}</strong>${q.ref?`<br><i class='ib'></i> ${q.ref}`:""}</div>`).join("")}</div>`:""}
    <button class="btn" id="again">Refazer (questões embaralhadas)</button>
    <button class="btn alt" id="study">Voltar para a explicação</button>
  </div>`;
  wireHeader(m);
  document.getElementById("again").addEventListener("click",()=>openMod(m.id,"quiz"));
  document.getElementById("study").addEventListener("click",()=>openMod(m.id,"study"));
  window.scrollTo({top:0});
}

home();
