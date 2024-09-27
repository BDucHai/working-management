import { Socket, io } from "socket.io-client";
import { BACKEND_URL } from "./constant";

class SocketClient {
  socket: Socket | null;

  constructor() {
    this.socket = null;
  }
  getId() {
    return this.socket?.id || "";
  }
  connect(token: string) {
    this.socket = io(BACKEND_URL, {
      transportOptions: {
        polling: {
          extraHeaders: { Authorization: token },
        },
      },
    });
    return new Promise((resolve: any, reject) => {
      this.socket?.on("connect", () => {
        console.log("Connected:");
        console.log("UserId: " + this.socket?.id);
        resolve();
      });
      this.socket?.on("connect_error", (error) => {
        console.log(error);
        reject();
      });
    });
  }

  disconnect() {
    console.log("Disconnect: ", this.socket?.id);
    return new Promise((resolve) => {
      this.socket?.disconnect();
    });
  }

  emit(event: string, data: any) {
    return new Promise((resolve: any, reject) => {
      if (!this.socket) return reject("No socket connection.");

      return this.socket.emit(event, data, (response: any) => {
        // Response is the optional callback that you can use with socket.io in every request. See 1 above.
        if (response.error) {
          console.error(response.error);
          return reject(response.error);
        }

        return resolve();
      });
    });
  }

  on(event: string, fun: any) {
    // No promise is needed here, but we're expecting one in the middleware.
    console.log("Client receive: ");
    console.log(this.getId());
    return new Promise((resolve: any, reject) => {
      if (!this.socket) return reject("No socket connection.");
      this.socket.on(event, fun);

      resolve();
    });
  }
}

export default SocketClient;
