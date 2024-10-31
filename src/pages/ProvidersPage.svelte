<script>
  // @ts-nocheck
  import ProvidersList from "../lib/components/Lists/ProvidersList.svelte"
  import backend from "../server.js"
  import { onMount } from "svelte";

  export let active_view
  export let userState;
  export let onOpenProviders;
  
  let providers = []
  let brandsNewGames=[];
  
  onMount(async () => {
    const newGames = await backend.getGameList("slot", "NEW", 1, "USD", 200)
    brandsNewGames =  [... new Set ( newGames.map( e=>e.brand ) )]; //TRAE LOS ELEMENTOS SIN DUPLICADOS
  })

  const openProviders = (provider) => {
    onOpenProviders(provider);
  };

  const getBrands=async()=>{
    let data=await backend.getBrandList("all")
    data = data.filter(e => (e.name != 'Digtain Sports Book' && e.name != 'UniversalSoft' && e.name != 'Table_games' && e.name != 'Unknow'))
    providers=data;
    providers.shift();
  }

  getBrands()

</script>

<div class="u-main">
  <h2>PROVEEDORES</h2>
  <div class="u-icon-return">
    <button class="u-btn-return" on:click={() => (active_view = "home")}>
      <svg
        fill="white"
        xmlns="http://www.w3.org/2000/svg"   
        viewBox="0 0 448 512">
      <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
    </svg>
    </button>
  </div>
  <div class="u-main-wrapp">
    <ProvidersList
      bind:userState
      bind:providers
      onSelect={openProviders}
      bind:newProviders={brandsNewGames}
    />
  </div>
</div>

<style>

  @media only screen and (max-width: 1200px) {
    .u-btn-return{
      text-decoration: none;
      cursor: pointer;
      background: transparent;
      border: none;
    }
    .u-main{
      background-color: #181824;
    }
    .u-main-wrapp{
      padding-right: 2rem;
      padding-left: 2rem;
    }
    h2{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .u-icon-return{
      cursor: pointer;
      padding-left: 1rem;
    }
    .u-icon-return svg{
      width: 25px;
    }

  }
  @media only screen and (min-width: 1200px) {
    .u-btn-return{
      text-decoration: none;
      cursor: pointer;
      background: transparent;
      border: none;
    }
    .u-main{
      background-color: #181824;
    }
    .u-main-wrapp{
      padding-right: 15rem;
      padding-left: 15rem;
    }
    h2{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .u-icon-return{
      padding-left: 6rem;
      cursor: pointer;
    }
    .u-icon-return svg{
      width: 35px;
    }
  }

</style>
