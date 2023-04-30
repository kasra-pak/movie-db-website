import React, { useRef, createRef, useEffect } from "react";

const Tabs = ({ names, active, setActive }) => {
  const tabs = names.map(name => ({ name, nodeRef: createRef() }));
  const underlineRef = useRef(null);

  useEffect(() => {
    const activeTabElement = tabs.find(tab => tab.name === active).nodeRef
      .current;
    const width = activeTabElement.offsetWidth;
    const left = activeTabElement.offsetLeft;

    underlineRef.current.style = `left: ${left}px; width: ${width}px`;
  }, [active, tabs]);

  const toggleTab = e => {
    const targetTab = e.currentTarget.name;
    setActive(prevState => (prevState === targetTab ? prevState : targetTab));
  };

  return (
    <div className=' relative mb-4 mt-8 flex h-[45px] gap-4 text-sm font-semibold text-nightRendezvous'>
      {tabs.map(tab => (
        <button
          key={tab.name}
          ref={tab.nodeRef}
          name={tab.name}
          className={`capitalize ${
            tab.name === active ? "text-midnightExpress" : ""
          }`}
          onClick={toggleTab}
        >
          {tab.name}
        </button>
      ))}
      <span
        ref={underlineRef}
        className='absolute bottom-0 h-0.5 bg-midnightExpress transition-[left,width]'
      ></span>
    </div>
  );
};

export default Tabs;
