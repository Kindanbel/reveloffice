const footer_links = [
  {
    header: "Menu",
    links: ["Track orders", "Contact", "Collection"],
  },
  {
    header: "Legal",
    links: ["Shipping", "Track order", "Returns", "Support"],
  },
  {
    header: "Socials",
    links: ["Facebook", "Instagram", "LinkedIn", "Pinterest"],
  },
  {
    header: "Help",
    links: ["Contact", "Customer Support", "Inquiries"],
  },
];

const Footer = () => {
  return (
    <footer className="footer px-[3%] bg-white h-fit rounded-tr-[30px] rounded-tl-[30px]">
      <div className="upperSide pt-[50px] pb-[40px] flex flex-col gap-3 md:flex-row justify-between border-b-2 border-solid border-[rgba(0,0,0,0.25)]">
        <div className="logo font-bold ">REVELOFFICE</div>
        <div className="text text-[rgba(0,0,0,0.75)]">
          Your one stop destination for quality <br /> workspace equipments.
        </div>
      </div>

      <div className="lowerSide pt-[50px] pb-[50px] flex flex-col lg:flex-row gap-5 justify-between">
        <div className="slide">
          <div className="text mb-5">
            Trusted by various payment gateway <br /> across different location
          </div>
          <div className="cards flex items-center gap-3">
            <div className="paypal">
              <img
                src="/images/paypal2.png"
                alt="logo"
                width={30}
                height={30}
              />
            </div>
            <div className="paypal">
              <img
                src="/images/master 1.png"
                alt="logo"
                width={50}
                height={50}
              />{" "}
            </div>
            <div className="paypal">
              <img src="/images/visa 1.png" alt="logo" width={70} height={70} />{" "}
            </div>
          </div>
        </div>
        <div className="links grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 md:gap-10 lg:gap-20">
          {footer_links.map((item, index) => {
            return (
              <div key={index} className="footerlink">
                <div className="header text-black font-[600] mb-5">
                  {item.header}
                </div>
                <div className="links flex flex-col gap-5">
                  {item.links.map((item, index) => {
                    return (
                      <ul key={index}>
                        <li className="links">
                          <a
                            className="text-[rgba(0,0,0,0.75)] hover:text-[rgba(0,0,0)]"
                            href="#"
                          >
                            {item}
                          </a>
                        </li>
                      </ul>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="condition pt-[20px] pb-[50px]"> Terms & Condition 2024</div>
    </footer>
  );
};

export default Footer;
