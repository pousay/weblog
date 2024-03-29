import { useState } from "react";

function Btt() {
  const [hideOrShown, sethideOrShown] = useState(true);
  document.addEventListener("scroll", () => {
    if (window.scrollY > 250) {
      sethideOrShown(false);
    } else {
      sethideOrShown(true);
    }
  });

  return (
    <>
      <button
        hidden={hideOrShown}
        className="btt m-0 border-0 d-flex justify-content-center align-items-center"
      >
        <svg width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
          <path
            fillRule="evenodd"
            d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
          />
        </svg>
      </button>
    </>
  );
}

export default Btt;
