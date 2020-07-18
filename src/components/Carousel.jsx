import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import phone from "../components/images/phone.jpg";

 
class Carousel extends React.Component {
    constructor(props){
        super(props);
        this.state={
            currentIndex: 0,
            responsive: { 1024: { items: this.items.length } },
            galleryItems: this.galleryItems(),
        };
    }
    
  items = [
         <div>
      
              <div>
                <img src={phone} alt="" style={{width:'70%', height:'50%'}}/>
              </div>
              <p>Iphone</p>
            </div>,
            <div>
            <div>
              <img src={phone} alt=""  style={{width:'70%', height:'50%'}}/>
            </div>
            <p>One Plus</p>
            </div>,
            <div>
            <div>
              <img src={phone} alt=""  style={{width:'70%', height:'50%'}}/>
            </div>
            <p>Car</p>
            </div>,
            <div>
            <div>
              <img src={phone} alt=""  style={{width:'70%', height:'50%'}}/>
            </div>
            <p>RealMe</p>
            </div>,

            <div>
            <div>
              <img src={phone} alt=""  style={{width:'70%', height:'50%'}}/>
            </div>
            <p>Note 5</p>
            </div>
     ]
 
  state = {
  
  }
 
  slideTo = (i) => this.setState({ currentIndex: i })
 
  onSlideChanged = (e) => this.setState({ currentIndex: e.item })
 
  slideNext = () => this.setState({ currentIndex: this.state.currentIndex + 1 })
 
  slidePrev = () => this.setState({ currentIndex: this.state.currentIndex - 1 })
 
  thumbItem = (item, i) => <span onClick={() => this.slideTo(i)}>* </span>
 
  galleryItems() {
    return this.items.map((i) => <h2 key={i}> {i}</h2>)
  }
 
  render() {
    const { galleryItems, responsive, currentIndex } = this.state
    return (
      <div style={{margin:'50px'}}>
      <div ><h4>Featured Products</h4></div>
      <div style={{padding:'5%',marginTop:'1%',backgroundColor:"#CCCCCC"}}>
        <AliceCarousel
          dotsDisabled={true}
          buttonsDisabled={true}
          autoPlay={true}
          autoPlayInterval={2000}
          items={galleryItems}
          responsive={responsive}
          slideToIndex={currentIndex}
          onSlideChanged={this.onSlideChanged}
        />
        </div>
        </div>
    )
  }
}

export default Carousel;
