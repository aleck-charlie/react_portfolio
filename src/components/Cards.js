import React, {  useState } from "react";
import Footer from './Footer';
import NavBar from './NavBar';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Projects from '../pages/Projects';

export default function Cards() {
    const [curPage, setPage] = useState("Home");

    const renderPage = () => {
        if (curPage === "Home") {
            return <Home />;
            }
        if (curPage === "Contact") {
            return <Contact />;
        }
        if (curPage === "Projects") {
            return <Projects />;
        }
    }


const changePage = (page) => setPage(page);

const renderFooter = () => {
    return <Footer />
};

return (
    <div>
        <NavBar curPage={curPage} changePage={changePage} />
        {renderPage()}
        {renderFooter()}

    </div>
);
};


