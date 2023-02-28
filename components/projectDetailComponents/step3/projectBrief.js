import React, { useContext } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import styles from "../Forms.module.css";
import BriefStyle from "./projectBrief.module.css";
import Link from "next/link";
import { formData } from "../../context/Context";

const ProjectBrief = () => {
  const { stepOneData, personalInfo, t_duration } = useContext(formData);

  return (
    <>
      <section className={`${BriefStyle["mainSection"]}`}>
        <h6 className={`${BriefStyle["mainTitle"]}`}>Proect Brief</h6>
        <Form>
          <Row>
            <Col lg={6} xs={12} md={6} className={`${styles["formFieldsCol"]}`}>
              <Form.Group className={`${"mb-3"}`} controlId="formGroupName">
                <Form.Label className={`${styles["formLabel"]} ${"mb-1"}`}>
                  Your business name
                </Form.Label>
                <Form.Control
                  size="lg"
                  className={`${BriefStyle["readOnlyText"]} ${"mb-2"}`}
                  type="text"
                  readOnly
                  plaintext
                  defaultValue={stepOneData.businessName}
                />
              </Form.Group>
            </Col>
            <Col lg={6} xs={12} md={6} className={`${styles["formFieldsCol"]}`}>
              <Form.Group className={`${"mb-3"}`} controlId="formGroupEmail">
                <Form.Label className={`${styles["formLabel"]} ${"mb-1"}`}>
                  Your industry
                </Form.Label>
                <Form.Control
                  size="lg"
                  className={`${BriefStyle["readOnlyText"]} ${"mb-2"}`}
                  type="text"
                  readOnly
                  plaintext
                  defaultValue={stepOneData.industry}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg={6} xs={12} md={6} className={`${styles["formFieldsCol"]}`}>
              <Form.Group className={`${"mb-3"}`} controlId="formGroupName">
                <Form.Label className={`${styles["formLabel"]} ${"mb-1"}`}>
                  Your Logo type
                </Form.Label>
                <Form.Control
                  size="lg"
                  className={`${BriefStyle["readOnlyText"]} ${"mb-2"}`}
                  type="text"
                  readOnly
                  plaintext
                  defaultValue={stepOneData.logoType}
                />
              </Form.Group>
            </Col>
            <Col lg={6} xs={12} md={6} className={`${styles["formFieldsCol"]}`}>
              <Form.Group className={`${"mb-3"}`} controlId="formGroupEmail">
                <Form.Label className={`${styles["formLabel"]} ${"mb-1"}`}>
                  Your selected colors
                </Form.Label>
                <Form.Control
                  size="lg"
                  className={`${BriefStyle["readOnlyText"]} ${"mb-2"}`}
                  type="text"
                  readOnly
                  plaintext
                  defaultValue={stepOneData.colors}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg={6} xs={12} md={6} className={`${styles["formFieldsCol"]}`}>
              <Form.Group className={`${"mb-3"}`} controlId="formGroupName">
                <Form.Label className={`${styles["formLabel"]} ${"mb-1"}`}>
                  Time duration
                </Form.Label>
                <Form.Control
                  size="lg"
                  className={`${BriefStyle["readOnlyText"]} ${"mb-2"}`}
                  type="text"
                  readOnly
                  plaintext
                  defaultValue={t_duration}
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </section>

      <section
        className={`${BriefStyle["briefMainSection"]} ${BriefStyle["mainSection"]}`}
      >
        <h6 className={`${BriefStyle["mainTitle"]}`}>Personal Information</h6>
        <Form>
          <Row>
            <Col lg={6} xs={12} md={6} className={`${styles["formFieldsCol"]}`}>
              <Form.Group className={`${"mb-3"}`} controlId="formGroupName">
                <Form.Label className={`${styles["formLabel"]} ${"mb-1"}`}>
                  Your name
                </Form.Label>
                <Form.Control
                  size="lg"
                  className={`${BriefStyle["readOnlyText"]} ${"mb-2"}`}
                  type="text"
                  readOnly
                  plaintext
                  defaultValue={personalInfo.name}
                />
              </Form.Group>
            </Col>
            <Col lg={6} xs={12} md={6} className={`${styles["formFieldsCol"]}`}>
              <Form.Group className={`${"mb-3"}`} controlId="formGroupEmail">
                <Form.Label className={`${styles["formLabel"]} ${"mb-1"}`}>
                  Email
                </Form.Label>
                <Form.Control
                  size="lg"
                  className={`${BriefStyle["readOnlyText"]} ${"mb-2"}`}
                  type="text"
                  readOnly
                  plaintext
                  defaultValue={personalInfo.email}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg={6} xs={12} md={6} className={`${styles["formFieldsCol"]}`}>
              <Form.Group className={`${"mb-3"}`} controlId="formGroupName">
                <Form.Label className={`${styles["formLabel"]} ${"mb-1"}`}>
                  Phone Number
                </Form.Label>
                <Form.Control
                  size="lg"
                  className={`${BriefStyle["readOnlyText"]} ${"mb-2"}`}
                  type="text"
                  readOnly
                  plaintext
                  defaultValue={personalInfo.phoneNumber}
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </section>

      <section className={`${BriefStyle["briefMainSection"]}`}>
        <h6 className={`${BriefStyle["mainTitle"]} ${"mb-4"}`}>
          Payment Method
        </h6>
        <Form>
          <Row>
            <Col lg={6} xs={12} md={6} className={`${styles["formFieldsCol"]}`}>
              <Form.Group className={`${"mb-3"}`} controlId="formGroupName">
                <Form.Label className={`${styles["formLabel"]} ${"mb-1"}`}>
                  Your Choise
                </Form.Label>
                <Form.Control
                  size="lg"
                  className={`${BriefStyle["readOnlyText"]} ${"mb-2"}`}
                  type="text"
                  readOnly
                  plaintext
                  defaultValue={personalInfo.isSelect}
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </section>
    </>
  );
};

export default ProjectBrief;
