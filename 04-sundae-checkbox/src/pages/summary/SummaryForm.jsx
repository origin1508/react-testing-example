import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const SummaryForm = () => {
  const [tsCsChecked, setTsCsChecked] = useState(false);

  const handleCheckbox = () => {
    setTsCsChecked((prev) => !prev);
  };

  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          checked={tsCsChecked}
          onClick={handleCheckbox}
        />
        <Form.Label>
          <span>
            I agree to{" "}
            <span style={{ color: "blue" }}>Terms and Conditions</span>
          </span>
        </Form.Label>
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!tsCsChecked}>
        Confirm order
      </Button>
    </Form>
  );
};

export default SummaryForm;
