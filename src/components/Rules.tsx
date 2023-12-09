
export default function Rules() {
  return (
    <div className="container font-semibold flex flex-col items-center mx-auto p-4 text-white rounded-md shadow-md mt-10 ">
      <h2 className="text-6xl font-Handjet mb-4 text-secondary">Rules</h2>
      <ul className="list-none pl-4 text-lg">
        <li className="mb-2">
          Rule 1: Answer everything in lowercase
        </li>
        <li className="mb-2">
          Rule 2: Complete current level to move to next level
        </li>
        <li className="mb-2">
          Rule 3: Hashes mentioned usually refer to IPFS
        </li>
      </ul>
    </div>
  );
}
