import React from "react"
import { Col, Form } from "react-bootstrap"
import { useSubscription } from "./subscription/Provider"

export default ({ options, selectTitle }) => {
  const { subscription, setSubscription } = useSubscription()

  const handleTypeSelection = (e) => {
    const { name, value, id } = e.target
    setSubscription((prevState) => ({
      ...prevState,
      [name]: { title: value, value: id },
    }))
    console.log(subscription)
  }

  return (
    <>
      <Form.Label as="legend">Select subscription {selectTitle}</Form.Label>
      <Col sm={15}>
        {options.map((option, id) => (
          <Form.Check
            type="radio"
            label={option.title}
            key={id}
            value={option.title}
            name={selectTitle}
            id={option.value}
            onChange={handleTypeSelection}
            checked={subscription[selectTitle].title === option.title}
          />
        ))}
      </Col>
    </>
  )
}
