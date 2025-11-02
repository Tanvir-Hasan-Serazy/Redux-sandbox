"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
} from "@/lib/redux/slice/counterSlice";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const CounterPage = () => {
  const [incrementbyNumber, setincrementbyNumber] = useState(0);
  const [decrementByNumber, setdecrementByNumber] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(incrementbyNumber));
  };
  const handleDecrementByAmount = () => {
    dispatch(decrementByAmount(decrementByNumber));
  };
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="mt-10 text-2xl lg:text-4xl px-4">Simple Counter App</h2>
      <div className="mt-10 xl:mt-56 flex justify-between xl:justify-center px-4 xl:px-0 gap-6 xl:gap-12">
        <Button
          variant="destructive"
          className="font-semibold"
          onClick={() => handleDecrement()}
        >
          Decrement
        </Button>
        <h2 className="text-center flex text-lg font-bold items-center">
          {count}
        </h2>
        <Button
          className="bg-emerald-500 hover:bg-emerald-700 font-semibold"
          onClick={() => handleIncrement()}
        >
          Increment
        </Button>
      </div>
      <div className="flex gap-2 px-4 xl:gap-10 pt-10 ">
        <Input
          type="number"
          value={incrementbyNumber}
          onChange={(e) => setincrementbyNumber(+e.target.value)}
          className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        ></Input>
        <Button
          className="bg-emerald-500 hover:bg-emerald-700 font-semibold"
          onClick={() => handleIncrementByAmount()}
        >
          Increment by Amount
        </Button>
      </div>
      <div className="flex gap-2 px-4 xl:gap-10 pt-10 ">
        <Input
          type="number"
          value={decrementByNumber}
          className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          onChange={(e) => setdecrementByNumber(parseInt(+e.target.value))}
        ></Input>
        <Button variant="destructive" onClick={() => handleDecrementByAmount()}>
          Decrement by Amount
        </Button>
      </div>
    </div>
  );
};

export default CounterPage;
