export const CHANGE = 'CHANGE';
export const ADD = 'ADD_CHILDREN';

const initial = {
    info: {
        name: '',
        age: ''
    },
    children: []
}


const userReducer = (state = initial, action) => {
    switch (action.type) {
        case CHANGE: {
            return {
                ...state,
                info: {
                    ...action.payload
                }
            }
        }
        case ADD: {
            return {
                ...state,
                children: [
                    ...action.payload
                ]
            }
        }
        default:
            return state
    }
}

export default userReducer;