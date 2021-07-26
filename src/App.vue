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

@media (max-width: 400px) {
  #app {
    width: 100%;
  }
}

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #f2f9fc;
  color: #5e6869;
  margin: 0;
  padding: 0;
}

h1 {
    border-bottom: 1px solid #146467;
    padding-bottom: 4px;
    background-color: white;
    margin-top: 0;
    padding-top: 12px;
    margin-bottom: 0;
}

button {
  width: 100%;
  font-size: 20px;
  height: 50px;
  border: 1px solid #8ac7cd;
  border-radius: 0;
  background-color: #bdfcff;
  margin-bottom: 4px;
  margin-top: 24px;
}

button:hover {
  background-color: #a3dddf;
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
