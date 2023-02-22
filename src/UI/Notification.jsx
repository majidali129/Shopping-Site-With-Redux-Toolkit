import React from 'react'
import classes from './Notification.module.css'

const Notification = (props) => {
    let specialClasses = ""
    if(props.status === 'error'){
        specialClasses = classes.error;
    }else if(props.status === 'success'){
        specialClasses = classes.success;
    }

    const cssClasses = `${classes.notification} ${specialClasses}`
  return (
    <div className={cssClasses}>
        <span className={classes.status}>{props.title}</span>
        <span className={classes.message}>{props.message}</span>
    </div>
  )
}

export default Notification