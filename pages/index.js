/**
 * ATITUDE TEENS - Script Principal
 * Adiciona interatividade e efeitos dinâmicos à página
 */

// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // EFEITO DE PARALLAX NOS ÍCONES DO CABEÇALHO
    // ============================================
    const iconGroup = document.querySelector('.icon-group');
    
    if (iconGroup) {
        document.addEventListener('mousemove', function(e) {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;
            
            // Move os ícones sutilmente com base na posição do mouse
            const moveX = (mouseX - 0.5) * 20;
            const moveY = (mouseY - 0.5) * 20;
            
            iconGroup.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    }
    
    // ============================================
    // ANIMAÇÃO DE CONTAGEM DE LOADING (OPCIONAL)
    // ============================================
    const constructionBadge = document.querySelector('.construction-badge span');
    
    // Adiciona efeito de brilho ao passar o mouse
    if (constructionBadge) {
        constructionBadge.parentElement.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        constructionBadge.parentElement.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
    
    // ============================================
    // EFEITO DE REVEAL AO SCROLL
    // ============================================
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observa elementos que devem aparecer ao rolar
    const revealElements = document.querySelectorAll('.value-item');
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // ============================================
    // ADICIONA EFEITO DE RIPPLE AOS BOTÕES
    // ============================================
    function createRipple(event) {
        const button = event.currentTarget;
        const circle = document.createElement('span');
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;
        
        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
        circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
        circle.classList.add('ripple');
        
        const ripple = button.getElementsByClassName('ripple')[0];
        if (ripple) {
            ripple.remove();
        }
        
        button.appendChild(circle);
    }
    
    // Adiciona estilo do ripple dinamicamente
    const style = document.createElement('style');
    style.textContent = `
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // ============================================
    // MENSAGEM DE BOAS-VINDAS NO CONSOLE
    // ============================================
    console.log('%c🙏 Atitude Teens ', 'font-size: 20px; font-weight: bold; color: #6B5FED;');
    console.log('%cSeja bem-vindo(a)! Em breve, teremos novidades incríveis! ✨', 'font-size: 14px; color: #FF8C94;');
    
    // ============================================
    // EFEITO DE DIGITAÇÃO NO SUBTÍTULO (OPCIONAL)
    // ============================================
    const subtitle = document.querySelector('.subtitle');
    if (subtitle && window.innerWidth > 768) {
        const originalText = subtitle.textContent;
        subtitle.textContent = '';
        subtitle.style.opacity = '1';
        
        let index = 0;
        function typeWriter() {
            if (index < originalText.length) {
                subtitle.textContent += originalText.charAt(index);
                index++;
                setTimeout(typeWriter, 50);
            }
        }
        
        // Inicia a animação após 1 segundo
        setTimeout(typeWriter, 1000);
    }
    
    // ============================================
    // ADICIONA CLASSE QUANDO A PÁGINA É ROLADA
    // ============================================
    let lastScroll = 0;
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            document.body.classList.add('scrolled');
        } else {
            document.body.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    // ============================================
    // EFEITO DE PARTÍCULAS DE FÉ (OPCIONAL)
    // ============================================
    function createFloatingEmoji() {
        const emojis = ['✨', '🙏', '💫', '⭐', '💛'];
        const emoji = document.createElement('div');
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.position = 'fixed';
        emoji.style.left = Math.random() * 100 + 'vw';
        emoji.style.bottom = '-50px';
        emoji.style.fontSize = '2rem';
        emoji.style.opacity = '0.6';
        emoji.style.pointerEvents = 'none';
        emoji.style.zIndex = '0';
        emoji.style.transition = 'all 4s linear';
        
        document.body.appendChild(emoji);
        
        setTimeout(() => {
            emoji.style.bottom = '110vh';
            emoji.style.opacity = '0';
        }, 100);
        
        setTimeout(() => {
            emoji.remove();
        }, 4100);
    }
    
    // Cria emojis flutuantes a cada 5 segundos
    setInterval(createFloatingEmoji, 5000);
    
    console.log('%c✅ Script carregado com sucesso!', 'color: #7CD1B8; font-weight: bold;');
});