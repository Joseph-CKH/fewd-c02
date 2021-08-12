const team = {
    _players: [{
            firstName: 'Pablo',
            lastName: 'Sanchez',
            age: 11
        },
        {
            firstName: 'Chan',
            lastName: 'Joseph',
            age: 26
        },
        {
            firstName: 'Tse',
            lastName: 'Howard',
            age: 23
        },
    ],

    _games: [{
            opponent: 'Broncos',
            teamPoints: 42,
            opponentPoints: 27
        },
        {
            opponent: 'PAD',
            teamPoints: 37,
            opponentPoints: 30
        },
        {
            opponent: 'PHP',
            teamPoints: 50,
            opponentPoints: 32
        },
    ],

    get games() {
        return this._games;
    },

    get player() {
        return this._player;
    },

    addPlayer(firstName, lastName, age) {
        let player = {
            firstName: firstName,
            lastName: lastName,
            age: age
        };
        this.players.push(player);
    },

    addGame(opp, myPts, oppPts) {
        const game = {
            opponent: opp,
            teamPoints: myPts,
            opponentPoints: oppPts
        };
        this.games.push(game);
    }

}

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunn', 76);

console.log(team.players)
team.addGame('Titans', 100, 98);