import io from "socket.io-client";

class SocketManager {
  constructor() {
    if (!SocketManager.instance) {
      this.socketCustomer = io.connect("http://192.168.1.8:3001");
      SocketManager.instance = this;
    }

    return SocketManager.instance;
  }

  sendMessage(socket, channel, message) {
    socket.emit(channel, message);
  }
}

const socketManagerInstance = new SocketManager();

export const { socketCustomer } = socketManagerInstance;
export const sendMessage = socketManagerInstance.sendMessage.bind(
  socketManagerInstance
);

export default socketManagerInstance;
