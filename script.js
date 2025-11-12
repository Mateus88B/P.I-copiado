// ---- Lógica para as Abas de Relatório ----
document.addEventListener('DOMContentLoaded', function() {
    
    // ... (mantenha o código das abas de 'Cadastro' aqui) ...

    const subTabLinks = document.querySelectorAll('.sub-tab-link');

    subTabLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Previne a navegação
            
            // Remove 'active' de todas as sub-abas
            subTabLinks.forEach(tab => tab.classList.remove('active'));

            // Adiciona 'active' na sub-aba clicada
            this.classList.add('active');

            // --- AQUI VOCÊ MUDARIA O CONTEÚDO ---
            // Em um projeto real, você esconderia/mostraria
            // os gráficos com base na aba clicada.
            console.log('Sub-Aba ' + this.innerText + ' clicada.');
        });
    });
});