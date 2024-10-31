<script>
  import { afterUpdate, beforeUpdate } from "svelte";
  import { fade, fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  export let open;
  export let modalSize = "medium";
  
  beforeUpdate(() => {
    if (open) {
      document.body.classList.add("fixed-scroll");
    }
  });


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

    <slot />
  </div>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="u-backdrop" on:click={()=>open=false}/>
{/if}

<style>
@media only screen and (max-width: 1200px) {
  .u-modal-container {
    /*overflow-y: scroll;*/
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    z-index: 100;
  }
  .u-modal-small {
    width: 300px;
  }
  .u-modal-medium {
    width: 300px;
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
@media only screen and (min-width: 1200px) {
  .u-modal-container {
    position: fixed;
    top: 41%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 80%;
    z-index: 100;
  }
  .u-modal-small {
    width: 450px;
  }
  .u-modal-medium {
    width: 850px;
  }

  .u-close {
    font-weight: 800;
    font-size: 22px;
    height: 24px;
    text-align: center;
    position: fixed;
    top: 8px;
    left: 90%;
    border: none;
    background: #bc001e;
    color: white;
    width: 25px;
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
    background: rgba(4, 4, 4, 0.932);
    z-index: 99;
  }
}
</style>
