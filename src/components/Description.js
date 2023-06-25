import React, { useState } from "react";

const Description = ({ handleAddToCart }) => {
  const product = {
    subTitle: "Sneaker Company",
    title: "Fall Limited Edition Sneakers",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    img: "/images/image-product-1.jpg",
    price: 250.0,
    reducedPercent: 50,
  };
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="md:px-0 px-5">
      <h1 className="font-bold md:text-4xl text-3xl md:mb-9 mb-6">
        <span className="block uppercase text-sm text-[color:var(--orange)] md:pb-6 pb-4">
          {product.subTitle}
        </span>
        {product.title}
      </h1>
      <p className="mb-8 text-[color:var(--dark-grayish-blue)] md:text-base">
        {product.description}
      </p>
      <div className="sm:block flex justify-between items-center mb-6">
        <div className="flex items-center justify-start gap-4 sm:mb-3">
          <h2 className="text-[color:var(--very-dark-blue)] font-bold text-2xl">
            <span>$</span>
            {(product.price * (product.reducedPercent / 100)).toFixed(2)}
          </h2>
          <p className="py-1 px-2 text-[color:var(--orange)] font-bold rounded-md bg-[color:var(--pale-orange)]">
            {product.reducedPercent}
            <span>%</span>
          </p>
        </div>
        <p className="sm:mb-9 text-[color:var(--grayish-blue)] line-through font-semibold">
          <span>$</span>
          {product.price.toFixed(2)}
        </p>
      </div>
      <div className="flex sm:flex-row flex-col gap-4">
        <div className="md:basis-1/3 sm:basis-1/2">
          <div className="flex items-center justify-between h-12 bg-[color:var(--light-grayish-blue)] rounded-md px-4 text-base">
            <button onClick={() => quantity > 0 && setQuantity(quantity - 1)}>
              <img src="/images/icon-minus.svg" alt="icon minus" />
            </button>
            <span className="font-bold text-[color:var(--very-dark-blue)]">
              {quantity}
            </span>
            <button onClick={() => setQuantity(quantity + 1)}>
              <img src="/images/icon-plus.svg" alt="icon plus" />
            </button>
          </div>
        </div>
        <div className="md:basis-2/3 sm:basis-1/2">
          <button
            className="w-full h-12 font-bold text-base text-[color:var(--white)] bg-[color:var(--orange)] flex items-center justify-center gap-3 px-4 rounded-md hover:opacity-70 hover:shadow-xl hover:shadow-[color:var(--pale-orange)]"
            onClick={() =>
              quantity > 0 && handleAddToCart({ product, quantity })
            }
          >
            <img src="/images/icon-cart-btn.svg" alt="icon cart btn" />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Description;
