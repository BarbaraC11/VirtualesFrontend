<script>
  import { fade, fly } from "svelte/transition";
  
  export let open;
  export let modalSize = "medium";
  export let showCloseButton = true;
  
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
  <div
    class="u-modal-container u-modal-{modalSize}"
    transition:fly={{ y: -50, duration: 500 }}
  >
    {#if showCloseButton}
      <button class="u-close"  on:click={()=>open=false}>X</button>
    {/if}

    <slot />
  </div>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="u-backdrop"  on:click={()=>open=false}/>
{/if}

<style>
@media only screen and (max-width: 1200px) {
  .u-modal-container {
    /*overflow-y: scroll;*/
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    height: 90%;
    z-index: 100;
  }
  .u-close {
    height: 24px;
    text-align: center;
    position: fixed;
    top: 8px;
    left: 101%;
    border: none;
    background: #bc001e;
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
  .u-modal-container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 80%;
    z-index: 100;
  }
  .u-modal-medium {
    width: 850px;
  }

  .u-close {
    height: 24px;
    text-align: center;
    position: fixed;
    top: 8px;
    left: 96%;
    border: none;
   background: #bc001e;
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
