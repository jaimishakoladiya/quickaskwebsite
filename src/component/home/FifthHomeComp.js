import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import img1 from '../images/femaleface.png';
import img3 from '../images/user1.png';
import img2 from '../images/maleface.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './home.css'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
function FifthHomeComp() {
 AOS.init({
    offset: 300,
    duration: 800,

  });
    return (
        <>
            <h1 className="home-comment-name">What Are They Saying About Us....</h1>
            <Swiper id="fifthhomecomp" 

                spaceBetween={50}
                slidesPerView={2}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
                on
                onSwiper={(swiper) => console.log(swiper)}
            >

                <SwiperSlide>
                    <div class="home-team" data-aos="fade-up">
                        <div class="home-members">
                            <div class="img">
                                <img src={img1} alt="members_img" />
                            </div>
                            <p className="home-comment-title">
                                QuickAsk has made the hiring process easy!  Being able to streamline the interview process has been a game-changer for me.
                                I love the ability to view multiple candidates in one single
                                grid and compare the answers.  It is a huge time saver.  Great job you guys.
    </p>    <h3>Caris Gonzalez</h3>
                            <p class="role">BRANCH MANAGER ,GOLDEN EMPIRE MORTGAGE</p>
                        </div>
                    </div>
                </SwiperSlide><SwiperSlide>
                    <div className="home-team" data-aos="fade-up">
                        <div class="home-members">
                            <div class="img">
                                <img src={img2} alt="members_img" />
                            </div>

                            <p className="home-comment-title">
                                "As a tool, QuickAsk gives me the exact solution to my problem.
                                I don't care to learn a complicated ATS/HR system,
                                I just want to have the ability to screen my candidates quickly and effectively.  QuickAsk provides me with the
                                ability to do just that, and can serve as a valuable complement to whatever ATS/HR system you have in place"
  </p>
                            <h3>Bredan Nicholas</h3>
                            <p class="role">RECRUITER ABLEFORCE</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="home-team" data-aos="fade-up">
                        <div class="home-members">
                            <div class="img">
                                <img src={img1} alt="members_img" />
                            </div>
                            <p className="home-comment-title">
                                QuickAsk has made the hiring process easy!  Being able to streamline the interview process has been a game-changer for me.
                                I love the ability to view multiple candidates in one single
                                grid and compare the answers.  It is a huge time saver.  Great job you guys.
    </p>    <h3>Caris Gonzalez</h3>
                            <p class="role">BRANCH MANAGER ,GOLDEN EMPIRE MORTGAGE</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide><div className="home-team" data-aos="fade-up">
                    <div class="home-members">
                        <div class="img">
                            <img src={img2} alt="members_img" />
                        </div>

                        <p className="home-comment-title">
                            "As a tool, QuickAsk gives me the exact solution to my problem.
                            I don't care to learn a complicated ATS/HR system,
                            I just want to have the ability to screen my candidates quickly and effectively.  QuickAsk provides me with the
                            ability to do just that, and can serve as a valuable complement to whatever ATS/HR system you have in place"
  </p>
                        <h3>Bredan Nicholas</h3>
                        <p class="role">RECRUITER ABLEFORCE</p>
                    </div>
                </div></SwiperSlide>
...
</Swiper>
        </>

    )
}

export default FifthHomeComp;
