import Navbar from "./(components)/navbar/navbar"
import FasilitiesCard from "./(components)/facilitiesCard/facilitiesCard"
import Imeges from "./(components)/imegesCard/imegesCard"
import TestimonialCard from "./(components)/testimonialCard/testimonialCard"
import Card from "./(components)/card/card"
import { client } from "@/sanity/lib/client"


const fetchServices = async ()=> {
    const majorPrograms = await client.fetch(`*[_type == "majorPrograms"]`,{},{cache:'no-cache',});
    return majorPrograms
}

// import Image from "next/image"
async function Home() {
   const majorPrograms = await fetchServices();
    return (
        <>
            <section className="header">
                <Navbar />

                <div className="text_box">
                    <h2>GET READY</h2>
                    <p id="headtext">TO DISCOVER CAMPUS</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit consequuntur corrupti sapiente aut porro
                        <br /> esse blanditiis in quae perspiciatis quo.
                    </p>
                    <a href="#" className="hero_btn">Visit Us To Know More</a>
                </div>
            </section>


            <section className="course">
                <div className="PageBlock">
                    <div className="verticalLine"></div>
                    <div className="Clear"></div>
                </div>
                <h1>EXPLORE OUR 60+ <br /> MAJOR PROGRAMS</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

                <div className="row">
                    {
                        majorPrograms.map((majorProgram)=>{
                            return(
                                <Card heading={majorProgram.title} description={majorProgram.description} />

                            )
                        })
                    }
                    {/* <Card heading="Undergraduate Programs" />
                
                    <Card heading="Adult Learning & Degree Completion" /> */}
                </div>
            </section>


            <section className="campus">
                <div className="PageBlock">
                    <div className="verticalLine"></div>
                    <div className="Clear"></div>
                </div>
                <h1>TAKE OUR VIRTUAL TOUR</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

                <div className="row">

                    <Imeges heading="DELHI" src="/Campus1.png"  />  
                    <Imeges heading="HYDERABAD" src="/Campus2.png" />  
                    <Imeges heading="MUMBAI" src="/Campus3.png" />  
                </div>
            </section>

            <section className="facilities">
                <div className="PageBlock">
                    <div className="verticalLine"></div>
                    <div className="Clear"></div>
                </div>
                <h1>Our Facilities</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

                <div className="row">
                    <FasilitiesCard src="/libary.png"   heading="Best Libary"/> 
                    <FasilitiesCard src="/playground.png" heading="Athletics" />
                    <FasilitiesCard src="/food.png" heading="Tasty and Healthy Food" />
                </div>
            </section>

            <section className="testimonials">
                <div className="PageBlock">
                    <div className="verticalLine"></div>
                    <div className="Clear"></div>
                </div>
                <h1>What Our Student Says</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

                <div className="row">
                    <TestimonialCard src="/user.png" />
                    <TestimonialCard src="/user.png" />

                </div>

                <section className="cta">
                    <h1>GET READY FOR A BRIGHT FUTURE</h1>
                    <a  className="hero_btn">CONTACT US</a>
                </section>
            </section>
        </>
    )
}
export default Home