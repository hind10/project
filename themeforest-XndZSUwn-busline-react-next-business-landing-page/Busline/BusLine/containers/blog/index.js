import React from "react";
import { Container, Row, Col } from "reactstrap";
import {
  Subtitle,
  Description,
  Title,
  Titlespan2,
} from "../../components/common/title/index";
import BlogData from "../../data/blog/index";
import FontAwesomeIcon from "../../components/common/icon";
import "./blog.scss";

function Blog() {
  return (
    <section className="blog-wrapper" id="blog">
      <Container>
        <div className="main-title-wrapper">
          <Subtitle Class="site-subtitle" Name="Notre Mission Principale" />
          <Titlespan2
            Class="sitemain-subtitle"
            Name="Est de servir vos"
            Label="Intérêts"
          />

          <Description
            Class="site-dec"
            Name="Notre mission est d'offrir des services financiers de qualité qui répondent aux besoins de nos clients et de notre zone de service."
          />
        </div>
        <Row>
          {BlogData.map((data, i) => (
            <Col lg={4} sm={6} key={data.id} className={`blog-${i}`}>
              <div className="blog-content">
                <div className="blog-first-block">
                  <img src={data.img} alt="" title="" />
                </div>
                <div className="blog-second-block">
                  <div className="blog-left-content">
                    <div className="blog-icon">
                      <span>
                        <FontAwesomeIcon icon={data.Icon} />
                      </span>
                    </div>
                  </div>
                  <div className="blog-right-content">
                    <Title Class="blog-title" Name={data.title} />
                    <Description Class="blog-dec" Name={data.content} />
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Blog;
