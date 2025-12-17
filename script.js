document.addEventListener('DOMContentLoaded', function() {
    const videoFrames = document.querySelectorAll('.video-frame');
    const modal = document.getElementById('videoModal');
    const closeButton = document.querySelector('.close-button');
    const modalVideoFrame = document.getElementById('modalVideoFrame');

    // Função para abrir o modal
    videoFrames.forEach(frame => {
        frame.addEventListener('click', function() {
            const videoUrl = this.getAttribute('data-video-url');
            
            // Define o src do iframe do modal com a URL do vídeo
            // O parâmetro 'autoplay=1' garante que o vídeo comece a tocar
            modalVideoFrame.src = videoUrl;
            
            // Exibe o modal
            modal.style.display = 'block';
        });
    });

    // Função para fechar o modal
    function closeModal() {
        // Pausa o vídeo ao fechar o modal, removendo o src do iframe
        modalVideoFrame.src = '';
        modal.style.display = 'none';
    }

    // Fecha o modal ao clicar no botão 'x'
    closeButton.addEventListener('click', closeModal);

    // Fecha o modal ao clicar fora dele
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
});