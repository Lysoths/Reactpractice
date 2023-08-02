import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Access = () => {
	return (
		<>
			<div className="main-container">
				<div className="container-access">
					<img src=".\images\icon-success.svg" alt="" />
					<h1>ThanksFor Subscribing!</h1>
					<p>
						A confirmation email has been sent to
						<span> ash@loremcompany.com.</span> Please open it and click the
						button inside to confirm your subscription
					</p>
					<Link to="/">
						<button className="button">Dismiss message</button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Access;
