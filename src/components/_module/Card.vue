<template>
<div>
  <div class="list">
    <h3>List Book</h3>
</div>
    <div class="book">
      <div class="list-book" v-for="getAll in books.result" :key="getAll.result">
        <div class="gambar">
          <img :src="getAll.image" alt="...">
        </div>
        <h2><router-link :to="'/detail/'+getAll.id">{{getAll.title}}</router-link></h2>
        <p>{{getAll.description}}</p>
    </div>
  </div>
  </div>

</template>

<script>
import axios from 'axios';

export default {
  name: 'Card',
  data() {
    return {
      books: [],
      container: null,
    };
  },
  mounted() {
    axios.get('http://localhost:8000/api/v1/book/')
      .then((res) => {
        this.books = res.data;
      });
  },
};
</script>

<style scoped>
.list {
    height: 70px;
    background: white;
    font-size: 25px;
    padding-left: 50px;
    font-weight: bold;
}
.book {
    flex-wrap: wrap;
    height: 450px;
    margin-left: 50px;
    margin-right: 50px;
    background: white;;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}
.list-book {
    position: relative;
    margin-top: 50px;
    width: 320px;
    height: 340px;
    border-radius: 15px;
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
    background: #fff;
    display: flex;
    flex-direction: column;
}
.gambar img {
    object-fit: cover;
    border-radius: 15px 15px 0px 0px;
    width: 100%;
    height: 200px;
}
.list-book h2 a {
    display: flex;
    justify-content: center;
    font-size: 22px;
    color: #424242;
    font-weight: bolder;
}
.list-book p {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    line-height: 20px;
    margin-left: 18px;
    margin-top: 10px;
    color: #424242;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
}

</style>
