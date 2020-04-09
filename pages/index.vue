<template>
  <div class="container">
    <h1 class="text-align-center mt-5">
      臺中市公共自行車(iBike)租借站&即時車位資料
    </h1>
    <div class="search-area">
      <div>
        <label for="area">區域</label>
        <select v-model="selectArea">
          <option value="all">全部</option>
          <option v-for="area in areaOptions" :key="area" :value="area">
            {{ area }}
          </option>
        </select>
      </div>
      <div>
        <label for>日期</label>
        <i>太陽</i>
      </div>
    </div>
    <div class="bike-area">
      <div v-for="(bike, i) in filterBike" :key="i" class="bike-card">
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
      selectArea: 'all',
      bikeList: []
    }
  },
  computed: {
    areaOptions () {
      const areaMap = new Set()
      this.bikeList.forEach((item) => {
        areaMap.add(item.CArea)
      })
      return Array.from(areaMap)
    },
    filterBike () {
      if (this.selectArea === 'all') { return this.bikeList }
      const bikeList = this.bikeList.filter((item) => {
        return this.selectArea === item.CArea
      })
      return bikeList
    }
  }
}
</script>
