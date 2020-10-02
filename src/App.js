import React from "react"
import { Alert, Col, Row } from "react-bootstrap"
import { SubscriptionButtons } from "./components/subscription/Buttons"
import { SubscriptionForm } from "./components/subscription/Form"
import { useSubscription } from "./components/subscription/Provider"
import { Total } from "./components/Total"

function App() {
  const { alert } = useSubscription()
  return (
    <div className="App">
      <div className="container">
        <div className="jumbotron">
          <h1>Subscription ordering app</h1>
          <Alert show={alert} variant="warning">
            Something went wrong :( Please Check Your Input
          </Alert>
          <SubscriptionForm />
          <Row>
            <Col sm={6}>
              <SubscriptionButtons />
            </Col>
            <Col sm={6}>
              <div className="total text-right">
                <Total />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default App
