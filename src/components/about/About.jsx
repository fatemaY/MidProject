import Navbar from '../navbar/Navbar';
import './about.css'
import Anhar from '../../assets/anhar.jpeg';
import Fatema from '../../assets/fatema.jpeg';


const About = () => {
    return (
        <div className="aboutPage-container">
            <div className="about-head-wrapper">
                <div className="head-nav">
                    <Navbar />
                </div>
                <div className="about-head">
                    <p> About Us </p>
                </div>
            </div>
            <div className="whoContainer">
                <div className="who-para-wrapper">
                    <p> Who are we? </p>
                    <p>
                        We believe in empowering students with
                        the study skills and learning resources
                        they need to achieve academic success.
                        Our talented and professional team provide
                        tutoring services to students of all ages,
                        levels of experience, and subjects.
                    </p>
                </div>
            </div>
            <div className="ourStoryContainer">
                {/* <div className="ourProfile">
                    <div class="content">
                        <h2 class="text_shadows">Profile</h2>
                    </div>
                </div> */}
                {/* <div className="storyWrapper">
                
                        <h2 className='title'>Profile</h2>
                    
                    <div className="storyFlexbox">
                        <div className="dirIma">
                        <p> <img src={Anhar} alt='anhar' /> </p>
                        </div>
                        <div className="dirInfo">
                            <p>
                                <b>Anhar Yasen</b> is the director and principal founder of the High Math
                                 Tutoring centre. She has completed bachelor of Mathmatics in University of haifa. She has been 
                                  working as a Full time Mathematics Teacher in various High schools.
                            </p>
                            <p>
                                With having the extensive knowledge of the and fully 
                                conscious of the standards of Math teaching students  gained by her 
                                studies & work experience, she can guide the students best and bring best out
                                of them.
                            </p>
                        </div>
                    </div>
                </div> */}
            </div>


            <div className="facultyContainer">
                <p className="facultyBanner formSubtitle">  Tuoturing Members </p>
                <div className="facWrapper">
                    <div className="facMembers">
                    <div className="imgContainer"> <img src={Anhar} /> </div>
                        <div className="facInfo">
                            <p> Anhar Yasen </p>
                            <p> Member of High Math Tutoring Centre </p>
                        </div>
                        <div className="facOtherInfo">
                            <p> Education Details: </p>
                            <p> BSC in Mathematics & Information System, </p>
                            <p> he has completed bachelor of Mathmatics in <b>University of Haifa</b> She has been 
                                  working as a Full time Mathematics Teacher in various High schools.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Faculty Details */}
            <div className="facultyContainer">
                {/* <p className="facultyBanner formSubtitle"> Faculty Members </p> */}
                <div className="facWrapper">
                    <div className="facMembers">
                    <div className="imgContainer"> <img src={Fatema} /> </div>
                        <div className="facInfo">
                            <p> Fatema Yasen </p>
                            <p> Member of High Math Tutoring Centre </p>
                        </div>
                        <div className="facOtherInfo">
                            <p> Education Details: </p>
                            <p> BSC in Mathematics & Information System, </p>
                            <p> Post Grad Dip in teaching from <b>University of Haifa</b> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;

// Education details

// BSC (Mathematics Physics Chemistry )

// Post Grad Dip in teaching ( University of Western Australia)