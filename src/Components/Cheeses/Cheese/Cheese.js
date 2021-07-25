import React from 'react';
import styles from './Cheese.module.css';

const Cheese = ({ data }) => {
	return (
		<div>
			<div className={styles.Cheese}>
				<div className={styles.innerDiv}>
					<h2> {data.CheeseNameEn} </h2>
					<h3>
						Manufacturer :
						<span className={styles.stl}>{data.ManufacturerNameEn}</span>
					</h3>
					<h3>
						Region :
						<span className={styles.stl}>{data.ManufacturerProvCode}</span>
					</h3>
					<h3>
						Manufacturing Type :
						<span className={styles.stl}>{data.ManufacturingTypeEn}</span>
					</h3>
					<div className={styles.twoDiv}>
						<h3>
							Fat Content :
							<span className={styles.stl}>{data.FatContentPercent} %</span>
						</h3>

						<h3>
							Moisture :
							<span className={styles.stl}>{data.MoisturePercent} %</span>
						</h3>
					</div>
					<h3>
						Particularities :
						<span className={styles.stl}>{data.ParticularitiesEn}</span>
					</h3>
					<h3>
						Flavour :<span className={styles.stl}>{data.FlavourEn}</span>
					</h3>
					<h3>
						Characteristics :
						<span className={styles.stl}>{data.CharacteristicsEn}</span>
					</h3>
					<h3>
						Ripening :<span className={styles.stl}>{data.RipeningEn}</span>
					</h3>
					<h3>
						Organic :<span className={styles.stl}>{data.Organic} %</span>
					</h3>
					<h3>
						Category :<span className={styles.stl}>{data.CategoryTypeEn} </span>
					</h3>
					<h3>
						Milk :<span className={styles.stl}>{data.MilkTypeEn} </span>
					</h3>
					<h3>
						Milk Treatment :
						<span className={styles.stl}>{data.MilkTreatmentTypeEn} </span>
					</h3>
					<h3>
						Rind :<span className={styles.stl}>{data.RindTypeEn} </span>
					</h3>
				</div>
			</div>
		</div>
	);
};

export default Cheese;
