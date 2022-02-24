import { pokeApi } from './AxiosService.js'
import { ProxyState } from '../AppState.js'
import { Poke } from '../Models/Poke.js'

class PokesService {

  async getPokes() {
    const res = await pokeApi.get()
    console.log(res.data);
    ProxyState.pokes = res.data.results
    console.log(ProxyState.pokes);

  }

  async getActivePoke(name) {
    const res = await pokeApi(name)
    console.log('[getActivePokes]', res.data);
    ProxyState.activePoke = new Poke(res.data)

  }
}






export const pokesService = new PokesService