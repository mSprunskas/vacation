import React from 'react';
import PropTypes from 'prop-types';

import { humanizeDate, accusative, dative, Document } from '../Utils';

// TODO: move to config
const HR_MANAGER = 'Indrė Andriulevičiūtė';
const COMPANY_NAME = 'UAB „Paysera LT“';

const Request = ({ document }) => (
    <div className="container-fluid">
        <section>
            <div><span className="highlight">{document.getEmployee()}</span></div>
            <p>(vardas, pavardė)</p>
        </section>

        <div>{COMPANY_NAME} personalo vadybininkei</div>
        <div>{dative(HR_MANAGER)}</div>

        <section className="text-right">
            <h1>Prašymas</h1>
            <p>{humanizeDate()} diena</p>
        </section>

        <section>
            Prašau išleisti mane eilinių atostogų nuo {humanizeDate(document.getFrom())} d. iki {humanizeDate(document.getTo())} d. imtinai.
            Atostoginius prašau išmokėti kartu su to mėnesio atlyginimu.
        </section>

        <section>
            <div><span className="highlight">{document.getEmployee()}</span></div>

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
            eilinių atostogų <span className="highlight">{accusative(document.getEmployee())}</span> jo prašymu nuo {humanizeDate(document.getFrom())} d. iki {humanizeDate(document.getTo())} d. imtinai.
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
    document: PropTypes.instanceOf(Document).isRequired,
};

export default Request;