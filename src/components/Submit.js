import React from "react"
import { Accordion, Card, Button } from "react-bootstrap"
import { useSubscription } from "./subscription/Provider"
import { Total } from "./Total"

export const Submit = () => {
  const { subscription } = useSubscription()
  return (
    <>
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Subscription Type(Click me!)
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <h2>{subscription.type.title}</h2>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Subscription Length(Click me!)
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <h2>{subscription.length.title}</h2>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
              Personal Information(Click me!)
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <ul>
                <li>
                  {" "}
                  <span>Name:</span>
                  {subscription.name}
                </li>
                <li>
                  {" "}
                  <span>Surname:</span>
                  {subscription.surname}
                </li>
                <li>
                  {" "}
                  <span>Address:</span>
                  {subscription.address}
                </li>
                <li>
                  {" "}
                  <span>City:</span>
                  {subscription.city}
                </li>
                <li>
                  {" "}
                  <span>State:</span>
                  {subscription.state}
                </li>
                <li>
                  {" "}
                  <span>ZIP:</span>
                  {subscription.zip}
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="3">
              Total(Click me!)
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              <Total />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </>
  )
}
