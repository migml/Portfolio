import React from 'react';
import user from './img/user.png';

export default class About extends React.Component {
    render() {
        return <div className="">
            <h1>About</h1>
            <div className="slide-wrapper-inner text-center">
                <img src={user} width="200" className="logo rounded-circle mb-4" />
                <h1>Miguel Martín</h1>
                <p className="subtitle mt-3">123 Main Street, Barcelona. &nbsp;|&nbsp; <a href="#">mmartlopez@email.com</a> &nbsp;|&nbsp; (123) 456 7890</p>
                <p className="lead">Highly creative and multitalented Graphic Designer with extensive experience in multimedia, marketing and print design. Exceptional collaborative and interpersonal skills; dynamic team player with well-developed written and verbal communication abilities.</p>
            </div>
        </div>;
    }
}