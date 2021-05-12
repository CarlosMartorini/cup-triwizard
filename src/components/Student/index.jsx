import { Component } from "react";
import './styles.css';

class Student extends Component {
    render() {
        const {name, image, house } = this.props.student
        return(
            <div className='card'>
                <img className='image' src={image} alt={name}/>
                <label className='label'>{name}</label>
                <label className='label'>{house}</label>
            </div>
        )
    }
}

export default Student;