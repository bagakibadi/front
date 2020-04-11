<template>
    <div class="page">
        <div class="img1">
            <h2>Book is a Window<br> to the world</h2>
            <p>Photo by Mark Pan4ratte on Unplash</p>
        </div>
        <div class="login">
            <img src="../../assets/img/buku.png" class="book">
            <form class="from" @submit.prevent="login">
                <h2 class="textlogin">Login</h2>
                <p class="wlcmtext">Welcome Back, Please Login <br> to your account</p>
                <div v-if="code === 1" class="alertdiv color-red">
                    <i class="material-icons" style="color:red">warning</i>
                    <p class="alert">{{error}}</p>
                </div>
                <div v-if="code === 2" class="alertdiv color-orange">
                    <i class="material-icons" style="color:orange">warning</i>
                    <p class="alert">{{error}}</p>
                </div>
                <div class="emaildiv">
                    <label for="email" class="labelemail">Email Address</label><br>
                    <input v-model="email" id="email" type="email" class="email">
                </div>
                <input v-model="password" type="password" id="password" class="password"><br>
                <label for="password" class="labelpassword">Password</label>
                <div class="check">
                    <input type="checkbox" class="checkbox" >
                    <label for="checkbox" class="labelcheckbox">Remember Me</label>
                    <a href="#" class="forgot">Forgot Password</a><br>
                </div>
                <div class="btn-login">
                    <button class="login-btn">Login</button>
                    <router-link to="/register" class="signup-btn">Sign up</router-link>
                </div>
                <div class="privacy">
                    <p class="policy">By signing up, you agree to Book’s<br><span class="tnghtxt">
                     Terms and Conditions
                    <span class="tengahtext"> & </span> Privacy Policy</span></p>
                </div>
            </form>
       </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      error: '',
      code: 0,
    };
  },
  methods: {
    login() {
      axios.post('http://localhost:8000/api/v1/user/login', {
        email: this.email, password: this.password,
      })
        .then((req) => {
          this.loginSucces(req);
        //   console.log(req);
        })
        .catch(() => {
          console.log('err');
        });
    },
    loginSucces(req) {
      console.log(req.token);
      if (!req.data.token) {
        this.loginFailed(req);
      } else if (req.data.result.status === 0) {
        this.code = 2;
        this.error = 'Aktivasi Email Dahulu';
      } else {
        localStorage.password = req.data.result.password;
        localStorage.idUser = req.data.result.id;
        localStorage.token = req.data.token;
        this.code = 0;
        this.$router.replace('/home');
      }
    },
    loginFailed(req) {
      this.error = req.data.err;
      this.code = 1;
    },
  },
};
</script>

<style scoped>
.page {
    display: flex;
    border: 2px;
    width: 100%;
}
.img1 {
    height: 100vh;
    width: 55%;
    background: linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)),
    url('../../assets/img/bglogin.jpg');
    background-position: center center;
    background-size: cover;
    color: white;
}
.img1 h2 {
    font-weight: 900;
    font-size: 50px;
    margin-left: 55px;
    margin-top: 88px;
    line-height: 68px;
}
.img1 p {
    font-size: 17px;
    position: absolute;
    bottom: 20px;
    left: 50px;
}
.login {
    height: 100vh;
    width: 45%;
    background: white;
}
.book {
    position: absolute;
    width: 100px;
    height: 100px;
    float: right;
    right: 5%;
    top: 11px;
}
.from{
    width: 75%;
    margin-top: 110px;
    margin-left: 100px;
}
.textlogin {
    font-weight: 900;
    color: #424242;
    font-size: 65px;
    margin: 0;
    padding: 0;
    width: 100%;
}
.wlcmtext {
    width: 100%;
    color: #424242;
    font-size: 17px;
    margin: 0;
    padding: 0;
}
.material-icons{
    position: absolute;
    margin-top: 15px;
    margin-left: 5px;
}
.alertdiv{
    background-color: #fff7f7;
    border-radius: 5px;
    font-size: 20px;
    border: 2px solid black;
    width: 100%;
    height: 60px;
}
.color-red{
    border: 2px solid #c72e2e;
}
.color-orange{
    border: 2px solid orange;
}
.alert {
    position: absolute;
    margin-left: 15px;
    /* margin-bottom: 5px; */
}
.emaildiv{
    position: relative;
    border: 1px solid #E0E0E0;
    width: 100%;
    height: 60px;
    border-radius: 5px;
}
.email{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    font-size: 15px;
    border-radius: 5px;
    outline: none;
    border: 1px solid #E0E0E0;
    padding-top: 13px;
    padding-left: 15px;
    transition: .3s;
}

.email:focus{
    border-color:dodgerBlue;
    box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.1);
}
.labelemail{
    position: absolute;
    font-size: 17px;
    color: #D0CCCC;
    top: 5px;
    left: 15px;
    z-index: 1;
}

.password {
    font-size: 15px;
    padding-top: 13px;
    padding-left: 15px;
    width: 100%;
    height: 60px;
    background:white;
    border: 1px solid #E0E0E0;
    box-sizing: border-box;
    border-radius: 5px;
    top: 0;
    margin-top: 0;
    outline: none;
    transition: .3s;
    box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.1);
}
.password:focus{
    border-color:dodgerBlue;
    box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.1);
}
.labelpassword{
    position: relative;
    font-size: 17px;
    color: #D0CCCC;
    top: -55px;
    left: 15px;
}
.labelcheckbox{
    font-size: 17px;
    color: #D0CCCC;
}
.check{
    position: relative;
    width: 100%;
}
.forgot {
    color: #424242;
    font-size: 17px;
    text-decoration: none;
    margin-left: 20%;
}
.btn-login {
    font-size: 17px;
    margin-top: 20px;
}
.login-btn {
    position: relative;
    text-decoration: none;
    width: 110px;
    height: 36px;
    background: #000000;
    border: none;
    border-radius: 5px;
    padding: 5px 28px;
    color: #ffffff;
    margin-right: 10px;
}
.signup-btn {
    position: relative;
    box-sizing: border-box;
    text-decoration: none;
    width: 500px;
    height: 50px;
    border: 2px solid #d0cccc;
    border-radius: 5px;
    padding: 5px 28px;
    color: #E0E0E0;
}
.policy {
    margin-top: 30px;
    font-size: 17px;
    line-height: 22px;
    color: #d0cccc;
    margin-bottom: 0;
}
.tnghtxt{
    color: black;
}
.tengahtext {
    color: #D0CCCC;
}


</style>
