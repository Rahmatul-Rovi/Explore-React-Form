
import './App.css'
import ControlledField from './Components/ControlledField/ControlledField'
import FormAction from './Components/FormAction/FormAction'
import SimpleForm from './Components/SimpleForm/SimpleForm'
import UnControlledField from './Components/UnControlledField/UnControlledField'

function App() {
 

  return (
    <>
      
      <h1>Explore React Form</h1>
      
    <div>
     {/* <SimpleForm></SimpleForm> */}
     {/* <FormAction></FormAction> */}
     {/* <ControlledField></ControlledField> */}
     <UnControlledField></UnControlledField>
    </div>
    </>
  )
}

export default App
