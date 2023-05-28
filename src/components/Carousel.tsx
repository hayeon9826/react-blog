import { useState } from "react";

export default function Carousel() {
  const [activeImage, setActiveImage] = useState(1);

  return (
    <div>
      <div className="Carousel">
        <ul className="Carousel__slides">
          <input type="radio" name="radio-buttons" id="img-1" checked={activeImage === 1} />
          <li className="Carousel__slide-container">
            <div className="Carousel__slide-img">
              <img
                alt="scenery 1"
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              />
            </div>
            <div className="Carousel__controls">
              <label onClick={() => setActiveImage(3)} className="Carousel__slide-prev">
                <span>&lsaquo;</span>
              </label>
              <label onClick={() => setActiveImage(2)} className="Carousel__slide-next">
                <span>&rsaquo;</span>
              </label>
            </div>
          </li>
          <input type="radio" name="radio-buttons" id="img-2" checked={activeImage === 2} />
          <li className="Carousel__slide-container">
            <div className="Carousel__slide-img">
              <img
                alt="scenery 2"
                src="https://images.unsplash.com/photo-1606117331085-5760e3b58520?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              />
            </div>
            <div className="Carousel__controls">
              <label onClick={() => setActiveImage(1)} className="Carousel__slide-prev">
                <span>&lsaquo;</span>
              </label>
              <label onClick={() => setActiveImage(3)} className="Carousel__slide-next">
                <span>&rsaquo;</span>
              </label>
            </div>
          </li>
          <input type="radio" name="radio-buttons" id="img-3" checked={activeImage === 3} />
          <li className="Carousel__slide-container">
            <div className="Carousel__slide-img">
              <img
                alt="scenery 3"
                src="https://images.unsplash.com/photo-1667971286579-63a5222780ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
              />
            </div>
            <div className="Carousel__controls">
              <label onClick={() => setActiveImage(2)} className="Carousel__slide-prev">
                <span>&lsaquo;</span>
              </label>
              <label onClick={() => setActiveImage(1)} className="Carousel__slide-next">
                <span>&rsaquo;</span>
              </label>
            </div>
          </li>
          <div className="Carousel__dots">
            <label onClick={() => setActiveImage(1)} className="Carousel__dot" id="img-dot-1"></label>
            <label onClick={() => setActiveImage(2)} className="Carousel__dot" id="img-dot-2"></label>
            <label onClick={() => setActiveImage(3)} className="Carousel__dot" id="img-dot-3"></label>
          </div>
        </ul>
      </div>
    </div>
  );
}
