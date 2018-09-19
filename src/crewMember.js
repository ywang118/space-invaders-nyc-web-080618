class CrewMember {
  constructor(position){
    this.position = position
    this.currentShip = "Looking for a Rig"

  }
  currentShip(ship){
    this.currentShip =ship
  }
  engageWarpDrive(){
    if (this.currentShip === "Looking for a Rig") {
      return "had no effect"
    } else {
      if (this.position === "pilot"){
        this.currentShip.warpDrive ='engaged'

      } else {
        this.currentShip.warpDrive ='disengaged'
      }
    }
  }
  setsInvisibility(){
    if (this.currentShip === "Looking for a Rig") {
      return "had no effect"
    } else {
      if(this.position === "Defender"){
        this.currentShip.cloaked =true
      } else {
        this.currentShip.cloaked =false;
      
      }
     }
  }
  chargePhasers(){
    if (this.currentShip === "Looking for a Rig") {
      return "had no effect"
    }
  }

}
