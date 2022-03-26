import { api } from "../api"

class User {
  add (data) {
    return api.post('want-shib', {
      data: data
    })
  }
}

export default new User