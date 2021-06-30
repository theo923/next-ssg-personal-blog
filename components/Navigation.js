import React from 'react';

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
            <a key={name} href={`/${name === 'Blog' ? '' : name.toLowerCase()}`} className="hidden lg:block px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">{name}</a>
        )
    }

    navGeneratorMobi = (name) => {
        return(
            <a key={name} href={`/${name === 'Blog' ? '' : name.toLowerCase()}`} className={`${this.state.dropDownMenu ? null : 'hidden'} lg:hidden px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700`} >{name}</a>
        )
    }

    render() {
        const { dropDownMenu } = this.state;
        const { navItem } = this.props;
        return (
            <nav className="bg-white shadow dark:bg-gray-800">
                <div className="container px-6 py-4 mx-auto lg:flex lg:justify-between lg:items-center">
                    <div className="lg:flex lg:items-center">
                        <div className="flex items-center justify-between">
                            <div>
                                <a className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="#">Theo's Blog</a>
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
                            
                            {!navItem ? null :
                            navItem.map(item => this.navGenerator(item))}

                            <div className="hidden lg:block relative mt-4 lg:mt-0 lg:mx-4">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <svg className="w-4 h-4 text-gray-600 dark:text-gray-300" viewBox="0 0 24 24" fill="none">
                                        <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </span>
    
                                <input type="text" className="w-full py-1 pl-10 pr-4 text-gray-700 placeholder-gray-600 bg-white border-b border-gray-600 dark:placeholder-gray-300 dark:focus:border-gray-300 lg:w-56 lg:border-transparent dark:bg-gray-800 dark:text-gray-300 focus:outline-none focus:border-gray-600" placeholder="Search" />
                            </div>
                               
                            {!navItem ? null :
                            navItem.map(item => this.navGeneratorMobi(item))}

                            <div className={` ${dropDownMenu ? null : 'hidden'} lg:hidden relative mt-4 lg:mt-0 lg:mx-4`}>
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <svg className="w-4 h-4 text-gray-600 dark:text-gray-300" viewBox="0 0 24 24" fill="none">
                                        <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </span>
    
                                <input type="text" className="w-full py-1 pl-10 pr-4 text-gray-700 placeholder-gray-600 bg-white border-b border-gray-600 dark:placeholder-gray-300 dark:focus:border-gray-300 lg:w-56 lg:border-transparent dark:bg-gray-800 dark:text-gray-300 focus:outline-none focus:border-gray-600" placeholder="Search" />
                            </div>
    
                        </div>
    
                    </div>
                </div>
            </nav>
        )
    }


}

export default Navigation;