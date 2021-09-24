import React from "react";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const CategoriesItem = ({ tag, idx }) => {
    return (
        <div data-test="component-blog-categoriesItem" key={idx}>
            <Link href={`/category/${tag}`}>
                <div className="categoritesItem">
                    <IoIosArrowForward size="30px" />
                    <h2>{tag}</h2>
                </div>
            </Link>
        </div>
    );
};

export default CategoriesItem;
