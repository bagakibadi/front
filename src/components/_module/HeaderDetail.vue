<template>
  <header class="container">
        <router-link to="/home" class="back"><img src="../../assets/img/Arrow.png" alt="">
        </router-link>
        <div class="btntambah">
            <a href="#modal" class="edit">Edit</a>
            <a href="#modal2" class="delete">Delete</a>
        </div>
    </header>
</template>

<script>
export default {
  name: 'HeaderDetail',
  props: ['cover'],
  mounted() {
    const container = document.querySelector('.container');
    container.style.backgroundImage = `url("${this.cover}")`;
  },
};
</script>

<style scoped>
.container {
    background-image: url('../../assets/img/coverdilan.jpg');
    background-position: center center;
    background-size: cover;
    width: 100vw;
    height: 454px;
    max-width: 100%;
}
.back {
    position: absolute;
    width: 30px;
    height: 30px;
    display: block;
    background: white;
    border-radius: 300px;
    padding-left: 13px;
    padding-top: 8px;
    padding-bottom: 35px;
    padding-right: 33px;
    top: 20px;
    left: 20px;
}
.edit {
    text-decoration: none;
    color: white;
    margin-right: 12px;
}
.delete {
    text-decoration: none;
    color: white;
}
.btntambah {
    position: relative;
    float: right;
    margin-top: 10px;
    margin-right: 40px;
    font-family: Airbnb Cereal App Bold;
    font-size: 30px;
}
</style>
