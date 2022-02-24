import { ProxyState } from "../AppState.js";
import { pokesService } from "../Services/PokesService.js";
import { Pop } from "../Utils/Pop.js";


async function _getPokes() {
  try {
    await pokesService.getPokes()
  } catch (error) {
    Pop.toast(error.message, 'error')
    console.log(error);
  }
}

function _drawPokesList() {
  let template = ''
  ProxyState.pokes.forEach(p => template += `<li class= "selectable" onclick="app.pokesController.getActivePoke('${p.url}')">${p.name}</li>`)
  document.getElementById('api-poke-list').innerHTML = template
}

function _drawActivePoke() {
  let poke = ProxyState.activePoke
  if (poke.name) {
    document.getElementById('active-poke').innerHTML = ProxyState.activePoke.Template
  } else {
    document.getElementById('active-poke').innerText = 'select a mon'
  }

}

export class PokesController {
  constructor() {
    console.log('pokes controller engaged');
    ProxyState.on('pokes', _drawPokesList)
    ProxyState.on('activePoke', _drawActivePoke)
    _getPokes()


  }
  async getActivePoke(name) {
    try {
      console.log('gettting THE MON!!!!', name);
      await pokesService.getActivePoke(name)
    } catch (error) {
      Pop.toast(error.message, 'error')
      console.error(error);
    }
  }
}