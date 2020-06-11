import React from "react";
import { Container, Row, Col } from "reactstrap";
import {
  Subtitle,
  Description,
  Title,
  Titlespan2,
} from "../../components/common/title/index";
import Button from "../../components/common/button";
import Image from "../../components/common/image/index";
import AboutImg from "../../public/assets/images/about/about-img.png";
import "./about.scss";

function About() {
  return (
    <section className="about-wrapper gradient-color" id="about">
      <Container>
        <Row>
          <Col md={6}>
            <div className="about-content-block main-title-wrapper">
              <Subtitle
                Class="sitemain-subtitle"
                Name="Nous avons une simple application en ligne"
              />
              <Subtitle Class="site-subtitle2" Name="Simulez votre prêt" />

              <Description
                Class="about-dec about-dec-1"
                Name="Cela ne prend que quelques minutes pour nous fournir vos informations"
              />
              <Subtitle
                Class="site-subtitle2"
                Name="Demandez votre crédit en ligne"
              />
              <Description
                Class="about-dec"
                Name="En utilsant notre application sécurisée, vous pouvez obtenir électroniquement votre contrat s'il est pré-approuvé. La confiance et la sécurité sont notre priorité N°1"
              />
              <Subtitle
                Class="site-subtitle2"
                Name="Obtenez votre financement"
              />
              <Description
                Class="about-dec"
                Name="L'argent peut être déposé directement sur votre compte bancaire dès le jour suivant"
              />
              <Button
                Class="button1 button4 btn"
                Name="Demandez Votre Crédit"
                Title="gradient-color"
                BtnIcon="btn-icon gradient-color1"
              />
            </div>
          </Col>
          <Col sm={6}>
            <div className="about-image">
              <Image Path={AboutImg} Class="about-img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
