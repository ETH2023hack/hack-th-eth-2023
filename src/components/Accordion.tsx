import React, { FC } from "react";
// import PropTypes from 'prop-types';
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
    alert(`Form submitted in Accordion Section ${sectionIndex + 1}`);
  };

  return (
    <div className="max-w-md mx-auto my-8 ">
      <div className="border border-gray-300 rounded-xl p-4 mb-4 ">
        <div
          className="flex items-center justify-between cursor-pointer text-blue-500 font-semibold"
          onClick={onToggle}
        >
          <div>Accordion Section {sectionIndex + 1}</div>
          {isOpen ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
        </div>
        {isOpen && (
          <div className="mt-4">
            <p className="text-gray-600">{content}</p>
            <form className="mt-4">
              {/* Form fields */}
              {/* <label className="block text-sm font-semibold text-gray-600 mb-1">
                Text:
              </label> */}
              {/* <input
                type="text"
                className="w-full p-2 border border-gray-300 mb-2"
                placeholder="Enter text"
              /> */}

              <label className="block text-sm font-semibold text-gray-600 mb-1">
                Answer:
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 mb-4"
                placeholder="Type Answer"
              />

              {/* Submit button */}
              <button
                type="button"
                className="bg-blue-500 text-white p-2 rounded"
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
