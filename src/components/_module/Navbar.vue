<template>
    <div class="navbar">
            <div class="select">
                <select class="">
                    <option value="">All Catagories</option>
                </select>
                <select class="">
                    <option value="">All Time</option>
                </select>
            </div>
            <div class="search">
                <input type="text" class="search-box" placeholder="Search book">
            </div>
            <div class="library">
                <a href="index.html"><img src="../../assets/img/buku.png" alt=""></a>
                <label for="">Library</label>
            </div>
        </div>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    height: 60px;
    background: white;
    display: flex;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    z-index: 9;
}
.select {
    display: flex;
    width: 340px;
    justify-content: center;
    align-items: center;
}
.login a {
    position: relative;
    z-index: 5;
    border: 2px solid black;
    padding: 5px 20px;
}
.select select {
    border: 1px solid #fff;
    background-color: transparent;
    width: 130px;
    height: 30px;
    z-index: 2;
    color: #424242;
    font-size: 17px;
}
.search {
    position: absolute;
    display: flex;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    z-index: 1;
}
.search input {
    font-size: 17px;
    color: #CACACA;
    font-family: Airbnb Cereal App;
    outline: none;
    width: 300px;
    height: 35px;
    padding: 5px 20px;
    border: 1px solid #CACACA;
    box-sizing: border-box;
    border-radius: 20px;
}
.library {
    position: absolute;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    right: 40px;
}
.library img {
    width: 50px;
    height: 50px;
}
</style>
