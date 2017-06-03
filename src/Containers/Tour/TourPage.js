import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    const { TourReducer: { currentTour } } = state;

    return {
        currentTour
    }
}

@connect(
    mapStateToProps
)

export default class TourPage extends PureComponent {
    render() {
        return (
            <div>
                {this.props.currentTour.title}
            </div>
        );
    }
}
