
import { useState } from 'react';
import './App.css';
import LifeCycle from './components/LifeCycle';

function App() {

  const [ show, setShow] = useState(false)


  return (
    <>
      <div className="App">

<h1>Yaşam Döngüsü - LifeCycle</h1>
</div>
<button onClick={()=>setShow((show)=> !(show) )}>
{show ? "Gizle" : " Göster"}
</button>

{show && <LifeCycle/>}


<p className='read-the-docs'>Merhaba</p>
    </>
  );
}

export default App;
