import './App.css'
import Api from './Api'

function App() {

  return (
    <>
    <h1  style={{textAlign:'center',marginTop:'40px'}}>Random user On Refresh</h1>
     <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center '>
      
        <div style={{width:'700px',height:'700px'}} className='bg-info shadow rounded rounded-3'>
        <Api/>
        </div>
     </div>
    </>
  )
}

export default App