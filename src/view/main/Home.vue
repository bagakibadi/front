<template>
  <div>
    <Sidebar/>
    <Navbar/>
    <Carousel/>
    <card/>
  </div>
</template>

<script>
import Sidebar from '../../components/_module/Sidebar.vue';
import Navbar from '../../components/_module/Navbar.vue';
import Carousel from '../../components/_module/Carousel.vue';
import Card from '../../components/_module/Card.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    Sidebar,
    Carousel,
    Card,
  },
  updated() {
    if (localStorage.password === '') {
      this.$router.push('/login');
    }
  },
};

</script>

<style scoped>

</style>
