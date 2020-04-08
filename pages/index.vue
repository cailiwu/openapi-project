<template>
  <div class="container">
    <h1 class="text-align-center mt-5">
      臺中市公共自行車(iBike)租借站&即時車位資料
    </h1>
    <div class="search-area">
      <div>
        <label for="area">區域</label>
        <select>
          <option value="1">
            西屯區
          </option>
          <option value="2">
            西區
          </option>
        </select>
      </div>
      <div>
        <label for>日期</label>
        <i>太陽</i>
      </div>
    </div>
    <div class="bike-area">
      <div v-for="(bike, i) in bikeList" :key="i" class="bike-card">
        <div class="position">
          {{ bike.Position }}
          <span>{{ bike.CAddress }}</span>
        </div>
        <div class="area">
          {{ bike.CArea }}
        </div>
        <div class="available-counts">
          {{ bike.AvailableCNT }}
        </div>
        <small>Update time： {{ bike.UpdateTime }}</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'web',
  async asyncData ({ $axios }) {
    const { data } = await $axios.get('/YoubikeAllAPI')
    return { bikeList: data }
  },
  data () {
    return {
      bikeList: []
    }
  }
}
</script>
