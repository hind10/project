import React from "react";
import { Container, Row, Col } from "reactstrap";
import {
  Subtitle,
  Description,
  Titlespan2,
  Title,
} from "../../components/common/title/index";
import Image from "../../components/common/image/index";
import Skills_img from "../../public/assets/images/skills/skills-img.png";
import Progressbar from "./progressbar";
import "./skills.scss";
import "../../public/assets/scss/variable.scss";

function Skills() {
  return (
    <section className="skills-wrapper" id="skills">
      <Container>
        <Row>
          <Col md={6} sm={0}>
            <div className="skills-image">
              <Image Path={Skills_img} Class="logo-img" />
            </div>
          </Col>
          <Col md={6} sm={12}>
            <div className="skills-content-block main-title-wrapper">
              <Titlespan2
                Class="sitemain-subtitle"
                Name="Nous menons  "
                Label="de l'Avant"
              />
              <Subtitle Class="site-subtitle2" Name="Ce que nous faisons" />

              <Description
                Class="skills-dec"
                Name="Al Barid Bank, filiale de Barid Al-Maghrib, a été lancée le 8 juin 2010, pour être au service du plus grand nombre de marocains.
                                Héritière de l’activité des services financiers du groupe Barid Al-Maghrib, Al Barid Bank s’appuie sur un savoir-faire reconnu. En effet, l’exercice des services financiers par Barid Al-Maghrib remonte à 1926, année de création du compte chèque postal (CCP)"
              />
              <div className="progress-outer-block">
                <Title
                  Class="progress-title"
                  Name="Notre meilleure compétence"
                />
                <div className="progressbar-wrapper-block">
                  <div className="progressbar-block">
                    <Progressbar
                      Class="progressbar1"
                      Percenteg="96"
                      ProgressTitle="Stratégies"
                      ProgressClass="progressbar-title"
                    />
                    <Progressbar
                      Class="progressbar2"
                      Percenteg="88"
                      ProgressTitle="Planning"
                      ProgressClass="progressbar-title"
                    />
                    <Progressbar
                      Class="progressbar3"
                      Percenteg="90"
                      ProgressTitle="Service Client"
                      ProgressClass="progressbar-title"
                    />
                    <Progressbar
                      Class="progressbar4"
                      Percenteg="94"
                      ProgressTitle="Finance"
                      ProgressClass="progressbar-title"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
