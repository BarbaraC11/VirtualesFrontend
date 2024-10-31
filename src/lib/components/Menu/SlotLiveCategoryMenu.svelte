<script>
  import ButtonFav from "../Buttons/ButtonFav.svelte";
  import DropDownButton from "../DropDowns/DropDownButton.svelte";
  import Search from "../Search.svelte";
  import Configuration from "../../../config";


  export let megawheelGames;
  export let baccGames;
  export let rouletteGames;
  export let blackjackGames;
  export let lotteryGames;
  export let sicboGames;
  export let showsGames;
  export let onGoTo
  export let brands;
  export let brandSelected;
  export let onSelectBrand;
  export let searchGames
  export let active_view
  export let searchValue
  export let category
  export let sectionActive;
  export let onlyGames
  export let showFavs
  export let providerName

  const conf = Configuration.getConfiguration();
  import { onMount } from 'svelte';
    onMount(()=>{
      onGoTo("ALL")
    });
</script>

<div class="u-main-nav-slot">
  <div class="u-nav-slot">
    <div class="buttons-menu">
      <button on:click={()=>onGoTo("ALL")} class="btn btn-outline-primary"> <svg fill="white" height="25px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>TODOS</button>
      {#if rouletteGames.length >0}  
        <button on:click={()=>onGoTo("RLIV")} class="btn btn-outline-primary"><img src="https://d2zzz5z45zl95g.cloudfront.net/us_img_slot_live/RULETA VIVO.png" alt="">ROULETTE</button>
      {/if}
      {#if blackjackGames.length >0} 
        <button on:click={()=>onGoTo("BJLIV")} class="btn btn-outline-primary"><img src="https://d2zzz5z45zl95g.cloudfront.net/us_img_slot_live/BJ LIVE.png" alt="">BLACKJACK</button>
      {/if}
      {#if baccGames.length >0} 
        <button on:click={()=>onGoTo("BACC")} class="btn btn-outline-primary"><img src="https://d2zzz5z45zl95g.cloudfront.net/us_img_slot_live/BACCARAT.png" alt="">BACCARAT</button>
      {/if}
      {#if megawheelGames.length > 0}
        <button on:click={()=>onGoTo("MWLIV")} class="btn btn-outline-primary"><img src="https://d2zzz5z45zl95g.cloudfront.net/us_img_slot_live/MEGAWHEEL.png" alt="">MEGAWHEEL</button>
      {/if}
      {#if lotteryGames.length >0}
        <button on:click={()=>onGoTo("LOTTO")} class="btn btn-outline-primary"><img src="https://d2zzz5z45zl95g.cloudfront.net/us_img_slot_live/LOTTERY.png" alt="">LOTERIA</button>
      {/if}
      {#if sicboGames.length > 0}
        <button on:click={()=>onGoTo("SICBO")} class="btn btn-outline-primary"><img src="https://d2zzz5z45zl95g.cloudfront.net/us_img_slot_live/SICBO.png" alt="">SICBO</button>
      {/if}
      {#if showsGames.length >0}
        <button on:click={()=>onGoTo("TVLIV")} class="btn btn-outline-primary"><img src="https://d2zzz5z45zl95g.cloudfront.net/us_img_slot_live/TV.png" alt="">GAME SHOWS</button>
      {/if}
    </div>
    <div class="u-dropdown-opc">
      <div  class="xddd3">
        <Search 
        bind:active_view
        bind:searchGames
        bind:searchValue
        bind:category
        bind:sectionActive
        bind:onlyGames
      />
      </div>
      <div class="xddd3"></div>
      <DropDownButton size="small" bind:title={providerName}  bind:items={brands} onSelectItem={(item)=>onSelectBrand(item)} bind:value={brandSelected.id} ></DropDownButton>
      <ButtonFav on:click={showFavs}></ButtonFav>

    </div>
  </div>
</div>

<style>
  .u-dropdown-opc,.buttons-menu{
    position: relative;
  }
  @media only screen and (max-width: 1023px) {
    .u-nav-slot{
      background-color: #262633;
      display: flex;
      flex-direction: column;
    }
    .xddd3{
      display: none;
    }
    .u-dropdown-opc{
      margin: 0.5rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      justify-content: center;
      gap: 0.25rem;
      width: 95%;
    }
    .buttons-menu{
        display: flex;
        gap: 5px;
        padding-left: 0.5rem;
        margin-top: 5px;
        overflow-x: scroll;
    }
    .buttons-menu::-webkit-scrollbar{
        background-color: #c6ac29;
        border-radius: 5px;
        height: 0.2rem;
    }
    .btn{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        border: 1px solid #a30a21;
        color: white;
        font-size: 12px;
        font-weight: bold;
        border-radius: 10px;
        width: 500px;
        cursor: pointer;
    }
  }
  @media only screen and (min-width: 1024px) {
    .u-main-nav-slot{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .u-nav-slot{
      display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 98%;
    font-family: montserrat;
    }
    .buttons-menu{
      display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    width: 100%;
    margin: 0.5rem;
    }
    .btn{
        display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: #3a3a48;
      border: 3px solid #181824;
      color: white;
      font-size: 12px;
      cursor: pointer;
      gap: 0.25rem;
      width: 100%;
      border-radius: 10px;
      padding: 0.5rem;
    }
    .u-dropdown-opc{
      padding: 0 0.5rem;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      align-items: center;
      justify-content: space-around;
      gap: 0.5rem;
      width: 100%;
 
    }
  }
  @media only screen and (min-width: 1800px) {
    .u-nav-slot{
      padding: 0 12rem;
    }
  }
</style>
