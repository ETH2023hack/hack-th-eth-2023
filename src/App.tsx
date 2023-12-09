import AccordionContainer from "./components/AccordionContainer";
import Rules from "./components/Rules";

function App() {
  return (
    <div className="flex flex-col items-center justify-evenly font-Lato min-h-screen">
      <h1 className="text-secondary text-7xl font-bold font-Handjet mb-10">
        Nygma
      </h1>
      <div className="flex flex-col items-center text-white">
        <img
          src="/images/riddler.gif"
          alt="The riddler"
          className="rounded-xl w-80"
        />
        <h4 className="font-Handjet text-3xl mt-20 mb-5">
          Treasure hunt with clues all over the internet !
        </h4>
        <p className="text-center text-xl">
        We leverage the blockchain to facilitate to seamless progression through each level .
        <br />
        Crack the code using the latest internet slang and ride the trend wave.
        <br />
        <br />
        Your quest begins now! May the bits and bytes be ever in your favor. 🔍🔐
        </p>
      </div>
      <Rules />
      <AccordionContainer />
    </div>
  );
}

export default App;
