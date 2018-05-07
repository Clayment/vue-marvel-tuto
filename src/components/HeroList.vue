<template>
  <ol>
    <HeroItem v-for="hero in heroes" :hero="hero" :key="hero.id"></HeroItem>
  </ol>
</template>
<script>
import HeroItem from "./HeroItem.vue";
import * as c from "../constants";

export default {
  components: {
    HeroItem
  },
  created: function() {
    this.fetchData();
  },
  props: [],
  data: function() {
    return {
      heroes: []
    };
  },
  methods: {
    fetchData: function() {
        fetch(`${c.API_CHARACTERS}?apikey=${c.API_KEY}&offset=${c.PAGINATION_DEFAULT_OFFSET}&limit=${c.PAGINATION_DEFAULT_LIMIT}`)
        .then(response => response.json())
        .then(json => this.heroes = json.data.results);
    }
  }
};
</script>
