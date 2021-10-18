import { h } from "preact";
import style from "./style.css";
import { useState } from "preact/hooks";
import convertToWords from "../../code/convertToWords";
export default function Home(params) {
  const [text, setText] = useState("");
  function onChangeInput(e) {
    console.log(234);
    setText(convertToWords(e.target.value));
  }
  return (
    <div class={style.home}>
      <input type="text" onInput={onChangeInput} />
      <h2>{text}</h2>
    </div>
  );
}
