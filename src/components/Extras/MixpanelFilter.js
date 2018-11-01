import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Row, Col, Progress } from 'reactstrap';

class MixpanelFilter extends Component {


	render() {
        return (
            <ContentWrapper>

	            <div>Show me 

	            	<Col xl={ 3 }>
		                <select defaultValue="High Pre Churn" className="custom-select custom-select-sm">
		                    <option>Choose a customer segment</option>
		                    <option defaultValue="1">High Pre Churn</option>
		                    <option defaultValue="2">Low Pre Churn</option>
		                    <option defaultValue="3">Engaged</option>
		                </select>
		            </Col>

	                client churn in 

	                <Col xl={ 3 }>
		                <select defaultValue="Q1" className="custom-select custom-select-sm">
		                    <option>Choose a Quarter</option>
		                    <option defaultValue="1">Q1 2019</option>
		                    <option defaultValue="2">Q2 2019</option>
		                    <option defaultValue="3">Q3 2019</option>
		                    <option defaultValue="3">Q4 2019</option>
		                </select>
		            </Col> 

		            by 

		            <Col xl={ 3 }>
		                <select defaultValue="Business Unit" className="custom-select custom-select-sm">
		                    <option>Choose a dimension</option>
		                    <option defaultValue="1">Business Unit</option>
		                    <option defaultValue="2">Department</option>
		                    <option defaultValue="3">Occupation</option>
		                    <option defaultValue="4">Insurer</option>
		                    <option defaultValue="5">State</option>
		                    <option defaultValue="6">Risk Class</option>
		                </select>
		            </Col> 
	            </div>
            
            </ContentWrapper>

            );
    }

}

export default MixpanelFilter;

