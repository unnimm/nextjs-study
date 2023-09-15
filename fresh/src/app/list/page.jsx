"use client";
import Image from "next/image";
import { useState } from "react";

export default function List() {
  let veg = ["Tomatoes", "Pasta", "Coconut"];
  let [countList, setCountList] = useState([0, 0, 0]);
  
  
  return (
    <div className="bg-[#303030] w-full h-full text-white">
      <h4 className="text-center mt-[150px] text-[30px]">상품목록</h4>
      <div className="grid gap-8">
        {veg.map((v, i) => {
          return (
            <>
              <div
                className="w-[200px] m-auto bg-white text-black p-[20px] rounded-md"
                key={i}
              >
                <img
                  src={`food${i + 1}.png`}
                  art={v}
                  className="h-100% w-100%"
                />
                <h4>{v} $40</h4>
                <div className="flex gap-1">
                  <span>{countList[i]}</span>
                  <button
                    className="bg-red-500 text-white rounded-full h-4 w-4 text-center text-[3px]"
                    onClick={() => {
                      let copy = [...countList]
                      copy[i]++
                      setCountList(copy)}}
                  >
                    +
                  </button>
                  <button
                    className="bg-blue-500 text-white rounded-full h-4 w-4 text-center text-[3px]"
                    onClick={() => {
                      let copy = [...countList]
                      copy[i]--
                      setCountList(copy)}}
                  >
                    -
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
