
import React from 'react';



const ProjectInfo = () => {

    const ProjectGenerator = (link, imgUrl, heading, context) => {
        return(
            <div class="w-full p-6 mx-auto md:w-1/2 xl:w-1/3">
                <a href={link} target='_blank'>
                    <div class="p-6 my-4 lg:p-8 cursor-pointer rounded-xl bg-gray-100 hover:bg-blue-200 shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                        <img class="object-cover object-center h-64 w-full mb-8 rounded-xl" src={imgUrl} alt={heading}/>
                        <h1 class="font-spartan mx-auto mb-8 text-2xl font-semibold leading-normal tracking-tighter text-black title-font">{heading}</h1>
                        <p class=" font-hindSiliguri mx-auto text-lg leading-loose text-blueGray-700 h-64 ">{context}</p>
                    </div>
                </a>
            </div>
        )
    }

    return (
        <div>
            <section class="text-blueGray-700">
                <div class="container items-center px-5 py-64 mx-auto h-full lg:px-16">
                    <div class="flex flex-wrap mb-12 text-left">
                        {ProjectGenerator('https://theo923.com/', './image/Blog.png', 'My Personal Blog', 'Blog about my onging coding journey, my life, my works. Sometimes I will share my solution in dealing with different problems, sometimes I will share anythings that meaningful to me, sometimes I will share my happiness if I have accomplished some achievements...')}
                        {ProjectGenerator('https://react-shopping-mall.netlify.app/', './image/ShoppingMall.png', 'React Shopping Mall', 'Online Shopping Mall Website DEMO (PWA App) that using React JS & Typescript as Frontend, Express JS as Server, PostgreSQL as Database. It can announce on new products, perform checkout function on shopping cart, retreive the tracking information.')}
                        {ProjectGenerator('https://hub.docker.com/u/theo9234/', './image/ShoppingMallDockerImage.png', 'React Shopping Mall Docker', 'Online Shopping Mall Website DEMO Docker Image that can be used by Dockhub / Unraid Docker')}
                    </div>
                </div>
            </section>
        </div>
    )
    
}

export default ProjectInfo;


