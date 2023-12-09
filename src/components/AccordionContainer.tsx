import { FC, useState } from "react";
import Accordion from "./Accordion";

import { useAccount, useContractRead, useNetwork } from "wagmi";
import { contractABI, contractAddress } from "../utils/contractInfo";

const AccordionContainer: FC = () => {
  const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(
    null,
  );

  const { address } = useAccount();
  const { chain } = useNetwork();
  const { data: level } = useContractRead({
    address: chain?.id === 421614 ? contractAddress[0] : contractAddress[1],
    abi: contractABI,
    functionName: "participantLevels",
    args: [address ? address : "0x"],
    watch: true,
  });
  const toggleAccordion = (index: number) => {
    setOpenAccordionIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  // Array of content data for each accordion
  const accordionData = [
    {
      content: "Can you hear this image (6 letter word)?",
      link: "https://teal-still-rat-339.mypinata.cloud/ipfs/QmcUxgCY6fQd294wfx6JRLdaJAj7CAqucGg1kyx8GvMWoT",
    },
    {
      content:
        "At the dawn of a decentralized era, a digital whisper echoed, 'That's when it all started.' Seek the origin point, the cryptic fingerprint.",
      link: "",
    },
    {
      content: "Name the character dancing in this song",
      link: "https://teal-still-rat-339.mypinata.cloud/ipfs/QmQuShLNcuS8UQjMgYCHWHNgEhmjhPdQocn8mQHNMEyUXp",
    },

    {
      content:
        "Strange Amazon product: not a Jedi's weapon, just fancy utensils. Lights up for meals. What's this odd discovery?(all smalle no space)",
      link: "",
    },
    {
      content:
        "In pixels' regular party, a secret hides shy. No alarms, no cries, just a quiet ally. It's steganography's game, where data learns to fly.",
      link: "https://ipfs.io/ipfs/QmTpxRJHHCR96JkVbNJsWHWFu7ssf9Pyk2LQKMsv8LQeFA",
    },
  ];

  return (
    <div>
      <h2 className="text-6xl font-Handjet mb-4 text-secondary font-semibold text-center">
        Hunt
      </h2>
      {typeof level !== "undefined" && (
        <p className="text-white text-xl font-semibold mt-10 text-center">
          Your are currently at level: {Number(level) + 1}
        </p>
      )}
      {accordionData.map((data, index) => (
        <Accordion
          key={index}
          isOpen={index === openAccordionIndex}
          onToggle={() => toggleAccordion(index)}
          sectionIndex={index}
          content={data.content}
          link={data.link}
          participantLevel={Number(level)}
        />
      ))}
    </div>
  );
};

export default AccordionContainer;
