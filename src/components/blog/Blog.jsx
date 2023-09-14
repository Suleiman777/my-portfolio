import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Blog1 from "../../assets/Blog1.webp";
import Blog2 from "../../assets/Blog2.webp";
import Blog3 from "../../assets/Blog1.webp";
import "./blog.css";

const Blog = () => {
  return (
    <section className="blog section" id="blog">
      <h2 className="section__title text-cs">Latest Blog</h2>
      <p className="section__subtitle">
        My <span>Articles And Advice</span>
      </p>

      <div className="blog__container container grid">
        <div className="blog__item card card-two">
          <span className="blog__date text-cs">SEPTEMBER 09, 2023</span>
          <h3 className="blog__title">The Main Things For The Designer</h3>
          <p className="blog__description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
            sequi totam dignissimos deserunt, minus quisquam sed unde. Dolor non
            voluptate assumen.
          </p>

          <a href="" className="link">
            Read More
            <FaArrowRight className="link__icon"></FaArrowRight>
          </a>

          <img src={Blog1} alt="" className="blog__img" />
        </div>

        <div className="blog__item card card-two">
          <span className="blog__date text-cs">SEPTEMBER 09, 2023</span>
          <h3 className="blog__title">The Main Things For The Designer</h3>
          <p className="blog__description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
            sequi totam dignissimos deserunt, minus quisquam sed unde. Dolor non
            voluptate assumen.
          </p>

          <a href="" className="link">
            Read More
            <FaArrowRight className="link__icon"></FaArrowRight>
          </a>

          <img src={Blog2} alt="" className="blog__img" />
        </div>

        <div className="blog__item card card-two">
          <span className="blog__date text-cs">SEPTEMBER 09, 2023</span>
          <h3 className="blog__title">The Main Things For The Designer</h3>
          <p className="blog__description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
            sequi totam dignissimos deserunt, minus quisquam sed unde. Dolor non
            voluptate assumen.
          </p>

          <a href="" className="link">
            Read More
            <FaArrowRight className="link__icon"></FaArrowRight>
          </a>

          <img src={Blog3} alt="" className="blog__img" />
        </div>
      </div>
    </section>
  );
};

export default Blog;
