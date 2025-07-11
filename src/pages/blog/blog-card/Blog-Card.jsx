import React from 'react';
import { Link } from "react-router-dom";

//styles
import './blog-card.scss';

export default function BlogCard({ ImgUrl, Heading, SubHeading, ID }) {

    const headingName = Heading.replace(/ /g, "-");
    const headingLowerCase = headingName.toLowerCase();


    return (
        <div className='blog-card-main'>
            <section className='img-section'>
                <img src={ImgUrl} alt="" />
            </section>
            <section className='bottom-content'>
                <p>
                    <b>{Heading.slice(0, 80)} ...</b>
                    <span>{SubHeading.slice(0, 100)} ...</span>
                </p>
            </section>
            <Link
                className="more-details"
                to={`/blog/${headingLowerCase}`}
                state={{ id: ID }}

            >More Details</Link>
        </div>
    )
}
