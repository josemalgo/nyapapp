class LoginService {
  async loginUser (name: string, password: string): Promise<void> {
    const credentials = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(name + password)
      }, 3000)
      reject(new Error())
    })

    credentials.then((val) => console.log(val)).catch((err) => console.log(err))
  }
}

export default LoginService
