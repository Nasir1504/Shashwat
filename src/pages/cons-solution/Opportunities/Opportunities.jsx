import React, { useState } from 'react';

//styles
import './opportunities.scss';

//data
import { OPPORTUNITIES_DATA } from './opportunitiesData';
//imgs

import BulletPoint from '../../../assets/imgs/job-placement/bullet-point.png';
import Icon from '../../../assets/imgs/consultancy-solution/icon.png';

export default function Opportunities({ progress, query }) {


    return (
        <div className="opportunities-main">
            <section className="top-section">
                <h3>
                    Diverse Ausbildung Opportunities
                    <span className="img-span"
                        style={{
                            backgroundImage: `url(${Icon})`
                        }}
                    />
                </h3>
                <p>
                    Choose a field that suits your interests and career goals from over 300+ Ausbildung programs, including:
                </p>
            </section>

            {/* --------------------------------------------- */}
            <section className="bottom-section">
                <div className="ellipse1">
                    <div className="inner-ellipse" />
                </div>
                <div className="ellipse2">
                    <div className="inner-ellipse" />
                </div>

                {!query ?
                    < div className="card-slider">
                        <div className="slides"
                            style={{
                                transform: progress.Progress > 0.2 && `translate(-${Math.min(30, (Math.max(0, progress.Progress * 80)))}%)`
                                // transform: 'translate(-35%)'

                            }}
                        >

                            {
                                OPPORTUNITIES_DATA.map((item, i) => {

                                    return (
                                        <COCard
                                            key={i}
                                            ID={i}
                                            ITEM={item}
                                            query={query}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                    :
                    <div className="card-slider">
                        <div className="slides"
                            style={{
                                transform: progress.Progress > 0.2 && `translateY(-${Math.min(55, (Math.max(0, progress.Progress * 80)))}%)`
                                // transform: 'translateY(-55%)'

                            }}
                        >

                            {
                                OPPORTUNITIES_DATA.map((item, i) => {

                                    return (
                                        <COCard
                                            key={i}
                                            ID={i}
                                            ITEM={item}
                                            query={query}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>

                }
            </section >

        </div >
    )
}



const COCard = ({ ID, ITEM, query }) => {
    const [cardID, setCardID] = useState(0);

    const formattedNumber = (ID + 1).toString().padStart(2, '0');


    return (
        <div className={!query ? "co-card-main" : "co-card-main-mobile"}
            onMouseOver={() => setCardID(ID + 1)}
            onMouseOut={() => setCardID(0)}

            style={{
                backgroundColor: ID % 2 === 0 ? '#2B2E7C' : '#DDDEFF'
            }}

        >
            <div className="heading-section">
                <img src={ITEM.IconImg} alt="" className="icon-img"
                    style={{
                        transform: cardID === ID + 1 ? 'translateY(-10%)' : 'translateY(0%)'
                    }}
                />
                <img src={ITEM.IconImg2} alt="" className="icon-img2"
                    style={{
                        transform: cardID === ID + 1 ? 'translateY(-10%)' : 'translateY(0%)'
                    }}
                />
                <img src={ITEM.IconImg1} alt="" className="icon-img1"
                    style={{
                        transform: cardID === ID + 1 ? 'translateY(-10%)' : 'translateY(0%)'
                    }}
                />
                <p className='heading-text'
                    style={{
                        transform: cardID === ID + 1 ? 'translateY(-10%)' : 'translateY(0%)',
                        color: ID % 2 === 0 ? '#ffffff' : '#2B2E7C'
                    }}
                >
                    <span className="text-span">{ITEM.heading1}</span><br />
                </p>
                <p className='card-no'>
                    <span className="span1"
                        style={{
                            fillColor: `#000000`,
                            strokeWidth: `1px`,
                            strokeColor: `#ffffff`,
                            WebkitTextFillColor: ID % 2 === 0 ? `#000000` : '#2B2E7C',
                            WebkitTextStrokeWidth: `1px`,
                            WebkitTextStrokeColor: `#ffffff`,
                            opacity: cardID === ID + 1 ? '0.2' : '0.08'
                        }}
                    >{formattedNumber}</span>

                </p>
            </div>

            <h3
                style={{
                    color: ID % 2 === 0 ? `#2B2E7C` : '#ffffff',
                    opacity: cardID === ID + 1 ? '0.2' : '0.12'

                }}
            >{ITEM.name}</h3>

            <div className="frame-sec"
                style={{
                    backgroundColor: ID % 2 === 0 ? '#ffffff' : `#2B2E7C`,
                    transform: cardID === ID + 1 ? 'scale(1.015)' : ''
                }}
            >
                <div className="inner-frame"
                    style={{
                        backgroundColor: ID % 2 === 0 ? `#2B2E7C` : '#ffffff'

                    }}
                >
                    {
                        ITEM.details.map((item, i) => {
                            return (
                                <div className="details" key={i}>
                                    <img src={BulletPoint} alt="" className="icon"

                                    />
                                    <p
                                        style={{
                                            color: ID % 2 === 0 ? '#ffffff' : `#2B2E7C`,
                                        }}
                                    >{item.txt}</p>
                                </div>
                            )
                        })
                    }



                </div>

            </div>

            <span
                className='many-more-span'
                style={{
                    color: ID % 2 === 0 ? `#ffffff` : '#2B2E7C',

                }}
            >Many more...</span>
        </div>
    )
}