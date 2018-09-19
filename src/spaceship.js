class Spaceship {
  constructor(name, crew,phasers,shields){
    this.name =name
    this.phasers = phasers
    this.shields= shields
    this.cloaked = false
    this.crew = crew
    this.warpDrive = 'disengaged'
    if (crew.length === 0) {
      this.docked = true

    } else {
      this.docked = false
      for (let ele of crew){
        ele.currentShip = this

      }
    }
    this.phasersCharge = 'uncharged'
  }
}
