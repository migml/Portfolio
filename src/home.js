import React from 'react';
//import doneAll from '@material-ui/icons/';

export default class Home extends React.Component {
    render() {
        return <div>
            <section class="divided clearfix">
                <div class="container">
                    <div class="row py-5">
                        <div class="col col-12 col-sm-12 col-md-6 p-lg-5">
                            <div class="p-5">
                                <h5 class="h5 text-muted">Bootstrap </h5>
                                <h1 class="h1 mb-5">Spacing </h1>
                                <p>Bootstrap includes a wide range of shorthand responsive margin and padding utility classes to modify an element’s appearance.</p>
                            </div>
                        </div>
                        <div class="versus d-sm-none">+</div>
                        <div class="col col-12 col-sm-12 col-md-6 p-lg-5">
                            <div class="p-5">
                                <h5 class="h5 text-muted">Bootstrap</h5>
                                <h1 class="h1 mb-5">Spacing </h1>
                                <p>Bootstrap includes a wide range of shorthand responsive margin and padding utility classes to modify an element’s appearance.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="border-bottom">
                <div class="container">
                    <div class="row text-center py-5">
                        <div class="col col-12 border-bottom border-sm-bottom border-md-bottom-0 border-md-right col-sm-12 col-md-6 p-5"> <img class="m-auto" width="40px" src="https://semantic-ui.com/images/icons/mobile.png" />
                            <h2 class="h3 mt-3 mb-5 text-muted">Bootstrap Spacing</h2>
                            <p>Bootstrap includes a wide range of shorthand responsive margin and padding utility classes to modify an element’s appearance. </p>
                        </div>
                        <div class="col col-12 col-sm-12 col-md-6 p-5"> 
                            <h2 class="h3 mt-3 mb-5 text-muted">Bootstrap Spacing</h2>
                            <p>Bootstrap includes a wide range of shorthand responsive margin and padding utility classes to modify an element’s appearance. </p>
                        </div>
                    </div>
                </div>
            </section>


            <a target="_blank" href="https://s.bootsnipp.com/iframe/1eZNd"><small>Go To Full View<small></small></small></a>
        </div>;
    }
}