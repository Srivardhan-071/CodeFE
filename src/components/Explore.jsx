import React from 'react'
import { Link } from 'react-router-dom'
import image from '../images/best.png'
import '../styles/Explore.css'

export default function Explore() {

    return (
        <div className='explore'>
            <Link to="/explore/editor">
                <div className="challange-container">
                    <img className='challange-image' src={image} alt="challange" />
                </div>
            </Link>
            <Link to="/explore/editor">
                <div className="challange-container">
                    <img className='challange-image' src={image} alt="challange" />
                </div>
            </Link>
            <Link to="/explore/editor">
                <div className="challange-container">
                    <img className='challange-image' src={image} alt="challange" />
                </div>
            </Link>
            <Link to="/explore/editor">
                <div className="challange-container">
                    <img className='challange-image' src={image} alt="challange" />
                </div>
            </Link>
            <Link to="/explore/editor">
                <div className="challange-container">
                    <img className='challange-image' src={image} alt="challange" />
                </div>
            </Link>
            <Link to="/explore/editor">
                <div className="challange-container">
                    <img className='challange-image' src={image} alt="challange" />
                </div>
            </Link>
            <Link to="/explore/editor">
                <div className="challange-container">
                    <img className='challange-image' src={image} alt="challange" />
                </div>
            </Link>
            <Link to="/explore/editor">
                <div className="challange-container">
                    <img className='challange-image' src={image} alt="challange" />
                </div>
            </Link>
            <Link to="/explore/editor">
                <div className="challange-container">
                    <img className='challange-image' src={image} alt="challange" />
                </div>
            </Link>
        </div>
    )
}
