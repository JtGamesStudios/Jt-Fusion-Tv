// js/app.js

document.addEventListener("DOMContentLoaded", () => {
    initApp();
});

// === VARIÁVEIS GLOBAIS ===
let currentHeroIndex = 0;
let heroInterval;
let allItemsFlat = []; // Facilita a pesquisa

// === INICIALIZAÇÃO ===
function initApp() {
    flattenData();
    renderCatalog(catalogData);
    initHeroRotation();
    setupHeaderScroll();
    setupSearch();
    setupPlayerControls();
}

// Achatar o array de dados para facilitar a busca
function flattenData() {
    catalogData.forEach(section => {
        section.items.forEach(item => {
            if (!allItemsFlat.find(i => i.id === item.id)) {
                allItemsFlat.push(item);
            }
        });
    });
}

// === RENDERIZAÇÃO DO CATÁLOGO ===
function renderCatalog(dataToRender) {
    const container = document.getElementById('catalogContainer');
    container.innerHTML = ''; // Limpa

    if (dataToRender.length === 0) {
        container.innerHTML = '<h3 class="section-title">Nenhum título encontrado.</h3>';
        return;
    }

    dataToRender.forEach(section => {
        if (section.items.length === 0) return;

        const sectionHtml = document.createElement('div');
        sectionHtml.classList.add('catalog-section');
        
        const title = document.createElement('h3');
        title.classList.add('section-title');
        title.textContent = section.title;

        const row = document.createElement('div');
        row.classList.add('row-container');

        section.items.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('card');
            // Usamos o banner como capa horizontal, ou poster se for mobile (via CSS é ajustável)
            card.innerHTML = `
                <img src="${item.banner}" alt="${item.title}" loading="lazy">
                <div class="card-info">
                    <h4>${item.title}</h4>
                    <span>${item.duration} | ${item.genre}</span>
                </div>
            `;
            
            // Evento de clique para abrir o video
            card.addEventListener('click', () => {
                updateHeroBanner(item); // Atualiza o fundo
                openPlayer(item.video);
            });

            row.appendChild(card);
        });

        sectionHtml.appendChild(title);
        sectionHtml.appendChild(row);
        container.appendChild(sectionHtml);
    });
}

// === LÓGICA DO BANNER (HERO) ===
function initHeroRotation() {
    if(highlightItems.length > 0) {
        updateHeroBanner(highlightItems[0]);
        
        // Rotaciona a cada 10 segundos
        heroInterval = setInterval(() => {
            currentHeroIndex = (currentHeroIndex + 1) % highlightItems.length;
            updateHeroBanner(highlightItems[currentHeroIndex]);
        }, 10000);
    }
}

function updateHeroBanner(item) {
    const hero = document.getElementById('hero');
    document.getElementById('heroTitle').textContent = item.title;
    document.getElementById('heroDesc').textContent = item.description;
    document.getElementById('heroYear').textContent = item.year;
    document.getElementById('heroRating').textContent = item.rating;
    document.getElementById('heroDuration').textContent = item.duration;
    document.getElementById('heroGenre').textContent = item.genre;
    
    hero.style.backgroundImage = `url('${item.banner}')`;

    // Atualiza o botão play do banner principal
    const btnPlay = document.getElementById('heroPlayBtn');
    btnPlay.onclick = () => openPlayer(item.video);
}

// === SISTEMA DE PESQUISA EM TEMPO REAL ===
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        
        if (query.trim() === '') {
            renderCatalog(catalogData); // Restaura original
            return;
        }

        // Filtra os itens
        const filteredData = [
            {
                title: `Resultados para "${query}"`,
                items: allItemsFlat.filter(item => 
                    item.title.toLowerCase().includes(query) || 
                    item.genre.toLowerCase().includes(query) ||
                    item.category.toLowerCase().includes(query)
                )
            }
        ];

        renderCatalog(filteredData);
    });
}

// === EFEITO DO HEADER SCROLL ===
function setupHeaderScroll() {
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// === PLAYER CUSTOMIZADO ===
const video = document.getElementById('mainVideo');
const playerModal = document.getElementById('playerModal');
const playPauseBtn = document.getElementById('playPauseBtn');
const playIcon = document.getElementById('playIcon');
const progressBar = document.getElementById('progressBar');
const progressContainer = document.getElementById('progressContainer');
const timeDisplay = document.getElementById('timeDisplay');
const volumeSlider = document.getElementById('volumeSlider');
const muteBtn = document.getElementById('muteBtn');
const volumeIcon = document.getElementById('volumeIcon');
const fullscreenBtn = document.getElementById('fullscreenBtn');

function openPlayer(videoSrc) {
    playerModal.classList.remove('hidden');
    video.src = videoSrc;
    video.play();
    playIcon.className = 'fas fa-pause';
    document.body.style.overflow = 'hidden'; // Trava o scroll do site
}

function closePlayer() {
    playerModal.classList.add('hidden');
    video.pause();
    video.src = '';
    document.body.style.overflow = 'auto'; // Retorna scroll
}

document.getElementById('closePlayer').addEventListener('click', closePlayer);

function setupPlayerControls() {
    // Play/Pause
    playPauseBtn.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            playIcon.className = 'fas fa-pause';
        } else {
            video.pause();
            playIcon.className = 'fas fa-play';
        }
    });

    // Atualiza barra e tempo
    video.addEventListener('timeupdate', () => {
        const percent = (video.currentTime / video.duration) * 100;
        progressBar.style.width = `${percent}%`;
        
        let curMins = Math.floor(video.currentTime / 60);
        let curSecs = Math.floor(video.currentTime - curMins * 60);
        let durMins = Math.floor(video.duration / 60) || 0;
        let durSecs = Math.floor(video.duration - durMins * 60) || 0;

        if (curSecs < 10) curSecs = '0' + curSecs;
        if (durSecs < 10) durSecs = '0' + durSecs;
        
        timeDisplay.textContent = `${curMins}:${curSecs} / ${durMins}:${durSecs}`;
    });

    // Clicar na barra para pular
    progressContainer.addEventListener('click', (e) => {
        const rect = progressContainer.getBoundingClientRect();
        const pos = (e.clientX - rect.left) / rect.width;
        video.currentTime = pos * video.duration;
    });

    // Volume
    volumeSlider.addEventListener('input', (e) => {
        video.volume = e.target.value;
        if (video.volume === 0) {
            volumeIcon.className = 'fas fa-volume-mute';
        } else {
            volumeIcon.className = 'fas fa-volume-up';
        }
    });

    muteBtn.addEventListener('click', () => {
        if (video.volume > 0) {
            video.volume = 0;
            volumeSlider.value = 0;
            volumeIcon.className = 'fas fa-volume-mute';
        } else {
            video.volume = 1;
            volumeSlider.value = 1;
            volumeIcon.className = 'fas fa-volume-up';
        }
    });

    // Tela Cheia
    fullscreenBtn.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            playerModal.requestFullscreen().catch(err => {
                console.log(`Erro ao tentar modo tela cheia: ${err.message}`);
            });
        } else {
            document.exitFullscreen();
        }
    });
}
