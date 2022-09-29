import React from 'react'
import './Insight.scss'

export default function Insight({ currentExp = 0 }) {
  return (
    <div className='container container-insight'>
      <p>You are <span className='insight-highlight'>{`${Number(((currentExp/6000)*100).toFixed(2))}%`}</span> or <span className='insight-highlight'>{6000 - currentExp} Exp</span> away to reach <span className='insight-highlight purple'>sultan</span>. To reach <span className='insight-highlight purple'>sultan</span>, you need to spend:</p>
      <div className='estimate-spendings'>
        <div className='estimate-group'>
          <p className='blue'>GoFood, GoCar, GoRide, GoSend</p>
          <ul>
            <li>Around <span className='insight-highlight'>Rp{(Math.floor((6000 - currentExp)/4)*5000).toLocaleString('id-ID')}</span> <span className='insight-subtext'>(GoPay or PayLater)</span></li>
            <li>Around <span className='insight-highlight'>Rp{(Math.floor((6000 - currentExp)/2)*5000).toLocaleString('id-ID')}</span> <span className='insight-subtext'>(Cash or Credit Card or Link Aja)</span></li>
          </ul>
        </div>

        <div className='estimate-group'>
          <p className='blue'>GoBills, GoPulsa, GoPay in online & offline stores</p>
          <ul>
            <li>Around <span className='insight-highlight'>Rp{(Math.floor((6000 - currentExp)/1)*5000).toLocaleString('id-ID')}</span> <span className='insight-subtext'>(any payment methods)</span></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

