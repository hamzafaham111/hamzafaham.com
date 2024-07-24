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
                <a
                  href="https://www.facebook.com/hamza.khanusfzi/"
                  target="blank"
                  aria-label="github"
                  className="hover:text-primary mx-4"
                >
                  <Image height={22} width={22} src={FacebookIcon} />
                </a>
                <a
                  href="https://www.instagram.com/hamzafaham/"
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
