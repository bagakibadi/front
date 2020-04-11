<template>
    <page class="page">
        <div class="img1">
            <h2>Book is a Window<br> to the world</h2>
            <p>Photo by Mark Pan4ratte on Unplash</p>
        </div>
        <div class="register">
           <img src="../../assets/img/buku.png" class="book">
           <div class="from">
                <h2 class="textregister">Register</h2>
                <p class="wlcmtext">Welcome Back, Please Register <br> to create account</p>
                <div class="formregister">
                    <input v-model="email" type="email" class="username"><label for="email"
                     class="labelusername">Email</label><br>
                    <input v-model="fullname" type="fullname" class="fullname"><label for="FullName"
                     class="labelfullname">Full Name</label><br>
                    <input v-model="password" type="password" class="email"><label for="Email"
                     class="labelemail">password</label><br>
                    <!-- <input type="password" class="password"><label for="Password"
                     class="labelpassword">Password</label> -->
                </div>
                <div class="btn-login">
                    <button @click="register" class="signup-btn">Sign up</button>
                    <router-link to="/login" class="login-btn">Login</router-link>
                </div>
                <div class="privacy">
                    <p class="policy">By signing up, you agree to Book’s
                     <br><span class="tnghtxt"> Terms and Conditions
                     <span class="tengahtext"> & </span> Privacy Policy</span></p>
                </div>
            </div>
       </div>
    </page>
</template>

<script>
import Axios from 'axios';

export default {
  name: 'Register',
  data() {
    return {
      email: '',
      fullname: '',
      password: '',
    };
  },
  methods: {
    register() {
      Axios.post('http://localhost:8000/api/v1/user/', {
        email: this.email, fullname: this.fullname, password: this.password,
      })
        .then((req) => {
          console.log(req);
          this.$router.push('/login');
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
// aso
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
.register {
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
    top: 11px;;
}
.from{
    overflow: hidden;
    width: 68%;
    margin-top: 110px;
    margin-left: 100px;
}
.textregister {
    color: #424242;
    font-weight: 900;
    font-size: 65px;
    margin: 0;
    padding: 0;
}
.wlcmtext {
    color: #424242;
    font-size: 17px;
    margin: 0;
    padding: 0;
}
.formregister {
    margin-top: 30px;
}
.username {
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
.fullname {
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
.email {
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
.formregister {
    width: 30%;
    font-size: 14px;
    color: #d0cccc;
    position: absolute;
}
.labelusername {
    position: absolute;
    top: 5px;
    left: 15px;
}
.labelfullname {
    position: absolute;
    top: 63px;
    left: 15px;
}
.labelemail {
    position: absolute;
    top: 125px;
    left: 15px;
}
.labelpassword {
    position: absolute;
    top: 183px;
    left: 15px;
}
.btn-login {
    font-size: 17px;
    margin-top: 300px;
}
.signup-btn{
    position: relative;
    box-sizing: border-box;
    text-decoration: none;
    border: none;
    background: #000000;
    border-radius: 5px;
    padding: 5px 28px;
    color: #ffffff;

}
.login-btn {
    position: relative;
    text-decoration: none;
    border: 2px solid #d0cccc;
    border-radius: 5px;
    padding: 5px 40px;
    color: #d0cccc;
    margin-left: 10px;
}
.policy {
    margin-top: 15px;
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
