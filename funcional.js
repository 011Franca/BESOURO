document.addEventListener('DOMContentLoaded', () => {
    // 1. Filtragem de Projetos
    const filterButtons = document.querySelectorAll('#filter-buttons .filter-btn');
    const projectCards = document.querySelectorAll('.projects-grid .project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filterValue === 'all' || category === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 2. Sanfona / Accordion da seção de Processo
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            item.classList.toggle('active');
        });
    });
});

// 3. Controle do Modal de Contato
const modal = document.getElementById('contact-modal');

function openModal() {
    if (modal) {
        modal.style.display = 'flex';
    }
}

function closeModal() {
    if (modal) {
        modal.style.display = 'none';
    }
}

// Fechar modal clicando fora dele
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

// Fechar modal ao pressionar a tecla ESC
window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal && modal.style.display === 'flex') {
        closeModal();
    }
});

// 4. Envio do Formulário para o WhatsApp
function handleFormSubmit(event) {
    event.preventDefault();

    // Número de WhatsApp configurado para o atendimento
    const numeroWhatsApp = "5511954411328"; 

    // Captura os valores digitados no formulário
    const nome = document.getElementById("modal-nome").value;
    const contato = document.getElementById("modal-contato").value;
    const mensagem = document.getElementById("modal-mensagem").value;

    // Monta o texto formatado para a mensagem do WhatsApp
    const textoMensagem = `Olá, vim pelo site da *Besouro®*!\n\n` +
                          `*Nome:* ${nome}\n` +
                          `*Contato:* ${contato}\n` +
                          `*Mensagem:* ${mensagem ? mensagem : "Sem mensagem adicional."}`;

    // Codifica o texto para formato de URL seguro
    const textoURLEncoded = encodeURIComponent(textoMensagem);

    // Cria o link do WhatsApp
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${textoURLEncoded}`;

    // Abre o WhatsApp em uma nova aba
    window.open(urlWhatsApp, "_blank");

    // Fecha o modal e limpa o formulário
    closeModal();
    event.target.reset();

    // Notificação flutuante de confirmação
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.innerHTML = '✨ Redirecionando para o WhatsApp...';

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}