<template>
    <div :class="[active ? 'selected' : '', hoverable ? 'hoverable' : '', shrink ? 'shrink' : '']">
        <img :src="player.profile" />
        <label>{{ player.name }}</label>
        <span v-if="showScore" class="showScore">Score: <span class="score">{{ player.score }}</span></span>
    </div>
</template>

<script>
export default {
    props: [ "player", "active", "showScore", "hoverable", "shrink" ]
}
</script>

<style scoped>
div {
    box-sizing: border-box;
    display: inline-block;
    width: 100%;
    height: 180px;
    background-color: white;
    margin-bottom: 8px;
    margin-right: 8px;
    vertical-align: top;
    border-left: 16px solid #6ca8b7;
    padding-left: 30px;
    text-align: left;
}

div.shrink {
    width: calc(50% - 8px);
    height: 180px;
}

div.hoverable:hover {
    cursor: pointer;
}

div.selected {
    border-left: 16px solid yellow;
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
    max-width: 120px;
    max-height: 160px;
    padding: 8px;
    display: inline-block;
    vertical-align: middle;
}

div.shrink img {
    max-width: 80px;
    max-height: 100px;
}

label {
    display: inline-block;
    font-size: 30px;
    margin-left: 20px;
    vertical-align: middle;
}

div.shrink label {
    font-size: 22px;
    margin-left: 0;
    display: block;
}
</style>