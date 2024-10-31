<script>
  import MenuCategoryPage2 from "../lib/components/Menu/MenuCategoryPage2.svelte";
  import { onDestroy, onMount } from "svelte";
  import backend from "../server.js";
  import ut from "../js/util"
  import Configuration from "../config";
  import MenuCategoryPage from "src/lib/components/Menu/MenuCategoryPage.svelte";

  export let userState;
  export let sportbookGameUrl = "";
  export let onOpenGame;
  export let onCategoryChange;
  export let active_view
  export let user;
  export let loginModalOpen;
  let page;
  let deviceiframe = ut.isMoble() ? "mb" : "wb";
  let conf = Configuration.getConfiguration();

  const baseUrlDigtain = `https://apiuniversalsoft.com/api/e-digtain/init?t=-&lang=es&gameid=8042022_digitain&m=${deviceiframe}`

  onMount(()=>{
    window.addEventListener("message", receiveMessage, false);
  })

  if (userState == "logout") {
    sportbookGameUrl = baseUrlDigtain;
    if(active_view == 'sportbooklive') sportbookGameUrl += (active_view == 'sportbooklive')?'&currentgame=live':'';
  }

  const receiveMessage =  (event) =>{
    console.log("Ingreso a Message", event, event.data);
    if (event.data == 'onNologinBet'){
      loginModalOpen = true;
    }
  }
  
  document.body.style.overflow="hidden"

  onOpenGame({
    gameid: "8042022_digitain",
    provider: "edg",
    brand: "Digtain Sports Book",
    mode: ut.isMoble() ? "mb" : "wb",
    page:active_view
  });


  



  onDestroy(async () => {
    //let chatModal = document.getElementById("chat-application");
    //chatModal.style.display="block";
    let data = await backend.getBalance(user.agregatorToken);
    user.balance = data.balance;
  })

</script>

<div class="sportbook-content">
  <MenuCategoryPage bind:active_view bind:onCategoryChange/>
  {#if sportbookGameUrl != ""}
    <iframe class="sportbook-iframe" id="sportbook-iframe" title="" src={sportbookGameUrl} frameborder="0" />
  {/if}
</div>

<style>
  .sportbook-iframe{
    position: relative;
    z-index: 10;
  }
  @media only screen and (max-width: 1200px) {
    .sportbook-content {
      margin-top: -0.1rem;
      width: 100%;
    }
    .sportbook-iframe {
      height: calc(100vh - 21vh);
      /*height: calc(100vh - 156px) !important;*/
      width: 100%;
    }
  }
  @media only screen and (min-width: 1200px) {
    .sportbook-content{
      width: 100vw;
    }
    .sportbook-iframe {
      width: 100vw;
      height: calc(100vh - 157px) !important;
    }
  }
  /* ff */
</style>
