<template>
    <div :class="[active ? 'selected' : '', hoverable ? 'hoverable' : '']">
        <img :src="player.profile" />
        <label>{{ player.name }}</label>
        <span v-if="showScore" class="showScore">Score: <span class="score">{{ player.score }}</span></span>
    </div>
</template>

<script>
export default {
    props: [ "player", "active", "showScore", "hoverable" ]
}
</script>

<style scoped>
div {
    box-sizing: border-box;
    display: inline-block;
    border: 1px solid black;
    width: 150px;
    background-color: white;
    margin-bottom: 8px;
    margin-right: 8px;
    padding-top: 8px;
    height: 250px;
    vertical-align: top;
    border-radius: 8px;
    box-shadow: 4px 4px 8px #000;
}

div.hoverable:hover {
    cursor: pointer;
    margin-top: 4px;
    display: inline-block;
    box-shadow: 0px 0px 8px #000;
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