// js/data.js
const catalogData = [
    {
        title: "Adicionados Recentemente",
        items: [
            {
                id: 1,
                title: "The World Its Challengers: Origens",
                description: "Mergulhe na criação de um universo imenso, explorando os biomas, chefes e os bastidores do desenvolvimento deste ambicioso mundo 2D.",
                category: "Documentários",
                poster: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop", 
                banner: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop", 
                video: "https://www.w3schools.com/html/mov_bbb.mp4", // Vídeo de teste padrão do HTML5
                duration: "1h 45min",
                year: 2026,
                rating: "12",
                genre: "Making Of"
            },
            {
                id: 2,
                title: "Cyberpunk: A Queda",
                description: "Em um futuro distópico, uma corporação domina a última metrópole do planeta.",
                category: "Filmes",
                poster: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=600&auto=format&fit=crop",
                banner: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=1200&auto=format&fit=crop",
                video: "https://www.w3schools.com/html/mov_bbb.mp4",
                duration: "2h 10min",
                year: 2025,
                rating: "16",
                genre: "Ficção Científica"
            }
        ]
    },
    {
        title: "Ação e Aventura",
        items: [
            {
                id: 3,
                title: "O Resgate do Oeste",
                description: "Acompanhe um fora-da-lei em busca de redenção nas terras selvagens.",
                category: "Filmes",
                poster: "https://images.unsplash.com/photo-1443884590026-2e4d21aee71c?q=80&w=600&auto=format&fit=crop",
                banner: "https://images.unsplash.com/photo-1443884590026-2e4d21aee71c?q=80&w=1200&auto=format&fit=crop",
                video: "https://www.w3schools.com/html/mov_bbb.mp4",
                duration: "2h 30min",
                year: 2024,
                rating: "18",
                genre: "Ação"
            },
            {
                id: 4,
                title: "Velocidade Máxima",
                description: "Pilotos clandestinos se enfrentam na corrida mais perigosa do mundo.",
                category: "Filmes",
                poster: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=600&auto=format&fit=crop",
                banner: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200&auto=format&fit=crop",
                video: "https://www.w3schools.com/html/mov_bbb.mp4",
                duration: "1h 55min",
                year: 2026,
                rating: "14",
                genre: "Corrida"
            }
        ]
    }
];

// O primeiro item do primeiro array é usado como destaque inicial
const highlightItems = catalogData[0].items;
