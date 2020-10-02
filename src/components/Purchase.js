import React from "react"
import { Spinner } from "react-bootstrap"
import { useSubscription } from "./subscription/Provider"

export const Purchase = () => {
  const { subscription } = useSubscription()
  console.log(JSON.stringify(subscription))
  return (
    <>
      <h3>Waiting for response from payment system...</h3>
      <Spinner animation="border" className="text-center" />
      <p>(Look at Console to see JSON)</p>
    </>
  )
}
