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

  [langArr] = ['en', 'ru'];

  [currentLang] = 'en';

  translate = word => this[translations][this.getCurrentLang()][`${word}`];

  getCurrentLang = () => this[currentLang];

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
