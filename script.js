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