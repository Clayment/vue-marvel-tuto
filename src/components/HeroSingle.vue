<template>
  <div class="Hero" v-if="hero">
    <h2>{{ hero.name }}</h2>
    <div>{{ hero.description }}</div>
    <img :src="hero.thumbnail.path+'.'+hero.thumbnail.extension" :alt="hero.name"/>
  </div>
</template>

<script>
import * as c from "../constants";

export default {
  props: ["id"],
  data: function() {
    return {
      hero: false
    };
  },
  created: function() {
    this.fetchData();
  },
  methods: {
    fetchData: function() {
        fetch(`${c.API_CHARACTERS}/${this.id}?apikey=${c.API_KEY}`)
        .then(response => response.json())
        .then(json => this.hero = json.data.results[0]);
    }
  }
};
</script>
