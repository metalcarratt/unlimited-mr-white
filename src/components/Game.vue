<template>
    <div class="page">
        <h1>Unlimited Mr White</h1>

        <SeeWords v-if="stage.isSeeWords()" />
        <TellClues v-else-if="stage.isTellClues()" />
        <Eliminate v-else-if="stage.isEliminate()" />
        <End v-else-if="stage.isEnd()" />
        <RoundOver v-else-if="stage.isRoundOver()" />
    </div>
</template>

<script>
import game from '@/unlimited/mrwhite/game.js';
import stage from '@/unlimited/mrwhite/stage.js';

import SeeWords from './SeeWords.vue';
import TellClues from './TellClues.vue';
import Eliminate from './Eliminate.vue';
import End from './End.vue';
import RoundOver from './RoundOver.vue';

export default {
    components: { SeeWords, TellClues, Eliminate, End, RoundOver },
    mounted() {
        game.startGame();
    },
    computed: {
        stage: () => stage
    }
}
</script>