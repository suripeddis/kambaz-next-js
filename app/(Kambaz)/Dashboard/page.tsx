"use client";

import Link from "next/link";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2>
      <hr />

      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                href="/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card.Img variant="top" src="/course1.jpeg" width="100%" height={160} />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS1234 React JS
                  </Card.Title>
                  <Card.Text
                    className="wd-dashboard-course-description overflow-hidden"
                    style={{ height: "100px" }}
                  >
                    Full Stack software developer
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                <Card.Img variant="top" src="/course2.jpeg" width="100%" height={160} />
                <Card.Body>
                  <Card.Title className="text-nowrap overflow-hidden">CS2500 Fundamentals</Card.Title>
                  <Card.Text className="overflow-hidden" style={{ height: "100px" }}>
                    Problem solving and program design
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                <Card.Img variant="top" src="/course3.jpeg" width="100%" height={160} />
                <Card.Body>
                  <Card.Title className="text-nowrap overflow-hidden">CS5610 Web Dev</Card.Title>
                  <Card.Text className="overflow-hidden" style={{ height: "100px" }}>
                    Modern web apps with React and Node
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                <Card.Img variant="top" src="/course4.jpeg" width="100%" height={160} />
                <Card.Body>
                  <Card.Title className="text-nowrap overflow-hidden">CS5200 Databases</Card.Title>
                  <Card.Text className="overflow-hidden" style={{ height: "100px" }}>
                    SQL, normalization, and transactions
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                <Card.Img variant="top" src="/course5.jpeg" width="100%" height={160} />
                <Card.Body>
                  <Card.Title className="text-nowrap overflow-hidden">CS5800 Algorithms</Card.Title>
                  <Card.Text className="overflow-hidden" style={{ height: "100px" }}>
                    Greedy, DP, graphs, NP-completeness
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                <Card.Img variant="top" src="/course6.jpeg" width="100%" height={160} />
                <Card.Body>
                  <Card.Title className="text-nowrap overflow-hidden">CS5004 OOD</Card.Title>
                  <Card.Text className="overflow-hidden" style={{ height: "100px" }}>
                    Objects, design patterns, testing
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                <Card.Img variant="top" src="/course7.jpeg" width="100%" height={160} />
                <Card.Body>
                  <Card.Title className="text-nowrap overflow-hidden">CS3000 Discrete</Card.Title>
                  <Card.Text className="overflow-hidden" style={{ height: "100px" }}>
                    Logic, sets, proofs, combinatorics
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
