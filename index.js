const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  if (record.find(function(w) {return w.result === "W"})){
    return record.find(function(w) {return w.result === "W"}).year
  }
  else {
    return undefined
  }
};

