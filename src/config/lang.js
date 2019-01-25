export const translations = {
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
};

const langArr = ['en', 'ru'];
let currentLang = 'en';

export const getCurrentLang = () => currentLang;

export const setCurrentLang = lang => {
  if (langArr.indexOf(lang) !== 0) {
    currentLang = lang;
  } else {
    throw Error("Can't find this language!");
  }
};
