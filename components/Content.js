import React from "react";
import dynamic from "next/dynamic";
const AuthorInfo = dynamic(() => import("./Blog/AuthorSideBar"));
const Body = dynamic(() => import("./Blog/Body"));
const CategoriesSideBar = dynamic(() => import("./Blog/CategoriesSideBar"));
const ProjectInfo = dynamic(() => import("./Project/ProjectInfo"));
const ContactMe = dynamic(() => import("./Contact/ContactMe"));
const AboutMe = dynamic(() => import("./About/AboutMe"));

const Content = ({ type, category, data, item, httpString, categories }) => {
    return (
        <div data-test="component-app-content" className="h-full">
            {type === "blog" ? (
                <section>
                    <div id="header" className="banner">
                        <p>
                            Hello, I am Theo, Welcome to my blog.
                            <br /> I love learning and I will keep sharing what
                            I have learnt everyday.
                            <br /> If you have questions/comments please leave a
                            message on the Contact page
                        </p>
                    </div>
                    <div className="blogContent">
                        <div className="blogContentCategory">
                            <CategoriesSideBar categories={categories} />
                        </div>
                        <div className="blogContentBody">
                            <Body
                                category={category}
                                data={data}
                                item={item}
                                httpString={httpString}
                            />
                        </div>
                        <div className="blogContentAuthor">
                            <AuthorInfo />
                        </div>
                    </div>
                </section>
            ) : type === "project" ? (
                <div id="header" className="projectContent">
                    <ProjectInfo />
                </div>
            ) : type === "contact" ? (
                <div id="header" className="contactContent">
                    <ContactMe />
                </div>
            ) : type === "about" ? (
                <div id="header" className="aboutContent">
                    <AboutMe />
                </div>
            ) : null}
        </div>
    );
};

export default Content;
