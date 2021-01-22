import React from 'react';
import { Row, Col } from 'reactstrap';

const TableSearch = (props) => {
    let input = null;

    const handleSearch = () => {
        props.onSearch(input.value);
    };

    const handleClear = () => {
        input.value = '';
        props.onClear();
    };

    const handleKeyPressed = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
          }
    }

    return (
        <Row className='mb-20'>
            <Col md='8'>
                <input
                    className='form-control'
                    onKeyPress={handleKeyPressed}
                    ref={(n) => (input = n)}
                    type='text'
                />
            </Col>
            <Col md='2' className='text-right'>
                <button
                    className='btn btn-fullwidth btn-primary'
                    onClick={handleSearch}>
                    Click to Search
                </button>
            </Col>
            <Col md='2' className='text-right'>
                <button
                    className='btn btn-fullwidth btn-secondary'
                    onClick={handleClear}>
                    Click to clear
                </button>
            </Col>
        </Row>
    );
};

export default TableSearch;
