class StateManager {
  constructor() {
    if (StateManager.instance) {
      return StateManager.instance;
    }
    StateManager.instance = this;

    this.id = null;
    this.from = null;
    this.to = null;
    this.distance = null;
    this.time = null;
    this.type = null;
  }

  setId(id) {
    this.id = id;
  }

  setFrom(x) {
    this.from = x;
  }

  setTo(y) {
    this.to = y;
  }

  setDistance(dt) {
    this.distance = dt;
  }

  setTime(time) {
    this.time = time;
  }

  setType(type) {
    this.type = type;
  }

  getState() {
    return {
      id: this.id,
      from: this.from,
      to: this.to,
      distance: this.distance,
      time: this.time,
      type: this.type,
    };
  }
}

export default new StateManager();
