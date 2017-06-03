import React from 'react';
import PropTypes from 'prop-types';
import NewsItem from '../NewsItem/NewsItem';
import Container from '../Container/Container.js';

import styles from './News.css';

class News extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    onItemClick = id => () => {
        this.props.onItemClick(id);
    }

    render() {
        this.props.onItemClick(1);
        return (
            <div className={styles.root}>
                <Container>
                    <div className={styles.icon}>{this.props.icon}</div>
                    <div className={styles.title}>{this.props.title}</div>
                    <div className={styles.list}>
                        {this.props.items.map((item, key) => <NewsItem
                            key={key}
                            onClick={this.onItemClick(key)}
                            data={item}
                        />)}
                    </div>
                </Container>
            </div>
        );
    }
}

News.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.element,
    items: PropTypes.array,
    onItemClick: PropTypes.func.isRequired
};

export default News;

