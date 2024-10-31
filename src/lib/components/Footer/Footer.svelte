<script>
   import Configuration from "../../../config";
   export let onCategoryChange;

   const conf = Configuration.getConfiguration();
</script>


   
 
  
<div class="u-wrapp-footer"> 
  <div class="in-d payments">
    <b><span>Nuestras pasarelas</span></b>
    <img class="img flow" src="{conf.ASSETS}/{conf.platform}/Flow.png" alt="" />
    <img class="img khipu" src="{conf.ASSETS}/{conf.platform}/Khipu.png" alt="" />
  </div>
  <div class="data-footer">
    <div class="terms-footer">
      <div class="info-footer">
        <b>Sobre Nosotros</b>
        <a href="{conf.ASSETS}/{conf.platform}/t&c.pdf" target="_blank">Términos y condiciones</a>
        <a href="{conf.ASSETS}/{conf.platform}/Gamesr.pdf" target="_blank">Juego Responsable</a>
        <a href="{conf.ASSETS}/{conf.platform}/AML.pdf" target="_blank">Procedimiento de AML</a>
      </div>
      <div class="info-footer">
        <b>Nuestras secciones</b>
        <p on:click={  ()=>onCategoryChange("home") } >Inicio</p>
        <p on:click={  ()=>onCategoryChange("sportbook") } >Deportes</p>
        <p on:click={  ()=>onCategoryChange("sportbooklive") } >Deportes en vivo</p>
        <p on:click={  ()=>onCategoryChange("horses") } >Hipicas</p>
        <p on:click={  ()=>onCategoryChange("slot") } >Casino</p>
        <p on:click={  ()=>onCategoryChange("slotlive") } >Casino en vivo</p>
        <p on:click={  ()=>onCategoryChange("crash") } >Crash games</p>
        <p on:click={  ()=>onCategoryChange("scratch") } >Raspaditas</p>
        <p on:click={  ()=>onCategoryChange("virtual") } >Juego virtuales</p>
        <p on:click={  ()=>onCategoryChange("providers") } >Proveedores</p>
      </div>
 
      <div class="info-footer">
        <b>Ayuda</b>
        <a  href="{conf.ASSETS}/{conf.platform}/questions.pdf" target="_blank">Preguntas frecuentes</a>
      </div>
      <div class="info-footer">
        <b>Contáctenos</b>
        <a href="mailto:#">info@coliseosport.com</a>
      </div>
      <!--div class="info-footer dww">
        <p>Para registrarse en este sitio web, el usuario debe aceptar los General Terms and Conditions. En caso de que se actualicen los Términos y Condiciones Generales, los usuarios existentes podrán optar por dejar de utilizar los productos y servicios antes de que dicha actualización entre en vigor, que es un mínimo de dos semanas después de su anuncio.</p>
      </div-->
    </div>
    <div class="in-mobile-IMG">
      <img class="img flow" src="{conf.ASSETS}/LaJoya/Flow.png" alt="" />
      <img class="img khipu" src="{conf.ASSETS}/LaJoya/Khipu.png" alt="" />
    </div>
    <div class="img-footer">
      <img class="img" src="{conf.ASSETS}/LaJoya/powerdBySoft.png" alt="" />
      <img class="img" src="{conf.ASSETS}/LaJoya/%2B18Games.png" alt="" />
    </div>
    <span class="in-mobile">Las apuestas en menores de edad se considera una ofensa.</span>
  </div>
  <div class="acot-footer">
    <div class="acot-span">
      <span>Coliseo Sport está sujeto a los términos y condiciones de este sitio web. Todos los derechos reservados.</span>
      <span>© 2024 Coliseo Sport</span>
    </div>
    <div class="img-social">
      <p>Siguenos en:</p>
        <a href="https://www.facebook.com/coliseosportoficial?mibextid=ZbWKwL" target="_blank">
          <svg class="img fb" width="48" height="48" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_10_60)">
            <path d="M20.5 10.0866C20.4997 8.17558 19.9518 6.3047 18.9213 4.6954C17.8908 3.0861 16.4207 1.80579 14.6851 1.00602C12.9495 0.206253 11.0211 -0.079469 9.12821 0.182678C7.23529 0.444825 5.45712 1.24386 4.00421 2.4852C2.5513 3.72653 1.48449 5.35818 0.930087 7.18698C0.375679 9.01577 0.356887 10.9651 0.875935 12.8043C1.39498 14.6434 2.43014 16.2953 3.85884 17.5644C5.28755 18.8336 7.04999 19.6667 8.9375 19.9653V12.9772H6.39875V10.0866H8.9375V7.88344C8.9375 5.37719 10.4306 3.99282 12.7144 3.99282C13.4644 4.00322 14.2126 4.06839 14.9531 4.18782V6.64907H13.6919C13.4769 6.62052 13.2584 6.64071 13.0523 6.70813C12.8462 6.77555 12.658 6.88847 12.5015 7.03854C12.345 7.1886 12.2243 7.37196 12.1483 7.57502C12.0723 7.77808 12.043 7.99563 12.0625 8.21157V10.0866H14.8363L14.3925 12.9772H12.0625V19.9653C14.4149 19.5932 16.5572 18.3937 18.104 16.5827C19.6507 14.7718 20.5004 12.4682 20.5 10.0866Z" fill="white" fill-opacity="0.56"/>
            </g>
            <defs>
            <clipPath id="clip0_10_60">
            <rect width="20" height="20" fill="white" transform="translate(0.5 0.0859375)"/>
            </clipPath>
            </defs>
            </svg>
            
        </a>
      <a href="https://www.instagram.com/coliseosportoficial?igsh=MTNrbTVoM3l2cGk5NQ==" target="_blank">
        <svg class="img ig" width="48" height="48" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_10_62)">
          <path d="M10.5 2.39844C13 2.39844 13.3 2.40781 14.2881 2.45281C14.8828 2.45983 15.4718 2.56913 16.0294 2.77594C16.4364 2.92621 16.8046 3.16583 17.1069 3.47719C17.4182 3.77942 17.6579 4.14762 17.8081 4.55469C18.0149 5.11227 18.1242 5.70128 18.1313 6.29594C18.1763 7.28594 18.1875 7.58594 18.1875 10.0859C18.1875 12.5859 18.1781 12.8859 18.1331 13.8741C18.1261 14.4687 18.0168 15.0577 17.81 15.6153C17.6539 16.0194 17.4151 16.3865 17.1087 16.6928C16.8024 16.9991 16.4354 17.238 16.0313 17.3941C15.4737 17.6009 14.8847 17.7102 14.29 17.7172C13.3019 17.7622 13.005 17.7716 10.5019 17.7716C7.99875 17.7716 7.70188 17.7622 6.71375 17.7172C6.11909 17.7102 5.53008 17.6009 4.9725 17.3941C4.56543 17.2438 4.19723 17.0042 3.895 16.6928C3.58365 16.3906 3.34402 16.0224 3.19375 15.6153C2.98695 15.0577 2.87764 14.4687 2.87063 13.8741C2.82375 12.8859 2.8125 12.5891 2.8125 10.0859C2.8125 7.58281 2.82188 7.28594 2.86688 6.29781C2.87389 5.70316 2.9832 5.11414 3.19 4.55656C3.34082 4.14932 3.58109 3.78111 3.89313 3.47906C4.19536 3.16771 4.56356 2.92808 4.97063 2.77781C5.52821 2.57101 6.11722 2.46171 6.71188 2.45469C7.7 2.40969 8 2.39844 10.5 2.39844ZM10.5 0.710938C7.95375 0.710938 7.63438 0.721563 6.635 0.767188C5.85701 0.78367 5.08741 0.931589 4.35875 1.20469C3.7336 1.43997 3.16716 1.8085 2.69875 2.28469C2.22188 2.75291 1.8527 3.31937 1.61688 3.94469C1.34378 4.67335 1.19586 5.44295 1.17938 6.22094C1.13563 7.22031 1.125 7.53969 1.125 10.0859C1.125 12.6322 1.13563 12.9516 1.18125 13.9509C1.19773 14.7289 1.34565 15.4985 1.61875 16.2272C1.85458 16.8525 2.22376 17.419 2.70063 17.8872C3.16885 18.3641 3.73531 18.7332 4.36063 18.9691C5.08929 19.2422 5.85889 19.3901 6.63688 19.4066C7.63688 19.4522 7.95563 19.4628 10.5019 19.4628C13.0481 19.4628 13.3675 19.4522 14.3669 19.4066C15.1449 19.3901 15.9145 19.2422 16.6431 18.9691C17.2657 18.7278 17.831 18.3593 18.3031 17.8872C18.7752 17.4151 19.1437 16.8497 19.385 16.2272C19.6581 15.4985 19.806 14.7289 19.8225 13.9509C19.8681 12.9509 19.8788 12.6322 19.8788 10.0859C19.8788 7.53969 19.8681 7.22031 19.8225 6.22094C19.806 5.44295 19.6581 4.67335 19.385 3.94469C19.1492 3.31937 18.78 2.75291 18.3031 2.28469C17.8349 1.80782 17.2684 1.43864 16.6431 1.20281C15.9145 0.929714 15.1449 0.781795 14.3669 0.765313C13.3656 0.721563 13.0463 0.710938 10.5 0.710938Z" fill="white" fill-opacity="0.56"/>
          <path d="M10.5 5.27344C9.54818 5.27344 8.61773 5.55569 7.82632 6.08449C7.03491 6.61329 6.41808 7.3649 6.05383 8.24427C5.68959 9.12364 5.59428 10.0913 5.77997 11.0248C5.96566 11.9583 6.42401 12.8158 7.09705 13.4889C7.77009 14.1619 8.6276 14.6203 9.56113 14.806C10.4947 14.9917 11.4623 14.8964 12.3417 14.5321C13.221 14.1679 13.9726 13.551 14.5014 12.7596C15.0303 11.9682 15.3125 11.0378 15.3125 10.0859C15.3125 8.80958 14.8055 7.5855 13.903 6.68299C13.0004 5.78047 11.7764 5.27344 10.5 5.27344ZM10.5 13.2109C9.88194 13.2109 9.27775 13.0277 8.76384 12.6843C8.24994 12.3409 7.8494 11.8528 7.61288 11.2818C7.37635 10.7108 7.31447 10.0825 7.43505 9.47628C7.55563 8.87009 7.85325 8.31327 8.29029 7.87623C8.72733 7.43919 9.28415 7.14156 9.89034 7.02098C10.4965 6.9004 11.1249 6.96229 11.6959 7.19881C12.2669 7.43534 12.755 7.83588 13.0983 8.34978C13.4417 8.86368 13.625 9.46787 13.625 10.0859C13.625 10.9147 13.2958 11.7096 12.7097 12.2956C12.1237 12.8817 11.3288 13.2109 10.5 13.2109Z" fill="white" fill-opacity="0.56"/>
          <path d="M15.5044 6.20654C16.1257 6.20654 16.6294 5.70286 16.6294 5.08154C16.6294 4.46022 16.1257 3.95654 15.5044 3.95654C14.883 3.95654 14.3794 4.46022 14.3794 5.08154C14.3794 5.70286 14.883 6.20654 15.5044 6.20654Z" fill="white" fill-opacity="0.56"/>
          </g>
          <defs>
          <clipPath id="clip0_10_62">
          <rect width="20" height="20" fill="white" transform="translate(0.5 0.0859375)"/>
          </clipPath>
          </defs>
          </svg>
          
      </a>
    </div>
  </div>
</div>

<style>

  .img-social svg{
    width: 3rem;
  }
  .info-footer.dww{
    width: 22rem;
  }
  .img.fb:hover{
    filter: invert(32%) sepia(98%) saturate(347%) hue-rotate(180deg) brightness(87%) contrast(91%);
    transform: scale(1.2);
  }
  .img.ig:hover{
    filter: invert(14%) sepia(96%) saturate(4478%) hue-rotate(229deg) brightness(81%) contrast(106%);
    transform: scale(1.2);
  }
  .u-wrapp-footer{
	  font-size: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #20252C;
    position: relative;
  }
  .info-footer{
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.5rem;
  }
  .info-footer p{
    cursor: pointer;
    color: #a3a1a1  ;
   
  }
  .payments{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    background-color: #26282c;
    width: 100%;
    height: 10rem;
    padding: 0.8rem;
    padding-left: 7rem;
    font-size: 1.2rem;
  }
  .img-social{
    display: flex;
    gap: 20px;
    align-items: center;
  }
  .data-footer a, span{
    color: #a3a1a1;
    opacity: 10;
  }
  
 b,a{
  color: white;
  text-decoration: none
 }
@media only screen and (max-width: 1024px) {
  .terms-footer{
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .in-d{
  display: none;
  }
  .data-footer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    width: 89%;
    gap: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid white;
  }
  .img-footer, .in-mobile-IMG{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 80%;
  }
  
  .img{
    width: 120px;
  }
  .acot-footer{
    display: flex;
    flex-direction: column-reverse;
    text-align: center;
    width: 89%;
    padding-top: 1rem;
    gap: 0.8rem;
    padding-bottom: 6rem;
  }
  .img-social{
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 48px;
  }
  .img-social img{
    width: 40px;
  }
}
@media only screen and (min-width: 1025px) {
  .in-mobile, .in-mobile-IMG{
    display: none;
  }
  .data-footer{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 89%;
    padding: 1rem;
    border-bottom: 1px solid white;

  }
  .terms-footer{
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
  }
  .img-footer{
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .acot-footer{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 89%;
    padding: 1rem;
  }
  .acot-span{
    display: flex;
    flex-direction: column;
    justify-content: start;
  }
}
.img.flow{
    background: #000;
    border-radius: 10px;
  }
  .img.khipu{
    background: #fff;
    border-radius: 10px;
  }
</style>