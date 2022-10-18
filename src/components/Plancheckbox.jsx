import styles from './Plancheckbox.module.css'

const Plancheckbox = ({setPlan, basicPlan, standardPlan, premiumPlan}) => {
    return (
        <>

            <label htmlFor="basic_plan" onClick={() => setPlan(basicPlan)} className={styles.packages_price_border}>
                <input type="radio" name="packages" id="basic_plan" className={styles.plans_radio} />
                <p className={styles.test_plan}>Basic</p>
                <h3 className={styles.test_plan_Price}>
                    50,000 NGN
                </h3>
            </label>
            <label htmlFor="standard_plan" onClick={() => setPlan(standardPlan)} className={styles.packages_price_border}>
                <input type="radio" name="packages" id="standard_plan" className={styles.plans_radio} />
                <p className={styles.test_plan}>Standard</p>
                <h3 className={styles.test_plan_Price}>
                    100,000 NGN
                </h3>
            </label>
            <label htmlFor="premium_plan" onClick={() => setPlan(premiumPlan)}className={styles.packages_price_border}>
                <input type="radio" name="packages" id="premium_plan" className={styles.plans_radio} />
                <p className={styles.test_plan}>Premium</p>
                <h3 className={styles.test_plan_Price}>
                    150,000 NGN
                </h3>
            </label>

        </>
    );
}

export default Plancheckbox;