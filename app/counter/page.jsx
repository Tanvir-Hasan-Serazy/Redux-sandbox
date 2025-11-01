import { Button } from "@/components/ui/button";
import React from "react";

const CounterPage = () => {
  const handleIncrement = () => {};
  const handleDecrement = () => {};
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="mt-10 text-2xl lg:text-4xl">Simple Counter App</h2>
      <div className="mt-10 xl:mt-56 flex justify-center gap-6 xl:gap-12">
        <Button variant="destructive" className="font-semibold">
          Decrement
        </Button>
        <h2 className="text-center flex items-center">Count</h2>
        <Button className="bg-emerald-500 hover:bg-emerald-700 font-semibold">
          Increment
        </Button>
      </div>
    </div>
  );
};

export default CounterPage;
