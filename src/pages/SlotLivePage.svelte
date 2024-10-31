<script>
  // @ts-nocheck
  import backend from "../../src/server";
  import { onMount } from "svelte";
  import SlotLiveCategoryMenu from "../lib/components/Menu/SlotLiveCategoryMenu.svelte";
  import BannerCarrusel from "../lib/BannerCarrusel.svelte";
  import GameList from "../lib/components/Lists/GameList.svelte";
  import util from "../js/util.js";
  import Configuration from "../config";
  import MenuCategoryPage2 from "../lib/components/Menu/MenuCategoryPage2.svelte";
  
  export let user
  export let userState;
  export let favGames
  export let onOpenGame;
  export let active_view
  export let autoSelected;
  export let onCategoryChange;
  export let size;


  let providerName = "Seleccionar proveedores";
  const conf = Configuration.getConfiguration();
  let searchValue;
  let searchGames;
  let category = 'slot_live'
  let sectionActive=""
  let brands=[{name:"Proveedores",total:""}];
  let banners = [{ id: 1, src: `${conf.ASSETS}/BetsAmerica/banners/SlotLiveW.png`, srcmb: `${conf.ASSETS}/BetsAmerica/banners/SlotLiveM.png`},];
  let baccGames=[]
  let rouletteGames=[]
  let blackjackGames=[]
  let megawheelGames=[]
  let lotteryGames=[]
  let sicboGames=[]
  let showsGames=[]
  let brandGames
  let brandSelected={id:'brands'}
  let brandFilter={}
  let onlyGames= true;
  let allGames=[];
  let filteredBrands = [];

  onMount(async () => {
    listBrands();
    if( autoSelected && autoSelected.filter=='brand'){
      brandSelected = autoSelected.brand;
      onSelectBrand(autoSelected.brand)
    }
  });

  const listBrands = async () => {
    let data = await backend.getBrandList(category);
    data = data.filter((e) => e.name != "Proveedores" && e.name !='');
    filteredBrands = ["Pragmatic Play","EVOLUTION","Pop Ok Gaming","OneTouch","Swintt","tvBet"];
    // Filtrar los elementos de data para que coincidan con filteredBrands y mantener el orden
    const fixedBrands = [];
    for (const brandName of filteredBrands) {
      const brand = data.find((e) => e.name === brandName);
      if (brand) fixedBrands.push(brand);
    }
    // Filtrar los elementos de data que no estén en filteredBrands
    const noFixedBrands = data.filter((e) => !filteredBrands.includes(e.name));
    // Concatenar los elementos de fixedBrands y noFixedBrands
    brands = fixedBrands.concat(noFixedBrands);
  };

  const openGame = (game) => {
    onOpenGame(game);
  };

  const cleanFilters=()=>{ searchValue=""}
  const showFavs = async () => { cleanFilters(); if(userState !== "logout") {sectionActive= "favs"} }

  const getAllGames = async()=>{
    baccGames=await backend.getGameList(category,"BACC")
    rouletteGames=await backend.getGameList(category,"RLIV")
    blackjackGames =await backend.getGameList(category,"BJLIV")
    megawheelGames =await backend.getGameList(category,"MWLIV")
    lotteryGames =await backend.getGameList(category,"LOTTO")
    sicboGames =await backend.getGameList(category,"SICBO")
    showsGames =await backend.getGameList(category,"TVLIV")
  };

  const onSelectBrand=async(brand)=>{
    if(!brand) { return; }
    if(brand.code=='brands'){ sectionActive=""; return }
    brandSelected=brand;
    brandFilter = {brand:brand.code};
    const data=await backend.getGameList(category,brandFilter);
    brandGames=data;
    sectionActive="brand"
  };

  const onGoTo=async (data)=>{
    console.log(data,sectionActive );
    if (sectionActive!="") {
      sectionActive=""
      await util.sleep(0.5)
    }
    if( data=="ALL" ){
      sectionActive = "ALL"
      listAllGames()
    }
    const el = document.querySelector("#"+data+"-section");
    if (!el) { console.log("Elemento no existe"); return}
    el.scrollIntoView();
  };

  const listAllGames = async()=>{
    const data=await backend.getGameList('slot_live');
    allGames=data;
  }

  getAllGames();
  
</script>

<div>
  <MenuCategoryPage2 bind:active_view bind:onCategoryChange/>
  <BannerCarrusel bind:banners />
  <SlotLiveCategoryMenu 
    onGoTo={(data) => onGoTo(data)} 
    bind:brands 
    bind:brandSelected
    bind:searchGames
    bind:searchValue
    bind:category
    bind:active_view
    bind:sectionActive
    bind:onlyGames
    bind:providerName
    bind:size
    bind:megawheelGames
    bind:baccGames
    bind:rouletteGames
    bind:blackjackGames
    bind:lotteryGames
    bind:sicboGames
    bind:showsGames
    {onSelectBrand} 
    {showFavs}
  />

  {#if sectionActive == ""}

    <GameList id="BACC-section"
    bind:category
    section='BACC'
    bind:userState
    bind:user
    title="BACCARAT"
    games={baccGames}
    bind:favGames
    onOpenGame={(game) => openGame(game)}
    />
    <GameList id="RLIV-section"
    bind:category
    section='RLIV'
    bind:userState
    bind:user
    title="RULETA"
    games={rouletteGames}
    bind:favGames
    onOpenGame={(game) => openGame(game)}
    />
    <GameList id="BJLIV-section"
    bind:category
    section='BJLIV'
    bind:user
    bind:userState
    title="BLACKJACK"
    games={blackjackGames}
    bind:favGames
    onOpenGame={(game) => openGame(game)}
    />
    <GameList id="MWLIV-section"
    bind:category
    section='MWLIV'
    bind:user
    bind:userState
    prefix="MEGA"
    title="WHEEL"
    games={megawheelGames}
    bind:favGames
    onOpenGame={(game) => openGame(game)}
    />
    <GameList id="LOTTO-section"
    bind:category
    section='LOTTO'
    bind:userState
    bind:user
    title="LOTERIA"
    games={lotteryGames}
    bind:favGames
    onOpenGame={(game) => openGame(game)}
    />
    <GameList id="SICBO-section"
    bind:category
    section='SICBO'
    bind:userState
    bind:user
    title="SICBO"
    games={sicboGames}
    bind:favGames
    onOpenGame={(game) => openGame(game)}
    />
    <GameList id="TVLIV-section"
    bind:category
    section='TVLIV'
    bind:userState
    bind:user
    prefix="GAME"
    title="SHOWS"
    games={showsGames}
    bind:favGames
    onOpenGame={(game) => openGame(game)}
    />
  {:else if sectionActive == "brand"}
    <GameList
      bind:category
      bind:userState
      bind:section={brandFilter}
      title={brandSelected.name.toUpperCase()}
      games={brandGames}
      bind:favGames
      onOpenGame={(game) => openGame(game)}
      bind:user
    />
  {:else if sectionActive == "favs"}
    <GameList
      bind:userState
      prefix="JUEGOS"
      title= "FAVORITOS"
      games={favGames}
      bind:favGames
      onOpenGame={(game) => openGame(game)}
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
  {:else if sectionActive=="ALL"}
    <GameList
      {category}
      bind:userState
      title= "Juegos"
      prefix = "Todos los"
      games={allGames}
      bind:favGames
      {onOpenGame}
      bind:user
    />
  {/if}

</div>

<style>
</style>
