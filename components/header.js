const sizes = {
  big: "text-6xl font-bold tracking-tighter leading-tight md:pr-8",
  small: "text-2xl font-bold tracking-tighter leading-tight md:pr-8",
};
const Header = ({ size }) => {
  return (
    <section
      className={
        "flex-col md:flex-row ml-10 flex items-center md:justify-between " +
        (size === "big" ? "mt-16" : "mt-5") +
        " mb-16 md:mb-12"
      }
    >
      <a href="/">
        <h1 className={sizes[size]}>
          Wallet blamer. <i aria-hidden className="fa fa-paper-plane mx-5"></i>
        </h1>
      </a>
    </section>
  );
};

export default Header;
