<template>
<div>
  <HeaderDetail v-bind:cover="books.result[0].image"/>
  <ContentDetail v-bind:book="books.result[0]"/>
</div>
</template>

<script>
import axios from 'axios';
import HeaderDetail from '../../components/_module/HeaderDetail.vue';
import ContentDetail from '../../components/_module/ContentDetail.vue';

export default {
  name: 'Detail',
  components: {
    HeaderDetail,
    ContentDetail,
  },
  props: ['id'],
  data() {
    return {
      books: {},
    };
  },
  updated() {
    if (!localStorage.password && !localStorage.idUser && this.$route.path !== '/login') {
      this.$router.push('/login');
    }
  },
  mounted() {
    axios.get(`http://localhost:8000/api/v1/book/${this.id}`)
      .then((res) => {
        this.books = res.data;
      });
  },
};
</script>

<style scoped>

</style>
