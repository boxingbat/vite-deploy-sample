<template>
    登入畫面
    <form class="form-signin" @submit.prevent="login">
            <div class="form-floating mb-3">
              <input type="email" class="form-control" v-model="user.username" id="floatingInput"
                placeholder="name@example.com" required autofocus>
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
              <input type="password" class="form-control" v-model="user.password" id="floatingPassword"
                placeholder="Password" required>
              <label for="floatingPassword">Password</label>
            </div>
            <button class="btn btn-lg btn-primary w-100 mt-3" type="submit">
              登入
            </button>
          </form>
</template>

<script>
const { VITE_APP_URL } = import.meta.env
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },

  // createApp({
  //   data() {
  //     return {
  //       user: {
  //         username: '',
  //         password: '',
  //       },
  //     }
  //   },
  methods: {
    login () {
      console.log(this.user)
      const url = `${VITE_APP_URL}admin/signin`
      this.$http.post(url, this.user)
        .then((res) => {
          const { expired, token } = res.data
          console.log(expired, token)
          document.cookie = `boxingBatToken=${token}; expires=${new Date(expired)};`
          //   window.location = './products.html'
          this.$router.push('/admin/products')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  mounted () {
    console.log('mounted')

    console.log(`${VITE_APP_URL}admin/signin`)
  }

}
</script>
