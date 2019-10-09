import {ADD_REMINDER, REMOVE_REMINDER, CLEAR_REMINDER} from './Types';

export const Add = (text, date) => {
    const action = {
        type : ADD_REMINDER,
        text,
        date
    }
    return action
}

export const Remove = (id) => {
    const action = {
        type : REMOVE_REMINDER,
        id
    }
    return action
}

export const Clear = () => {
    const action = {
        type : CLEAR_REMINDER,
    }
    return action
}