<template>
  <div class="house-page container">
    {{state.houses}}
  <div class="row">
    <div class="col text-center">
      <h1>HOUSES</h1>
    </div>
  </div>
  <div class="row my-3">
    <form class="form-inline" @submit.prevent="createHouse">
      <div class="form-group">
        <input type="text" name="bedrooms" id="bedrooms" class="form-control" placeholder="bedrooms?" aria-describedby="bedrooms" v-model="state.houses.bedrooms">
      </div>
      <div class="form-group">
        <input type="text" name="bathrooms" id="bathrooms" class="form-control" placeholder="bathrooms?" aria-describedby="bathrooms" v-model="state.houses.bathrooms">
      </div>
      <div class="form-group">
        <input type="text" name="levels" id="levels" class="form-control" placeholder="levels?" aria-describedby="levels" v-model="state.houses.levels">
      </div>
      <div class="form-group">
        <input type="text" name="year" id="year" class="form-control" placeholder="year?" aria-describedby="year" v-model="state.houses.year">
      </div>
      <div class="form-group">
        <input type="text" name="price" id="price" class="form-control" placeholder="price?" aria-describedby="price" v-model="state.houses.price">
      </div>
      <button class="btn btn-success" type="submit">CREATE</button>
    </form>
  </div>

    <div class="row">
      <House v-for="house in state.houses" :key="house._id" :house="house"/>
    </div>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { houseService } from '../Services/HouseService'
import House from '../components/House'
import { useRouter } from 'vue-router'
export default {
  name: 'HousesPage',
  setup () {
    const router = useRouter()
    const state = reactive({
      houses: computed(() => AppState.houses),
      newHouse: {}
    })

    // NOTE this runs when the page/component is first 'mounted' to the DOM
    onMounted(() => {
      houseService.getHouses()
    })

    return {
      state,
      async createHouse () {
        const houseId = await houseService.createHouse(state.newHouse)
        router.push({ name: 'HouseDetails', params: { id: houseId } })
        state.newHouse = {}
      }
    }
  },
  components: {
    House
  }
}
</script>

<style lang="scss" scoped>

</style>
