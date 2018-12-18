import React, {Fragment, PureComponent} from 'react';
import ls from 'local-storage';

import Request from "./Request";
import Form from "./Form";

const INITIAL_STATE = {
    employee: '',
    dateFrom: new Date(),
    dateTo: new Date(),
};

class Page extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            employee: 'Vardenis Pavardenis',
            dateFrom: new Date(),
            dateTo: new Date(),
        };

        this.storageKey = 'vacation';

        this.onUpdated = this.onUpdated.bind(this);
    }

    componentDidMount() {
        const data = ls.get(this.storageKey) || {};

        // TODO: fixme
        this.setState({
            employee: data.employee ?  data.employee : '',
            //dateFrom: data.dateFrom ?  new Date(data.dateFrom) : new Date(),
            //dateTo: data.dateTo ?  new Date(data.dateTo) : new Date(),
        });
    }

    onUpdated(data) {
        this.setState(
            data,
            () => {
                ls.set(this.storageKey, data);
            }
        );
    }

    render() {
        const { employee, dateFrom, dateTo } = this.state;

        return (
            <div className="page-layout">
                <Request
                    employee={employee}
                    dateFrom={dateFrom}
                    dateTo={dateTo}
                />
                <hr />
                <div className="container-fluid">
                    <Form
                        onUpdate={this.onUpdated}
                        employee={employee}
                        dateFrom={dateFrom}
                        dateTo={dateTo}
                    />
                </div>
            </div>
        );
    }
}

export default Page;
