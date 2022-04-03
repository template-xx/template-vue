import VueI18n from 'vue-i18n'

const messages = {
  en: {
    page: {
      not_found: 'This page could not be found'
    }
  },
  zh_CN: {
    page: {
      not_found: '抱歉，没有找到对应的页面'
    }
  }
}

export default new VueI18n({
  locale: 'zh_CN',
  messages
})
