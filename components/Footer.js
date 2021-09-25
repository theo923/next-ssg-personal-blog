import React from "react";
import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedinIn, FaMailBulk } from "react-icons/fa";

const Footer = () => {
    return (
        <footer data-test="component-app-footer" className="footer">
            <div className="footerTitle">
                <h1>
                    <Link href="/">Theo's Blog</Link>
                </h1>
            </div>

            <p>All rights reserved</p>

            <div className="footerLink">
                <a href="https://github.com/theo923" target="_blank">
                    <FaGithub className="footerLinkIcon" size={20} />
                </a>
                <a
                    href="https://www.linkedin.com/in/theotam923/"
                    target="_blank"
                >
                    <FaLinkedinIn className="footerLinkIcon" size={20} />
                </a>
                <a href="https://twitter.com/TheoTam4" target="_blank">
                    <FaTwitter className="footerLinkIcon" size={20} />
                </a>
                <a href="mailto:theotam923@gmail.com" target="_blank">
                    <FaMailBulk className="footerLinkIcon" size={20} />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
