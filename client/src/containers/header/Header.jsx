import React, { useState } from "react";
import Axios from "axios";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import "./header.css";
import blog01 from "../../assets/blog01.png";
import blog02 from "../../assets/blog02.png";
import blog03 from "../../assets/blog03.png";
import blog04 from "../../assets/blog04.png";
import blog05 from "../../assets/blog05.png";

const Header = () => {
  const BASE_URL = "http://localhost:4000";
  const [data, setData] = useState({
    url: "",
  });
  const [result, setResult] = useState({});
  const [showText, setShowText] = useState(false);

  const onClick = () => setShowText(true);

  const handle = (e) => {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      await Axios.post(BASE_URL, {
        url: data.url,
      }).then((res) => {
        console.log(res.data);
        setResult(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="spd__header-container">
      <div className="spd__header section__padding" id="home">
        <div className="spd__header-content">
          <h1 className="gradient__text">
            Test your website's performance with{" "}
            <strong className="brand-name">Speedbar</strong>
          </h1>
          <p>
            See how your website performs, reveal why it's slow and discover
            optimization opportunities.
          </p>
          <div className="spd__header-content__form">
            <form
              onSubmit={(e) => submit(e)}
              className="spd__header-content__input"
            >
              <input
                onChange={(e) => handle(e)}
                type="url"
                value={data.url}
                id="url"
                name="url"
                placeholder="Enter Your Website URL"
              />
              <button onClick={onClick} type="submit">
                Analyze
              </button>
            </form>
          </div>
          <div className="spd__header-content__people">
            <img src={people} alt="people" />
            <p>1600+ people used Speedbar in last 24 hours.</p>
          </div>
        </div>
        {/* Header Image*/}
        <div className="spd__header-image">
          <img src={ai} alt="ai" />
        </div>
      </div>

      {/* Blog Section */}
      {showText ? (
        <div className="spd__blog section__padding">
          <div className="spd__blog-heading">
            <h1 className="gradient__text">Latest Performance Report For:</h1>
          </div>
          <div className="spd__blog-container">
            <div className="spd__blog-container_groupA">
              <div className="spd__blog-container_article">
                <div className="spd__blog-container_article-image">
                  <img src={blog01} alt="blog" />
                </div>
                <div className="spd__blog-container_article-content">
                  <div>
                    <p>Speedbar Grade:</p>
                  </div>
                  <p>Learn More...</p>
                </div>
              </div>
            </div>
            <div className="spd__blog-container_groupB">
              <div className="spd__blog-container_article">
                <div className="spd__blog-container_article-image">
                  <img src={blog02} alt="blog" />
                </div>
                <div className="spd__blog-container_article-content">
                  <div>
                    <p>First Contentful Paint (FCP):</p>
                    <h3>
                      {result &&
                        result.audits &&
                        result.audits["first-contentful-paint"] &&
                        parseInt(
                          result.audits["first-contentful-paint"].displayValue
                        )}
                      <span> ms</span>
                    </h3>
                  </div>
                  <p>Learn More...</p>
                </div>
              </div>
              <div className="spd__blog-container_article">
                <div className="spd__blog-container_article-image">
                  <img src={blog03} alt="blog" />
                </div>
                <div className="spd__blog-container_article-content">
                  <div>
                    <p>Largest Contentful Paint (LCP):</p>
                    <h3>
                      {result &&
                        result.audits &&
                        result.audits["largest-contentful-paint"] &&
                        parseInt(
                          result.audits["largest-contentful-paint"].displayValue
                        )}
                      <span> ms</span>
                    </h3>
                  </div>
                  <p>Learn More...</p>
                </div>
              </div>
              <div className="spd__blog-container_article">
                <div className="spd__blog-container_article-image">
                  <img src={blog04} alt="blog" />
                </div>
                <div className="spd__blog-container_article-content">
                  <div>
                    <p>Total Blocking Time (TBT):</p>
                    <h3>
                      {result &&
                        result.audits &&
                        result.audits["total-blocking-time"] &&
                        parseInt(
                          result.audits["total-blocking-time"].displayValue
                        )}
                      <span> ms</span>
                    </h3>
                  </div>
                  <p>Learn More...</p>
                </div>
              </div>
              <div className="spd__blog-container_article">
                <div className="spd__blog-container_article-image">
                  <img src={blog05} alt="blog" />
                </div>
                <div className="spd__blog-container_article-content">
                  <div>
                    <p>Content Layout Shift (CLS):</p>
                    <h3>
                      {result &&
                        result.audits &&
                        result.audits["layout-shift-elements"] &&
                        parseInt(
                          result.audits["layout-shift-elements"].displayValue
                        )}
                      <span> ms</span>
                    </h3>
                  </div>
                  <p>Learn More...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Header;

//{result && result.audits && result.audits["largest-contentful-paint"] && parseInt(result.audits["largest-contentful-paint"].displayValue)}

//{console.log(result && result.audits ? Object.keys(result && result.audits): null)}
