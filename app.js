new Vue({
    el: '#games',
    data() {
        return {
            gameSearch: "",
            games: []
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
            console.log(response)
        }).catch(e => {
            console.log(e);
        })
    },
    computed: {
        gamesFilter: function() {
            var gameSearch = this.gameSearch;
            return this.gamesFilter.filter(function(el) {
                return el.name.toLowerCase().indexOf(gameSearch.toLowerCase()) !== -1;
            });
        }
    }
});

new Vue ({
    el: '#stores',
    data() {
        return {
            storeSearch: "",
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
            console.log(response)
        }).catch(e => {
            console.log(e);
        })
    }
});

new Vue ({
    el: '#genres',
    data() {
        return {
            genreSearch: "",
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
            console.log(response)
        }).catch(e => {
            console.log(e);
        })
    }
});