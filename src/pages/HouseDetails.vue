<template>
  <div class="house-details">
    <h1>these are the details of a house</h1>
    {{state.houses}}
    <button type="button" class="btn btn-danger" @click="deleteHouse">Delete This House</button>
    <form class="form-inline" @submit.prevent="createHouse(event)">
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
    <button class="btn btn-warning" type="submit">Edit House</button>
    </form>
    <!--NOTE v-model="state.house.[the variable you want to edit (year, make, model etc)] to make editable fields-->
  </div>
</template>

<script>
import { useRoute, useRouter, onBeforeRouteLeave } from 'vue-router'
import { onMounted, reactive, computed } from 'vue'
import { houseService } from '../Services/HouseService'
import { AppState } from '../AppState'
export default {
  name: 'HouseDetails',
  setup () {
    const route = useRoute()
    const router = useRouter()
    const state = reactive({
      house: computed(() => AppState.activeHouse)
    })
    onMounted(() => {
      houseService.getHouse(route.params._id)
    })

    onBeforeRouteLeave((to, from, next) => {
      if (window.confirm('you sure?')) {
        AppState.activeHouse = {}
        next()
      }
    })
    return {
      route,
      state,
      async deleteHouse () {
        await houseService.deleteHouse(state.house._id)
        router.push({ name: 'Houses' })
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
