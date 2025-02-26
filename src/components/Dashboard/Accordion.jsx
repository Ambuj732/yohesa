import React, { useState } from "react";
import "./Accordion.css";

const AccordionItem = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className={`accordion-item ${isOpen ? "open" : ""}`}>
        <div className="accordion-item-header" onClick={toggleAccordion}>
          <span className="accordion-item-header-title">{title}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-down accordion-item-header-icon"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
        <div className="accordion-item-description-wrapper">
          <div className="accordion-item-description">
            <hr />
            <p>{description}</p>
            <div>
              <label>
                <input type="checkbox" /> Check me!
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Accordion = () => {
  const items = [
    {
      title: "Role 1",
      description: "This is the description for Role Item 1.",
    },
    {
      title: "Role Item 2",
      description:
        "This is the description for Accordion Item 2. This is the description for Accordion Item 2.",
    },
    {
      title: "Role Item 3",
      description:
        "This is the description for Accordion Item 3. This is the description for Accordion Item 3. This is the description for Accordion Item 3.",
    },
    {
      title: "Role Item 2",
      description:
        "This is the description for Accordion Item 2. This is the description for Accordion Item 2.",
    },
    {
      title: "Role Item 3",
      description:
        "This is the description for Accordion Item 3. This is the description for Accordion Item 3. This is the description for Accordion Item 3.",
    },
  ];

  return (
    <>
      <main>
        <div className="accordion">
          {items.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default Accordion;
