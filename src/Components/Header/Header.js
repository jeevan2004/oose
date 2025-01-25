import React, { useEffect, useState } from "react";
import "./header.css";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/image/logo.png";
import { api } from "../../api/api";

function Header() {
  const location = useLocation();
  const [categoriesList, setCategoriesList] = useState([]);
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 160) {
      // Adjust the scroll position where the header becomes sticky
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const getAllCategory = async () => {
  //   let res = await api(
  //     `api/v1/course/getfilterdata`,
  //     "",
  //     "get",
  //     "",
  //     // currUserData?.token,
  //     ""
  //   );

  //   if ((res, res.status)) {
  //     setCategoriesList(res?.data?.categories);
  //   }
  // };

  const headerMenu = [
    {
      title: "Home",
      path: "/",
      subMenu: false,
    },
    {
      title: "About Us",
      path: "/about-us",
      subMenu: false,
    },
    // {
    //   title: "Programs",
    //   path: "#",
    //   subMenu: true,
    //   subMenu: [
    //     {
    //       title: "NextGen Academy",
    //       path: "/NextGen-Academy",
    //       subMenu: false,
    //     },
    //     {
    //       title: "Talent Hub",
    //       path: "/NextGen-Academy",
    //       subMenu: false,
    //     },
    //   ],
    // },
    // {
    //   title: "vvGrad Abroad",
    //   path: "/",
    //   subMenu: false,
    // },
    // {
    //   title: "Prepare Job",
    //   path: "/",
    //   subMenu: false,
    // },
    // {
    //   title: "Hire with Us",
    //   path: "/",
    //   subMenu: false,
    // },

    {
      title: "Contact Us",
      path: "/contact-us",
      subMenu: false,
    },
  ];

  return (
    <header className={isSticky ? "sticky-menu" : ""}>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light p-0">
          <a className="navbar-brand logo" href="/">
            {/* <img src={Logo} alt="" /> */}
            OOSA
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              {headerMenu?.map((item, index) => {
                return (
                  <li className="nav-item">
                    <Link
                      className={`${
                        location.pathname === item.path ? "active" : ""
                      } navbar_link`}
                      to={item.path}
                      id={item.title}
                      role="button"
                    >
                      {item.title}{" "}
                      {item.subMenu && <i className="fas fa-angle-down"></i>}
                    </Link>

                    {item.subMenu && (
                      <ul
                        className="dropdown-menu sub_first"
                        aria-labelledby={item.title}
                      >
                        {item.subMenu &&
                          item.subMenu?.map((subFirst, index) => {
                            return (
                              <li className="nav-item dropdown dropdown-item">
                                <Link
                                  className={`${
                                    location.pathname === "service"
                                      ? "active"
                                      : ""
                                  } navbar_link `}
                                  to={subFirst.path}
                                  id={subFirst.title}
                                  role="button"
                                >
                                  {subFirst.title}{" "}
                                  {subFirst.subMenu && (
                                    <i class="fas fa-angle-right"></i>
                                  )}
                                </Link>

                                {subFirst.subMenu && (
                                  <ul
                                    className="dropdown-menu sub_sec"
                                    aria-labelledby={subFirst.title}
                                  >
                                    {subFirst.subMenu &&
                                      subFirst.subMenu?.map((subSec, index) => {
                                        return (
                                          <li>
                                            <Link
                                              className={`${
                                                location.pathname === "service"
                                                  ? "active"
                                                  : ""
                                              } navbar_link dropdown-item`}
                                              to=""
                                            >
                                              {subSec.title}
                                            </Link>
                                          </li>
                                        );
                                      })}
                                  </ul>
                                )}
                              </li>
                            );
                          })}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="call_box d-flex">
            {/* <ul className="list-wrap ">
              <li className="line"></li>
              <li className="mini-cart-icon">
                <i class="fas fa-search"></i>
              </li>
              <li className="mini-cart-icon user_icon">
                <i class="fas fa-shopping-cart"></i>
              </li>
            </ul> */}
            <button className=" btn_secondary">Sign in</button>
            {/* <a href="#" target="_self" class="btn_primary ">
              Try for free <i class="icon-4"></i>
            </a> */}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
