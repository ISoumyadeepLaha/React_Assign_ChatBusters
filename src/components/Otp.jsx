// How to create OTP Input Component? JavaScript | HTML | CSS | React.js

// •	Input field should take exactly 6 numbers.
// •	Only numbers should be allowed as valid input.
// •	Component should support Backspace, Delete, Shift + Tab, Left Arrow Key, and Right Arrow Key for navigation and operations.
// •	Component should support paste functionality if the input is correct (6 numbers).
// •	Submit button should only be activate when entered OTP length is equal to 6.
// •	Whenever an input is active then it should be highlighted.

import React, { useState } from "react";

const Otp = () => {
  const [otpInput, setOtpInput] = useState(new Array(6).fill(""));

  const handleChange = (ele, index) => {
    if (isNaN(ele.value)) return false;

    setOtpInput([
      ...otpInput.map((d, i) => {
        return i === index ? ele.value : d;
      }),
    ]);

    if (ele.nextSibling) {
      ele.nextSibling.focus();
    }
  };

  return (
    <>
      <div class="container">
        <div class="row">
          <h2>Verify OTP</h2>
          <h6 class="mb-3">Please enter 6 digit OTP send to your email.</h6>
          {otpInput.map((data, index) => {
            return (
              <input
                className="otp "
                type="text"
                maxlength={1}
                key={index}
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onFocus={(e) => e.target.select}
              />
            );
          })}
          <div class="form-group mb-3">
            <button type="submit" class="btn ">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Otp;
