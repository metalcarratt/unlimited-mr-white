<template>
    <div>
        <Profile  :player="currentPlayer" />

        <p v-if="hidden">{{ currentPlayer.name }}, tap the card below to reveal your hidden word:</p>
        <p v-else>Click 'Next player' once you've read the word and pass the device to the next player.</p>

        <Card :hidden="hidden" :word="revealedWord" @click.native="reveal" />
                
        <!-- <button @click="reveal" v-if="hidden">See Word</button> -->
        <button @click="next" v-if="!hidden">Next player</button>
    </div>
</template>

<script>
import Profile from './Profile.vue';
import players from '@/unlimited/mrwhite/players.js';
import game from '@/unlimited/mrwhite/game.js';
import Card from './Card.vue';

export default {
    components: { Profile, Card },
    data() {
        return {
            hidden: true
        }
    },
    computed: {
        currentPlayer() {
            return players.currentPlayer();
        },
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

