"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Row, Col, Button, ListGroup, ListGroupItem, InputGroup, FormControl } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import { BsGripVertical, BsThreeDotsVertical } from "react-icons/bs";
import GreenCheckmark from "../Modules/GreenCheckmark";

export default function AssignmentsPage() {
  const { cid } = useParams() as { cid: string };

  return (
    <div id="wd-assignments" className="p-2">
      <div className="d-flex align-items-center mb-3">
        <div className="flex-fill">
          <InputGroup>
            <InputGroup.Text><BiSearch /></InputGroup.Text>
            <FormControl placeholder="Search for Assignment" />
          </InputGroup>
        </div>
        <div className="ms-2">
          <Button variant="secondary" className="me-2">
            <FaPlus className="me-1" /> Group
          </Button>
          <Button variant="danger">
            <FaPlus className="me-1" /> Assignment
          </Button>
        </div>
      </div>

      <Row>
        <Col md={12}>
          <div className="fw-semibold text-secondary mb-2">
            ASSIGNMENTS <span className="float-end text-muted">40% of Total</span>
          </div>

          <ListGroup className="rounded-0">
            <ListGroupItem className="border-gray p-3">
              <div className="d-flex align-items-start">
                <BsGripVertical className="me-2 fs-3 text-secondary" />
                <div className="flex-fill">
                  <Link href={`/Courses/${cid}/Assignments/A1/Edit`} className="fw-semibold text-decoration-none text-dark">
                    A1
                  </Link>
                  <div className="text-muted small">
                    Multiple Modules &nbsp;|&nbsp; Not available until May 6 at 12:00am &nbsp;|&nbsp; Due May 13 at 11:59pm &nbsp;|&nbsp; 100 pts
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <GreenCheckmark />
                  <BsThreeDotsVertical className="fs-5 ms-2" />
                </div>
              </div>
            </ListGroupItem>

            <ListGroupItem className="border-gray p-3">
              <div className="d-flex align-items-start">
                <BsGripVertical className="me-2 fs-3 text-secondary" />
                <div className="flex-fill">
                  <Link href={`/Courses/${cid}/Assignments/A2/Edit`} className="fw-semibold text-decoration-none text-dark">
                    A2
                  </Link>
                  <div className="text-muted small">
                    Multiple Modules &nbsp;|&nbsp; Not available until May 13 at 12:00am &nbsp;|&nbsp; Due May 20 at 11:59pm &nbsp;|&nbsp; 100 pts
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <GreenCheckmark />
                  <BsThreeDotsVertical className="fs-5 ms-2" />
                </div>
              </div>
            </ListGroupItem>

            <ListGroupItem className="border-gray p-3">
              <div className="d-flex align-items-start">
                <BsGripVertical className="me-2 fs-3 text-secondary" />
                <div className="flex-fill">
                  <Link href={`/Courses/${cid}/Assignments/A3/Edit`} className="fw-semibold text-decoration-none text-dark">
                    A3
                  </Link>
                  <div className="text-muted small">
                    Multiple Modules &nbsp;|&nbsp; Not available until May 20 at 12:00am &nbsp;|&nbsp; Due May 27 at 11:59pm &nbsp;|&nbsp; 100 pts
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <GreenCheckmark />
                  <BsThreeDotsVertical className="fs-5 ms-2" />
                </div>
              </div>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>

      <style jsx global>{`
        #wd-assignments .list-group-item {
          --bs-list-group-border-color: gray;
          border-left: 3px solid green !important;
        }
      `}</style>
    </div>
  );
}
