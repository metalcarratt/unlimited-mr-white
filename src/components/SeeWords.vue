<template>
    <div>
        <h2>See Words - {{ currentPlayerName }}</h2>

        <div class="hiddenBox" v-if="hidden">
            <span>HIDDEN</span>
        </div>
        <div class="revealedBox" v-else>
            <span>{{ revealedWord }}</span>
        </div>
                
        <button @click="reveal" v-if="hidden">See Word</button>
        <button @click="next" v-else>Next player</button>
    </div>
</template>

<script>
import players from '@/unlimited/mrwhite/players.js';
import game from '@/unlimited/mrwhite/game.js';

export default {
    data() {
        return {
            hidden: true
        }
    },
    computed: {
        currentPlayerName() {
            return players.numberOfPlayers() ? players.currentPlayer().name : '';
        },
        revealedWord() {
            return game.revealedWord();
        }
    },
    methods: {
        reveal() {
            this.hidden = false;
        },
        next() {
            this.hidden = true;
            game.nextPlayer();
        }
    }
}
</script>

<style>
.hiddenBox {
  width: 100%;
  height: 50px;
  background-color: black;
  border: 4px solid white;
}

.hiddenBox span {
  margin-top: 15px;
  display: block;
}

.revealedBox {
  width: 100%;
  height: 50px;
  background-color: white;
  border: 4px solid black;
  color: black;
}

.revealedBox span {
  margin-top: 15px;
  display: block;
}
</style>