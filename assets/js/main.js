Vue.createApp({
    data() {
        return {
            cards: [
                {
                    "id": 1,
                    "name": "bulbasaur",
                    "images": {
                        "game": {
                            "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
                            "back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"
                        },
                        "png": {
                            "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
                        },
                        "svg": {
                            "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                        }
                    }
                },
                {
                    "id": 2,
                    "name": "ivysaur",
                    "images": {
                        "game": {
                            "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
                            "back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png"
                        },
                        "png": {
                            "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"
                        },
                        "svg": {
                            "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg"
                        }
                    }
                },
                {
                    "id": 3,
                    "name": "venusaur",
                    "images": {
                        "game": {
                            "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
                            "back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png"
                        },
                        "png": {
                            "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png"
                        },
                        "svg": {
                            "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg"
                        }
                    }
                },
                {
                    "id": 4,
                    "name": "charmander",
                    "images": {
                        "game": {
                            "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
                            "back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png"
                        },
                        "png": {
                            "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
                        },
                        "svg": {
                            "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg"
                        }
                    }
                },
                {
                    "id": 1,
                    "name": "bulbasaur",
                    "images": {
                        "game": {
                            "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
                            "back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"
                        },
                        "png": {
                            "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
                        },
                        "svg": {
                            "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                        }
                    }
                },
                {
                    "id": 2,
                    "name": "ivysaur",
                    "images": {
                        "game": {
                            "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
                            "back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png"
                        },
                        "png": {
                            "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"
                        },
                        "svg": {
                            "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg"
                        }
                    }
                },
                {
                    "id": 3,
                    "name": "venusaur",
                    "images": {
                        "game": {
                            "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
                            "back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png"
                        },
                        "png": {
                            "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png"
                        },
                        "svg": {
                            "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg"
                        }
                    }
                },
                {
                    "id": 4,
                    "name": "charmander",
                    "images": {
                        "game": {
                            "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
                            "back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png"
                        },
                        "png": {
                            "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
                        },
                        "svg": {
                            "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg"
                        }
                    }
                },
            ].sort(() => Math.random() - 0.5),
            selectCard: [],
            saveCard: [],
            gameResult: {
                win: false,
                lost: false
            },
            gameData: {
                numberSelect: 5
            },
            isActive: false,
        };
    },

    watch: {
        'gameData.numberSelect': function (newValue) {
            if (newValue === 0) {
                this.gameResult = {
                    win: false,
                    lost: true
                },this.isActive = true
            }
        }
    },
    computed: {
        coveredCard() {
            let coveredCard = this.cards.filter(
                (card) => !this.uncoveredCard.includes(card));

            if (coveredCard.length === 0) {
                this.gameResult = {
                    win: true,
                    lost: false
                }
            }

            return coveredCard;
        },
        uncoveredCard() {
            let uncoveredCard = [...this.selectCard, ...this.saveCard];
            return uncoveredCard;
        },

    },
    methods: {
        handleSelect(card) {
            this.selectCard.push(card);
            if (this.selectCard.length === 2) {
                const [card_1, card_2] = this.selectCard;
                if (card_1.id === card_2.id) {
                    this.saveCard.push(card_1, card_2)
                } else {
                    this.gameData = {
                        numberSelect: this.gameData.numberSelect - 1
                    }
                }

                setTimeout(() => {
                    this.selectCard = [];
                }, 750)
            }
        },

        newGame() {
            this.cards = this.cards.sort(() => Math.random() - 0.5);
            this.selectCard = [];
            this.saveCard = [];
            this.gameResult = {
                win: false
            };
            this.gameData = {
                numberSelect: 5
            }
            this.isActive= false


        }
    },

}).mount("#app")
