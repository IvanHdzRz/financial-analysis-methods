class Diagram{
    constructor(title,amounts){
      this.title=title;
      this.amounts=amounts;
      this.id=Diagram.incrementId();
    }
  
    static incrementId() {
      if (!this.latestId) this.latestId = 1
      else this.latestId++
      return this.latestId
    }
  }

  export default Diagram;