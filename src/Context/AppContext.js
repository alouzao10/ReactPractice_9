import React, { Component, createContext } from 'react'

export const AppContext = createContext();

export class AppProvider extends Component {

    state = {
        name: "Paul",
        age: 33,
        cool: false
    }

    render() {
        return (
            <AppContext.Provider value={{
                state: this.state,
                growOld: () => {
                    this.setState({ age: this.state.age + 1 })
                }
            }}>
                {this.props.children}
            </AppContext.Provider >
        )
    }
} 
