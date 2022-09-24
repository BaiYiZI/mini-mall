import zhLanguage from './language/zh';
import enLanguage from './language/en';

class i18n {
  constructor(value) {
    this.text;
    switch (value) {
      case 'zh':
        this.text = zhLanguage;
        break;
      case 'en':
        this.text = enLanguage;
        break;
      default:
        this.text = zhLanguage;
        break;
    }
  }
}

export default i18n;
