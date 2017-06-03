import React from 'react';

import styles from './Container.css';

const Container = props => <div className={styles.root}>
      {React.Children.toArray(props.children)}
</div>

export default Container;
