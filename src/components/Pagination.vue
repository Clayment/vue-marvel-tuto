<template>
  <div>
    <hr>
    <router-link v-if="previousPage" :to="'/page/'+previousPage">prev</router-link>
    &nbsp;
    <select name="" id="" v-on:change="$router.push('/page/'+selected)" v-model="selected">
      <option v-for="page in pages" :value="page" :selected="page == currentPage ? 'selected' : false">{{page}}</option>
    </select>
    &nbsp;
    <router-link v-if="nextPage" :to="'/page/'+nextPage">next</router-link>
  </div>
</template>

<script>
export default {
  data: function (){
    return {
      selected: this.currentPage,
    };
  },
  props: ["pagination"],
  computed: {
    currentPage: function () {
      return (this.pagination.offset / this.pagination.limit) + 1;
    },
    previousPage: function () {
      if (this.pagination !== {}) {
        let page = this.currentPage - 1;
        if (this.pagination.offset >= 0) {
          return page;
        }
      }
      return false;
    },
    nextPage: function () {
      if (this.pagination !== {}) {
        let page = this.currentPage + 1;
        console.log('page:'+page);
        if (this.pagination.offset <= (this.pagination.total - this.pagination.limit)) {
          return page;
        }
      }
      return false;
    },
    pages: function () {
      let lastPage = parseInt(this.pagination.total / this.pagination.limit, 10);
      console.log(lastPage);
      return [...Array(lastPage).keys()];
    }
  }
};
</script>
