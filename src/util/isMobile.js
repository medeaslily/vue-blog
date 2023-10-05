/**
 * 判断设备是否为移动设备
 * @returns {RegExpMatchArray}
 * @private
 */
export default function _isMobile () {
  return navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/)
}