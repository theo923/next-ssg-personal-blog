import React from "react";
import Link from "next/link";
import { GoThreeBars } from "react-icons/go";

class Navigation extends React.Component {
    constructor() {
        super();
        this.state = {
            dropDownMenu: false,
        };
    }

    handleClick = () => {
        this.setState((prevState) => ({
            dropDownMenu: !prevState.dropDownMenu,
        }));
    };

    navGenerator = (name) => {
        return (
            <h2 key={name} className="navComp">
                <Link href={`/${name === "Blog" ? "" : name.toLowerCase()}`}>
                    {name}
                </Link>
            </h2>
        );
    };

    navGeneratorMobi = (name) => {
        return (
            <div key={name}>
                <Link href={`/${name === "Blog" ? "" : name.toLowerCase()}`}>
                    <h2
                        className={`${
                            this.state.dropDownMenu ? null : "hidden"
                        } navMobi`}
                    >
                        {name}
                    </h2>
                </Link>
            </div>
        );
    };

    render() {
        const { navItem } = this.props;
        return (
            <nav className="nav">
                <div className="container navContainer">
                    <div className="lg:flex lg:items-center">
                        <div className="navTitle">
                            <div>
                                <h1 className="navTitleDiv">
                                    <Link href="/">Theo's Blog</Link>
                                </h1>
                            </div>

                            <div className="navBtn">
                                <button
                                    type="button"
                                    className="navBtnToggle"
                                    aria-label="toggle menu"
                                    onClick={() => this.handleClick()}
                                >
                                    <GoThreeBars size={15} />
                                </button>
                            </div>
                        </div>

                        <div className="navList">
                            {!navItem
                                ? null
                                : navItem.map((item) =>
                                      this.navGenerator(item)
                                  )}
                            {!navItem
                                ? null
                                : navItem.map((item) =>
                                      this.navGeneratorMobi(item)
                                  )}
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navigation;
