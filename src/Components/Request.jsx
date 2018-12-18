import React from 'react';
import PropTypes from 'prop-types';

import { humanizeDate, accusative, dative } from '../Utils';

// TODO: move to config
const HR_MANAGER = 'Indrė Andriulevičiūtė';
const COMPANY_NAME = 'UAB „PayseraLT“';

const Request = ({ employee, dateFrom, dateTo }) => (
    <div className="container-fluid">
        <section>
            <div><span className="highlight">{employee}</span></div>
            <p>(vardas, pavardė)</p>
        </section>

        <div>UAB "Paysera LT" personalo vadybininkei</div>
        <div>{dative(HR_MANAGER)}</div>

        <section className="text-right">
            <h1>Prašymas</h1>
            <p>{humanizeDate()} diena</p>
        </section>

        <section>
            Prašau išleisti mane eilinių atostogų nuo {humanizeDate(dateFrom)} d. iki {humanizeDate(dateTo)} d. imtinai.
            Atostoginius prašau išmokėti kartu su to mėnesio atlyginimu.
        </section>

        <section>
            <div><span className="highlight">{employee}</span></div>

            <div className="row">
                <div className="col-xs-6">(vardas, pavardė) </div>
                <div className="col-xs-6 text-right">(parašas)</div>
            </div>
        </section>

        <section>
            <div>
                <p>Sutinku. Informacinių sistemų departamento vadovas Marius Balčytis</p>
            </div>
            <div className="text-right">
                (parašas)
            </div>
        </section>

        <hr />

        <section>
            <h1>{COMPANY_NAME}</h1>
            <div>Įmonės kodas: 300060819</div>
            <div>Mėnulio g. 7, Vilnius</div>
        </section>

        <section className="text-right">
            <h2>ĮSAKYMAS NR.</h2>
            <p>{humanizeDate()} diena</p>
        </section>

        <section>
            Aš, {COMPANY_NAME} personalo vadybininkė, {HR_MANAGER} įsakau išleisti
            eilinių atostogų <span className="highlight">{accusative(employee)}</span> jo prašymu nuo {humanizeDate(dateFrom)} d. iki {humanizeDate(dateTo)} d. imtinai.
        </section>

        <section>
            <div className="row">
                <div className="col-xs-6">Personalo vadybininkė</div>
                <div className="col-xs-6 text-right">{HR_MANAGER}</div>
            </div>
        </section>
    </div>
);

Request.propTypes = {
    employee: PropTypes.string.isRequired,
    dateFrom: PropTypes.object.isRequired,
    dateTo: PropTypes.object.isRequired,
};

export default Request;