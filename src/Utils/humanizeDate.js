import moment from 'moment';

/**
 * @param {Date|null} date
 * @returns {string}
 */
export default (date = null) => {
    date = date === null ? new Date() : date;

    moment.locale('lt');
    return moment(date).format('YYYY MMMM D');
}
