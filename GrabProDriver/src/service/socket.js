import io from "socket.io-client";

class SocketManager {
  constructor() {
    this.socketDriver = null;
    return null;
  }

  connect() {
    if (!SocketManager.instance) {
      this.socketDriver = io.connect("http://192.168.1.7:3002");
      SocketManager.instance = this;
    }

    return SocketManager.instance;
  }

  listenForMessage(channel, callback) {
    if (!this.socketDriver) {
      throw new Error("Socket is not connected.");
    }

    this.socketDriver.on(channel, callback);
  }

  sendMessage(channel, message) {
    if (!this.socketDriver) {
      throw new Error("Socket is not connected.");
    }
    this.socketDriver.emit(channel, message);
  }

  disconnect() {
    if (this.socketDriver) {
      this.socketDriver.disconnect();
      this.socketDriver = null;
    }
  }
}

const socketManagerInstance = new SocketManager();

export const {
  socketDriver,
  connect,
  sendMessage,
  listenForMessage,
  disconnect,
} = socketManagerInstance;

export default socketManagerInstance;
