import React from 'react'
import Plane from './Plane'
import store from './PlaneStore'
import PlaneAddForm from './PlaneAddForm'
 
 
class App extends React.Component {
  constructor () {
    super()
 
    this.state = {
      planes: []
    }

    this.add = (plane) =>
    {
      store.addOne(plane)
    }
  }
 
  componentDidMount () {
    store.getAll()

    store.emitter.addListener('GET_PLANES_SUCCESS', () => {
      this.setState({
        planes: store.data
      })
    })
  }
 
  render () {
    return (
      <div>
        {
          this.state.planes.map(e => <Plane item={e} key={e.id}></Plane>)
        }
        <PlaneAddForm onAdd={this.add}/>
      </div>
    ) 
  }
}
 
export default App     