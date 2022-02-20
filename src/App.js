import LeftSideBar from './Components/leftBar/LeftSideBar'; 
import './assets/css/dark.css';
import './assets/css/style.bundle.css';
import  RightSideBar from './Components/rightBar/RightSideBar';

function App() {
  return (
    <>
    <div className="d-flex flex-column flex-root">
      <div className="d-flex flex-row flex-column-fluid page">
      <LeftSideBar/>
      <RightSideBar/>
      </div>
    </div>
    </>
  );
}

export default App;
