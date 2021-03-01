module.exports = function reverse (n) {
  let a = String(n);
  let r = a.split('')
    if(r[0] == '-') {r.splice(0,1)}
    r.reverse()
    if(r[0]=='0'){r.splice(0,1)}
    a = r.join('')
    return a
}
