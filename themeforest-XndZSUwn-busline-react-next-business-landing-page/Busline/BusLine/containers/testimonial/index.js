import React from "react";
import { Container } from "reactstrap";
import {
  Subtitle,
  Description,
  Titlespan2,
} from "../../components/common/title/index";
import CarouselSlider from "./testimonial";
import "./testimonial.scss";

function Testimonial() {
  return (
    <section className="testimonial-wrapper gradient-color" id="testimonial">
      <Container>
        <div className="main-title-wrapper">
          <Subtitle Class="site-subtitle gradient-color" Name="témoignage" />
          <Titlespan2
            Class="sitemain-subtitle"
            Name="des clients"
            Label="rétroaction"
          />
          <Description
            Class="site-dec"
            Name="Parce que votre avis nous intéresse"
          />
        </div>
        <CarouselSlider />
      </Container>
    </section>
  );
}

export default Testimonial;
