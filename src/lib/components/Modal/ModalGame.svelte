<script>
  import { fade, fly } from "svelte/transition";
  
  export let url_game;
  export let onCloseModal
  export let active_view;
  export let userState;
   document.body.style.overflowY = "hidden"
  const closeModal = async () => {
    //let chatModal = document.getElementById("chat-application");
    //chatModal.style.display="block";
    url_game = "";
    //const data = await backend.getBalance();
    document.body.style.overflowY = "scroll"
    onCloseModal()
  };

</script>

<div class="u-container {active_view=='virtual' && userState != 'logout'?'virtual':''}" transition:fly={{ y: -50, duration: 500 }}>
  <div class="u-container-header">
    <div class="header-close" on:click={closeModal}>
      
    <svg width="30px" height="30px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0z"/></svg>
    </div>
    <img width="120px" height="45px" class="logo" src="https://assets.apiusoft.com/BetsAmerica/logo.png" alt="" />
    <div></div>
  </div>
  
  {#if url_game != ""}
    <iframe 
      class="iframe-size"
      src={url_game}
      frameborder="0"
      title=""
      />
      {/if}
      <!--div class="game-header">
        <button class="close" >X</button>
      </div-->
    </div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="backdrop" on:click={closeModal}/>

<style>
  .header-close{
    cursor: pointer;
  }
.u-container-header{
  display: grid;
    grid-template-columns: 5rem 1fr 5rem;
    align-items: center;
    justify-items: center;
}

    .iframe-size{
      width:100%;
       height:calc(100vh - 3rem); 
       border:none;
  }
  .u-container{
    display: grid;
    grid-template-rows: 3rem calc(100vh - 3rem);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    z-index: 1010;
  }
@media only screen and (max-width: 1200px) {
  /*.u-container.virtual{
    top: 54.3%;
    height: 91%;
  }*/
  .game-header{
    height: 4vh;
    background: #181824;
    display: flex;
    justify-content: flex-end;
  }

  .close {
    border: none;
    background: #bc001e;
    position: absolute;
    color: black;
    font-size: 1rem;
    font-weight: 800;
    aspect-ratio: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    cursor: pointer;
    padding: 0 0.5rem;
    height: 3.7vh;
  }

  .backdrop {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background: rgb(38, 38, 46);
    z-index: 101;
  }
}
@media only screen and (max-width: 1200px) and (orientation: landscape) {
  .game-header {
    height: 4vw;
}
.close {
    height: 3.9vw;
  }
}
@media only screen and (min-width: 1200px) {
  /*.u-container.virtual{
      top: 53%;
      height: 94%;
  }*/
  /*.u-container{
    display: flex;
    flex-direction: row;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    height: 90%;
    z-index: 100;
  }*/
  .close {
    border: none;
    position: absolute;
    background: #bc001e;
    color: black;
    width: 2.2rem;
    height: 2.2rem;
    font-size: 25px;
    font-weight: 700;
    cursor: pointer;
    border-radius: 100%;
  }

  .backdrop {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    /*background: rgba(0, 0, 0, 0.932);*/
    background: rgb(38, 38, 46);
    z-index: 99;
  }
}
</style>
