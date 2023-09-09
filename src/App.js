import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";


    function App() 
    {
      return (
      <>
      <Navbar title="TextUtils" abouttext="AboutTextutils"/>
      <div className="container my-3">
        <TextForm heading="Enter the text here to analyse"/>
      </div>    
      </>
  );
}

export default App;
