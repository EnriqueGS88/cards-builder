import React from 'react';
import '../styles/connect.css';
import { CardData } from './cardData';


function Cards() {


  return (
    <>
    <div>
        <div className='grid-header'>
            External Carbon Calculators
        </div>
        <div className='grid-description'>
            Connect CarbonRaptr with your favorite Carbon Emissions Estimator.
            They calculate your emissions, CarbonRaptr offsets them for you ✨automagically✨.
        </div>
    </div>
    <div className='card-grid'>
        { CardData.map( ( item, index ) => {

            return (
                <div key={ index } className='card card-shadow'>
                    <div className='card-header card-image'>
                        <img src={ item.img }/>
                    </div>
                    <div className='card-body'>
                        { item.title }
                    </div>
                    <div className='card-footer'>
                        <button className='btn'>Connect</button>
                        <button className='btn btn-outline'>Learn more</button>
                    </div>
                </div>
            )
        }) }
    </div>
    </>
  )
}

export default Cards