/**
 * 版本比对高低
 *
 * @param {String} masterVersion 主版本
 * @param {String} slaveVersion 从版本
 * @param {Boolean} reverse 指定比对结果颠倒（小于为1；大于为-1）
 * @return {Number} 大于为1；等于为0；小于为-1
 */
function versionCompare (masterVersion, slaveVersion, reverse) {
  typeof masterVersion === 'string' && (masterVersion = masterVersion.split('.'))
  typeof slaveVersion === 'string' && (slaveVersion = slaveVersion.split('.'))
  let result
  masterVersion.some((n, i) => (result = n - slaveVersion[i]))
  return reverse ? (result < 0 ? 1 : result > 0 ? -1 : 0) : (result > 0 ? 1 : result < 0 ? -1 : 0)
}

exports = module.exports = versionCompare

/**
 * 排序升序比对函数
 * @param {String} masterVersion
 * @param {String} slaveVersion
 * @returns {Number}
 */
exports.ascend = function ascend (masterVersion, slaveVersion) {
  return versionCompare(masterVersion, slaveVersion, false)
}

/**
 * 排序降序比对函数
 * @param {String} masterVersion
 * @param {String} slaveVersion
 * @returns {Number}
 */
exports.descend = function descend (masterVersion, slaveVersion) {
  return versionCompare(masterVersion, slaveVersion, true)
}
