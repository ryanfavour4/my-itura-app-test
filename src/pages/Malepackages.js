import React, { useState } from 'react';
import Plancheckbox from '../components/Plancheckbox';
import styles from './Malepackages.module.css';


const Menpackages = () => {

    let [premiumPlan, setPremiumPlan] = useState(
        <div className="plans_info_box">
            <ul className="packages_lists">
                <li className="packages_li">Blood Group</li>
                <li className="packages_li">Complete Blood Count (CBC)</li>
                <li className="packages_li">Urinalysis</li>
                <li className="packages_li">Malaria Test</li>
                <li className="packages_li">Typhoid Test</li>
                <li className="packages_li">HIV Test</li>
                <li className="packages_li">Genotype Test</li>
                <li className="packages_li">STI'S Test</li>
                <li className="packages_li">Culture & Sensitivity Test</li>
                <li className="packages_li">Nutritional Deficiency</li>
                <li className="packages_li">Lipid Panel</li>
                <li className="packages_li">Thyroid Panel</li>
                <li className="packages_li">Coagulation Panel</li>
                <li className="packages_li">Cardiac Panel</li>
                <li className="packages_li">Cardiac Biomarkers</li>
                <li className="packages_li">Liver Function Test</li>
                <li className="packages_li">Kidney Function Test</li>
            </ul>
            <div className="order_btn_box">
                <button className="order_now">ORDER NOW</button>
            </div>
        </div>
    )
    let [standardPlan, setStandardPlan] = useState(
        <div className="plans_info_box">
            <ul className="packages_lists">
                <li className="packages_li">Blood Group</li>
                <li className="packages_li">Complete Blood Count (CBC)</li>
                <li className="packages_li">Urinalysis</li>
                <li className="packages_li">Malaria Test</li>
                <li className="packages_li">Typhoid Test</li>
                <li className="packages_li">HIV Test</li>
                <li className="packages_li">Genotype Test</li>
                <li className="packages_li">STI'S Test</li>
                <li className="packages_li">Culture & Sensitivity Test</li>
            </ul>
            <div className="order_btn_box">
                <button className="order_now">ORDER NOW</button>
            </div>
        </div>
    )
    let [basicPlan, setBasicPlan] = useState(
        <div className="plans_info_box">
            <ul className="packages_lists">
                <li className="packages_li">Blood Group</li>
                <li className="packages_li">Complete Blood Count (CBC)</li>
                <li className="packages_li">Urinalysis</li>
                <li className="packages_li">Malaria Test</li>
                <li className="packages_li">Typhoid Test</li>
            </ul>
            <div className="order_btn_box">
                <button className="order_now">ORDER NOW</button>
            </div>
        </div>
    )

    
    let [plan, setPlan] = useState()

    return ( 
        <div className="outer_wrapper">
            <div className="container">
                <div className={styles.male_health_package_wrapper}>
                        <h2 className={styles.green_text_heading}>Male Health Test Packages</h2>

                        <div className={styles.grid_column_2}>
                            <div className={styles.check_boxes}>
                                <Plancheckbox setPlan={setPlan} premiumPlan={premiumPlan} standardPlan={standardPlan} basicPlan={basicPlan} />
                            </div>
                                {plan}
                        </div>

                </div>
            </div>
        </div>
     );
}
 
export default Menpackages;