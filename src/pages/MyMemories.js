import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import './Mymemories.css'

const MyMemories = () => {
  return (
    <div className='container'>
      <FontAwesomeIcon icon={faSquarePlus} color="#692800" size='2x' className='icon1'/>
      <div className='con2'>
      <FontAwesomeIcon icon={faCircleUser} size="3x" color="#692800" className='icon2' />
        <p >Joseph Olaobajo</p>
        <div className='con3'>

        </div>
        <FontAwesomeIcon icon={faHeart} size="2x" color="red" className='icon3' />
        <FontAwesomeIcon icon={faHeartRegular} size="3x" color="red" />
      </div>
    </div>
  )
}

export default MyMemories
