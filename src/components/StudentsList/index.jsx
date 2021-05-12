import { Component } from "react";
import Student from "../Student";

class StudentsList extends Component {

    render() {
        const { list } = this.props;
        return (
            <>
            {
                list.map((student, index) => (
                    <Student key={index} student={student}/>
                ))
            }
            </>
        )
    }
}

export default StudentsList;