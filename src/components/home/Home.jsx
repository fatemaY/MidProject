import UserData from "../../Data/Data.jsx";
import Assignment from "../assignment/Assignment";
import { Form } from "../assignment/Form";
import Box from "../box/Box.jsx";
import Header from "../header/Header";
import './home.css'

const Home = () => {
    return (
        <div className="home">
            <Header />
            {/* <Assignment /> */}

            {/* Paragraphs */}
            <div className="intro-wrapper">
                <div className="intro-context">
                    <p>
                       Everyone is a Genius,We aim to match every student with&nbsp;<span id='span1'>Experienced and Professional</span> tutors that will ignite their passion for
                        <span id='span2'> Learning. </span>
                    </p>
                </div>
            </div>
            <Assignment />

            {/* Content Boxes */}
            <div className="box-container">
                <div className="box1-Q">
                    <div className='inBox1'>
                        <Box
                            name='Qualified Teachers'
                            content='At High Math Tutoring , we try to put every effort we can to succeed our students.'
                            icon='1'
                        />
                    </div>
                </div>
                <div className="box2-F">
                    <div className="inBox2">
                        <Box
                            name='Free Assessment'
                            content='Now you can get a trial for free. Fill the form and try a class.'
                            icon='2'
                        />
                    </div>
                </div>
            </div>

            {/* Image Filler */}
            <div className="filler-wrapper">
                {/* <img src={require('../../assets/cj-dayrit-rcdsvUo-5WY-unsplash.jpg')} /> */}
                <p> With our personalised touch, we are able to channel the most effective learning techniques to challenge, motivate and support our students.  </p>
                <br /> <br />
                <div className="filler1">
                    <p> JOIN US! </p>
                </div>
            </div>

            {/* Content Boxes 2 */}
            <div className="box-container">
                <div className="box1-Q">
                    <div className='inBox1'>
                        <Box
                            name='Learning Programme'
                            content='Everyone is a Genius,we work hard to provide the best learning resources and skills to be a best Mathmatic .'
                            icon='3'
                        />
                    </div>
                </div>
                <div className="box2-F">
                    <div className="inBox2">
                        <Box
                            name='Who are we?'
                            content='We believe in empowering students with the study skills and learning resources they need to achieve academic success.'
                            icon='4'
                        />
                    </div>
                </div>
            </div>

            {/* Assessment Form */}
            <div className="freeForm">
                <Form />
            </div>
           


        </div>
    );
}

export default Home;