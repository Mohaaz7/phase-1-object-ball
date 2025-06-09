// Step 1: gameObject function

function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1
        }
      }
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12
        }
      }
    }
  };
}

// Helper to loop through all players

function allPlayers() {
  const game = gameObject();
  return {
    ...game.home.players,
    ...game.away.players
  };
}

// Step 2: Functions

function numPointsScored(playerName) {
  const players = allPlayers();
  return players[playerName]?.points;
}

function shoeSize(playerName) {
  const players = allPlayers();
  return players[playerName]?.shoe;
}

function teamColors(teamName) {
  const game = gameObject();
  for (let key in game) {
    if (game[key].teamName === teamName) {
      return game[key].colors;
    }
  }
}

function teamNames() {
  const game = gameObject();
  return [game.home.teamName, game.away.teamName];
}

function playerNumbers(teamName) {
  const game = gameObject();
  let numbers = [];
  for (let key in game) {
    if (game[key].teamName === teamName) {
      for (let player in game[key].players) {
        numbers.push(game[key].players[player].number);
      }
    }
  }
  return numbers;
}

function playerStats(playerName) {
  const players = allPlayers();
  return players[playerName];
}

function bigShoeRebounds() {
  const players = allPlayers();
  let maxShoe = 0;
  let rebounds = 0;

  for (let player in players) {
    if (players[player].shoe > maxShoe) {
      maxShoe = players[player].shoe;
      rebounds = players[player].rebounds;
    }
  }
  return rebounds;
}

// Bonus Questions

function mostPointsScored() {
  const players = allPlayers();
  let maxPoints = 0;
  let topPlayer = "";

  for (let player in players) {
    if (players[player].points > maxPoints) {
      maxPoints = players[player].points;
      topPlayer = player;
    }
  }
  return topPlayer;
}

function winningTeam() {
  const game = gameObject();

  let homePoints = 0;
  let awayPoints = 0;

  for (let player in game.home.players) {
    homePoints += game.home.players[player].points;
  }
  for (let player in game.away.players) {
    awayPoints += game.away.players[player].points;
  }

  return homePoints > awayPoints ? game.home.teamName : game.away.teamName;
}

function playerWithLongestName() {
  const players = allPlayers();
  let longestName = "";

  for (let player in players) {
    if (player.length > longestName.length) {
      longestName = player;
    }
  }
  return longestName;
}

// Super Bonus

function doesLongNameStealATon() {
  const players = allPlayers();
  const longestNamePlayer = playerWithLongestName();

  let maxSteals = 0;
  for (let player in players) {
    if (players[player].steals > maxSteals) {
      maxSteals = players[player].steals;
    }
  }

  return players[longestNamePlayer].steals === maxSteals;
}

// Example console.logs for testing

console.log(gameObject());
console.log(numPointsScored("Ben Gordon"));
console.log(shoeSize("Jason Terry"));
console.log(teamColors("Brooklyn Nets"));
console.log(teamNames());
console.log(playerNumbers("Charlotte Hornets"));
console.log(playerStats("Alan Anderson"));
console.log(bigShoeRebounds());
console.log(mostPointsScored());
console.log(winningTeam());
console.log(playerWithLongestName());
console.log(doesLongNameStealATon());
