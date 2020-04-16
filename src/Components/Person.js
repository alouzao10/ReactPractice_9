import React, { Component, useContext } from 'react';
import { AppContext } from '../Context/AppContext';

export default class Person extends Component {
    render() {
        return (
            <div>
                <p>I'm a person:</p>
                <AppContext.Consumer>
                    {(context) => (
                        <React.Fragment>
                            <p>The Consumer</p>
                            <p>{context.state.name} is {context.state.age}</p>
                            <button onClick={context.growOld}>OLD</button>
                        </React.Fragment>

                    )}
                </AppContext.Consumer>
            </div>
        )
    }
}
