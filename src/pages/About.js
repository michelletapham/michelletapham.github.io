import React, { PureComponent } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from "../components/Header";
import AboutPhoto from "../assets/about-photo.jpg"
import { TypeAnimation } from "react-type-animation";


export default class About extends PureComponent {
    render() {
      return (
        <div className="about">
          <Container>
            <Row>
              <Header/>
            </Row>
            <Row className="content">
              <Col lg={5}>
                <img className="about-photo" src={AboutPhoto} alt="Michelle Pham" />
              </Col>
              <Col lg={7}>
                <Row className="bio">
                  <h2>Hello, Michelle here!</h2>
                  <p className="subtext">(brownie points if you understood that reference)</p>
                  <p>
                    Who am I? Well I would say I'm a &nbsp;  
                    <TypeAnimation
                      sequence={[
                        '...coffee enthusiast',
                        1000,
                        '...uw recent grad',
                        1000,
                        '...software engineer',
                        1000,
                        '...amateur photographer',
                        1000,
                        '...good human',
                        1000,
                      ]}
                      speed={50}
                      style={{fontSize: '1em', fontWeight: "bold"}}
                      repeat={Infinity}
                    />
                  </p>
                  <p>
                    After 22 years growing up in Seattle, Washington, I left my hometown and my
                    close friends/family to move down and start over 1,100+ miles south to Los Angeles, California. 
                  </p>
                  <p>
                    I decided to create this website because I wanted to document my life, creative projects, unfiltered thoughts in 
                    a low-pressure environment. If you somehow ended up here ... I see you peeping!
                    As I'm creating this, I will say it's been fun brushing up on some web development as well (shoutout info340). 
                  </p>
                  <p>Cheers,</p>
                  <p>Michelle</p>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
}