import classes from "./Popup.module.css"
import { useState } from 'react'
import Button from "../generic/Button"
import { FaArrowRight } from 'react-icons/fa'
import { FaJenkins } from "react-icons/fa";

 

export default function Popup(props) {
  let [hideMe, setHideMe] = useState(false)

  if(props.hide) { /* Move the show / hide code to the component itself: */
    return null
  }

  if(hideMe) { /* Move the show / hide code to the component itself: */
    return null
  }

  return (
    <div className={classes.mainDiv} onClick={() => setHideMe(true)} >
      <div className={classes.greyBackground}></div>
      <div className={classes.thePopup}>
        <div className={classes.theButton}>
        <Button text1="OK" maxWidth="70px" onClickHandler={() => console.log('OK')} icon={<FaArrowRight/>}/>
        <Button text1="Cancel" maxWidth="90px" onClickHandler={() => console.log('Cancel')} icon={<FaJenkins/>}/>
        </div>
      </div>
    </div>
  )
}

