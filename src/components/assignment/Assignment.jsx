import { Button } from "@mui/material";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import './assignment.css';



const Assignment = () => {
    return (
        <div className="assessment-wrapper">
            <div className="assessment-container">
                <div className="assessment-title">
                    <p> Get Free Assessment Now! </p>
                </div>
                <div className="assessment-button">
                    <Button variant='contained' id="btn">
                        <a href='#asForm'> Get here &nbsp; <ArrowCircleRightIcon /> </a>
                    </Button>
                </div>
            </div>
        </div>
    );
}
 
export default Assignment;