import React, { Component } from 'react';
import { createStore } from 'redux';
class ReduxDemo extends Component {
    render() {
        var curState = 'peace';
        // create reducer: it requires two things state and action
        const reducer = function (state, action) {
            if (action.type === 'attack') {
                return action.payload;
            }
            return state;
        }
        // create store: it requires two things reducer and state
        const store = createStore(reducer, curState);
        // create subscriber
        store.subscribe(() => {
            console.log('store is now : ', store.getState());
        });
        // dispatch
        store.dispatch({
            type: 'attack',
            payload: 'Attacked'
        });
        return (
            <div>
                Hello redux
        </div>
        );
    }
}
export default ReduxDemo;