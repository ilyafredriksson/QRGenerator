import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import s from "./qrCodeGenerator.module.css";
import { GENERATE_DATA } from "../../constants";

const QrCodeGenerator = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const onClickHandler = () => {
    if (!value.trim()) return; // undvik tomma strängar

    // Hämta tidigare historik
    const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || "[]");

    // Lägg till nya värdet
    const updated = [...prevData, value];

    // Spara tillbaka i localStorage
    localStorage.setItem(GENERATE_DATA, JSON.stringify(updated));

    // Uppdatera state
    setResult(value);
    setValue("");
  };

  const onChangeHandler = (event) => {
    setValue(event.target.value);
    setResult(""); // ta bort tidigare visad QR om man börjar skriva ny text
  };

  return (
    <div className={s.container}>
      <input
        type="text"
        value={value}
        placeholder="Enter text"
        onChange={onChangeHandler}
        className={s.input}
      />

      <button type="button" className={s.button} onClick={onClickHandler}>
        Generate QR
      </button>

      {result && (
        <div className={s.qrWrapper}>
          <QRCodeSVG value={result} size={200} />
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export { QrCodeGenerator };
