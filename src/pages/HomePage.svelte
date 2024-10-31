<script>
  // @ts-nocheck
  import {register} from 'swiper/element/bundle';
  import GameList from "../lib/components/Lists/GameList.svelte";
  import BannerCarrusel from "../lib/BannerCarrusel.svelte";
  import Configuration from "../config";
  import MenuCategoryPage2 from "../../src/lib/components/Menu/MenuCategoryPage2.svelte";
  import util from "../js/util";



  import {
    t,
    ProviderList,
    DigtainWidget,
    Banners
  } from "u-library-sass";

  export let userState;
  export let user;
  export let onOpenGame;
  export let topGames = [];
  export let popGames = [];
  export let newGames = [];
  export let dropGames = [];
  export let otherGames = [];
  export let favGames
  export let active_view
  export let onCategoryChange;
  export let onOpenPromotions;
  export let onOpenProviders;
  export let loginModalOpen;

  const DEFAULT_CATEGORY = "slot";
  const conf = Configuration.getConfiguration();
  let assets = conf.ASSETS + "/Divertriunf/banners/"+"es";
  let imageName = "fuego.svg";
  register();
  
  let clientCode = conf.CLIENT_CODE;
  
  let banners = [
    { id: 1, src: `${conf.ASSETS}/BetsAmerica/bn_w_welcome.png`, srcmb: `${conf.ASSETS}/BetsAmerica/bn_m_welcome.png`, category:""},
   // { id: 2, src: `${conf.ASSETS}/Coliseosport/banner_recharge_4.png`, srcmb: `${conf.ASSETS}/Coliseosport/banner_recharge_4_mb.png`, category:""},
  //  { id: 2, src: `${conf.ASSETS}/Ganawin/banner_ganawin.png`, srcmb: `${conf.ASSETS}/Ganawin/banner_ganawin_mb.png`, category:""},
   { id: 5, src: `${conf.ASSETS}/Latinsport21/bn_w_caballos2.png`, srcmb: `${conf.ASSETS}/Latinsport21/bn_m_caballos.png`, category: "horses" },
   { id: 4, src: `${conf.ASSETS}/BetsAmerica/ar/banners/w_sportbook.png`, srcmb: `${conf.ASSETS}/Latinsport21/bn_m_deportes.png`, category:"sportbook"},
   { id: 4, src: `${conf.ASSETS}/BetsAmerica/ar/banners/w_sportbooklive.png`, srcmb: `${conf.ASSETS}/Latinsport21/bn_m_sportlive.png`, category: "sportbooklive" },
   { id: 1, src: `${conf.ASSETS}/Latinsport21/bn_w_virtuales.png`, srcmb: `${conf.ASSETS}/Latinsport21/bn_m_virtuales.png`, category: "virtual" },
    { id: 5, src: `${conf.ASSETS}/Coliseosport/bn_w_crash.png`, srcmb: `${conf.ASSETS}/Coliseosport/bn_m_crash.png`, category:"crash"},
    { id: 6, src: `${conf.ASSETS}/generic_imgs/banners/prom1.png`, srcmb: `${conf.ASSETS}/generic_imgs/banners/prom1_mb.png`, category:"amigo_gaming"},
    { id: 7, src: `${conf.ASSETS}/generic_imgs/banners/prom2.png`, srcmb: `${conf.ASSETS}/generic_imgs/banners/prom2_mb.png`, category:"wild_gaming"},
    { id: 8, src: `${conf.ASSETS}/Coliseosport/bn_m_slot.png`, srcmb: `${conf.ASSETS}/Coliseosport/bn_w_slot.png`, category:"slot"},
    { id: 9, src: `${conf.ASSETS}/Coliseosport/bn_w_slotlive.png`, srcmb: `${conf.ASSETS}/Coliseosport/bn_m_slotlive.png`, category:"slotlive"},
    { id: 10, src: `${conf.ASSETS}/BetsAmerica/ar/banners/w_cashout.png`, srcmb: `${conf.ASSETS}/Latinsport21/bn_m_cashout.png`, category: "sportbook" },
    { id: 10, src: `${assets}/w_promo_arg.png`, srcmb: `${assets}/m_promo_arg.png`, category: "slot" },
    // { id: 10, src: `${assets}/w_promo2_arg.png`, srcmb: `${assets}/m_promo2_arg.png`, category: "slot" },
  ];
  let banner_video = true;
  let category = "home";
  category = category=="home"?DEFAULT_CATEGORY:category;

  const openGame = (game) => {
    onOpenGame(game);
  };
  //10136.54
  let topSGames = [
    {    "id": 50626,    "gameid": "7760_ADM",    "provider": "adm",    "name": "Gates of Olympus",    "description": "",    "type": "",    "urlimage": ".png",    "mode": "wb",    "brand": "Pragmatic Play",    "status": 1,    "position": 1,    "category": "slot",    "reg_date": "2024-02-13T18:24:49.018+00:00",    "currency": null,    "isNew": 0,    "min_bet": 0,    "max_bet": 0,    "jackpot": 0},
    {    "id": 50726,    "gameid": "7546_ADM",    "provider": "adm",    "name": "Sweet Bonanza",    "description": "",    "type": "DROP",    "urlimage": ".gif",    "mode": "wb",    "brand": "Pragmatic Play",    "status": 1,    "position": 1,    "category": "slot",    "reg_date": "2024-09-25T12:18:32.685+00:00",    "currency": null,    "isNew": 1,    "min_bet": 0,    "max_bet": 0,    "jackpot": 0},
    {    "id": 50592,    "gameid": "7877_ADM",    "provider": "adm",    "name": "Buffalo King Megaways",    "description": "",    "type": "MEGAW",    "urlimage": ".gif",    "mode": "wb",    "brand": "Pragmatic Play",    "status": 1,    "position": 1,    "category": "slot",    "reg_date": "2024-09-30T12:32:54.578+00:00",    "currency": null,    "isNew": 1,    "min_bet": 0,    "max_bet": 0,    "jackpot": 0},
    {    "id": 50598,    "gameid": "7870_ADM",    "provider": "adm",    "name": "Chilli Heat Megaways",    "description": "",    "type": "MEGAW",    "urlimage": ".gif",    "mode": "wb",    "brand": "Pragmatic Play",    "status": 1,    "position": 1,    "category": "slot",    "reg_date": "2024-09-30T12:48:58.924+00:00",    "currency": null,    "isNew": 1,    "min_bet": 0,    "max_bet": 0,    "jackpot": 0},
    {    "id": 50612,    "gameid": "7851_ADM",    "provider": "adm",    "name": "5 Lions Megaways",    "description": "",    "type": "MEGAW",    "urlimage": ".gif",    "mode": "wb",    "brand": "Pragmatic Play",    "status": 1,    "position": 1,    "category": "slot",    "reg_date": "2024-09-30T12:41:48.047+00:00",    "currency": null,    "isNew": 1,    "min_bet": 0,    "max_bet": 0,    "jackpot": 0},
    {    "id": 82971,    "gameid": "125_popok",    "provider": "pkg",    "name": "Royal Flash",    "description": "New game",    "type": "CLAS",    "urlimage": ".gif",    "mode": "wb",    "brand": "Pop Ok Gaming",    "status": 1,    "position": 1,    "category": "slot",    "reg_date": "2024-10-01T17:20:35.643+00:00",    "currency": null,    "isNew": 1,    "min_bet": 0,    "max_bet": 0,    "jackpot": 0},
    {    "id": 77019,    "gameid": "109_pokop",    "provider": "pkg",    "name": "Akn of Providence",    "description": "",    "type": "CLAS",    "urlimage": ".gif",    "mode": "wb",    "brand": "Pop Ok Gaming",    "status": 1,    "position": 1,    "category": "slot",    "reg_date": "2024-03-09T22:16:06.338+00:00",    "currency": null,    "isNew": 0,    "min_bet": 0,    "max_bet": 0,    "jackpot": 0},
    {    "id": 82969,    "gameid": "124_pokop",    "provider": "pkg",    "name": "White Mustang",    "description": "New game",    "type": "CLAS",    "urlimage": ".gif",    "mode": "wb",    "brand": "Pop Ok Gaming",    "status": 1,    "position": 1,    "category": "slot",    "reg_date": "2024-05-13T17:55:45.395+00:00",    "currency": null,    "isNew": 0,    "min_bet": 0,    "max_bet": 0,    "jackpot": 0},
    {    "id": 77618,    "gameid": "123_pokop",    "provider": "pkg",    "name": "Mr. First Lucky Wheel",    "description": "New game",    "type": "CLAS",    "urlimage": ".gif",    "mode": "wb",    "brand": "Pop Ok Gaming",    "status": 1,    "position": 1,    "category": "slot",    "reg_date": "2024-01-13T18:00:42.559+00:00",    "currency": null,    "isNew": 0,    "min_bet": 0,    "max_bet": 0,    "jackpot": 0},
    {    "id": 76975,    "gameid": "38_pokop",    "provider": "pkg",    "name": "Vikings Mystery",    "description": "",    "type": "CLAS",    "urlimage": ".gif",    "mode": "wb",    "brand": "Pop Ok Gaming",    "status": 1,    "position": 0,    "category": "slot",    "reg_date": "2024-01-03T22:22:52.362+00:00",    "currency": null,    "isNew": 0,    "min_bet": 0,    "max_bet": 0,    "jackpot": 0},
    {    "id": 79423,    "gameid": "1_LS",    "provider": "ls",    "name": "Legacy of Egypt",    "description": "",    "type": "",    "urlimage": ".gif",    "mode": "wb",    "brand": "PlayN Go",    "status": 1,    "position": 1,    "category": "slot",    "reg_date": "2024-03-08T14:47:52.827+00:00",    "currency": null,    "isNew": 0,    "min_bet": 0,    "max_bet": 0,    "jackpot": 0},
    {    "id": 51306,  "gameid": "4574_ADM",  "provider": "adm",  "name": "Lucky Ladys Charm Deluxe 10",  "description": "",  "type": "CLAS",  "urlimage": "",  "mode": "wb",  "brand": "Novomatic",  "status": 1,  "position": 100000,  "category": "slot",  "reg_date": "2022-11-08T23:21:46.761+00:00",  "currency": null,  "isNew": 0,  "min_bet": 0,  "max_bet": 0,  "jackpot": 0}
  ];
  let topSlotLive = [
    {    "id": 50503,    "gameid": "1401",    "provider": "pg",    "name": "Boom City",    "description": "",    "type": "TVLIV",    "urlimage": ".gif",    "mode": "wb",    "brand": "Pragmatic Play",    "status": 1,    "position": 1,    "category": "slot_live",    "reg_date": "2022-09-08T20:25:26.782+00:00",    "currency": null,    "isNew": 0,    "min_bet": 0,    "max_bet": 0,    "jackpot": 0},
    {    "id": 50533,    "gameid": "240",    "provider": "pg",    "name": "PowerUP Roulette",    "description": "",    "type": "RLIV",    "urlimage": ".gif",    "mode": "wb",    "brand": "Pragmatic Play",    "status": 1,    "position": 1,    "category": "slot_live",    "reg_date": "2022-10-14T20:21:44.440+00:00",    "currency": null,    "isNew": 0,    "min_bet": 0,    "max_bet": 0,    "jackpot": 0},
    {    "id": 36323,    "gameid": "1101",    "provider": "pg",    "name": "Sweet Bonanza CandyLand",    "description": "",    "type": "CLAS",    "urlimage": ".gif",    "mode": "wb",    "brand": "Pragmatic Play",    "status": 1,    "position": 1,    "category": "slot_live",    "reg_date": "2024-10-01T15:58:58.631+00:00",    "currency": null,    "isNew": 1,    "min_bet": 0,    "max_bet": 0,    "jackpot": 0},
    {    "id": 36251,    "gameid": "801",    "provider": "pg",    "name": "Mega Wheel",    "description": "",    "type": "MWLIV",    "urlimage": ".gif",    "mode": "wb",    "brand": "Pragmatic Play",    "status": 1,    "position": 1,    "category": "slot_live",    "reg_date": "2024-10-01T15:56:46.660+00:00",    "currency": null,    "isNew": 1,    "min_bet": 0,    "max_bet": 0,    "jackpot": 0},
    {    "id": 77021,    "gameid": "500_pokop",    "provider": "pkg",    "name": "Roulette",    "description": "",    "type": "RLIV",    "urlimage": ".gif",    "mode": "wb",    "brand": "Pop Ok Gaming",    "status": 1,    "position": 0,    "category": "slot_live",    "reg_date": "2023-10-30T17:04:56.266+00:00",    "currency": null,    "isNew": 0,    "min_bet": 0,    "max_bet": 0,    "jackpot": 0},
    {    "id": 77023,    "gameid": "501_pokop",    "provider": "pkg",    "name": "Multi Fruit",    "description": "",    "type": "RLIV",    "urlimage": ".gif",    "mode": "wb",    "brand": "Pop Ok Gaming",    "status": 1,    "position": 0,    "category": "slot_live",    "reg_date": "2024-01-03T21:50:46.941+00:00",    "currency": null,    "isNew": 0,    "min_bet": 0,    "max_bet": 0,    "jackpot": 0},
    {    "id": 77025,    "gameid": "502_pokop",    "provider": "pkg",    "name": "Diamond Fruits",    "description": "",    "type": "RLIV",    "urlimage": ".gif",    "mode": "wb",    "brand": "Pop Ok Gaming",    "status": 1,    "position": 0,    "category": "slot_live",    "reg_date": "2024-01-03T21:50:53.493+00:00",    "currency": null,    "isNew": 0,    "min_bet": 0,    "max_bet": 0,    "jackpot": 0},
    {    "id": 19691,    "gameid": "tvbet",    "provider": "tv",    "name": "tvBet",    "description": "",    "type": "TVLIV",    "urlimage": ".png",    "mode": "wb",    "brand": "tvBet",    "status": 1,    "position": 2,    "category": "slot_live",    "reg_date": null,    "currency": null,    "isNew": 0,    "min_bet": 0,    "max_bet": 0,    "jackpot": 0}
  ];

  let topCrashgames = [
    {  "id": 76893,  "gameid": "1320",  "provider": "pg",  "name": "Big Bass Crash",  "description": "New game",  "type": "FAST",  "urlimage": null,  "mode": "wb",  "brand": "Pragmatic Play",  "status": 1,  "position": 1,  "category": "crash",  "reg_date": "2023-11-11T01:00:25.615+00:00",  "currency": null,  "isNew": 0,  "min_bet": 0,  "max_bet": 0,  "jackpot": 0},
    { "id": 77029, "gameid": "601_pokop", "provider": "pkg", "name": "Plinko", "description": "", "type": "CLAS", "urlimage": "https://st.pokgaming.com/gameThumbnails/601.jpg", "mode": "wb", "brand": "Pop Ok Gaming", "status": 1, "position": 0, "category": "slot", "reg_date": "2023-10-30T17:08:56.453+00:00", "currency": null, "isNew": 0, "min_bet": 0, "max_bet": 0, "jackpot": 0 },
    { "id": 50474, "gameid": "1301", "provider": "pg", "name": "Spaceman", "description": "", "type": "FAST", "urlimage": "img/pg/pg_401.png", "mode": "wb", "brand": "Pragmatic Play", "status": 1, "position": 200010, "category": "crash", "reg_date": "2023-11-11T00:56:59.848+00:00", "currency": null, "isNew": 0, "min_bet": 0, "max_bet": 0, "jackpot": 0 },
    { "id": 77620, "gameid": "614_pokop", "provider": "pkg", "name": "Ninja Fruit Cubes", "description": "New game", "type": "CLAS", "urlimage": null, "mode": "wb", "brand": "Pop Ok Gaming", "status": 1, "position": 1, "category": "slot", "reg_date": "2024-01-13T19:31:48.135+00:00", "currency": null, "isNew": 0, "min_bet": 0, "max_bet": 0, "jackpot": 0 },

  ];
  const topProviders = ["Habanero","Rubyplay","Pragmatic Play","Endorphina","tvBet"];


  let mobile = window.innerWidth <= 1023;

  let olympus = {   "id": 36344,   "gameid": "vs20olympgate",   "provider": "pg",   "name": "Gates of Olympus",   "description": "",   "type": "CLAS ",   "urlimage": "",   "mode": "wb",   "brand": "Pragmatic Play",   "status": 1,   "position": 200009,   "category": "slot",   "reg_date": "2023-09-05T13:50:52.947+00:00",   "currency": null,   "isNew": 0,   "min_bet": 0,   "max_bet": 0,   "jackpot": 0};
 let aviatrix = {  "id": 54005,  "gameid": "5213_DW",  "provider": "dw",  "name": "American Roulette 3D",  "description": "",  "type": "CLAS",  "urlimage": "",  "mode": "wb",  "brand": "Evo Play",  "status": 1,  "position": 0,  "category": "slot",  "reg_date": "2023-05-29T10:22:02.246+00:00",  "currency": null,  "isNew": 0,  "min_bet": 0,  "max_bet": 0,  "jackpot": 0}
  let potgold = {  "id": 50742,  "gameid": "7057_ADM",  "provider": "adm",  "name": "9 Pots of Gold",  "description": "",  "type": "CLAS",  "urlimage": "",  "mode": "wb",  "brand": "Microgaming",  "status": 1,  "position": 100000,  "category": "slot",  "reg_date": "2022-11-08T23:21:46.761+00:00",  "currency": null,  "isNew": 0,  "min_bet": 0,  "max_bet": 0,  "jackpot": 0};
  
  
  let virtual1 = {"id": 78718,    "gameid": "1089-RGS",    "provider": "rgs",    "name": "Great Queen Bee",    "description": "",    "type": "CLAS",    "urlimage": ".gif",    "mode": "wb",    "brand": "CASINO TECHNOLOGY GAMING",    "status": 1,    "position": 1,    "category": "slot",    "reg_date": "2023-11-07T17:03:40.455+00:00",    "currency": null,    "isNew": 0,    "min_bet": 0,    "max_bet": 0,    "jackpot": 0};
let virtual2 = {  "id": 91391,    "gameid": "endorphina2_CowsnUFOs@ENDORPHINA",    "provider": "ed",    "name": "Cows & UFOs",    "description": "Lanzamiento: 30/07",    "type": "CLAS",    "urlimage": ".gif",    "mode": "wb",    "brand": "Endorphina",    "status": 1,    "position": 1,    "category": "slot",    "reg_date": "2024-07-22T15:25:15.567+00:00",    "currency": null,    "isNew": 0,    "min_bet": 0,    "max_bet": 0,    "jackpot": 0};
let virtual3 = {  "id": 38251,    "gameid": "azteccoins-529",    "provider": "pps",    "name": "Aztec Coins",    "description": "",    "type": "CLAS",    "urlimage": ".gif",    "mode": "wb",    "brand": "Platipus",    "status": 1,    "position": 0,    "category": "slot",    "reg_date": "2021-07-23T19:51:58.000+00:00",    "currency": null,    "isNew": 0,    "min_bet": 0,    "max_bet": 0,    "jackpot": 0};
let virtual4 = {  "id": 50856,    "gameid": "6964_ADM",    "provider": "adm",    "name": "Mustang Money",    "description": "",    "type": "",    "urlimage": ".gif",    "mode": "wb",    "brand": "Ainsworth",    "status": 1,    "position": 1,    "category": "slot",    "reg_date": "2022-11-08T23:21:46.761+00:00",    "currency": null,    "isNew": 0,    "min_bet": 0,    "max_bet": 0,    "jackpot": 0};
let virtual5 = {  "id": 91537,    "gameid": "universalsoft-super50stars-RRG",    "provider": "rrg",    "name": "Super 50 Stars",    "description": "Cargado el 10/09/2024",    "type": "CLAS",    "urlimage": ".gif",    "mode": "wb",    "brand": "Redrake Gaming",    "status": 1,    "position": 1,    "category": "slot",    "reg_date": "2024-09-11T13:01:04.270+00:00",    "currency": null,    "isNew": 1,    "min_bet": 0,    "max_bet": 0,    "jackpot": 0}

let platform = "Betsamerica";

let bannerPromocion= [
    {
        "url_w": "https://assetsapiusoft.s3.us-west-2.amazonaws.com/apuestasElRey/banners/w_banner_joker.png",
        "url_m": "https://assetsapiusoft.s3.us-west-2.amazonaws.com/apuestasElRey/banners/m_banner_joker.png",
        "dateFrom": "",
        "dateUntil": "",
        "category": "slot_Jokers Jewels"},
    {
        "url_w": "https://assetsapiusoft.s3.us-west-2.amazonaws.com/apuestasElRey/banners/w_banner_sumofest.png",
        "url_m": "https://assetsapiusoft.s3.us-west-2.amazonaws.com/apuestasElRey/banners/m_banner_sumofest.png",
        "dateFrom": "",
        "dateUntil": "",
        "category": "crash_Sumo Food Fest"},
    {
        "url_w": "https://assetsapiusoft.s3.us-west-2.amazonaws.com/apuestasElRey/banners/w_banner_itsmultitime.png",
        "url_m": "https://assetsapiusoft.s3.us-west-2.amazonaws.com/apuestasElRey/banners/m_banner_itsmultitime.png",
        "dateFrom": "",
        "dateUntil": "",
        "category": "slot_It's Multi Time"},
    {
        "url_w": "https://assetsapiusoft.s3.us-west-2.amazonaws.com/apuestasElRey/banners/w_banner_highflyer.png",
        "url_m": "https://assetsapiusoft.s3.us-west-2.amazonaws.com/apuestasElRey/banners/m_banner_highflyer.png",
        "dateFrom": "",
        "dateUntil": "",
        "category": "slot_High Flyer"},
    {
        "url_w": "https://assetsapiusoft.s3.us-west-2.amazonaws.com/apuestasElRey/banners/w_banner_fruitinvaders.png",
        "url_m": "https://assetsapiusoft.s3.us-west-2.amazonaws.com/apuestasElRey/banners/m_banner_fruitinvaders.png",
        "dateFrom": "",
        "dateUntil": "",
        "category": "slot_Fruit Invaders"},
    {
        "url_w": "https://assetsapiusoft.s3.us-west-2.amazonaws.com/apuestasElRey/banners/w_banner_aztecriches.png",
        "url_m": "https://assetsapiusoft.s3.us-west-2.amazonaws.com/apuestasElRey/banners/m_banner_aztecriches.png",
        "dateFrom": "",
        "dateUntil": "",
        "category": "slot_Aztec Riches"}

        ]
</script>

<div class="home-page">
  <MenuCategoryPage2 bind:active_view bind:onCategoryChange   {onOpenPromotions} />
  <div class="Ganawin">
    <Banners bind:platform {onCategoryChange}/>
   </div>
   
  <div class="cat-top-games rec_bg">
  <!-- <div class="Ganawin">
    <ProviderList {onOpenProviders} {topProviders} t={$t}/>
  </div> -->
{#if conf.country != "PE"}
  <DigtainWidget
  {user}
  bind:loginModalOpen
  {clientCode}
  {onCategoryChange}
/>
{/if}
   <!-- <div style="position:relative;cursor:pointer;">
    <swiper-container class="swiper-container__banners" speed={1500} autoplay-delay={10000} loop={true} effect="fade">
      {#each bannerPromocion as banner} -->
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-static-element-interactions -->
          <!-- <swiper-slide>
              <picture on:click={()=>onCategoryChange(banner.category)}>
                  <source media="(max-width: 1023px)" srcset={banner.url_m}>
                  <img src={banner.url_w} alt="banner" loading="lazy">
              </picture>
          </swiper-slide>
      {/each}
  </swiper-container> -->
      <!-- {#if mobile}
      <div class="no-btn" on:click={() => onOpenProviders({code:"DROPS & WINS",name:"DROPS & WINS"})}>
        <img style="width: 100%;padding: 0 1rem;" src="https://assets.apiusoft.com/Ganawin/dp_mb.webp" alt="" loading="lazy" />
      </div>
      {:else}
      <div class="no-btn" on:click={() => onOpenProviders({code:"DROPS & WINS",name:"DROPS & WINS"})}>
        <img style="width: 100%;" src="https://assets.apiusoft.com/Ganawin/dp_pc.webp" alt="" loading="lazy" />
      </div>
    {/if} -->
   <!-- </div> -->
   <div class="Ganawin">
      <div class="providerlist">
        <div class="providerlist__provider">
                <button class="providerlist__slide" on:click={onOpenGame(potgold)}>
                    <img class="providerlist__img" src="https://assets.apiusoft.com/Ganawin/game_5.webp">
                    <div class="providerlist__parallax">
                        <div class="providerlist__playnow">Juega ahora</div>
                    </div>
                </button>
                <button class="providerlist__slide"  on:click={onOpenGame(aviatrix)} >
                    <img class="providerlist__img" src="https://assets.apiusoft.com/BetsAmerica/game_6.webp">
                    <div class="providerlist__parallax">
                        <div class="providerlist__playnow">Juega ahora</div>
                    </div>
                </button>
                <button class="providerlist__slide" on:click={() => onOpenProviders({code:"JUEGOS POPULARES",name:"JUEGOS POPULARES"})}>
                    <img class="providerlist__img" src="https://assets.apiusoft.com/Ganawin/game_pop.webp">
                    <div class="providerlist__parallax">
                        <div class="providerlist__playnow">Juega ahora</div>
                    </div>
                </button>
                <button class="providerlist__slide" on:click={onOpenGame(olympus)}  >
                    <img class="providerlist__img" src="https://assets.apiusoft.com/Ganawin/game_3.webp">
                    <div class="providerlist__parallax">
                        <div class="providerlist__playnow">Juega ahora</div>
                    </div>
                </button>
                <button class="providerlist__slide" on:click={onCategoryChange("horses")} >
                    <img class="providerlist__img" src="https://assets.apiusoft.com/Ganawin/game_4.webp">
                    <div class="providerlist__parallax">
                        <div class="providerlist__playnow">Juega ahora</div>
                    </div>
                </button>
        </div>
    </div>
   </div>
   <div class="helppe_2">
    <img on:click={() => onOpenProviders({code:"Amigo Gaming",name:"Amigo Gaming"})} width="100%" src="https://assets.apiusoft.com/us_img_brands/Amigo Gaming.png" alt="">
    <img on:click={() => onOpenProviders({code:"Wazdan",name:"Wazdan"})} width="100%" src="https://assets.apiusoft.com/us_img_brands/Wazdan.png" alt="">
    <img on:click={() => onOpenProviders({code:"Pop Ok Gaming",name:"Pop Ok Gaming"})} width="100%" src="https://assets.apiusoft.com/us_img_brands/Pop Ok Gaming.png" alt="">
    <img on:click={() => onOpenProviders({code:"Rubyplay",name:"Rubyplay"})} width="100%" src="https://assets.apiusoft.com/us_img_brands/Ruby Play.png" alt="">
    <img on:click={() => onOpenProviders({code:"Playngo",name:"Playngo"})} width="100%" src="https://assets.apiusoft.com/us_img_brands/Playngo.png" alt="">
    <img on:click={() => onOpenProviders({code:"Tom Horn Gaming",name:"Tom Horn Gaming"})} width="100%" src="https://assets.apiusoft.com/us_img_brands/Tom Horn Gaming.png" alt="">
  </div>
  <div class="Ganawin">
    <div class="providerlist">
      <div class="providerlist__provider">
              <button class="providerlist__slide" on:click={onOpenGame(virtual1)}>
                  <img class="providerlist__img" src="https://assets.apiusoft.com/us_img_games/1089-RGS.gif">
                  <div class="providerlist__parallax">
                      <div class="providerlist__playnow">Juega ahora</div>
                  </div>
              </button>
              <button class="providerlist__slide"  on:click={onOpenGame(virtual2)} >
                  <img class="providerlist__img" src="https://assets.apiusoft.com/us_img_games/endorphina2_CowsnUFOs%40ENDORPHINA.gif">
                  <div class="providerlist__parallax">
                      <div class="providerlist__playnow">Juega ahora</div>
                  </div>
              </button>
              <button class="providerlist__slide" on:click={onOpenGame(virtual3)}>
                  <img class="providerlist__img" src="https://assets.apiusoft.com/us_img_games/azteccoins-529.gif">
                  <div class="providerlist__parallax">
                      <div class="providerlist__playnow">Juega ahora</div>
                  </div>
              </button>
              <button class="providerlist__slide" on:click={onOpenGame(virtual4)}  >
                  <img class="providerlist__img" src="https://assets.apiusoft.com/us_img_games/6964_ADM.gif">
                  <div class="providerlist__parallax">
                      <div class="providerlist__playnow">Juega ahora</div>
                  </div>
              </button>
              <button class="providerlist__slide" on:click={onOpenGame(virtual5)} >
                  <img class="providerlist__img" src="https://assets.apiusoft.com/us_img_games/universalsoft-super50stars-RRG.gif">
                  <div class="providerlist__parallax">
                      <div class="providerlist__playnow">Juega ahora</div>
                  </div>
              </button>
      </div>
    </div>
  </div>
</div>
<div class="cat-top-games"> 
  <div class="Ganawin">
    <ProviderList {onOpenProviders} {topProviders} t={$t}/>
  </div>
     <div style="position:relative;cursor:pointer;">
    <swiper-container class="swiper-container__banners" speed={1500} autoplay-delay={10000} loop={true} effect="fade">
      {#each bannerPromocion as banner}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-static-element-interactions -->
          <swiper-slide on:click={()=>onCategoryChange(banner.category)}>
            {#if mobile}
              <img style="width: 100%;padding: 0 1rem" src={banner.url_m} alt="banner" loading="lazy">
              {:else}
              <img style="width: 100%;" src={banner.url_w} alt="banner" loading="lazy">
            {/if}
      </swiper-slide>
      {/each}
  </swiper-container> 
      <!-- {#if mobile}
      <div class="no-btn" on:click={() => onOpenProviders({code:"DROPS & WINS",name:"DROPS & WINS"})}>
        <img style="width: 100%;padding: 0 1rem;" src="https://assets.apiusoft.com/Ganawin/dp_mb.webp" alt="" loading="lazy" />
      </div>
      {:else}
      <div class="no-btn" on:click={() => onOpenProviders({code:"DROPS & WINS",name:"DROPS & WINS"})}>
        <img style="width: 100%;" src="https://assets.apiusoft.com/Ganawin/dp_pc.webp" alt="" loading="lazy" />
      </div>
    {/if} -->
   </div>
  </div>
    {#if userState !== "logout"}
      <GameList id="favs"
        bind:category
        bind:userState
        title= "FAVORITOS"
        games={favGames}
        bind:favGames
        onOpenGame={(game) => openGame(game)}
        bind:user
      />
    {/if}
    
   


    <!-- <GameList
    bind:category
    section="TOP"
    bind:userState
    bind:user
    prefix="Crash Games"
    title=""
    games={topCrashgames}
    bind:favGames
    onOpenGame={(game) => openGame(game)}
  /> -->
  <GameList
   bind:category
   section="TOP"
   bind:userState
   bind:user
   prefix="Casino"
   title=""
   games={topSGames}
   bind:favGames
   onOpenGame={(game) => openGame(game)}
 />
  <div class="rec_bg red">
    <GameList
    bind:category
    section="TOP"
    bind:userState
    bind:user
    prefix="Casino en Vivo"
    title=""
    games={topSlotLive}
    bind:favGames
    onOpenGame={(game) => openGame(game)}
  />
</div>
  <!--div style="padding-bottom: 5rem;"></div-->
    <!--GameList
      bind:category
      section="POP"
      bind:userState
      bind:user
      prefix="Juegos"
      title="Populares"
      games={popGames}
      bind:favGames
      onOpenGame={(game) => openGame(game)}
    />
    <GameList
      bind:category
      section="NEW"
      bind:userState
      bind:user
      prefix="Juegos"
      title="Nuevos"
      games={newGames}
      bind:favGames
      onOpenGame={(game) => openGame(game)}
    />
    <GameList
      bind:category
      section="DROP"
      bind:userState
      bind:user
      prefix="Drops"
      title="& Wins"
      games={dropGames}
      bind:favGames
      onOpenGame={(game) => openGame(game)}
    />
    <GameList
      bind:category
      section="CLAS"
      bind:userState
      bind:user
      prefix="Otros"
      title="Juegos"
      games={otherGames}
      bind:favGames
      onOpenGame={(game) => openGame(game)}
    /-->
  </div>

<style>

  .helppe_2{
    position: relative;
    display: grid;
    grid-template-columns: repeat(6,1fr);
    padding: 2rem 0;
    gap: 1.5rem;
  }
  @media (max-width: 1023px){
    .helppe_2{
      
      grid-template-columns: repeat(2,1fr);
      padding: 2rem;
    }
  }
  .helppe_2 img{
    cursor: pointer;
    background: #414141;
    padding: 1rem;
    border-radius: 0.5rem;
  }

.cat-top-games {
    padding-left: 20px;
    padding-right: 20px;
}

  @media only screen and (min-width: 1800px) {

.cat-top-games{
  padding-left: 12rem;
  padding-right: 12rem;
  }
}

@media only screen and (max-width: 1023px) {
  .cat-top-games {
    padding-left: 0px;
    padding-right: 0px;
}
}
  .container_top{
    
  }
  .number_top{
    /*position: absolute;*/
  }
  .slideddd{
    position: relative;
    width: 90%;
    overflow: auto;
    margin: 0 auto;
  }
  .test_ing{
    width: 350%;
    margin: 2rem auto;
    height: 250px;
    display: flex;
  }
  .test_ing img{
    width: 0px;
    flex-grow: 1;
    object-fit: cover;
    opacity: 0.8;
    /*transition: .5s ease;*/
    
    animation: slideBack .5s linear normal forwards;
  }
  .test_ing img:hover{
    cursor: pointer;
    /*width: 300px;*/
    opacity: 1;
    filter: contrast(120%);
  }

 
    @keyframes slideOut {
        0% {
            transform:perspective(100rem) rotateY(-40deg) translateZ(0);
            z-index: var(--z)
        }

        30% {
            transform: perspective(100rem) rotateY(-40deg) translate3d(5rem,0,0);
            z-index: var(--z)
        }

        to {
            transform: perspective(100rem) rotateY(0deg) translate3d(-5rem,0,10rem);
            z-index: 100
        }
    }

    @keyframes slideBack {
        0% {
            transform: perspective(100rem) rotateY(0deg) translate3d(-5rem,0,10rem);
            z-index: 100
        }

        60% {
            transform: perspective(100rem) rotateY(-40deg) translate3d(5rem,0,0);
            z-index: var(--z)
        }

        to {
            transform: perspective(100rem) rotateY(-40deg) translateZ(0);
            z-index: var(--z)
        }
    }

    .TrendingListWrapper.GamesList.MsnRow .SlideOut {
        animation: slideOut .5s linear normal forwards
    }

    .TrendingListWrapper.GamesList.MsnRow .SlideBack {
        /* animation:slideBack .5s linear normal forwards; */
    }
/* .rec_bg{
  background: linear-gradient(180deg, #2E2E2E 0%, #000000 100%);
} */
.rec_bg.red{
  background: linear-gradient(180deg, #C8102E 0%, #620817 100%);

}

</style>
