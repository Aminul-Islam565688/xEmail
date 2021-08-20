import { faAt, faEnvelopeOpenText, faFileAlt, faFileUpload, faHandHoldingUsd, faMoneyCheckAlt, faPlug, faTachometerAlt, faTasks, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from "react-router-dom";
import './Sidebar.scss';


const Sidebar = () => {
    return (
        <nav>
            <p className='dashboard-text'><FontAwesomeIcon style={{ marginRight: '5px' }} icon={faTachometerAlt} />Dashboard</p>
            <div>
                <p><FontAwesomeIcon style={{ marginRight: '5px' }} icon={faAt} />EMAIL VERIFICATION</p>
                <ul>
                    <li>
                        <Link to="/single-email-verification"><FontAwesomeIcon style={{ marginRight: '5px' }} icon={faUserCheck} />Single email verification</Link>
                    </li>
                    <li>
                        <Link to="/bulk-email-verification"><FontAwesomeIcon style={{ marginRight: '5px' }} icon={faEnvelopeOpenText} />Bulk email verification</Link>
                    </li>
                    <li>
                        <Link to="/download-verified-result"><FontAwesomeIcon style={{ marginRight: '5px' }} icon={faFileUpload} />Download verified result</Link>
                    </li>
                    <li>
                        <Link to="/email-verification-api"><FontAwesomeIcon style={{ marginRight: '5px' }} icon={faPlug} />Email verification API</Link>
                    </li>
                </ul>
            </div>
            <div>
                <p><FontAwesomeIcon style={{ marginRight: '5px' }} icon={faHandHoldingUsd} />INTEGRATION</p>
                <ul>
                    <li>
                        <Link to="/my-apps"><FontAwesomeIcon style={{ marginRight: '5px' }} icon={faTasks} />My Apps</Link>
                    </li>
                    <li>
                        <Link to="/email-tools"><FontAwesomeIcon style={{ marginRight: '5px' }} icon={faFileAlt} />Email Tools</Link>
                    </li>
                </ul>
            </div>
            <div>
                <p><FontAwesomeIcon style={{ marginRight: '5px' }} icon={faHandHoldingUsd} />BILLING</p>
                <ul>
                    <li>
                        <Link to="/manage-plan"><FontAwesomeIcon style={{ marginRight: '5px' }} icon={faTasks} />Manage plan</Link>
                    </li>
                    <li>
                        <Link to="/invoices"><FontAwesomeIcon style={{ marginRight: '5px' }} icon={faFileAlt} />Invoices</Link>
                    </li>
                    <li>
                        <Link to="/buy-credits"><FontAwesomeIcon style={{ marginRight: '5px' }} icon={faMoneyCheckAlt} />Buy credits</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Sidebar;