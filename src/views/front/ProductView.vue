<template>
  <div>
    <div class="container">
      <div class="row py-md-5 py-3">
        <div class="col-md-8">
          <div class="card p-md-3">
            <div class="card-body mb-md-3 mb-1">
              <h5 class="card-title">{{ product.title }}</h5>
              <div class="pe-3 mb-2 pe-md-5 mb-md-3">
                <small class="text-primary">產品描述</small>
                <p class="card-text">{{ product.content }}</p>
                <small class="text-primary">詳細資訊</small>
                <p class="card-text">{{ product.description }}</p>
              </div>
              <div @click="addToCart(product.id)" class="btn btn-primary rounded-pill w-50" >加入購物車</div>
              <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
            </div>
            <img :src="product.imageUrl" class ="card-img-bottom img-fluid rounded-3" alt="">
          </div>
        </div>
        <div class="col-md-4">
          <div class="card rounded-0 border-0 mx-3 mb-3" v-for="shop in shops" :key="shop.id">
            <img :src="shop.imgUrl" class="card-img-top rounded-0" alt="...">
            <div class="card-body p-1">
              <small class="text-primary fw-bold">分店</small>
              <p class="card-text mb-0">{{ shop.name }}</p>
              <small class="text-primary fw-bold">地址</small>
              <p class="card-text">{{ shop.address }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      product: {},
      shops: [
        {
          id: '1',
          imgUrl: 'https://images.unsplash.com/photo-1632854270121-0b0d4f33c99a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
          name: '桃園樂善店',
          address: '台灣區桃園市樂善實路88號'
        },
        {
          id: '2',
          imgUrl: 'https://images.unsplash.com/photo-1587006158786-7b79525a2147?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
          name: '桃園忠正店',
          address: '台灣區桃園市忠正三路303號'
        }
      ]
    }
  },
  methods: {
    getProduct () {
      console.log(this.$route.params)
      const { id } = this.$route.params
      this.$http.get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/product/${id}`)
        .then((res) => {
          console.log(res)
          this.product = res.data.product
        })
    },
    addToCart (id) {
      const data = {
        product_id: id,
        qty: 1
      }
      this.$http.post(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart`, { data })
        .then((res) => {
          console.log('check point addToCart: ', res)
        })
    }
  },
  mounted () {
    this.getProduct()
  }
}
</script>
