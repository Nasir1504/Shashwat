import React, { useRef, useState, useEffect } from 'react';

//styles
import './why-choose.scss';

// data
import { WC_DATA } from './wcData';

//imgs
import HeadingText from '../../../assets/imgs/job-placement/job-placement.png';
import Rect from '../../../assets/imgs/job-placement/rect-bar.png';


export default function WhyChoose() {
    const [isVisible, setIsVisible] = useState(false);
    const WhyChooseRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Only set isVisible if it hasn't been triggered before
                if (WhyChooseRef.current && entry?.isIntersecting) {
                    setIsVisible(true);
                    WhyChooseRef.current = true; // Mark as triggered
                }
            },
            {
                threshold: 0.8, // Trigger when 50% of the target is visible
            }
        );

        const target = WhyChooseRef?.current;
        if (target) {
            observer.observe(target);
        }

        return () => {
            if (target) {
                observer.unobserve(target);
            }
        };
    }, []);

    return (
        <div className="why-choose-main" ref={WhyChooseRef}>
            <div className="heading-section">
                <img src={HeadingText} alt="" />
            </div>
            <div className="bottom-section">
                <div className="rect-bar" >
                    <img src={Rect} alt="" />
                </div>

                <div className="inner-section">
                    {WC_DATA.map((item, i) => {
                        return (
                            <div className="wc-card-container" key={i}>
                                <div className="inner-rect"
                                    style={{
                                        backgroundColor: i % 2 === 0 ? '#2B2E7C' : '#DDDEFF'
                                    }}
                                >
                                    <div className="icon-div"
                                        style={{
                                            backgroundColor: i % 2 === 0 ? '#DDDEFF' : '#2B2E7C'
                                        }}
                                    >
                                        <img src={item.imgURL} alt=""
                                            style={{
                                                transform: !isVisible ? 'translate(-100%)' : 'translate(0%)'
                                            }}
                                        />
                                    </div>
                                    <p
                                        style={{
                                            color: i % 2 === 0 ? '#fff' : '#2B2E7C'
                                        }}
                                    >{item.name}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
