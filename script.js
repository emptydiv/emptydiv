// Анимированный курсор
        const cursor = document.querySelector('.cursor');
        const cursorFollower = document.querySelector('.cursor-follower');

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            
            setTimeout(() => {
                cursorFollower.style.left = e.clientX + 'px';
                cursorFollower.style.top = e.clientY + 'px';
            }, 100);
        });

        document.addEventListener('mousedown', () => {
            cursor.style.transform = 'scale(0.5)';
            cursorFollower.style.transform = 'scale(1.5)';
        });

        document.addEventListener('mouseup', () => {
            cursor.style.transform = 'scale(1)';
            cursorFollower.style.transform = 'scale(1)';
        });

        // Интерактивный фон с частицами
        const interactiveBg = document.getElementById('interactiveBg');
        
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            const size = Math.random() * 20 + 5;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            
            particle.style.animationDelay = `${Math.random() * 20}s`;
            particle.style.animationDuration = `${Math.random() * 10 + 15}s`;
            
            particle.style.background = `hsl(${Math.random() * 360}, 70%, 60%)`;
            
            interactiveBg.appendChild(particle);
        }

        // Mobile Menu Toggle
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');
        
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Header background on scroll
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if(window.scrollY > 50) {
                header.style.backgroundColor = 'rgba(15, 15, 30, 0.98)';
                header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.backgroundColor = 'rgba(15, 15, 30, 0.95)';
                header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
            }
        });

        // Анимация при наведении на элементы
        document.querySelectorAll('.skill, .project-card, .btn, .social-link').forEach(element => {
            element.addEventListener('mouseenter', () => {
                element.style.transform = element.style.transform + ' rotate(1deg)';
            });
            
            element.addEventListener('mouseleave', () => {
                element.style.transform = element.style.transform.replace(' rotate(1deg)', '');
            });
        });

        // Параллакс эффект для фона
        window.addEventListener('mousemove', (e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            document.querySelector('.hero').style.backgroundPosition = `${x * 50}px ${y * 50}px`;
        });

        // Анимация появления элементов при скролле
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.section, .project-card, .about-text, .about-visual').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(el);
        });

        // Случайное мерцание элементов
        setInterval(() => {
            const elements = document.querySelectorAll('.skill, .tech-tag, .floating-element');
            const randomElement = elements[Math.floor(Math.random() * elements.length)];
            
            randomElement.style.animation = 'none';
            setTimeout(() => {
                randomElement.style.animation = '';
            }, 10);
        }, 1000);