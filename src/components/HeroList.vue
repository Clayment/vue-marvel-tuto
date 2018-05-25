<template>
  <div>
    <ul>
      <HeroItem v-for="hero in heroes" :hero="hero" :key="hero.id"></HeroItem>
    </ul>
    <Pagination v-if="heroes.length > 0" :pagination="pagination"></Pagination>
  </div>
</template>
<script>
import HeroItem from "./HeroItem.vue";
import Pagination from "./Pagination.vue";
import * as c from "../constants";

export default {
  components: {
    HeroItem,
    Pagination
  },
  created: function() {
    this.fetchData();
  },
  watch: {
    '$route': 'fetchData',
  },
//  updated: function () {
//    this.fetchData();
//  },
  props: [
    'num'
  ],
  data: function() {
    return {
      heroes: [],
      pagination: {}
    };
  },
  methods: {
    fetchData: function() {
      let offset = c.PAGINATION_DEFAULT_OFFSET;
      if (typeof this.num !== 'undefined') {
        offset = (this.num - 1) * c.PAGINATION_DEFAULT_LIMIT;
      }
      console.log('offset:'+offset);
      fetch(`${c.API_CHARACTERS}?apikey=${c.API_KEY}&offset=${offset}&limit=${c.PAGINATION_DEFAULT_LIMIT}`)
      .then(response => response.json())
      .then(json => {
          this.heroes = json.data.results;
          this.pagination = {
              offset: json.data.offset,
              limit: json.data.limit,
              total: json.data.total,
              count: json.data.count,
          }
      });
    }
  }
};
</script>
