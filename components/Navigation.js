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
            <div key={name} className="hidden font-prozaLibre lg:block px-2 py-1 mx-2 mt-2 text-md font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">
                <Link  href={`/${name === 'Blog' ? '' : name.toLowerCase()}`} >{name}</Link>
            </div>
        )
    }

    navGeneratorMobi = (name) => {
        return(
            <div key={name} className={`${this.state.dropDownMenu ? null : 'hidden'} font-prozaLibre lg:hidden px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700`}>
                <Link href={`/${name === 'Blog' ? '' : name.toLowerCase()}`} >{name}</Link>
            </div>
        )
    }

    render() {
        const { navItem } = this.props;
        return (
            <nav className="bg-white shadow dark:bg-gray-800 block sticky top-0 overflow-x-auto overflow-y-auto z-10">
                <div className="container px-6 py-4 mx-auto lg:flex lg:justify-between lg:items-center">
                    <div className="lg:flex lg:items-center">
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="font-jost text-2xl font-bold text-gray-800 dark:text-white lg:text-4xl hover:text-gray-700 dark:hover:text-gray-300">
                                    <Link href="/">Theo's Blog</Link>
                                </div>
                            </div>
                            
                            <div className="flex lg:hidden">
                                <button type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu" onClick={() => this.handleClick()}>
                                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                        <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
    
                        <div className="flex flex-col text-gray-600 capitalize dark:text-gray-300 lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center">
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