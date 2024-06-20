input[type="number"] {
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;
  }
  
  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
  
  .number-input {
    border: 2px solid #ddd;
    display: inline-flex;
  }
  
  .number-input,
  .number-input * {
    box-sizing: border-box;
  }
  
  .number-input button {
    outline:none;
    -webkit-appearance: none;
    background-color: transparent;
    border: none;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    cursor: pointer;
    margin: 0;
    position: relative;
  }
  
  .number-input button:after {
    display: inline-block;
    position: absolute;
    font-family: "Font Awesome 5 Free"; 
    font-weight: 900;
    content: '\f077';
    transform: translate(-50%, -50%) rotate(180deg);
  }
  .number-input button.plus:after {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  
  .number-input input[type=number] {
    font-family: sans-serif;
    max-width: 5rem;
    padding: .5rem;
    border: solid #ddd;
    border-width: 0 2px;
    font-size: 2rem;
    height: 3rem;
    font-weight: bold;
    text-align: center;
  }