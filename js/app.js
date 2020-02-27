new Vue({
    el: '#games',
    data() {
        return {
            gameSearch: "",
            games: [],
            filteredGames: [],
            existe: boolean = true
        }
    },
    created() {
        axios({
            "method": "GET",
            "url": "https://rawg-video-games-database.p.rapidapi.com/games",
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
                "x-rapidapi-key": "150c21a252msh32d2b3ca53cf3f1p13878ajsn24817a2fe099"
            }
        })
            .then(response => {
                this.games = response.data.results;
            }).catch(e => {
            })
    },
    methods: {
        gamesFilter() {
            this.filteredGames = [];
            var gameSearch = this.gameSearch.trim();
            var aux = [];
            this.games.filter((el) => {
                if (el.name.toLowerCase().includes(gameSearch.toLowerCase())) {
                    aux.push(el);
                }
            });
            this.filteredGames = aux;

            if(this.filteredGames == 0){
                confirm('No hay resultados')
            }
        }
    }
});

new Vue({
    el: '#stores',
    data() {
        return {
            stores: []
        }
    },
    created() {
        axios({
            "method": "GET",
            "url": "https://rawg-video-games-database.p.rapidapi.com/stores",
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
                "x-rapidapi-key": "150c21a252msh32d2b3ca53cf3f1p13878ajsn24817a2fe099"
            }
        })
            .then(response => {
                this.stores = response.data.results;
            }).catch(e => {
                console.log(e);
            })
    }
});

new Vue({
    el: '#genres',
    data() {
        return {
            genres: []
        }
    },
    created() {
        axios({
            "method": "GET",
            "url": "https://rawg-video-games-database.p.rapidapi.com/genres",
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
                "x-rapidapi-key": "150c21a252msh32d2b3ca53cf3f1p13878ajsn24817a2fe099"
            }
        })
            .then(response => {
                this.genres = response.data.results;
            }).catch(e => {
                console.log(e);
            })
    }
});