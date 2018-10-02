// TODO: store implemention
const Store = {};

const Reducer = (state = {value: 0}, action = {type: null}) => {
    switch (action.type) {
        case 'INCREMENT':
            return {value: state.value + 1}
        case 'DECREMENT':
            return {value: state.value - 1}
        default:
            return state;
    }
};

// increment action
const increment = {
    type: 'INCREMENT',
};

// decrement action
const decrement = {
    type: 'DECREMENT',
};

let currentState = Reducer();
console.log(currentState);
currentState = Reducer(currentState, increment);
console.log(currentState);
currentState = Reducer(currentState, increment);
console.log(currentState);
currentState = Reducer(currentState, decrement);
console.log(currentState);
currentState = Reducer(currentState, increment);
console.log(currentState);