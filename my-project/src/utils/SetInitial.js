import store from "../redux/store"
function getObjectKey(obj, value) {
    return Object.keys(obj).find(key => obj[key] === value);
  }

export const setInitial = (init, state) => {
    const s = store.getState();
    const keyName = getObjectKey(s, state)
    store.getState()[keyName] = init
}