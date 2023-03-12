<template>
  <div>
    <section class="banner">
      <div
        class="container h-100 d-flex align-items-center"
      >
        <div
          class="w-50"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h2>舒適沙發，享受品質生活。</h2>
          <p>歡迎來到我們的沙發世界，這裡是屬於你的最愛舒適角落。讓我們用柔軟的沙發，陪伴你一起享受溫馨的時光。在這裡，你可以放下所有的疲憊，感受到家的溫暖和幸福。快來選擇你的夢想沙發，和家人一起創造美好回憶吧！</p>
        </div>
      </div>
    </section>
   <section class="container">
      <div class="row py-3 py-md-5">
        <div class="offset-md-1 col-md-5 my-3 my-md-0">
          <img class="w-100 h-auto" src="https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="">
        </div>
        <div class="col-md-5 d-md-flex align-items-md-center">
          <div>
            <div class="text-primary font-logo">Service</div>
            <div class="h5 fw-bolder">您出錢 我出力 一起打造你的完美傢具</div>
            <p class="mb-0">打造專屬於您的沙發，</p>
            <p class="mb-0">客製化設計，百變風格，</p>
            <p class="mb-0">結合專業工藝和高品質材料，</p>
            <p class="mb-0">為您的家居空間帶來更多個性與風格。</p>
            <p class="mb-0">讓您擁有獨一無二的沙發，</p>
            <p>展現您的個性魅力，享受舒適和美感的完美結合。</p>
          </div>
        </div>
      </div>
      <div class="row row-cols-md-4 row-cols-2 py-md-5">
        <div v-for="product in products" :key="product.id" class="col">
          <div class="card bg-dark text-white border-0 mb-3 mb-md-0">
            <img :src="product.imageUrl" class="card-img w-100 h-auto" style="" alt="...">
            <div class="card-img-overlay top-50 p-0">
              <!-- <div class="aaaa">
                <h5 class="card-title text-dark text-center">{{ product.title }}</h5>
              </div> -->
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center pb-5">
        <div class="btn btn-outline-dark rounded-pill px-5 py-1 mx-1">查看更多產品</div>
        <div class="btn btn-primary rounded-pill px-5 py-1 mx-1">客製沙發作品</div>
      </div>
      <div class="row row-cols-md-3 row-cols-1 g-5 mx-3">
        <div class="col rounded-5" v-for="product in products" :key="product.id">
          <div v-if="product.id<4" class="card shadow-sm bg-body border-0 rounded">
            <img :src="product.imageUrl" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">{{ product.title }}</h5>
              <p class="card-text">{{ product.description }}</p>
            </div>

            <div class="card-body border-top border-light text-center">
              <a href="#" class="card-link">More</a>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center pb-5">
        <div class="btn btn-outline-dark rounded-pill px-5 py-1 mx-1">看看更多沙發</div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      products: [
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
  }
}
</script>

<style lang="scss" scoped>
.banner {
  height: calc(85vh);
      background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  background-image: url(https://images.unsplash.com/photo-1578500339042-8059dc18b911?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80);
  @media (max-width: 576px) {
    height: calc(95vh);
    }
}

</style>
