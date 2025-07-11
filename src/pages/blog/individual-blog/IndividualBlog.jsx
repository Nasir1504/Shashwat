import React from "react";
import { useLocation } from "react-router-dom";

//styles
import "./individual-blog.scss";

//data
import { BLOG_DATA } from "../blogData";

import BlogCard from "../blog-card/Blog-Card";
import { Footer } from "../../../components/Footer/Footer";
import { FooterMob } from "../../../components/Footer/FooterMob";

export default function IndividualBlog({ query }) {
  window.scrollTo(0, 0);

  const { state } = useLocation();
  const ID = state.id;

  return (
    <div className="individual-blog-main">
      <a className="link" href="/blog">
        <b>&#10229;</b>&nbsp;<span>Back</span>
      </a>

      <div className="cover-img-div">
        {BLOG_DATA.map((item, i) => {
          return (
            <img
              className="cover-img"
              alt=""
              src={item.coverImg}
              style={{
                display: ID !== i && "none",
              }}
            />
          );
        })}
      </div>

      <div className="blog-contents">
        <div className="left-content">
          {BLOG_DATA?.map((item, i) => {
            const Subtitle = item.subtitle;
            const Checklist = item.checklist;
            const AdditionalNotes = item.additionalNotes?.[0];
            const Support = item.support?.[0];

            return (
              <div
                className="inner-section"
                style={{ display: i !== ID ? "none" : "" }}
                key={i}
              >
                <h2>{item.title}</h2>

                {Subtitle?.map((item, i) => {
                  return <h3>{item}</h3>;
                })}
                {Checklist.map((item, i) => {
                  const Requirements = item.requirements;
                  const Description = item.description;

                  return (
                    <div className="checklist-main" key={i}>
                      <b>{item.title}</b>

                      {Description && (
                        <p className="description">{Description}</p>
                      )}
                      {Requirements?.map((req, i) => {
                        if (typeof req === "string") {
                          return <p key={i}>• {req}</p>;
                        }

                        if (
                          typeof req === "object" &&
                          req.type &&
                          Array.isArray(req.details)
                        ) {
                          return (
                            <div key={i} className="checklist-details">
                              <p>
                                <strong>{req.type}:</strong>
                              </p>
                              <ul>
                                {req.details.map((detail, j) => (
                                  <li key={j}>{detail}</li>
                                ))}
                              </ul>
                            </div>
                          );
                        }

                        return null; // fallback in case the structure is unexpected
                      })}
                    </div>
                  );
                })}
                {AdditionalNotes && (
                  <div className="additional-note-main">
                    {AdditionalNotes.queries && (
                      <p>
                        <strong>{AdditionalNotes.queries}</strong>
                      </p>
                    )}
                    {AdditionalNotes.summary && (
                      <p>{AdditionalNotes.summary}</p>
                    )}
                    {AdditionalNotes.services && (
                      <p>
                        <strong>{AdditionalNotes.services}</strong>
                      </p>
                    )}

                    {Array.isArray(AdditionalNotes.notes) && (
                      <ul>
                        {AdditionalNotes.notes?.map((line, i) => (
                          <li key={i}>• {line}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
                {Support && (
                  <div className="support-section">
                    {Support.queries && (
                      <p>
                        <strong>{Support.queries}</strong>
                      </p>
                    )}
                    {Support.description && <p>{Support.description}</p>}
                    {Support.services && (
                      <ul>
                        {Support.services.map((service, i) => (
                          <li key={i}>• {service}</li>
                        ))}
                      </ul>
                    )}
                    {Support.note && <p>{Support.note}</p>}
                  </div>
                )}
              </div>
            );
          })}

          <div className="bottom-content">
            <p>Blog related to your interest.</p>
          </div>
        </div>

        <div className="right-content">
          <form className="cbInp">
            <input type="text" placeholder="Full Name" />
            <div className="contactMail">
              <input type="number" placeholder="Contact Number" />
              <input type="email" placeholder="Mail ID" />
            </div>
            <textarea
              name="message"
              id=""
              rows={4}
              placeholder="Message"
            ></textarea>
            <button type="submit" className="submitButton">
              Submit
            </button>
          </form>
        </div>
      </div>

      {!query ? (
        <div
          className="space"
          style={{
            height: "10vh",
          }}
        />
      ) : (
        <div
          className="space"
          style={{
            height: "2vh",
          }}
        />
      )}

{ query &&
      <div className="card-container">
        {BLOG_DATA
          .filter((item, i) => i !== ID) 
          .slice(0, 2) // Take only the first two from the filtered list
          .map((item, i) => (
            <BlogCard
              key={item.title}
              ImgUrl={item.blogImg}
              Heading={item.title}
              SubHeading={item.subtitle[0]}
              ID={BLOG_DATA.indexOf(item)}  
            />
          ))}
      </div>
}
      {!query ? <Footer /> : <FooterMob />}
    </div>
  );
}
