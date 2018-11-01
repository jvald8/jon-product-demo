import React, { Component } from 'react';
import { translate, Trans } from 'react-i18next';
import ContentWrapper from '../Layout/ContentWrapper';
import { Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import EasyPieChart from 'easy-pie-chart';

import CardTool from '../Common/CardTool'
import Sparkline from '../Common/Sparklines';
import Scrollable from '../Common/Scrollable'
import FlotChart from '../Charts/Flot';
import Now from '../Common/Now';
import MixpanelFilter from '../Extras/MixpanelFilter';

class DashboardV1 extends Component {

    state = {
        flotData: [{
            "label": "Clients",
            "color": "#ff2800",
            "data": [
                ["Q1", 244],["Q2", 155],["Q3", 153],["Q4", 187]
            ]
        }],

        flotOptions: {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true,
                    radius: 4
                },
                splines: {
                    show: true,
                    tension: .3,
                    lineWidth: 1,
                    fill: 0.5
                }
            },
            grid: {
                borderColor: '#eee',
                borderWidth: 0,
                hoverable: true,
                backgroundColor: '#fcfcfc'
            },
            tooltip: true,
            tooltipOpts: {
                content: (label, x, y) => x + ' : ' + y
            },
            xaxis: {
                tickColor: '#fcfcfc',
                mode: 'categories'
            },
            yaxis: {
                min: 0,
                max: 300, // optional: use it for a clear represetation
                tickColor: '#eee',
                //position: 'right' or 'left',
                tickFormatter: v => v /* + ' visitors'*/
            },
            shadowSize: 0
        },

        dropdownOpen: false

    }

    componentDidMount() {
        // Easy pie
        let pieOptions1 = {
            animate: {
                duration: 800,
                enabled: true
            },
            barColor: '#23b7e5',
            trackColor: 'rgba(200,200,200,0.4)',
            scaleColor: false,
            lineWidth: 10,
            lineCap: 'round',
            size: 145
        };
        new EasyPieChart(this.refs.easypie, pieOptions1);
    }

    changeLanguage = lng => {
        this.props.i18n.changeLanguage(lng);
    }

    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        // Usse t function instead of Trans component
        // const { t } = this.props;

        return (
            <ContentWrapper>
                <div className="content-heading">
                    <div>Dashboard
                        <small><Trans i18nKey='dashboard.WELCOME'></Trans></small>
                    </div>
                    { /* START Language list */ }
                    <div className="ml-auto">
                        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                            <DropdownToggle>
                                English
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-right-forced animated fadeInUpShort">
                                <DropdownItem onClick={() => this.changeLanguage('en')}>English</DropdownItem>
                                <DropdownItem onClick={() => this.changeLanguage('es')}>Spanish</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                    { /* END Language list */ }
                </div>
                { /* START cards box */ }
                <Row>
                    <Col xl={ 3 } md={ 6 }>
                        
                            <div>Churn Overview Q1 2019</div>
                        
                    </Col>
                </Row>
                <Row>
                    <Col xl={ 4 } lg={ 4 } md={ 12 }>
                        { /* START card */ }
                        <div className="card flex-row align-items-center align-items-stretch border-0">
                            <div className="col-4 d-flex align-items-center bg-green-dark justify-content-center rounded-left">
                                <em className="fas fa-user-astronaut fa-3x"></em>
                            </div>
                            <div className="col-8 py-3 bg-green rounded-right">
                                <div className="h2 mt-0">244</div>
                                <div className="text-uppercase">Customers</div>
                            </div>
                        </div>
                    </Col>
                    <Col xl={ 4 } md={ 4 }>
                        { /* START card */ }
                        <div className="card flex-row align-items-center align-items-stretch border-0">
                            <div className="col-4 d-flex align-items-center bg-primary-dark justify-content-center rounded-left">
                                <em className="fas fa-dollar-sign fa-3x"></em>
                            </div>
                            <div className="col-8 py-3 bg-primary rounded-right">
                                <div className="h2 mt-0">$225,571</div>
                                <div className="text-uppercase">Revenue</div>
                            </div>
                        </div>
                    </Col>
                    <Col xl={ 4 } md={ 4 }>
                        { /* START card */ }
                        <div className="card flex-row align-items-center align-items-stretch border-0">
                            <div className="col-4 d-flex align-items-center bg-purple-dark justify-content-center rounded-left">
                                <em className="icon-docs fa-3x"></em>
                            </div>
                            <div className="col-8 py-3 bg-purple rounded-right">
                                <div className="h2 mt-0">542 
                                    <small></small>
                                </div>
                                <div className="text-uppercase">Policies</div>
                            </div>
                        </div>
                    </Col>
                </Row>
                { /* END cards box */ }
                <Row>
                    { /* START dashboard main content */ }
                    <Col xl={ 9 }>
                        { /* START chart */ }
                        <Row>
                            <Col xl={ 12 }>
                                { /* START card */ }
                                <div className="card card-default">
                                    <div className="card-header">
                                        <CardTool refresh onRefresh={(_,done) => setTimeout(done,2000)}/>
                                        <div className="card-title">Churn Outlook 2019</div>
                                    </div>
                                    <div className="card-body">
                                        <FlotChart data={this.state.flotData} options={this.state.flotOptions} height="250px" />
                                    </div>
                                </div>
                                { /* END widget */ }
                            </Col>
                        </Row>
                        { /* END chart */ }
                    </Col>
                    { /* END dashboard main content */ }
                    { /* START dashboard sidebar */ }
                    <Col xl={ 3 }>
                        { /* START loader widget */ }
                        <div className="card card-default">
                            <div className="card-body">
                                <div className="text-info">Average Quarterly Accuracy</div>
                                <div className="text-center py-4">
                                    <div ref="easypie" data-percent="81" className="easypie-chart easypie-chart-lg">
                                        <span>81%</span>
                                    </div>
                                </div>
                                <Sparkline options={{
                                        barColor:'#23b7e5',
                                        height:30,
                                        barWidth:5,
                                        barSpacing:2
                                    }}
                                    values="5,4,8,7,8,5,4,6,5,5,9,4,6,3,4,7,5,4,7"
                                    className="text-center"/>
                            </div>
                            <div className="card-footer">
                                <p className="text-muted">
                                    <em className="fa fa-bullseye fa-fw"></em>
                                    <span>This Month</span>
                                    <span className="text-dark"> 85%</span>
                                </p>
                            </div>
                        </div>
                        { /* END loader widget */ }
                    </Col>
                    </Row>
                    <Row>
                        <Col xl={ 12 }>
                        { /* START chart */ }
                        <Row>
                            <Col xl={ 12 }>
                                { /* START card */ }
                                <div className="card card-default">
                                    <div className="card-header">
                                        <CardTool refresh onRefresh={(_,done) => setTimeout(done,2000)}/>
                                        <div className="card-title">Digging deeper </div>
                                        <MixpanelFilter />
                                        
                                    </div>
                                    <div className="card-body">
                                        <FlotChart data={this.state.flotData} options={this.state.flotOptions} height="250px" />
                                    </div>
                                </div>
                                { /* END widget */ }
                            </Col>
                        </Row>
                        { /* END chart */ }
                    </Col>
                    </Row>
                
            </ContentWrapper>
            );

    }

}

export default translate('translations')(DashboardV1);
