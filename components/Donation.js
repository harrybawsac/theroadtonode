import styles from "./Donation.module.css";

const Donation = (props) => {
	return (
		<div className={styles["container"]}>
			<section className={styles["header"]}>
				<h2 className={styles["header__text"]}>Bitcoin donation</h2>
				<svg className={styles["header__icon"]} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M1008 512c0 273.934-222.066 496-496 496S16 785.934 16 512 238.066 16 512 16s496 222.066 496 496z m-283.302-70.66c9.874-65.998-40.382-101.478-109.1-125.146l22.292-89.404-54.426-13.562-21.702 87.048c-14.308-3.566-29.004-6.928-43.606-10.26l21.858-87.62-54.396-13.562-22.306 89.372c-11.844-2.698-23.47-5.364-34.754-8.168l0.062-0.28-75.06-18.74-14.478 58.124s40.382 9.254 39.53 9.826c22.044 5.502 26.028 20.088 25.36 31.65l-25.392 101.85c1.52 0.388 3.488 0.946 5.658 1.814-1.814-0.45-3.752-0.946-5.752-1.426l-35.592 142.676c-2.698 6.696-9.534 16.74-24.942 12.928 0.542 0.79-39.56-9.874-39.56-9.874l-27.02 62.294 70.828 17.654c13.176 3.302 26.09 6.758 38.8 10.012l-22.524 90.426 54.364 13.562 22.306-89.466a2076.418 2076.418 0 0 0 43.374 11.254l-22.23 89.046 54.426 13.562 22.524-90.256c92.808 17.562 162.598 10.478 191.972-73.454 23.672-67.58-1.178-106.562-50.008-131.982 35.56-8.196 62.348-31.584 69.494-79.898z m-124.354 174.358c-16.82 67.58-130.616 31.046-167.51 21.886l29.888-119.798c36.892 9.206 155.2 27.434 137.622 97.912z m16.834-175.334c-15.346 61.472-110.062 30.24-140.786 22.584l27.096-108.654c30.726 7.656 129.672 21.946 113.69 86.07z" /></svg>
			</section >
			<div className={styles["options"]}>
				<section className={styles["option-container"]}>
					<div className={styles["option-info"]}>
						<p className={`${styles["option-info__text"]} ${styles["option-info__text--title"]}`}>Amount</p>
						<p className={`${styles["option-info__text"]} ${styles["option-info__text--subtitle"]}`}>The amount in satoshis</p>
					</div>
					<div className={styles["option-input"]}>
						<label htmlFor="satoshis" className={styles["sr-only"]}>
							Satoshis
						</label>
						<div className={styles["number-input-container"]}>
							<input
								type="number"
								name="satoshis"
								id="satoshis"
								className={styles["number-input"]}
								placeholder="sats"
							/>
						</div>
					</div>
				</section>
				<section className={styles["option-container"]}>
					<div className={styles["option-info"]}>
						<p className={`${styles["option-info__text"]} ${styles["option-info__text--title"]}`}>Method</p>
						<p className={`${styles["option-info__text"]} ${styles["option-info__text--subtitle"]}`}>Lightning or on-chain</p>
					</div>
				</section>
			</div >
			<button className={styles["button"]}>Doneer</button>
		</div >
	);
};

export default Donation;