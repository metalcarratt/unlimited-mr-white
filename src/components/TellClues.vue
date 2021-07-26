<template>
    <div>
        <h2>Tell Clues</h2>
        <p>
            Each player give a clue to your word. <em>{{ currentPlayer.name }}</em>, you start.
        </p>
        <p>
            When you are ready to eliminate a player, tap their card below:
        </p>
        <div class="list">
            <Profile
                v-for="(player, pIter) of players"
                :key="pIter"
                :player="player"
                :active="selectedPlayer.name === player.name"
                :shrink="true"
                :hoverable="true"
                @click.native="select(player)"
            />
        </div>
        <button @click="eliminate" v-if="hasSelectedPlayer">Eliminate</button>
    </div>
</template>

<script>
import game from '@/unlimited/mrwhite/game.js';
import players from '@/unlimited/mrwhite/players.js';
import Profile from './Profile.vue';

export default {
    components: { Profile },
    data() {
        return {
            selectedPlayer: {}
        }
    },
    computed: {
        currentPlayer: () => players.currentPlayer(),
        players: () => players.players(),
        hasSelectedPlayer() {
            return Object.keys(this.selectedPlayer).length > 0;
        }
    },
    methods: {
        eliminate() {
            game.eliminate(this.selectedPlayer);
        },
        select(player) {
            this.selectedPlayer = player;
        }
    }
}
</script>

<style>
p {
    text-align: left;
}

em {
    font-weight: 700;
    font-style: normal;
    font-size: 22px;
    color: #4097a0;
}

</style>