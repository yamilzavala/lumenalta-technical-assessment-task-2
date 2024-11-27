import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getTalk } from "./service";

import Loading from "../Loading";
import NotFound from "../NotFound";
import Page from "../Page";
import ProposalDetails from "./ProposalDetails";

import "./ProposalDetailsPage.css";

export const ProposalDetailsPage = ({ talkId }) => {
    const [isNotFound, setIsNotFound] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [talk, setTalk] = useState()

    useEffect(() => {
        const fetchTalk = async () => {
            try {
                setIsLoading(true)
                const talk = await getTalk(talkId);
                if(!talk) {
                    setIsNotFound(true)
                }
                setTalk(talk)
            } catch (error) {
                console.error('Error: ', error?.message)
            } finally {
                setIsLoading(false)
            }
        }
        fetchTalk()
    }, [])

    if (isNotFound) {
        return <NotFound/>;
    }

    return (
        <Page
            className="ProposalDetailsPage"
            title={!talk ? "…" : talk?.title}
        >
            <div className="ProposalDetailsPage__content">
                <div>
                    <Link
                        className="ProposalDetailsPage__back"
                        to="/proposals"
                    >
                        back to Call for Papers
                    </Link>
                </div>
                {isLoading && <Loading/>}
                <ProposalDetails talk={talk}/>
            </div>
        </Page>
    );
}

export default ProposalDetailsPage;