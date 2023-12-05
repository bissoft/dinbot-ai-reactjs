import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const handleImg = () => {
    navigate("/profile");
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={` ${scrolled ? 'scrolled' : 'header'}`}>
      <div className="container-fluid py-2 ">
        <div className=" d-flex justify-content-between">
          <div className=" d-flex search">
            <div className="search-icon">
              <CiSearch size={25} />
            </div>
            <form role="search ">
              <input
                className="form-control "
                type="search"
                placeholder="Search......"
                aria-label="Search"
              />
            </form>
          </div>
          <div className="d-flex gap-3 ">
            <div>
              <div>
                <span className="profile-name">Lindsey Korsgaard</span>
              </div>
              <div className="text-end">
                <span className="administrator">Administrator</span>
              </div>
            </div>
            <div className="dropdown">
              <button
                className="drop-btn dropdown-toggle "
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                &nbsp;
                <img
                  src="/Assets/profile.png"
                  alt="not found"
                  width={40}
                  onClick={handleImg}
                />{" "}
                &nbsp;
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
}

export default Header;
