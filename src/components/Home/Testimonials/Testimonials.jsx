import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Card from './Card';
import { FaQuoteLeft } from 'react-icons/fa'
import './Testimonials.css'


function Testimonials() {
  const options = {
    loop: true,
    margin: 0,
    nav: false,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      481:{
        items:1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  };
  const Review = (props) => {
    return (
      <>
        <div className='flex px-6 md:px-10 sm:px-0'>
          <div className='sm:hidden'> <img className='rounded-full' src={props.img}></img></div>
          <div className='flex-1 flex'>
            <div className='mx-8 text-yellow-600' ><FaQuoteLeft /></div>
            <div className='sm:pr-6'>
              <p className='text-lg text-left text-gray-400 '>{props.txt}</p>
              <div className='flex justify-start'>
                <strong className='text-gray-500'>{props.auther}</strong>
                <span>-</span>
                <p className='text-gray-400'>{props.desg}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
  return (
    <div>
      <div className="px-10 py-24  md:py-10 md:px-0"  >
        <OwlCarousel
          {...options}
          className='px-28 py-2 md:px-0'
        >
          <div className='flex justify-around'>
            <Review img='https://okab.pixeldima.com/wp-content/uploads/2016/04/avatar.jpg'
              txt={"The banrofitable and competitive industry. To compete in thtive industry. To compete in thtive industry. To compete in thtive industry. To compete in thtive iust understand"}
              auther={"abc"}
              desg={"xyz"}
            ></Review>
          </div>
          <div>
            <Review img='https://okab.pixeldima.com/wp-content/uploads/2016/04/avatar1.jpg'
              txt={"the benefits yourtive industry. To compete in thtive industry. To compete in thtive industry. To compete in th bank offers rather than your bank’s expertise or experience."}
              auther={"def"}
              desg={"zzz"}
            ></Review>

          </div>
          <div>
            <Review img='https://okab.pixeldima.com/wp-content/uploads/2016/04/avatar.jpg'
              txt={"the benefits your bank offers rather than your tive industry. To compete in thtive industry. To compete in thtive industry. To compete in thbank’s expertise or experience."}
              auther={"ghi"}
              desg={"yyy"}
            ></Review>

          </div>
          <div>
            <Review img='https://okab.pixeldima.com/wp-content/uploads/2016/04/avatar1.jpg'
              txt={"the benefits your bank offers rather than your bank’s expertise ortive industry. To compete in thtive industry. To compete in thtive industry. To compete in th experience."}
              auther={"hkl"}
              desg={"mmm"}
            ></Review>
          </div>
        </OwlCarousel>

      </div >
    </div>
  )
}

export default Testimonials