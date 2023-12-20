import React from 'react';
import * as consts from '../../constants.js';
import axios from "../../Data/axios"




class SubmitForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type:'Lesson',
            firstName: '',
            lastName: '',
            email:'',
            phone: '',
            address: '',
            helpNeeded: '',
            helpWantedDescription: '',
        }
        this.sendHandler = this.sendHandler.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    sendHandler(sendOption) {
        if(!(this.state.firstName)|| !(this.state.lastName) || ! (this.state.address)){
            alert("Please fill in all the required inputs!")
            return
        }
        
    //    submitData()
        this.submitData();
    
        const toMe = 'fatemayasen2@@gmail.com'
        console.log('Send via: ' + sendOption);
        const serviceNeeded = consts.serviceKey[this.state.helpNeeded];
        const subject = 'Apprentice Tutoring: ' + serviceNeeded;
        const address = this.state.address ? 'My address is ' + this.state.address + '.' : '';
        let body_message = 'Dear Math Members,\r\n\r\n' +
            'My name is ' + this.state.firstName + ' ' + this.state.lastName + '. ' + 'from '+ address +
            'I am interested in tutoring and/or mentorship from you, and would like to ' +
            'learn more about your ' + serviceNeeded + ' services. \r\n \r\n' +
            'My specific needs are: \r\n' + this.state.helpWantedDescription + '\r\n\r\n' +
            'You can contact me at ' + this.state.phone + '\r\n\r\n' +
            'Thank you,\r\n\r\n' + this.state.firstName + ' ' + this.state.lastName;
        body_message = encodeURIComponent(body_message)

        let mailto_link = '';
        if(sendOption==='emailClient'){
            mailto_link = 'mailto:' + toMe + '?subject=' + subject + '&body=' + body_message;
        } else if(sendOption==='gmailClient'){
            mailto_link = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + toMe + '&su=' + subject +
                '&body=' + body_message;
        }
        


        const win = window.open(mailto_link, 'emailWindow');
        
    }

     submitData() {
        try {
        let data = {
            name:this.state.firstName + this.state.lastName,
            email: this.state.email,
            subject: this.state.helpNeeded,
            message: this.state.helpWantedDescription,
            type:this.state.type
        }
        const response = axios.post('/studenForm', data);
        // submitEmail(data)
        console.log(response)
        console.log("Email sent")

    } 
    catch (error) {
        console.log(error);
    }
}

    
     



    onChange(event) {
        const field = event.target.id;
        if(field === 'fname'){
            this.setState({firstName: event.target.value})
        } else if(field==='lname') {
            this.setState({lastName: event.target.value})
        } 
        else if(field==='email') {
            this.setState({email: event.target.value})
        }
        else if(field==='phone') {
            this.setState({phone: event.target.value})
        } else if(field==='address') {
            this.setState({address: event.target.value})
        } else if(field==='helpNeeded') {
            this.setState({helpNeeded: event.target.value})
        } else if(field==='helpWantedDescription') {
            this.setState({helpWantedDescription: event.target.value})
        }
    }



    
    render() {
        // let data = {
        //     name:this.state.firstName + this.state.lastName,
        //     email: this.state.email,
        //     subject: this.state.helpNeeded,
        //     message: this.state.helpWantedDescription,
        //     type:this.state.type
        // }
       
        return (
            <div className="commanInfoStyle">
            <div className="form-container">
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.." value={this.state.firstName} onChange={this.onChange} />
                <label for="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.." value={this.state.lastName} onChange={this.onChange} />
                <label for="email">Email</label>
                <input type="text" id="email" name="email" placeholder="Your Email.." value={this.state.email} onChange={this.onChange} />
                <label for="phone">Phone Number</label>
                <input type="text" id="phone" name="phone" placeholder="Your phone number.." value={this.state.phone} onChange={this.onChange} />
                <label for="address">Address</label>
                <textarea id="address" name="address" placeholder="Where do you live?" style={{height:'50px'}}
                     value={this.state.address} onChange={this.onChange}></textarea>
                <label for="helpNeeded">How do you need help?</label>
                <select id="helpNeeded" name="helpNeeded"  value={this.state.helpNeeded} onChange={this.onChange}>
                    <option value="basics">Basics of Math</option>
                    <option value="threeUnits">Three Units-803</option>
                    <option value="fourUnits">Four Units-804</option>
                    <option value="fiveUnits">Five Units-805</option>
                    <option value="other">Other</option>
                </select>

             
                
                <label for="helpWantedDescription">Tutoring Detailss</label>
                <textarea id="helpWantedDescription" name="helpWantedDescription" 
                    placeholder="Describe what you hope to get out of tutoring..." style={{height:'120px'}}
                    value={this.state.helpWantedDescription} onChange={this.onChange}></textarea>
                <div class="dropdown">
                    <button class="dropbtn" >Submit Via</button>
                    <div class="dropdown-content">
                        <a onClick={() => this.sendHandler('emailClient')}>Email Client</a>
                        <a onClick={() => this.sendHandler('gmailClient')}>GMail Web Client</a>
                    </div>
                </div>
            </div>
            </div>
         );
    }
}

export default SubmitForm;