/* CONTEÚDO · História, módulos 14 e 15 (Roma). O motor fica em ../assets/motor.js */
const MODS = [
{
 id:"fases", tag:"!", color:"#FF9EC0", star:true,
 title:"Monarquia × República × Império", pages:"Módulos 14 e 15 · a linha do tempo que mais confunde",
 study:`
<p class="book"><i class='ib'></i> Apostila: monarquia na pág. 148, república na pág. 149, império na pág. 159</p>
<h3>As três fases em uma frase</h3>
<div class="vs three">
 <div style="background:#FFF1C2;color:#1B1F3B">Monarquia<span class="big">UM REI</span>753 a.C. a 509 a.C.</div>
 <div style="background:#DDEFFF;color:#1B1F3B">República<span class="big">A COISA PÚBLICA</span>509 a.C. a 27 a.C.</div>
 <div style="background:#FFE0EA;color:#1B1F3B">Império<span class="big">UM IMPERADOR</span>27 a.C. a 476</div>
</div>
<div class="trick"><strong>Truque:</strong> pergunte “quem manda?”<br>Um <strong>rei</strong>, escolhido pelas famílias mais tradicionais → <strong>monarquia</strong>.<br><strong>Senado, magistrados e assembleias</strong>, cada cargo com dois magistrados → <strong>república</strong>.<br>Um <strong>imperador</strong> com o poder concentrado e o Senado enfraquecido → <strong>império</strong>.</div>
<h3>Linha do tempo de Roma</h3>
<div class="tl">
 <div><b>753 a.C.</b><span>Fundação de Roma (segundo a lenda, por Rômulo). Começa a monarquia.</span></div>
 <div><b>509 a.C.</b><span>Os patrícios expulsam o rei Tarquínio, o Soberbo, e criam a república.</span></div>
 <div><b>27 a.C.</b><span>Otávio recebe o título de Augusto e vira o primeiro imperador.</span></div>
 <div><b>476</b><span>Roma é ocupada e o imperador é destituído: queda do Império Romano do Ocidente.</span></div>
</div>
<h3>Antes de Cristo e depois de Cristo</h3>
<p>Nas datas <strong>a.C.</strong> os números diminuem com o passar do tempo: 753 a.C. é mais antigo que 509 a.C., que é mais antigo que 27 a.C. Depois do nascimento de Cristo, os números voltam a crescer: ano 82, ano 212, ano 476.</p>
<h3>República não é a mesma coisa que democracia</h3>
<p class="book"><i class='ib'></i> Pág. 159 (Saiba mais)</p>
<div class="box"><strong>Democracia</strong> (criação grega) responde <em>quem</em> governa: a participação de todos os cidadãos.<br><strong>República</strong> (criação romana) responde <em>como</em> se governa: a serviço do bem comum, sem usar a coisa pública para interesses privados.<br>Roma antiga era república, mas <strong>não</strong> era democrática. O Brasil de hoje é uma república democrática.</div>
<p>O historiador Floro (pág. 193) comparou Roma a uma pessoa: monarquia = <strong>infância</strong>, república = <strong>adolescência</strong>, império = <strong>maturidade e velhice</strong>.</p>`,
 quiz:[
  {q:"Qual é a ordem correta das formas de governo de Roma?", o:["Monarquia → república → império","República → monarquia → império","Império → república → monarquia","Monarquia → império → república"], e:"Primeiro os reis, depois a república (509 a.C.) e por fim o império (27 a.C.)."},
  {q:"Segundo a tradição, Roma foi fundada em:", ref:"pág. 146", o:["753 a.C.","509 a.C.","27 a.C.","476"], e:"É o começo da monarquia, com Rômulo como primeiro rei."},
  {q:"A república romana começou quando:", ref:"pág. 149", o:["os patrícios expulsaram o rei etrusco Tarquínio, o Soberbo","Otávio recebeu o título de Augusto","Rômulo matou Remo","os germânicos ocuparam Roma"], e:"Insatisfeitos com os reis etruscos, os patrícios criaram a república em 509 a.C."},
  {q:"O Império Romano começou em 27 a.C., quando:", ref:"pág. 159", o:["o general Otávio virou comandante único de Roma","os plebeus abandonaram Roma","Teodósio dividiu o império","Constantino liberou o culto cristão"], e:"O Senado lhe deu títulos como Princeps e Augustus, e a república deixou de existir."},
  {q:"O ano de 476 é considerado o marco:", ref:"pág. 187", o:["da queda do Império Romano do Ocidente","da fundação de Roma","do início da república","da Lei das Doze Tábuas"], e:"Roma foi ocupada e o imperador foi destituído."},
  {q:"Qual destas datas é a MAIS antiga?", o:["753 a.C.","509 a.C.","27 a.C.","212"], e:"Antes de Cristo, quanto maior o número, mais antigo é o ano."},
  {ex:"Para cada cargo havia dois magistrados, que ficavam só um ano no cargo.", q:"Essa regra pertence a qual fase?", ref:"pág. 150", o:["República","Monarquia","Império","Nenhuma: é dos germânicos"], e:"Era a forma de a república impedir o abuso do poder."},
  {ex:"Ao longo de três séculos, Roma foi governada de forma autoritária e personalista. O Senado continuou existindo, mas perdeu poder.", q:"O trecho descreve:", ref:"pág. 167", o:["o império","a república","a monarquia","a democracia ateniense"], e:"Com os imperadores, os romanos perderam espaço de participação no governo."},
  {q:"Qual frase compara corretamente república e democracia?", ref:"pág. 159", o:["A democracia trata de quem deve governar; a república, de como se deve governar","As duas palavras significam exatamente a mesma coisa","A república foi criada pelos gregos e a democracia pelos romanos","Roma antiga era uma república democrática como o Brasil de hoje"], e:"Roma era república, mas não democrática. A república é romana; a democracia, grega."},
  {q:"No texto de Floro (pág. 193), as fases de Roma correspondem a:", ref:"pág. 193", o:["monarquia (infância), república (adolescência), império (maturidade e velhice)","república (infância), império (adolescência), monarquia (velhice)","democracia (infância), império (adolescência), república (velhice)","império (infância), monarquia (adolescência), república (velhice)"], e:"Ele imagina Roma como uma pessoa que nasce com os reis e envelhece com os imperadores."}
 ]
},
{
 id:"r1", mod:14, tag:"14.1", color:"#FFD23F",
 title:"A lenda de Rômulo e Remo", pages:"Heranças de Roma e a lenda da fundação · págs. 143 a 146",
 study:`
<p class="book"><i class='ib'></i> Abertura: Arco de Tito (Roma, ano 82) e Arco do Triunfo (Paris, 1806), pág. 143</p>
<h3>Roma ainda está por aqui</h3>
<p>Napoleão copiou o arco do triunfo romano para celebrar as próprias vitórias. Roma influenciou muitas civilizações, principalmente as ocidentais (pág. 145):</p>
<ul>
<li><strong>Arquitetura</strong>: uso estrutural dos arcos, cúpulas e concreto.</li>
<li><strong>Direito romano</strong>: base das leis de muitos países.</li>
<li><strong>Instituições políticas</strong>, como o Senado.</li>
<li><strong>Latim</strong>: deu origem a vários idiomas, entre eles o português.</li>
<li>A difusão do <strong>cristianismo</strong>.</li>
</ul>
<div class="box">Foi uma troca: Roma influenciou os povos conquistados e também foi influenciada por eles.</div>
<h3>O que é uma lenda</h3>
<p><strong>Lenda</strong> é uma história com elementos fantásticos, transmitida pelas gerações. Os romanos, como outros povos, criaram lendas para explicar sua origem. A mais conhecida é a de Rômulo e Remo.</p>
<h3>A lenda, passo a passo</h3>
<p class="book"><i class='ib'></i> Págs. 145 e 146</p>
<div class="tl">
 <div><b>Troia</b><span>Eneias, filho da deusa <strong>Vênus</strong> e príncipe de Troia, foge dos gregos e funda <strong>Alba Longa</strong>, na península Itálica.</span></div>
 <div><b>O golpe</b><span>O rei Numitor é derrubado pelo irmão, <strong>Amúlio</strong>, que torna a filha dele, Reia Sílvia, uma <strong>vestal</strong> (guardiã do fogo sagrado, que não podia ter filhos).</span></div>
 <div><b>Os gêmeos</b><span>O deus <strong>Marte</strong> engravida Reia Sílvia: nascem <strong>Rômulo e Remo</strong>. Amúlio manda jogá-los no <strong>rio Tibre</strong>.</span></div>
 <div><b>A loba</b><span>Uma <strong>loba</strong> amamenta os gêmeos, e um pastor os cria. Adultos, eles devolvem o trono ao avô.</span></div>
 <div><b>A fundação</b><span>Quem visse <strong>doze aves</strong> seria rei. Remo viu seis abutres; Rômulo viu as doze aves. Na briga, Rômulo mata Remo, funda Roma e vira o <strong>primeiro rei</strong>.</span></div>
</div>
<p>Para os historiadores, a lenda mostra como os romanos se viam: ligados aos troianos, com <strong>origem divina</strong> (Vênus e Marte) e capazes de vencer as adversidades.</p>`,
 quiz:[
  {q:"O Arco do Triunfo de Paris (1806) se inspira em um monumento romano porque Napoleão queria:", ref:"pág. 143", o:["associar suas vitórias militares à grandeza do Império Romano","homenagear a deusa Vênus","marcar a fundação de Roma","imitar uma construção germânica"], e:"Assim como o Arco de Tito celebrava vitórias de Roma, o de Paris celebrava as de Napoleão."},
  {q:"Qual destas NÃO é uma herança romana citada na apostila?", ref:"pág. 145", o:["A democracia","O Direito romano","O latim","O Senado"], e:"A democracia é uma criação grega. Os romanos deixaram o Direito, o Senado, o latim, os arcos e o concreto."},
  {q:"Sobre a relação entre Roma e os povos que ela conquistou, é correto dizer que:", ref:"pág. 145", o:["Roma influenciou esses povos e também foi influenciada por eles","Roma destruiu todas as culturas que encontrou","os povos conquistados não aprenderam nada com Roma","Roma nunca teve contato com outros povos"], e:"Roma foi fruto da mistura de muitas culturas."},
  {q:"Lenda é:", ref:"pág. 145", o:["uma história com elementos fantásticos, transmitida pelas gerações","um documento escrito pelo Senado","uma lei romana","um relato científico sobre o passado"], e:"As lendas ajudavam os povos a explicar suas origens."},
  {q:"As vestais eram mulheres responsáveis por:", ref:"pág. 145", o:["manter sempre aceso o fogo sagrado da deusa Vesta","comandar o exército","escolher o rei de Roma","cuidar dos gêmeos abandonados"], e:"Viviam reclusas, eram respeitadas e não podiam ter filhos."},
  {q:"Na lenda, os gêmeos Rômulo e Remo eram filhos de:", ref:"pág. 145", o:["Reia Sílvia e o deus Marte","Eneias e a deusa Vênus","Amúlio e uma vestal","Numitor e uma loba"], e:"Marte, deus da guerra, seduziu a vestal Reia Sílvia."},
  {q:"Depois de serem jogados no rio Tibre, os gêmeos foram salvos por:", ref:"pág. 145", o:["uma loba, que os amamentou","doze aves belíssimas","o tio-avô Amúlio","os soldados gregos"], e:"A loba os amamentou até um pastor encontrá-los e criá-los."},
  {q:"Segundo a lenda, quem foi o primeiro rei de Roma?", ref:"pág. 146", o:["Rômulo","Remo","Numitor","Eneias"], e:"Rômulo viu as doze aves, matou Remo, fundou Roma e virou rei."}
 ]
},
{
 id:"r2", mod:14, tag:"14.2", color:"#7FD3FF",
 title:"A sociedade e a monarquia", pages:"753 a.C. a 509 a.C. · págs. 146 a 148",
 study:`
<h3>A pirâmide social</h3>
<p class="book"><i class='ib'></i> Pág. 146</p>
<div class="pyr">
 <div style="width:46%;background:#FFD23F">Patrícios</div>
 <div style="width:64%;background:#7FD3FF">Plebeus</div>
 <div style="width:82%;background:#9EE6B8">Clientes</div>
 <div style="width:100%;background:#FFB3C7">Escravizados</div>
</div>
<div class="tbl"><table>
<tr><th>Grupo</th><th>Livre?</th><th>Cidadão?</th><th>Quem eram</th></tr>
<tr><td>Patrícios</td><td>Sim</td><td>Sim</td><td>Descendentes dos fundadores de Roma, donos das terras.</td></tr>
<tr><td>Plebeus</td><td>Sim</td><td>Não</td><td>A maioria: agricultores de poucas posses, pastores, artesãos, comerciantes. Sem direitos políticos.</td></tr>
<tr><td>Clientes</td><td>Sim</td><td>Não</td><td>Ligados aos patrícios: deviam fidelidade e recebiam proteção. Podiam ir aos cultos dos patrícios.</td></tr>
<tr><td>Escravizados</td><td>Não</td><td>Não</td><td>Pobres endividados e prisioneiros de guerra. Eram propriedade dos patrícios.</td></tr>
</table></div>
<div class="trick"><strong>Truque:</strong> pense em duas perguntas, “é livre?” e “é cidadão?”. Só os <strong>patrícios</strong> respondem “sim” às duas. Só os <strong>escravizados</strong> respondem “não” às duas.</div>
<h3>Como a cidade se organizava</h3>
<p class="book"><i class='ib'></i> Pág. 147</p>
<p>Para os romanos, o campo e o centro faziam parte da cidade. No centro, cercado por muralhas, ficavam os templos (parte alta), os mercados e o <strong>fórum</strong>, lugar das reuniões políticas (parte baixa). No começo a sociedade era mais <strong>igualitária</strong>, com famílias que se ajudavam e um chefe respeitado (<em>pater familias</em>). Com a urbanização, surgiu a divisão social.</p>
<h3>A monarquia</h3>
<p class="book"><i class='ib'></i> Pág. 148</p>
<p><strong>Monarquia</strong> vem do grego e significa “poder de um só”. O rei administrava, comandava o exército e a religião. Em Roma, o rei era <strong>escolhido</strong> pelas famílias mais tradicionais, e não por herança.</p>
<p>Roma teve reis latinos e também <strong>etruscos</strong>, que ensinaram técnicas de guerra, manufatura, comércio e o <strong>arco</strong>. Os romanos ampliaram o uso do arco estrutural e, com o concreto, ergueram obras como o <strong>Coliseu</strong> (século I).</p>`,
 quiz:[
  {q:"Os patrícios eram:", ref:"pág. 146", o:["descendentes dos fundadores de Roma, donos de terras, livres e cidadãos","a maioria da população, livre mas sem direitos políticos","ligados a uma família rica, a quem deviam fidelidade","pessoas sem liberdade e sem direitos"], e:"Era o grupo que concentrava terras e poder político."},
  {q:"Os plebeus eram:", ref:"pág. 146", o:["livres, mas sem direitos políticos","cidadãos e donos das maiores terras","propriedade dos patrícios","sacerdotes do fogo sagrado"], e:"Eram a maioria: agricultores, pastores, artesãos e comerciantes."},
  {q:"Os clientes:", ref:"pág. 146", o:["deviam fidelidade aos patrícios e, em troca, recebiam proteção","eram compradores das lojas romanas","eram os reis etruscos","eram cidadãos com direito a voto"], e:"Podiam participar dos cultos dos patrícios, mas não tinham cidadania."},
  {q:"Os escravizados eram, principalmente:", ref:"pág. 146", o:["pessoas muito pobres, endividadas ou prisioneiras de guerra","os filhos mais novos dos patrícios","estrangeiros ricos","soldados aposentados"], e:"Faziam parte das propriedades dos patrícios e não tinham liberdade nem direitos."},
  {q:"Qual grupo era livre E cidadão?", ref:"pág. 147", o:["Patrícios","Plebeus","Clientes","Escravizados"], e:"Plebeus e clientes eram livres, mas não cidadãos."},
  {q:"Com a urbanização de Roma, a sociedade:", ref:"pág. 147", o:["deixou de ser igualitária e se dividiu em grupos sociais","ficou totalmente igual","passou a ser governada pelos escravizados","abandonou as famílias"], e:"No começo as famílias se ajudavam. Depois surgiu a divisão social."},
  {q:"A palavra “monarquia” significa:", ref:"pág. 148", o:["poder de um só","coisa pública","poder do povo","conselho de anciãos"], e:"Vem do grego. “Coisa pública” é república; “conselho de anciãos” é Senado."},
  {q:"Os etruscos influenciaram os romanos ensinando, por exemplo:", ref:"pág. 148", o:["a construção em arco","a escrita das Doze Tábuas","o cristianismo","a divisão do império em dois"], e:"Veja a Porta all’Arco, em Volterra. Os romanos ampliaram o uso do arco e fizeram o Coliseu."}
 ]
},
{
 id:"r3", mod:14, tag:"14.3", color:"#9EE6B8",
 title:"Quem mandava na república", pages:"Senado e magistrados · págs. 149 a 152",
 study:`
<h3>República: a coisa pública</h3>
<p class="book"><i class='ib'></i> Pág. 149</p>
<p>Em 509 a.C., os patrícios expulsaram o rei Tarquínio, o Soberbo, e criaram a república. <em>Res publica</em> significa “a <strong>coisa pública</strong>”: o interesse particular deve ficar abaixo do interesse de todos. Na pintura de Jacques-Louis David (1789), Brutus condena os próprios filhos por tramarem a volta da monarquia.</p>
<h3>Senado e magistrados</h3>
<p class="book"><i class='ib'></i> Págs. 150 e 151</p>
<div class="tbl"><table>
<tr><th>Instituição ou cargo</th><th>O que fazia</th></tr>
<tr><td><strong>Senado</strong></td><td>Patrícios com cargo vitalício. Controlava as finanças, o espaço público e aprovava leis. Senado vem de <em>senex</em>: “conselho de anciãos”.</td></tr>
<tr><td><strong>Assembleias</strong></td><td>Elegiam os magistrados.</td></tr>
<tr><td><strong>Cônsules</strong></td><td>Os mais poderosos: funções administrativas e militares (antes do rei). Um não fazia nada sem o outro.</td></tr>
<tr><td><strong>Questores</strong></td><td>Cuidavam do dinheiro público (impostos).</td></tr>
<tr><td><strong>Censores</strong></td><td>Faziam o censo (contagem da população). Ficavam 5 anos no cargo.</td></tr>
<tr><td><strong>Edis</strong></td><td>Limpeza das ruas, policiamento, obras, jogos e abastecimento.</td></tr>
<tr><td><strong>Pretores</strong></td><td>Aplicavam as leis e puniam quem as descumpria.</td></tr>
</table></div>
<div class="trick"><strong>Regra de ouro dos magistrados:</strong> <strong>dois</strong> para cada cargo e só <strong>um ano</strong> de mandato (menos os censores). Assim se evitava o abuso do poder.</div>
<p>A <strong>toga</strong> era a roupa de quem tinha cargo público. Para Cícero (pág. 152), a república é um grupo de pessoas unidas pelo mesmo direito e voltadas para o <strong>bem comum</strong>. O Senado existe até hoje no Brasil, com 81 senadores.</p>`,
 quiz:[
  {q:"A expressão latina res publica significa:", ref:"pág. 149", o:["a coisa pública","o poder de um só","o povo no poder","a lei escrita"], e:"Na república, o interesse de todos deve vir antes do interesse particular."},
  {q:"Na pintura de David, Brutus condena os próprios filhos. A mensagem da obra é que, na república:", ref:"pág. 149", o:["o interesse público deve se sobrepor a todos os demais","o rei tem poder absoluto","a família vem antes de Roma","os jovens não podem participar da política"], e:"Os filhos tramaram a volta da monarquia, e Brutus colocou Roma acima da família."},
  {q:"Por que havia dois magistrados para cada cargo?", ref:"pág. 150", o:["Para impedir o abuso do poder","Para dividir o salário","Porque um era patrício e o outro escravizado","Para que um governasse Roma e o outro Cartago"], e:"Um cônsul, por exemplo, não podia fazer nada sem a autorização do outro."},
  {q:"Os magistrados mais poderosos da república, com funções administrativas e militares, eram os:", ref:"pág. 150", o:["cônsules","questores","edis","censores"], e:"Eles assumiram as funções que antes eram do rei."},
  {q:"Os questores cuidavam:", ref:"pág. 150", o:["do dinheiro público, arrecadado com impostos","da limpeza das ruas","do censo da população","dos templos dos deuses"], e:"Hoje diríamos que cuidavam das finanças."},
  {q:"Os censores eram responsáveis por:", ref:"pág. 151", o:["fazer o censo, contando e classificando a população","cuidar da limpeza das ruas","aplicar as leis e punir","cuidar do dinheiro dos impostos"], e:"Eram os únicos que ficavam 5 anos no cargo, o intervalo entre um censo e outro."},
  {q:"Os pretores eram responsáveis por:", ref:"pág. 151", o:["aplicar as leis e punir quem as descumprisse","organizar os jogos","comandar o exército","fazer o censo"], e:"Os edis cuidavam de ruas, obras e jogos."},
  {q:"A palavra “senado” vem do latim senex, que significa:", ref:"pág. 151", o:["homem velho","coisa pública","homem livre","soldado"], e:"Senado = “conselho de anciãos”."}
 ]
},
{
 id:"r4", mod:14, tag:"14.4", color:"#FFB3C7",
 title:"A plebe conquista direitos", pages:"Lutas dos plebeus · págs. 152 a 154",
 study:`
<h3>A vida difícil dos plebeus</h3>
<p class="book"><i class='ib'></i> Págs. 152 e 153</p>
<p>Os plebeus eram a maioria da população, mas:</p>
<ul>
<li>não tinham <strong>direitos políticos</strong>;</li>
<li>eram julgados por tribunais de patrícios, com leis <strong>não escritas</strong>;</li>
<li>só podiam <strong>casar entre si</strong>;</li>
<li>podiam virar escravos se não pagassem suas <strong>dívidas</strong>.</li>
</ul>
<p>Sabendo que eram essenciais ao exército e à economia, em <strong>494 a.C.</strong> eles <strong>abandonaram Roma</strong> como forma de pressão.</p>
<h3>O que eles conquistaram</h3>
<div class="tl">
 <div><b>Tribunos da plebe</b><span>Magistrados que defendiam os plebeus e podiam <strong>vetar</strong> decisões do Senado.</span></div>
 <div><b>c. 450 a.C.</b><span>As leis passam a ser <strong>escritas</strong>: a Lei das Doze Tábuas, que qualquer um podia consultar.</span></div>
 <div><b>Mais direitos</b><span>Eleger-se <strong>cônsul</strong>, fim da <strong>escravidão por dívida</strong> e <strong>casamento</strong> entre patrícios e plebeus.</span></div>
 <div><b>287 a.C.</b><span><strong>Plebiscito</strong>: decisões da Assembleia da Plebe passam a ter força de lei.</span></div>
</div>
<p>O Brasil também prevê plebiscitos: consultas em que a população responde “sim” ou “não”.</p>
<div class="box">Nem todos aproveitaram igual. Os magistrados <strong>não recebiam salário</strong>, então só os ricos podiam se dedicar à política. Formou-se uma <strong>nobreza patrício-plebeia</strong>, que unia patrícios e plebeus enriquecidos (Funari, pág. 154). Em Atenas, o <em>mysthós</em> pagava os pobres para participar.</div>`,
 quiz:[
  {q:"Qual destas era uma injustiça contra os plebeus antes das suas conquistas?", ref:"pág. 153", o:["Podiam ser escravizados se não pagassem suas dívidas","Eram obrigados a ser cônsules","Não podiam trabalhar no comércio","Tinham que morar fora de Roma"], e:"Além disso, só podiam casar entre si e eram julgados por leis não escritas."},
  {q:"Em 494 a.C., para pressionar os patrícios, os plebeus:", ref:"pág. 153", o:["abandonaram Roma","atacaram Cartago","elegeram um rei","queimaram o Senado"], e:"Eles sabiam que eram essenciais ao exército e à economia de Roma."},
  {q:"Os tribunos da plebe podiam:", ref:"pág. 153", o:["vetar decisões do Senado para defender os plebeus","escolher o imperador","fazer o censo","comandar as legiões na guerra"], e:"Foi uma das primeiras conquistas da plebe."},
  {q:"A Lei das Doze Tábuas foi importante para os plebeus porque:", ref:"pág. 164", o:["com as leis escritas, todos podiam conhecer as “regras do jogo” e os patrícios não julgavam como bem entendiam","acabou com a república","tornou os plebeus donos de todas as terras","proibiu o casamento entre patrícios e plebeus"], e:"Antes, as leis não eram escritas e os cônsules da nobreza julgavam conforme suas conveniências."},
  {q:"O plebiscito, conquistado em 287 a.C., garantia que:", ref:"pág. 153", o:["as decisões da Assembleia da Plebe tivessem força de lei","os plebeus pudessem virar reis","os patrícios fossem expulsos de Roma","o Senado fosse fechado"], e:"Hoje o Brasil também usa plebiscitos para consultar a população."},
  {q:"Mesmo depois das conquistas, poucos plebeus participavam da política porque:", ref:"pág. 153", o:["os magistrados não recebiam salário","eles não sabiam ler","era proibido por lei","moravam fora de Roma"], e:"Só quem era rico podia se dedicar à política sem remuneração."},
  {q:"A “nobreza patrício-plebeia” era formada por:", ref:"pág. 154", o:["patrícios e plebeus enriquecidos","plebeus pobres e escravizados","reis etruscos e gregos","soldados e gladiadores"], e:"Uma nova divisão social, baseada principalmente na riqueza."}
 ]
},
{
 id:"r5", mod:14, tag:"14.5", color:"#C9B6FF",
 title:"Roma, senhora do Mediterrâneo", pages:"Conquistas e suas consequências · págs. 154 a 158",
 study:`
<h3>As conquistas</h3>
<p class="book"><i class='ib'></i> Págs. 154 a 156 (mapas)</p>
<p>Roma deixou de ser só uma cidade-Estado e conquistou muitos povos. Controlar o mar Mediterrâneo (entre Europa, África e Ásia) atendia às suas necessidades <strong>econômicas, militares e de segurança</strong>.</p>
<div class="tl">
 <div><b>Séc. IV e III a.C.</b><span>Conquista da <strong>península Itálica</strong>, para evitar ataques dos vizinhos.</span></div>
 <div><b>Séc. III a.C.</b><span>Disputa pela <strong>Sicília</strong> (defesa e muito trigo) com <strong>Cartago</strong>, no norte da África: as três <strong>Guerras Púnicas</strong>. “Púnica” vem de <em>punis</em>, nome dos fenícios que fundaram Cartago.</span></div>
 <div><b>133 a.C.</b><span>Conquista da <strong>Grécia</strong>, cultura muito admirada pelos romanos.</span></div>
</div>
<h3>Consequências das conquistas</h3>
<p class="book"><i class='ib'></i> Págs. 157 e 158 (Coluna de Trajano)</p>
<ul>
<li>Saques e <strong>muitos escravizados</strong> (prisioneiros de guerra). Trabalhavam em casas, campos, minas e serviços públicos. Escravizados gregos eram mestres de filosofia, literatura e arte.</li>
<li>Para a lei romana, o escravizado era uma <strong>coisa (res)</strong>: não podia ter família, bens nem ir à justiça.</li>
<li>A região conquistada virava <strong>província</strong>: governante indicado por Roma e <strong>impostos</strong>.</li>
<li><strong>Trocas culturais</strong>: técnicas romanas (muralhas, aquedutos, estradas) e o latim se espalharam, e Roma absorveu culturas dos vencidos.</li>
<li>A religião continuou <strong>politeísta</strong>, com forte influência grega (Ares virou Marte). Roma não impunha sua religião, o que evitava revoltas.</li>
</ul>`,
 quiz:[
  {q:"Por que Roma ganhou o apelido de “senhora do Mediterrâneo”?", ref:"pág. 154", o:["Porque conquistou os povos e territórios em volta desse mar","Porque foi fundada no meio do mar","Porque seus reis eram marinheiros fenícios","Porque nunca fez guerras"], e:"Controlar o Mediterrâneo atendia a interesses econômicos, militares e de segurança."},
  {q:"As Guerras Púnicas foram travadas entre Roma e:", ref:"pág. 155", o:["Cartago","Atenas","os germânicos","os etruscos"], e:"A disputa começou pela ilha da Sicília, grande produtora de trigo."},
  {q:"A palavra “púnica” vem de:", ref:"pág. 155", o:["punis, como os romanos chamavam os fenícios que fundaram Cartago","punição, porque os romanos castigavam os vencidos","um rio da Sicília","um deus romano da guerra"], e:"Cartago ficava no norte da África e foi fundada por mercadores fenícios."},
  {q:"Roma conquistou a Grécia, cultura que admirava muito, em:", ref:"pág. 155", o:["133 a.C.","753 a.C.","476","212"], e:"A região oriental do Mediterrâneo interessava aos romanos havia muito tempo."},
  {q:"Uma das consequências das conquistas foi:", ref:"pág. 157", o:["o grande aumento do número de escravizados em Roma","o fim da escravidão","a proibição do latim","a volta da monarquia"], e:"Prisioneiros de guerra eram escravizados. A Coluna de Trajano mostra essas cenas."},
  {q:"Para a lei romana, o escravizado era considerado:", ref:"pág. 158", o:["uma coisa (res), sem família, bens ou direito à justiça","um cidadão de segunda classe","um cliente dos patrícios","um soldado do império"], e:"O dono tinha sobre ele até poder de vida e morte."},
  {q:"Quando uma região era conquistada, ela:", ref:"pág. 158", o:["virava uma província, com governante indicado por Roma e impostos","ficava livre para fazer o que quisesse","era obrigada a adotar só os deuses romanos","passava a ser governada por Cartago"], e:"E os povos podiam manter muitos costumes, o que evitava revoltas."},
  {q:"Durante a expansão, a religião romana:", ref:"pág. 158", o:["continuou politeísta, mas recebeu forte influência grega","virou cristã","foi proibida pelo Senado","passou a ter um só deus"], e:"O deus grego Ares, por exemplo, ganhou o nome latino de Marte."}
 ]
},
{
 id:"r6", mod:14, tag:"14.6", color:"#FFC98A",
 title:"A crise da república", pages:"Dos Graco a Otávio · págs. 158 a 160",
 study:`
<h3>Quem ganhou e quem perdeu</h3>
<p class="book"><i class='ib'></i> Pág. 158</p>
<div class="vs">
 <div style="background:#DDF7EC;color:#1B1F3B">Ganharam<span class="big">OS RICOS</span>patrícios com mais terras e escravizados; comerciantes plebeus</div>
 <div style="background:#FDE3E7;color:#1B1F3B">Perderam<span class="big">OS POBRES</span>pequenos proprietários, trabalhadores livres e artesãos</div>
</div>
<p>Sem dinheiro para comprar escravizados, os pequenos proprietários faliram e venderam suas terras. Os trabalhadores livres foram trocados por escravizados, e os artesãos não conseguiam vender diante das mercadorias que chegavam das conquistas. Resultado: <strong>fome, desemprego, falta de moradia</strong> e tensão social.</p>
<h3>Tentativas de resolver</h3>
<p class="book"><i class='ib'></i> Pág. 159</p>
<div class="tbl"><table>
<tr><th>Quem</th><th>O que propôs</th></tr>
<tr><td><strong>Tibério Graco</strong> (tribuno da plebe)</td><td>Limitar o tamanho das propriedades e fazer a <strong>reforma agrária</strong>. Foi morto em 132 a.C.</td></tr>
<tr><td><strong>Caio Graco</strong></td><td>Retomou a reforma agrária. Conseguiu a <strong>Lei Frumentária</strong> (123 a.C.): trigo vendido barato à população.</td></tr>
<tr><td><strong>Otávio</strong> (general)</td><td>Com apoio do Senado, recebeu os títulos de <em>Princeps</em> (primeiro cidadão), <em>Imperator</em> (chefe militar), <em>Pontifex Maximus</em> (chefe da religião) e <em>Augustus</em> (preferido dos deuses). Em <strong>27 a.C.</strong> virou comandante único: fim da república.</td></tr>
</table></div>
<h3>Educação para viver na república</h3>
<p class="book"><i class='ib'></i> Pág. 160</p>
<p>Os romanos acreditavam que a educação era a melhor forma de aprender a viver na república. Escrita e números não eram só da elite. Ápio Cláudio Cego deixou a frase: “Cada um é fabricante de sua própria sorte”.</p>`,
 quiz:[
  {q:"Quem perdeu com as conquistas romanas?", ref:"pág. 158", o:["Os pequenos proprietários e trabalhadores plebeus","Os grandes proprietários patrícios","Os comerciantes plebeus ricos","Os generais vitoriosos"], e:"Sem dinheiro para comprar escravizados, foram arruinados e perderam empregos."},
  {q:"O empobrecimento da maioria da população romana causou:", ref:"pág. 158", o:["fome, desemprego, falta de moradia e tensão social","a volta da monarquia","o fim da escravidão","a conquista da Grécia"], e:"Muitas pessoas estavam dispostas a se rebelar."},
  {q:"Os irmãos Tibério e Caio Graco defendiam:", ref:"pág. 159", o:["a reforma agrária, distribuindo terras públicas aos plebeus","o fim do Senado","a volta dos reis etruscos","a conquista da Germânia"], e:"Os patrícios reagiram com violência: Tibério foi morto em 132 a.C."},
  {q:"A Lei Frumentária (123 a.C.) determinava que:", ref:"pág. 159", o:["o trigo fosse vendido a preços baixos para a população","os plebeus pudessem ser cônsules","as leis fossem escritas","os escravizados fossem libertados"], e:"Foi o que Caio Graco conseguiu da nobreza."},
  {q:"A república romana chegou ao fim quando:", ref:"pág. 159", o:["o general Otávio se tornou comandante único de Roma, em 27 a.C.","Cartago venceu as Guerras Púnicas","os plebeus abandonaram Roma","Rômulo matou Remo"], e:"Popular por causa das vitórias do exército, ele recebeu os títulos que concentravam o poder."},
  {q:"Para os romanos, a educação era importante porque:", ref:"pág. 160", o:["era a melhor forma de aprender a viver na república","servia só para formar soldados","era exclusiva dos imperadores","substituía as leis"], e:"Os jovens também aprendiam convivendo com os mais velhos e nos espaços públicos."}
 ]
},
{
 id:"r7", mod:15, tag:"15.1", color:"#FFD23F",
 title:"Os imperadores e as estradas", pages:"Otávio Augusto e a romanização · págs. 166 a 169",
 study:`
<p class="book"><i class='ib'></i> Abertura: pintura de Pompeia com a briga no anfiteatro, no ano 59 (pág. 166)</p>
<h3>Otávio Augusto</h3>
<p class="book"><i class='ib'></i> Pág. 167</p>
<p>Otávio Augusto fez uma <strong>reforma administrativa</strong>, dividiu o império em <strong>catorze regiões</strong> e vigiou os locais com muitos escravizados. A economia melhorou, mas houve <strong>retrocesso político</strong>: o povo perdeu espaço no governo, e o Senado continuou existindo, mas com muito menos poder.</p>
<p>Foram mais de <strong>cem imperadores</strong> entre 27 a.C. e 476, que governaram de forma autoritária e personalista.</p>
<h3>Propaganda com o próprio rosto</h3>
<p class="book"><i class='ib'></i> Págs. 167 e 168</p>
<p>Moedas e estátuas com o rosto do imperador eram <strong>propaganda política</strong>. Segundo a historiadora Mary Beard, os retratos de Augusto eram <strong>idealizados</strong>: ele aparecia sempre jovem, mesmo aos setenta anos, e provavelmente nada parecido com o Augusto real.</p>
<h3>Todos os caminhos levam a Roma</h3>
<p class="book"><i class='ib'></i> Págs. 168, 169 e 172</p>
<ul>
<li>O comércio prosperou com <strong>moeda comum</strong>, segurança, transporte marítimo, portos e estradas.</li>
<li>As estradas tinham calçamento, drenagem e <strong>miliários</strong> (marcos de distância). O <strong>Miliário Dourado</strong>, em Roma, era o ponto zero.</li>
<li>A <strong>Via Appia</strong>, a “rainha das estradas”, tinha mais de 500 km.</li>
<li>Pelas estradas circulavam tropas, mercadorias, pessoas, ideias e religiões.</li>
</ul>
<div class="box"><strong>Romanização</strong>: os costumes romanos eram levados aos territórios dominados, e Roma também absorvia a cultura desses povos e a espalhava.</div>`,
 quiz:[
  {q:"Com Otávio Augusto, os romanos:", ref:"pág. 167", o:["perderam espaço de participação no governo","ganharam o direito de eleger o imperador","acabaram com o exército","passaram a ser governados por reis etruscos"], e:"A economia melhorou, mas houve retrocesso político: o Senado perdeu poder."},
  {q:"Para administrar melhor as províncias, Otávio Augusto:", ref:"pág. 167", o:["dividiu o império em catorze regiões","criou dois impérios","acabou com os impostos","mudou a capital para Cartago"], e:"Também reforçou a vigilância onde havia muitos escravizados."},
  {q:"Os imperadores cunhavam moedas com o próprio rosto para:", ref:"pág. 167", o:["fazer propaganda política e valorizar sua imagem","mostrar a data da fundação de Roma","pagar os gladiadores","homenagear os plebeus"], e:"A moeda passava pelo bolso das pessoas em todo o império."},
  {q:"Segundo Mary Beard, os retratos de Augusto:", ref:"pág. 168", o:["eram idealizados e o mostravam sempre jovem","eram retratos fiéis do rosto dele","foram proibidos pelo Senado","mostravam seus dentes ruins"], e:"A ideia era que o povo distante “conhecesse” o governante, mesmo sem se parecer com ele."},
  {q:"Romanização é:", ref:"pág. 168", o:["o processo de levar a cultura romana aos povos dominados, enquanto Roma também absorvia a cultura deles","a destruição total das culturas conquistadas","a mudança da capital para Constantinopla","a tradução da Bíblia para o latim"], e:"Foi uma troca, embora com imposições."},
  {q:"Os miliários eram:", ref:"pág. 169", o:["marcos de distância nas estradas romanas","soldados que guardavam as estradas","moedas de ouro","lojas de comida pronta"], e:"O Miliário Dourado, em Roma, era o ponto zero de todas as distâncias."},
  {q:"A expressão “todos os caminhos levam a Roma” se relaciona com:", ref:"pág. 172", o:["a rede de estradas que tinha Roma como centro","o rio Tibre, que passava por todas as cidades","os aquedutos que levavam água a Roma","as Guerras Púnicas"], e:"A Via Appia, a “rainha das estradas”, tinha Roma como ponto principal."}
 ]
},
{
 id:"r8", mod:15, tag:"15.2", color:"#7FD3FF",
 title:"A cidade romana e o pão e circo", pages:"Cenas de uma cidade romana · págs. 170 a 173",
 study:`
<h3>Cenas de uma cidade romana</h3>
<p class="book"><i class='ib'></i> Infográfico das págs. 170 e 171</p>
<p>Nas terras conquistadas, Roma construía cidades com o mesmo modelo: ruas em ângulo reto, arcos, colunas e prédios do governo.</p>
<div class="tbl"><table>
<tr><th>Nome</th><th>O que era</th></tr>
<tr><td><em>Domus</em></td><td>Casa urbana dos ricos (podia ter água encanada).</td></tr>
<tr><td><em>Insulae</em></td><td>Prédios dos mais pobres: moravam em cima; embaixo, lojas e oficinas.</td></tr>
<tr><td><em>Thermopolium</em></td><td>Loja de comida pronta, para quem não tinha onde cozinhar.</td></tr>
<tr><td>Termas</td><td>Banhos públicos e centro de convívio social.</td></tr>
<tr><td>Aquedutos</td><td>Canais e arcos que traziam água potável.</td></tr>
<tr><td>Teatros, anfiteatros e circos</td><td>Peças, lutas de gladiadores e corridas de bigas.</td></tr>
<tr><td>Grafites nas paredes</td><td>Pedidos de voto, cenas do dia a dia e protestos.</td></tr>
</table></div>
<p>O <strong>pão</strong> era indispensável. A partir do século I a.C., as grandes cidades já tinham padarias. Os ricos andavam de <strong>liteira</strong>.</p>
<h3>Pão e circo</h3>
<p class="book"><i class='ib'></i> Pág. 173</p>
<p>Para controlar os descontentes (sem direitos políticos e sem emprego), o Estado distribuía <strong>trigo</strong> e oferecia <strong>espetáculos gratuitos</strong>.</p>
<ul>
<li>Os <strong>gladiadores</strong> eram, em geral, escravizados e prisioneiros de guerra. Lutavam entre si ou contra animais.</li>
<li>O público pedia “<em>iugula</em>” (degole-o) ou “<em>mitte</em>” (salve-o), e o imperador costumava ouvir a plateia.</li>
<li>As lutas divertiam, honravam os deuses e <strong>reafirmavam o poder do Estado</strong>.</li>
<li>O <strong>Coliseu</strong> recebia até <strong>50 mil pessoas</strong>, com lugares definidos pela condição social.</li>
</ul>`,
 quiz:[
  {q:"As insulae eram:", ref:"pág. 170", o:["moradias dos mais pobres, com lojas no térreo","casas dos mais ricos","banhos públicos","templos dos deuses"], e:"Os ricos moravam na domus."},
  {q:"O thermopolium era:", ref:"pág. 170", o:["uma loja que vendia comida pronta","uma terma de água quente","um templo de Júpiter","uma arena de gladiadores"], e:"Os principais fregueses eram os pobres, que não tinham onde cozinhar."},
  {q:"As termas públicas eram importantes porque:", ref:"pág. 171", o:["nem todas as casas tinham banheiro, e elas viraram um centro de convívio social","eram usadas para guardar o trigo","eram o lugar das reuniões do Senado","eram onde se treinavam os gladiadores"], e:"O banho diário virou hábito dos romanos no império."},
  {q:"Os aquedutos serviam para:", ref:"pág. 171", o:["levar água potável até as cidades","proteger as fronteiras","transportar soldados","guardar os mortos"], e:"A água vinha por canais subterrâneos ou por arcos suspensos."},
  {q:"A política do “pão e circo” consistia em:", ref:"pág. 173", o:["distribuir trigo e oferecer espetáculos gratuitos para controlar os descontentes","vender pão caro para financiar o circo","proibir os espetáculos durante a crise","dar terras aos plebeus"], e:"Assim o Estado acalmava quem não tinha direitos políticos nem emprego."},
  {q:"Os gladiadores eram, em geral:", ref:"pág. 173", o:["escravizados e prisioneiros de guerra","senadores que disputavam o poder","cônsules em treinamento","sacerdotes de Marte"], e:"Lutavam entre si ou com animais para entreter o público."},
  {q:"No Coliseu, os lugares do público eram definidos:", ref:"pág. 173", o:["pela condição social de cada espectador","por ordem de chegada","por sorteio","pela idade"], e:"Cabiam até 50 mil pessoas."}
 ]
},
{
 id:"r9", mod:15, tag:"15.3", color:"#9EE6B8",
 title:"Cidadania e mulheres em Roma", pages:"Quem participava da vida pública · págs. 174 a 176",
 study:`
<h3>Cidadania em Roma</h3>
<p class="book"><i class='ib'></i> Pág. 174</p>
<p>Roma era mais aberta que Atenas na concessão da cidadania:</p>
<div class="tl">
 <div><b>República</b><span>Os plebeus conquistam direitos.</span></div>
 <div><b>89 a.C.</b><span>Os habitantes livres e libertos da península Itálica viram cidadãos.</span></div>
 <div><b>212</b><span>A cidadania é estendida a todos os habitantes livres do império.</span></div>
</div>
<p>Ser cidadão trazia <strong>direitos e deveres</strong>: servir no exército, pagar impostos e participar das decisões. No império, a participação diminuiu e cresceu a distância entre o cidadão rico e o cidadão pobre (“humilde”).</p>
<p>Para o historiador Norberto Guarinello, cidadania é pertencer a uma comunidade, com obrigações e direitos, e também significa a <strong>exclusão do outro</strong>.</p>
<h3>Mulheres em Roma</h3>
<p class="book"><i class='ib'></i> Págs. 175 e 176</p>
<ul>
<li>Roma era uma sociedade <strong>patriarcal</strong>: só os homens eram cidadãos com cargos e voz nas assembleias. O <em>pater</em> comandava a casa.</li>
<li>A mulher passava da tutela do pai para a do marido.</li>
<li>Diferente da grega, a romana casada virava <strong>mater familias</strong> (“senhora da casa”): com o consentimento do marido, administrava o lar e os bens e frequentava teatros e feiras.</li>
<li>No império, algumas tomaram a frente dos negócios. Houve mulheres comerciantes, parteiras, caçadoras e até gladiadoras.</li>
<li>Podiam ser letradas, mas eram <strong>proibidas de publicar</strong> e não tinham direito de expressão política.</li>
</ul>`,
 quiz:[
  {q:"Em 89 a.C., a cidadania romana foi concedida:", ref:"pág. 174", o:["aos habitantes livres e libertos da península Itálica","a todos os escravizados","somente aos patrícios","às mulheres"], e:"Depois, em 212, foi estendida a todos os livres do império."},
  {q:"Em 212, a cidadania romana foi estendida a:", ref:"pág. 174", o:["todos os habitantes livres do império","apenas aos patrícios","somente aos moradores da cidade de Roma","todos, inclusive os escravizados"], e:"Roma ampliou a cidadania aos poucos."},
  {q:"Qual destes era um DEVER do cidadão romano?", ref:"pág. 174", o:["Servir no exército e pagar impostos","Votar para imperador todo ano","Escolher o papa","Morar em uma domus"], e:"Também devia participar das deliberações políticas."},
  {q:"Comparando com Atenas, podemos dizer que Roma:", ref:"pág. 178", o:["foi mais aberta na concessão da cidadania","nunca concedeu cidadania a ninguém","dava cidadania às mulheres","copiou exatamente o modelo ateniense"], e:"Plebeus, itálicos e, em 212, todos os livres do império."},
  {q:"Roma era uma sociedade patriarcal. Isso quer dizer que:", ref:"pág. 175", o:["os homens comandavam a casa e eram os únicos com participação na vida pública","as mulheres governavam o império","os idosos tinham mais poder que todos","não existiam famílias"], e:"O pater decidia sobre filhos, escravizados, mulheres e bens."},
  {q:"Na sociedade romana, a mulher casada:", ref:"pág. 175", o:["virava mater familias e, com a permissão do marido, podia administrar o lar e os bens","era cidadã com direito a voto","podia ser senadora","não podia sair de casa em nenhuma situação"], e:"Mesmo assim, não tinha direito de expressão política."},
  {q:"As mulheres romanas letradas:", ref:"pág. 176", o:["eram admiradas, mas proibidas de publicar seus escritos","eram as únicas que podiam ser cônsules","não existiam","escreviam as leis do império"], e:"Veja o afresco de Pompeia, do século I."}
 ]
},
{
 id:"r10", mod:15, tag:"15.4", color:"#FFB3C7",
 title:"Deuses romanos e o cristianismo", pages:"Religião no império · págs. 176 a 179",
 study:`
<h3>Religião romana</h3>
<p class="book"><i class='ib'></i> Págs. 176 e 177</p>
<p>A religião unia Roma. Em casa, o culto era ao deus <strong>Lar</strong> (antepassado protetor), no <strong>larário</strong> (altar doméstico). Na cidade, o culto era dirigido pelo Estado, e o <strong>Senado</strong> era o guardião da religião. Os romanos eram <strong>politeístas</strong> e adotaram atributos dos deuses gregos:</p>
<div class="tbl"><table>
<tr><th>Romano</th><th>Grego</th><th>Atribuição</th></tr>
<tr><td>Júpiter</td><td>Zeus</td><td>Pai dos deuses e dos homens</td></tr>
<tr><td>Juno</td><td>Hera</td><td>Rainha dos deuses, protetora das mulheres</td></tr>
<tr><td>Netuno</td><td>Poseidon</td><td>Oceano</td></tr>
<tr><td>Febo</td><td>Apolo</td><td>Sol e música</td></tr>
<tr><td>Vênus</td><td>Afrodite</td><td>Beleza e amor</td></tr>
<tr><td>Marte</td><td>Ares</td><td>Guerra</td></tr>
<tr><td>Minerva</td><td>Atena</td><td>Sabedoria</td></tr>
<tr><td>Diana</td><td>Ártemis</td><td>Caça e Lua</td></tr>
</table></div>
<p>Os romanos achavam que ainda havia muitos deuses por conhecer, por isso eram <strong>flexíveis</strong> com as religiões de outros povos. No império, a religião ganhou caráter <strong>cívico</strong>: era preciso cultuar até o imperador (o título “Augusto” mostra essa divinização).</p>
<h3>O nascimento do cristianismo</h3>
<p class="book"><i class='ib'></i> Págs. 178 e 179</p>
<ul>
<li>Jesus nasceu em Belém, na <strong>Palestina</strong>, província romana, no governo de Otávio Augusto.</li>
<li>Foi crucificado com a autorização do governador romano. Seus seguidores mantiveram vivas as ideias cristãs.</li>
<li>O cristianismo se espalhou pela <strong>rede de estradas</strong> e porque a Palestina era província romana.</li>
<li>Primeiro atraiu os mais <strong>humildes</strong>, que viviam na miséria.</li>
<li>Perseguidos, os cristãos rezavam às escondidas nas <strong>catacumbas</strong> (galerias subterrâneas onde se enterravam os mortos).</li>
</ul>
<p>→ A liberdade de culto e o cristianismo como religião oficial estão no card “A crise do império”.</p>`,
 quiz:[
  {q:"O larário era:", ref:"pág. 176", o:["um altar doméstico com as estatuetas dos deuses Lares","um tipo de estrada romana","a casa dos pobres","um cargo de magistrado"], e:"Ali as famílias cultuavam os antepassados."},
  {q:"Quem era o guardião da religião pública em Roma?", ref:"pág. 176", o:["O Senado","Os gladiadores","Os plebeus","Os germânicos"], e:"Por isso os patrícios controlavam também a religião pública."},
  {q:"O deus romano Júpiter corresponde ao deus grego:", ref:"pág. 177", o:["Zeus","Ares","Apolo","Poseidon"], e:"Júpiter é o pai dos deuses e dos homens."},
  {q:"Marte, deus romano da guerra, corresponde ao grego:", ref:"pág. 177", o:["Ares","Hermes","Zeus","Hefesto"], e:"Lembre: Marte também é o pai de Rômulo e Remo na lenda."},
  {q:"Os romanos aceitavam deuses de outros povos porque:", ref:"pág. 177", o:["acreditavam que ainda havia muitos deuses por conhecer","eram proibidos de ter deuses próprios","só tinham um deus","queriam acabar com a própria religião"], e:"Essa flexibilidade também ajudava a dominar os povos conquistados."},
  {q:"No império, a religião ganhou caráter cívico. Isso quer dizer que:", ref:"pág. 177", o:["o povo devia cultuar até o próprio imperador, reforçando a submissão","as religiões foram todas proibidas","o Senado deixou de cuidar da religião","cada cidadão podia criar seu deus"], e:"O título “Augusto” é um símbolo dessa divinização."},
  {q:"Dois fatores ajudaram o cristianismo a sair da Palestina e chegar a Roma:", ref:"pág. 179", o:["a rede de estradas do império e o fato de a Palestina ser província romana","a proibição de todas as outras religiões e a queda de Roma","as Guerras Púnicas e a Lei das Doze Tábuas","os gladiadores e o pão e circo"], e:"As estradas faziam circular pessoas, ideias e religiões."},
  {q:"Os primeiros cristãos faziam cultos nas catacumbas porque:", ref:"pág. 179", o:["eram perseguidos pelo governo imperial","era a lei de Constantino","as igrejas eram muito pequenas","o imperador era cristão"], e:"Catacumbas eram galerias subterrâneas onde se enterravam os mortos."}
 ]
},
{
 id:"r11", mod:15, tag:"15.5", color:"#C9B6FF",
 title:"A crise do império", pages:"Século III ao século IV · págs. 180 e 181",
 study:`
<h3>Da Pax Romana à crise</h3>
<p class="book"><i class='ib'></i> Pág. 180</p>
<p>Durante a <strong>Pax Romana</strong>, os imperadores mantiveram certa estabilidade. No <strong>século III</strong> a situação piorou: entre 211 e 285, Roma teve <strong>28 imperadores</strong>, vários assassinados por usurpadores.</p>
<div class="tbl"><table>
<tr><th>Tipo</th><th>Problemas da crise (Atividade 3, pág. 181)</th></tr>
<tr><td><strong>Políticos</strong></td><td>Troca constante de imperadores, usurpadores, províncias rebeldes, fim das conquistas.</td></tr>
<tr><td><strong>Econômicos</strong></td><td>Falta de escravizados (mão de obra), queda da produção agrícola, mercadorias caras, moedas sem valor, soldados sem salário.</td></tr>
<tr><td><strong>Sociais</strong></td><td>Fim do “pão e circo”, insegurança, plebeus fugindo das cidades para o campo.</td></tr>
</table></div>
<h3>O cristianismo cresce</h3>
<p>Na crise, a promessa de salvação para pobres e oprimidos atraiu muita gente. Os cristãos pregavam paz e igualdade e não aceitavam a divindade do imperador, por isso eram perseguidos. Mesmo assim, chegaram à elite e ao governo.</p>
<div class="tl">
 <div><b>313</b><span><strong>Édito de Milão</strong>: Constantino garante a liberdade de culto.</span></div>
 <div><b>337</b><span>Constantino é batizado pouco antes de morrer.</span></div>
 <div><b>380</b><span>O cristianismo vira a <strong>religião oficial</strong> do império; as outras são proibidas.</span></div>
</div>
<h3>Império dividido</h3>
<p class="book"><i class='ib'></i> Pág. 181</p>
<p>No século IV, <strong>Teodósio</strong> dividiu o império em dois: <strong>Ocidente</strong> (sede em Roma) e <strong>Oriente</strong> (sede em <strong>Constantinopla</strong>). A ideia era facilitar a administração, mas deu certo só no Oriente. No Ocidente, a crise piorou.</p>`,
 quiz:[
  {q:"A Pax Romana foi:", ref:"pág. 180", o:["um período em que os imperadores mantiveram certa estabilidade","uma guerra contra Cartago","o tratado que dividiu o império","o nome do primeiro imperador"], e:"A crise se agravou só no século III."},
  {q:"Entre os anos 211 e 285, Roma teve:", ref:"pág. 180", o:["28 imperadores, vários assassinados","um só imperador","nenhum imperador","três reis etruscos"], e:"Essa instabilidade política fez as províncias se rebelarem."},
  {q:"Com o fim das conquistas territoriais, o império sofreu com:", ref:"pág. 180", o:["a falta de escravizados, que abalou a produção agrícola","o excesso de soldados","a abundância de ouro","a chegada de novos aquedutos"], e:"Sem mão de obra, mercadorias encareceram e as moedas perderam valor."},
  {q:"Durante a crise, o cristianismo ganhou adeptos porque:", ref:"pág. 180", o:["prometia salvação depois da morte aos pobres e oprimidos","era a religião obrigatória desde o início do império","oferecia trigo de graça","era a religião dos gladiadores"], e:"Seus valores consolavam quem sofria."},
  {q:"O Édito de Milão, de 313, garantiu:", ref:"pág. 192", o:["a liberdade de culto, inclusive aos cristãos","o cristianismo como única religião permitida","o culto obrigatório ao imperador","a divisão do império em dois"], e:"Cada um podia seguir a religião que quisesse."},
  {q:"No ano 380, o cristianismo:", ref:"pág. 180", o:["tornou-se religião oficial do império","foi proibido","chegou à Palestina","deu origem aos deuses Lares"], e:"As demais religiões foram proibidas e o Estado ganhou o apoio da Igreja."},
  {q:"O imperador Teodósio dividiu o império em:", ref:"pág. 181", o:["Ocidente, com sede em Roma, e Oriente, com sede em Constantinopla","Norte e Sul, com sede em Cartago","Itália e Grécia, com sede em Atenas","catorze reinos germânicos"], e:"A divisão deu certo apenas na parte oriental."}
 ]
},
{
 id:"r12", mod:15, tag:"15.6", color:"#FFC98A",
 title:"Os “bárbaros” e o fim de Roma", pages:"Germânicos e a queda do Ocidente · págs. 182 a 189",
 study:`
<h3>Os chamados “bárbaros”</h3>
<p class="book"><i class='ib'></i> Pág. 182</p>
<p>Herdando a ideia dos gregos, os romanos chamavam de <strong>bárbaros</strong> os povos de fora de suas fronteiras, que não falavam sua língua nem tinham sua cultura. Era um termo <strong>preconceituoso</strong>: queria dizer grosseiro, inculto e selvagem. Grupos: <strong>germânicos</strong> (francos, vândalos, visigodos, ostrogodos, saxões…), <strong>eslavos</strong> e <strong>tártaro-mongóis</strong>.</p>
<h3>Como viviam os germânicos</h3>
<p class="book"><i class='ib'></i> Págs. 183 a 185</p>
<ul>
<li>Viviam em <strong>aldeias</strong>, com a família como base. Aos 15 anos os rapazes recebiam armas.</li>
<li>Valores: <strong>honra, bravura e coragem</strong>. O <strong>comitatus</strong> era a troca entre chefe e guerreiros: fidelidade em troca de parte dos bens conquistados.</li>
<li>Viviam de caça, pesca, pecuária e agricultura, e desenvolveram a <strong>metalurgia</strong> (armas e joias).</li>
<li>Leis <strong>não escritas</strong>, baseadas nos costumes: <strong>direito consuetudinário</strong>.</li>
<li><strong>Politeístas</strong>: Odin (batalhas), Thor (raio e trovão), Freia (amor e fertilidade), Nerthus (mãe terra).</li>
</ul>
<h3>Romanos e germânicos</h3>
<p>Houve guerras e também comércio. Roma marcou suas fronteiras com os <strong>limes</strong> (muralhas, torres e fortes perto dos rios Reno e Danúbio). Houve trocas culturais: nomes como Ricardo, Leonardo e Roberto têm origem germânica. No século V, pressionados pelos <strong>hunos</strong> (liderados por <strong>Átila</strong>), os germânicos invadiram o império.</p>
<h3>O fim do Império Romano do Ocidente</h3>
<p class="book"><i class='ib'></i> Págs. 187 a 189</p>
<p>População acuada, exército fraco e Estado desmantelado: em <strong>476</strong> Roma foi ocupada e o imperador, destituído. Houve <strong>ruralização</strong> (as pessoas trocaram a cidade pelo campo) e <strong>fragmentação</strong>: nasceu uma sociedade com elementos romanos e germânicos. O Império do Oriente, com sede em Constantinopla, continuou existindo.</p>`,
 quiz:[
  {q:"Para os romanos, “bárbaro” era:", ref:"pág. 182", o:["quem vivia fora das fronteiras e não falava sua língua nem tinha sua cultura","um soldado romano muito corajoso","um cidadão pobre de Roma","um sacerdote germânico"], e:"Era um termo pejorativo: queria dizer grosseiro, inculto e selvagem."},
  {q:"O comitatus era:", ref:"pág. 183", o:["a relação em que os guerreiros juravam fidelidade ao chefe e recebiam parte dos bens conquistados","o Senado dos germânicos","uma estrada que ligava Roma à Germânia","um imposto cobrado pelos romanos"], e:"Honra, bravura e coragem eram os maiores valores dos germânicos."},
  {q:"O direito dos germânicos era chamado de consuetudinário porque:", ref:"pág. 185", o:["as leis não eram escritas e se baseavam nos costumes e tradições","era escrito em tábuas de bronze","foi copiado do Direito romano","só valia para os sacerdotes"], e:"As leis eram transmitidas oralmente."},
  {q:"Thor, para os germânicos, era o deus:", ref:"pág. 185", o:["do raio e do trovão","do amor e da fertilidade","das batalhas e do vento","da mãe terra"], e:"Odin era o deus das batalhas; Freia, do amor; Nerthus, a mãe terra."},
  {q:"Os limes eram:", ref:"pág. 185", o:["as fronteiras fortificadas do Império Romano","os chefes germânicos","as leis escritas de Roma","os templos dos deuses"], e:"Muralhas, torres, fossos e fortalezas perto dos rios Reno e Danúbio."},
  {q:"No século V, os germânicos avançaram sobre o império porque:", ref:"pág. 185", o:["eram pressionados pelos hunos, que chegaram à Europa","foram convidados pelo Senado","fugiam de uma seca na Itália","queriam se tornar cristãos"], e:"Os hunos, liderados por Átila, empurraram vários povos para dentro do território romano."},
  {q:"Com a crise e as invasões, muita gente trocou a cidade pelo campo. Esse processo se chama:", ref:"pág. 188", o:["ruralização","romanização","urbanização","plebiscito"], e:"Mudou a economia, o trabalho e a organização do Estado."},
  {q:"Depois da queda de Roma, em 476, a sociedade que se formou:", ref:"pág. 187", o:["misturava elementos das culturas romana e germânica","era igual à de Roma antes das conquistas","foi totalmente germânica, sem nada de romano","voltou a ser uma monarquia etrusca"], e:"Houve trocas, acertos e rearranjos. Com os germânicos, prevaleceu a fragmentação."}
 ]
}
];


const SITE={
 id:"historia",          // nome curto e único: separa o progresso salvo de cada matéria
 titulo:"Revisão de História",
 serie:"6º ano · 3º trimestre",
 doodles:["SPQR","XIV + XV","753 a.C.","476 d.C."],
 contato:"https://wa.me/5511976280903",
 subModulos:"Módulos 14 e 15: as origens dos romanos e o Império Romano. Cada card é um assunto, com explicação e um quiz curto.",
 subJogos:"Treine como um historiador: datas, personagens, causas e consequências.",
 rodapeModulos:"Quando aparece “pág.”, vale abrir a apostila e olhar o mapa, a imagem ou o texto citado.",
 rodapeJogos:"Os joguinhos misturam os módulos 14 e 15. Errou? Sem problema: é treinando que se aprende."
};
const SECOES=[
 {mod:0,t:"Comece por aqui",s:"A linha do tempo de Roma, que vale para os dois módulos."},
 {mod:14,t:"Módulo 14 · As origens dos romanos",s:"Da lenda da fundação ao fim da república. Apostila, págs. 143 a 165."},
 {mod:15,t:"Módulo 15 · O Império Romano",s:"De Otávio Augusto à queda do Ocidente. Apostila, págs. 166 a 195."}
];

const JOGOS=[
{
 id:"linha", tipo:"ordem", icone:"linha", cor:"#FFC98A",
 titulo:"Linha do Tempo", desc:"Ponha os acontecimentos de Roma em ordem. Cada acerto revela a data.",
 dados:{
  instrucao:"Toque nos acontecimentos na ordem em que aconteceram.",
  partes:["Primeiro","Depois","Depois","Por último"],
  fimTitulo:"Linha do tempo montada!", fimDica:"Lembre: antes de Cristo, quanto maior o número, mais antigo é o ano.", outro:"Outra linha do tempo",
  sets:[
   {t:"A história política de Roma",p:["Rômulo funda Roma e vira o primeiro rei.","Os patrícios expulsam Tarquínio, o Soberbo, e criam a república.","Otávio recebe o título de Augusto e vira o primeiro imperador.","Roma é ocupada e o último imperador do Ocidente é destituído."],d:["753 a.C.","509 a.C.","27 a.C.","476"]},
   {t:"A lenda de Rômulo e Remo",p:["Eneias foge de Troia e funda Alba Longa.","Amúlio prende Numitor e manda jogar os gêmeos no rio Tibre.","Uma loba amamenta os gêmeos, que depois são criados por um pastor.","Rômulo vê as doze aves, mata Remo e funda Roma."],d:["Início","Conflito","Salvação","Fundação"]},
   {t:"As conquistas da plebe",p:["Os plebeus abandonam Roma como forma de pressão.","As leis passam a ser escritas na Lei das Doze Tábuas.","O plebiscito passa a ter força de lei.","Tibério Graco propõe a reforma agrária e é morto."],d:["494 a.C.","c. 450 a.C.","287 a.C.","132 a.C."]},
   {t:"A expansão de Roma",p:["Roma conquista a península Itálica.","Roma enfrenta Cartago nas Guerras Púnicas.","Roma conquista a Grécia.","Otávio vira comandante único de Roma."],d:["Séc. IV e III a.C.","Séc. III a.C.","133 a.C.","27 a.C."]},
   {t:"O cristianismo no império",p:["Jesus nasce na Palestina, província romana, no governo de Otávio Augusto.","Perseguidos, os cristãos fazem cultos às escondidas nas catacumbas.","O Édito de Milão garante a liberdade de culto.","O cristianismo vira a religião oficial do império."],d:["Século I","Séculos I a III","313","380"]},
   {t:"A cidadania romana",p:["Os plebeus conquistam direitos políticos.","Os livres e libertos da península Itálica viram cidadãos.","Otávio Augusto concentra o poder e o povo perde participação.","A cidadania chega a todos os habitantes livres do império."],d:["República","89 a.C.","27 a.C.","212"]},
   {t:"Do auge à queda",p:["Pax Romana: os imperadores mantêm a estabilidade.","Crise do século III: 28 imperadores, revoltas e moedas sem valor.","Teodósio divide o império em Ocidente e Oriente.","Pressionados pelos hunos, os germânicos ocupam Roma."],d:["Séculos I e II","211 a 285","Século IV","476"]}
  ]
 }
},
{
 id:"antes", tipo:"antesdepois", icone:"relogio", cor:"#FFD23F",
 titulo:"Antes ou Depois?", desc:"60 segundos e 3 vidas: dos dois acontecimentos, qual veio primeiro?",
 dados:{
  pergunta:"O que aconteceu primeiro?", regra:"o acontecimento que veio primeiro", distanciaMinima:20,
  itens:[
   {t:"Fundação de Roma, segundo a lenda",v:-753,label:"753 a.C."},
   {t:"Criação da república",v:-509,label:"509 a.C."},
   {t:"Os plebeus abandonam Roma",v:-494,label:"494 a.C."},
   {t:"Lei das Doze Tábuas",v:-450,label:"c. 450 a.C."},
   {t:"O plebiscito ganha força de lei",v:-287,label:"287 a.C."},
   {t:"Roma conquista a Grécia",v:-133,label:"133 a.C."},
   {t:"Lei Frumentária, de Caio Graco",v:-123,label:"123 a.C."},
   {t:"Livres da península Itálica viram cidadãos",v:-89,label:"89 a.C."},
   {t:"Otávio vira o primeiro imperador",v:-27,label:"27 a.C."},
   {t:"Briga no anfiteatro de Pompeia",v:59,label:"ano 59"},
   {t:"Construção do Arco de Tito",v:82,label:"ano 82"},
   {t:"Cidadania para todos os livres do império",v:212,label:"ano 212"},
   {t:"Começa a fase dos 28 imperadores em crise",v:211,label:"ano 211"},
   {t:"Édito de Milão",v:313,label:"ano 313"},
   {t:"Batismo de Constantino",v:337,label:"ano 337"},
   {t:"Cristianismo vira religião oficial",v:380,label:"ano 380"},
   {t:"Morte de Átila, rei dos hunos",v:453,label:"ano 453"},
   {t:"Queda do Império Romano do Ocidente",v:476,label:"ano 476"},
   {t:"Napoleão manda erguer o Arco do Triunfo",v:1806,label:"ano 1806"}
  ]
 }
},
{
 id:"quem", tipo:"quemsou", icone:"lupa", cor:"#7FD3FF",
 titulo:"Quem Sou Eu?", desc:"Descubra o personagem ou grupo pelas pistas. Quanto menos pistas, mais pontos.",
 rodadas:6, pergunta:"Quem sou eu?",
 dados:[
  {r:"Rômulo",pistas:["Sou personagem de uma lenda.","Meu pai seria o deus Marte.","Fui amamentado por uma loba, com meu irmão gêmeo.","Vi doze aves e virei o primeiro rei de Roma."]},
  {r:"Remo",pistas:["Sou personagem de uma lenda.","Fui jogado no rio Tibre ainda bebê.","Procurei um sinal no céu e só vi seis abutres.","Morri numa briga com meu irmão gêmeo."]},
  {r:"Eneias",pistas:["Sou personagem de uma lenda.","Eu era príncipe de uma cidade invadida pelos gregos.","Minha mãe seria a deusa Vênus.","Fugi de Troia e fundei Alba Longa."]},
  {r:"Tarquínio, o Soberbo",pistas:["Eu governava Roma sozinho.","Eu era de origem etrusca.","Os patrícios não gostavam do meu governo.","Fui expulso, e então nasceu a república."]},
  {r:"Brutus",pistas:["Fui um dos primeiros governantes da república.","Fui pintado por Jacques-Louis David em 1789.","Coloquei o interesse público acima da minha família.","Condenei meus filhos por tramarem a volta da monarquia."]},
  {r:"Tibério Graco",pistas:["Fui tribuno da plebe.","Denunciei que os soldados de Roma não tinham nem um torrão de terra.","Propus limitar o tamanho das propriedades.","Defendi a reforma agrária e fui morto em 132 a.C."]},
  {r:"Otávio Augusto",pistas:["Fui um general vitorioso.","O Senado me deu títulos como Princeps e Imperator.","Meu rosto apareceu em moedas por todo o império, sempre jovem.","Fui o primeiro imperador de Roma, a partir de 27 a.C."]},
  {r:"Constantino",pistas:["Fui imperador no século IV.","Deixei de perseguir um grupo religioso.","Assinei o Édito de Milão, em 313.","Fui batizado cristão pouco antes de morrer."]},
  {r:"Teodósio",pistas:["Fui imperador no século IV.","Tentei resolver a crise mudando a administração.","Separei as províncias por uma linha imaginária.","Dividi o império em Ocidente e Oriente."]},
  {r:"Átila",pistas:["Liderei um povo vindo da Ásia Central.","Meu povo empurrou os germânicos para dentro do império.","Uma medalha me chama de “flagelo de Deus”.","Fui rei dos hunos e morri em 453."]},
  {r:"Napoleão Bonaparte",pistas:["Não sou romano: vivi muitos séculos depois.","Fui imperador da França.","Me inspirei em um monumento do Império Romano.","Mandei construir o Arco do Triunfo, em Paris."]},
  {r:"Uma vestal",pistas:["Sou mulher e vivo reclusa.","Sou muito respeitada na sociedade romana.","Não posso ter filhos.","Mantenho sempre aceso o fogo sagrado de Vesta."]},
  {r:"Um cônsul",pistas:["Sou um magistrado da república.","Fico só um ano no cargo.","Divido o cargo com um colega e não decido nada sem ele.","Sou o magistrado mais poderoso, com funções militares e administrativas."]},
  {r:"Um plebeu",pistas:["Sou livre.","Faço parte da maioria da população.","No começo, eu não tinha direitos políticos.","Em 494 a.C. abandonei Roma para pressionar os patrícios."]},
  {r:"Um gladiador",pistas:["Em geral, eu era escravizado ou prisioneiro de guerra.","Treinava para lutar.","Combatia pessoas ou animais na arena.","O público gritava iugula ou mitte para decidir meu destino."]}
 ]
},
{
 id:"causa", tipo:"liga", icone:"setas", cor:"#9EE6B8",
 titulo:"Causa e Consequência", desc:"Leia o que aconteceu e escolha o que veio por causa disso.",
 rodadas:8,
 dados:{
  rotuloA:"Causa", rotuloB:"Consequência", pergunta:"Qual foi a consequência?",
  pares:[
   ["Os patrícios estavam descontentes com os reis etruscos.","Expulsaram Tarquínio e criaram a república, em 509 a.C."],
   ["Os plebeus não tinham direitos e abandonaram Roma em 494 a.C.","Os patrícios aceitaram criar os tribunos da plebe."],
   ["Os cônsules julgavam com leis não escritas, como bem entendiam.","Os plebeus conseguiram a Lei das Doze Tábuas."],
   ["Os magistrados não recebiam salário.","Só os ricos conseguiam participar da política."],
   ["Roma queria controlar a Sicília, ilha que era de Cartago.","Roma e Cartago lutaram nas Guerras Púnicas."],
   ["As conquistas trouxeram muitos prisioneiros de guerra.","Cresceu muito o número de escravizados em Roma."],
   ["Os pequenos proprietários não conseguiam competir com os patrícios.","Venderam suas terras e ficaram arruinados."],
   ["A pobreza da plebe aumentava a tensão social.","Os irmãos Graco propuseram a reforma agrária."],
   ["As vitórias do exército deixaram alguns generais muito populares.","Otávio virou comandante único e começou o império."],
   ["Muita gente estava sem emprego e sem direitos políticos.","O Estado criou a política do pão e circo."],
   ["Roma construiu uma grande rede de estradas.","Tropas, mercadorias, pessoas e ideias circulavam pelo império."],
   ["A Palestina era província romana, ligada pelas estradas.","O cristianismo se espalhou até Roma."],
   ["As conquistas territoriais pararam no século III.","Faltaram escravizados e a produção agrícola caiu."],
   ["O governo ficou sem dinheiro durante a crise.","Os soldados pararam de receber salário."],
   ["Os hunos avançaram sobre a Europa.","Os germânicos fugiram para dentro do Império Romano."],
   ["O exército estava fraco e o Estado, desmantelado.","Roma foi ocupada em 476."]
  ]
 }
},
{
 id:"separa", tipo:"separa", icone:"alvo", cor:"#FF9EC0",
 titulo:"Separa Rápido", desc:"Em que fase de Roma? Fato ou lenda? Patrício ou plebeu? Deus romano ou grego? Problema social, político ou econômico?",
 dados:[
  {nome:"Monarquia, república, império ou queda?",dica:"Em que fase da história de Roma isso aconteceu?",
   bins:[{k:"m",label:"Monarquia",sub:"753–509 a.C."},{k:"r",label:"República",sub:"509–27 a.C."},{k:"i",label:"Império",sub:"27 a.C.–séc. II"},{k:"q",label:"Crise e queda",sub:"séc. III–476"}],
   items:[["Reis etruscos governam Roma","m"],["Tarquínio, o Soberbo","m"],["O rei comanda o exército e a religião","m"],["Rômulo é o primeiro rei","m"],
          ["Dois cônsules","r"],["Lei das Doze Tábuas","r"],["Guerras Púnicas","r"],["Irmãos Graco","r"],["Plebiscito de 287 a.C.","r"],
          ["Otávio Augusto","i"],["Pax Romana","i"],["Cidadania para todos os livres (212)","i"],["Pão e circo no Coliseu","i"],
          ["28 imperadores entre 211 e 285","q"],["Divisão feita por Teodósio","q"],["Invasões germânicas","q"],["Roma ocupada em 476","q"]]},
  {nome:"Fato ou lenda?",dica:"Isso é parte da lenda da fundação ou um fato estudado pelos historiadores?",
   bins:[{k:"l",label:"Lenda",sub:"história fantástica"},{k:"f",label:"Fato histórico",sub:"estudado por historiadores"}],
   items:[["Eneias, filho de Vênus, funda Alba Longa","l"],["Uma loba amamenta Rômulo e Remo","l"],["O deus Marte é pai dos gêmeos","l"],["Rômulo vê doze aves belíssimas","l"],["Remo vê seis abutres","l"],["Amúlio joga os gêmeos no Tibre","l"],["Um pastor cria os gêmeos","l"],
          ["Reis etruscos governaram Roma","f"],["A república foi criada em 509 a.C.","f"],["Os plebeus abandonaram Roma em 494 a.C.","f"],["Roma conquistou a Grécia em 133 a.C.","f"],["O Arco de Tito foi erguido no ano 82","f"],["O Coliseu recebia até 50 mil pessoas","f"],["Constantino assinou o Édito de Milão","f"]]},
  {nome:"Patrícios × Plebeus",dica:"Essa característica é de patrícios ou de plebeus (na monarquia e no início da república)?",
   bins:[{k:"pa",label:"Patrícios",sub:"elite"},{k:"pl",label:"Plebeus",sub:"maioria"}],
   items:[["Descendentes dos fundadores de Roma","pa"],["Donos das principais terras","pa"],["Ocupavam o Senado de forma vitalícia","pa"],["Tinham clientes fiéis a eles","pa"],["Eram cidadãos com direitos políticos","pa"],["Controlavam a religião pública","pa"],
          ["Maioria da população","pl"],["Livres, mas sem direitos políticos","pl"],["Podiam virar escravos por dívida","pl"],["Abandonaram Roma em 494 a.C.","pl"],["Conquistaram os tribunos","pl"],["Lutaram por leis escritas","pl"]]},
  {nome:"Deus romano × deus grego",dica:"Esse nome é de um deus romano ou grego?",
   bins:[{k:"r",label:"Romano",sub:"nome latino"},{k:"g",label:"Grego",sub:"nome grego"}],
   items:[["Júpiter","r"],["Juno","r"],["Netuno","r"],["Febo","r"],["Vênus","r"],["Marte","r"],["Minerva","r"],["Diana","r"],
          ["Zeus","g"],["Hera","g"],["Poseidon","g"],["Apolo","g"],["Afrodite","g"],["Ares","g"],["Atena","g"],["Ártemis","g"]]},
  {nome:"Problemas da crise do império",dica:"Esse problema é social, político ou econômico? (Atividade 3, pág. 181)",
   bins:[{k:"s",label:"Social"},{k:"p",label:"Político"},{k:"e",label:"Econômico"}],
   items:[["Fome e falta de moradia","s"],["Plebeus fogem das cidades para o campo","s"],["Fim da política do “pão e circo”","s"],["Insegurança da população","s"],
          ["28 imperadores em 74 anos","p"],["Imperadores assassinados por usurpadores","p"],["Províncias se rebelam","p"],["Fim das conquistas territoriais","p"],
          ["Falta de mão de obra escravizada","e"],["Queda da produção agrícola","e"],["Mercadorias mais caras","e"],["Moedas perdem valor","e"],["Soldados sem salário","e"]]}
 ]
}
];
