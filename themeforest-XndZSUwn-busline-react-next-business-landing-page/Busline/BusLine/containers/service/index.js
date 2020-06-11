import React from "react";
import { Container, Row, Col } from "reactstrap";
import {
  Subtitle,
  Description,
  Title,
  Titlespan2,
} from "../../components/common/title/index";
import Button from "../../components/common/button";
import { Servicedata, Servicedata1 } from "../../data/service/index";
import FontAwesomeIcon from "../../components/common/icon";
import "../service/service.scss";

function Service() {
  return (
    <section className="service-wrapper" id="service">
      <Container>
        <Row>
          <Col lg={5} md={4}>
            <div className="service-content-1 main-title-wrapper">
              <Titlespan2
                Class="sitemain-subtitle"
                Name="Prêts"
                Label="Personnels"
              />
              <Subtitle
                Class="site-subtitle2"
                Name="Pour la Plupart des usagers"
              />
              <Title
                Class="service-title"
                Name="Un processus rapide et transparent"
              />
              <Description
                Class="service-dec"
                Name="Vous avez envie de financer vos projets, vacances, sorties ou loisirs ? Grâce à Al Barid Bank, venez découvrir en quelques clics les prêts personnels les plus adaptés à vos besoins ... C’est la solution pour réaliser les projets qui vous tiennent à cœur sans avoir à attendre des années pour pouvoir économiser assez, ou devoir puiser dans votre épargne."
              />
              <Button
                Class="button1 btn button2 gradient-color"
                Name="Simulez votre prêt"
                BtnIcon="btn-icon"
              />
            </div>
          </Col>
          <Col lg={7} md={8} className="service-block-content">
            <Row>
              <Col sm={6} className="service-block1">
                {Servicedata.map((data, i) => (
                  <div className={`service-${i} service-content`} key={data.id}>
                    <div className="service-icon">
                      <span>
                        <FontAwesomeIcon icon={data.Icon} />
                      </span>
                    </div>
                    <div className="service-content-dec">
                      <Title Class="service-title" Name={data.title} />
                      <Description
                        Class="service-dec-content"
                        Name={data.content}
                      />
                    </div>
                  </div>
                ))}
              </Col>
              <Col sm={6} className="service-block2">
                {Servicedata1.map((data, i) => (
                  <div className={`service-${i} service-content`} key={data.id}>
                    <div className="service-icon">
                      <span>
                        <FontAwesomeIcon icon={data.Icon} />
                      </span>
                    </div>
                    <div className="service-content-dec">
                      <Title Class="service-title" Name={data.title} />
                      <Description
                        Class="service-dec-content"
                        Name={data.content}
                      />
                    </div>
                  </div>
                ))}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Service;
