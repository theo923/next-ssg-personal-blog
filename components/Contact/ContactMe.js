
import React from 'react';

const initialState = {
    title: '',
    email: '',
    comment: '',
    complete: false
}

class ContactMe extends React.Component {
    constructor(){
        super();
        this.state = initialState
    }

    async insertData (commentdata) {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                data: commentdata
            })
        })
    }

    handleChange = e => {
        const {name, value} = e.target;
        console.log('name value: ',name, value)
        this.setState({[name]:value});
        
    }

    reset = () => {
        this.setState(initialState);
    }

    render(){
        const {title, email, comment, complete} = this.state;
        return (
            <div>
                <section className="text-blueGray-700">
                    <div className="container items-center px-5 py-64 mx-auto h-full lg:px-16">
                        <div className="mb-12 text-left">
                            <div className='p-6 my-4 lg:p-8 rounded-xl bg-gray-100 shadow-2xl'>
                                {!complete ?
                                <div className='flex flex-col'>
                                    <div className='font-juliusSansOne font-bold text-4xl self-center py-3 mb-4'>Comment</div>
                                    <div className='grid grid-cols-1 md:grid-cols-3'>
                                        <label htmlFor='title' className='font-juliusSansOne text-xl py-2'>Title:</label>
                                        <input name='title' value={title} className='pr-20 py-2 md:pr-40 md:my-2 md:col-span-2' onChange={e => this.handleChange(e)}></input>
                                        <label htmlFor='email' className='font-juliusSansOne text-xl py-2'>Email Address:</label>
                                        <input name='email' value={email}  className='pr-20 py-2 md:pr-40 md:my-2 md:col-span-2' onChange={e => this.handleChange(e)}></input>
                                        <label htmlFor='comment' className='font-juliusSansOne text-xl py-2'>Comment:</label>
                                        <textarea name='comment' value={comment} className='pr-20 py-2 md:pr-40 md:my-2 md:col-span-2' onChange={e => this.handleChange(e)}></textarea>
                                        <div className='hidden md:block'></div>
                                        <div className='hidden md:block'></div>
                                        <div className='font-juliusSansOne'>
                                            <button type='submit' onClick={() => {this.insertData({title, email, comment}); this.setState(prevState => ({complete: !prevState.complete}))}} className='float-right py-2 px-2 mx-4 mt-4 rounded-lg bg-gray-300 hover:bg-gray-700 hover:text-white'>Submit</button>
                                            <button onClick={() => this.reset()} className='float-right py-2 px-2 mx-4 mt-4 rounded-lg bg-gray-300 hover:bg-gray-700 hover:text-white'>Reset</button>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div className='font-juliusSansOne text-3xl'>Thanks for your comment !</div>}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default ContactMe;


