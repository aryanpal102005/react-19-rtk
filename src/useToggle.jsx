import { useState } from "react";

const useToggle = (defaultVal) => {
  const [value, setValue] = useState(defaultVal);

  function toggleValue(val) {
    if (typeof val === "boolean") {
      setValue(val);
    } else {
      setValue(prev => !prev);
    }
  }

  return [value, toggleValue];
};

export default useToggle;