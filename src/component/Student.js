import React from "react";
import './Student.css'
function Student(){
    return(
        <>
        <h1>Student's Record</h1>
        <table>
            <tr>
                <th>Mentor Name</th>
                <th>Enrollment Id:</th>
                <th>Class Name</th>
                <th>Institutions</th>

            </tr>
            <tr>
                <td>Aravind Sir </td>
                <td>1:</td>
                <td>HTML & CSS</td>
                <td>Prepbytes EA 10</td>

            </tr>
            <tr>
                <td>Vijay Sir</td>
                <td>2:</td>
                <td>Handson Mentor</td>
                <td>Prepbytes EA 10</td>

            </tr>
            <tr>
                <td>Sidhant Sir</td>
                <td>3:</td>
                <td>JavaScript</td>
                <td>Prepbytes EA 10</td>

            </tr>
            <tr>
                <td>Bilal Sir</td>
                <td>4:</td>
                <td>React.JS</td>
                <td>Prepbytes EA 10</td>
            </tr>
        </table>
        </>
    );
}
export default Student;