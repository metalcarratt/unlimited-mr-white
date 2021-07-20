<template>
    <div>
        <h2>Round Over</h2>
        <p>Winner is {{ winner }}</p>
        <p>Scores:</p>
        <ul>
            <li v-for="(player, pIndex) of players" :key="pIndex">{{ player.name }} : {{ player.score }}</li>
        </ul>
        <button @click="playAgain">Play again</button>
    </div>
</template>

<script>
import game from '@/unlimited/mrwhite/game.js';
import players from '@/unlimited/mrwhite/players.js';

export default {
    computed: {
        winner: () => game.winner(),
        players: () => players.allPlayers() 
    },
    methods: {
        playAgain() {
            game.playAgain();
        }
    }
}
</script>