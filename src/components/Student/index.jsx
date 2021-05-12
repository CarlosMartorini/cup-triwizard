import { Component } from "react";
import './styles.css';

class Student extends Component {
    render() {
        const {name, image, house } = this.props.student
        return(
            <div className='card'>
                <img className='image' src={image} alt={name}/>
                <label style={{color:'yellow', backgroundColor:'black'}}>{name}</label>
                <label style={{color:'yellow', backgroundColor:'black'}}>{house}</label>
            </div>
        )
    }
}

export default Student;