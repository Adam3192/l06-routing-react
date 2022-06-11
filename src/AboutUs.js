import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

function AboutUs() {
  let navigate = useNavigate()

  return (
    <>
      <h1>About Us</h1>
      <p>Here you can find out more about us.</p>
      <p>
        <Button variant="link" onClick={() => navigate(-1)}>
          Go Back
        </Button>
      </p>
    </>
  )
}

export default AboutUs
