<script>
// @ts-nocheck
  import EventManager from "../../../../js/EventManager";
  import BalanceDesktop from "./BalanceDesktop.svelte";
  import MyDataDesktop from "./MyDataDesktop.svelte";
  import PromotionsDesktop from "./PromotionsDesktop.svelte";
  import RecordDesktop from "./RecordDesktop.svelte";
  import SecurityDesktop from "./SecurityDesktop.svelte";
  import VerificationDesktop from "./VerificationDesktop.svelte";
  export let onShowWithdrawalSMS;

  export let user;
  export let open;
  export let onOpenWithdrawal;
  export let onOpenDeposit;
  let icon = true; 
  let active_section="balance"
  let active_option="MyProfile"

  const closeModal = () => {
    console.log("cerrando modal");
    open = false;
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
      EventManager.publish("notify", {mode:"error", msg:"Error al guardar"});
    }
  };
 
  const copyCodeWhitdrawallUserId = () => {
      icon = false;
    setTimeout(() => {
      icon = true; // Cambiar al primer icono después de 2 segundos
    }, 2000);
    const copyUser = "Usuario: " + user.username + ", ";
    const copyId = "Id: " + user.id;
  
    const finalMessage = copyUser + copyId;
    //navigator.clipboard.writeText(pendingWhitdrawall.codigo);
    navigator.clipboard.writeText(finalMessage);
  };

   // Variable de estado para almacenar el nombre del icono actual

  let detectDocument;
   setTimeout(() => {
    detectDocument = user.document;
   }, 1000);
</script>
<div class="u-main-content">
      <div class="principal-content">
      <div class="profile-user">
        <img class="usericon1 s-pLY60ePxNKjT" src="https://assetsapiusoft.s3.us-west-2.amazonaws.com/BetsAmerica/ICON.png" alt="">
        <span>Mi cuenta</span>
      </div>
      <div class="user-data">
        <span>{user.username} #{user.id}</span>
        <button style="background-color: transparent; cursor:pointer" title="Copiar Código" class="u-copyCode" on:click={copyCodeWhitdrawallUserId}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M10 8V7C10 6.05719 10 5.58579 10.2929 5.29289C10.5858 5 11.0572 5 12 5H17C17.9428 5 18.4142 5 18.7071 5.29289C19 5.58579 19 6.05719 19 7V12C19 12.9428 19 13.4142 18.7071 13.7071C18.4142 14 17.9428 14 17 14H16M7 19H12C12.9428 19 13.4142 19 13.7071 18.7071C14 18.4142 14 17.9428 14 17V12C14 11.0572 14 10.5858 13.7071 10.2929C13.4142 10 12.9428 10 12 10H7C6.05719 10 5.58579 10 5.29289 10.2929C5 10.5858 5 11.0572 5 12V17C5 17.9428 5 18.4142 5.29289 18.7071C5.58579 19 6.05719 19 7 19Z" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" /></svg>
        </button>
      </div>
      <div class="user-options">
        <div class="money-user ss u-form-control"><span>Saldo:</span> <span>{user.balance} {user.currency}</span></div>
        <div class="u-form-control money-user ss"><span>Bono:</span> <span>{user.bonus_sumTotal || 0} {user.currency}</span> </div>
        <!-- <div class="u-button-transfer">
          {#if user.id_ca == "6681"}
          <button class="u-form-control btn-w" style="cursor: pointer;display: flex;    justify-content: center;" on:click={onOpenWithdrawal} disabled={!detectDocument}>
            {#if !detectDocument}
            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 14.5V16.5M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            {/if}
            <span>Retiro</span>
          </button>
          <button class="u-form-control money-user" style="cursor: pointer; background-color:#00BD71" on:click={onOpenDeposit}>
            <span> Depósito</span>
          </button>
          {:else}
          <button class="u-form-control btn-w" style="cursor: pointer;display: flex;    justify-content: center;" on:click={onShowWithdrawalSMS}>
            <span>Retiro</span>
          </button>
          <button class="u-form-control money-user" style="cursor: pointer; background-color:#00BD71" on:click={onShowWithdrawalSMS}>
            <span> Depósito</span>
          </button>
          {/if}
        </div> -->
        <!-- {#if user.id_ca == "6681"}
        {#if !detectDocument }
          <div class="import_uu">
            <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75Z" fill="#00D2E4"/>
              <path d="M12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z" fill="#00D2E4"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75Z" fill="#00D2E4"/>
              </svg>
              <span> Recuerda que para acceder al retiro, tienes que completar tus datos personales.</span>
          </div>
        {/if}
        {/if} -->
      </div>
      <div class="user-options">
        <button on:click={()=>{active_option="MyProfile"}} class=" {active_option=='MyProfile'?'u-opt-select':''}">Mi perfil</button>
      </div>
      <div class="user-options">
        <button on:click={()=>{active_option="MyRecord"}} class=" {active_option=='MyRecord'?'u-opt-select':''}">Historial</button>
      </div>
    </div>

    <div class="content-info">
      {#if active_option=="MyProfile" }
        <div class="u-options My-acount">
          <div class="navegation-filters">
            <button class="opc  {active_section=='balance'?'u-opc-select':''}" on:click={()=>{ active_section="balance" }}>
              <span>Saldo</span>
            </button>
            <button class="opc  {active_section=='MyData'?'u-opc-select':''}" on:click={()=>{ active_section="MyData" }}>
              <span>Mis Datos</span>
            </button>
            <button class="opc  {active_section=='Security'?'u-opc-select':''}" on:click={()=>{ active_section="Security" }}>
              <span>Cambio de contraseña</span>
            </button>
          </div>
          <div class="u-content-info">
            {#if active_section =="balance"}
              <BalanceDesktop bind:user  />
            {:else if active_section =="MyData"}
              <MyDataDesktop bind:user onSubmitted={(status, error)=> onSaveProfile(status, error)}/>
            {:else if active_section =="Security"}
              <SecurityDesktop bind:user onSubmitted={(status, error)=> onChangePassword(status, error)}/>
            {/if}
          </div>
        </div>
        {/if}
        {#if active_option=="MyRecord" }
          <div class="u-content-info">
            <RecordDesktop bind:user></RecordDesktop>
          </div>
        {/if}
    </div>
</div>



<style>
  .import_uu{
    font-size: 10px;
    padding: 0.5rem;
    font-weight: 600;
    border-radius: 0.25rem;
    color: #00D2E4;
    border: 1px solid;
    display: flex;
    gap: 0.5rem;
  }
  button{
    cursor: pointer;
    background-color: transparent;
    border: none;
    color: white;
  }
  .u-main-content{
    display: grid;
    grid-template-columns: 30% 70%;
    height: 55vh;
    border-radius: 0.5rem;
  }
  .principal-content{
    background-color: rgb(29, 27, 27);
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    border-radius: 0.5rem 0 0 0.5rem;
  }
  .content-info{
    background-color:white;
    padding: 0.5rem;
    border-radius: 0 0.5rem  0.5rem 0;
  }
  .profile-user{
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.3em;
  }
  .user-data, .user-options{
    background-color: #262633;
    padding: 0.5rem;
    border-radius: 0.3rem;
    color: white;
    display: flex;
  }
  .user-options{
    flex-direction: column;
    gap: 0.5rem;
  }
  .money-user{
    background-color: #bc001e;
    color: white;
    border: none;
  }
  .money-user.ss{
    background-color:  #6f6f6f;
  }
  .u-button-transfer{
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
  }
  .usericon1{
    width: 1.5rem;
    border-radius: 0.25rem;
    
  }
  .navegation-filters{
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
  }
  .opc{
    background-color: #bc001e;
    padding: 0.5rem;
    border-radius: 0.3rem;
  }
  .u-opt-select{
    padding: 0.3rem;
  }
  .opc:hover, .u-opc-select, .u-opt-select{
    background:#bc001e;
  }

  
</style>
