import { EffectCards,Autoplay  } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import imageData from '../Json/data.json'
import 'swiper/swiper-bundle.css';

function Swipers() {
    return (
        <div id='roote'>
            <h1>Image Carousel</h1>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                effect={'cards'}
                grabCursor={true}
                autoplay={{ delay: 3000 ,  disableOnInteraction: false}} 
                modules={[EffectCards, Autoplay]}
            >
                {imageData.map((image, id) => <><SwiperSlide key={id}>
                    <img src={image.imagePath} alt={`Slide ${id}`}/>
                </SwiperSlide>
                </>)}
            </Swiper>
        </div>
    )
}

export default Swipers