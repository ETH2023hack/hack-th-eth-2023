import AccordionContainer from "./components/AccordionContainer";
// import ContractRead from "./components/ContractRead";
// import ContractWrite from "./components/ContractWrite";

function App() {
  return (
    <div className="flex flex-col items-center justify-evenly font-NotoSans min-h-screen py-16">
      {/* <h1 className="text-secondary text-9xl font-bold mb-10">Reactify</h1> */}
      <div className="flex flex-col items-center text-white">
        <a
          href="https://github.com/SrinivasJoshi/Reactify"
          className="text-white text-center"
        >
          <img
            src="/images/Riddler.gif"
            alt="github link"
            className="rounded-xl w-75"
          />
        </a>
      </div>
      <AccordionContainer />
      {/* <ContractRead />
      <ContractWrite /> */}
    </div>
  );
}

export default App;
