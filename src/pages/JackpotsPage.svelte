<script>
  // @ts-nocheck
  import BannerCarrusel from "../lib/BannerCarrusel.svelte";
  import Configuration from "../config";
  import MenuCategoryPage from "../../src/lib/components/Menu/MenuCategoryPage.svelte";
  import util from "../js/util";

  export let active_view

  let banners = [{ id: 1, src: "{conf.ASSETS}/banners/GOLDEN/vitual_game/virtualgame.png" }];

  const onCategoryChange=(cat)=>{
    active_view=cat
    console.log("active", active_view)
    util.setUrlPage(active_view)
  }
  
</script>

<div class="home-page">
  <BannerCarrusel bind:banners />
  <MenuCategoryPage bind:active_view onCategoryChange={(view)=>onCategoryChange(view)}/>
</div>

<style>
  @media only screen and (max-width: 1200px)  {
    *{
      background: #181824;
    }
  }
  @media only screen and (max-width: 1200px) and (orientation: landscape) {
    *{
      background: #181824;
    }
  }
  @media only screen and (min-width: 1200px) { }
</style>
