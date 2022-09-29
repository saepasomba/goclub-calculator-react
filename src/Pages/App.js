
import './App.scss';
import Header from '../Components/Header';
import ProgressBar from '../Components/ProgressBar';
import CustomTextField from '../Components/CustomTextField';
import { useState } from 'react';
import Insight from '../Components/Insight';

function App() {
  const [userExp, setUserExp] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [tier, setTier] = useState('warga');
  const [tierColor, setTierColor] = useState('green')

  const onChange = (event) => {
    let value = event.target.value
    setUserExp(Number(value))
    setPercentage((value/6000*100).toFixed(2))
    console.log(Number(value))
    if (Number(value) >= 6000) {
      setTier('sultan')
      setTierColor('purple')
    } else if (value >= 1500) {
      setTier('juragan')
      setTierColor('blue')
    } else if (value >= 200) {
      setTier('bos')
      setTierColor('orange')
    } else {
      setTier('warga')
      setTierColor('green')
    }
  }

  return (
    <div className="App">
      <Header />
      <ProgressBar progress={percentage} />
      <div className={`container tier-container ${tierColor}`}>
        {tier}
      </div>
      <Insight currentExp={userExp} />
      <div className='container textfield-container'>
        <CustomTextField label='Current exp' onChange={onChange} />
      </div>
    </div>
  );
}

export default App;
