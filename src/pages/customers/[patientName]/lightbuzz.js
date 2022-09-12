import React from 'react'
import Lightbuzz from 'src/components/customer/details/Lightbuzz';
import Detail_navbar from 'src/components/customer/detail-navbar';

const lightbuzz = () => {
  return (
    <div>
        <Detail_navbar firstName={'bob'} lastName={'Larry'} currPage={'mocap'}/>
        <Lightbuzz />
    </div>
  )
}

export default lightbuzz