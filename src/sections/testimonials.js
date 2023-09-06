import React from 'react';
import { Box } from 'theme-ui';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import BlockTitle from 'components/block-title';
import TestimonialsCard from 'components/cards/testimonial-card';
import testimonialsImage1 from 'assets/testimonial-1-1.png';
import testimonialsImage2 from 'assets/testimonial-1-2.png';
import testimonialsImage3 from 'assets/testimonial-1-3.png';
import testimonialsImage4 from 'assets/testimonial-1-4.png';
import testimonialsImage5 from 'assets/testimonial-1-5.png';
import testimonialsImage6 from 'assets/testimonial-1-6.png';

SwiperCore.use([Autoplay]);

const TESTIMONIALS_DATA = [
  [
    {
      image: testimonialsImage1,
      text: "As a hardcore programming student, I had previously limited the application of programming to technical fields such as software engineering and machine learning. In MEGA's interdisciplinary lectures, I'm excited to get new facts. Now, I have a better understanding of the new possibilities of programming in the cultural industry, and understand that through digital language, programming can spark new sparks in digital art, game design, digital cultural heritage protection and other fields. I have a further understanding of the application value of my major.",
      username: '@hello.mimmie',
      name: 'Sunette P',
    },
    {
      image: testimonialsImage2,
      text: "Social science is often described as an 'island discipline,' and I used to be anxious about getting a job. Although I have always been passionate about psychology and its theories, I have always felt limited by its traditional application. At MEGA's big game sharing session, the experience of industry seniors changed my previous view on psychological applications. Now, I prefer to combine my knowledge with the individual community. Provide a tailored framework of psychological resources for each marginalized group",
      username: '@merryn.manley',
      name: 'Jeff Z',
    },
  ],
  [
    {
      image: testimonialsImage3,
      text: "I fully enjoyed teaming up with people from diverse cultural, ethnic, and national backgrounds. Through having cross-cultural conversations, I was able to construct a new view on some universal subjects that I thought I understood before — like poverty, climate action, and gender equality. It was interesting to consider the perspectives and philosophies to these issues on a global scale."        ,
      username: '@hi.veona',
      name: 'Sally W',
    },
    {
      image: testimonialsImage4,
      text:
       "Honestly just amazing work at MEGA Hack 2022, had a blast!",
      username: '@hey.nku',
      name: 'Sunae L',
    },
  ],
  [
    {
      image: testimonialsImage5,
      text:
        "Really helpful staff at the hackathons during 2023. Never felt I was alone",
      username: '@cherice.me',
      name: 'Larry J',
    },
    {
      image: testimonialsImage6,
      text:
        'For our recent trip to S.A. I booked several accommodation thru SA Places. I just wanted to tell you that everything worked out perfectly with all the bookings and also your booking was very quick and professional. I hope I have the opportunity to re-visit South Africa soon, I will then make my bookings with your company again. I will also recommend',
      username: '@myself.thais',
      name: 'Oscar K',
    },
  ],
  [
    {
      image: testimonialsImage1,
      text:
        'I would like to take this oppertunity to thank SA Places for the great service rendered to us and in particular Estelle. You got me the best place ever in just a few moments after I spoke to you.',
      username: '@hello.mimmie',
      name: 'Otum U',
    },
    {
      image: testimonialsImage2,
      text:
        'Many thanks for you kind and efficient service. I have already and will definitely continue to recommend your services to others in the future.',
      username: '@merryn.manley',
      name: 'Marry P',
    },
  ],
  [
    {
      image: testimonialsImage3,
      text:
        'I would just like to compliment Estelle Pestana. She has been most professional and gone to great lengths to assist me. Her patience with me as I continuously changed my plans is to be commended. Her service re-affirms why I always choose to book through an agency instead of directly. Thank you',
      username: '@hi.veona',
      name: 'Wendy S',
    },
    {
      image: testimonialsImage4,
      text:
        'I have seldom experienced such an efficient help and support like from you! Thank you so much. We will do all the bookings during the next few days and I will revert to you with the end result',
      username: '@hey.nku',
      name: 'Liuliu C',
    },
  ],
  [
    {
      image: testimonialsImage5,
      text:
        'Thank you for all your help. Your service was excellent and very FAST.',
      username: '@cherice.me',
      name: 'Sam C',
    },
    {
      image: testimonialsImage6,
      text:
        'For our recent trip to S.A. I booked several accommodation thru SA Places. I just wanted to tell you that everything worked out perfectly with all the bookings and also your booking was very quick and professional. I hope I have the opportunity to re-visit South Africa soon, I will then make my bookings with your company again. I will also recommend',
      username: '@myself.thais',
      name: 'Cheng H',
    },
  ],
];

const Testimonials = () => {
  const testimonialCarousel = {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 1000,
    centeredSlides: true,
    autoHeight: true,
    autoplay: {
      waitForTransition: false,
      delay: 4000,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  };
  return (
    <Box as="section" id="testimonials" sx={styles.testimonials}>
      <BlockTitle
        title="Testimonials"
        text="Customer Feedback To MEGA Events"
      />
      <Swiper {...testimonialCarousel}>
        {TESTIMONIALS_DATA.map((item, index) => (
          <SwiperSlide key={index}>
            {item.map(({ image, text, name, username }, _index) => (
              <TestimonialsCard
                image={image}
                text={text}
                name={name}
                key={_index}
                username={username}
              />
            ))}
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Testimonials;

const styles = {
  testimonials: {
    backgroundColor: '#F4F4F6',
    pt: ['80px', null, null, null, '80px', null, '100px'],
    pb: ['60px', null, null, null, '80px', null, '120px'],
  },
};
