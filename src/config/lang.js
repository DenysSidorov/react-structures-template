export default {
  translations: {
    ru: {
      dateTime: 'MMMM HH:mm',
      Messages: 'Mensajes',
      Team: 'Equipo',
      Done: 'Hecho',
      'Not Done': 'No Hecho',
    },
    en: {
      dateTime: 'MMMM D [at] H:mm',
      Messages: 'Messages',
      Team: 'Team',
      Done: 'Done',
      'Not Done': 'Not Done',
    },
  },

  langArr: ['en', 'ru'],
  currentLang: 'en',
  getCurrentLang: () => this.currentLang,

  setCurrentLang: lang => {
    if (this.langArr.indexOf(lang) !== 0) {
      this.currentLang = lang;
    } else {
      throw Error("Can't find this language!");
    }
  },
};
