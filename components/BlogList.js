import React from 'react';
import BlogNode from './BlogNode'


class BlogList extends React.Component{
    constructor(){
        super();
        this.state = {
            searchBox: ''
        }
    }

    handleSearchChange = e => {
        const {value} = e.target
        this.setState({searchBox: value})
    }

    render() {
        const { data, item, category } = this.props
        const { searchBox } = this.state
        return (
            <div className='flex flex-col'>            
                <input value={searchBox} onChange={e => this.handleSearchChange(e)} className=" self-center md:self-end w-3/5 md:w-1/3 my-3 px-3 py-2 leading-8 text-black transition duration-500 ease-in-out transform rounded-lg focus:bg-white focus:outline-none focus:shadow-outline ring-0 focus:ring-4 ring-offset-current ring-offset-2" placeholder='Type to Search' />
                {category ? item.map((post, idx) => data[idx].tags.includes(category) && data[idx].title.toLowerCase().includes(searchBox) ? <BlogNode key={post} data={data[idx]} post={post} /> : null ) :
                !item ? null : item.map((post, idx) => data[idx].title.toLowerCase().includes(searchBox) ? <BlogNode key={post} data={data[idx]} post={post} /> : null ) }
                <div className='pb-96 mb-96' />
            </div>
        )
    }
}

export default BlogList;
