<script>
  // @ts-nocheck
  import { onDestroy, onMount } from "svelte";
  import backend from "../server"
  //https://test.apiuniversalsoft.com/api/launch?gameid=1002&p=ho&b=UniversalRace&m=wb&sessionid=80bd03b3b056e9fac1967e114e5689ac7ec6a57063960789ec165917464b72816c6f48e6c281520fb9d48411c2c12eaa9535740132cc299bc10d4f76682d1ad6
  export let user;
  export let active_view;
  export let onCategoryChange;
  import MenuCategoryPage from "../lib/components/Menu/MenuCategoryPage.svelte";
  
  document.body.style.overflow="hidden"

  let base_url = "https://universalrace.net/new/cliente_api/apisoft_home.php?";
  let url ="";

  onMount(async () => {
    //let chatModal = document.getElementById("chat-application");
    //chatModal.style.display="none";
    let data = await backend.getBalance(user.agregatorToken);
    //user.balance = data.balance;
    url = base_url + `tk=${user.token}&ba=${user.balance} ` + `&lang=es&theme=Babieca`
  });

  onDestroy(async () => {
    //let chatModal = document.getElementById("chat-application");
    //chatModal.style.display="block";
    let data = await backend.getBalance(user.agregatorToken);
    user.balance = data.balance;
  })

</script>

<div class="horses-content">
  <!-- <MenuCategoryPage bind:active_view bind:onCategoryChange></MenuCategoryPage> -->
  <iframe class="horse-iframe" id="horse-iframe" title="" src={url} frameborder="0" />
</div>

<style>
  .horses-content{
    z-index: 10;
    position: relative;
  }
  @media only screen and (max-width: 1200px) {
  .horses-content{
    width: 100%;
    
  }
  .horse-iframe {
    /*height: calc(100vh - 15vh);*/
    width: 100vw;
    height:86.8vh;
  }
}
@media only screen and (min-width: 1200px) {
  .horses-content{
    width: 100%;
  }
  .horse-iframe {
    /*height: calc(100vh - 120px) !important;*/
    width: 100vw;
    height:89.8vh;
  }
}


</style>
