import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
import Orders from "./Orders";

const PlaceOrder = () => {
  const [method, setMethod] = useState("");
  const { navigate } = useContext(ShopContext);

  // Method handler to apply styling based on the selected method
  const handleMethodChange = (selectedMethod) => {
    setMethod(selectedMethod);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/*-------left side*/}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1="DELIVERY" text2="INFORMATION" />
        </div>
        <div className="flex gap-3">
          <input
            className="border border-grey-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="First name"
          />
          <input
            className="border border-grey-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Last name"
          />
        </div>
        <input
          className="border border-grey-300 rounded py-1.5 px-3.5 w-full"
          type="email"
          placeholder="Email address"
        />
        <input
          className="border border-grey-300 rounded py-1.5 px-3.5 w-full"
          type="text"
          placeholder="Street"
        />
        <div className="flex gap-3">
          <input
            className="border border-grey-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="City"
          />
          <input
            className="border border-grey-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="State"
          />
        </div>
        <div className="flex gap-3">
          <input
            className="border border-grey-300 rounded py-1.5 px-3.5 w-full"
            type="number"
            placeholder="Zipcode"
          />
          <input
            className="border border-grey-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Country"
          />
        </div>
        <input
          className="border border-grey-300 rounded py-1.5 px-3.5 w-full"
          type="number"
          placeholder="Phone"
        />
      </div>

      {/*-------Right side*/}
      <div className="mt-8 sm:mt-16 sm:ml-16">
        <div className="min-w-80 max-w-[100%] overflow-hidden">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title text1="PAYMENT" text2="METHOD" />
          {/*--------------------Payment Method Selection--------------*/}
          <div className="flex flex-col lg:flex-row gap-3">
            <div
              onClick={() => handleMethodChange("stripe")}
              className={`flex items-center gap-3 border p-2 px-3 cursor-pointer rounded-lg ${
                method === "stripe"
                  ? "border-blue-500 bg-blue-50"
                  : "border-grey-300"
              }`}
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "stripe" ? "bg-blue-500" : "bg-white"
                }`}
              ></p>
              <img
                className="h-5 mx-4 max-w-[100px] truncate"
                src={assets.stripe_logo}
                alt="Stripe"
              />
            </div>
            <div
              onClick={() => handleMethodChange("razorpay")}
              className={`flex items-center gap-3 border p-2 px-3 cursor-pointer rounded-lg ${
                method === "razorpay"
                  ? "border-blue-500 bg-blue-50"
                  : "border-grey-300"
              }`}
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "razorpay" ? "bg-blue-500" : "bg-white"
                }`}
              ></p>
              <img
                className="h-5 mx-4 max-w-[100px] truncate"
                src={assets.razorpay_logo}
                alt="Razorpay"
              />
            </div>
            <div
              onClick={() => handleMethodChange("cod")}
              className={`flex items-center gap-3 border p-2 px-3 cursor-pointer rounded-lg ${
                method === "cod"
                  ? "border-blue-500 bg-blue-50"
                  : "border-grey-300"
              }`}
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "cod" ? "bg-blue-500" : "bg-white"
                }`}
              ></p>
              <p className="text-grey-500 text-sm font-medium mx-4 max-w-[100px] truncate">
                CASH ON DELIVERY
              </p>
            </div>
          </div>

          <div className="w-full text-end mt-8">
            <button
              onClick={() => navigate(Orders)}
              className="bg-black text-white px-16 py-3 text-sm"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
