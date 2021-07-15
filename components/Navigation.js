import React from 'react';
import Link from 'next/link';

class Navigation extends React.Component {
    constructor(){
        super()
        this.state = {
            dropDownMenu: false
        }
    }

    handleClick = () => {
        this.setState(prevState => ({ dropDownMenu: !prevState.dropDownMenu }))
    }

    navGenerator = (name) => {
        return(
            <h2 key={name} className="hidden font-prozaLibre lg:block px-2 py-1 mx-2 mt-2 text-lg font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 hover:bg-gray-300 ">
                <Link  href={`/${name === 'Blog' ? '' : name.toLowerCase()}`} >{name}</Link>
            </h2>
        )
    }

    navGeneratorMobi = (name) => {
        return(
            <div key={name}>
                <Link href={`/${name === 'Blog' ? '' : name.toLowerCase()}`} >
                    <h2 className={`${this.state.dropDownMenu ? null : 'hidden'} cursor-pointer font-prozaLibre text-lg lg:hidden px-2 py-2 my-2 font-medium text-gray-700 transition-colors duration-200 transform rounded-md hover:bg-gray-300`}>
                        {name}
                    </h2>
                </Link>
            </div>
        )
    }

    render() {
        const { navItem } = this.props;
        return (
            <nav className="bg-white shadow fixed w-full top-0 overflow-x-auto overflow-y-auto z-10">
                <div className="container px-6 py-4 mx-auto lg:flex lg:justify-between lg:items-center">
                    <div className="lg:flex lg:items-center">
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="font-spartan text-2xl font-bold text-gray-800 italic lg:text-3xl hover:text-gray-700">
                                    <Link href="/">Theo's Blog</Link>
                                </h1>
                            </div>
                            
                            <div className="flex lg:hidden">
                                <button type="button" className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu" onClick={() => this.handleClick()}>
                                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                        <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
    
                        <div className="flex flex-col text-gray-600 capitalize lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center">
                            {!navItem ? null : navItem.map(item => this.navGenerator(item))}
                            {!navItem ? null : navItem.map(item => this.navGeneratorMobi(item))}
                        </div>
                        
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navigation;