class Amount{
    constructor(properties){
      this.id=Amount.incrementId();
      this.properties=properties;
  }
  
    static incrementId() {
      if (!this.latestId) this.latestId = 1
      else this.latestId++
      return this.latestId
    }
  }
  
  export default Amount; 