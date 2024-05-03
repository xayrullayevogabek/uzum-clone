import { ProductType } from "@/types";
import React from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

interface Props {
  item: ProductType;
  quantity?: number;
  handleClick: (type: string, id: number) => void;
}

const Counter = ({ item, quantity, handleClick }: Props) => {
  return (
    <div className="mr-2 border border-gray-300 rounded-md w-28 px-2 flex justify-between py-2">
      <button
        className={`${
          (item.quantity ? item.quantity : quantity) === 1
            ? "text-gray-400"
            : ""
        }`}
        onClick={() => {
          (item.quantity ? item.quantity : quantity) !== 1
            ? handleClick("decrement", item.id)
            : "";
        }}
      >
        <FiMinus />
      </button>
      <span>{item.quantity ? item.quantity : quantity}</span>
      <button
        className={`${
          (item.quantity ? item.quantity : quantity) === item.stock
            ? "text-gray-400"
            : ""
        }`}
        onClick={() => {
          (item.quantity ? item.quantity : quantity) !== item.stock
            ? handleClick("increment", item.id)
            : "";
        }}
      >
        <FiPlus />
      </button>
    </div>
  );
};

export default Counter;
