<template>
    <div class="page">
        <h1>Unlimited Mr White</h1>

        <ChoosePlayers v-if="stage.isChoosePlayers()" />
        <SeeWords v-else-if="stage.isSeeWords()" />
        <TellClues v-else-if="stage.isTellClues()" />
        <End v-else-if="stage.isEnd()" />
        <RoundOver v-else-if="stage.isRoundOver()" />
    </div>
</template>

<script>
import game from '@/unlimited/mrwhite/game.js';
import stage from '@/unlimited/mrwhite/stage.js';

import ChoosePlayers from './ChoosePlayers.vue';
import SeeWords from './SeeWords.vue';
import TellClues from './TellClues.vue';
import End from './End.vue';
import RoundOver from './RoundOver.vue';

export default {
    components: { ChoosePlayers, SeeWords, TellClues, End, RoundOver },
    mounted() {
        game.startGame();
    },
    computed: {
        stage: () => stage
    }
}
</script>