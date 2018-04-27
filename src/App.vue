<template>
  <div id="app">
    <h1>Marvel Tuto</h1>
    <ul>
      <li>
        <router-link to="/">Accueil/Liste</router-link>
      </li>
      <li>
        <router-link to="/single">Single</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
