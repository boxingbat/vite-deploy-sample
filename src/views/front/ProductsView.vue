<template>
  <div>
    <div class="container">
      <div class="row row-cols-md-4 row-cols-1 g-4 my-md-3 my-1">
        <div class="col rounded-5" v-for="product in products" :key="product.id">
          <div class="card shadow-sm bg-body border-0 rounded overflow-hidden mb-md-3" v-if="product.unit=='all'">
            <RouterLink :to="`/product/${product.id}`" >
              <img :src="product.imageUrl" class="card-img-top img-fluid" alt="...">
            </RouterLink>
            <div class="card-body">
              <h5 class="card-title">{{ product.title }}</h5>
              <div class="d-flex">
                <p class="card-text flex-grow-1">{{ product.description }}</p>
              </div>
            </div>
            <div class="card-body border-top border-light text-center fw-bold">
              <button type="button" class="btn btn-link" @click="addToCart(product.id)">加入購物車</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 這是產品列表頁面
  <table class="table">
      <thead>
          <tr>
              <th>產品名稱</th>
              <th>產品圖片</th>
              <th></th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="product in products" :key="product.id">
          <td>{{product.title}}</td>
          <td><img :src="product.imageUrl" alt="" width="100"></td>
          <td>
              <RouterLink :to="`/product/${product.id}`" class="btn btn-outline-primary">查看細節</RouterLink>
              <button type="button" class="btn btn-primary" @click="addToCart(product.id)">加入購物車</button>
          </td>
      </tr>
      </tbody>

  </table> -->
</template>

<script>
import { RouterLink } from 'vue-router'
const { VITE_APP_PATH, VITE_APP_URL } = import.meta.env
export default {
  data () {
    return {
      products: [],
      items: [
        {
          id: 1,
          title: '雙人沙發',
          imageUrl:
          'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          price: 10000,
          description: '柔軟舒適的兩人座沙發，提供您和摯愛共享放鬆時光的絕佳選擇，創造浪漫與幸福。'
        },
        {
          id: 2,
          title: '三人座沙發',
          imageUrl:
          'https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          price: 20000,
          description: '舒適寬敞的三人座沙發，讓您和家人一起共享放鬆的時光，創造歡樂與溫馨。'
        },
        {
          id: 3,
          title: '單人椅沙發',
          imageUrl:
          'https://images.unsplash.com/photo-1519643225200-94e79e383724?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80',
          price: 5000,
          description: '簡約時尚的單人椅沙發，為您打造個人休閒空間，享受獨處的美好時光。'

        },
        {
          id: 4,
          title: 'L型沙發',
          imageUrl:
          'https://images.unsplash.com/photo-1582582494705-f8ce0b0c24f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
          price: 25000,
          description: '舒適休閒的 L 型沙發，為您提供全身支撐和放鬆的極致體驗，讓您身心舒暢。'
        }
      ]
    }
  },
  components: {
    RouterLink
  },
  methods: {
    getProducts () {
      this.$http.get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/products`)
        .then((res) => {
          this.products = res.data.products
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
    this.getProducts()
  }
}
</script>

<style lang="scss" scoped>
.card-img-top {
  height: 200px;
  transform:scale(1,1);transition: all 0.35s ease-out;
  &:hover{transform:scale(1.1,1.1);}
}

</style>
