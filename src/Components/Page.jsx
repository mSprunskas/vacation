import React, { PureComponent } from 'react';

import { Storage, Document } from '../Utils';
import Request from './Request';
import Form from './Form';

const storage = new Storage();

class Page extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            document: null,
        };

        this.onUpdated = this.onUpdated.bind(this);
    }

    componentDidMount() {
        const document = storage.read();

        this.setState({
            document,
        });
    }

    /**
     * @param {Document} document
     */
    onUpdated(document) {
        this.setState(
            {
                document,
            },
            () => {
                storage.write(document);
            }
        );
    }

    render() {
        const { document } = this.state;

        return (
            <div className="">
                <aside className="sidebar">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            {document !== null && (
                                <Form
                                    onUpdate={this.onUpdated}
                                    document={document}
                                />
                            )}
                        </div>
                    </div>
                </aside>
                <main className="main">
                    <div className="doc-container">
                        {document !== null && (
                            <Request
                                document={document}
                            />
                        )}
                    </div>
                </main>
            </div>
        );
    }
}

export default Page;
