import React from 'react'
import myImage from "./../assets/img7.png"
import Expe from './experience'
import myImage1 from "./../assets/cup.jpeg"
import myImage2 from "./../assets/logo1.png"
import myImage3 from "./../assets/logo2.png"
import myImage4 from "./../assets/logo3.png"
import myImage5 from "./../assets/logo5.png"
import myImage6 from "./../assets/pigy.jpeg"
import myImage7 from "./../assets/loan.jpeg"
import myImage8 from "./../assets/auto.jpeg"
import Serve from './service'
import Result from './result'
import News from './newsForm'
import Foot from './footer'

function Body1() {

    const expItems = [
        {
            icon: <i className='fa-solid fa-users text-4xl text-pink-600'></i>, 
            h4: "Integrity",
            p: "Displaying the highest level of integrity in the way we conduct our buisness"
        },
        {
            icon: <i className='fa-solid fa-person-running text-4xl text-pink-600'></i>, 
            h4: "Demonstrate",
            p: "Demonstrate a strong will to win in the market place"
        }, 
        {
            icon: <i className='fa-solid fa-divide text-4xl text-pink-600'></i>, 
            h4: "Diversity",
            p: "Promoting Diversity in the work place and community"
        }, 
        {
            icon: <i className='fa-solid fa-people-group text-4xl text-pink-600'></i>, 
            h4: "Teamwork",
            p: "Creating chances for teamwork to enfore collaboration "
        }, 
        {
            icon: <i className='fa-solid fa-people-line text-4xl text-pink-600'></i>, 
            h4: "Collaboration",
            p: "Displaying the highest level of integrity in the way we conduct our buisness"
        }, 
        {
            icon: <i className='fa-solid fa-rocket text-4xl text-pink-600'></i>, 
            h4: "Technology",
            p: "Harnessing the power of Technology to deliver better customer experience"
        }, 
        {
            icon: <i className='fa-solid fa-copyright text-4xl text-pink-600'></i>, 
            h4: "Corporate",
            p: "Setting the standard for the best corporate citizebship in the communities we work"
        }, 
        {
            icon: <i className='fa-solid fa-tachograph-digital text-4xl text-pink-600'></i>, 
            h4: "Digital",
            p: "Exploring the various form of digital products to enhance productivity"
        }
        
    ]

    const expList = expItems.map(exp => (<Expe i={exp.icon} h4={exp.h4} p={exp.p}/>))

    const serviceItems = [
        {
            img: <img src={myImage1} className='w-[100%] h-[80%] object-cover rounded-[1em]' alt="" />,
            h3: "IPDC saving",
            p: "scheme"
        },
        {
            img: <img src={myImage7} className='w-[100%] h-[80%] object-cover rounded-[1em]' alt="" />,
            h3: "ipdc personal",
            p: "loan"
        }, 
        {
            img: <img src={myImage6} className='w-[100%] h-[80%] object-cover rounded-[1em]' alt="" />,
            h3: "ipdc deposit",
            p: "schemes"
        }, 
        {
            img: <img src={myImage8} className='w-[100%] h-[80%] object-cover rounded-[1em]' alt="" />,
            h3: "ipdc auto",
            p: "loan"
        }
    ]


    const serverList = serviceItems.map(serve => (<Serve img={serve.img} h3={serve.h3} p={serve.p}/>)) 

    const resultItems = [
        {
            h2: "57.6 bn",
            p: "Loan portfolio"
        },
        {
            h2: "0.95%",
            p: "classified loan portfolio"
        },
        {
            h2: "388.5%",
            p: "classified loan coverage"
        },
        {
            h2: "50.4 bn",
            p: "Deposit"
        },
        {
            h2: "6.1 bn",
            p: "Shareholders equity"
        }, 
        {
            h2: "18.51%",
            p: "capital adequacy ratio"
        },
        {
            h2: "8.5 bn",
            p: "Market capitalization"
        }, 
        {
            h2: "AAA",
            p: "credit ratin"
        }
    ]

    const resultList = resultItems.map(result => <Result h2={result.h2} p={result.p}/>)

  return (
    <article>
        <section className='h-screen flex pl-[4em]'>
            <a href="" className='poppins flex items-center justify-center gap-[0.5em] font-bold capitalize absolute p-[1em] px-[1.5em] boxSha rounded-[2em] right-[42%] top-[20%]'><i className='fa-solid fa-car-side text-pink-600 text-2xl'></i>Car loans</a>
            <a href="" className='poppins flex items-center justify-center gap-[0.5em] font-bold capitalize absolute p-[1em] px-[1.5em] boxSha rounded-[2em] right-[3%] top-[43%]'><i className='fa-solid fa-house text-pink-600 text-2xl'></i>Car loans</a>
            <div className='w-full h-[100%] gap-[1.5em] flex flex-col items-start justify-center'>
                <h1 className='text-[3rem] line poppins font-extrabold capitalize'>Chase your <span className='block'>dream with us</span></h1>
                <p>The harder you work for something, the greater
                    <span className='block'>you'll feel when you achieve it.</span>
                </p>
                <p className='flex gap-4'>
                    <a href="" className='py-[1em] px-[1.5em] bg-pink-600 font-semibold text-white rounded-[5px] uppercase'>apply online</a>
                    <a href="" className='py-[1em] px-[1.5em] border-2 border-pink-600 text-pink-600 uppercase font-semibold rounded-[5px]'>Loan calculator</a>
                </p>
                <div className='flex gap-[1em] items-center justify-center absolute bottom-0'>
                    <i className='fa-solid fa-phone text-pink-600 text-[1.2rem] text6 '></i>
                    <p className='poppins font-semibold'>+234</p>
                    <p className='poppins font-bold'>|</p>
                    <div className='flex justify-center items-center gap-[0.5em]'>
                        <i className='fa-brands hover:scale-125 text-2xl duration-[0.5s] fa-facebook text-blue-500'></i>
                        <i className='fa-brands hover:scale-125 text-2xl duration-[0.5s] fa-youtube text-red-600'></i>
                        <i className='fa-brands hover:scale-125 text-2xl duration-[0.5s] fa-linkedin text-blue-500'></i>
                        <i className='fa-brands hover:scale-125 text-2xl duration-[0.5s] fa-instagram text-pink-600'></i>
                    </div>
                </div>
            </div>
            <div className='w-full h-100% bg-[#ffeaf5] flex justify-center'>
                <img src={myImage} className='absolute bottom-0 right-[10em]' alt="" />
            </div>
        </section>
        <section className='h-screen p-[3rem] py-[6rem] flex flex-col items-center justify-center'>
            <div className='w-[100%] text-center flex items-center flex-col gap-[1em]'>
                <h2 className='text-4xl poppins font-bold capitalize '>Creating extraordinary customer experience</h2>
                <h2 className='w-[80%] text-gray-500 pb-[2em]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga fugiat dolorum error doloremque praesentium itaque! Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     </h2>
            </div>
            <div className='w-full grid grid-cols-4 grid-rows-2 place-items-center justify-between gap-[1em]'>
                {expList}
            </div>
            
        </section>
        <section className='flex justify-center items-center flex-col h-[50vh] gap-[2.5em]  p-[3rem]'>
            <h2 className='poppins text-3xl font-bold pt-[6em]'>Buisness Partners</h2>
            <div className='flex gap-[10em]'>
                <div className='w-[200px] h-[200px]'>
                    <img src={myImage2} alt="" />
                </div>
                <div className='w-[200px] h-[200px]'>
                <img src={myImage3} alt="" />
                </div>
                <div className='w-[200px] h-[200px]'>
                <img src={myImage4} alt="" />
                </div>
                <div className='w-[200px] h-[200px]'>
                <img src={myImage5} alt="" />
                </div>
            </div>
        </section>
        <section className='flex h-screen w-full items-center gap-[4em]'>
            <div className='w-[500px] bg-cover h-[65%] flex bgImg justify-center items-center'></div>
            <div className='w-[600px] p-[2em] flex flex-col gap-[1em]'>
                <h2 className='text-2xl poppins font-bold'>IPDC AT A GLANCE</h2>
                <p className='text-gray-600'>IPDC Finance Limited (previously known as "Industrial Promotion and Development company of Bangledesh Limited") is the first private sector financial institution of the country established in 1981 by  a distinguished group of shareholders namely International Finance Corporation (IFC), USA, German Investment and Development Company (DEG), Germany, The aga khan Fund for Economic Development (AKFED), Switerzerland, commonwealth Development Corporation (CDC), UK and the Government of Bangledash
                </p>
                <a href="" className='text-pink-600 poppins font-semibold'>Read More <i className='fa-solid fa-arrow-right'></i></a>
            </div>
        </section>
        <section className='p-[3rem] flex flex-col justify-center items-center gap-[1.5em]'>
            <h2 className='poppins text-3xl capitalize font-bold'>Our services</h2>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, non! Lorem, ipsum dolor.</p>
            <div className='flex h-[50%] w-[100%] gap-[2em] p-[1em]'>{serverList}</div>
        </section>
        <section className='h-[80vh] flex flex-col items-center justify-center p-[3rem] gap-[2em]'>
            <div className='flex flex-col justify-center items-center  gap-[2em]'>
                <h2 className='capitalize text-center text-3xl font-bold poppins'>Our best results for the year</h2>
                <p className='text-gray-600 text-center w-[80%]'>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed. adipisicing elit. Quaerat officia delectus, eum nihil aliquam non.</p>
            </div>
            <div className='w-[100%] grid grid-cols-4 grid-rows-2 grid-flow-row gap-[5em] '>{resultList}</div>
        </section>
        <section className='p-[4rem] flex flex-col justify-center items-center h-[50vh]'>
            <News />
        </section>
        <Foot />
    </article>
  )
}

export default Body1