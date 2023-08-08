export const validateEmail = (input) => {
    const flag1 = String(input).toLowerCase().match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    if (!flag1) {
      return false
    } else {
      return true
    }
}

export const validatePassWord = (input) => {
    var passw = /^[A-Za-z]\w{7,14}$/
    const flag2 = String(input).match(passw);
    if (!flag2) {
      return false
    } else {
      return true
      }
}