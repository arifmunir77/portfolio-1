import { Col, Container, Row } from "react-bootstrap";
import {
  ContactUsBtn,
  FlexBorderDiv,
  FlexDiv,
  LeftDiv,
  RightDiv,
  ServicesHeading,
  ServicesText,
  WorkingLayoutDiv,
  WorkingProcessMainText,
  WorkingProcessText,
  WorkingProcessWrapper,
} from "./element";
import { workProcess } from "assets";
import Card from "react-bootstrap/Card";

function WorkingProcess() {
  const cardData = [
    {
      id: 1,
      header: "Discover",
      text: "Research and analysis are conducted to gain a deeper understanding of the topic or problem in this phase. This may involve conducting surveys, interviews, or gathering data from various sources.",
    },
    {
      id: 2,
      header: "Plan",
      text: `Planning is the next phase of a work process that involves using the insights and information gathered during the discovery phase to develop a clear and actionable plan after testing.`,
    },
    {
      id: 3,
      header: "Execute",
      text: `Execution is the phase of a work process where the plan is put into action. This involves implementing the tasks and strategies that were defined during the planning phase.`,
    },
    {
      id: 4,
      header: "Deliver",
      text: `Delivering is the final phase of a work process, where the completed project or product is delivered to the client or end-user. This phase involves testing of project to ensure that it meets the requirements.`,
    },
  ];
  return (
    <WorkingProcessWrapper id="work-process">
      <Container>
        <FlexDiv>
          <FlexBorderDiv />
          <ServicesHeading> Work Process</ServicesHeading>
        </FlexDiv>
        <ServicesText>Work Process & Life Cycle Of A Project</ServicesText>
        <div className="wrapper">
          <Row>
            <Col xl={4}>
              <LeftDiv>
                <img className="img-fluid working" src={workProcess} />
                <WorkingLayoutDiv>
                  <WorkingProcessMainText>
                    Work Process - <br /> How I Work For <br /> Customers.
                  </WorkingProcessMainText>
                  <ContactUsBtn>Contact Us</ContactUsBtn>
                </WorkingLayoutDiv>
              </LeftDiv>
            </Col>
            <Col xl={8}>
              <RightDiv>
                <Row>
                  {cardData.map((item) => (
                    <Col key={item.id} lg={6}>
                      <Card>
                        <Card.Body>
                          <h4 className="cardNumber">{item.id}.</h4>
                          <Card.Title>{item.header}</Card.Title>
                          <Card.Text>{item.text}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </RightDiv>
            </Col>
          </Row>
        </div>
      </Container>
    </WorkingProcessWrapper>
  );
}

export default WorkingProcess;
