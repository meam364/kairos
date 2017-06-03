const tour = (state = [], action) => {
    switch (action.type) {
        case 'SET_TOUR':
        return {
            ...state,
            currentTour: action.payload
        }
        default:
            return state
    }
}

export default tour;
