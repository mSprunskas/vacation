class Document {
    constructor() {
        this.employee = 'Vardenis Pavardenis';
        this.from = new Date();
        this.to = new Date();
    }

    setEmployee(employee) {
        this.employee = employee;
    }

    getEmployee() {
        return this.employee;
    }

    setFrom(from) {
        this.from = from;
    }

    getFrom() {
        return this.from;
    }

    setTo(to) {
        this.to = to;
    }

    getTo() {
        return this.to;
    }
}

export default Document;
