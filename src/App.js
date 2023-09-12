import { type } from "@testing-library/user-event/dist/type";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React,{useState} from 'react'



    function App() 
    {
      const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
      const [alert, setAlert] = useState(null);
      const toggleMode=()=>
      {
        if(mode==='light')
        {
          setMode('dark');
          document.body.style.backgroundColor='#082544';
          showAlert(" Light has been enabled","success");
        }
        else
        {
          setMode('light');
          document.body.style.backgroundColor='white';
          showAlert(" Light has been enabled","success");
        }
      }
      const showAlert=(message,type)=>
      {
        setAlert({msg:message,
          type:type
        })
        setTimeout(()=>{setAlert(null);},1500);
      }

      return (
      <>
      <Navbar title="TextUtils" abouttext="AboutTextutils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text here to analyse"mode={mode}/>
      </div>    
      </>
  );
}

export default App;
