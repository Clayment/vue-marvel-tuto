<template>
  <div class="Hero" v-if="hero">
    <h2>{{ hero.name }}</h2>
    <div>{{ hero.description }}</div>
    <img :src="hero.thumbnail.path+'.'+hero.thumbnail.extension" :alt="hero.name"/>
  </div>
</template>

<script>
import HeroesData from "../data/heroes";

export default {
  props: ["id"],
  data: function() {
    return {
      HeroesData
    };
  },
  computed: {
    hero: function() {
      // Should use API if not already gotten
      let heroes = HeroesData.data.results;
      for (let i in heroes) {
        if (heroes.hasOwnProperty(i)) {
          if (heroes[i].id === parseInt(this.id, 10)) {
            console.log(heroes[i]);
            return heroes[i];
          }
        }
      }
      return false;
    }
  }
};
</script>
