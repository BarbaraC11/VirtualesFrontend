<script>
  // @ts-nocheck
  import GameList from "../lib/components/Lists/GameList.svelte";
  import BannerCarrusel from "../lib/BannerCarrusel.svelte";
  import backend from "../server.js";
  import Configuration from "../config";
  import MenuCategoryPage2 from "../lib/components/Menu/MenuCategoryPage2.svelte";
  import ButtonFav from "../lib/components/Buttons/ButtonFav.svelte";
  import Search from "../lib/components/Search.svelte";
  import util from "../js/util";

  export let userState;
  export let user;
  export let onOpenGame;
  export let active_view
  export let favGames
  export let onCategoryChange;
  
  const conf = Configuration.getConfiguration();
  let searchValue;
  let sectionActive="";
  let searchGames=[]
  let popGames = [];
  let otherGames = [];
  let category = 'scratch'
  let banners = [
    { id: 1, src: `${conf.ASSETS}/BetsAmerica/banners/RaspaditaW.png`, srcmb: `${conf.ASSETS}/BetsAmerica/banners/RaspaditaM.png`},

    //{ id: 2, src: `https://cdn-plat.apidigi.com/plat/prd/Img/partners/1115/IMG/ESPECIALES/slide-esport4-desktop.jpg`,srcmb: `https://cdn-plat.apidigi.com/plat/prd/Img/partners/1115/IMG/ESPECIALES/slide-esport4-desktop.jpg`},
    //{ id: 3, src: `${conf.ASSETS}/latinosport21/Deportes.png`,srcmb: `${conf.ASSETS}/latinosport21/Deportes.png`}
    //{ id: 3, src: `${conf.ASSETS}/banners/GOLDEN/home/home.png`}
  ];
  
  const cleanFilters=()=>{ searchValue=""}
  const showFavs = async () => { cleanFilters(); if(userState !== "logout") {sectionActive= "favs"} }

  const getPopGames = async () => {
    const data = await backend.getGameList("scratch", "POP");
    popGames = data;
  };

  const getOtherGames = async () => {
    const data = await backend.getGameList("scratch", "CLAS");
    otherGames = data;
  };

  getPopGames();
  getOtherGames();

</script>

<div class="scratch-page">
  <MenuCategoryPage2 bind:active_view bind:onCategoryChange />
  <BannerCarrusel bind:banners/>

  <div class="u-sub-navbar">
    <Search       
    bind:active_view
    bind:searchGames
    bind:searchValue
    bind:category
    bind:sectionActive
    onlyGames={true}
    />
    <ButtonFav onClick={showFavs}></ButtonFav>
  </div>

  {#if sectionActive == ""}
    <GameList
      bind:category
      bind:userState
      bind:user
      title="POPULARES"
      games={popGames}
      bind:favGames
      {onOpenGame}
    />
    <GameList
      bind:category
      bind:userState
      bind:user
      prefix="Otros"
      title="Juegos"
      games={otherGames}
      bind:favGames
      {onOpenGame}
    />
  {:else if sectionActive == "favs"}
    <GameList
      bind:userState
      prefix="JUEGOS"
      title= "FAVORITOS"
      games={favGames}
      bind:favGames
      {onOpenGame}
      bind:user
    />
  {:else if sectionActive == "search"}
    <GameList
      category = {category}
      bind:userState
      title= {searchValue.toUpperCase()}
      prefix = "RESULTADO DE "
      games={searchGames}
      bind:favGames
      {onOpenGame}
      bind:user
      search={true}
      {searchValue}
    />
  {/if}

</div>

<style>
     .u-sub-navbar{
    background: transparent;
    position: relative;
   }
  @media only screen and (max-width: 1200px)  {
    *{
      background: transparent;
    }
    .u-sub-navbar{
      width: 100%;
      margin-top: 0.5rem;
      display: grid;
      grid-template-columns: 47% 47%;
      gap: 0.8rem;
      align-items: center;
      justify-content: center;
      position: relative;
    }
  }
  
  @media only screen and (max-width: 1200px) and (orientation: landscape) {
    *{
      background: #181824;
    }
     .u-sub-navbar{
    width: 100%;
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    }
  }
  @media only screen and (min-width: 1200px) {
     .u-sub-navbar{
       margin: 1rem auto 0 auto;
       width: 95%;
       display: flex;
       gap: 1rem;
       align-items: center;
       flex-direction: row;
      justify-content: flex-end;
    }
  }
  @media only screen and (min-width: 1800px){
    .u-sub-navbar{
      width: 78%;
    }
  }
</style>
