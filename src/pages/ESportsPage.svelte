<script>
  // @ts-nocheck
  //https://test.apiuniversalsoft.com/api/launch?gameid=1002&p=ho&b=UniversalRace&m=wb&sessionid=80bd03b3b056e9fac1967e114e5689ac7ec6a57063960789ec165917464b72816c6f48e6c281520fb9d48411c2c12eaa9535740132cc299bc10d4f76682d1ad6
  import MenuCategoryPage from "../lib/components/Menu/MenuCategoryPage.svelte";
  import ut from "../js/util"
  import { onDestroy, onMount } from "svelte";
  import backend from "../server.js";

  export let gameUrl = "";
  export let onOpenGame;
  export let onCategoryChange;
  export let active_view
  export let user

  
  onOpenGame({
    gameid: 'sportsbookbeter',
    provider: "bt",
    brand: "Beter",
    mode: ut.isMoble() ? "mb" : "wb",
  });

  onDestroy(async () => {
    let chatModal = document.getElementById("chat-application");
    chatModal.style.display="block";
    let data = await backend.getBalance(user.agregatorToken);
    user.balance = data.balance;
  })
  
</script>

<div class="esports-content">
  <MenuCategoryPage bind:active_view bind:onCategoryChange></MenuCategoryPage>
  {#if gameUrl != ""}
    <iframe class="esports-iframe" id="esports-iframe" title="" src={gameUrl} frameborder="0" />
  {/if}
</div>

<style>
  @media only screen and (max-width: 1200px) {
  .esports-content{
    width: 100%;
  }
  .esports-iframe {
    height: calc(100vh - 14.9vh);
    width: 100vw;
  }
}

@media only screen and (min-width: 1200px) {
  .esports-content{
    width: 100%;
  }
  .esports-iframe {
    height: calc(100vh - 120px) !important;
    width: 100vw;
  }
}
</style>
