import React from "react";
import CompanyFields from "./CompanyFields";
import Department from "./Department";
import JobTitle from "./JobTitle";
import Manager from "./Manager";
import "../companyprofile/Company.css";

const CompanyProfileForm = () => {
  return (
    <>
      <br></br>
      <br></br>
      <div className="CompanyProfileForm_card0">
        <div className="CompanyProfileForm_formheader">
          <h4 className="CompanyProfileForm_company-info-title">
            Comapany Information
          </h4>
        </div>
        <CompanyFields />
        <Department />
        <Manager />
        <JobTitle />
      </div>
    </>
  );
};

export default CompanyProfileForm;
