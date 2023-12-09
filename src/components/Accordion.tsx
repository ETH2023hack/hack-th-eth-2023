import  { FC } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

interface AccordionProps {
  isOpen: boolean;
  onToggle: () => void;
  sectionIndex: number;
  content: string;
}

const Accordion: FC<AccordionProps> = ({
  isOpen,
  onToggle,
  sectionIndex,
  content,
}) => {
  const submitForm = () => {
    // Add your form submission logic here
    alert(`Form submitted in Puzzle Section ${sectionIndex + 1}`);
  };

  return (
    <div className="w-[800px] mx-auto my-8 ">
      <div className="border border-gray-300 rounded-xl p-4 mb-4 ">
        <div
          className="flex items-center justify-between cursor-pointer text-secondary font-semibold"
          onClick={onToggle}
        >
          <div className="font-Handjet text-2xl">Puzzle {sectionIndex + 1}</div>
          {isOpen ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
        </div>
        {isOpen && (
          <div className="mt-4">
            <p className="text-gray-100">{content}</p>
            <form className="mt-4">
              <label className="block text-sm font-semibold text-gray-100 mb-1">
                Answer:
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 mb-4 rounded-sm"
                placeholder="Type Answer"
              />

              {/* Submit button */}
              <button
                type="button"
                className="bg-secondary text-white p-2 rounded"
                onClick={submitForm}
              >
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

// Accordion.propTypes = {
//     isOpen: PropTypes.bool.isRequired,
//     onToggle: PropTypes.func.isRequired,
//     sectionIndex: PropTypes.number.isRequired,
//     content: PropTypes.string.isRequired,
// };

export default Accordion;
