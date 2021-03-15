<template>
  <router-link :to="{name: 'HouseDetails', params:{id: house._id}}">
  <div class="house col-4">
    <img src="house.imgUrl" alt="shitsbroke" class="card-img-top">
    <div class="card-body">
       <h4 class="card-title">{{houses.bedrooms}} | {{houses.bathrooms}}</h4>
    <p class="card-text">{{house.price}}|{{houses.year}}</p>
</div>
</div>
</router-link>
</template>

<script>
export default {
  name: 'house',
  props: {
    house: Object
  },
  setup () {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
