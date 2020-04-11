<template>
  <div>
    <div class="navbar">
        <div class="btn-login">
            <router-link to="/login" class="login-btn">Login</router-link>
            <router-link to="/register" class="signup-btn">Sign up</router-link>
        </div>
        <div class="library">
            <img src="../../assets/img/buku.png" alt="">
            <label for="">Library</label>
        </div>
    </div>
    <div class="header">
        <div class="img-header">
            <div class="text-header">
                <h1>Read Without Limits</h1>
                <p>With Library, now you can get easier and faster to
                   find book with eBook online Library across all your favourite books
                </p>
                <router-link to="/register" class="signupnow">Sign Up Now</router-link>
            </div>
        </div>
    </div>
    <div class="container-interactive">
            <div class="interactive">
                <div class="total">
                    <h2>1.234+</h2>
                    <p>User Active</p>
                </div>
                <div class="total">
                    <h2>3+</h2>
                    <p>Book</p>
                </div>
                <div class="total">
                    <h2>123+</h2>
                    <p>Service</p>
                </div>
        </div>
    </div>
    <div class="testi">
        <div class="kelebihan">
            <i class="fas fa-gem"></i>
            <p>Quality</p>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Voluptatem fugit, rerum, aspernatur quaerat impedit delectus.</span>
        </div>
        <div class="kelebihan">
            <i class="fas fa-life-ring"></i>
            <p>Service</p>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Voluptatem fugit, rerum, aspernatur quaerat impedit delectus.</span>
        </div>
        <div class="kelebihan">
            <i class="fa fa-laptop"></i>
            <p>Fiture</p>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Voluptatem fugit, rerum, aspernatur quaerat impedit delectus.</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Landing',
};
</script>

<style scoped>
.navbar {
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 60px;
    background: white;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    z-index: 1;
}
.library {
    position: relative;
    width: 100vw;
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    left: 20px;
}
.library img {
    width: 50px;
}
.btn-login {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    z-index: 1;
}
.btn-login a {
    font-size: 17px;
    margin-right: 20px;
    text-decoration: none;
}
.login-btn {
    border: 2px solid black;
    color: white;
    background: black;
    border-radius: 5px;
    padding: 5px 28px;
}
.signup-btn {
    border: 2px solid #d0cccc;
    color: #e0e0e0;
    padding: 5px 20px;
    border-radius: 5px;
}
.header {
    position: relative;
    overflow: hidden;
    height: 573px;
    width: 100vw;
}
.text-header {
    overflow: hidden;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
}
.text-header h1 {
    font-size: 40px;
    width: 50%;
    display: flex;
    justify-content: center;
    text-align: center;
}
.img-header {
    position: absolute;
    background: url('../../assets/img/readhp.jpg');
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
}
.signupnow {
    text-decoration: none;
    color: white;
    background: #1e7b85;
    padding: 9px 40px;
    border-radius: 5px;
}
.text-header p {
    width: 50%;
    display: flex;
    justify-content: center;
    text-align: center;
}
.container-interactive {
    top: 0px;
    width: 100%;
    height: auto;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background: #F9f9f9;
}
.interactive {
    margin-top: -40px;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 600px;
    min-height: 90px;
    border-radius: 15px;
    background: white;
    box-shadow: 0 -3px 31px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.02);
}
.total {
    margin-top: -20px;
    padding-top: 20px;
    width: 200px;
    height: 90px;
    color: #505458;
}
.total h2 {
    text-align: center;
}
.total p {
    margin-top: -15px;
    text-align: center;
}
.testi {
    width: 100vw;
    height: auto;
    background: #f9f9f9;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
}
.kelebihan {
    width: 300px;
    height: 239px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.kelebihan i {
    font-size: 36px;
    text-align: center;
    border: 1px solid #767D8E;
    border-radius: 100px;
    padding: 20px;
}
.kelebihan p {
    text-align: center;
    font-weight: bold;
    font-size: 18px;
}
.kelebihan span {
    text-align: center;
    color: #98a6ad;
}
</style>
