import React from "react";

export default function CurrencyRow(props) {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    amount,
    onChangeAmount,
  } = props;
  //console.log(props);
  return (
    <div>
      <input
        type=" number"
        className="input"
        value={amount}
        onChange={onChangeAmount}
      />
      <select
        className="select"
        value={selectedCurrency}
        onChange={onChangeCurrency}
      >
        {currencyOptions.map((currencyOption) => {
          return (
            <option key={currencyOption} value={currencyOption}>
              {currencyOption}
            </option>
          );
        })}
      </select>
    </div>
  );
}
