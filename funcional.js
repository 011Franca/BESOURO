document.addEventListener('DOMContentLoaded', () => {
    // 1. Filtragem de Projetos
    const filterButtons = document.querySelectorAll('#filter-buttons .filter-btn');
    const projectCards = document.querySelectorAll('.projects-grid .project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove a classe ativa de todos os botões
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Adiciona a classe ativa ao botão clicado
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
});

// 2. Controle do Modal de Contato
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

// 3. Simulação de Envio do Formulário
function handleFormSubmit(event) {
    event.preventDefault();
    closeModal();

    // Cria notificação flutuante de sucesso
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.innerHTML = '✨ Mensagem enviada com sucesso! Em breve entraremos em contato.';
    
    // Estilos inline rápidos para a notificação
    toast.style.position = 'fixed';
    toast.style.bottom = '24px';
    toast.style.right = '24px';
    toast.style.backgroundColor = '#bcf868';
    toast.style.color = '#0c0c0c';
    toast.style.padding = '16px 24px';
    toast.style.borderRadius = '14px';
    toast.style.fontWeight = '600';
    toast.style.boxShadow = '0 10px 25px rgba(0,0,0,0.5)';
    toast.style.zIndex = '3000';
    toast.style.transition = 'opacity 0.3s';

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}