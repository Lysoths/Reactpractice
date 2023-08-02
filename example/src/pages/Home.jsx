import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
	const [email, setEmail] = useState(" ");
	const [isValidEmail, setIsValidEmail] = useState(false);
	const [access, setAccess] = useState(null);

	const handleChange = (e) => {
		setEmail(e.target.value);
		console.log(isValidEmail);
		if (isValidEmail) {
			setAccess(null);
		} else {
			setAccess(true);
		}
		return setIsValidEmail(/\S+@\S+\.\S+/.test(email));
	};

	return (
		<>
			<div className="main-container">
				<div className="container">
					<div className="left-side">
						<h1>Stay Updated!</h1>
						<p>Join 60,000+ product managers receiving monthly updates on :</p>
						<div className="correct">
							<p>
								<img src=".\images\icon-list.svg" alt="" /> Product discovery
								and building what matters
							</p>
							<p>
								<img src=".\images\icon-list.svg" alt="" /> Measuring to ensure
								updates are a success
							</p>
							<p>
								<img src=".\images\icon-list.svg" alt="" /> And much more!
							</p>
						</div>
						<div className="email">
							<div className="adress">
								<b>Email adress</b>
								<p
									className={
										access == null ? "access-message" : "error-message"
									}
								>
									Valid email required
								</p>
							</div>
							<form action="">
								<input
									type="email"
									name=""
									id=""
									placeholder="email@company.com"
									className={access == null ? "" : "error"}
									value={email}
									onChange={handleChange}
								/>
								<Link to={isValidEmail ? "access" : "/"}>
									<input
										className="button"
										type="submit"
										value="Subsribe to monthly newsletter"
									/>
								</Link>
							</form>
						</div>
					</div>
					<div className="right-side">
						<img src=".\images\illustration-sign-up-desktop.svg" alt="" />
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
