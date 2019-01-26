import React from 'react';
import LangState from '../config/lang';

const LangFlags = () => (
  <div className="langContainer">
    <img
      className="langContFags"
      src="/static-files/rus-flag.png"
      onClick={() => LangState.setCurrentLang('ru')}
    />
    <img
      className="langContFags"
      src="/static-files/uk-flag.png"
      onClick={() => LangState.setCurrentLang('en')}
    />
    <ErrorCapturer />
  </div>
);

export default LangFlags;

class ErrorCapturer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {error: {error: {value: false}}};
  }

  onClick = () => {
    console.log(12);
    setTimeout(() => {
      this.setState({error: '12'}, () => {
        console.log('after');
      });
    }, 6000);
    // try {
    // throw Error('lol');
    // Выполните что-то, что выбросит ошибку
    // } catch (error) {
    // this.setState({error: Error('lolo')});
    // }
  };

  render() {
    const {error} = this.state;
    console.log(error, 'errr');
    if (error.error.value) {
      return <h1>Ошибка перехвачена!.</h1>;
    }
    return <div onClick={this.onClick}>Нажать</div>;
  }
}
