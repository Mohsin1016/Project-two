import React from "react";
import { useDispatch } from "react-redux";
import { displayAction } from "../Store/DisplayNav";
const Snavbar = () => {
  const dispatch = useDispatch();
  const showNavHandler = () => {
    dispatch(displayAction.displayNav());
  };
  return (
    <>
      <div className="container ">
        <div class="row align-items-center ps-3 pt-3">
          <div class="col">
            <i class="fa-solid fa-globe fa-lg"></i>
            <span className="ps-3">Worldwide</span>
          </div>
          <div class="col text-end">
            <i class="fa-solid fa-xmark fa-2xl" onClick={showNavHandler}></i>
          </div>
        </div>

        <hr />
        <div className="row">
          <div className="dropdown">
            <a
              className="dropdown-toggle nav-link  fs-4"
              data-bs-toggle="dropdown"
              role="button"
              aria-expanded="false"
              href="/"
            >
              About Roche
            </a>
            <ul className="dropdown-menu border-0 position-static mb-3">
              <a href="/" className="text-reset text-decoration-none">
                Explore
              </a>
              <i class="fa-solid fa-arrow-right ms-2"></i>
              <div className="border-start">
              <li>
                <a className="dropdown-item mt-2" href="/">
                  Strategy
                </a>
              </li>
              <li>
                <a className="dropdown-item mt-2" href="/">
                  Business
                </a>
              </li>
              <li>
                <a className="dropdown-item mt-2" href="/">
                  Sustainability
                </a>
              </li>
              <li>
                <a className="dropdown-item mt-2" href="/">
                  Leadership
                </a>
              </li>
              <li>
                <a className="dropdown-item mt-2" href="/">
                  Governance
                </a>
              </li>
              <li>
                <a className="dropdown-item mt-2" href="/">
                  History
                </a>
              </li>
              </div>
            </ul>
          </div>
          <div className="dropdown">
            <a
              className="nav-link dropdown-toggle  mt-3 fs-4"
              role="button"
              href="/"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Solutions
            </a>
            <ul className="dropdown-menu border-0 position-static mb-4">
              <a href="/" className="text-reset text-decoration-none">
                Explore
              </a>
              <i class="fa-solid fa-arrow-right ms-2"></i>
              <div className="border-start">
              <li>
                <a className="dropdown-item mt-2" href="/">
                  Solutions
                </a>
              </li>
              <li>
                <a className="dropdown-item mt-2" href="/">
                  Focus areas
                </a>
              </li>
              <li>
                <a className="dropdown-item mt-2" href="/">
                  Pharma solution
                </a>
              </li>
              <li>
                <a className="dropdown-item mt-2" href="/">
                  Diagnostic solution
                </a>
              </li>
              <li>
                <a className="dropdown-item mt-2" href="/">
                  Pipeline
                </a>
              </li>
              </div>
            </ul>
          </div>
          <div className="dropdown">
            <a
              className="nav-link dropdown-toggle  mt-3 fs-4"
              role="button"
              href="/"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Innovation
            </a>
            <ul className="dropdown-menu border-0 position-static mb-5">
              <a href="/" className="text-reset text-decoration-none">
                Explore
              </a>
              <i class="fa-solid fa-arrow-right ms-2"></i>
              <div className="border-start">

              <li>
                <a className="dropdown-item mt-2" href="/">
                  Innovation
                </a>
              </li>
              <li>
                <a className="dropdown-item mt-2" href="/">
                  Team & Structure
                </a>
              </li>
              <li>
                <a className="dropdown-item mt-2" href="/">
                  Innovation process
                </a>
              </li>
              <li>
                <a className="dropdown-item mt-2" href="/">
                  Ethical standards
                </a>
              </li>
              <li>
                <a className="dropdown-item mt-2" href="/">
                  Partnering
                </a>
              </li>
              </div>
            </ul>
          </div>
          <ul className="list-unstyled list-inline  mt-2 fs-4">
            <li>
              <a className="nav-link" href="/">
                Stories
              </a>
            </li>
          </ul>
        </div>
        <hr />
        <div className="row"></div>
        <ul className="list-unstyled list-inline">
          <li>
            <a href="/" className="nav-link  fs-4 mt-3">
              Media
            </a>
          </li>
          <li>
            <a href="/" className="nav-link  fs-4 mt-3">
              Investors
            </a>
          </li>
          <li>
            <a href="/" className="nav-link  fs-4 mt-3">
              Careers
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Snavbar;
