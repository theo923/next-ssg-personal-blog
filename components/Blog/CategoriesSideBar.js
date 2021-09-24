import React from "react";
import CategoriesItem from "./CategoriesItem";

const CategoriesSideBar = ({ categories }) => {
    return (
        <div
            data-test="component-blog-categoriesSideBar"
            className="categoritesSideBar"
        >
            <div className="categoritesSideBarDiv">
                <div className="categoritesSideBarDivDiv">
                    <h1>Categories</h1>
                    <div className="categoritesSideBarDivDivBorder">
                        {!categories
                            ? null
                            : categories.map((tag, idx) => (
                                  <CategoriesItem tag={tag} idx={idx} />
                              ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoriesSideBar;
