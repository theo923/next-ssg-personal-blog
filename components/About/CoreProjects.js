
import React from 'react';
import Image from 'next/image';
import SetIntersectionObserver from '../functionality/SetIntersectionObserver';
import { FaStar, FaCheck, FaAngleDoubleUp, FaGithub, FaRegWindowMaximize, FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import Link from 'next/link';

const CoreProjects = ({forwardRef}) => {
    const [imageInterval, setImageInterval] = React.useState(1)

    React.useEffect(() => {
        const id = setTimeout(() => {
            if(imageInterval >= 4) setImageInterval(1)
            else setImageInterval(imageInterval + 1)
        }, 15000);
        return () => {
            clearTimeout(id);
        };
    },[imageInterval])

    const frameworkNlibrary = (item, num, direction) => <SetIntersectionObserver key={num} type={num} direction={direction}><span className='flex justify-items-center items-center'><FaStar className="text-yellow-500 mr-2" size={13} />{item}</span></SetIntersectionObserver>;
    const sitefunction = (item, num, direction) => <SetIntersectionObserver key={num} type={num} direction={direction}><span className='flex justify-items-center items-center'><FaCheck className="text-green-500 mr-2" size={13} />{item}</span></SetIntersectionObserver>;
    const promptToHover = () => <span className='font-anaheim m-4 floatUpDown flex justify-items-center items-center'><FaAngleDoubleUp className="text-green-500 mr-2" size={13} />Try to hover it!</span>
    const showBox = (proj) => <Image className='blur-sm hover:blur-none' layout='fill' src={`/about/${proj}-000${imageInterval}.gif`}/>

    return (
        <>
            <section ref={forwardRef} className='py-20 my-20 mx-4 lg:mx-14 min-h-screen'>
                <div className='flex flex-col items-center justify-center mb-12 h-full'>
                    <SetIntersectionObserver type={1}  direction='down'>
                    <h3 className='font-spartan text-5xl m-11 lg:m-28'>Projects</h3>
                    </SetIntersectionObserver>
                    <div className='grid grid-rows-3 lg:w-3/4 gap-96'>

                        <SetIntersectionObserver type={2}  direction='left'>
                        <div className='grid grid-cols-1 lg:grid-cols-2'>
                            <div className='order-1 lg:order-1 mr-10 lg:mr-20'>
                                <div className='font-spartan text-2xl md:text-4xl'>NextJS Personal Blog</div>
                                <SetIntersectionObserver type={3}  direction='left'>
                                    <div className='font-anaheim text-xl '>A Static Generation Site using NextJS</div>
                                </SetIntersectionObserver>
                                    <div className='grid md:grid-cols-2 font-anaheim gap-1'>
                                        <div className='md:col-span-2 text-lg text-blue-800 font-bold'>Frameworks & Libraries Used:</div>
                                        {['NextJS', 'ReactJS', 'MongoDB', 'Jest & Enzyme', 'TailwindCSS', 'fs, marked & gray-matter']
                                            .map((item, idx) => {
                                                return frameworkNlibrary(item, idx, 'left')
                                            })
                                        }
                                    </div>
                                    <div className='font-anaheim gap-1'>
                                        <div className='text-lg text-red-800 font-bold'>Functions:</div>
                                        {['Superfast speed', 'SEO-efficient', 'Read .md files from post folder', 'Convert .md files into httpStrings', 'Store visitor\'s comments']
                                            .map((item, idx) => {
                                                return sitefunction(item, idx, 'left')
                                            })
                                        }
                                    </div>
                            </div>
                            <div className='order-3 lg:order-2 relative my-4 lg:my-0 h-64 w-auto lg:h-auto rounded-xl border-8 border-solid border-gray-300 '>{showBox('0001')}</div>
                             <div className='order-2 lg:order-3'>
                                <span className='flex justify-items-center items-center mt-10'>
                                    <button className='mr-2'><a href='https://github.com/theo923/next-ssg-personal-blog' target='_blank'><FaGithub className='cursor-pointer hover:text-blue-500' size={30}></FaGithub></a></button>
                                    <span className='font-anaheim m-4 floatLeftRight flex justify-items-center items-center'><FaAngleDoubleLeft className='mr-2 cursor-pointer text-green-500' size={20}></FaAngleDoubleLeft> Click to View Repository</span>
                                </span>
                                <span className='flex justify-items-center items-center mb-5'>
                                    <button className='mr-2'><Link href='/'><a target='__blank'><FaRegWindowMaximize className='cursor-pointer hover:text-blue-500' size={30}></FaRegWindowMaximize></a></Link></button>
                                    <span className='font-anaheim m-4 floatLeftRight flex justify-items-center items-center'><FaAngleDoubleLeft className='mr-2 cursor-pointer text-green-500' size={20}></FaAngleDoubleLeft> Click to View the Deployment Site</span>
                                </span>
                            </div> 
                            <div className='order-4 lg:order-4'>{promptToHover()}</div>
                        </div>
                        </SetIntersectionObserver>

                        <SetIntersectionObserver type={2}  direction='right'>
                        <div className='grid grid-cols-1 lg:grid-cols-2'>
                            <div className='order-1 lg:order-2 lg:mr-20'>
                                <div className='font-spartan text-2xl md:text-4xl'>Netfake</div>
                                <SetIntersectionObserver type={3}  direction='right'>
                                    <div className='font-anaheim text-xl '>A netflix clone</div>
                                </SetIntersectionObserver>
                                    <div className='grid md:grid-cols-2 font-anaheim gap-1'>
                                        <div className='md:col-span-2 text-lg text-blue-800 font-bold'>Frameworks & Libraries Used:</div>
                                        {['ReactJS', 'TypeScript', 'TailwindCSS', 'AXIOS', 'Jest & Enzyme', 'movie-trailer', 'youtube-search', 'The Movie Database API', 'YouTube API v3']
                                            .map((item, idx) => {
                                                return frameworkNlibrary(item, idx, 'right')
                                            })
                                        }
                                    </div>
                                    <div className='font-anaheim gap-1'>
                                        <div className='text-lg text-red-800 font-bold'>Functions:</div>
                                        {['Get series/movie from The Movie Database API', 'Clicked on the poster, the information of item will be shown', 'movie-trailer for initial search on trailer', 'search-youtube for backup plan on searching trailer']
                                            .map((item, idx) => {
                                                return sitefunction(item, idx, 'right')
                                            })
                                        }
                                    </div>
                            </div>
                            <div className='order-3 lg:order-1 mr-10 relative my-4 lg:my-0 h-64 w-auto lg:h-auto rounded-xl border-8 border-solid border-gray-300 '>{showBox('0002')}</div>
                            <div className='order-2 lg:order-4'>
                                <span className='flex flex-row-reverse justify-items-center items-center mt-10'>
                                    <button className='mr-2'><a href='https://github.com/theo923/netfake' target='_blank'><FaGithub className='cursor-pointer hover:text-blue-500' size={30}></FaGithub></a></button>
                                    <span className='font-anaheim m-4 floatLeftRight flex justify-items-center items-center'> Click to View Repository <FaAngleDoubleRight className='ml-2 cursor-pointer text-green-500' size={20}></FaAngleDoubleRight></span>
                                </span>
                                <span className='flex flex-row-reverse justify-items-center items-center mb-5'>
                                    <button className='mr-2'><a href='https://netfake.vercel.app/' target='_blank'><FaRegWindowMaximize className='cursor-pointer hover:text-blue-500' size={30}></FaRegWindowMaximize></a></button>
                                    <span className='font-anaheim m-4 floatLeftRight flex justify-items-center items-center'> Click to View the Deployment Site <FaAngleDoubleRight className='ml-2 cursor-pointer text-green-500' size={20}></FaAngleDoubleRight></span>
                                </span>
                            </div> 
                            <div className='order-4 lg:order-3'>{promptToHover()}</div>
                        </div>
                        </SetIntersectionObserver>


                        <SetIntersectionObserver type={2}  direction='left'>
                        <div className='grid grid-cols-1 lg:grid-cols-2'>
                            <div className='order-1 lg:order-1 mr-10 lg:mr-20'>
                                <div className='font-spartan text-2xl md:text-4xl'>React Shopping Mall & Docker Image</div>
                                <SetIntersectionObserver type={3}  direction='left'>
                                    <div className='font-anaheim text-xl '>A Online Shopping Mall for online shopping and order tracking</div>
                                </SetIntersectionObserver>
                                    <div className='grid md:grid-cols-2 font-anaheim gap-1'>
                                        <div className='md:col-span-2 text-lg text-blue-800 font-bold'>Frameworks & Libraries Used:</div>
                                        {['ReactJS', 'TypeScript', 'ExpressJS', 'PostgreSQL', 'Docker', 'Unraid OS', 'daisyui', 'knex', 'helmet', 'bcrypt-nodejs']
                                            .map((item, idx) => {
                                                return frameworkNlibrary(item, idx, 'left')
                                            })
                                        }
                                    </div>
                                    <div className='font-anaheim gap-1'>
                                        <div className='text-lg text-red-800 font-bold'>Functions:</div>
                                        {['Frontend is connecting to Server and Database', 'Heroku Deployment for all (Client, Server, Database)', 'Register & Login function', 'Allowing to add item into Shopping Cart', 'Applied bcrpyt for encrytion', 'Receiving user\'s order by converting JSON to string', 'Send data to database from Express & knex', 'Fetching user\'s order by converting string into JSON', 'Setup Image in Docker & Unraid for local environment']
                                            .map((item, idx) => {
                                                return sitefunction(item, idx, 'left')
                                            })
                                        }
                                    </div>
                            </div>
                            <div className='order-3 lg:order-2 relative my-4 lg:my-0 h-64 w-auto lg:h-auto rounded-xl border-8 border-solid border-gray-300 '>{showBox('0003')}</div>
                            <div className='order-2 lg:order-3'>
                                <span className='flex justify-items-center items-center mt-10'>
                                    <button className='mr-2'><a href='https://github.com/theo923/React_Shopping_Mall' target='_blank'><FaGithub className='cursor-pointer hover:text-blue-500' size={30}></FaGithub></a></button>
                                    <span className='font-anaheim m-4 floatLeftRight flex justify-items-center items-center'><FaAngleDoubleLeft className='mr-2 cursor-pointer text-green-500' size={20}></FaAngleDoubleLeft> Click to View Client's Repository</span>
                                </span>
                                <span className='flex justify-items-center items-center'>
                                    <button className='mr-2'><a href='https://github.com/theo923/React_Shopping_Mall_API' target='_blank'><FaGithub className='cursor-pointer hover:text-blue-500' size={30}></FaGithub></a></button>
                                    <span className='font-anaheim m-4 floatLeftRight flex justify-items-center items-center'><FaAngleDoubleLeft className='mr-2 cursor-pointer text-green-500' size={20}></FaAngleDoubleLeft> Click to View Server's Repository</span>
                                </span>
                                <span className='flex justify-items-center items-center'>
                                    <button className='mr-2'><a href='https://github.com/theo923/react-shopping-mall-ts-server-docker' target='_blank'><FaGithub className='cursor-pointer hover:text-blue-500' size={30}></FaGithub></a></button>
                                    <span className='font-anaheim m-4 floatLeftRight flex justify-items-center items-center'><FaAngleDoubleLeft className='mr-2 cursor-pointer text-green-500' size={20}></FaAngleDoubleLeft> Click to View Docker's Repository</span>
                                </span>
                                <span className='flex justify-items-center items-center mb-5'>
                                    <button className='mr-2'><a href='https://react-shopping-mall.netlify.app/' target='_blank'><FaRegWindowMaximize className='cursor-pointer hover:text-blue-500' size={30}></FaRegWindowMaximize></a></button>
                                    <span className='font-anaheim m-4 floatLeftRight flex justify-items-center items-center'><FaAngleDoubleLeft className='mr-2 cursor-pointer text-green-500' size={20}></FaAngleDoubleLeft> Click to View the Deployment Site</span>
                                </span>
                            </div> 
                            <div className='order-4 lg:order-4'>{promptToHover()}</div>
                        </div>
                        </SetIntersectionObserver>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CoreProjects;


