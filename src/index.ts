export function isBoolean(val: any): val is boolean {
  return val instanceof Boolean || val === true || val === false
}

export default {
  isBoolean,
}
