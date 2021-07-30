<template>
    <div class="page">
        <h2>Choose Players</h2>
        <p>
            <span>Players: {{ players.length }}</span>
            <button class="mini" @click="removePlayer">-</button>
            <button class="mini" @click="addPlayer">+</button>    
        </p>

        <div class="list">
            <Profile
                v-for="(player, pIter) of players"
                :key="pIter"
                :player="player"
                :shrink="true"
                :hoverable="true"
                @click.native="editPlayer(player)"
            />
        </div>

        <!-- <fieldset v-for="(player, pIter) of players" :key="pIter">
            <label>Player {{ pIter + 1 }}</label>
            <input type="text" v-model="player.name" />
        </fieldset> -->
        <button @click="start">Start</button>
        <EditPlayerDetails :showPlayerEdit="showPlayerEdit" :selectedPlayer="selectedPlayer" @close="closeEditPlayer" />
    </div>
</template>

<script>
import Profile from './Profile.vue';
import players from '@/unlimited/mrwhite/players.js';
import stage from '@/unlimited/mrwhite/stage.js';
import EditPlayerDetails from './EditPlayerDetails.vue';

export default {
    components: { Profile, EditPlayerDetails },
    data() {
        return {
            showPlayerEdit: false,
            selectedPlayer: {}
        }
    },
    computed: {
        players() {
            window.console.log("getting players");
            return players.players();
        }
    },
    mounted() {
        players.addPlayer();
        players.addPlayer();
        players.addPlayer();
    },
    methods: {
        addPlayer() {
            players.addPlayer();
        },
        removePlayer() {
            players.removePlayer();
        },
        start() {
            stage.nextStage();
        },
        editPlayer(player) {
            this.showPlayerEdit = true;
            this.selectedPlayer = player;
        },
        closeEditPlayer(updatedPlayer) {
            this.showPlayerEdit = false;
            this.selectedPlayer.name = updatedPlayer.name;
        }
    }
}
</script>