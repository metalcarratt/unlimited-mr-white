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
    width: 100%;
    background-color: white;
    margin-bottom: 8px;
    margin-right: 8px;
    vertical-align: top;
    border-left: 16px solid #6ca8b7;
    padding-left: 30px;
    text-align: left;
}

/* div.hoverable:hover {
    cursor: pointer;
    margin-top: 4px;
    display: inline-block;
    box-shadow: 0px 0px 8px #000;
} */

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
    padding: 8px;
    display: inline-block;
    vertical-align: middle;
}

label {
    display: inline-block;
    font-size: 30px;
    margin-left: 20px;
    vertical-align: middle;
}
</style>