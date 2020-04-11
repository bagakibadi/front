<template>
  <div class="tampung">
                <a href="#" class="btn-before">></a>
                <a href="#" class="btn-next">></a>
                <div class="penampung">
                    <div class="header">
                        <div class="carousel-header">
                            <div class="bungkus">
                                <img src="../../assets/img/coverdilan.jpg" alt="">
                                <div class="gradasi-header">
                                    <div class="text-header">
                                        <h2 class="judul-header">Dilan 1990</h2>
                                        <p class="pencipta-header">Pidi Baiq</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-header slide-show">
                            <div class="bungkus">
                                <img src="../../assets/img/ubur.jpg" alt="">
                                <div class="gradasi-header">
                                    <div class="text-header">
                                        <h2 class="judul-header">Ubur-ubur Lembur</h2>
                                        <p class="pencipta-header">Raditya Dika</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-header">
                            <div class="bungkus">
                                <img src="../../assets/img/laskar.jpg" alt="">
                                <div class="gradasi-header">
                                    <div class="text-header">
                                        <h2 class="judul-header">Laskar Pelangi</h2>
                                        <p class="pencipta-header">Andrea Hirata</p>
                                    </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</template>

<script>
export default {
  name: 'Carousel',
};
</script>

<style scoped>
.btn-next {
    position: absolute;
    right: 5%;
    padding-left: 15px;
    padding-bottom: 5px;
    padding-right: 15px;
    padding-top: 3px;
    border-radius: 100px;
    background: white;
    text-decoration: none;
    color: black;
    font-size: 30px;
    font-weight: bold;
    z-index: 2;
}
.btn-before {
    position: absolute;
    left: 5%;
    padding-left: 15px;
    padding-bottom: 5px;
    padding-right: 15px;
    padding-top: 3px;
    border-radius: 100px;
    background: white;
    text-decoration: none;
    color: black;
    font-size: 30px;
    font-weight: bold;
    z-index: 2;
}
.tampung {
    position: relative;
    width: 100%;
    height: 370px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}
.penampung {
    position: relative;
    width: 400px;
    height: 230px;
    margin-top: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.header {
    position: absolute;
    background: white;
    left: -450px;
    display: flex;
}
.carousel-header {
    position: relative;
    height: 200px;
    padding-right: 50px;
}
.slide-show {
    transform: scale(1.1);
}
.bungkus {
    position: relative;
    height: 100%;
    border-radius: 15px;
    width: 400px;
    overflow: hidden;
}
.carousel-header img {
    overflow: hidden;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
    width: 400px;
    height: 100%;
    object-fit: cover;
    background-position: center center;
}
.gradasi-header {
    position: absolute;
    color: white;
    width: 100%;
    height: 50%;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 0px 0px 15px 15px;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.text-header {
    margin-left: 35px;
    font-family: Airbnb Cereal App;
}
.judul-header {
    font-size: 30px;
    font-family: Airbnb Cereal App;
}
.pencipta-header {
    font-size: 17px;
    margin-top: -20px;
}
</style>
