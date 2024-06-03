import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

export function Banner() {
  return (
    <div className="max-w-7xl mx-auto animate__animated animate__fadeInUp">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="h-full lg:h-[650px] w-full rounded-xl"
            src="https://i.ibb.co/Lp8krZh/photo-1547082688-9077fe60b8f9.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-full lg:h-[650px] w-full rounded-xl"
            src="https://i.ibb.co/hFVcJrw/photo-1557660559-42497f78035b.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-full lg:h-[650px] w-full rounded-xl"
            src="https://i.ibb.co/JBKRW9s/photo-1590874023110-f82d4c63b599.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-full lg:h-[650px] w-full rounded-xl"
            src="https://i.ibb.co/KxBnFvN/premium-photo-1681152790480-07392bfe9b62.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-full lg:h-[650px] w-full rounded-xl"
            src="https://i.ibb.co/YL0QRxM/photo-1618477462041-2b6b1920e073.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
