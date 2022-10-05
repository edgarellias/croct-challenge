import './App.css';

import  DragImage  from "./components/DragImage"
import TryUpload from "./components/TryUpload"
import CropLogo from "./components/CropLogo"
import FinalLogo from "./components/FinalLogo"

function App() {
  return (
    <div>
      <DragImage />
      <TryUpload />
      <CropLogo />
      <FinalLogo />
    </div>
  );
}

export default App;


