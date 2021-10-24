import React, { Component } from 'react';
import { Button, Col, Input, Row } from 'reactstrap';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    hangdleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }


    render() {
        return (
            <Row className="container mb-3">
                <div className="col-3 row">
                    <Input className="text-center" type="text" placeholder="Employee Name"
                        onChange={this.hangdleChange} value={this.state.value} />
                </div>
                <div className="col-2">
                    <Button type="reset" className="bg-primary" value="reset"
                        onClick={() => this.props.keyWord(this.state.value)}>
                        Find
                    </Button>
                </div>
            </Row>
        );
    }
}

export default Search;
//trinhf duye