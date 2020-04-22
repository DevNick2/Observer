/* 
  O Observer Pattern permite um objeto observar o estado de outro objeto, sendo notificado quando este muda de estado
*/
let observers = []

export default {
  subscribe (callback) {
    observers.push(callback)
  },
  unsubscribe (callback) {
    observers = observers.filter(subscriber => subscriber !== callback)
  },
  notify (data) {
    observers.forEach(observer => observer(data))
  }
}
