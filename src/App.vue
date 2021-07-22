<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  width: 400px;
  margin: 0 auto;
}

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #2c3e50;
  color: #ccc;
}

h1 {
  border-bottom: 4px solid #ccc;
  padding-bottom: 4px;
}

button {
  width: 100%;
  font-size: 20px;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 0;
  background-color: #bbadff;
  margin-bottom: 4px;
  margin-top: 24px;
}

button:hover {
  background-color: #8f84c4;
  cursor: pointer;
}

button.mini {
  width: 30px;
  height: 30px;
  padding: 4px;
  margin-left: 4px;
}

fieldset {
  border: none;
}

label {
  display: block;
  margin-bottom: 4px;
}

input[type="text"] {
  width: 100%;
  font-size: 20px;
  padding: 4px;
}
</style>
