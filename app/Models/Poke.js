
export class Poke {

  constructor(data) {
    this.name = data.name
    this.img = data.sprites.front_default

  }




  get Template() {
    return `
    <div class="bg-light shadow p-4">
      <div class="text-center">
        <h2>poke-e-mon</h2>
        <h4> | ${this.name} |</h4>
        <img src="${this.img}"/>
        <div class="d-flex justify-content-between align-items-baseline">
        
        </div>
      </div>
    </div>`
  }
}
