import React, { useEffect, useRef, useState } from 'react';

//styles
import './consultancy-solutions.scss';


import { useLocation } from 'react-router-dom';

import { Stickyroll } from '@stickyroll/react';

//components
import TopSection from './Top-Section/TopSection';
import IndividualAiming from './Individual-Aiming/IndividualAiming';
import Opportunities from './Opportunities/Opportunities';
import EligibilityCriteria from './Eligibility-Criteria/EligibilityCriteria';
import Sprachschule from './Sprachschule/Sprachschule';
import FAQ from './FAQ/FAQ';
import NavBar from './Nav-Bar/NavBar';
import Testimonial from '../../components/Testimonial/Testimonial';
import TestiMob from '../../components/TestiMob/TestiMob';
import Contact from '../../components/Contact/Contact';
import { Footer } from '../../components/Footer/Footer';
import { FooterMob } from '../../components/Footer/FooterMob';


export default function ConsultancySolution({ query }) {
  const consultancySolRef = useRef();
  const [progress1, setProgress1] = useState({
    Progress: '',
    Page: ''
  });

  const [progress2, setProgress2] = useState({
    Progress: '',
    Page: ''
  });
  const [progress3, setProgress3] = useState({
    Progress: '',
    Page: ''
  });

  const { pathname } = useLocation();


  useEffect(() => {
    window.scrollTo(0, 0);
    // alert()
  }, [pathname]);

  return (
    <div className="consultancy-solutions-main">
      {/* <p style={{ color: '#000', position: 'fixed', zIndex: '10', top: '10%', left:'10%' }}>
        {progress.Progress}{' '}{progress.Page}
        <br />
        {Math.floor((progress.Progress + (progress.Page - 1.2)) * 10)}

      </p> */}

      <NavBar ConsultancySolRef={consultancySolRef} />

      <TopSection query={query} />

      <IndividualAiming query={query} />

      <Stickyroll
        pages={1}
        factor={3}
        onProgress={(progress, page, index) => {
          setProgress1({
            Page: page,
            Progress: progress
          })
        }}

      >
        <div className="scroll-comp-one">
          <Opportunities progress={progress1} query={query} />
        </div>
      </Stickyroll>

      {/* ------------------------------------------------ */}

      <Stickyroll
        pages={1}
        factor={4}

        onProgress={(progress, page, index) => {
          setProgress2({
            Page: page,
            Progress: progress
          })
        }}
      >
        <div className="scroll-comp-one">
          <EligibilityCriteria progress={progress2} query={query} />
        </div>

      </Stickyroll>

      {/* ------------------------------------------------ */}

      <Stickyroll
        pages={1}
        factor={1}

        onProgress={(progress, page, index) => {
          setProgress3({
            Page: page,
            Progress: progress
          })
        }}
      >
        <div className="scroll-comp-one">
          <Sprachschule progress={progress3} query={query} />
        </div>
      </Stickyroll>

      <div className="space"
        style={{
          height: '10vh'
        }}
      />


      <FAQ query={query} />


      {
        !query ?
          < Testimonial />
          :
          <TestiMob />
      }
      <Contact />
      {
        !query ?
          <Footer />
          :
          <FooterMob />
      }
    </div>
  )
}
