<template>
    <div :class="active ? 'selected' : ''">
        <img :src="player.profile" />
        <label>{{ player.name }}</label>
        <span v-if="showScore" class="showScore">Score: <span class="score">{{ player.score }}</span></span>
    </div>
</template>

<script>
export default {
    props: [ "player", "active", "showScore" ]
}
</script>

<style scoped>
div {
    display: inline-block;
    border: 1px solid black;
    width: 150px;
    background-color: white;
    margin-bottom: 8px;
    margin-right: 8px;
}

div.selected {
    border: 6px solid yellow;
}

label, span {
    color: black;
}

span.score {
    color: red;
}

span.showScore {
    font-size: 22px;
}

img {
    width: 120px;
}
</style>