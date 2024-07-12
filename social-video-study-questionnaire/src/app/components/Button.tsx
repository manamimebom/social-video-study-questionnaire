import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  context: string;
  width?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  context,
  width = "auto",
  disabled = false,
  ...props
}) => {
  return disabled ? (
    <button
      className={`${width} cursor-not-allowed rounded bg-gray-300 py-2 text-white shadow-md shadow-gray-600 transition-colors duration-200`}
      disabled={disabled}
      {...props}
    >
      {context}
    </button>
  ) : (
    <button
      className={`${width} rounded bg-black py-2 text-white shadow-md shadow-gray-600 transition-colors duration-200 hover:bg-gray-600`}
      disabled={disabled}
      {...props}
    >
      {context}
    </button>
  );
};

export default Button;
