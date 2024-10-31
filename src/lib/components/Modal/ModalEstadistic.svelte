<script>
  import { fade, fly } from "svelte/transition";
  import Configuration from "../../../config";
  export let open;
  export let modalSize = "medium";
  export let showCloseButton = true;
  const conf = Configuration.getConfiguration();
  const calculateClose=(isOpen)=>{
    if(isOpen){
      document.body.style.overflowY = "hidden"
    }else{
      document.body.style.overflowY = "scroll"
    }
    return true
  }
  $:calculateClose(open)

</script>

{#if open}
  <div class="u-modal-container u-modal-{modalSize}"transition:fly={{ y: -50, duration: 500 }}>
    {#if showCloseButton}
      <button class="u-close"  on:click={()=>open=false}>X</button>
    {/if}
    <div class="modal_body">
      <div class="oculer">
        <img class="logo s-UZkFnn52iS_d" src="https://assets.apiusoft.com/BetsAmerica/logo.png" alt="">
      </div>
      <iframe src="https://s5.sir.sportradar.com/firstbet/es" width="100%" height="100%" frameborder="0"></iframe>
    </div>
  </div>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="u-backdrop"  on:click={()=>open=false}/>
{/if}

<style>
  .oculer{
    position: absolute;
    width: 13.5rem;
    height: 4rem;
    padding: 0.5rem;
    left: 1.1rem;
    background: #2e3541;
    display: flex;
    justify-content: center;
    border-radius: 0 0 10px 10px;
    align-items: center;
  }
  .oculer img{
    width: 9rem;
  }
  .modal_body{
    background-color: #000;
    color: #fff;
    padding: 1rem;

    display: grid;
    justify-items: center;
    border-radius: 0.25rem;
    border: 1px solid #ff0;

  }


@media only screen and (max-width: 1023px) {

  .modal_body{
      padding: 1rem;
      height: -webkit-fill-available;
  }
  .modal_body img{
    height: 25vh;
  }

  .u-modal-container {
    /*overflow-y: scroll;*/
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    z-index: 100;
  }
  .oculer {
    height: 2.55rem;
    padding: 0;
    width: 11.5rem;
    border-radius: 0 0 5px 5px;

}
.oculer img {
    height: 3.5rem;

}
  .u-close {
    height: 24px;
    text-align: center;
    position: fixed;
    top: 8px;
    left: 90%;
    border: none;
    background: #BD992A;
    color: black;
    width: 24px;
    height: 27px;
    font-size: 28px;
    font-weight: 800;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    cursor: pointer;
  }

  .u-backdrop {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 98%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 99;
  }
}
@media only screen and (min-width: 1200px) {
  .modal_body{
    height: calc(100vh - 15rem);
  }

  .u-modal-container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1199px;
    height: 80%;
    z-index: 100;
  }


  .u-close {
    height: 24px;
    text-align: center;
    position: fixed;
    top: 8px;
    left: 97%;
    border: none;
   background: #BD992A;
    color: black;
    width: 24px;
    height: 27px;
    font-size: 28px;
    font-weight: 800;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    cursor: pointer;
  }

  .u-backdrop {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 99;
  }
}
</style>
