<template>
    <div :class="hidden ? 'hidden' : 'revealed'">
        <span v-if="hidden">HIDDEN</span>
        <span v-else>{{ word }}</span>
    </div>
</template>

<script>
export default {
    props: [ "hidden", "word" ]
}
</script>

<style scoped>
div {
    width: 150px;
    height: 225px;
    margin: 0 auto;
    border-radius: 16px;
    box-shadow: 4px 4px 8px #999;
}

.hidden {
  /* width: 250px;
  height: 100px; */
  /* margin: 0 auto; */
  /* background-color: black; */
  /* border: 4px solid white; */
  background: rgb(2,0,36);
  background: linear-gradient(22deg, rgba(2,0,36,1) 0%, rgba(9,105,121,1) 59%, rgba(0,212,255,1) 100%);
}

.hidden span {
    color: #e4f2f2;
}

.hidden:hover {
    cursor: pointer;
}

div span {
  margin-top: 90px;
  display: inline-block;
}

.revealed {
  /* width: 250px;
  height: 100px; */
  /* margin: 0 auto; */
  background-color: white;
  /* border: 4px solid black; */
  color: black;
}


</style>