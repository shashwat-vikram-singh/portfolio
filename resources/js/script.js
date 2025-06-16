
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#080b6c',
                        secondary: '#89c5fd',
                        accent: '#ff6b6b',
                    },
                    fontFamily: {
                        poppins: ['Poppins', 'sans-serif'],
                    },
                    animation: {
                        'float': 'float 3s ease-in-out infinite',
                        'pulse-slow': 'pulse 5s infinite',
                        'wave': 'wave 2s linear infinite',
                        'fade-in': 'fadeIn 1s ease-in',
                        'slide-up': 'slideUp 0.8s ease-out',
                        'bounce-slow': 'bounce 3s infinite',
                        'spin-slow': 'spin 6s linear infinite',
                        'tilt': 'tilt 10s infinite linear',
                    },
                    keyframes: {
                        float: {
                            '0%, 100%': { transform: 'translateY(0)' },
                            '50%': { transform: 'translateY(-15px)' },
                        },
                        wave: {
                            '0%': { transform: 'rotate(0deg)' },
                            '10%': { transform: 'rotate(14deg)' },
                            '20%': { transform: 'rotate(-8deg)' },
                            '30%': { transform: 'rotate(14deg)' },
                            '40%': { transform: 'rotate(-4deg)' },
                            '50%': { transform: 'rotate(10deg)' },
                            '60%': { transform: 'rotate(0deg)' },
                            '100%': { transform: 'rotate(0deg)' },
                        },
                        fadeIn: {
                            '0%': { opacity: '0' },
                            '100%': { opacity: '1' },
                        },
                        slideUp: {
                            '0%': { opacity: '0', transform: 'translateY(30px)' },
                            '100%': { opacity: '1', transform: 'translateY(0)' },
                        },
                        tilt: {
                            '0%, 100%': { transform: 'rotate(-3deg)' },
                            '50%': { transform: 'rotate(3deg)' },
                        }
                    }
                }
            }
        }
    




    document.addEventListener('DOMContentLoaded', function() {
        // 1. Typed.js Animation
        new Typed('#typed-text', {
            strings: ['Frontend Developer', 'React Specialist', 'SEO Expert', 'Web Designer'],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
            showCursor: true,
            cursorChar: '|',
        });

        // 2. Particles.js Initialization
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#89c5fd"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.3,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#89c5fd",
                    "opacity": 0.2,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });

        // 3. Navbar Scroll Effects
        const navbar = document.getElementById('navbar');
        const backToTop = document.getElementById('back-to-top');
        
        function handleScroll() {
            // Navbar style changes
            if (window.scrollY > 50) {
                navbar.classList.add('py-2', 'shadow-lg');
                navbar.classList.remove('py-4');
            } else {
                navbar.classList.add('py-4');
                navbar.classList.remove('py-2', 'shadow-lg');
            }
            
            // Back to top button visibility
            backToTop.classList.toggle('opacity-0', window.scrollY <= 300);
            backToTop.classList.toggle('invisible', window.scrollY <= 300);
        }
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initialize on load

        // 4. Mobile Menu Toggle
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        menuBtn.addEventListener('click', function() {
            const isHidden = mobileMenu.classList.toggle('hidden');
            menuBtn.innerHTML = isHidden ? '<i class="fas fa-bars"></i>' : '<i class="fas fa-times"></i>';
        });

      // 5. Enhanced Smooth Scrolling for All Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        // Skip if it's a dropdown or other special link
        if (this.classList.contains('no-scroll')) return;
        
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Calculate scroll position accounting for navbar height
            const navbarHeight = navbar.offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            
            // Smooth scroll
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
            
            // Update URL without jumping
            if (history.pushState) {
                history.pushState(null, null, targetId);
            } else {
                window.location.hash = targetId;
            }
        }
    });
});
        // 6. Animation on Scroll
        function animateOnScroll() {
            document.querySelectorAll('.skill-card, .project-card, .certification-card, .animate-fade-in, .animate-slide-up').forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const triggerPoint = window.innerHeight / 1.3;
                
                if (elementTop < triggerPoint) {
                    element.classList.add('opacity-100', 'translate-y-0');
                }
            });
        }
        
        window.addEventListener('scroll', animateOnScroll);
        animateOnScroll(); // Run once on load

        // 7. Back to Top Button Click Handler
        if (backToTop) {
            backToTop.addEventListener('click', function(e) {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    });
