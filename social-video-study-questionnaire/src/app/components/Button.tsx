import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  context: string;
  width?: string;
  fontSize?: string;
  disabled?: boolean;
  noAction?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  context,
  width = "",
  fontSize = "",
  disabled = false,
  noAction = false,
  ...props
}) => {
  return noAction ? (
    <button
      className={`${width} ${fontSize} rounded bg-black py-2 text-white shadow-md shadow-gray-600 transition-colors duration-200`}
      disabled={disabled}
      {...props}
    >
      {context}
    </button>
  ) : disabled ? (
    <button
      className={`${width} ${fontSize} cursor-not-allowed rounded bg-gray-300 py-2 text-white shadow-md shadow-gray-600 transition-colors duration-200`}
      disabled={disabled}
      {...props}
    >
      {context}
    </button>
  ) : (
    <button
      className={`${width} ${fontSize} rounded bg-black py-2 text-white shadow-md shadow-gray-600 transition-colors duration-200 hover:bg-gray-600`}
      disabled={disabled}
      {...props}
    >
      {context}
    </button>
  );
};

export default Button;
