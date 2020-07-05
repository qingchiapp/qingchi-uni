export default class LoginDataVO {
  loginType = ''
  platform = ''

  openId = ''
  unionId = ''
  //app三方登陆使用
  accessToken = ''
  //小程序三方登陆使用
  code = ''

  nickName = ''
  avatarUrl = ''
  gender: number = null
  birthday = ''
  city = ''

  phoneNum = ''
  authCode = ''

  //百度小程序使用
  encryptedData = ''
  iv = ''
  //微信绑定手机号使用
  sessionEnable: boolean = null

  //暂未使用
  inviteCode = ''
}