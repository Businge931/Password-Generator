import React from "react";
import { useState, useRef } from "react";
import classes from "./CharacterLength.module.css";

const CharacterLength = ({ passwordLength, setPasswordLength }) => {
  const [spn, setSpn] = useState();

  const inputRef = useRef(null);

  const manageLength = (e) => {
    setPasswordLength(e.target.value);
    console.log(e);
    // setSpn(e.target.value);
  };

  return (
    <>
      <div className={classes.length}>
        <p className={classes.length_word}>Character Length</p>
        <p className={classes.length_number}>{passwordLength}</p>
      </div>
      <div className={classes.range_outer}>
        {/* <span
          className={classes.range_span}
          style={{ width: `${spn}px` }}
        ></span> */}
        <input
          type="range"
          min="2"
          max="10"
          step="1"
          ref={inputRef}
          defaultValue={6}
          onChange={manageLength}
          className={classes.range_slider}
        />
      </div>
    </>
  );
};

export default CharacterLength;
