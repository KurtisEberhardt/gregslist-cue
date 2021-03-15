import { sandboxApi } from './AxiosService'
import { AppState } from '../AppState'

class HouseService {
  async getHouses () {
    try {
      const res = await sandboxApi.get('houses')
    } catch (error) {
      console.error(error)
    }
  }

  async getHouse (_id) {
    try {
      const res = await sandboxApi.get('houses/' + _id)
      AppState.activeHouse = res.data
    } catch (error) {
      console.error(error)
    }
  }

  async createHouse (rawHouse) {
    try {
      const res = await sandboxApi.post('houses', rawHouse)
      AppState.houses.push(res.data)
    } catch (error) {
      console.error(error)
    }
  }

  async bid (_id) {
    try {
      const house = AppState.houses.find(h => h._id === _id)
    } catch (error) {
      console.error(error)
    }
  }

  async deleteHouse (_id) {
    try {
      const res = await sandboxApi.delete(`houses/${_id}`)
    } catch (error) {
      console.error(error)
    }
  }
}
export const houseService = new HouseService()
