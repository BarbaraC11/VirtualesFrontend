<script>
  import { onMount } from "svelte";
// @ts-nocheck
  import MyAccountForm from "./MyAccountForm.svelte";
  import RecordMobile from "./RecordMobile.svelte";
  
  export let userState;
  export let user = {};
  export let open;
  export let onLogout;
  export let onOpenWithdrawal;
  export let onOpenDeposit;
  export let onShowWithdrawalSMS;
  let icon = true; 
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



  let isDropdownOpen = false;
  
  function toggleDropdown() {
    isDropdownOpen = !isDropdownOpen;
  }
  
  onMount(() => {
    function handleClickOutside(event) {
      if (!event.target.closest('.dropdown')) {
        isDropdownOpen = false;
      }
    }
    
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });
  let detectDocument;
   setTimeout(() => {
    detectDocument = user.document;
   }, 1000);

   function openMessage() {

   }
</script>

<div class="profile-content">
  <div class="u-col-form">
    <div class="u-icon-user">
      <div class="">
        <img class="usericon1 s-pLY60ePxNKjT" src="https://assetsapiusoft.s3.us-west-2.amazonaws.com/BetsAmerica/icon/Perfil.png" alt="">
      </div>
      <span>Mi Cuenta</span>
      
    </div>
  </div>
  <div class="u-col-form u-date">
    <span>{user.username}</span>
    <span>#{user.id}</span>
    {#if icon}
    <button  title="Copiar Código" class="u-copyCode" on:click={copyCodeWhitdrawallUserId}>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M10 8V7C10 6.05719 10 5.58579 10.2929 5.29289C10.5858 5 11.0572 5 12 5H17C17.9428 5 18.4142 5 18.7071 5.29289C19 5.58579 19 6.05719 19 7V12C19 12.9428 19 13.4142 18.7071 13.7071C18.4142 14 17.9428 14 17 14H16M7 19H12C12.9428 19 13.4142 19 13.7071 18.7071C14 18.4142 14 17.9428 14 17V12C14 11.0572 14 10.5858 13.7071 10.2929C13.4142 10 12.9428 10 12 10H7C6.05719 10 5.58579 10 5.29289 10.2929C5 10.5858 5 11.0572 5 12V17C5 17.9428 5 18.4142 5.29289 18.7071C5.58579 19 6.05719 19 7 19Z" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </button>
  {:else}
    <button class="u-copyCode" style="color:#fff;">
      <svg style="color:#fff;" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
        <g id="Interface / Check">
        <path id="Vector" d="M6 12L10.2426 16.2426L18.727 7.75732" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </svg>
      copiado
    </button>
  {/if}
  </div>
  <div class="u-col-form u-content-balance">
    <div class="u-balance">
      <span>Saldo</span>
      <div class="u-label">{user.currency} {user.balance}</div>
    </div>
    <div class="u-balance dropdown">
      <span>Saldo Bono</span>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <span on:click={toggleDropdown}>
        {user.currency} 
        {user.bonus_sumTotal || 0}
        {#if user.bonus_sumTotal > 0 } <svg width="1rem" class="arrow-ic s-pLY60ePxNKjT s-TvGQVPlMjDHL" xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24"><path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z" class="s-pLY60ePxNKjT s-TvGQVPlMjDHL"></path></svg> {/if}
        {#if isDropdownOpen}
        <div class="dropdown-menu xdd">
            {#if user.bonus_horses > 0} <b>Hípicas</b> <span>: {user.bonus_horses} {user.currency}</span>{/if}
            {#if user.bonus_slot > 0} <b>Casino/Casino en vivo</b> <span>: {user.bonus_slot} {user.currency}</span>{/if}
            {#if user.bonus_sportbook > 0} <b>Deportivas</b> <span>: {user.bonus_sportbook} {user.currency}</span>{/if}
            {#if user.bonus_global > 0} <b>Mega Bono</b> <span>: {user.bonus_global} {user.currency}</span>{/if}
            {#if user.bonus_sumTotal > 0} <b>Suma total</b> <span>: {user.bonus_sumTotal} {user.currency}</span>{/if}
        </div>
      {/if}
      </span>
    </div>
    <!-- <div class="u-button-transfer">
      {#if user.id_ca == "6681"}
      <button class="u-withdrawal u-button" on:click={onOpenWithdrawal} disabled={!detectDocument}>
        {#if !detectDocument}
          <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 14.5V16.5M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        {/if}
        <span>Retiro</span>
      </button>
      <button class="u-deposit u-button" on:click={onOpenDeposit}>
        <span> Depósito</span>
      </button>
      {:else}
      <button class="u-withdrawal u-button" on:click={onShowWithdrawalSMS}>
        <span>Retiro</span>
      </button>
      <button class="u-deposit u-button" on:click={onShowWithdrawalSMS}>
        <span> Depósito</span>
      </button>
      {/if}
    </div>
    {#if user.id_ca == "6681"}
    {#if !detectDocument}
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
  <div class="u-col-form">
  <div class="u-tabs">
    <div class="u-tab">
      <input type="checkbox" id="u-myaccount-chck" />
      <label class="u-tab-label" for="u-myaccount-chck">Mi Perfil</label>
      <div class="u-tab-content" >
        <MyAccountForm bind:user />
      </div>
    </div>

    <div class="u-tab">
      <input type="checkbox" id="u-record-chk" />
      <label class="u-tab-label" for="u-record-chk">Historial</label>
      <div class="u-tab-content">
        <RecordMobile bind:user />
      </div>
    </div>

    <div class="u-tab">
      <input type="checkbox" id="u-promotions-chk" />
      <label class="u-tab-label" for="u-promotions-chk">Bonos y Promociones</label
      >
      <!--div class="u-tab-content">
        <PromotionsMobile/>
      </div-->
    </div>
  </div>
  </div>

  <div class="button-exit">
    <button class="exit" on:click={onLogout}>
      <span style="color: #a6a6a6;">Cerrar sesión</span>
      <svg width="25" height="25" fill="#ffffff" id="Capa_2" data-name="Capa 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.56 19.57" class="ml-1 s-TvGQVPlMjDHL" data-v-d2ebbe6a="" style="margin: 0rem 0.75rem;"><path class="cls-1 s-TvGQVPlMjDHL" d="m9.63,0c.33.07.66.12.98.23,1.88.6,3.16,2.34,3.18,4.31,0,.27,0,.53,0,.8,0,.45-.34.78-.77.78-.42,0-.74-.34-.75-.78,0-.52.03-1.04-.11-1.56-.36-1.31-1.55-2.24-2.91-2.25-1.57,0-3.13,0-4.7,0-1.65,0-3.01,1.36-3.01,3.01,0,3.5,0,6.99,0,10.49,0,1.64,1.36,2.99,3,3,1.58.01,3.16.01,4.74,0,1.63-.01,2.97-1.36,3-2.99,0-.27,0-.55,0-.82,0-.44.34-.77.76-.77.42,0,.76.33.77.76.02.85,0,1.69-.34,2.5-.69,1.69-2.35,2.84-4.18,2.85-1.58.01-3.17.01-4.76,0-2.28-.02-4.21-1.77-4.48-4.03C.03,15.48.01,15.44,0,15.4c0-3.74,0-7.49,0-11.23.01-.04.03-.08.03-.13C.32,2.19,1.33.92,3.08.27,3.42.13,3.8.09,4.16,0c1.82,0,3.64,0,5.46,0Z"></path><path class="cls-1 s-TvGQVPlMjDHL" d="m11.67,9.02c1.36,0,2.72,0,4.08,0,.56,0,.92.51.74,1.02-.11.31-.4.5-.76.51-.92,0-1.83,0-2.75,0-1.81,0-3.61,0-5.42,0-.57,0-.95-.51-.76-1.02.11-.31.4-.5.76-.5,1.37,0,2.74,0,4.1,0Z"></path><path class="cls-1 s-TvGQVPlMjDHL" d="m19.56,9.84c-.01.63-.23,1.18-.67,1.62-.58.58-1.16,1.16-1.74,1.74-.33.33-.8.33-1.11.03-.31-.31-.3-.78.03-1.11.56-.56,1.12-1.11,1.67-1.67.39-.39.39-.81,0-1.2-.55-.54-1.1-1.08-1.65-1.62-.35-.35-.37-.82-.05-1.13.31-.31.77-.3,1.12.04.56.55,1.12,1.1,1.68,1.64.47.46.71,1.01.72,1.66Z"></path></svg>
    </button>
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
      .dropdown-menu.xdd{
        padding: 0.5rem;
    color: black;
    top: 2.25rem;
    left: 0;
    width: max-content;
    font-weight: 500;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.25rem 0.5rem;
    
  }
  .u-copyCode{
    border: 0;
    background: transparent;
    display: flex;
    align-items: center ;
  }
    .usericon1{
    width: 3rem;
    border-radius: 0.25rem;
    
  }
  @media only screen and (max-width: 1200px) {
    button{
      cursor: pointer;
    }
    .profile-content {
      overflow-y: scroll;
      display: flex;
      flex-direction: column;
      gap: 2px;
      background: #201c26;
      height: 100%;
    }
    .u-col-form{
      background-color: #2B2832;
    }
    .u-icon-user{
      display: flex;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    align-items: center;
    flex-direction: row;
    gap: 1rem;
    width: 100%;
    justify-content: center;
    background-color: #05050533;
    }
    .u-icon{
      height: 25px;
      width: 25px;
      border-radius: 1rem;
      border: 4px solid white;
    }
    .u-date{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding-left: 1rem;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      padding-right: 1rem;
    }
    .u-content-balance{
      display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 0.1rem;
    padding: 1.25rem 0.5rem 1.25rem;
    }
    .u-balance{
      width: 100%;
    padding: 0.5rem;
    background-color: transparent;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #201c26;
    }
    .u-button-transfer{
      width: 100%;
      height: 3.5rem;
      padding: 0.5rem;
      padding-top: 1.5rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.5rem;
      justify-content: space-between;
    }
    .u-button{
      width: 100%;
      height: 2rem;
      border-radius: 0.5rem;
      color: white;
      display: flex;
    align-items: center;
    justify-content: center;

    }
    .u-withdrawal{
      background-color: #4d5765;
      border: none;
    }
    .u-deposit{
      border: none;
      background-color: rgb(9, 187, 12);
    }
    /*Boton de salida*/
    .button-exit {
      display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 2rem;

    }
    .exit {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 15px;
      border: none;
      background-color: transparent;
    }

    /**accordion*/

    input {
      position: absolute;
      opacity: 0;
      z-index: -1;
    }

    /* Accordion styles */
    .u-tabs {
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.5);
    }

    .u-tab {
      width: 100%;
      color: white;
      overflow: scroll;
    }
    .u-tab-label {
      display: flex;
    justify-content: space-between;
    padding: 1em;
    background: #3a3942;
    font-weight: bold;
    cursor: pointer;
    border-bottom: 1px solid #201c26;
      /* Icon */
    }
    .u-tab-label:hover {
      background: #bc001e;
    }
    .u-tab-label::after {
      content: "❯";
      width: 1em;
      height: 1em;
      text-align: center;
      transition: all 0.35s;
    }
    .u-tab-content {
      max-height: 0;
      color: black;
      background: white;
      transition: all 0.35s;
    }

    input:checked + .u-tab-label {
      background: #bc001e;
    }
    input:checked + .u-tab-label::after {
      transform: rotate(90deg);
    }
    input:checked ~ .u-tab-content {
      max-height: 100vh;
    }
  }
</style>
