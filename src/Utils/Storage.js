import ls from 'local-storage';

import Document from './Document';

class Storage {
    constructor() {
        this.key = 'vacation';
    }

    /**
     * @param {Document} document
     */
    write(document) {
        ls.set(
            this.key,
            {
                employee: document.getEmployee(),
                from: document.getFrom(),
                to: document.getTo(),
            }
        );
    }

    /**
     * @returns {Document}
     */
    read() {
        const doc = new Document();

        const data = ls.get(this.key) || {};

        if (typeof data.employee === 'string') {
            doc.setEmployee(data.employee);
        }

        if (typeof data.from === 'string') {
            try {
                const dateFrom = new Date(data.from);
                doc.setFrom(dateFrom);
            } catch (e) {
            }
        }

        if (typeof data.to === 'string') {
            try {
                const dateTo = new Date(data.to);
                doc.setTo(dateTo);
            } catch (e) {
            }
        }

        return doc;
    }
}

export default Storage;
