import Accordion from "./components/accordion";

export default function Main() {
    return (
      <main style={{display:'flex', justifyContent:'center'}}>
        <div className="artboard">
            <div style={{display:'flex', flexDirection:'row', marginTop:'1.5rem',marginBottom:'1.5rem'}}>
                <div style={{display:'flex', alignItems:'center', marginRight:'1rem'}}><svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" fill="none" viewBox="0 0 40 41"><path fill="#AD28EB" d="M37.5 20.5a2.467 2.467 0 0 1-1.64 2.344l-9.913 3.604-3.603 9.911a2.5 2.5 0 0 1-4.688 0l-3.604-9.922-9.911-3.593a2.5 2.5 0 0 1 0-4.688l9.921-3.604 3.594-9.911a2.5 2.5 0 0 1 4.688 0l3.604 9.921 9.911 3.594A2.467 2.467 0 0 1 37.5 20.5Z"/></svg></div>
                <div className="logo-text" style={{display:'flex', alignItems:'center'}}>FAQs</div>
            </div>
            <div>
                <Accordion title="What is Frontend Mentor, and how will it help me?" content="Frontend Mentor offers realistic coding challenges to help developers
                 improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."/>
                <div className='underline'></div>
                <Accordion title="Is Frontend Mentor free?" content="Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing
                 access to a range of projects suitable for all skill levels."/>
                <div className='underline'></div>
                <Accordion title="Can I use Frontend Mentor projects in my portfolio?" content="Yes, you can use projects completed on Frontend Mentor in your portfolio.
                 It's an excellent way to showcase your skills to potential employers!"/>
                <div className='underline'></div>
                <Accordion title="How can I get help if I'm stuck on a Frontend Mentor challenge?" content="The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."/>
                {/* <Accordion title="Hey" content="Yurrrr yurrrrrrrrrrr yurrrrrrrrr urrrrr"/> */}
            </div>
            
        </div>
        
        
      </main>
    )
  }