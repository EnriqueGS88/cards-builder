import React from 'react';
import '../styles/styles.css';
import { CardData } from './cardData';


function Cards() {


  return (
    <>
        <div class="card card-shadow">
            <div class="card-header card-image">
                <img src="https://source.unsplash.com/YjwJTbe0jjE" />
            </div>
            <div class="card-body">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, saepe!
            </div>
            <div class="card-footer">
                <button class="btn">Details</button>
                <button class="btn btn-outline">Contact Seller</button>
            </div>
        </div>
        <div class="card card-shadow">
            <div class="card-header card-image">
                <img src="https://source.unsplash.com/lVVs5skyWoo" />
            </div>
            <div class="card-body">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, saepe!
            </div>
            <div class="card-footer">
                <button class="btn">Details</button>
                <button class="btn btn-outline">Contact Seller</button>
            </div>
        </div>
    </>
  )
}

export default Cards