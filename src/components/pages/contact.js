import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactPagePicture from "../../../static/assets/images/auth/login.jpg";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + contactPagePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="right-column">
        <div className="contact-bullet-points">
          <div className="bullet-point-group">
		  <div className="info-text">
				<h1>I am currently looking for opportunities in Software Development.</h1>
				<h1>Feel free to reach out and connect with me about future employment and Freelancing.</h1>
		  </div>
			<div className="icon">
				{/* <FontAwesomeIcon icon="phone" /> */}
				</div>

				<div className="text">562-508-6236</div>
			</div>

			<div className="bullet-point-group">
				<div className="icon">
				{/* <FontAwesomeIcon icon="envelope" /> */}
				</div>

				<div className="text">jonathan.d.herring@gmail.com</div>
			</div>

			<div className="bullet-point-group">
				<div className="icon">
				{/* <FontAwesomeIcon icon="map-marked-alt" /> */}
				</div>

				<div className="text">Long Beach, CA</div>
			

			<div className="icon">
				{/* <FontAwesomeIcon icon="envelope" /> */}
			</div>

			<div className="contact-links"></div>

          </div>
        </div>
      </div>
    </div>
  );
}