"use client";

import Link from "next/link";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import courses from "../Database/courses.json";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1><hr/>
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2><hr/>
      <Row xs={1} md={5} className="g-4">
        {courses.map((course) => (
          <Col key={course._id} style={{ width: 300 }}>
            <Card>
              <Link href={`/Courses/${course._id}/Home`} className="text-decoration-none text-dark">
                <Card.Img src="/images/reactjs.jpg" height={160} />
                <Card.Body>
                  <Card.Title className="text-nowrap overflow-hidden">{course.name}</Card.Title>
                  <Card.Text className="overflow-hidden" style={{ height: 100 }}>
                    {course.description}
                  </Card.Text>
                  <Button>Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}