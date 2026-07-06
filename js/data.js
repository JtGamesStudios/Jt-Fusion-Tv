// js/data.js

const catalogData = [
    {
        title: "Em Destaque",
        items: [
            {
                id: 1,
                title: "O Fantástico Jaspion",
                description: "O herói espacial Jaspion enfrenta Satan Goss para impedir que o universo seja dominado pelas forças do mal.",
                category: "Série",
                poster: "assets/posters/jaspion.jpg",
                banner: "assets/banners/jaspion.jpg",
                video: "assets/videos/jaspion.mp4",
                duration: "22 min",
                year: 1985,
                rating: "12",
                genre: "Ação"
            },
            {
                id: 2,
                title: "Jiraiya: O Incrível Ninja",
                description: "Jiraiya protege o lendário Pako e enfrenta diversos ninjas em batalhas cheias de ação.",
                category: "Série",
                poster: "assets/posters/jiraiya.jpg",
                banner: "assets/banners/jiraiya.jpg",
                video: "assets/videos/jiraiya.mp4",
                duration: "22 min",
                year: 1988,
                rating: "10",
                genre: "Aventura"
            }
        ]
    },

    {
        title: "Animes",
        items: [
            {
                id: 3,
                title: "Naruto",
                description: "Naruto Uzumaki sonha em se tornar Hokage enquanto supera desafios e faz grandes amizades.",
                category: "Anime",
                poster: "assets/posters/naruto.jpg",
                banner: "assets/banners/naruto.jpg",
                video: "assets/videos/naruto.mp4",
                duration: "23 min",
                year: 2002,
                rating: "12",
                genre: "Ação"
            },
            {
                id: 4,
                title: "One Piece",
                description: "Monkey D. Luffy parte em busca do lendário tesouro One Piece para se tornar o Rei dos Piratas.",
                category: "Anime",
                poster: "assets/posters/onepiece.jpg",
                banner: "assets/banners/onepiece.jpg",
                video: "assets/videos/onepiece.mp4",
                duration: "24 min",
                year: 1999,
                rating: "12",
                genre: "Aventura"
            },
            {
                id: 5,
                title: "Beyblade",
                description: "Jovens Bladers disputam torneios utilizando piões personalizados em batalhas emocionantes.",
                category: "Anime",
                poster: "assets/posters/beyblade.jpg",
                banner: "assets/banners/beyblade.jpg",
                video: "assets/videos/beyblade.mp4",
                duration: "22 min",
                year: 2001,
                rating: "Livre",
                genre: "Esporte"
            },
            {
                id: 6,
                title: "Inazuma Eleven",
                description: "Mark Evans lidera o time Raimon em partidas eletrizantes para salvar o clube de futebol.",
                category: "Anime",
                poster: "assets/posters/inazuma.jpg",
                banner: "assets/banners/inazuma.jpg",
                video: "assets/videos/inazuma.mp4",
                duration: "24 min",
                year: 2008,
                rating: "Livre",
                genre: "Esporte"
            }
        ]
    },

    {
        title: "Clássicos Japoneses",
        items: [
            {
                id: 7,
                title: "O Fantástico Jaspion",
                description: "Um dos maiores clássicos do tokusatsu japonês.",
                category: "Tokusatsu",
                poster: "assets/posters/jaspion.jpg",
                banner: "assets/banners/jaspion.jpg",
                video: "assets/videos/jaspion.mp4",
                duration: "22 min",
                year: 1985,
                rating: "12",
                genre: "Ação"
            },
            {
                id: 8,
                title: "Jiraiya: O Incrível Ninja",
                description: "Aventura, ação e ninjas em uma das séries mais famosas da TV.",
                category: "Tokusatsu",
                poster: "assets/posters/jiraiya.jpg",
                banner: "assets/banners/jiraiya.jpg",
                video: "assets/videos/jiraiya.mp4",
                duration: "22 min",
                year: 1988,
                rating: "10",
                genre: "Aventura"
            }
        ]
    }
];

// Conteúdos do banner principal
const highlightItems = catalogData[0].items;
