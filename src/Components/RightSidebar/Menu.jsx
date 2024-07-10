import React from "react";

const Menu = () => {
  const menu = [
    "About",
    "Help",
    "Press",
    "API",
    "Jobs",
    "Privacy",
    "Terms",
    "Location",
    "Language",
    "Meta Verified",
  ];

  return (
    <div className="mt-16 flex flex-wrap text-gray-400 text-sm">
      {menu.map((item, index) => (
        <React.Fragment key={index}>
          <span>{item}</span>
          {index < menu.length - 1 && <span className="mx-1">.</span>}
        </React.Fragment>
      ))}
      <h1 className="mt-5 text-[13px]">2024 INSTAGRAM FROM META</h1>
    </div>
  );
};

export default Menu;
