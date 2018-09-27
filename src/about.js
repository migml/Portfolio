import React from 'react';
import user from './img/user.png';

export default class About extends React.Component {
    render() {
        return <div>
            <br /><br />
            <h1>ABOUT</h1>
            <div className="slide-wrapper-inner text-center">
                <img src={user} width="200" className="logo rounded-circle mb-4" />
                <h1>Skeleton Author</h1>
                <p className="subtitle mt-3">123 Rainbow Street, Wonderland. &nbsp;|&nbsp; <a href="#">randomguy@email.com</a> &nbsp;|&nbsp; (123) 456 7890</p>
                <p className="lead">I'm writing this because I need some random text to fill this space. By the way, I hope you enjoy this template, and I wish you create some amazing and great project. Obiusly, feel free to copy or modify this application. <br />Happy coding!</p>
            </div>
        </div>;
    }
}