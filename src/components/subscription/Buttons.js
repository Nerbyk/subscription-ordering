import React, { useEffect } from "react"
import { useSubscription } from "./Provider"

function checkProperties(obj) {
  for (let key in obj) {
    if (obj[key] == null || obj[key] === "") return false
  }
  return true
}

export const SubscriptionButtons = () => {
  const { step, navigation, subscription, setAlert } = useSubscription()
  const { next, previous } = navigation
  const goNext = (e) => {
    // validate presence of input on current step ||
    // validate all input (at the last step)
    if (subscription[step.id]?.title || checkProperties(subscription)) {
      setAlert(false)
      next()
    } else {
      setAlert(true)
      setTimeout(() => setAlert(false), 1500)
    }
  }
  const goPrevious = () => {
    previous()
  }

  if (step.id === "purchase") {
    return null
  }

  return (
    <>
      {step.id !== "type" && (
        <button className="btn btn-primary" onClick={goPrevious}>
          Previous
        </button>
      )}
      <button className="btn btn-primary" onClick={goNext}>
        {step.id !== "submit" ? "Next" : "Purchase"}
      </button>
    </>
  )
}
