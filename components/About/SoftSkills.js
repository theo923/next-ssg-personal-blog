
import React from 'react';
import Link from 'next/link';
import SetIntersectionObserver from '../functionality/SetIntersectionObserver';


const SoftSkills = ({forwardRef}) => {

    return (
        <>
            <div ref={forwardRef} className='pt-20 mx-4 mt-20 lg:mx-20 min-h-screen'>
                <div className='text-center'>
                    <div className='border-gray-700'>
                        <SetIntersectionObserver type={1}  direction='left'><h3 className='font-spartan text-4xl lg:text-5xl mb-20'>Soft Skills</h3></SetIntersectionObserver>
                        <SetIntersectionObserver type={2}  direction='left'><h3 className='font-spartan text-2xl lg:text-3xl mb-20'>Football Team Member</h3></SetIntersectionObserver>
                        <SetIntersectionObserver type={3}  direction='right'>
                            <p className='font-anaheim text-lg text-center mb-12 mx-9 xl:mx-40'>I was playing football when I was studying in secondary school. Instead of precious football memories, there are some technical softskills that I think they could benefit me a lot when working as a team.</p>
                        </SetIntersectionObserver>
                        <SetIntersectionObserver type={4}  direction='left'><p className='font-anaheim text-xl mb-20'>- Teamwork</p></SetIntersectionObserver>
                        <SetIntersectionObserver type={5}  direction='right'>
                            <p className='font-anaheim text-lg text-center mb-12 mx-9 xl:mx-40'>If you involved in a team, you should uphold Teamwork, this is because <span className=' p-0.5 bg-red-200'>Being united is way powerful than individual</span> - that is what the coach taught us in the first football team practice. Sometimes, it is impossible to be familiar with everyone in the team, because of <span className=' p-0.5 bg-red-200'>different cultures and personalities</span>. In a football match, we are limited to have only 11 members to participate in a competition, which means some members cannot participate eventually. Sometimes, somebody may treat others as opponents. However, everyone in the team share the same goal - <span className=' p-0.5 bg-red-200'>To Win the Match</span>, therefore, we can treat each other <span className=' p-0.5 bg-red-200'>as a good competitor</span> - <span className=' p-0.5 bg-red-200'>To strive for an opportunity as well as To Win the Match</span></p>
                        </SetIntersectionObserver>
                        <SetIntersectionObserver type={6}  direction='left'><p className='font-anaheim text-xl mb-20'>- Communication</p></SetIntersectionObserver>
                        <SetIntersectionObserver type={7}  direction='right'>
                            <p className='font-anaheim text-lg text-center mb-12 mx-9 xl:mx-40'>In football match, every moves important, which may reverse the overall results in the end. Therefore, in order to work well in a team, teammates should <span className=' p-0.5 bg-red-200'>alway communicate with each other and practice together before the match</span>. Each members should <span className=' p-0.5 bg-red-200'>understand and foresee other's action before they actually move</span>. Therefore, I usually have conversation with my teammates in knowing how they think logically and their thoughts on playing football.</p>
                        </SetIntersectionObserver>
                        <SetIntersectionObserver type={8}  direction='left'><p className='font-anaheim text-xl mb-20'>- Organization</p></SetIntersectionObserver>
                        <SetIntersectionObserver type={9}  direction='right'>
                            <p className='font-anaheim text-lg text-center mb-12 mx-9 xl:mx-40'>There are always conflict between Football Team practice and Self-learning. Everyday when we finished a football team practice we should feel tired and not willing to do anything, so homework and revisions are easily being ignored. Therefore, having good organization skills is important. <span className=' p-0.5 bg-red-200'>For me, I will plan a time schedule and to comply with it</span>, which help preventing deadlines and reminding me the important date so that I will not forget. (Exams) </p>
                        </SetIntersectionObserver>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SoftSkills;


