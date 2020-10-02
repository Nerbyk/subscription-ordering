import React from "react"
import { useSubscription } from "./subscription/Provider"

function getTotalPrice(type, months = 1, discount = 1) {
  const oneMonthPrice = parseInt(type)
  const totalMonth = parseInt(months)
  return (
    oneMonthPrice * totalMonth - (totalMonth * oneMonthPrice * discount) / 100
  )
}

export const Total = () => {
  const { subscription } = useSubscription()

  const type = subscription.type
  const length = subscription.length

  if (length.value || length.value == 0) {
    const months = parseInt(length.title.split(" ")[0])
    var total = getTotalPrice(type.value, months, length.value)
  }

  return (
    <>
      <h3>Total:</h3>
      <p>
        <b>Subscription type: </b> <br></br>
        {type.title && `${type.title} - (${type.value}$ per month)`}
      </p>

      <p>
        <b>Subscription length:</b>
        <br></br> {length.title && length.title}
      </p>

      <p>
        <b>Total Price:</b> {total && total + "$"}
      </p>
    </>
  )
}
