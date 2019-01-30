import React, { Component } from 'react';
import axios from "axios";
import { url } from "../config";
import NavBar from "./navbar";

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            createdOn: []
        };

    }

    componentDidMount() {
        const self = this;
        axios.get(url + '/news_list', {
            withCredentials: true
        }).then(data => {
            // console.log(data.data);
            const arr = [...data.data];
            // const dateArr = [] ;r
            // arr.map((el , index) => {
            //     dateArr.push(el.createdOn); 
            // });
            arr.reverse();
            // console.log(arr);
            // // console.log(date.slice(0 , 10))
            
            // dateArr.map( el => {
            //     console.log(el);
            // })
            self.setState({
                list: arr 
                // createdOn : dateArr
            })
        })
            .catch(err => {
                console.log(err);
            })

    }

    render() {
        return (
            <div class="body-bg">
                <div class="horizontal-main-wrapper">
                    <NavBar></NavBar>
                    <div class="main-content-inner">
                        <div class="sales-report-area mt-5 mb-5">

                            <div class="row mt-5 mb-5">
                                <div class="col-lg-12 spa">
                                    <div class="card">
                                        <div class="card-body">
                                            <h4 class="header-title">News</h4>
                                            <div class="timeline-area">
                                                {this.state.list
                                                    .map((el , index) => {
                                                        const date = el.publishedOn;
                                                      
                                                        const t = new Date(date);
                                                        
                                                        const a = JSON.stringify(t);
                                                        console.log(a);
                                                        const time = a.slice(16,20);
                                                        // const haha = a.slice(1 ,10);
                                                        // const total = time + ' ' +haha ;
                                                        // console.log(total);
                                                        return (
                                                            <div class="timeline-task">
                                                                <div class="icon bg1">
                                                                    <i class="fa fa-envelope"></i>
                                                                </div>
                                                                <div class="tm-title">
                                                                    <h4>{el.newsText}</h4>
                                                                    <span class="time"><i class="ti-time"></i>{time}</span>
                                                                </div>
                                                                <p>
                                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse distinctio itaque at.
                                                                </p>
                                                            </div>
                                                        );

                                                    })}

                                                <div class="timeline-task">
                                                    <div class="icon bg2">
                                                        <i class="fa fa-exclamation-triangle"></i>
                                                    </div>
                                                    <div class="tm-title">
                                                        <h4>Rashed sent you an email</h4>
                                                        <span class="time"><i class="ti-time"></i>09:35</span>
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse distinctio itaque at.
                                        </p>
                                                </div>
                                                <div class="timeline-task">
                                                    <div class="icon bg2">
                                                        <i class="fa fa-exclamation-triangle"></i>
                                                    </div>
                                                    <div class="tm-title">
                                                        <h4>Rashed sent you an email</h4>
                                                        <span class="time"><i class="ti-time"></i>09:35</span>
                                                    </div>
                                                </div>
                                                <div class="timeline-task">
                                                    <div class="icon bg3">
                                                        <i class="fa fa-bomb"></i>
                                                    </div>
                                                    <div class="tm-title">
                                                        <h4>Rashed sent you an email</h4>
                                                        <span class="time"><i class="ti-time"></i>09:35</span>
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse distinctio itaque at.
                                        </p>
                                                </div>
                                                <div class="timeline-task">
                                                    <div class="icon bg3">
                                                        <i class="ti-signal"></i>
                                                    </div>
                                                    <div class="tm-title">
                                                        <h4>Rashed sent you an email</h4>
                                                        <span class="time"><i class="ti-time"></i>09:35</span>
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse distinctio itaque at.
                                        </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default News;
