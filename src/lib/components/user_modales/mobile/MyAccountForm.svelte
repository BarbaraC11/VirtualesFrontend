<script>
// @ts-nocheck

  import MyDataMobile from "./MyDataMobile.svelte";
  import SecurityMobile from "./SecurityMobile.svelte";
  import VerificationMobile from "./VerificationMobile.svelte";
  import EventManager from "../../../../js/EventManager";


  export let open = false;
  export let onClosed;
  export let user;

  let active_section="MyData"

  const modalClose = (data) => {
    open = false;
    if (onClosed) {
      onClosed(data);
    }
  };

  const onSaveProfile=(status, error)=>{
    if(status=='ok'){
      EventManager.publish("notify", {mode:"success", msg:"Cambios guardados correctamente"});
    }else{
      EventManager.publish("notify", {mode:"error", msg:error});
    }
  };

  const onChangePassword=(status, error)=>{
    if(status=='ok'){
      EventManager.publish("notify", {mode:"success", msg:"Cambios guardados correctamente"});
    }else{
      EventManager.publish("notify", {mode:"error", msg:error});
    }
  };
</script>

<div class="u-form-main">
  <div class="u-options My-acount">
    <div class="u-buttons-options">
      <button class="opc {active_section=='MyData'?'u-opc-select':''}"  on:click={()=>{ active_section="MyData" }}>
        <span>Mis Datos</span>
      </button>
      <button class="opc {active_section=='Security'?'u-opc-select':''}"  on:click={()=>{ active_section="Security" }}>
        <span>Cambio de contraseña</span>
      </button>
      <button class="opc {active_section=='Verification'?'u-opc-select':''}" on:click={()=>{ active_section="Verification" }}>
        <span>Verificación</span>
      </button>
    </div>
    <div class="u-content-info">
      <div>
        {#if active_section =="MyData"}               
          <MyDataMobile bind:user onSubmitted={(status, error) => onSaveProfile(status, error)}  />
        {/if}
        {#if active_section =="Security"}
          <SecurityMobile bind:user onSubmitted={(status, error) => onChangePassword(status, error)}/>
        {/if}
        <!--
          {#if active_section =="Verification"}   
            <VerificationMobile/>
          {/if}
        -->
      </div>
    </div>
  </div>
</div>

<style>
  button{
    cursor: pointer;
  }
  .u-opc-select{
    background-color: rgb(184, 219, 206);
  }
  .u-buttons-options{
    display: flex;
    flex-direction: row;
    font-size: 0.8rem;
    padding: 0.5rem;
    gap: 0.5rem;
  }
  .opc{
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    width: 8rem;
    padding: 0.5rem;
    border-radius: 1rem;
    height: 1.8rem;
  }

</style>
