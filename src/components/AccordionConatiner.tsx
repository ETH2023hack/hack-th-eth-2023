import React, { FC, useState } from 'react';
import Accordion from './Accordion';

const AccordionContainer: FC = () => {
    const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenAccordionIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    // Array of content data for each accordion
    const accordionData = [
        {
            content: "Content for Accordion Section 1. This can include any text or HTML.",
        },
        {
            content: "Content for Accordion Section 2. Customize this content as needed.",
        },
        {
            content: "Content for Accordion Section 3. You can add more sections to the array.",
        },
        {
            content: "Content for Accordion Section 4. Each object represents an accordion.",
        },
        {
            content: "Content for Accordion Section 5. Customize the content for each section.",
        },
    ];

    return (
        <div>
            {accordionData.map((data, index) => (
                <Accordion
                    key={index}
                    isOpen={index === openAccordionIndex}
                    onToggle={() => toggleAccordion(index)}
                    sectionIndex={index}
                    content={data.content}
                />
            ))}
        </div>
    );
};

export default AccordionContainer;
