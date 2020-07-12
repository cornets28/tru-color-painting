import React, { Component } from 'react'

const PaintingContext = React.createContext()

class PaitingProvider extends Component {
  render() {
    return (
      <PaintingContext.Provider value="Hello form context">
        {this.props.children}
      </PaintingContext.Provider>
    )
  }
}
const PaintingConsumer = PaintingContext.Consumer;

export default( PaitingProvider, PaintingConsumer)
