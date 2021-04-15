import React, { Component } from 'react';

export default class AllProjects extends Component {
    constructor(props) {
        super(props)

        this.state = {
            curTime: new Date().toLocaleString()
        }

    }

    render() {
        return (
            <>
                <div className="p-5 ">
                    <div className="container-fluid " id="postview">
                        <h2 className="text-center py-2">All Resources</h2>
                        <div className="border-res">

                            <div className="w-100 bg-light border border-res  text-center" style={{ fontSize: 20 }}>
                                <div className="row">
                                    <div className="col-4 col-md-4">
                                        <p className="mb-0 text-primary fw-bold">Title</p>
                                    </div>
                                    <div className="col-2 col-md-2">
                                        <p className="mb-0 text-primary fw-bold">Project Type</p>
                                    </div>
                                    <div className="col-2 col-md-2">
                                        <p className="mb-0 text-primary fw-bold">Started</p>
                                    </div>
                                    <div className="col-2 col-md-2">
                                        <p className="mb-0 text-primary fw-bold">Finished</p>
                                    </div>
                                    <div className="col-2 col-md-2">
                                        <p className="mb-0 text-primary fw-bold">Location</p>
                                    </div>
                                </div>
                            </div>
                            <div className="container-fluid" id="showpost">
                                <div className="w-100  bg-white " style={{ fontSize: 20 }}>
                                    <div className="row p-2">
                                        <div className="col-4 col-md-4">
                                            <p className="mb-0  allpost">
                                                Transfiguration Ark Revival Mission Head Quarters
                                    </p>
                                        </div>
                                        <div className="col-2 col-md-2">
                                            <p className="mb-0 text-center allpost">Building</p>
                                        </div>
                                        <div className="col-2 col-md-2">
                                            <p className="mb-0 text-center  allpost">{this.state.curTime}</p>
                                        </div>
                                        <div className="col-2 col-md-2">
                                            <p className="mb-0 text-center allpost">{this.state.curTime}</p>
                                        </div>
                                        <div className="col-2 col-md-2">
                                            <p className="mb-0 text-center allpost">Aroje</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
