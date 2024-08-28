const Button = (prop) => {
  return (
    <div
      className="btn w-[fit] py-3 px-10 bg-[rgb(0,0,0)]
     rounded-md flex items-center gap-5 hover:bg-transparent hover:border-2 hover:border-solid
      hover:border-black hover:text-black cursor-pointer text-white hover:font-[600]"
    >
      <div className="btn-name text-[18px]">{prop.title}</div>
      <div className="btn-icon p-3 bg-[rgba(239,232,232,0.25)] rounded-lg text-[20px]">
        {prop.icon}
      </div>
    </div>
  );
};

const DetailsButton = (prop) => {
  return (
    <div
    onClick={prop.addCart}
      className="btn w-[fit] py-3 px-10 bg-[rgb(0,0,0)]
rounded-md flex items-center gap-5 hover:bg-transparent hover:border-2 hover:border-solid
hover:border-black hover:text-black cursor-pointer text-white hover:font-[600]"
    >
      <div className="btn-name text-[18px]">{prop.title}</div>
      <div className="btn-icon rounded-lg text-[20px]">{prop.icon}</div>
    </div>
  );
};

export default Button;
export { DetailsButton };
