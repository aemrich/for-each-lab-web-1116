function iterativeLog(array) {
  array.forEach((item, i) => {
    console.log(`${i}: ${item}`)
  })
}

function iterate(callback) {
  const array=["ten", "nine", "eight"]
  array.forEach(callback)
  return array
}

function doToArray(array,callback) {
  array.forEach(callback)
}
