import { TTSEngine } from '../../types/tts_engine';

class ReconnectingWebSocketClient {
  private socket?: WebSocket;

  constructor(private url: string, private reconnectSeconds: number) {
    this.connect();
  }

  public sendMessage(message: string): void {
    if (this.socket?.readyState === WebSocket.OPEN) {
      this.socket?.send(message);
    }
  }

  private connect(): void {
    this.socket = new WebSocket(this.url);

    this.socket.addEventListener('close', () => {
      setTimeout(() => this.connect(), this.reconnectSeconds * 1000);
    });
  }
}

export default class WebSocketTTSEngine implements TTSEngine {
  private client: ReconnectingWebSocketClient;

  constructor(host: string, port: number, reconnectSeconds: number) {
    const url = `ws://${host}:${port}/ws`;
    this.client = new ReconnectingWebSocketClient(url, reconnectSeconds);
  }

  play(text: string): void {
    const message = {
      call: 'cactbotSay',
      text: text,
    };
    this.client.sendMessage(JSON.stringify(message));
  }
}
