// ==========================================
// 1. CONFIGURAÇÃO DO BACKGROUND DE PARTÍCULAS
// ==========================================
particlesJS("particles-js", {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#00ff88" }, 
      shape: { type: "circle" },
      opacity: { value: 0.2, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false } },
      size: { value: 3, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
      line_linked: { enable: true, distance: 150, color: "#00ff88", opacity: 0.1, width: 1 },
      move: { 
        enable: true, 
        speed: 1.5, 
        direction: "none", 
        random: true, 
        straight: false, 
        out_mode: "out", 
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: true, mode: "push" },
        resize: true
      },
      modes: {
        grab: { distance: 140, line_linked: { opacity: 0.3 } },
        push: { particles_nb: 3 }
      }
    },
    retina_detect: true
});

// ==========================================
// 2. EFEITOS DE NAVEGAÇÃO E SCROLL
// ==========================================

// Scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Ajuste da Navbar ao rolar a página
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.padding = '15px 0';
        nav.style.background = 'rgba(3, 3, 3, 0.95)';
    } else {
        nav.style.padding = '30px 0';
        nav.style.background = 'rgba(3, 3, 3, 0.7)';
    }
});

// ==========================================
// 3. LÓGICA DO MODAL DE SERVIÇOS
// ==========================================

const infoServicos = {
    cardapio: {
        titulo: "Cardápio Digital Inteligente",
        descricao: "Um sistema completo para delivery e restaurantes que elimina taxas de aplicativos e organiza seus pedidos.",
        funcionalidades: [
            "Gestão de estoque e preços via Google Sheets (simples como Excel).",
            "Recebimento de pedidos formatados direto no seu WhatsApp.",
            "Visual moderno e otimizado para celulares (Mobile First).",
            "Sem taxas por venda."
        ]
    },
    landing: {
        titulo: "Landing Pages de Alta Conversão",
        descricao: "Páginas focadas em um único objetivo: transformar visitantes em clientes reais.",
        funcionalidades: [
            "Design exclusivo e ultra-rápido (Core Web Vitals).",
            "Escrita persuasiva focada no seu público-alvo.",
            "Integração direta com botões de chamada para ação (CTAs).",
            "Otimização para anúncios no Google e Meta (Instagram/FB)."
        ]
    },
    automacao: {
        titulo: "Automações e Integrações",
        descricao: "Tecnologia para fazer o trabalho repetitivo por você, economizando horas de gestão.",
        funcionalidades: [
            "Integração entre planilhas e APIs de terceiros.",
            "Bots de atendimento inicial para filtrar clientes.",
            "Sincronização de dados em tempo real."
        ]
    }
};

function openModal(tipo) {
    const modal = document.getElementById('modal-servico');
    const body = document.getElementById('modal-body');
    const data = infoServicos[tipo];

    if (!data) return;

    body.innerHTML = `
        <h2>${data.titulo}</h2>
        <p style="color: #ccc; margin-bottom: 20px;">${data.descricao}</p>
        <ul style="margin-bottom: 30px; padding-left: 20px;">
            ${data.funcionalidades.map(f => `<li style="margin-bottom: 10px; color: #a1a1a1;">${f}</li>`).join('')}
        </ul>
        <a href="https://wa.me/5511922048764?text=Olá! Gostaria de saber mais sobre: ${data.titulo}" 
           target="_blank" 
           class="btn-modal">
           Solicitar Orçamento
        </a>
    `;

    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Trava o scroll do fundo
}

function closeModal() {
    const modal = document.getElementById('modal-servico');
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Libera o scroll
}

// Fechar modal ao clicar fora do conteúdo
window.onclick = function(event) {
    const modal = document.getElementById('modal-servico');
    if (event.target == modal) {
        closeModal();
    }
};

// Fechar com a tecla Esc
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeModal();
    }
});