
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React,{useState} from 'react';
import About from "./components/About";
import NoPage from "./components/NoPage";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

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
      {/* <Navbar title="TextUtils" abouttext="AboutTextutils" mode={mode} toggleMode={toggleMode}/> */}
      {/* <Alert alert={alert}/> */}
      {/* <div className="container my-3"> */}
        {/* <TextForm showAlert={showAlert} heading="Enter the text here to analyse"mode={mode}/> */}
      {/* </div>  */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar title="TextUtils" abouttext="AboutTextutils" mode={mode} toggleMode={toggleMode}/>}>
              <Route index path="/" element={<TextForm showAlert={showAlert} heading="Enter the text here to analyse"mode={mode}/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="*" element={<NoPage />} />
          </Route>

        </Routes>
      </BrowserRouter>, 
      </>
  );
}

export default App;
