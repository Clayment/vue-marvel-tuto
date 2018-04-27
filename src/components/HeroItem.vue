<template>
  <li>
    <router-link :to="'/single/'+hero.id">{{ hero.name }}</router-link>
  </li>
</template>

<script>
export default {
  props: ["hero"]
};
</script>
