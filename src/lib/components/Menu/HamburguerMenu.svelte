<script>
  import { onMount } from "svelte";
 import Configuration from "../../../config";

 export let onCategoryChange;
 export let active_view;
 export let onOpenLogin;
 export let userState;
 export let onShowEstadisticnModal;
 export let onOpenPromotions;
 let activeContent = false;

 const onActiveContent = () => {
   activeContent = !activeContent;
   console.log("xxx", activeContent);
 };

 const onPageChange = (page) => {
   console.log("userState",userState);
  if (page != "estadistics") {
   activeContent = false;
  }
  if (page == "estadistics" && userState == "logout") {
    onOpenLogin();
    return;
  }
  if (page == "estadistics") {
    onShowEstadisticnModal();
    return;
  }

   onCategoryChange(page)
 }

 const conf = Configuration.getConfiguration();

 // Event listener for clicks outside the menu
 const handleDocumentClick = (event) => {
   if (!event.target.closest(".u-hamburger-menu")) {
     activeContent = false;
   }
 };

 // Event listener for scroll events
 const handleScroll = () => {
   activeContent = false;
 };

 // Add event listeners when the component is mounted
 onMount(() => {
   document.addEventListener("click", handleDocumentClick);
   window.addEventListener("scroll", handleScroll);

   // Cleanup event listeners when the component is destroyed
   return () => {
     document.removeEventListener("click", handleDocumentClick);
     window.removeEventListener("scroll", handleScroll);
   };
 });


</script>

<div>
 <nav class="u-hamburger-menu">
   <!--input type="checkbox" id="menu" /-->
   <!-- svelte-ignore a11y-click-events-have-key-events -->
  
   <div class="Ganawin">
    <button class="btn header__menu {activeContent?'is-open':''}" on:click={onActiveContent}>
    <img class ="des mobi" src="https://assetsapiusoft.s3.us-west-2.amazonaws.com/BetsAmerica/icon/Menu.png" alt="">
    </button>
   </div>
   {#if activeContent}
   <div class="u-menu-content">

     <!-- <div class="u-sub-content">
      <button class="u-menubar-button aviator"  on:click={ ()=> onPageChange("crash_Aviator") }>
       <div class="u-menubar-icon">  <img width="30" src="https://images.virtualsoft.tech/m/msjT1695306094.gif" alt=""></div>
       Aviator 
      </button>
    </div>

    <div class="u-sub-content">
      <button class="u-menubar-button studio"  on:click={ ()=> onPageChange("slotlive_Football Studio") }>
       <div class="u-menubar-icon">  <img width="30" src="https://images.virtualsoft.tech/m/msj0212T1705529369.gif" alt=""></div>
       Football Studio 
      </button>
    </div> -->
     <!-- <div class="u-sub-content svelte-130smzy" on:click={onOpenPromotions}>
       <button class="u-menubar-button svelte-130smzy">
         <svg width="1.5rem" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M32 271.692v192c0 17.664 14.368 32 32 32h160v-224H32zM480 143.692H378.752c7.264-4.96 13.504-9.888 17.856-14.304 25.824-25.952 25.824-68.192 0-94.144-25.088-25.28-68.8-25.216-93.856 0-13.888 13.92-50.688 70.592-45.6 108.448h-2.304c5.056-37.856-31.744-94.528-45.6-108.448-25.088-25.216-68.8-25.216-93.856 0-25.792 25.952-25.792 68.192-.032 94.144 4.384 4.416 10.624 9.344 17.888 14.304H32c-17.632 0-32 14.368-32 32v48c0 8.832 7.168 16 16 16h208v-64h64v64h208c8.832 0 16-7.168 16-16v-48c0-17.632-14.336-32-32-32zm-257.888-1.056s-1.344 1.056-5.92 1.056c-22.112 0-64.32-22.976-78.112-36.864-13.408-13.504-13.408-35.52 0-49.024 6.496-6.528 15.104-10.112 24.256-10.112 9.12 0 17.728 3.584 24.224 10.112 21.568 21.696 43.008 77.12 35.552 84.832zm73.664 1.056c-4.544 0-5.888-1.024-5.888-1.056-7.456-7.712 13.984-63.136 35.552-84.832 12.896-13.024 35.456-13.088 48.48 0 13.44 13.504 13.44 35.52 0 49.024-13.792 13.888-56 36.864-78.144 36.864zM288 271.692v224h160c17.664 0 32-14.336 32-32v-192H288z"></path></svg>
         Promociones</button>
      </div> -->
      
      <div class="u-sub-content">
        <button class="u-menubar-button {active_view=='sportbook'?'u-category-select':''}" on:click={ ()=> onPageChange("sportbook") }>
          <img class="u-menubar-icon" src="{conf.ASSETS}/golden/Sportbook.svg" alt="" />
          Deportes
        </button>
      </div>
     <div class="u-sub-content">
       <button class="u-menubar-button {active_view=='horses'?'u-category-select':''}" on:click={ ()=> onPageChange("horses") }>
         <img class="u-menubar-icon" src="{conf.ASSETS}/golden/Hipica.svg" alt="" />
         Hípica
       </button>
     </div>
     <!--div class="u-sub-content">
       <button class="u-menubar-button {active_view=='esports'?'u-category-select':''}"  on:click={ ()=> onPageChange("esports") }>
         <img class="u-menubar-icon" src="{conf.ASSETS}/golden/Esports.svg" alt="" />
         E-Sports
       </button>
     </div-->
     <div class="u-sub-content">
       <button class="u-menubar-button {active_view=='slot'?'u-category-select':''}" on:click={ ()=> onPageChange("slot") }>
         <img class="u-menubar-icon" src="{conf.ASSETS}/golden/Slots.svg" alt="" />
         Casino
       </button>
     </div>
     <div class="u-sub-content">
       <button class="u-menubar-button {active_view=='slotlive'?'u-category-select':''}" on:click={ ()=> onPageChange("slotlive") }>
         <img class="u-menubar-icon" src="{conf.ASSETS}/golden/Casino.svg" alt="" />
         Casino en Vivo
       </button>
     </div>



     <div class="u-sub-content">
       <button class="u-menubar-button {active_view=='crash'?'u-category-select':''}" on:click={ ()=> onPageChange("crash") }>
         <img class="u-menubar-icon" src="{conf.ASSETS}/golden/CrashGames.svg" alt="" />
         Crash Games
       </button>
     </div>
     <div class="u-sub-content">
       <button class="u-menubar-button {active_view=='scratch'?'u-category-select':''}"  on:click={ ()=> onPageChange("scratch") }>
         <img class="u-menubar-icon" src="{conf.ASSETS}/golden/scratch.svg" alt="" />
         Raspa y Gana
       </button>
     </div>
     <div class="u-sub-content">
       <button class="u-menubar-button {active_view=='virtual'?'u-category-select':''}"  on:click={ ()=> onPageChange("virtual") }>
         <img class="u-menubar-icon" src="{conf.ASSETS}/golden/GameVirtual.svg" alt="" />
         Juegos Virtuales
       </button>
     </div>

     <div class="u-sub-content">
       <button class="u-menubar-button {active_view=='providers'?'u-category-select':''}"  on:click={ ()=> onPageChange("providers") }>
         <img class="u-menubar-icon" src="{conf.ASSETS}/golden/Providers.svg" alt="" />
         Proveedores
       </button>
     </div>
     <!--
       <div class="u-sub-content">
         <button class="u-menubar-button {active_view=='promotions'?'u-category-select':''}"  on:click={ ()=> onPageChange("promotions") }>
           <img class="u-menubar-icon" src="{conf.ASSETS}/golden/Promociones.svg" alt="" />
           Promociones
         </button>
       </div>
     -->
     <div class="u-sub-content">
       <button class="u-menubar-button"  on:click={ ()=> onPageChange("estadistics") }>
        <div class="u-menubar-icon"><b>E</b></div>
         Estadisticas y resultados <span class="estanew">Nuevo</span>
       </button>
     </div>

     <div class="u-sub-content">
      <button class="u-menubar-button {active_view=='home'?'u-category-select':''}" on:click={  ()=>onPageChange("home") }>
        <img class="u-menubar-icon" src="{conf.ASSETS}/golden/Home.svg" alt=""/>
        Inicio
      </button>
    </div>

     </div>
   <div class="u-backdrop"/>
   {/if}
 </nav>
</div>

<style>
  .studio{
    background: linear-gradient(to right, rgb(130 10 29), rgb(2, 2, 117)) !important;
  }
  .aviator{
    background: linear-gradient(to right, rgb(130 10 29), rgb(180, 8, 48)) !important;
  }
.estanew {
   background: red;
   font-weight: 500;
   font-size: 14px;
   font-family: system-ui;
   border-radius: .25rem;
   padding: 0 .25rem;
}
.u-menu-content {
   height: 90vh;
   display: block;
   position: absolute;
 }

 .u-hamburger-menu {
   position: relative;
   padding: 0;
 }

 .u-hamburger-menu .u-active {
   background: #f54b00;
 }

 .button-lineal {
   background-color: transparent;
   border: 1px solid transparent;
   color: white;
   font-size: 1.5rem;
   padding: 0;
 }

 /* Estilo del boton cuando se pasa el mouse por encima*/
 .button-lineal:hover {
   background: transparent;
   
 }
   .des {
   width:2rem;
   height:2rem;
   }
   
 @media only screen and (max-width: 700px) {
   .u-menu-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    top: 2.9rem;
    left: -0.5rem;
     position: absolute;
     padding: 0;
     margin: 0;
     width: 100vw;
     min-height: auto;
     height: auto;
     background: #b20e28;
     z-index: 100;
   }
   
   button {
     box-sizing: border-box;
     display: inline-block;
     border: 1px solid black;
     border-radius: 5px;
    
     font-weight: bold;
     text-align: center;
     user-select: none;
   }

   /* Estilo del boton cuando se pasa el mouse por encima*/
    button:hover {
     background: transparent;
   }

 
   .u-menubar-button {
     display: flex;
     flex-direction: row;
     align-items: center;
     justify-content: flex-start;
     width: 100%;
     gap: 0.5rem;
     background: #b20e28;
     border: none;
     color: white;
     height: 2rem;
     cursor: pointer;
   }
   .u-menubar-icon {
     width: 25px;
     left: 25px;
   }

   /*Estilo cuando el mouse pasa encima de cada link del menu*/
   .u-menubar-button:hover{
     background: rgb(130 10 29);
     border-radius: 0.2rem;
   }
   .u-category-select{
     background: rgb(130 10 29);
   }
   .u-sub-content{
     padding: 0.5rem;
   }

   .mobi{
    width: 1.8rem;
    height: 2rem;
   }
 }
 
 @media only screen and (min-width: 700px) {
   .u-menu-content {
     position: absolute;
     padding: 0;
     margin-left: -1rem;
     margin-top: 0.8rem;
     width: 16rem;
     background: #b20e28;
     z-index: 100;
     height: auto ;
   }
   
   button {
     box-sizing: border-box;
     display: inline-block;
     border: 1px solid black;
     border-radius: 5px;
   
    
     font-size: 1rem;
     font-weight: bold;
     text-align: center;
     user-select: none;
   }

   /* Estilo del boton cuando se pasa el mouse por encima*/
    button:hover {
     /*background: white;*/
   }

   .u-sub-content{
     padding: 0.8rem;
   }

 
   .u-menubar-button {
     display: flex;
     flex-direction: row;
     align-items: center;
     justify-content: flex-start;
     width: 95%;
     gap: 0.5rem;
     background: #b20e28;
     border: none;
     color: white;
     height: 2rem;
     cursor: pointer;
     margin-left: 0.9rem;
   }
   .u-menubar-icon {
     width: 25px;
     left: 25px;
   }

   /*Estilo cuando el mouse pasa encima de cada link del menu*/
   .u-menubar-button:hover{
     background: rgb(130 10 29);
     border-radius: 0.2rem;
   }
   .u-category-select{
     background: rgb(130 10 29);
   }
 }
</style>
