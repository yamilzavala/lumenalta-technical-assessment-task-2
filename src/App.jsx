import React from "react";
import { BrowserRouter, Navigate, Route, Routes, useParams } from "react-router-dom";
import "./App.css";
import { ProposalDetailsPage, ProposalListPage } from "./proposals";

const ProposalDetailsPageWrapper = () => {
    const { proposalId } = useParams(); // Hook para obtener el parámetro dinámico
    return <ProposalDetailsPage talkId={proposalId} />;
};

const App = () => (
    <BrowserRouter>
        <div className="App">
            <main className="App_content">
                <Routes>
                    <Route path="/proposals/:proposalId" element={<ProposalDetailsPageWrapper />} />
                    <Route path="/proposals" element={<ProposalListPage />} />    
                    <Route path="*" element={<Navigate to="/proposals" replace />} />
                </Routes>
            </main>
        </div>
    </BrowserRouter>
);

export default App;



