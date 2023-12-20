import Navbar from '../navbar/Navbar';
import './header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="head-nav">
                <Navbar />
            </div>
            <div className="head-title">
                <p> HIGH HOPES <br /> <span>TUTORING <br /> CENTRE </span></p>
                <p className='head-line'> Learners Today <br /> Leaders Tomorrow </p>

            </div>
        </div>
    );
}
 
export default Header;