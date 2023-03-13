import "./product-image-slider.scss"
import PropTypes from "prop-types"
import {Swiper, SwiperSlide} from "swiper/react"
import { Navigation, Thumbs } from "swiper"


function ProductImagesSlider (props) {
  return (
    <div>
      <Swiper
      /* colocar para centralizado 
      debaixo do quadro de imagens */
        loop={true}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation,Thumbs]}
        grabCursos={true}
        className="product-images-slider"
      >
        {
          props.images.map ((item,index) => 
            <SwiperSlide hey={index}>
              <img src={item} alt ="Slider Images" />
            </SwiperSlide>
          )
        }
      </Swiper>
      <Swiper
      /* colocar para centralizado 
      debaixo do quadro de imagens */
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        modules={[Navigation,Thumbs]}
        className="product-images-slider-thumbs"
      >
        {
          props.images.map ((item,index) => 
            <SwiperSlide hey={index}>
              <div className="product-images-slider-thumbs-wrapper">
                <img src={item} alt ="Slider Images" />
              </div>
            </SwiperSlide>
          )
        }
      </Swiper>
    </div>
  )
}

ProductImagesSlider.propTypes = {
  images: PropTypes.array.isRequired
}

export default ProductImagesSlider
