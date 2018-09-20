import React from 'react';
import Fingerprint from '@material-ui/icons/Fingerprint';
const FontAwesome = require('react-fontawesome');

export default class Home extends React.Component {
    render() {
        return <div>
            <section className="divided clearfix">
                <div className="container">
                    <div className="row py-5">
                        <div className="col col-12 col-sm-12 col-md-6 p-lg-5">
                            <div className="p-5">
                                <h5 className="h5 text-muted">Bootstrap </h5>
                                <h1 className="h1 mb-5">Spacing </h1>
                                <p>Bootstrap includes a wide range of shorthand responsive margin and padding utility classes to modify an element’s appearance.</p>
                            </div>
                        </div>
                        <div className="versus d-xs-none d-sm-block">+</div>
                        <div className="col col-12 col-sm-12 col-md-6 p-lg-5">
                            <div className="p-5">
                                <h5 className="h5 text-muted">Bootstrap</h5>
                                <h1 className="h1 mb-5">Spacing </h1>
                                <p>Bootstrap includes a wide range of shorthand responsive margin and padding utility classes to modify an element’s appearance.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="border-bottom">
                <div className="container">
                    <div className="row text-center py-5">
                        <div className="col col-12 border-bottom border-sm-bottom border-md-bottom-0 border-md-right col-sm-12 col-md-6 p-5"> <img className="m-auto" width="40px" src="https://semantic-ui.com/images/icons/mobile.png" />
                            <h2 className="h3 mt-3 mb-5 text-muted">Bootstrap Spacing</h2>
                            <p>Bootstrap includes a wide range of shorthand responsive margin and padding utility classes to modify an element’s appearance. </p>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 p-5">    <FontAwesome name='rocket' /> <Fingerprint className="display-3" />
                            <h2 className="h3 mt-3 mb-5 text-muted">Bootstrap Spacing</h2>
                            <p>Bootstrap includes a wide range of shorthand responsive margin and padding utility classes to modify an element’s appearance. </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>;
    }
}