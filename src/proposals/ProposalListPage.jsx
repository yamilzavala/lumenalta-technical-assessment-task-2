import React, { useEffect, useState } from "react";
import { getProposalList, setProposalStatus } from "./service";
import Loading from "../Loading";
import Page from "../Page";
import ProposalList from "./ProposalList";


export const ProposalListPage = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [proposals, setProposals] = useState([])

    useEffect(() => {
        const fetchProposals = async () => {
            try {
                setIsLoading(true)
                const proposals = await getProposalList();
                console.log('proposals: ', proposals)
                setProposals(proposals);
            } catch (error) {
                console.error('Error: ', error?.message);
            } finally {
                setIsLoading(false)
            }
        }

        fetchProposals()
    }, []);

    const updateProposalStatus = (id, status) => {
        setProposals((previousProposals) => {
            return previousProposals.map(proposal =>
                proposal.id === id ? { ...proposal, status } : proposal,
            );
        });
        setProposalStatus(id, status);
    };

    return (
        <Page title="Call for Papers">
            {isLoading && <Loading/>}
            <ProposalList
                proposals={proposals}
                onProposalStatusUpdate={updateProposalStatus}
            />
        </Page>
    );
}

export default ProposalListPage;
