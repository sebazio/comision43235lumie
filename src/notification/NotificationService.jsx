import { useState, createContext, useContext } from 'react'

const Notification = ({ type, text}) => {
    const notifiactionStyle = {
      position: 'absolute',
      top: 100,
      right: 50,
      backgroundColor: type === 'success' ? 'green' : 'red',
      color: 'white',
      padding: '10px 20px 10px 20px',
      borderRadius: 10
    }
  
    // if(!text) return

    return (
      <div style={notifiactionStyle}>
        {text}
      </div>
    )
  }

const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {
    const [notificationData, setNotificationData] = useState({
        type: 'success',
        text: ''
    })

    const setNotification = (type, text, time = 2) => {
        setNotificationData({ type, text})

        setTimeout(() => {
            setNotificationData({ type, text: ''})
        }, time * 1000)
    }

    return (
        <NotificationContext.Provider value={{ setNotification }}>
            {notificationData.text && <Notification type={notificationData.type} text={notificationData.text}/>}
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    return useContext(NotificationContext)
}