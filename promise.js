/**
 * Promise 实现
 * @param {function} executor 
 */
function Promise(executor) {
  let self = this;
  self.status = 'pending'; // pending resolve reject
  self.value = null;
  self.reason = null;
  function resolve(value) {
    if (self.status === 'pending') {
      self.status = 'resolved';
      self.value = value;
    }
  }

  function reject(reason) {
    if (self.status === 'pending') {
      self.status = 'rejected';
      self.value = reason;
    }
  }
  executor(resolve, rejected)
}
Promise.prototype.then = funciton(onFufiled, onRejected){
  let self = this;
  if (self.status === 'resolved') {
    onFufiled(self.value);
  }
  if (self.status === 'rejected') {
    onRejected(self.reason);
  }
}
modules.exports = Promise;