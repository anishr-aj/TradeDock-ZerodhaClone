import React from 'react'

function Stats() {
    return ( 
        <div className='container p-3'>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                    <h1 className='fs-2 mb-5'>Trust with confidence</h1>
                    <h2 className='fs-4'>Customer-first always</h2>
                    <p className='text-muted'>That's why 1.3+ crore customers trust TradeDock with ₹3.5 lakh crores worth of equlity investments.  </p>
                    <h2 className='fs-4'>No spam or grimmicks</h2>
                    <p className='text-muted'>no grimmicks, spam, "gamification", or annyoing push notifications. High quality apps that you can use at your pace, the way you like.</p>
                    <h2 className='fs-4'>The TradeDock universe</h2>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h2 className='fs-4'>Do better with money</h2>
                    <p className='text-muted'>With initatives like Nudge and Kill switch, we don't just facilitate transactions, but actively help you do better withh your money.</p>
                </div>
                <div className='col-6 p-5'>
                    <img src='media/images/ecosystem.png' style={{width: "90%"}}/>
                    <div className='text-center'>
                        <a href=''className='mx-5' style={{textDecoration:"none"}}>Explore our products <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                        <a  href='' className='' style={{textDecoration:"none"}}>Try Kite demo <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;