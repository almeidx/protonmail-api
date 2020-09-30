/* Not the full module. Actually just what I need */
declare module '@almeidx/protonmail-api' {
  export interface ProtonClient {
    sendMail(opts: SendMailOptions): Promise<ProtonClient>;
    close(): void;
  }

  export interface SendMailOptions {
    body: string;
    subject: string;
    to: string;
  }

  export interface ConnectOptions {
    password: string;
    username: string;
  }

  export default {
    connect(opts: ConnectOptions): Promise<ProtonClient>;
  }
}
