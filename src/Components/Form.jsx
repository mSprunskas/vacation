import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';

class Form extends PureComponent {
    constructor(props) {
        super(props);

        const {employee, dateFrom, dateTo} = this.props;

        this.state = {
            employee,
            dateFrom,
            dateTo
        };

        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    handleDateChange(field, value) {
        this.setState({
            [field]: value
        });
    }

    handleChange(event) {
        this.setState({
            employee: event.target.value,
        });
    }

    submit(event) {
        event.preventDefault();

        const { onUpdate } = this.props;

        onUpdate(this.state);
    }

    render() {
        const { employee, dateFrom, dateTo } = this.state;

        return (
            <div className="row">
                <div className="col-xs-8">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <form onSubmit={this.submit}>
                                <div className="form-group">
                                    <label>Vardas Pavardė</label>
                                    <input type="text" className="form-control" value={employee} onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Nuo</label>
                                    <div>
                                        <DatePicker
                                            selected={dateFrom}
                                            dateFormat="yyyy-MM-dd"
                                            className="form-control"
                                            onChange={(value) => {
                                                this.handleDateChange('dateFrom', value)
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Iki</label>
                                    <div>
                                        <DatePicker
                                            selected={dateTo}
                                            dateFormat="yyyy-MM-dd"
                                            className="form-control"
                                            onChange={(value) => {
                                                this.handleDateChange('dateTo', value)
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="clearfix">
                                    <button type="submit" className="btn btn-primary pull-left">Pateikti</button>
                                    <button
                                        type="button"
                                        className="btn btn-default pull-right"
                                        onClick={() => window.print()}
                                    >
                                        Spausdinti
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Form.defaultProps = {
    onUpdate: () => null,
};

// TODO:   dateFrom, dateTo types
Form.propTypes = {
    employee: PropTypes.string.isRequired,
    dateFrom: PropTypes.object.isRequired,
    dateTo: PropTypes.object.isRequired,
    onUpdate: PropTypes.func,
};

export default Form;
