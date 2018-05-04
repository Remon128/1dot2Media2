import React, {Component} from 'react';
import dev from '../assets/dev.png';

export default class ServiceBody extends Component {

    render() {

        return (
            <div>
                <div class="jumbotron text-center">
                    <h1>Services</h1>
                </div>
                < div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="thumbnail">
                                <a href="#">
                                    <img
                                        src={dev}
                                        alt="first"
                                        style={{
                                        width: '100%'
                                    }}/>
                                    <div class="caption">
                                        <p class="lead">We focus on providing the most creative, innovative and
                                            profitable ways for the business sector.
                                        </p>
                                    </div>
                                </a>
                                <div class="text-center">
                                    <a data-toggle="collapse" data-target="#more-1">
                                        <span class="glyphicon glyphicon-plus"></span>
                                    </a>
                                </div>
                                <div class="caption">
                                    <div id="more-1" class="collapse lead">this is more details info...</div>
                                </div>

                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="thumbnail">
                                <a href="#">
                                    <img
                                        src={dev}
                                        alt="second"
                                        style={{
                                        width: '100%'
                                    }}/>
                                    <div class="caption">
                                        <p class="lead">We focus on providing the most creative, innovative and
                                            profitable ways for the business sector.
                                        </p>
                                    </div>
                                </a>
                                <div class="text-center">
                                    <a data-toggle="collapse" data-target="#more-2">
                                        <span class="glyphicon glyphicon-plus"></span>
                                    </a>
                                </div>
                                <div class="caption">
                                    <div id="more-2" class="collapse lead">this is more details info...</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="thumbnail">
                                <a href="#">
                                    <img
                                        src={dev}
                                        alt="third"
                                        style={{
                                        width: '100%'
                                    }}/>
                                    <div class="caption">
                                        <p class="lead">We focus on providing the most creative, innovative and
                                            profitable ways for the business sector.
                                        </p>
                                    </div>
                                </a>
                                <div class="text-center">
                                    <a data-toggle="collapse" data-target="#more-3">
                                        <span class="glyphicon glyphicon-plus"></span>
                                    </a>
                                </div>
                                <div class="caption">
                                    <div id="more-3" class="collapse lead">this is more details info...</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}