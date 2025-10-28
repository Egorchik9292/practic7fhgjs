document.addEventListener('DOMContentLoaded', function() {
    const actionButton = document.getElementById('actionButton');
    const heroSection = document.querySelector('.hero');
    
    actionButton.addEventListener('click', function() {
        let message = document.createElement('div');
        message.textContent = 'Отлично! JavaScript работает правильно!';
        message.style.cssText = `
            background-color: #10b981;
            color: white;
            padding: 1rem;
            border-radius: 4px;
            margin-top: 1rem;
            text-align: center;
            animation: fadeIn 0.5s;
        `;
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(-10px); }
                to { opacity: 1; transform: translateY(0); }
            }
        `;
        document.head.appendChild(style);
        
        const existingMessage = heroSection.querySelector('div');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        actionButton.after(message);
        
        actionButton.style.backgroundColor = '#10b981';
        

        setTimeout(() => {
            actionButton.style.backgroundColor = '#4f46e5';
        }, 2000);
    });

    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20,
                    behavior: 'smooth'
                });
            }
        });
    });
    
  
    const contentImage = document.querySelector('.content img');
    if (contentImage) {
        contentImage.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        contentImage.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
        
        contentImage.addEventListener('click', function() {
            alert('Изображение работает! Все ресурсы загружены корректно.');
        });
    }
    
 
    const currentYear = new Date().getFullYear();
    const yearElement = document.querySelector('footer p');
    if (yearElement) {
        yearElement.innerHTML = yearElement.innerHTML.replace('2023', currentYear);
    }
});
