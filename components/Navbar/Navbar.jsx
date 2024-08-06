import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const navRef = useRef(null);
  const [onBlogsURL, setOnBlogsURL] = useState(false);

  useEffect(() => {
    const currentUrl = window.location.href;
    setOnBlogsURL(currentUrl.includes("/blogs"));


    function handleScroll() {
      if (!currentUrl.includes("/blogs")) {
        if (window.scrollY > 50) {
          navRef.current.style.backgroundColor = "#111827";
        } else {
          navRef.current.style.backgroundColor = "transparent";
        }
      }
      else{
        return null;
      }
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {!onBlogsURL ? (
        <nav
          ref={navRef}
          className="w-full fixed bg-transparent px-4 sm:px-8 md:px-32 z-10"
        >
          <div className="justify-between mx-auto max-w-7xl md:items-center md:flex ">
            <div>
              <div className=" flex items-center justify-between py-3 md:block">
                <span>
                  <h2 className="text-2xl font-bold text-pink-600">HF.</h2>
                </span>
                <div className="md:hidden">
                  <button
                    className=" text-pink-600 rounded-md outline-none"
                    onClick={() => setNavbar(!navbar)}
                  >
                    {navbar ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div
                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0  ${
                  navbar ? "block" : "hidden"
                }`}
              >
                <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                  <li className="text-gray-300 font-bold hover:text-pink-600">
                    <Link href="/#home">
                      <span>Home</span>
                    </Link>
                  </li>
                  <li className="text-gray-300 font-medium hover:text-pink-600">
                    <Link href="/#aboutMe">
                      <span>About</span>
                    </Link>
                  </li>
                  <li className="text-gray-300 font-medium hover:text-pink-600">
                    <Link href="#services">
                      <span>Services</span>
                    </Link>
                  </li>
                  <li className="text-gray-300 font-medium hover:text-pink-600">
                    <Link href="/#skills">
                      <span>Skills</span>
                    </Link>
                  </li>
                  <li className="text-gray-300 font-medium hover:text-pink-600">
                    <Link href="/#portfolio">
                      <span>Projects</span>
                    </Link>
                  </li>

                  <div className="text-gray-300 font-medium">
                    <Link
                      href="/#contact"
                      className="bg-pink-600 px-6 py-1 rounded-sm md:ml-20"
                    >
                      <span>Contact</span>
                    </Link>
                  </div>
                  <div className="text-gray-300 font-medium">
                    <Link
                      href="/blogs"
                      className="bg-gray-300 text-gray-700 px-6 py-1 rounded-sm"
                    >
                      <span>Blogs</span>
                    </Link>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      ) : (
        <div className="px-4 sm:px-8 md:px-32 bg-black flex items-center">
          <h2 className="text-2xl font-bold text-gray-100">HF.</h2>
          {/* <span className="text-white text-2xl ml-2">Blogs</span> */}
        </div>
      )}
    </>
  );
}
