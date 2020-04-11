<template>
<div>
  <img :src="book.image" class="imgdilan">
  <div class="container2">
    <button type="button" class="button-novel">{{book.category}}</button>
    <div v-if="book.status === 1">
      <p class="available">Available</p>
    </div>
    <div v-else>
      <p>Unavalaibe</p>
    </div>
    <h2 class="judul">{{book.title}}</h2>
    <p class="tanggal">{{book.author}}</p>
    <p class="text">{{book.description}}</p>
  </div>
  <div class="button">
    <button class="btnborrow">Borrow</button>
  </div>
</div>
</template>

<script>

export default {
  name: 'ContentDetail',
  props: ['book'],
};
</script>

<style scoped>
.container2 {
    margin: 20px 100px;
    width: 50vw;
}
.imgdilan {
    width: 200px;
    height: 290px;
    float: right;
    margin-top: -200px;
    margin-right: 90px;
    border-radius: 15px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
}
.button-novel {
    background: #FBCC38;
    border-radius: 15px;
    border: none;
    width: 130px;
    height: 30px;
    outline: none;
}
.available {
    color: lightgreen;
    float: right;
    font-size: 30px;
}
.judul {
    font-size: 50px;
    margin-top: 5px;
    font-weight: bolder;
}
.tanggal {
    font-size: 17px;
    font-weight: bold;
}
.text {
    font-size: 17px;
    line-height: 26px;
    margin-bottom: 100px;
}
.btnborrow {
    font-size: 20px;
    color: white;
    position: relative;
    background: #FBCC38;
    width: 200px;
    height: 60px;
    border: none;
    border-radius: 15px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    outline: none;
    margin-left: 6%;
    margin-bottom: 100px;
}
</style>
