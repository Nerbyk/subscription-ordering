import React from "react"
import { Col, Form } from "react-bootstrap"
import { useSubscription } from "./subscription/Provider"

export default () => {
  const { subscription, setSubscription } = useSubscription()

  const handleChange = (e) => {
    setSubscription({ ...subscription, [e.target.name]: e.target.value })
  }
  return (
    <>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            name="name"
            onChange={handleChange}
            value={subscription.name}
            required
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridSurname">
          <Form.Label>Surname</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Surname"
            name="surname"
            onChange={handleChange}
            value={subscription.surname}
          />
        </Form.Group>
      </Form.Row>
      <Form.Group controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control
          placeholder="1234 Main St"
          name="address"
          onChange={handleChange}
          value={subscription.address}
        />
      </Form.Group>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control
            name="city"
            onChange={handleChange}
            value={subscription.city}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Control
            as="select"
            name="state"
            onChange={handleChange}
            defaultValue=""
          >
            <option></option>
            <option>Central</option>
            <option>South</option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control
            name="zip"
            onChange={handleChange}
            value={subscription.zip}
          />
        </Form.Group>
      </Form.Row>
    </>
  )
}
