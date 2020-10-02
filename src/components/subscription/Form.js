import React from "react"

import PersonalInfo from "../PersonalInfo"
import Selection from "../Selection"
import { Submit } from "../Submit"
import { subTypes, subLengths } from "../../data/subscription-data.json"
import { useSubscription } from "./Provider"
import { Purchase } from "../Purchase"

export const SubscriptionForm = () => {
  const { step } = useSubscription()
  const { id } = step
  switch (id) {
    case "type":
      return <Selection options={subTypes} selectTitle="type" />
    case "length":
      return <Selection options={subLengths} selectTitle="length" />
    case "personalInfo":
      return <PersonalInfo />
    case "submit":
      return <Submit />
    case "purchase":
      return <Purchase />
    default:
      return null
  }
}

// export default SubscriptionForm
