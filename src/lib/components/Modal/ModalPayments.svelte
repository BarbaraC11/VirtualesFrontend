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
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 90%;
    z-index: 100;
  }
  .u-modal-small {
    width: 400px;
  }
  .u-modal-medium {
    width: 350px;
  }

  .u-close {
    content: "x";
    font-weight: 800;
    font-size: 18px;
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
    backdrop-filter: blur(10px);
    z-index: 99;
  }
}
@media only screen and (min-width: 1200px) {
  .u-modal-container {
    position: fixed;
    top: 50%;
    left: 50%;
    height: auto;
    transform: translate(-50%, -50%);
    z-index: 100;
    max-width: 30%;
  }
  .u-modal-small {
    width: 450px;
  }

  .u-close {
    text-align: center;
    position: fixed;
    top: 8px;
    left: 90%;
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
    width: 100vw;
    height: 100vh;
    backdrop-filter: blur(10px);
    z-index: 99;
  }
}
</style>
