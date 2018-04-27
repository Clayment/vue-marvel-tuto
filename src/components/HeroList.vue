<template>
  <ol>
    <HeroItem v-for="hero in heroes" :hero="hero" :key="hero.id"></HeroItem>
  </ol>
</template>
<script>
import HeroItem from "./HeroItem.vue";

export default {
  components: {
    HeroItem
  },
  props: ["HeroesData", "toto"],
  data: function() {
    return {
      heroes: this.HeroesData.data.results
    };
  }
};
</script>
