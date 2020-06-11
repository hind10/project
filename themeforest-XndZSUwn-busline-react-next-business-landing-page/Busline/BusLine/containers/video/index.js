import React from "react";
import { Container } from "reactstrap";
import {
  Subtitle,
  Description,
  Titlespan2,
} from "../../components/common/title/index";
import FontAwesomeIcon from "../../components/common/icon";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import "./video.scss";

function Video() {
  return (
    <section className="video-wrapper" id="video">
      <div className="gradient-color overlay"></div>
      <Container>
        <div className="video-content-block main-title-wrapper">
          <Titlespan2
            Class="sitemain-subtitle"
            Name="Notre Présentation"
            Label="en Vidéo."
          />
          <Subtitle Class="site-subtitle2" Name="About Us" />

          <div className="video-btn">
            <span>
              <FontAwesomeIcon icon={faCaretRight} />
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Video;
