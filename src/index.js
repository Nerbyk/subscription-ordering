import React from "react"
import { render } from "react-dom"
import "./App.scss"
import App from "./App"
import { SubscriptionProvider } from "./components/subscription/Provider"

render(
  <SubscriptionProvider>
    <App />
  </SubscriptionProvider>,
  document.getElementById("root")
)
