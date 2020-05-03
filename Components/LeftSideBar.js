import React, { useState, useRef } from "react";
import ScrollArea from "react-scrollbar";
import DealBlock from "./DealBlock";

const LeftSideBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const refContainer = useRef();
  const toggleVisible = () => {
    if (isVisible == true) {
      refContainer.current.scrollArea.scrollYTo(0);
      setTimeout(() => {
        setIsVisible(false);
      }, 450);
    } else {
      setTimeout(() => {
        setIsVisible(true);
        refContainer.current.scrollArea.scrollYTo(150);
      }, 450);
    }
  };
  return (
    <div className="left-sidebar">
      {isVisible}
      <ScrollArea speed={2} className="scrollable-area" ref={refContainer} contentClassName="scrollable-area-content" smoothScrolling={true} horizontal={false}>
        <form action="#">
          <div className="form-row">
            <label for="#">
              Full Name <span className="required">*</span>
            </label>
            <div className="control-container">
              <span>
                <img src="images/fullname-icon.svg" alt="full name" />
              </span>
              <input type="text" className="control" />
            </div>
          </div>
          <div className="form-row">
            <label for="#">
              Phone Number <span className="required">*</span>
            </label>
            <div className="control-container">
              <span>
                <img src="images/phone-icon.svg" alt="full name" />
              </span>
              <input type="text" className="control" />
            </div>
          </div>

          <div className="form-row">
            <label for="#">Deals </label>
            <div className="deals-row">
              <input type="text" className="control" placeholder="Search for deals" />
              <button>
                <i className="fas fa-link"></i> Link
              </button>
              <button>
                <i className="fas fa-plus"></i> Create
              </button>
            </div>
          </div>

          <div className="deals-container">
            <DealBlock type="new" status="New" />
            <DealBlock type="proposal" status="Proposal" />
            <DealBlock type="closed" status="Closed - Win" />
            {isVisible && (
              <React.Fragment>
                <DealBlock type="new" status="New" />
                <DealBlock type="proposal" status="Proposal" />
                <DealBlock type="closed" status="Closed - Win" />
                <DealBlock type="new" status="New" />
                <DealBlock type="proposal" status="Proposal" />
              </React.Fragment>
            )}
            <div className="show-more" onClick={() => toggleVisible()}>
              <i className={isVisible ? "fas fa-angle-down fa-rotate-180" : "fas fa-angle-down"}></i>
              {isVisible ? <span>Hide deals</span> : <span>Show 5 more deals</span>}
            </div>

            <div className="form-row">
              <label for="#">
                Job Title <span className="required">*</span>
              </label>
              <div className="control-container">
                <span>
                  <img src="images/fullname-icon.svg" alt="full name" />
                </span>
                <input type="text" className="control" />
              </div>
            </div>
          </div>
        </form>
      </ScrollArea>
    </div>
  );
};

export default LeftSideBar;
