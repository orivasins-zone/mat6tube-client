const Button = ({ className, children }) => {
  return (
    <>
      <button
        className={`${className} px-4 py-1.5 bg-[#242424] text-[#888] capitalize cursor-pointer font-semibold rounded-md text-xs`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
