class Command {
  constructor(receiver) {
    this.receiver = receiver;
  }

  execute() {}
}

class SetIdCommand extends Command {
  constructor(receiver, id) {
    super(receiver);
    this.id = id;
  }

  execute() {
    this.receiver.setId(this.id);
  }
}

class SetFromCommand extends Command {
  constructor(receiver, x) {
    super(receiver);
    this.from = x;
  }

  execute() {
    this.receiver.setFrom(this.from);
  }
}

class SetToCommand extends Command {
  constructor(receiver, y) {
    super(receiver);
    this.to = y;
  }

  execute() {
    this.receiver.setTo(this.to);
  }
}

class SetDistanceCommand extends Command {
  constructor(receiver, y) {
    super(receiver);
    this.distance = y;
  }

  execute() {
    this.receiver.setDistance(this.distance);
  }
}

class SetTimeCommand extends Command {
  constructor(receiver, y) {
    super(receiver);
    this.time = y;
  }

  execute() {
    this.receiver.setTime(this.time);
  }
}

class SetTypeCommand extends Command {
  constructor(receiver, y) {
    super(receiver);
    this.type = y;
  }

  execute() {
    this.receiver.setType(this.type);
  }
}

class GetStateCommand extends Command {
  constructor(receiver) {
    super(receiver);
  }

  execute() {
    return this.receiver.getState();
  }
}

export {
  SetIdCommand,
  SetFromCommand,
  SetToCommand,
  SetDistanceCommand,
  SetTimeCommand,
  SetTypeCommand,
  GetStateCommand,
};
