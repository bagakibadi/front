<script>
export default {
  name: 'Logout',
  created() {
    delete localStorage.password;
    delete localStorage.idUser;
    this.$router.push('/login');
  },
};
</script>
