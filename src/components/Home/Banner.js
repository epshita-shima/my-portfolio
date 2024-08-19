import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import portfolio from "../../assets/image/1701064092198-removebg-preview.png";

import "./Banner.css";
import Typical from "react-typical";
import Src from "daisyui";

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-violet-500 to-fuchsia-400">
      <div div className="flex justify-between items-center pt-24 pb-16 lg:container lg:mx-auto">
        <div className="ml-8 lg:14">
          <div>
            <h3 className="text-5xl text-white font-bold tracking-wide mb-2"> Epshita Shima
              {/* <Typical
                steps={["Epshita Shima", 1000]}
                loop={Infinity}
                wrapper="p"
              ></Typical> */}
            </h3>
            <p className="text-xl font-semibold text-white mb-8">
              software engineer
            </p>

            <h3 className="text-white text-xl lg:text-2xl md:text-2xl font-semibold mb-4">
              <span className="opacity-40 mr-6">Phone:</span> +880 1793651031
            </h3>
            <h3 className="text-white text-xl lg:text-2xl md:text-2xl font-semibold mb-4">
              <span className="opacity-40 mr-6">Email:</span>{" "}
              epshitashima@gmail.com
            </h3>
            <h3 className="text-white text-xl lg:text-2xl md:text-2xl font-semibold mb-8">
              <span className="opacity-40 mr-6 ">Address:</span> Mirpur-2,
              Dhaka-1216
            </h3>
          </div>
          <div className="mb-4">
            <span className="mr-6 text-white text-3xl">
              <a
                className="hover:text-white"
                href="https://github.com/epshita-shima"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </span>
            <span className="mr-6 text-white text-3xl">
              <a
                className="hover:text-white"
                href="https://github.com/epshita-shima"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </span>
            <span className="text-white text-3xl">
              <a
                className="hover:text-white"
                href="https://github.com/epshita-shima"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </span>
          </div>
        </div>
        <div className="warping">
<img style={{borderRadius:'50%'}} src={portfolio} alt="portfolio" />
      </div>
      </div>
      
    </div>
  );
};

export default Banner;
