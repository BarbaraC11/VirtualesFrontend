<script>
  import { register } from 'swiper/element/bundle';
  export let banners;
  export let onCategoryChange;
 
  //<div class="u-carousel">
  //{#each banners as banner}
  //  <div class="u-item">
  //    <img src={banner.src} alt="" />
  //    <img src="https://d2zzz5z45zl95g.cloudfront.net/casino/images/banner/crash-games-portada.png" alt="" />
  //  </div>
  //{/each}
  //</div>s
  register();
  let mobile = window.innerWidth <= 1023;


  
</script>

<swiper-container class="u-carousel" speed="1500"  autoplay-delay="10000" loop="true">
<!--swiper-container class="u-carousel"  speed="1500" loop="true" resize="true" beforeResize="true"  autoplay-delay="4000" autoplay-disable-on-interaction="false" resizeObserver="true"  effect="fade"-->
  {#each banners as banner}
    <swiper-slide>
      {#if mobile}
        <div class="no-btn" on:click={() => onCategoryChange(banner.category)}>
          <img style="width: 100%;" src={banner.srcmb} alt="" loading="lazy" />
        </div>
        {:else}
        <div class="no-btn" on:click={() => onCategoryChange(banner.category)}>
          <img style="width: 100%;" src={banner.src} alt="" loading="lazy" />
        </div>
      {/if}
    </swiper-slide>
  {/each}
</swiper-container>

<style>
.u-carousel {
    width: 100%;
    position: relative;
    overflow: hidden;
    z-index: 0;
    display: block;
    perspective: inherit;
}
.no-btn{
  margin: 0;
    padding: 0;
    border: none;
    width: 100%;
}

.u-carousel::after{
  content: "";
    position: absolute;
    /* box-shadow: 0px 40px 90px 120px #282828; */
    height: 0;
    width: 100%;
    bottom: 62px;
    z-index: 1;
}

button{
  cursor: pointer;
}

ul.slides {
    display: block;
    position: relative;
    height: 30vw;
    margin: 0;
    padding: 0;
    overflow: hidden;
    list-style: none;
}

.slides * {
    user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -webkit-touch-callout: none;
}

ul.slides input {
    display: none; 
}


.slide-container { 
    display: block; 
}

.slide-image {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    opacity: 0;
    transition: all .7s ease-in-out;
}   

.slide-image img {
    width: auto;
    min-width: 100%;
    height: 100%;
}

.carousel-controls {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    font-size: 100px;
    line-height: 26vw;
    color: #efc624 ;
    z-index: 2;
}

.carousel-controls label {
    display: none;
    position: absolute;
    padding: 0 20px;
    opacity: 0;
    transition: opacity .2s;
    cursor: pointer;

}

.slide-image:hover + .carousel-controls label{
    opacity: 0.5;
}

.carousel-controls label:hover {
    opacity: 1;
}

.carousel-controls .prev-slide {
    width: 49%;
    text-align: left;
    left: 0;
}

.carousel-controls .next-slide {
    width: 49%;
    text-align: right;
    right: 0;
}

.carousel-dots {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    text-align: center;
}

.carousel-dots .carousel-dot {
    display: inline-block;
    width:  1.5vw;
    height: 1.5vw;
    border-radius: 50%;
    background-color: #efc624;
    opacity: 0.5;
    margin: 10px;
}

input:checked + .slide-container .slide-image {
    opacity: 1;
    transform: scale(1);
    transition: opacity 1s ease-in-out;
}

input:checked + .slide-container .carousel-controls label {
     display: block; 
}

input#img-1:checked ~ .carousel-dots label#img-dot-1,
input#img-2:checked ~ .carousel-dots label#img-dot-2,
input#img-3:checked ~ .carousel-dots label#img-dot-3,
input#img-4:checked ~ .carousel-dots label#img-dot-4,
input#img-5:checked ~ .carousel-dots label#img-dot-5,
input#img-6:checked ~ .carousel-dots label#img-dot-6 {
	opacity: 1;
}


input:checked + .slide-container .nav label { display: block; }
  @media only screen and (max-width: 1022px) {
  
    .u-carousel {
      margin-bottom: -35vw;
      padding: 0;
    }
    .u-item img {
      width: 100%;
      border-radius: 2px;
    }
    .carousel-dots .carousel-dot {
    width:  2.5vw;
    height: 2.5vw;
}
.u-carousel {
     
     padding: 0;
   }
   .u-carousel::after{
     box-shadow: 0 70px 40px 50px #2a1639;
   }
  }

  @media only screen and (min-width: 1024px) {
    .u-carousel {
      /* margin-bottom: -27vw; */
       /*margin: 0;*/
      padding: 0;
    }
    .u-item img {
      width: 100%;
    }
  }
  /* . */
</style>
