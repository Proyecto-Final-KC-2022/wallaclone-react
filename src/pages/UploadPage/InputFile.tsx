import React from "react";
import T from "prop-types";
import placeholder from "../../images/placeholder.png";

function InputFile({ onChange, ...props }) {
  const inputRef: any = React.createRef();
  const [src, setSrc] = React.useState(null);

  const loadSrcFromFile = (file) => {
    if (!file) {
      setSrc(null);
      return;
    }
    const reader = new FileReader();
    reader.onload = function () {
      setSrc(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleChange = (ev) => {
    const file = ev.target.files[0];
    loadSrcFromFile(file);
    onChange(ev);
  };

  return (
    <>
      <input
        ref={inputRef}
        className='hidden w-full'
        type='file'
        onChange={handleChange}
        {...props}
      />
      <img
        onClick={handleClick}
        src={src || placeholder}
        className='object-contain rounded-[10px] w-[100px] cursor-pointer'
      />
    </>
  );
}

InputFile.propTypes = {
  onChange: T.func.isRequired,
};

export default InputFile;
