<template>
    <div>
        <h2>End</h2>
        
        <template v-if="isImposter">
            <p>{{ eliminatedPlayer.name }} was the IMPOSTER</p>
            <button @click="completeElimination">Continue</button>
        </template>

        <template v-else-if="isCivilian">
            <p>{{ eliminatedPlayer.name }} was a CIVILIAN</p>
            <button @click="completeElimination">Continue</button>
        </template>

        <template v-else-if="isMrWhite">
            <p>{{ eliminatedPlayer.name }} was MR WHITE</p>
            <fieldset>
                <label>Can you guess the word?</label>
                <input type="text" v-model="mrWhitesGuess" />
            </fieldset>
            <button @click="mrWhiteDoGuess">Guess</button>
        </template>

    </div>
</template>

<script>
import data from '@/unlimited/mrwhite/data.js';
import game from '@/unlimited/mrwhite/game.js';

export default {
    data() {
        return {
            mrWhitesGuess: ''
        }
    },
    computed: {
        isImposter() {
            return this.eliminatedPlayer.role === data.IMPOSTER;
        },
        isCivilian() {
            return this.eliminatedPlayer.role === data.CIVILIAN;
        },
        isMrWhite() {
            return this.eliminatedPlayer.role === data.MR_WHITE;
        },
        eliminatedPlayer: () => game.eliminatedPlayer()
    },
    methods: {
        mrWhiteDoGuess() {
            game.mrWhiteGuess(this.mrWhitesGuess);
        },
        completeElimination() {
            game.completeElimination();
        }
    }
}
</script>