
import './App.scss';
import Header from '../Components/Header';
import ProgressBar from '../Components/ProgressBar';
import CustomTextField from '../Components/CustomTextField';

function App() {
  return (
    <div className="App">
      <Header />
      <ProgressBar progress={75} />
      <div className='container temp-container'>
        <CustomTextField label='Current exp'/>
        <CustomTextField />
      </div>
    </div>
  );
}

export default App;
