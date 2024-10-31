<script>
  // @ts-nocheck
  import backend from "../server.js";
  import { onDestroy, onMount } from "svelte";
  import BannerCarrusel from "../lib/BannerCarrusel.svelte";
  import GameList from "../../src/lib/components/Lists/GameList.svelte";
  import MenuCategoryPage2 from "../lib/components/Menu/MenuCategoryPage2.svelte";
  import DropDownButton from "../lib/components/DropDowns/DropDownButton.svelte";
  import ButtonFav from "../lib/components/Buttons/ButtonFav.svelte";
  import Search from "../lib/components/Search.svelte";
  import Configuration from "../config";
  import SlotCategoryMenu from "../lib/components/Menu/SlotCategoryMenu.svelte";
  import {DropdownSearch} from 'u-library-sass';

  export let user;
  export let userState;
  export let onOpenGame;
  export let topGames;
  export let popGames;
  export let newGames;
  export let dropGames;
  export let otherGames;
  export let favGames;
  export let autoSelected;
  export let active_view;
  export let onCategoryChange;
  export let t;

  const conf = Configuration.getConfiguration();
  let sectionActive = "";
  let searchGames = [];
  let searchValue = "";
  let isFinalPageBrand = false;
  let pageBrand = 1;
  let brandName = { name: "Menu de juegos" };
  let providerName = "Seleccionar proveedores";
  let brandGames;
  let ruleteGames = [];
  let abilityGames = [];
  let tableGames = [];
  let megawayGames = [];
  let category = "slot";
  let banners = [
    {
      id: 1,
      src: `${conf.ASSETS}/BetsAmerica/banners/SlotW.png`,
      srcmb: `${conf.ASSETS}/BetsAmerica/banners/SlotM.png`,
    },
  ];
  let brands = [{ name: "", total: "" }];
  let brandSelected = { id: "brands" };
  let brandFilter = {};
  let onlyGames = true;
  let allGames = [];
  let filteredBrands = [];
  let firtsBrands = [];
  let searchFilter = {};
  let brandsNewGames = [];
  let sections = [
    { code: "ALL", name: "Todos los Juegos", total: null },
    { code: "TOP", name: "TOP GAMES", total: null },
    //{ code: "POP", name: "POPULARES", total: null },
    { code: "NEW", name: "NUEVOS", total: null },
    //{ code: "DROP", name: "DROPS & WINS", total: null },
    { code: "CLAS", name: "OTROS JUEGOS", total: null },
  ];
  
  
  onMount(async () => {

    listBrands();
    sectionActive = "ALL";
    let { tipos } = await backend.getGamesTypes(conf.CLIENTID);
    sections =  tipos.filter(objeto => !objeto.code.includes("FAST"));
    listAllGames();

   // let { tipos } = await backend.getGamesTypes(conf.CLIENTID);
   // sections = tipos;
   // onGoTo("ALL");  
//
   // let data = await backend.getBrandList(category);
   // const newGames = await backend.getGameList("slot", "NEW", 1, "USD", 200);
   // brandsNewGames = [...new Set(newGames.map((e) => e.brand))]; //TRAE LOS ELEMENTOS SIN DUPLICADOS
   //  //PONER AL INICIO LOS PROVEEDORES SOLICITADOS
   // data = data.filter((e) => e.name != "Proveedores");
   // filteredBrands = ["Endorphina", "Pragmatic", "Barbara Bang", "Gameart", "Tom Horn Gaming", "Platipus"];
   // const fixedBrands = data.filter(e => filteredBrands.includes(e.name));
   // const noFixedBrands = data.filter(e => !filteredBrands.includes(e.name));
   // brands = fixedBrands.concat(noFixedBrands);
   // console.log("DATA ORDENADA: ", brands);
//
    if (autoSelected && autoSelected.filter == "brand") {
      brandSelected = autoSelected.brand;
      onSelectBrand(autoSelected.brand);
    }
  });

  const listBrands = async () => {
    let data = await backend.getBrandList(category);
    const newGames = await backend.getGameList("slot", "NEW", 1, "USD", 201);
    brandsNewGames = [...new Set(newGames.map((e) => e.brand))];
    data = data.filter((e) => e.name != "Proveedores");
    filteredBrands = ["Endorphina","Pragmatic Play","NoLimitCity","Barbara Bang","Red Tiger","Gameart","Pop Ok Gaming","Ruby Play","Tom Horn Gaming","7777 GAMING","Pascal Gaming","Amigo Gaming"];
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


  const onSelectBrand = async (brand) => {
    if (!brand) {
      return;
    }
    if (brand.code == "brands") {
      sectionActive = "";
      return;
    }
    brandSelected = brand;
    brandFilter = { brand: brand };
    const data = await backend.getGameList(category, brandFilter);
    brandGames = data;
   
    sectionActive = "brand";
    isFinalPageBrand = false;
    pageBrand = 1;
  };

  onDestroy(() => {
    autoSelected = null;
  });

  const cleanFilters = () => {
    searchValue = "";
  };

  const showFavs = async () => {
    cleanFilters();
    if (userState !== "logout") {
      sectionActive = "favs";
    }
  };



  const onGoTo = (section) => {
    sectionActive = "ALL";
    if (section.code == "ALL") {
      sectionActive = "ALL";
      listAllGames();
    }
    if (section.code == "POP") {
      sectionActive = "POP";
      listPopGames();
    }
    if (section.code == "NEW") {
      sectionActive = "NEW";
      listNewGames();
    }
    if (section.code == "RULE") {
      sectionActive = "RULE";
      listRuleteGames();
    }
    if (section.code == "TABL") {
      sectionActive = "TABL";
      listTableGames();
    }
    if (section.code == "MEGAW") {
      sectionActive = "MEGAW";
      listMegawayGames();
    }
    if (section.code == "DROP") {
      sectionActive = "DROP";
      listDropGames();
    }
    if (section.code == "FAST") {
      sectionActive = "FAST";
      listAbilityGames();
    }
    if (section.code == "CLAS") {
      sectionActive = "CLAS";
      listClasGames();
    }
  };
  const listAllGames = async () => {
    const data = await backend.getGameList("slot");
    allGames = data;
    //allGames = data.filter((e) => e.name != "Aviator");
  };
  const listPopGames = async () => {
    const data = await backend.getGameList("slot", "POP");
    popGames = data;
  };
  const listNewGames = async () => {
    const data = await backend.getGameList("slot", "NEW");
    newGames = data;
  };
  const listDropGames = async () => {
    const data = await backend.getGameList("slot", "DROP");
    dropGames = data;
  };
  const listClasGames = async () => {
    const data = await backend.getGameList("slot", "CLAS");
    otherGames = data;
  };
  const listRuleteGames = async () => {
    const data = await backend.getGameList("slot", "RULE");
    ruleteGames = data;
    console.log(ruleteGames);
  };

  const listTableGames = async () => {
    const data = await backend.getGameList("slot", "TABL");
    tableGames = data;
  };

  const listAbilityGames = async () => {
    const data = await backend.getGameList("slot", "FAST");
    abilityGames = data;
  };

  const listMegawayGames = async () => {
    const data = await backend.getGameList("slot", "MEGAW");
    megawayGames = data;
  };
  </script>

<div class="u-slot-page">
  <MenuCategoryPage2 bind:active_view bind:onCategoryChange />
  <BannerCarrusel bind:banners />
  

  <div class="u-sub-slot">
    <div class="in-desktop">
      {#each sections as  section}
          <div class="btn-slot" on:click={()=> onGoTo(section)}>{section.name}</div>
      {/each}
    </div>
      <Search
        bind:active_view
        bind:searchGames
        bind:searchValue
        bind:category
        bind:sectionActive
        bind:onlyGames
      />
      <div class="in-mobile">
        <DropDownButton
          bind:title={brandName.name}
          items={sections}
          onSelectItem={(item) => onGoTo(item)}
        />
      </div>
  

      <div class="content-sss">
        <div class="Ganawin">
          <div class="filters">
            <DropdownSearch bind:dataSearched={brands} {onSelectBrand} {t}/>
          </div>
        </div>  
      <ButtonFav size="large" onClick={showFavs} />
      </div>
    
  </div>
  <!--div class="u-sub-navbar">
    <SlotCategoryMenu  ></SlotCategoryMenu>
  </div-->

  {#if sectionActive == "ALL" }
    <GameList
      {category}
      bind:userState
      title="Juegos"
      prefix="Todos los"
      games={allGames}
      bind:favGames
      {onOpenGame}
      bind:user
    />
  {:else if sectionActive == "POP"}
    <GameList
      id="POP-section"
      bind:category
      section="pop"
      bind:userState
      prefix="Juegos"
      title="Populares"
      games={popGames}
      bind:favGames
      {onOpenGame}                                  
      bind:user
    />
  {:else if sectionActive == "NEW"}
    <GameList
      id="NEW-section"
      bind:category
      section="new"
      bind:userState
      prefix="Juegos"
      title="Nuevos"
      games={newGames}
      bind:favGames
       {onOpenGame}          
      bind:user
    />
  {:else if sectionActive == "DROP"}
    <GameList
      id="DROP-section"
      bind:category
      section="drop"
      bind:userState
      prefix="Drops"
      title=" & Wins"
      games={dropGames}
      bind:favGames
       {onOpenGame}          
      bind:user
    />
  {:else if sectionActive == "CLAS"}
    <GameList
      id="CLAS-section"
      bind:category
      section="clas"
      bind:userState
      prefix="Otros"
      title=" Juegos"
      games={otherGames}
      bind:favGames
       {onOpenGame}          
      bind:user
    />
  {:else if sectionActive == "RULE"}
    <GameList
      id="RULE-section"
      bind:category
      section="rule"
      bind:userState
      prefix="Juegos de"
      title=" Ruleta"
      games={ruleteGames}
      bind:favGames
       {onOpenGame}          
      bind:user
    />
  {:else if sectionActive == "TABL"}
    <GameList
      id="TABL-section"
      bind:category
      section="tabl"
      bind:userState
      prefix="Juegos de"
      title=" Mesa"
      games={tableGames}
      bind:favGames
       {onOpenGame}          
      bind:user
    />
  {:else if sectionActive == "MEGAW"}
    <GameList
      id="MEGAW-section"
      bind:category
      section="mega"
      bind:userState
      title="Megaways"
      games={megawayGames}
      bind:favGames
       {onOpenGame}          
      bind:user
    />
  {:else if sectionActive == "FAST"}
    <GameList
      id="FAST-section"
      bind:category
      section="abil"
      bind:userState
      prefix="Juegos de"
      title=" Habilidad"
      games={abilityGames}
      bind:favGames
       {onOpenGame}          
      bind:user
    />
  {:else if sectionActive == "search"}
    <GameList
      bind:category
      bind:section={searchFilter}
      bind:userState
      title={searchValue.toUpperCase()}
      games={searchGames}
      bind:favGames
       {onOpenGame}          
      bind:user
    />
  {:else if sectionActive == "brand"}
    <GameList
      bind:category
      bind:section={brandFilter}
      bind:userState
      title={brandSelected.toUpperCase()}
      games={brandGames}
      bind:favGames
       {onOpenGame}          
      bind:user
      bind:isFinalPage={isFinalPageBrand}
      bind:page={pageBrand}
    />
  {:else if sectionActive == "favs"}
    <GameList
      bind:category
      bind:userState
      title="FAVORITOS"
      games={favGames}
      bind:favGames
       {onOpenGame}          
      bind:user
    />
  {:else}
    <GameList
      {category}
      bind:userState
      prefix="Todos los"
      title="Juegos"
      games={allGames}
      bind:favGames
      {onOpenGame}
      bind:user
    />
  {/if}
</div>

<style>
  .btn-slot {
    display: flex;
    justify-content: center;
    background-color: transparent;
    border: 1px solid #bc001e;
    color: white;
    font-size: 12px;
    font-weight: bold;
    border-radius: 10px;
    cursor: pointer;
    align-items: center;
    text-align: center;
    padding: 0.5rem;
    background-color: #353940;
    height: 3rem;
}
.in-desktop{
    display: flex;
    gap: 0.5rem;
    overflow: auto;
    white-space: pre;
}
    @media only screen and (min-width: 1024px) {
      
        .in-desktop {
      display: none;
      }
      .content-sss{
        display: contents;
      }
      }

      @media only screen and (max-width: 1022px) {
        .in-mobile {
          display: none;
        }
        .content-sss{
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.5rem;
          align-items: center;
        }
      }
  @media only screen and (max-width: 1023px) {
    .u-sub-slot {
      display: grid;
     /* grid-template-columns: 1fr 1fr; */
      gap: 0.5rem;
      position: relative;
      margin: 0.5rem 1rem;
      align-items: center;
    }
    
  }
  @media only screen and (min-width: 1024px) {
    
    .u-sub-slot {
      position: relative;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      margin: 1rem 1rem 0 1rem;
      align-items: center;
      gap: 1rem;
    }
  }
  @media only screen and (min-width: 1800px) {
    .u-sub-slot {
    padding: 0 12rem;
    }
  }
</style>
