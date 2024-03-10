import { useState } from "react";

const HideBtn = ({ hideBtnSwitch }) => {
  const [hideBtn, setHideBtn] = useState(false);

  return <button onClick={() => hideBtnSwitch()}>hide</button>;
};

export default HideBtn;
