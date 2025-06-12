// JavaScript para animações de fade-in-up (entrada de elementos no scroll)
const faders = document.querySelectorAll('.fade-in-up');

const appearOptions = {
    threshold: 0.1, // 10% do elemento visível
    rootMargin: "0px 0px -50px 0px" // Ajusta a detecção um pouco antes do elemento entrar completamente na tela
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('active');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// Funcionalidade do Side Panel do Chat
document.addEventListener('DOMContentLoaded', () => {
    const chatCtaButtons = document.querySelectorAll('.chat-cta');
    const chatSidePanel = document.getElementById('chat-side-panel');
    const closeChatBtn = document.getElementById('close-chat-btn');
    const chatOverlay = document.getElementById('chat-overlay');
    const body = document.body;

    // Função para abrir o chat
    function openChat() {
        chatSidePanel.classList.add('open');
        chatOverlay.classList.add('active');
        body.classList.add('overflow-hidden'); // Impede o scroll da página principal
    }

    // Função para fechar o chat
    function closeChat() {
        chatSidePanel.classList.remove('open');
        chatOverlay.classList.remove('active');
        body.classList.remove('overflow-hidden'); // Restaura o scroll da página principal
    }

    // Adicionar event listener para todos os CTAs
    chatCtaButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); // Evita que a página seja redirecionada
            openChat();
        });
    });

    // Adicionar event listener para o botão de fechar
    closeChatBtn.addEventListener('click', closeChat);

    // Fechar chat ao clicar no overlay
    chatOverlay.addEventListener('click', closeChat);

    // Funcionalidade do Banner Responsivo com Efeito de Rolagem (Hero Section)
    const heroBanner = document.getElementById('hero-banner');
    const header = document.querySelector('header'); // Assumindo que o header é o sticky top-0

    function handleScroll() {
        if (window.scrollY > 50) { // Ajuste este valor conforme a necessidade para o efeito de "encolhimento"
            heroBanner.classList.add('scrolled');
            // Opcional: ajustar a altura do header se ele não for fixo ou tiver variações de altura
            // header.classList.add('scrolled-header');
        } else {
            heroBanner.classList.remove('scrolled');
            // header.classList.remove('scrolled-header');
        }
    }

    // Adiciona o event listener de scroll
    window.addEventListener('scroll', handleScroll);

    // Garante que a classe 'active' para fade-in-up seja aplicada na primeira visualização
    // Isso pode ser ajustado para ser mais complexo se a primeira section começar "acima" do viewport
    const firstSectionContent = document.querySelector('.hero-content');
    if (firstSectionContent) {
        setTimeout(() => {
            firstSectionContent.classList.add('active');
        }, 100); // Pequeno atraso para garantir que a transição ocorra
    }
});