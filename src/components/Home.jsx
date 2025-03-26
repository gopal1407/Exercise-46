import { Container, Image, Button, Card } from 'react-bootstrap';
import welcomeImage from '../assets/welcome-image.jpg'; // ✅ Step 1: Import image

const Home = () => {
  return (
    <div className="bg-dark text-light p-4 border shadow-sm min-vh-100">
      <Container className="text-center">

        {/* ✅ Step 2: Responsive Image */}
        <Image
          src={welcomeImage}
          fluid // 🔁 Scales with screen size
          rounded // 🟦 Rounded corners
          alt="Welcome"
          className="mb-4"
        />

        {/* ✅ Step 3: Welcome Message */}
        <h2 className="mb-3">Welcome to the Comic Book Library</h2>
        <p className="lead mb-4">
          Discover epic stories and legendary heroes in our curated collection.
        </p>

        {/* ✅ CTA Button */}
        <Button variant="primary" size="lg" className="shadow mb-5">
          Shop Now
        </Button>

        {/* ✅ Featured Card */}
        <Card className="mt-4 text-start border shadow">
          <Card.Body>
            <Card.Title>🌟 Featured Comic</Card.Title>
            <Card.Text>
              Explore our featured pick of the month — a fan-favorite Marvel adventure you won’t want to miss!
            </Card.Text>
            <Button variant="outline-light">Learn More</Button>
          </Card.Body>
        </Card>

      </Container>
    </div>
  );
};

export default Home;
