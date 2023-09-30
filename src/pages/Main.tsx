import {Button, Col, Container, Row} from "react-bootstrap";


export function Main() {
    return (
        <Container className="d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
            <Row className="d-flex justify-content-center align-items-center">
                <Col/>
                <Col md="auto" className="justify-content-center" style={{color: "white"}}>
                    <Button variant="outline-light" className="rounded-5 mx-2">Algorithm</Button>
                    <Button variant="outline-light" className="rounded-5">Java</Button>
                </Col>
                <Col/>
            </Row>
        </Container>
    );
}