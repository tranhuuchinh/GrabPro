import io from 'socket.io-client';

class SocketManager {
    constructor() {
        if (!SocketManager.instance) {
            this.socketCallcenter = io.connect('http://localhost:3003');
            this.socketGeolocation = io.connect('http://localhost:3005');
            SocketManager.instance = this;
        }

        return SocketManager.instance;
    }

    reconnect(socket) {
        if (!socket.connected) {
            socket.connect();
        }
    }

    sendMessage(socket, channel, message) {
        socket.emit(channel, message);
    }
}

const socketManagerInstance = new SocketManager();

export const { socketCallcenter, socketGeolocation } = socketManagerInstance;
export const sendMessage = socketManagerInstance.sendMessage.bind(socketManagerInstance);

export default socketManagerInstance;
