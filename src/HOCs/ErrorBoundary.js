import React from 'react';
import PropTypes from 'prop-types';

function logErrorToMyService(err, inf) {
  console.log('logErrorToMyService Err - ', err);
  console.log('logErrorToMyService Inf - ', inf);
  console.log(1, err.toString());
  console.log(2, inf.componentStack);
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(error) {
    // Обновление состояния, чтобы при последующей отрисовке показать аварийный UI.
    console.log(error, ' - getDerivedStateFromError');
    return {hasError: true};
  }

  componentDidCatch(error, info) {
    // Вы можете прологировать ошибку с помощью сервиса отчета об ошибках
    logErrorToMyService(error, info);
  }

  render() {
    if (this.state.hasError) {
      // Вы можете отрисовать любой резервный UI
      return <h1>Возникли ошибки.</h1>;
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.object,
};

ErrorBoundary.defaultProps = {
  children: {},
};

export default ErrorBoundary;

// using -
// <ErrorBoundary>
//   <MyWidget />
// </ErrorBoundary>
