import React from "react";
import ComponentsIcon from "../assets/components.svg";

const Sidebar = () => {
  const sidebarItems = [
    { name: "Components", icon: ComponentsIcon },
    { name: "Accordion" },
    { name: "Alerts" },
    { name: "Badge" },
    { name: "Breadcrumb" },
    { name: "Buttons" },
    { name: "Button group" },
    { name: "Card" },
    { name: "Carousel" },
    { name: "Close button" },
    { name: "Collapse" },
    { name: "Dropdowns" },
    { name: "List group" },
    { name: "Modal" },
    { name: "Navbar" },
    { name: "Navs & tabs" },
    { name: "Offcanvas" },
    { name: "Pagination" },
    { name: "Placeholders" },
    { name: "Popovers" },
    { name: "Progress" },
    { name: "Scrollspy" },
    { name: "Spinners" },
    { name: "Toasts" },
    { name: "Tooltips" },
  ];
  return (
    <div className="hidden md:block fixed w-[240px] mt-[15px] font-inter">
      <div className="flex flex-col">
        <div className="flex flex-col h-[100vh] overflow-y-scroll">
          {sidebarItems.map((item, index) => {
            return (
              <div
                className={`flex items-center ${
                  index === 0
                    ? "font-bold text-lg"
                    : "font-normal text-base pl-[18px]"
                }`}
              >
                <img src={item.icon} alt="" className="pr-[6px]" />
                <a
                  href="javascript:void(0)"
                  key={index}
                  className={`p-[6px] rounded-[10px] cursor-auto ${
          index !== 0 && "hover:bg-[#712CF91A] cursor-pointer"
        }`}
                >
                  {item.name}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
