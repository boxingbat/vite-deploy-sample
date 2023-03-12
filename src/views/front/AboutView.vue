<template>
  <div>
    <div class="container">
      <div class="row row-cols-md-2 g-5 my-md-2 my-1">
        <div class="col" v-for="item in project" :key="item.id">
          <div class="card">
            <img :src="item.imgUrl" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text">{{ item.content }}</p>
              <a href="#" class="btn btn-primary">聯絡店家</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      project: [
        {
          id: '1',
          imgUrl: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80',
          title: '客製化沙發計劃',
          content: '設計一個定制沙發的企劃，以滿足消費者對家具的個性化需求。計劃可以包括提供多種風格、尺寸和材料的選擇，並允許消費者選擇自己的設計和布料。此外，還可以提供一對一的設計師和製造商支持，確保產品符合消費者的要求。'
        },
        {
          id: '2',
          imgUrl: 'https://images.unsplash.com/photo-1601654717399-7486d5ebedca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80',
          title: '沙發回收和再利用計劃',
          content: '推出一個環保友好型的計劃，讓消費者能夠將不再使用的沙發回收並重新利用。計劃可以包括回收和修復舊沙發，並出售或捐贈給有需要的人。此外，還可以探索如何在沙發製造過程中減少浪費和環境影響。'
        }
      ]
    }
  }
}
</script>

<style scoped>
.card-img-top {
  height: 300px;
}
</style>
