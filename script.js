// Particle System
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 50;

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                
                const size = Math.random() * 4 + 1;
                particle.style.width = size + 'px';
                particle.style.height = size + 'px';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 6 + 's';
                particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
                
                particlesContainer.appendChild(particle);
            }
        }

        // Intersection Observer for animations
        function setupScrollAnimations() {
            const animatedElements = document.querySelectorAll('.animate-in, .animate-in-left, .animate-in-right');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });

            animatedElements.forEach(el => observer.observe(el));
        }

        // Skill progress animation
        function animateSkills() {
            const skillBars = document.querySelectorAll('.skill-progress');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const progressBar = entry.target;
                        const targetWidth = progressBar.getAttribute('data-width');
                        setTimeout(() => {
                            progressBar.style.width = targetWidth + '%';
                        }, 200);
                    }
                });
            }, { threshold: 0.5 });

            skillBars.forEach(bar => observer.observe(bar));
        }

        // Audio control
        function setupAudioControl() {
            const audioControl = document.getElementById('audio-control');
            const audioElement = document.getElementById('background-audio');
            const audioIcon = document.getElementById('audio-icon');
            let isPlaying = false;

            audioControl.addEventListener('click', () => {
                if (isPlaying) {
                    audioElement.pause();
                    audioIcon.className = 'fas fa-volume-mute';
                    isPlaying = false;
                } else {
                    audioElement.play().catch(() => {
                        console.log('Audio play prevented by browser policy');
                    });
                    audioIcon.className = 'fas fa-volume-up';
                    isPlaying = true;
                }
            });
        }

        // Form submission
        function setupContactForm() {
            const form = document.getElementById('contact-form');
            const submitBtn = form.querySelector('.submit-btn');
            
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                
                // Add loading state
                const originalText = submitBtn.innerHTML;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
                submitBtn.disabled = true;
                
                // Simulate form submission
                setTimeout(() => {
                    submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
                    submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
                    
                    setTimeout(() => {
                        submitBtn.innerHTML = originalText;
                        submitBtn.disabled = false;
                        submitBtn.style.background = '';
                        form.reset();
                    }, 2000);
                }, 1500);
            });
        }

        // Smooth scrolling for navigation links
        function setupSmoothScrolling() {
            const navLinks = document.querySelectorAll('.nav-links a, .cta-button');
            
            navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    const href = link.getAttribute('href');
                    if (href.startsWith('#')) {
                        e.preventDefault();
                        const targetId = href.substring(1);
                        const targetElement = document.getElementById(targetId);
                        
                        if (targetElement) {
                            const offsetTop = targetElement.offsetTop - 80;
                            window.scrollTo({
                                top: offsetTop,
                                behavior: 'smooth'
                            });
                        }
                    }
                });
            });
        }

        // Parallax effect for hero section
        function setupParallax() {
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const hero = document.querySelector('.hero');
                const avatar = document.querySelector('.avatar');
                
                if (hero && avatar) {
                    const rate = scrolled * -0.5;
                    hero.style.transform = `translateY(${rate}px)`;
                    avatar.style.transform = `translateY(${-50 + rate * 0.3}%)`;
                }
            });
        }

        // Navigation background on scroll
        function setupNavScroll() {
            const nav = document.querySelector('nav');
            
            window.addEventListener('scroll', () => {
                if (window.scrollY > 100) {
                    nav.style.background = 'rgba(10, 10, 10, 0.95)';
                } else {
                    nav.style.background = 'rgba(10, 10, 10, 0.8)';
                }
            });
        }

        // Add hover effects to project cards
        function setupProjectHovers() {
            const projectCards = document.querySelectorAll('.project-card');
            
            projectCards.forEach(card => {
                card.addEventListener('mouseenter', () => {
                    card.style.transform = 'translateY(-10px) scale(1.02)';
                });
                
                card.addEventListener('mouseleave', () => {
                    card.style.transform = 'translateY(0) scale(1)';
                });
            });
        }

        // Add typing effect to hero text
        function setupTypingEffect() {
            const heroText = document.querySelector('.hero p');
            const text = heroText.textContent;
            heroText.textContent = '';
            heroText.style.opacity = '1';
            
            let i = 0;
            const typeWriter = () => {
                if (i < text.length) {
                    heroText.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 50);
                }
            };
            
            setTimeout(typeWriter, 1500);
        }

        // Add glowing cursor effect
        function setupGlowCursor() {
            const cursor = document.createElement('div');
            cursor.className = 'glow-cursor';
            cursor.style.cssText = `
                position: fixed;
                width: 20px;
                height: 20px;
                background: radial-gradient(circle, rgba(139, 92, 246, 0.8), transparent);
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                mix-blend-mode: difference;
                transition: transform 0.1s ease;
            `;
            document.body.appendChild(cursor);
            
            document.addEventListener('mousemove', (e) => {
                cursor.style.left = (e.clientX - 10) + 'px';
                cursor.style.top = (e.clientY - 10) + 'px';
            });
            
            document.addEventListener('mousedown', () => {
                cursor.style.transform = 'scale(1.5)';
            });
            
            document.addEventListener('mouseup', () => {
                cursor.style.transform = 'scale(1)';
            });
        }

        // Initialize all functions
        document.addEventListener('DOMContentLoaded', () => {
            createParticles();
            setupScrollAnimations();
            animateSkills();
            setupAudioControl();
            setupContactForm();
            setupSmoothScrolling();
            setupParallax();
            setupNavScroll();
            setupProjectHovers();
            setupTypingEffect();
            setupGlowCursor();
        });

        // Add some extra interactive elements
        document.addEventListener('click', (e) => {
            // Create click ripple effect
            const ripple = document.createElement('div');
            ripple.style.cssText = `
                position: fixed;
                width: 10px;
                height: 10px;
                background: rgba(139, 92, 246, 0.6);
                border-radius: 50%;
                pointer-events: none;
                z-index: 9998;
                animation: ripple 0.6s ease-out forwards;
            `;
            
            const style = document.createElement('style');
            style.textContent = `
                @keyframes ripple {
                    to {
                        transform: scale(20);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
            
            ripple.style.left = (e.clientX - 5) + 'px';
            ripple.style.top = (e.clientY - 5) + 'px';
            document.body.appendChild(ripple);
            
            setTimeout(() => {
                document.body.removeChild(ripple);
            }, 600);
        });

        // Add keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey || e.metaKey) {
                switch(e.key) {
                    case '1':
                        e.preventDefault();
                        document.getElementById('hero').scrollIntoView({ behavior: 'smooth' });
                        break;
                    case '2':
                        e.preventDefault();
                        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
                        break;
                    case '3':
                        e.preventDefault();
                        document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
                        break;
                    case '4':
                        e.preventDefault();
                        document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
                        break;
                    case '5':
                        e.preventDefault();
                        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                        break;
                }
            }
        });
    
