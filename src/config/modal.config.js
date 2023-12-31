export default {
  "login": {
    title: '登录',
    formType: 'login',

    formData: [
      {
        label: "用户名",
        query: "username",
        type: "text",
        placeholder: "用户名: 6-8位 字母数字",
        rule: /^(?!\d+$)(?![a-zA-Z]+$)[a-zA-Z0-9]{6,8}$/
      },
      {
        label: "密码",
        query: "password",
        type: "password",
        placeholder: "密码: 8-12位 最少包含一位(数字/大小写字母)",
        rule: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!.#*?&]{8,12}$/
      }
    ],
    btns: [
      {
        targetName: 'close',
        name: '取消'
      },
      {
        targetName: 'confirm',
        name: '提交',
        isSubmit: true
      }
    ]
  },
  "postColumn": {
    title: '添加分类',
    formType: 'postColumn',
    formData: [
      {
        label: "分类名称",
        query: "name",
        type: "text",
        placeholder: "请填写分类名称"
      }
    ],
    btns: [
      {
        targetName: 'close',
        name: '取消'
      },
      {
        targetName: 'confirm',
        name: '提交',
        isSubmit: true
      }
    ]
  },
  "register": {
    title: '注册',
    formType: 'register',
    formData: [
      {
        label: "用户名",
        query: "username",
        type: "text",
        placeholder: "用户名: 6-8位 字母数字"
      },
      {
        label: "邮箱",
        query: "email",
        type: "text",
        placeholder: "请输入邮箱地址"
      },
      {
        label: "密码",
        query: "password",
        type: "password",
        placeholder: "密码: 8-12位 最少包含一位(数字/大小写字母)"
      }
    ],
    btns: [
      {
        targetName: 'close',
        name: '取消'
      },
      {
        targetName: 'confirm',
        name: '注册',
        isSubmit: true
      }
    ]
  },
  "info": {
    title: '个人信息',
    formType: 'putUserInfo',
    formData: [
      {
        label: "用户名",
        query: "username",
        type: "text",
        readonly: true,
        placeholder: "用户名: 6-8位 字母数字"
      },
      {
        label: "昵称",
        query: "nikname",
        type: "text",
        placeholder: "请输入昵称"
      },
      {
        label: "邮箱",
        query: "email",
        type: "text",
        placeholder: "请输入邮箱地址"
      },
      {
        label: "签名",
        query: "signature",
        type: "txt",
        placeholder: "请输入你的个性签名"
      }
    ],
    btns: [
      {
        targetName: 'close',
        name: '取消'
      },
      {
        targetName: 'confirm',
        name: '提交',
        isSubmit: true
      }
    ]
  }
}