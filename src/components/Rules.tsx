import React from "react";

export default function Rules() {
  return (
    <div className="container font-semibold flex flex-col items-center mx-auto p-4 text-white rounded-md shadow-md mt-10 ">
      <h2 className="text-10xl font-Handjet mb-4 text-secondary">Rules</h2>
      <ul className="list-none pl-4">
        <li className="mb-2">
          Rule 1: All answer are in lower case alphabets.
        </li>
        <li className="mb-2">
          Rule 2: You need to current level to move to next level.
        </li>
        <li className="mb-2">Rule 3: Complete all the puzzle.</li>
      </ul>
    </div>
  );
}
