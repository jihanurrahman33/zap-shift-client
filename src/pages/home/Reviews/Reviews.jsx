import React, { use } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard/ReviewCard";

const Reviews = ({ reviewsPromise }) => {
  const reviewsData = use(reviewsPromise);

  return (
    <div className="my-24">
      <div className="text-center mb-24">
        <h3 className="text-3xl text-center font-bold my-8">Reviews</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
          fuga deserunt vel animi quisquam libero optio reprehenderit, tenetur
          culpa repellendus quis laboriosam voluptate odio voluptatum dolor.
          Consequatur suscipit quisquam perferendis.
        </p>
      </div>
      <>
        <Swiper
          loop={true}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 30,
            stretch: "50%",
            depth: 200,
            modifier: 1,
            scale: 0.75,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Autoplay, Pagination]}
          className="mySwiper"
        >
          {reviewsData.map((review) => (
            <SwiperSlide key={review.id}>
              <ReviewCard review={review}></ReviewCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
};

export default Reviews;
