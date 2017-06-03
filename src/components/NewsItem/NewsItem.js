import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withRouter } from 'react-router-dom'

import styles from './NewsItem.css';

@withRouter
export default class NewsItem extends PureComponent {
    static propTypes = {
        data: PropTypes.object.isRequired
    }

    onClick = (e, id) => {
        this.props.onClick();
        this.props.history.push(`/tour/${this.props.data.image}`);
    }

    render() {
        return (
            <div
                onClick={this.onClick}
                className={styles.root}>
                <div
                    className={classNames({
                        [styles.image]: true,
                        [styles[`image_${this.props.data.image}`]]: this.props.data.image
                    })}
                />
                <div className={styles.footer}>
                    <div className={styles.where}>
                        <div className={styles.city}>{this.props.data.city}</div>
                        <div className={styles.county}>{this.props.data.county}</div>
                    </div>
                    <div className={styles.info}>
                        {this.props.data.price && <div className={styles.price}>от {this.props.data.price}</div>}
                    </div>
                </div>
            </div>
        );
    }
}
