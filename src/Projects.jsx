import './Projects.css';  
import logo from '../my_imports/logo1.png';  
import cardImage from '../my_imports/Untitled design.png';  
import projectImage1 from '../my_imports/267784314_121731433668570_3635513272324133705_n.jpg';  
import projectImage2 from '../my_imports/mx.jpg';  
import additionalImage1 from '../my_imports/8986d9e0-3eb7-4e89-92be-784e9dd405ae.avif';  
import additionalImage2 from '../my_imports/image-32-1024x526.png';  
import additionalImage3 from '../my_imports/1342500347.webp';  

import Container from 'react-bootstrap/Container';  
import Nav from 'react-bootstrap/Nav';  
import Navbar from 'react-bootstrap/Navbar';  
import { Link } from 'react-router-dom';  
import Card from 'react-bootstrap/Card';  
import Row from 'react-bootstrap/Row';  
import Col from 'react-bootstrap/Col';  
import Button from 'react-bootstrap/Button'; 
import Accordion from 'react-bootstrap/Accordion';

function Projects() {  
  const projects = [  
    {  
      title: 'Parang',  
      description: 'A psychological thriller short film that mends human greed and pandemic.',  
      image: projectImage1,  
      link: 'https://www.facebook.com/107345468440500/videos/271847461673590',  
    },  
    {  
      title: 'Ms. Gay Pamukid Stage Cover',  
      description: 'A promotional graphic for "Mx. Gay Pamukid 24," showcasing vibrant colors and flashy elements typical of a pageant.',  
      image: projectImage2,  
      link: 'https://www.facebook.com/photo.php?fbid=852117187044665&set=pb.100067391754786.-2207520000&type=3',  
    },  
    {  
      title: 'On What Makes a Good Design',  
      description: 'Good design balances form and function, engaging users through intuitive navigation and appealing aesthetics.',  
      image: cardImage,  
      link: 'https://www.example.com',  
    },  
  ];  

  return (  
    <Container className="padding">  
      <Container className="bluebos" style={{ width: '100%', maxWidth: '1200px' }}>  
        <Navbar expand="lg" style={{ backgroundColor: 'transparent', color: 'white' }} data-bs-theme="dark">  
          <Container>  
            <Navbar.Brand as={Link} to="/projects">Projects</Navbar.Brand>  
            <img src={logo} alt="Logo" className="logo" style={{ position: 'absolute', top: '15px', right: '20px', width: '30px', height: '30px'}}/>  
            <Navbar.Toggle aria-controls="basic-navbar-nav" />  
            <Navbar.Collapse id="basic-navbar-nav">  
              <Nav className="me-auto">  
                <Nav.Link as={Link} to="/">My Profile</Nav.Link>   
                <Nav.Link as={Link} to="/home">About</Nav.Link>  
                <Nav.Link as={Link} to="/background">Background</Nav.Link>    
                <Nav.Link as={Link} to="/services">Services</Nav.Link>  
              </Nav>  
            </Navbar.Collapse>  
          </Container>  
        </Navbar>  
        <Row className='titlee'>  
          <p id='edbg'>Pro <span className='yell'>Jects</span></p>  
        </Row>  
        <p id='edbgd'>Gra <span className='yelld'>phics</span></p>  
        <Row className="mt-4">  
          {projects.map((project, index) => (  
            <Col key={index} md={4} className="mb-4">  
              <Card>  
                <Card.Img variant="top" src={project.image} />  
                <Card.Body>  
                  <Card.Title>{project.title}</Card.Title>  
                  <Card.Text>{project.description}</Card.Text>  
                  <Button variant="primary" href={project.link} target="_blank">View Project</Button>  
                </Card.Body>  
              </Card>
            </Col>  
          ))}  
          {/* Additional project cards */}  
          <Col md={3} className="mb-4">  
            <Card className="project-card">  
              <Card.Img variant="top" src={additionalImage1} />  
              <Card.Body>  
                <Card.Title>Epic Email Templates Bundle</Card.Title>  
              </Card.Body>  
            </Card>  
          </Col>  
          <Col md={3} className="mb-4">  
            <Card className="project-card">  
              <Card.Img variant="top" src={additionalImage2} />  
              <Card.Body>  
                <Card.Title>Magezon</Card.Title>  
              </Card.Body>  
            </Card>  
          </Col>  
          <Col md={3} className="mb-4">  
            <Card className="project-card">  
              <Card.Img variant="top" src={additionalImage3} />  
              <Card.Body>  
                <Card.Title>Virtual Reality Experience</Card.Title>  
              </Card.Body>  
            </Card>  
          </Col>  
        </Row>  
        <Accordion className="mt-4">  
          <Accordion.Item eventKey="1">  
            <Accordion.Header>Magezon</Accordion.Header>  
            <Accordion.Body>  
              The new page builder feature on Magezon simplifies the design process for developers and designers alike. Users can expect functionalities such as drag-and-drop editing, pre-made templates, and customizable layouts, which allow for dynamic website creation without extensive coding knowledge. The platform is dedicated to enhancing user experience with comprehensive support and resources.  
            </Accordion.Body>  
          </Accordion.Item>  
          <Accordion.Item eventKey="2">  
            <Accordion.Header>BestPortfolioWebsiteTemplates.com</Accordion.Header>  
            <Accordion.Body>  
              This site provides a variety of portfolio templates tailored for creatives, including photographers and digital designers. Templates are visually appealing and designed for easy customization, helping users showcase their work effectively and professionally.  
            </Accordion.Body>  
          </Accordion.Item>  
          <Accordion.Item eventKey="3">  
            <Accordion.Header>EpicEmailTemplatesBundle.com</Accordion.Header>  
            <Accordion.Body>  
              Similar to Magezon, this site features versatile email templates that cater to various marketing strategies. Users can preview templates and select options that fit their branding, making it easy to create impactful email content.  
            </Accordion.Body>  
          </Accordion.Item>  
        </Accordion>  
      </Container>  
    </Container>  
  );  
}  

export default Projects; 
