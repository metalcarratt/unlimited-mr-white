<template>
    <div class="page">
        <h1>Unlimited Mr White</h1>
        <button @click="newGame">New Game</button>
    </div>
</template>

<script>
export default {
    methods: {
        newGame() {
            this.$router.push('/gameInit');
        }
    }
}
</script>