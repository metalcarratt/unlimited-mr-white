<template>
    <div>
        <h2>Tell Clues</h2>
        <p>
            Tell clues - each player give a clue to their word, starting with
            the player at the top.
        </p>
        <button @click="eliminate">Choose Who to Eliminate</button>
    </div>
</template>

<script>
import stage from '@/unlimited/mrwhite/stage.js';

export default {
    methods: {
        eliminate() {
            stage.nextStage();
        }
    }
}
</script>

<style>
p {
    text-align: left;
}
</style>