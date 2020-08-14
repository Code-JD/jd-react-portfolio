import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaLinkedin, FaGithubSquare, FaEnvelope } from "react-icons/fa";
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
				</div>

				{/* <div className="contact-links"></div> */}

				<div className="social-media">
					<div className="linkedin">
						<a href="https:/www.linkedin.com/in/jonathan-herring-code">
							<FaLinkedin color="#ff4000" size='10rem' />
						</a>
					</div>
					
					<div className="github">
						<a href="https://github.com/Code-JD">
							<FaGithubSquare color="#ff4000" size='10rem' />
						</a>
					</div>

					<div className="email">
						<a href="mailto:jonathan.d.herring@gmail.com">
							<FaEnvelope color="#ff4000" size='10rem' />
						</a>
					</div>
				</div>  

			</div>
		</div>
    </div>
  );
}