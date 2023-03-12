import React from "react";
import LinkedinIcon from "./Assets/linkedin.svg";
import FacebookIcon from "./Assets/facebook.svg";
import InstagramIcon from "./Assets/instagram.svg";
import GitIcon from "./Assets/github.svg";
import Image from "next/image";
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="bg-gray-900 dark:bg-gray-900 pt-8 md:pt-20">
          <div className="container m-auto space-y-8 px-6 text-gray-400 dark:text-gray-300 md:px-12 lg:px-20">
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "40px",
                  color: "white",
                }}
              >
                {/* <a
                  href="/"
                  target="blank"
                  aria-label="github"
                  className="hover:text-primary mx-4"
                >
                  <Image height={22} width={22} src={GitIcon} />
                </a> */}
                <a
                  href="/"
                  target="blank"
                  aria-label="github"
                  className="hover:text-primary mx-4"
                >
                  <Image height={22} width={22} src={FacebookIcon} />
                </a>
                <a
                  href="https://www.linkedin.com/in/hamza-faham-87a124201/"
                  target="blank"
                  aria-label="instagram"
                  className="hover:text-primary mx-4"
                >
                  <Image height={22} width={22} src={InstagramIcon} />
                </a>
                <a
                  href="https://www.linkedin.com/in/hamza-faham-87a124201/"
                  target="blank"
                  aria-label="linkedin"
                  className="hover:text-primary mx-4"
                >
                  <Image height={22} width={22} src={LinkedinIcon} />
                </a>
              </div>

              <div>
                {/* <div className="grid grid-cols-2 gap-6 pb-16 sm:grid-cols-3 md:grid-cols-5">
                  <div>
                    <h6 className="text-lg font-medium text-gray-100 dark:text-gray-200">
                      Sections
                    </h6>
                    <ul className="mt-4 list-inside space-y-1">
                      <li>
                        <a href="/" className="transition hover:text-primary">
                          Home
                        </a>
                      </li>
                      <li>
                        <a href="/" className="transition hover:text-primary">
                          About
                        </a>
                      </li>
                      <li>
                        <a href="/" className="transition hover:text-primary">
                          Services
                        </a>
                      </li>
                      <li>
                        <a href="/" className="transition hover:text-primary">
                          Portfolio
                        </a>
                      </li>
                      <li>
                        <a href="/" className="transition hover:text-primary">
                          Blog
                        </a>
                      </li>
                      <li>
                        <a href="/" className="transition hover:text-primary">
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="text-lg font-medium text-gray-100 dark:text-gray-200">
                      Products
                    </h6>
                    <ul className="mt-4 list-inside space-y-4">
                      <li>
                        <a href="/" className="transition hover:text-primary">
                          About
                        </a>
                      </li>
                      <li>
                        <a href="/" className="transition hover:text-primary">
                          Customers
                        </a>
                      </li>
                      <li>
                        <a href="/" className="transition hover:text-primary">
                          Enterprise
                        </a>
                      </li>
                      <li>
                        <a href="/" className="transition hover:text-primary">
                          Partners
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="text-lg font-medium text-gray-100 dark:text-gray-200">
                      Ressources
                    </h6>
                    <ul className="mt-4 list-inside space-y-4">
                      <li>
                        <a href="/" className="transition hover:text-primary">
                          About
                        </a>
                      </li>
                      <li>
                        <a href="/" className="transition hover:text-primary">
                          Customers
                        </a>
                      </li>
                      <li>
                        <a href="/" className="transition hover:text-primary">
                          Enterprise
                        </a>
                      </li>
                      <li>
                        <a href="/" className="transition hover:text-primary">
                          Partners
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-span-2 sm:col-span-3 md:col-span-2">
                    <h6 className="text-lg font-medium text-gray-100 dark:text-gray-200">
                      Contact
                    </h6>
                    <ul className="mt-4 list-inside space-y-1">
                      <li>
                        <a
                          href="tel:+243996660436"
                          className="transition hover:text-primary"
                        >
                          +923169650686
                        </a>
                      </li>
                      <li>
                        <a
                          href="mailto:hamzafaham111@gmail.com"
                          className="transition hover:text-primary"
                        >
                          hamzafaham111@gmail.com
                        </a>
                      </li>
                      <li>
                        <form action>
                          <label
                            htmlFor="newsletter"
                            className="text-lg text-gray-400 dark:text-gray-200"
                          >
                            Subscribe to our newsletter
                          </label>
                          <div className="relative mt-4">
                            <input
                              type="email"
                              name="newsletter"
                              id="newsletter"
                              placeholder="Your email"
                              className="invalid:outline-none placeholder-gray-600 dark:placeholder-white rounded-3xl w-full bg-gray-100 dark:bg-gray-900 px-4 py-3 ring-1 ring-gray-200 dark:ring-gray-700 invalid:ring-red-400"
                            />
                            <button
                              type="submit"
                              title="Submit"
                              className="absolute right-0 w-max  rounded-r-3xl bg-gray-300 hover:bg-gray-400 py-3 px-6 text-center transition"
                            >
                              <span className="font-semibold text-gray-900">
                                Send
                              </span>
                            </button>
                          </div>
                        </form>
                      </li>
                    </ul>
                  </div>
                </div> */}
                <div className="flex justify-center border-t border-cyan-800 py-8 text-gray-200">
                  <span>
                    © hamzafaham 2023 - <span id="year" />
                  </span>
                  <span>All right reserved</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
