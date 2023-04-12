import App from './app'
import { serverConfig } from './config/ServerConfig'

async function main (): Promise<void> {
  const app = new App(Number(serverConfig.PORT))
  await app.listen()
}

void main()
