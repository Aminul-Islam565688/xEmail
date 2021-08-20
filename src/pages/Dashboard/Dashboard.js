import React from 'react';
import {
    BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import BulkEmailVerification from '../../components/Dashboard_Components/BulkEmailVerification/BulkEmailVerification';
import BuyCredits from '../../components/Dashboard_Components/BuyCredits/BuyCredits';
import EmailTools from '../../components/Dashboard_Components/EmailTools/EmailTools';
import EmailVerificationAPI from '../../components/Dashboard_Components/EmailVerificationAPI/EmailVerificationAPI';
import Invoices from '../../components/Dashboard_Components/Invoices/Invoices';
import ManagePlan from '../../components/Dashboard_Components/ManagePlan/ManagePlan';
import MyApps from '../../components/Dashboard_Components/MyApps/MyApps';
import Sidebar from '../../components/Dashboard_Components/Sidebar/Sidebar';
import SingleEmailVerification from '../../components/Dashboard_Components/SingleEmailVerification/SingleEmailVerification';
import VerifiedResult from '../../components/Dashboard_Components/VerifiedResult/VerifiedResult';
import './Dashboard.scss';


const Dashboard = () => {
    return (
        <>
            <Router>
                <div className='dashboard-main'>
                    <Sidebar />
                    <div className='dashboard-content'>
                        <Switch>
                            <Route exact path="/">
                                <SingleEmailVerification />
                            </Route>
                            <Route exact path="/single-email-verification">
                                <SingleEmailVerification />
                            </Route>
                            <Route exact path="/bulk-email-verification">
                                <BulkEmailVerification />
                            </Route>
                            <Route exact path="/download-verified-result">
                                <VerifiedResult />
                            </Route>
                            <Route exact path="/email-verification-api">
                                <EmailVerificationAPI />
                            </Route>
                            <Route exact path="/my-apps">
                                <MyApps />
                            </Route>
                            <Route exact path="/email-tools">
                                <EmailTools />
                            </Route>
                            <Route exact path="/manage-plan">
                                <ManagePlan />
                            </Route>
                            <Route exact path="/invoices">
                                <Invoices />
                            </Route>
                            <Route exact path="/buy-credits">
                                <BuyCredits />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        </>
    );
};

export default Dashboard;