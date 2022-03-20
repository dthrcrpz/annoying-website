import firebase from "../firebase"
const db = firebase.collection('/users')

class User {
  add (user) {
    return db.add(user)
  }
}

export default new User