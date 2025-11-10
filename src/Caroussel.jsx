import React, { useRef, useState, useEffect } from 'react';

const teamMembers = [
    { name: 'Marco Bento', title: 'senior chef', image: '/boyone.png' },
    { name: 'Elena Rivera', title: 'junior chef', image: '/girl.png' },
    { name: 'John Doe', title: 'junior chef', image: '/boytwo.png' },
];

const LG_BREAKPOINT = 1024; // 3 cartes à partir de 1024px
const MD_BREAKPOINT = 768;  // 2 cartes à partir de 768px
const SCROLL_INTERVAL = 3000;
const CARD_GAP = 16; // gap-4 = 16px

function Caroussel() {
    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [scrollStep, setScrollStep] = useState(0); 

    // --- 1. Calcul du ScrollStep (Distance de Défilement) ---
    useEffect(() => {
        const calculateScrollStep = () => {
            if (!scrollRef.current) return;
            const containerWidth = scrollRef.current.offsetWidth;
            
            let step;
            
            if (window.innerWidth >= LG_BREAKPOINT) {
                // LG (3 cartes) : Largeur carte = (Conteneur - 2 * Gap) / 3
                const cardCount = 3;
                const totalGapSpace = (cardCount - 1) * CARD_GAP; 
                const cardWidth = (containerWidth - totalGapSpace) / cardCount;
                step = cardWidth + CARD_GAP;
                
            } else if(window.innerWidth >= MD_BREAKPOINT){
                // MD (2 cartes) : Largeur carte = (Conteneur - 1 * Gap) / 2
                const cardCount = 2;
                const totalGapSpace = (cardCount - 1) * CARD_GAP; 
                const cardWidth = (containerWidth - totalGapSpace) / cardCount;
                step = cardWidth + CARD_GAP; 
                
            } else {
                // 🛑 SM (1 carte) : L'étape de défilement est la largeur d'une carte + le gap qui la suit.
                // Ici, la carte fait containerWidth, donc l'étape est sa largeur + le gap.
                step = containerWidth + CARD_GAP; 
            }
            setScrollStep(step);
        };

        // Utilisation d'un Timeout pour s'assurer que le DOM est stable et les largeurs correctement mesurées
        const timeoutId = setTimeout(calculateScrollStep, 50);

        window.addEventListener('resize', calculateScrollStep);
        
        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener('resize', calculateScrollStep);
        };
    }, []);

    
    // --- 2. Logique d'Auto-Défilement (Intervalle) ---
    useEffect(() => {
        const container = scrollRef.current;
        if (!container || scrollStep === 0) return; 

        const intervalId = setInterval(() => {
            const maxIndex = teamMembers.length;
            const nextIndex = (activeIndex + 1) % maxIndex;
            
            container.scrollTo({
                left: nextIndex * scrollStep, 
                behavior: 'smooth'
            });
            
            setActiveIndex(nextIndex);

        }, SCROLL_INTERVAL);

        return () => clearInterval(intervalId);
    }, [activeIndex, scrollStep]);


    // --- 3. Navigation Manuelle ---
    const scrollToCard = (index) => {
        if (scrollRef.current && scrollStep !== 0) {
            scrollRef.current.scrollTo({
                left: index * scrollStep,
                behavior: 'smooth'
            });
            setActiveIndex(index);
        }
    };

    return (
        <div className="relative">
            {/* Conteneur des Cartes : On utilise le gap-4 partout, mais on masque l'overflow */}
            <div 
                // overflow-x-hidden masque le débordement, mais permet le défilement JavaScript.
                className='flex lg:justify-center gap-4 mt-10 overflow-x-hidden'
                ref={scrollRef}
            >
                {teamMembers.map((member, index) => (
                    <div 
                        key={index}
                        // 🛑 NOUVEAU: w-full est utilisé. Sur mobile, la carte prend 100% de la largeur visible,
                        // mais le gap-4 suit, poussant les cartes suivantes.
                        className='rounded-4xl bg-[#fff8f7] relative px-4 py-10 w-full md:w-1/2 lg:w-1/4 shrink-0'
                    >
                        <img src={member.image} alt={member.name} className='mx-auto'/>
                        <img src="/Linkedin.svg" alt="LinkedIn" className='absolute bottom-5 right-5'/>
                        <div className='flex flex-col text-center mt-16'>
                            <span 
                                className={`text-2xl font-semibold my-1 transition-colors duration-300 
                                ${activeIndex === index ? 'text-black' : 'text-black/40'}`}
                            >
                                {member.name}
                            </span>
                            <span className='text-xl font-medium my-1 text-black/40 capitalize'>
                                {member.title}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Indicateurs de Navigation (Points) */}
            <div className='flex justify-center gap-4 mt-8'>
                {teamMembers.map((_, index) => (
                    <span 
                        key={index}
                        onClick={() => scrollToCard(index)}
                        className="cursor-pointer transition-colors duration-300"
                    >
                        <span 
                            className={`inline-block content-[''] w-1.5 h-1.5 rounded-full 
                            ${activeIndex === index ? 'bg-black w-4' : 'bg-gray-400 w-1.5'}
                            transition-all duration-300`}
                        ></span>
                    </span>
                ))}
            </div>
        </div>
    );
}

export default Caroussel;