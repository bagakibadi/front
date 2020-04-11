<template>
  <div class="modal-add modal-on">
    <div class="add-content">
      <div class="parent">
        <div class="detail">
          <div class="ed">Add Data</div>
          <p @click="close" class="fck">&times;</p>
        </div>
        <form>
          <div class="form-group">
            <label class="label-title" for="exampleFormControlInput1">Title</label>
            <input
              v-model="dataUser.tittle"
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="title.."
            />
          </div>
          <div class="form-group">
            <label class="label-title" for="exampleFormControlInput1">Author</label>
            <input
              v-model="dataUser.author"
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Author.."
            />
          </div>
          <div class="form-group">
            <label class="label-title" for="exampleFormControlInput1">Status</label>
            <input
              v-model="dataUser.status"
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Status.."
            />
          </div>
          <div class="form-group">
            <label class="label-title" for="exampleFormControlInput1">Id Category</label>
            <input
              v-model="dataUser.id_category"
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Id Category.."
            />
          </div>
          <div class="form-group">
            <label class="label-title" for="exampleFormControlInput1">Image Url</label>
            <input
              v-model="dataUser.image"
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Url Image.."
            />
          </div>
          <div class="form-group">
            <label class="label-desc" for="exampleFormControlTextarea1">Description</label>
            <input
              v-model="dataUser.description"
              class="form-conrol"
              id="exampleFormControlTextarea1"
              rows="3"
            />
          </div>
          <a href="#" class="btn" @click="submit">Save</a>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'ModalAdd',
  data() {
    return {
      dataUser: {
        tittle: '',
        author: '',
        status: '',
        id_category: '',
        image: '',
        description: '',
      },
    };
  },
  mounted() {},
  methods: {
    close() {
      document.querySelector('.modal-add').classList.toggle('modal-on');
    },
    submit() {
      axios.post('http://localhost:8000/book/', this.dataUser).then((res) => {
        // res.data;
        console.log(res);
      });
      document.querySelector('.modal-add').classList.toggle('modal-on');
    },
  },
};
</script>

<style scoped>
.modal-add {
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  z-index: 10;
  padding-top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}
.modal-on {
  display: none;
}
.add-content {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding: 20px;
  border: 1px solid #888888;
  width: 700px;
  height: 650px;
  border-radius: 5px;
}
.parent {
  display: flex;
  flex-direction: column;
  height: 550px;
  width: 600px;
  /* background: #fbcc38; */
}
.detail {
  display: flex;
  justify-content: space-between;
  padding: 0;
  width: 100%;
  margin-bottom: 30px;
  /* margin-left: -50px; */
}
.ed {
  height: 40px;
  width: 150px;
  color: black;
  font-size: 30px;

  font-family: "Airbnb Cereal App bold";
}
p.fck {
  /* height: 10px; */
  /* width: 30px; */
  color: red;
  font-size: 50px;
  margin: 0;
  padding: 0;
  line-height: 0;
  margin-right: -35px;
}
p.fck:hover,
p.fck:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
.label-title {
  /* margin-right: 28px; */
  font-family: "Airbnb Cereal App Bold";
  font-size: 20px;
}
.label-desc {
  /* margin-right: 7px; */
  font-family: "Airbnb Cereal App Bold";
  font-size: 20px;
}
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fbcc38;
  width: 100px;
  height: 50px;
  padding: 10px 32px;
  border-radius: 5px;
  color: white;
  text-align: center;
  margin-left: 500px;
  font-family: "Airbnb Cereal App Bold";
  font-size: 17px;
  text-decoration: none;
}
.form-group {
  display: flex;
  justify-content: space-between;
}
.form-control {
  width: 430px;
  height: 50px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.form-conrol {
  width: 430px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
