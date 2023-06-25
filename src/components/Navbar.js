import React, { useState } from "react";

const Navbar = ({ cart, handleDelete }) => {
  const [nav, setNav] = useState(true);
  const [miniBasket, setMiniBasket] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleBasket = () => {
    setMiniBasket(!miniBasket);
  };

  return (
    <header className="relative flex justify-between items-center max-w-[1150px] mx-auto py-6 md:py-11 px-5 md:border-b">
      <nav className="flex items-center justify-between w-full">
        <div className="flex md:gap-9 gap-4 items-center">
          <img
            src="/images/icon-menu.svg"
            alt="icon menu"
            onClick={handleNav}
            className="block md:hidden cursor-pointer"
          />
          <div
            className={
              !nav
                ? "fixed w-[60%] h-full top-0 left-0 bg-[color:var(--white)] pt-5 pl-5 ease-in-out duration-500 z-10"
                : "fixed left-[-100%]"
            }
          >
            <img
              src="/images/icon-close.svg"
              alt="icon close"
              className="cursor-pointer"
              onClick={handleNav}
            />
            <ul className="pt-12 font-bold text-[color:var(--black)]">
              <li className="pb-7">
                <a href="/">Collections</a>
              </li>
              <li className="pb-7">
                <a href="/">Men</a>
              </li>
              <li className="pb-7">
                <a href="/">Women</a>
              </li>
              <li className="pb-7">
                <a href="/">About</a>
              </li>
              <li className="pb-7">
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>

          {!nav && (
            <div className="fixed top-0 left-0 w-full h-full bg-[color:var(--black)] opacity-75 z-1"></div>
          )}
          <img src="/images/logo.svg" alt="logo" />
          <ul className="hidden md:flex text-[color:var(--dark-grayish-blue)] text-sm">
            <li className="px-4 hover:text-[color:var(--very-dark-blue)]">
              <a
                href="/"
                className="relative before:absolute before:block before:-bottom-[3.75rem] before:h-1 before:w-full before:left-0 before:bg-[color:var(--orange)] before:opacity-0 transition duration-500 ease-in-out hover:before:opacity-100"
              >
                Collections
              </a>
            </li>
            <li className="px-4 hover:text-[color:var(--very-dark-blue)]">
              <a
                href="/"
                className="relative before:absolute before:block before:-bottom-[3.75rem] before:h-1 before:w-full before:left-0 before:bg-[color:var(--orange)] before:opacity-0 transition duration-500 ease-in-out hover:before:opacity-100"
              >
                Men
              </a>
            </li>
            <li className="px-4 hover:text-[color:var(--very-dark-blue)]">
              <a
                href="/"
                className="relative before:absolute before:block before:-bottom-[3.75rem] before:h-1 before:w-full before:left-0 before:bg-[color:var(--orange)] before:opacity-0 transition duration-500 ease-in-out hover:before:opacity-100"
              >
                Women
              </a>
            </li>
            <li className="px-4 hover:text-[color:var(--very-dark-blue)]">
              <a
                href="/"
                className="relative before:absolute before:block before:-bottom-[3.75rem] before:h-1 before:w-full before:left-0 before:bg-[color:var(--orange)] before:opacity-0 transition duration-500 ease-in-out hover:before:opacity-100"
              >
                About
              </a>
            </li>
            <li className="px-4 hover:text-[color:var(--very-dark-blue)]">
              <a
                href="/"
                className="relative before:absolute before:block before:-bottom-[3.75rem] before:h-1 before:w-full before:left-0 before:bg-[color:var(--orange)] before:opacity-0 transition duration-500 ease-in-out hover:before:opacity-100"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="flex md:gap-11 gap-4 items-center">
          <div className="relative cursor-pointer" onClick={handleBasket}>
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-3 text-[color:var(--white)] w-5 h-4 text-center rounded-3xl bg-[color:var(--orange)] text-xs flex items-center justify-center">
                {cart.map((item) => item.quantity).reduce((a, b) => a + b)}
              </span>
            )}
            <img src="/images/icon-cart.svg" alt="icon cart" />
          </div>

          <div className="md:w-[50px] w-6 border-2 border-transparent rounded-full hover:border-[color:var(--orange)] cursor-pointer">
            <img src="/images/image-avatar.png" alt="avatar" />
          </div>
        </div>
      </nav>
      {miniBasket && (
        <div className="absolute sm:w-[360px] w-[98%] sm:top-28 top-20 xl:right-0 right-[1%] bg-[color:var(--white)] rounded-md shadow-2xl z-1">
          <p className="p-6 font-bold border-b">Cart</p>
          <div className="px-6 pt-6 pb-8">
            {cart.length === 0 ? (
              <p className="py-12 text-center font-bold text-[color:var(--dark-grayish-blue)]">
                Your cart is empty
              </p>
            ) : (
              cart.map((prod, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-6">
                    <img
                      src={prod.img}
                      alt="prod"
                      className="w-[50px] h-[50px] rounded-md"
                    />
                    <div>
                      <p className="mb-2">{prod.title}</p>
                      <div className="flex gap-1">
                        <p>
                          <span>$</span>
                          {(prod.price * (prod.reducedPercent / 100)).toFixed(
                            2
                          )}
                        </p>
                        <p>x</p>
                        <p>{prod.quantity}</p>
                        <p className="font-bold">
                          <span>$</span>
                          {(
                            prod.price *
                            (prod.reducedPercent / 100) *
                            prod.quantity
                          ).toFixed(2)}
                        </p>
                      </div>
                    </div>
                    <img
                      src="/images/icon-delete.svg"
                      alt="icon delete"
                      className="cursor-pointer"
                      onClick={() => handleDelete(prod.id)}
                    />
                  </div>
                  <button className="w-full bg-[color:var(--orange)] text-[color:var(--white)] rounded-md font-semibold py-4 text-center">
                    Checkout
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
