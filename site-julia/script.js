const button = document.getElementById('startBtn');
const hero = document.querySelector('.hero');

// Data fácil de alterar para manter o contador atualizado
const relationshipStart = '2025-08-11T00:00:00';
const songPath = 'assets/musica/amor.mp3'; // Troque por 'assets/musica/bemquerer.mp3' se preferir

const letterText = `Minha japaa,

Obrigado por todos os nossos momentos juntos amor, todas as viagens, tudo que já passamos,estamos passando e ainda vamos passar amor, nossas conquistas e por ser essa mulher incrível que você é, atenciosa,carinhosa,mandonaa(gosto muitoo amor), fofinha e muitoooo legal amorr, não me imagino como eu estaria sem você meu amor, saiba que eu amo muito a gente, a nossa intimidade, tudo que faz a gente ser o melhor casal desse mundooo amor saiba que você é a melhor namorada desse mundo inteiro e sempre vai ser o meu amorzinho e minha japinhaa.

Eu te amooo muito mais do que você pode imaginar amor ou até mesmo do que você tenha sonhado um diaa minha vidinha

Todo dia que lhe vejo amor é como se eu tivesse visto você pela a primeira vez amor é como se eu tivesse me apaixonado por você tudo de novo amor, é como se eu tivesse ganhado o melhor presente do mundo que é ter você na minha vida, é como se eu tivesse descoberto o verdadeiro significado do amor, é como se eu tivesse encontrado a minha alma gêmea, é como se eu tivesse encontrado a minha melhor amiga, é como se eu tivesse encontrado a minha companheira de vida, é como se eu tivesse encontrado a minha felicidade completa, é como se eu tivesse encontrado o meu lar e é amor eu posso dizer que eu finalmente encontrei o meu lar de onde nunca mais quero sair amor

feito pelo seu programador favoritoooo
Seu amorzinhooo.`;

const timelineItems = [
  { title: 'Nossa primeira ligação amor', description: 'foi quando a gente começou a ficar intimos amor, lembra que quase não tinha assunto amor?KKKKKKK e eu ficava puzando assunto de todos os lugares possiveiiisss amor so pra nao deixar nossa ligação em silencio amor KKKKKKKKKK' },
  { title: 'Primeira vez que saimoss amor', description: 'Dia que a gente foi pro Nagoya amor, Impossível esquecer esse dia amor taooo incrivel e especial amor' },
  { title: 'Nossa primeira viagem amor', description: 'Amor lembro como se fosse ontem a gente se arrumando na casa da tia Joana pra ir pra formatura da Lia, esse fim de semana de viagem amor foi muitooo incrivel e legall amor, VEMMM FERIASSSS !!!!!!!!' },
  { title: 'Cada riso,beijo,abraço, e muitas outras coisas que não consigo descrever aqui amor', description: 'Cada momento desse amor pra mim vale muito mais do que você pode imaginar, meu amor ter o prazer de dividir a vida com você é o maior privilegio e a melhor coisa que ja me aconteceu amor, saiba que eu vou sempre amar você, meu amorzinho, cuidar de você e proteger você amor, te juro amor eternooooo amor, TO PEGANDO AS REFF DO DJAVAN EMMM AMOR' },
  { title: 'Desculpas por tudo que ja fiz que você não tenha gostado amor..', description: 'Amor me desculpa por tudo que ja fiz que você não tenha gostado amorzinho, por todos os ciumes bestas (mas é uma coisa que eu ainda erro muito, tenho muito medo de perder você amor) é porque amor tem coisas que eu vejo amor que não entra na minha cabeça da pessoa ta fazendo isso sabe amor? KKKKKKK, todas as vezes que eu fui chato amor ou tratei você mal amor, me desculpa mesmo amor você sabe que nunca foi minha intenção ter magoado você ou deixado você triste amor, saiba que sempre vou tentar ser o melhor pra você amor e tentar ser o melhor namorado do mundo'} 
];


const codeSnippet = `const amor = {
  nome: 'Júlia',
  beleza: 'única',
  carinho: true,
  companhia: 'para sempre'
};

function paraSempre(comVoce) {
  return comVoce ? 'Pra sempree com você amor' : 'Tudo por vocêee amor';
}

console.log(paraSempre(amor.carinho));`;

const phrases = ['compilando amor...', 'carregando memórias...', 'deployando carinho...'];

button.addEventListener('click', () => {
  button.disabled = true;
  showLoadingScreen();
});

function showLoadingScreen() {
  const overlay = document.createElement('div');
  overlay.className = 'loading-overlay';
  overlay.innerHTML = `
    <div class="loading-card">
      <h2>Preparando sua surpresa</h2>
      <p>Não vale chorarrr emm amor</p>
      <div class="loading-phrase">
        <span id="loadingText">${phrases[0]}</span>
        <span class="loading-dots"></span>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
  requestAnimationFrame(() => overlay.classList.add('active'));

  let phraseIndex = 0;
  const interval = setInterval(() => {
    phraseIndex = (phraseIndex + 1) % phrases.length;
    const loadingText = document.getElementById('loadingText');
    if (loadingText) loadingText.textContent = phrases[phraseIndex];
  }, 1300);

  setTimeout(() => {
    clearInterval(interval);
    overlay.classList.remove('active');
    setTimeout(() => overlay.remove(), 500);
    revealSurprise();
  }, 4300);
}

function revealSurprise() {
  hero.classList.add('hero-hidden');

  const scene = document.createElement('main');
  scene.className = 'scene';
  scene.innerHTML = `
    <section class="hero-banner">
      <span class="line-highlight">Para o meu amor</span>
      <h2>Para minha princesaa</h2>
      <p>Amor fiz esse site so pra descontrair e lhe surpreender mais aindaa amor, pra fechar o 3 presente em amor, todos foram de coração e é claro que esse também vai serr amor</p>
    </section>
    <section class="letter-card">
      <h3>Uma carta especial</h3>
      <div class="letter-text" id="letterText"></div>
    </section>
    <section class="countdown-card">
      <h3>Desde que começamos a ser parte um do outroo amor</h3>
      <div class="countdown-grid" id="countdownGrid"></div>
    </section>
    <section class="timeline-card">
      <h3>Nosso caminho</h3>
      <div class="timeline-list" id="timelineList"></div>
    </section>
    <section class="code-card">
      <h3>Código do coração</h3>
      <pre><code>${codeSnippet}</code></pre>
    </section>
    <section class="question-card">
      <h3>Topa querer continuar dividindo a vida comigo pra sempre amor??</h3>
      <div class="question-actions">
        <button id="yesBtn">Claro que sim 💖</button>
        <button class="button-no" id="noBtn">Não</button>
      </div>
    </section>
  `;
  document.body.appendChild(scene);
  createAudioPlayer();

  initTypingEffect();
  initCountdown();
  populateTimeline();
  populateGallery();
  initNoButton();
  createDecorativeHearts();
}

function createAudioPlayer() {
  const audio = document.createElement('audio');
  audio.src = songPath;
  audio.loop = true;
  audio.autoplay = true;
  audio.volume = 0.35;
  audio.muted = false;
  audio.setAttribute('playsinline', '');
  audio.style.display = 'none';
  document.body.appendChild(audio);

  audio.addEventListener('canplaythrough', () => {
    audio.play().catch(() => {
      // O navegador pode exigir interação do usuário antes de tocar o som.
    });
  });
}

function populateGallery() {
  // Se não houver galeria visível, não precisa fazer nada.
}

function initTypingEffect() {
  const target = document.getElementById('letterText');
  if (!target) return;
  target.textContent = '';

  const cursor = document.createElement('span');
  cursor.className = 'cursor';
  target.appendChild(cursor);

  let index = 0;
  const interval = setInterval(() => {
    if (index >= letterText.length) {
      clearInterval(interval);
      return;
    }
    const char = letterText[index];
    target.insertBefore(document.createTextNode(char), cursor);
    index += 1;
  }, 40);
}

function initCountdown() {
  const container = document.getElementById('countdownGrid');
  if (!container) return;

  const labels = ['Dias', 'Horas', 'Minutos', 'Segundos'];
  labels.forEach((label, idx) => {
    const item = document.createElement('div');
    item.className = 'countdown-item';
    item.innerHTML = `<span id="countdown-${idx}">00</span><small>${label}</small>`;
    container.appendChild(item);
  });

  const update = () => {
    const now = new Date();
    const start = new Date(relationshipStart);
    const diff = Math.max(0, now - start);

    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);

    document.getElementById('countdown-0').textContent = String(days).padStart(2, '0');
    document.getElementById('countdown-1').textContent = String(hours).padStart(2, '0');
    document.getElementById('countdown-2').textContent = String(minutes).padStart(2, '0');
    document.getElementById('countdown-3').textContent = String(seconds).padStart(2, '0');
  };

  update();
  setInterval(update, 1000);
}

function populateTimeline() {
  const list = document.getElementById('timelineList');
  if (!list) return;

  timelineItems.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'timeline-item';
    card.innerHTML = `<h4>${item.title}</h4><p>${item.description}</p>`;
    list.appendChild(card);
  });
}

function initNoButton() {
  const noBtn = document.getElementById('noBtn');
  const yesBtn = document.getElementById('yesBtn');
  const parent = document.querySelector('.question-actions');

  if (!noBtn) return;

  function moveButton() {
    const parentRect = parent.getBoundingClientRect();
    const maxX = parentRect.width - noBtn.offsetWidth;
    const maxY = parentRect.height - noBtn.offsetHeight;
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
  }

  noBtn.addEventListener('mouseenter', moveButton);
  noBtn.addEventListener('touchstart', (event) => {
    event.preventDefault();
    moveButton();
  }, { passive: false });

  yesBtn.addEventListener('click', () => {
    yesBtn.textContent = 'Sim! 💍';
    yesBtn.style.transform = 'scale(1.04)';
    setTimeout(() => yesBtn.style.transform = 'scale(1)', 200);
  });
}

function createDecorativeHearts() {
  const heartCount = 12;
  for (let i = 0; i < heartCount; i += 1) {
    const heart = document.createElement('div');
    heart.className = 'heart-deco';
    const size = 10 + Math.random() * 16;
    const left = Math.random() * 100;
    const delay = Math.random() * -15;
    const duration = 10 + Math.random() * 8;
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;
    heart.style.left = `${left}vw`;
    heart.style.bottom = `${-20 - Math.random() * 20}px`;
    heart.style.animationDelay = `${delay}s`;
    heart.style.animationDuration = `${duration}s`;
    document.body.appendChild(heart);
  }
}
