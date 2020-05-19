import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi.js'

const SushiContainer = (props) => {

  const sushiComponent = props.sushiList.map(sushi =>{
    return <Sushi sushi={sushi} key={sushi.id} removeSushi={props.removeSushi}/>
  })

  return (
    <Fragment>
      <div className="belt">
        {sushiComponent}
        <br></br>
        <MoreButton show4More={props.show4More}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer