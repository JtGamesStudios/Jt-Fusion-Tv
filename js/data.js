// js/data.js
//
// OBS sobre as imagens: as capas antigas do Jaspion (justwatch/mercadolivre) têm
// proteção contra hotlink e por isso não carregavam no player. Troquei essas e
// as capas dos itens novos por placeholders do Picsum (https://picsum.photos),
// que são estáveis e sempre carregam, no mesmo tamanho de poster (600x900) e
// banner (1200x600) usados no resto do catálogo. Quando você tiver as artes
// oficiais hospedadas no seu próprio CDN/GitHub, é só trocar a URL de "poster"
// e "banner" de cada item.

const catalogData = [
    {
        title: "Adicionados Recentemente",
        items: [
            {
                id: 1,
                title: "Jaspion",
                description: "Jaspion é um órfão criado no universo pelo profeta Edin. Quando a profecia galática anuncia que o demônio Satan Goss pretende conquistar todos os planetas",
                category: "Seriado",
                poster: "https://picsum.photos/seed/jaspion/600/900",
                banner: "https://picsum.photos/seed/jaspion-banner/1200/600",
                video: "https://www.w3schools.com/html/mov_bbb.mp4", // Vídeo de teste padrão do HTML5
                duration: "22 min",
                year: 1986,
                rating: "12",
                genre: "Tokusatsu"
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
            },
            {
                id: 9,
                title: "Cidade Sem Lei",
                description: "Um detetive aposentado volta à ativa para desmontar uma quadrilha que domina o submundo da cidade.",
                category: "Filmes",
                poster: "https://images.unsplash.com/photo-1509281373149-e957c6296406?q=80&w=600&auto=format&fit=crop",
                banner: "https://images.unsplash.com/photo-1509281373149-e957c6296406?q=80&w=1200&auto=format&fit=crop",
                video: "https://www.w3schools.com/html/mov_bbb.mp4",
                duration: "1h 48min",
                year: 2023,
                rating: "16",
                genre: "Policial"
            },
            {
                id: 10,
                title: "Tempestade de Fogo",
                description: "Uma equipe de resgate corre contra o tempo para salvar sobreviventes de um vulcão em erupção.",
                category: "Filmes",
                poster: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=600&auto=format&fit=crop",
                banner: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1200&auto=format&fit=crop",
                video: "https://www.w3schools.com/html/mov_bbb.mp4",
                duration: "1h 57min",
                year: 2022,
                rating: "12",
                genre: "Desastre"
            }
        ]
    },
    {
        title: "Tokusatsu Clássicos",
        items: [
            {
                id: 11,
                title: "Changeman",
                description: "Cinco jovens treinados pela Terra se transformam nos guerreiros Changeman para deter a invasão do Império Gozma.",
                category: "Seriado",
                poster: "https://picsum.photos/seed/changeman/600/900",
                banner: "https://picsum.photos/seed/changeman-banner/1200/600",
                video: "https://www.w3schools.com/html/mov_bbb.mp4",
                duration: "24 min",
                year: 1985,
                rating: "10",
                genre: "Tokusatsu"
            },
            {
                id: 12,
                title: "Flashman",
                description: "Cinco crianças raptadas e levadas a planetas distantes retornam à Terra como o esquadrão Flashman para enfrentar o Império Mess.",
                category: "Seriado",
                poster: "https://picsum.photos/seed/flashman/600/900",
                banner: "https://picsum.photos/seed/flashman-banner/1200/600",
                video: "https://www.w3schools.com/html/mov_bbb.mp4",
                duration: "24 min",
                year: 1986,
                rating: "10",
                genre: "Tokusatsu"
            },
            {
                id: 13,
                title: "Jiraiya",
                description: "Um jovem ninja recebe poderes ancestrais para se transformar em Jiraiya e proteger o mundo de uma seita amaldiçoada.",
                category: "Seriado",
                poster: "https://picsum.photos/seed/jiraiya/600/900",
                banner: "https://picsum.photos/seed/jiraiya-banner/1200/600",
                video: "https://www.w3schools.com/html/mov_bbb.mp4",
                duration: "24 min",
                year: 1988,
                rating: "12",
                genre: "Tokusatsu"
            },
            {
                id: 14,
                title: "Winspector",
                description: "Uma unidade policial especial usa robôs de resgate avançados para salvar vidas em situações extremas.",
                category: "Seriado",
                poster: "https://picsum.photos/seed/winspector/600/900",
                banner: "https://picsum.photos/seed/winspector-banner/1200/600",
                video: "https://www.w3schools.com/html/mov_bbb.mp4",
                duration: "24 min",
                year: 1990,
                rating: "10",
                genre: "Tokusatsu"
            },
            {
                id: 15,
                title: "Maskman",
                description: "Guerreiros do reino subterrâneo de Tigre se unem para impedir que o Império das Trevas conquiste a superfície.",
                category: "Seriado",
                poster: "https://picsum.photos/seed/maskman/600/900",
                banner: "https://picsum.photos/seed/maskman-banner/1200/600",
                video: "https://www.w3schools.com/html/mov_bbb.mp4",
                duration: "24 min",
                year: 1987,
                rating: "10",
                genre: "Tokusatsu"
            }
        ]
    },
    {
        title: "Animes",
        items: [
            {
                id: 16,
                title: "Dragon Ball Z",
                description: "Goku e seus aliados enfrentam ameaças cada vez mais poderosas para proteger a Terra e o universo.",
                category: "Anime",
                poster: "https://picsum.photos/seed/dragonballz/600/900",
                banner: "https://picsum.photos/seed/dragonballz-banner/1200/600",
                video: "https://www.w3schools.com/html/mov_bbb.mp4",
                duration: "24 min",
                year: 1989,
                rating: "12",
                genre: "Anime de Ação"
            },
            {
                id: 17,
                title: "Cavaleiros do Zodíaco",
                description: "Jovens guerreiros vestem armaduras sagradas para proteger a deusa Atena das forças que ameaçam a humanidade.",
                category: "Anime",
                poster: "https://picsum.photos/seed/cavaleiros-do-zodiaco/600/900",
                banner: "https://picsum.photos/seed/cavaleiros-do-zodiaco-banner/1200/600",
                video: "https://www.w3schools.com/html/mov_bbb.mp4",
                duration: "24 min",
                year: 1986,
                rating: "12",
                genre: "Anime de Ação"
            },
            {
                id: 18,
                title: "Naruto",
                description: "Um jovem ninja sonha em se tornar o líder de sua vila enquanto enfrenta o peso de uma força selada dentro dele.",
                category: "Anime",
                poster: "https://picsum.photos/seed/naruto/600/900",
                banner: "https://picsum.photos/seed/naruto-banner/1200/600",
                video: "https://www.w3schools.com/html/mov_bbb.mp4",
                duration: "23 min",
                year: 2002,
                rating: "12",
                genre: "Anime de Ação"
            },
            {
                id: 19,
                title: "Yu Yu Hakusho",
                description: "Um garoto rebelde morre e ganha uma segunda chance como detetive espiritual, investigando ameaças sobrenaturais.",
                category: "Anime",
                poster: "https://picsum.photos/seed/yuyuhakusho/600/900",
                banner: "https://picsum.photos/seed/yuyuhakusho-banner/1200/600",
                video: "https://www.w3schools.com/html/mov_bbb.mp4",
                duration: "23 min",
                year: 1992,
                rating: "14",
                genre: "Anime de Ação"
            },
            {
                id: 20,
                title: "One Piece",
                description: "Um jovem pirata de corpo elástico reúne uma tripulação para encontrar o maior tesouro dos mares e se tornar o Rei dos Piratas.",
                category: "Anime",
                poster: "https://picsum.photos/seed/onepiece/600/900",
                banner: "https://picsum.photos/seed/onepiece-banner/1200/600",
                video: "https://www.w3schools.com/html/mov_bbb.mp4",
                duration: "24 min",
                year: 1999,
                rating: "10",
                genre: "Anime de Aventura"
            }
        ]
    }
];

// O primeiro item do primeiro array é usado como destaque inicial
const highlightItems = catalogData[0].items;
