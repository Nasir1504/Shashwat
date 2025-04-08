import React,{useState}  from 'react';
import "./CardExpandMob.scss";

const CardExpandMob = () => {
  const [count,setCount]=useState(1);
  const [count1,setCount1]=useState(1);
  return (
    <div className='card-expand-main-mb'>
      <div className="card-expand-div1-mb">
      <div className="ced-inner-mb">
       <p className='ced-explore-mb'>Explore other</p>
       <h2 className='ced-german-mb'>German Courses</h2>
       </div>
      </div>
      <div className="card-expand-div2-mb">
            
        <div className="cards-container-mb">
        <div className="gc1 com-gc" 
        // style={{clipPath: count >= 2 && "rect(-100px 5.25vw 380px -1vw)",zIndex:count>=2 && 3}} 
        style={{transform:count1 === 1 ? "translateY(0)" : count1 !== 1 && "translateY(20vh)" ,opacity:count1===1 && "1"}}>
          <div className="mini-c1">
           <h2>LEVEL</h2>
           <h1>A <span>2</span></h1>
          </div>
          <div className="mini-c2" 
          // style={{ transform:count >= 2 && "scale(0)"}}
           >
          <p>Lorem ipsum dolor sit <br /> amet consectetur <br /> Senectus quam tincidunt <br /> tortor placerat urna </p>
          <div className="duration-box">
            <h2 className='db1'>Duration : <span>3 Months</span></h2>
            <h2 className='db2'>Language : <span>English</span></h2>
          </div>
          <button className='shash-btn-cl'>Know More</button>
          </div>
        </div>
    
       <div className="gc2 com-gc"
          style={{transform:count1 !== 2 ? "translateY(20vh)" : count1 === 2 && "translateY(0vh)" ,opacity:count1===2 && "1"}}
          // onMouseEnter={()=>{setCount(2)}}
          >
          <div className="mini-c21" >
           <h2>LEVEL</h2>
           <h1>B <span>1</span></h1>
          </div>
          <div className="mini-c22">
          <p>Lorem ipsum dolor sit <br /> amet consectetur <br /> Senectus quam tincidunt <br /> tortor placerat urna </p>
          <div className="duration-box">
            <h2 className='db1'>Duration : <span>3 Months</span></h2>
            <h2 className='db2'>Language : <span>English</span></h2>
          </div>
          <button className='shash-btn-cl'>Know More</button>
          </div>
        </div> 
        
        <div className="gc2 gc3 com-gc" 
        style={{transform:count1 !== 3 ? "translateY(40vh)" : count1 === 3 && "translateY(0vh)" ,opacity:count1===3 && "1"}}
        // onMouseEnter={()=>{setCount(3)}}
        >
          <div className="mini-c21" >
           <h2>LEVEL</h2>
           <h1>B <span>2</span></h1>
          </div>
          <div className="mini-c22" 
          // style={{width:count<3 && "0vw", transform:count!==3 && "scale(0)"}}
           >
          <p>Lorem ipsum dolor sit <br /> amet consectetur <br /> Senectus quam tincidunt <br /> tortor placerat urna </p>
          <div className="duration-box">
            <h2 className='db1'>Duration : <span>3 Months</span></h2>
            <h2 className='db2'>Language : <span>English</span></h2>
          </div>
          <button className='shash-btn-cl'>Know More</button>
          </div>
        </div>

          <div className="gc2 gc4 com-gc" 
       style={{transform:count1 !== 4 ? "translateY(55vh)" : count1 === 4 && "translateY(0vh)" ,opacity:count1===4 && "1"}}
        //  onMouseEnter={()=>{setCount(4)}}
         >
          <div className="mini-c21">
           <h2>LEVEL</h2>
           <h1>C <span>1</span></h1>
          </div>
          <div className="mini-c22" 
          // style={{width:count <4 && "0vw", transform:count !==4 && "scale(0)"}} 
          >
          <p>Lorem ipsum dolor sit <br /> amet consectetur <br /> Senectus quam tincidunt <br /> tortor placerat urna </p>
          <div className="duration-box">
            <h2 className='db1'>Duration : <span>3 Months</span></h2>
            <h2 className='db2'>Language : <span>English</span></h2>
          </div>
          <button className='shash-btn-cl'>Know More</button>
          </div>
        </div> 

        
        <div className="gc2 gc5 com-gc" 
            style={{transform:count1 !== 5 ? "translateY(70vh)" : count1 === 5 && "translateY(0vh)" ,opacity:count1===5 && "1"}}>
          <div className="mini-c21" >
           <h2>LEVEL</h2>
           <h1>C <span>2</span></h1>
          </div>
          <div className="mini-c22" >
          <p>Lorem ipsum dolor sit <br /> amet consectetur <br /> Senectus quam tincidunt <br /> tortor placerat urna </p>
          <div className="duration-box">
            <h2 className='db1'>Duration : <span>3 Months</span></h2>
            <h2 className='db2'>Language : <span>English</span></h2>
          </div>
          <button className='shash-btn-cl'>Know More</button>
          </div>
        </div>
        </div>
 
        <div className="level-cards-mb" style={{display:count === 1 && "none",transform:count1 === 1 && "translateY(-20vh)",opacity:count1 === 1 && "0"}} onMouseOver={()=>{ setTimeout(()=>{setCount(1)},800); setCount1(1)}}>
          <h2>LEVEL <span>A2</span></h2>
         </div>
        
         <div className="level-cards-mb" style={{display:count === 2 && "none",transform:count1 === 2 && "translateY(-20vh)",opacity:count1 === 2 && "0"}} onMouseOver={()=>{ setTimeout(()=>{setCount(2)},800);setCount1(2)}}>
          <h2>LEVEL <span>B1</span></h2>
         </div> 
        

         <div className="level-cards-mb" style={{display:count === 3 && "none",transform:count1 === 3 && "translateY(-20vh)",opacity:count1 === 3 && "0"}} onMouseOver={()=>{ setTimeout(()=>{setCount(3)},800);setCount1(3)}}>
          <h2>LEVEL <span>B2</span></h2>
         </div>
         <div className="level-cards-mb" style={{display:count === 4 && "none",transform:count1 === 4 && "translateY(-20vh)",opacity:count1 === 4 && "0"}} onMouseOver={()=>{ setTimeout(()=>{setCount(4)},800);setCount1(4)}} >
          <h2>LEVEL <span>C1</span></h2>
         </div>
         <div className="level-cards-mb" style={{display:count === 5 && "none",transform:count1 === 5 && "translateY(-40vh)",opacity:count1 === 5 && "0"}} onMouseOver={()=>{ setTimeout(()=>{setCount(5)},800);setCount1(5)}}>
          <h2>LEVEL <span>C2</span></h2>
         </div>
      </div>      

    </div>
  )
}

export default CardExpandMob;