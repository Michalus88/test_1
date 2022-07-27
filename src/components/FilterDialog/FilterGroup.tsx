import React, { useState } from 'react';
import { RadioButton } from 'primereact/radiobutton';
import { InputNumber } from 'primereact/inputnumber';
import { MegaButton } from '../Elements/MegaButton';
import { StarButtonGroup } from './StarsButttonGroup';

export const FilterGroup = () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState<number | null>(null);
  const [value4, setValue4] = useState<number | null>(null);
  const [value5, setValue5] = useState<number | null>(0);
  const [radioValue1, setRadioValue1] = useState(null);

  const clicked = () => {
    console.log('Clicked');
  };

  let suffix = '';
  if (value5 === 0) suffix = ' miesięcy';
  if (value5 === 1) suffix = ' miesiąc';
  if (value5 === 2) suffix = ' miesiące';
  if (value5 === 3) suffix = ' miesiące';
  if (value5 === 4) suffix = ' miesiące';
  if (value5 !== null && value5 >= 4) suffix = ' miesięcy';

  return (
    <>
      <div className="filter-star-butons-wraper">
        <div className="filter-star-butons-tile">Ocena przejścia kursu</div>
        <StarButtonGroup />
      </div>
      <div className="filter-star-butons-wraper">
        <div className="filter-star-butons-tile">Ocena aktywności i zaangażowania na kursie</div>
        <StarButtonGroup />
      </div>
      <div className="filter-star-butons-wraper">
        <div className="filter-star-butons-tile">Ocena kodu w projekcie własnym</div>
        <StarButtonGroup />
      </div>
      <div className="filter-star-butons-wraper">
        <div className="filter-star-butons-tile">Ocena pracy w zespole Scrum</div>
        <StarButtonGroup />
      </div>
      <div className="filter-star-butons-wraper">
        <div className="filter-star-butons-tile">Preferowanie miejsce pracy</div>
        <div className="filter-star-butons-group">
          <MegaButton
            classNameAdd="megak-secondary filter-star-butons-group-small"
            buttonTitle="Praca zdala"
            onClick={() => clicked()}
          />
          <MegaButton
            classNameAdd="megak-secondary filter-star-butons-group-small"
            buttonTitle="Praca w biurze"
            onClick={() => clicked()}
          />
        </div>
      </div>
      <div className="filter-star-butons-wraper">
        <div className="filter-star-butons-tile">Oczekiwany typ kontraktu</div>
        <div className="filter-star-butons-group">
          <MegaButton
            classNameAdd="megak-secondary filter-star-butons-group-small"
            buttonTitle="Umowa o pracę"
            onClick={() => clicked()}
          />
          <MegaButton
            classNameAdd="megak-secondary filter-star-butons-group-small"
            buttonTitle="B2B"
            onClick={() => clicked()}
          />
          <MegaButton
            classNameAdd="megak-secondary filter-star-butons-group-small"
            buttonTitle="Umowa zlecenie"
            onClick={() => clicked()}
          />
          <MegaButton
            classNameAdd="megak-secondary filter-star-butons-group-small"
            buttonTitle="Umowa o dzieło"
            onClick={() => clicked()}
          />
        </div>
      </div>
      <div className="filter-star-butons-wraper">
        <div className="filter-star-butons-tile">Oczekiwane wynagrodzenie miesięczne netto</div>
        <div className="filter-star-butons-group">
          <div className="filter-input-wrap">
            <label htmlFor="stacked">Od </label>
            <InputNumber
              size={10}
              inputId="stacked"
              value={value3}
              onValueChange={(e) => setValue3(e.value)}
              showButtons={false}
              placeholder="np. 1000 zł"
              min={0}
            />
          </div>
          <div className="filter-input-wrap">
            <label htmlFor="stacked">Do </label>
            <InputNumber
              size={10}
              inputId="stacked"
              value={value4}
              onValueChange={(e) => setValue4(e.value)}
              showButtons={false}
              placeholder="np. 100000 zł"
              min={0}
            />
          </div>
        </div>
      </div>
      <div className="filter-star-butons-wraper">
        <div className="filter-star-butons-tile">
          Zgoda na odbycie bezpłatnych praktyk/starzu na początek
        </div>
        <div className="filter-radio-butons-group">
          <div className="filter-radiobutton">
            <RadioButton
              inputId="yes"
              name="yes"
              value="Yes"
              onChange={(e) => setRadioValue1(e.value)}
              checked={radioValue1 === 'Yes'}
            />
            <label className="filter-radio-label" htmlFor="yes">
              Tak
            </label>
          </div>
          <div className="filter-radiobutton">
            <RadioButton
              inputId="no"
              name="no"
              value="No"
              onChange={(e) => setRadioValue1(e.value)}
              checked={radioValue1 === 'No'}
            />
            <label className="filter-radio-label" htmlFor="no">
              Nie
            </label>
          </div>
        </div>
      </div>
      <div className="filter-star-butons-wraper">
        <div className="filter-star-butons-tile">Oczekiwane wynagrodzenie miesięczne netto</div>
        <div className="filter-star-butons-group">
          <div className="filter-input-wrap">
            <InputNumber
              size={8}
              min={0}
              inputId="stacked"
              value={value5}
              onValueChange={(e) => setValue5(e.value)}
              showButtons
              suffix={suffix}
            />
          </div>
        </div>
      </div>
    </>
  );
};
