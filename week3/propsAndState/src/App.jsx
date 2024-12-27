import './App.css'
import UserProps from './UserProps'
import ButtonState from './ButtonState'

function App() {
  return (
    <div>
      <h1>Props and State</h1>
      <UserProps name="Abdurahman" age={22} email="abdurahmanmifta225@gmail.com" />
      <ButtonState />
    </div>
  )
  
}

export default App
