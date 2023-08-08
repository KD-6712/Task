import store from "../redux/store";

function getObjectKey(obj, value) {
    return Object.keys(obj).find(key => obj[key] === value);
  }
// store.getState() => { address: {address: 'Indore'}}
// state => {address: 'Indore'}

export const RemoveState = (state, init) => {
    const s = store.getState();
    const keyName = getObjectKey(s, state)
    const dupStore = {...s}
    dupStore[keyName] = init
}