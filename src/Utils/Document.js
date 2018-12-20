class Document {
    constructor() {
        this.employee = 'Vardenis Pavardenis';
        this.from = new Date();
        this.to = new Date();
    }

    /**
     * @param {string} employee
     */
    setEmployee(employee) {
        this.employee = employee;
    }

    /**
     * @returns {string}
     */
    getEmployee() {
        return this.employee;
    }

    /**
     * @param {Date} from
     */
    setFrom(from) {
        this.from = from;
    }

    /**
     * @returns {Date}
     */
    getFrom() {
        return this.from;
    }

    /**
     * @param {Date} to
     */
    setTo(to) {
        this.to = to;
    }

    /**
     * @returns {Date}
     */
    getTo() {
        return this.to;
    }
}

export default Document;
