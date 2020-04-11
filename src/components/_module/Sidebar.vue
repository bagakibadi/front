<template>
<div>
  <div class="sidebar" :class="active">
    <div class="profile">
      <img :src="dataUser.result[0].photo" class="profile-img">
      <h2>{{dataUser.result[0].fullname}}</h2>
    </div>
      <ul>
        <li class="btn-sidebar"><a href="#" class="btn-sidebar1">Explorer</a></li>
        <li class="btn-sidebar"><a href="#" class="btn-sidebar1">History</a></li>
        <li class="btn-sidebar"><a data-toggle="modal"
        data-target=".bd-example-modal-lg" class="btn-sidebar1">Add Book*
          </a></li>
        <li class="btn-sidebar"><router-link to="/logout"
        class="btn-sidebar1">Log Out</router-link></li>
      </ul>
      <button v-on:click="change" class="sidebarBtn" :class="btnmove">
        <span></span>
      </button>
  </div>
  <div>
    <button type="submit" class="btn btn-primary" data-toggle="modal"
    data-target=".bd-example-modal-lg" data-whatever="@mdo">Open modal for @mdo</button>

    <div class="modal fade bd-example-modal-lg" id="exampleModal" tabindex="-1" role="dialog"
    aria-labelledby="myLargeModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Add Book</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form enctype="multipart/form-data" @submit="AddBook">
              <div class="form-group">
                <label for="title-book" class="col-form-label">Title:</label>
                <input type="text" class="form-control" id="title-book" v-model="title" >
              </div>
              <div class="form-group">
                <label for="message-text" class="col-form-label">Description:</label>
                <textarea class="form-control" id="message-text" v-model="description" ></textarea>
              </div>
              <div class="form-group">
                <label for="author-book" class="col-form-label">Author:</label>
                <input type="text" class="form-control" id="author-book" v-model="author" >
              </div>
              <div class="form-group">
                <label for="status" class="col-form-label">Status:</label>
                <input type="text" class="form-control" id="status" v-model="status" >
              </div>
              <div class="form-group">
                <label for="image-book" class="col-form-control">Image: </label>
                <input type="file" ref="file" class="form-control" id="image-book">
              </div>
              <div class="form-group">
                <label for="category-book" class="col-form-label">Category:</label>
                <select v-model="id_category"  class="custom-select">
                  <option selected>Select Category</option>
                  <option value="1">Anak-Anak</option>
                  <option value="2">Agama</option>
                  <option value="3">Pengembangan Diri</option>
                  <option value="4">Komik</option>
                  <option value="5">Novel</option>
                </select>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary"
                  data-dismiss="modal">Cancel</button>
                  <button type="submit" class="btn btn-primary">Save</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Axios from 'axios';


export default {
  name: 'Sidebar',
  data() {
    return {
      active: '',
      btnmove: '',
      dataUser: {},
      title: '',
      description: '',
      author: '',
      image: '',
      status: '',
      id_category: '',
      dataBook: {},
    };
  },
  methods: {
    AddBook(e) {
      e.preventDefault();
      const formData = new FormData();
      formData.append('title', this.title);
      formData.append('description', this.description);
      formData.append('author', this.author);
      formData.append('image', this.$refs.file.files[0]);
      formData.append('status', this.status);
      formData.append('id_category', this.id_category);
      Axios.post('http://localhost:8000/api/v1/book/', formData)
        .then((res) => {
          this.dataBook = res.data;
          console.log(this.dataBook);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    change() {
      document.querySelector('.sidebar').classList.toggle('active');
      document.querySelector('.sidebarBtn').classList.toggle('btnmove');
    },
  },

  created() {
    Axios.get(`http://localhost:8000/api/v1/user/${localStorage.idUser}`)
      .then((res) => {
        this.dataUser = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
.sidebar {
    position: fixed;
    top: 0;
    background: white;
    width: 290px;
    height: 100%;
    transform: .3s;
    left: -290px;
    z-index: 15;
    transition: .5s all;
}
ul {
    margin: 0;
    padding: 20px 0;
    margin-top: 50px;
}
ul li {
    list-style: none;
}
.btn-sidebar1 {
    padding: 10px 20px;
    color: black;
    display: block;
    text-decoration: none;
    font-size: 19px;
    font-family: Open Sans;
    font-weight: 600;
}
.sidebarBtn {
    position: absolute;
    top: 5px;
    right: -40px;
    width: 30px;
    height: 40px;
    box-sizing: border-box;
    cursor: pointer;
    background: #ffffff;
    border: none;
    outline: none;
    transition: .3s all;
}
.btnmove {
    right: 10px;
}
.sidebarBtn span {
    display: block;
    width: 20px;
    height: 3px;
    background: #262626;
    position: absolute;
    top: 24px;
    transition: .3s;
}
.sidebarBtn span:before {
    content: '';
    position: absolute;
    top: -10px;
    left: 0;
    width: 100%;
    height: 3px;
    background: #262626;
    transition: .3s;
}
.sidebarBtn span:after {
    content: '';
    position: absolute;
    top: 10px;
    left: 0;
    width: 100%;
    height: 3px;
    background: #262626;
    transition: .3s;
}
.profile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 70px;
    font-weight: bold;
    font-size: 20px;
}
.profile-img {
    width: 150px;
    height: 150px;
    border-radius: 100px;
    object-fit: cover;
}
.active {
    left: 0;
}
.modal-title {
  cursor: pointer;
}
</style>
