import React from 'react'

function Foot() {
  return (
    <section className='flex justify-between place-content-center p-[3em]'>
        <ul className='flex flex-col roboto justify-between  w-[20%]'>
            <div className='flex flex-col gap-[0.5em]'>
                <h2 className='text-2xl poppins mb-[1em] font-bold'>About the company</h2>
                <li><p>Learn to love and growth and change and you will be a sucess. Microsoft patch</p></li>
            </div>
            <div className='flex  gap-[1em]'>
                <i className='fa-brands text-2xl hover:scale-125 duration-[0.5s] fa-facebook text-blue-500'></i>
                <i className='fa-brands text-2xl hover:scale-125 duration-[0.5s] fa-youtube text-red-600'></i>
                <i className='fa-brands text-2xl hover:scale-125 duration-[0.5s] fa-linkedin text-blue-500'></i>
                <i className='fa-brands text-2xl hover:scale-125 duration-[0.5s] fa-instagram text-pink-600'></i>
            </div>
        </ul>
        <ul className='flex flex-col roboto gap-[0.5em]'>
            <h2 className='font-bold poppins mb-[1em] text-2xl'>Product</h2>
            <li><a href="">CSR activities</a></li>
            <li><a href="">Green Banking</a></li>
            <li><a href="">News</a></li>
            <li><a href="">Ongoing Campaign</a></li>
            <li><a href="">Updates</a></li>
        </ul>
        <ul className='flex flex-col roboto gap-[0.5em]'>
            <h2 className='font-bold poppins mb-[1em] text-2xl'>Get started</h2>
            <li><a href=""></a>Carrer</li>
            <li><a href="">Contact Us</a></li>
            <li><a href="">Government Securities</a></li>
            <li><a href="">Examples</a></li>
            <li><a href="">NIS</a></li>
        </ul>
        <ul className='flex flex-col roboto gap-[0.5em]'>
            <h2 className='font-bold poppins mb-[1em] text-2xl'>About</h2>
            <li><a href="">IPDC at a glance</a></li>
            <li><a href="">Mission, vision & Values</a></li>
            <li><a href="">Corporate Governance</a></li>
            <li><a href="">Shareholders</a></li>
            <li><a href="">Investor Relations</a></li>
        </ul>
        <ul className=''>
            <a href=""  className='poppins font-bold flex gap-[0.5em] justify-center items-center'><i className='fa-solid fa-phone text-pink-600 pl-[1em]'></i>16519</a>
        </ul>
    </section>
  )
}

export default Foot