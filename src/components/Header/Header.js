import React from 'react';
import TravelIcon from '../Icons/Travel';
import Container from '../Container/Container';

import styles from './Header.css';

class Header extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.root}>
        <Container>
          <div className={styles.content}>
            <div className={styles.logo}><TravelIcon /></div>
            <div className={styles.title}>Кайрос-Тур</div>
            <div className={styles.text}>Счастливые моменты вашей жизни</div>
          </div>
        </Container>
      </div>
    );
  }
}

Header.propTypes = {

};

export default Header;

