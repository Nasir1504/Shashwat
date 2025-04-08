import React, { useEffect, useRef, useState } from 'react';

import { useLocation } from 'react-router-dom';


import { Stickyroll } from '@stickyroll/react';

//components
import NavBar from './Nav-Bar/NavBar';
import TopSection from './Top-Section/TopSection';
import WhyGermany from './Why-Germany/WhyGermany';
import GuideToEducation from './Guide-To-Education/GuideToEducation';
import ComprehensiveSupport from './Comprehensive-Support/ComprehensiveSupport';
import MeetExpert from './Meet-Expert/MeetExpert';
import Testimonial from '../../components/Testimonial/Testimonial';
import TestiMob from '../../components/TestiMob/TestiMob';
import Contact from '../../components/Contact/Contact';
import { Footer } from '../../components/Footer/Footer';
import { FooterMob } from '../../components/Footer/FooterMob';

//styles
import './language-learning.scss';

export default function LanguageLearning({ query }) {
  const langLearnRef = useRef();
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
  }, [pathname]);


  return (
    <div className="language-learning-main ">
      {/* <p style={{ color: '#000', position: 'fixed', zIndex: '10', top: '10%' }}>
        {progress.Progress}{' '}{progress.Page}
        <br />
        {progress.Progress + (progress.Page - 1.2)}

      </p> */}
      <NavBar LangLearnRef={langLearnRef} />

      <TopSection query={query} />

      <Stickyroll
        pages={1}
        factor={4}
        onProgress={(progress, page, index) => {
          setProgress1({
            Page: page,
            Progress: progress
          })
        }}
      >
        <div className="scroll-comp-one">
          <WhyGermany progress={progress1} query={query} />
        </div>
      </Stickyroll>

      <div style={{ height: '10vw' }} />


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
          <GuideToEducation progress={progress2} query={query} />
        </div>
      </Stickyroll>


      <Stickyroll
        pages={1}
        factor={4}

        onProgress={(progress, page, index) => {
          setProgress3({
            Page: page,
            Progress: progress
          })
        }}

      >
        <div className="scroll-comp-one">
          <ComprehensiveSupport progress={progress3} query={query} />
        </div>
      </Stickyroll>
      <MeetExpert />

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

