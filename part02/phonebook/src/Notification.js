import './Notification.css'

export function Notification({notification, setNotification}) {
  const clear = () => {
    setTimeout(() => {
      setNotification(null)
    }, 3000)
  }

  const handleNotification = () => {
    if (notification === null){
      return (<div className="notification dissabled"></div>)
    }
    if (notification.error) {
      clear()
      return (<div className="notification error">{notification.message}</div>)
    } else {
      clear()
      return (<div className="notification normal">{notification.message}</div>)
    }
  }
  return(
    <div>
      {handleNotification()}
    </div>
  )
}