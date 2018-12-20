import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';

import { Document } from '../Utils';

class Form extends PureComponent {
    constructor(props) {
        super(props);

        const { document } = this.props;

        this.state = {
            document,
        };

        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    handleChange(field, value) {
        const { document } = this.state;

        const newDoc = Object.assign(Object.create(Object.getPrototypeOf(document)), document);

        if (field === 'employee') {
            newDoc.setEmployee(value);
        }

        if (field === 'dateFrom') {
            newDoc.setFrom(value);
        }

        if (field === 'dateTo') {
            newDoc.setTo(value);
        }

        this.setState({
            document: newDoc,
        });
    }

    submit(event) {
        event.preventDefault();

        const { onUpdate } = this.props;
        const { document } = this.state;

        onUpdate(document);
    }

    render() {
        const { document } = this.state;

        return (
            <form onSubmit={this.submit}>
                <div className="form-group">
                    <label>Vardas Pavardė</label>
                    <input
                        type="text"
                        className="form-control"
                        value={document.getEmployee()}
                        onChange={(event) => {
                            this.handleChange('employee', event.target.value)
                        }}
                    />
                </div>
                <div className="form-group">
                    <label>Nuo</label>
                    <div>
                        <DatePicker
                            selected={document.getFrom()}
                            dateFormat="yyyy-MM-dd"
                            className="form-control"
                            onChange={(value) => {
                                this.handleChange('dateFrom', value)
                            }}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label>Iki</label>
                    <div>
                        <DatePicker
                            selected={document.getTo()}
                            dateFormat="yyyy-MM-dd"
                            className="form-control"
                            onChange={(value) => {
                                this.handleChange('dateTo', value)
                            }}
                        />
                    </div>
                </div>
                <div className="clearfix">
                    <button
                        type="submit"
                        className="btn btn-primary pull-left"
                    >
                        Pateikti
                    </button>
                    <button
                        type="button"
                        className="btn btn-default pull-right"
                        onClick={() => window.print()}
                    >
                        Spausdinti
                    </button>
                </div>
            </form>
        );
    }
}

Form.defaultProps = {
    onUpdate: () => null,
};

Form.propTypes = {
    document: PropTypes.instanceOf(Document).isRequired,
    onUpdate: PropTypes.func,
};

export default Form;
