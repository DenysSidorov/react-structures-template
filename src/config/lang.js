const translations = Symbol('translations');
const langArr = Symbol('langArr');
const currentLang = Symbol('currentLang');

class LangState {
  [translations] = {
    ru: {
      Remove: 'Удалить',
      dateTime: 'MMMM HH:mm',
      Messages: 'Mensajes',
      Team: 'Equipo',
      Done: 'Hecho',
      'Not Done': 'No Hecho',
    },
    en: {
      Remove: 'Remove',
      dateTime: 'MMMM D [at] H:mm',
      Messages: 'Messages',
      Team: 'Team',
      Done: 'Done',
      'Not Done': 'Not Done',
    },
  };

  // langState.translations[`${langState.getCurrentLang()}`].Remove
  [langArr] = ['en', 'ru'];

  [currentLang] = 'en';

  translate = word => {
    console.log(word);
    console.log(this[translations]);
  };

  getCurrentLang = () => {
    console.log('====', this);
    return this[currentLang];
  };

  setCurrentLang = lang => {
    if (this[langArr].indexOf(lang) !== 0) {
      this[currentLang] = lang;
    } else {
      throw Error("Can't find this language!");
    }
  };
}

const LangStateInstance = new LangState();
export default LangStateInstance;
