/**
 * 正则验证
 */
const Email = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/
const userNameValue = /^[a-zA-Z0-9]{4,16}$/
const pwReg = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/
module.exports = {
    Email,
    userNameValue,
    pwReg
}
