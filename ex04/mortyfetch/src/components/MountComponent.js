import React from "react";

export const MountComponent = ({ mounted, setMounted }) => {
  return (
    <div>
      <input
        type="checkbox"
        id="mounted"
        value={mounted}
        checked={mounted}
        onChange={setMounted}
      ></input>
      <label htmlFor="mounted">Mount the search bar</label>
    </div>
  );
};
