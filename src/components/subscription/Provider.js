import React, { createContext, useState, useContext } from "react"
import { useStep } from "react-hooks-helper"

const steps = [
  { id: "type" },
  { id: "length" },
  { id: "personalInfo" },
  { id: "submit" },
  { id: "purchase" },
]

const SubscriptionContext = createContext()
export const useSubscription = () => useContext(SubscriptionContext)

export const SubscriptionProvider = ({ children }) => {
  const [subscription, setSubscription] = useState({
    type: { title: null, value: null },
    length: { title: null, value: null },
    name: "",
    surname: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  })
  const { step, navigation } = useStep({ initialStep: 0, steps })
  const [alert, setAlert] = useState(false)

  return (
    <SubscriptionContext.Provider
      value={{
        subscription,
        setSubscription,
        step,
        navigation,
        alert,
        setAlert,
      }}
    >
      {children}
    </SubscriptionContext.Provider>
  )
}
