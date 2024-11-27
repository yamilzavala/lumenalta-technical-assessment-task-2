import React from "react";

import DetailsSection from "../DetailsSection";

import "./ProposalDetails.css";

const ProposalDetails = ({ talk }) => {
    return (
        <div data-testid="proposal-details" className="ProposalDetails">
            <DetailsSection
                className="ProposalDetails__speaker"
                name="speaker"
            >
                <span className="ProposalDetails__speaker__value">
                    {talk?.speaker}                    
                </span>
            </DetailsSection>
            <DetailsSection
                className="ProposalDetails__category"
                name="category"
            >
                {talk?.category}  
            </DetailsSection>
            <DetailsSection
                className="ProposalDetails__description"
                name="description"
            >
                <div className="ProposalDetails__description__value">
                    {talk?.description}
                </div>
            </DetailsSection>
        </div>
    );
};

export default ProposalDetails;
