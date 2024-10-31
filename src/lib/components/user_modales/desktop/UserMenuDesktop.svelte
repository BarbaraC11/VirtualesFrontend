<script>
  import { onMount } from "svelte";
  export let user = {};
  export let onLogout;
  export let onOpenProfile;
  export let active_view;
  export let onOpenDeposit;
  export let onShowWithdrawalSMS;
  export const logout = () => {
    //FALTA ir a Bancked a destruir session
    onLogout();
  };


 
  let isDropdownOpen = false;
  
  function toggleDropdown() {
    if(user.bonus_sumTotal == 0 ||  user.bonus_sumTotal == undefined){
      isDropdownOpen = false;
    }else{

      isDropdownOpen = !isDropdownOpen;
    }
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
</script>

<div class="profile-content">
  <div class="u-user-profile">
   <div class="user-profile">
    <img class="usericon1 s-pLY60ePxNKjT" src="https://assetsapiusoft.s3.us-west-2.amazonaws.com/BetsAmerica/icon/Perfil.png" alt="">
      <table class="user">
        <div class="user-content">
          <tr>
            <th class="codigo">{user.username} #{user.id}</th>
          </tr>
          <tr>
            <td>
              <button class="title-user" style="padding-left: 1rem;" on:click={onOpenProfile}>
              Mi cuenta
              <div><svg class="arrow-ic s-pLY60ePxNKjT" xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24"><path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z" class="s-pLY60ePxNKjT"></path></svg></div>
              </button>
            </td>
          </tr>
        </div>
      </table>
    </div>
    {#if active_view != "sportbook" && active_view != "horses" && active_view != "esports" && active_view != "sportbooklive"}
    <div class="balance-content">
      <table class="u-balance">
        <tr>
          <th class="balance">Saldo</th> <th class="bonus-balance">Saldo Bono</th>
        </tr>
        <tr>
          <td>{user.balance} <span class="currency">{user.currency}</span> </td>
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <td class="drop_bonus dropdown" on:click={toggleDropdown}>
            {user.bonus_sumTotal || 0}
            <span class="currency">{user.currency}</span>
            {#if user.bonus_sumTotal > 0 } <svg class="arrow-ic s-pLY60ePxNKjT s-TvGQVPlMjDHL" xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24"><path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z" class="s-pLY60ePxNKjT s-TvGQVPlMjDHL"></path></svg> {/if}
            {#if isDropdownOpen}
              <div class="dropdown-menu xdd">
                  {#if user.bonus_horses > 0} <b>Hípicas</b> <span>: {user.bonus_horses} {user.currency}</span>{/if}
                  {#if user.bonus_slot > 0} <b>Casino/Casino en vivo</b> <span>: {user.bonus_slot} {user.currency}</span>{/if}
                  {#if user.bonus_sportbook > 0} <b>Deportivas</b> <span>: {user.bonus_sportbook} {user.currency}</span>{/if}
                  {#if user.bonus_global > 0} <b>Mega Bono</b> <span>: {user.bonus_global} {user.currency}</span>{/if}
                  {#if user.bonus_sumTotal > 0} <b>Suma total</b> <span>: {user.bonus_sumTotal} {user.currency}</span>{/if}
              </div>
            {/if}
          </td>
        </tr>
      </table>
    </div>
    {/if}
    <!-- <div class="Ganawin">
      {#if user.id_ca == "6681"}
      <button class="btn deposit efectt" style="color:#fff" on:click={onOpenDeposit}>Recarga</button>
      {:else}
      <button class="btn deposit efectt" style="color:#fff" on:click={onShowWithdrawalSMS}>Recarga</button>
      {/if}
    </div> -->
    <div class="button-exit">
      <button class="u-button-exit" on:click={logout}>
        <!-- <svg style="margin: 0rem 0.75rem;" width="25" height="25" fill="#ffffff" id="Capa_2" data-name="Capa 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.56 19.57" class="ml-1" data-v-d2ebbe6a=""><path class="cls-1" d="m9.63,0c.33.07.66.12.98.23,1.88.6,3.16,2.34,3.18,4.31,0,.27,0,.53,0,.8,0,.45-.34.78-.77.78-.42,0-.74-.34-.75-.78,0-.52.03-1.04-.11-1.56-.36-1.31-1.55-2.24-2.91-2.25-1.57,0-3.13,0-4.7,0-1.65,0-3.01,1.36-3.01,3.01,0,3.5,0,6.99,0,10.49,0,1.64,1.36,2.99,3,3,1.58.01,3.16.01,4.74,0,1.63-.01,2.97-1.36,3-2.99,0-.27,0-.55,0-.82,0-.44.34-.77.76-.77.42,0,.76.33.77.76.02.85,0,1.69-.34,2.5-.69,1.69-2.35,2.84-4.18,2.85-1.58.01-3.17.01-4.76,0-2.28-.02-4.21-1.77-4.48-4.03C.03,15.48.01,15.44,0,15.4c0-3.74,0-7.49,0-11.23.01-.04.03-.08.03-.13C.32,2.19,1.33.92,3.08.27,3.42.13,3.8.09,4.16,0c1.82,0,3.64,0,5.46,0Z"></path><path class="cls-1" d="m11.67,9.02c1.36,0,2.72,0,4.08,0,.56,0,.92.51.74,1.02-.11.31-.4.5-.76.51-.92,0-1.83,0-2.75,0-1.81,0-3.61,0-5.42,0-.57,0-.95-.51-.76-1.02.11-.31.4-.5.76-.5,1.37,0,2.74,0,4.1,0Z"></path><path class="cls-1" d="m19.56,9.84c-.01.63-.23,1.18-.67,1.62-.58.58-1.16,1.16-1.74,1.74-.33.33-.8.33-1.11.03-.31-.31-.3-.78.03-1.11.56-.56,1.12-1.11,1.67-1.67.39-.39.39-.81,0-1.2-.55-.54-1.1-1.08-1.65-1.62-.35-.35-.37-.82-.05-1.13.31-.31.77-.3,1.12.04.56.55,1.12,1.1,1.68,1.64.47.46.71,1.01.72,1.66Z"></path></svg> -->
         <img style="width: 1.5rem;" src="https://assetsapiusoft.s3.us-west-2.amazonaws.com/BetsAmerica/icon/Exit.png" alt="">
        <p style="color:white">cerrar sesión</p>
      </button>
    </div>
  </div>
</div>

<style>
  .Ganawin .efectt{
    transform: scale(1);
    animation: pulsea 2s infinite;
    padding: 0.3rem 1.25rem;
    font-size: 12px;
    height: 2rem;
  }
  @keyframes pulsea{
    0%{transform:scale(.95);box-shadow:0 0 #ffffffe6}
    70%{transform:scale(1);box-shadow:0 0 0 10px #fff0}
    to{transform:scale(.95);box-shadow:0 0 #fff0}
  }
    .dropdown-menu.xdd{
      padding: 0.5rem;
      color: black;
      top: 1.25rem;
      width: max-content;
      font-weight: 500; 
      display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.25rem 0.5rem;
  }

  .drop_bonus{
    display: flex;
    cursor: pointer;
  }
  .currency{
    color: #ffc781;
  }
  .arrow-ic{
    width: 0.8rem;
    height: auto;
  }
  .usericon1{
    width: 2rem;
    height: 2rem;
    border-radius: 0.25rem;
    margin-top: 0.25rem;
 
  }
  .codigo{
    white-space: nowrap;
  }
  .profile-content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 49rem;
    font-size: 0.7rem;
  }
  .u-user-profile {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5px;
    font-size: 0.7rem;
  }
  button {
    background-color: transparent;
    color: #5A5A5A;
    font-weight: bold;
    font-size: 0.7rem;
    cursor: pointer;
  }
  .user-profile {
    position: relative;
    display: flex;
    flex-direction: row;
  }
  .user {
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: white;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .user-content th {
    background-color: transparent;
    width: 0.2rem;
    padding-left: 0.8rem;
    /*border: grey 1px solid;*/
  }
  .user-content td {
    width: 7rem;
    height: 1rem;
   /* border: grey 1px solid;*/
  }
  .title-user{
    border: none;
    border-color: none;
    border-style: none;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 6rem;
  }
  .balance-content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 13rem;
  }
  .u-balance {
    width: 100%;
    font-size: 12px;
    border-radius: 2px;
    color: grey;
  }
  .u-balance tr {
    border: none;
  }
  .u-balance th {
    width: 7rem;
    justify-content: center;
    align-items: center;
    border-radius: 1px;
    color: white;
    /*border: #efc624 1px solid;*/
    height: 1rem;
  }
  .balance{
    background: transparent;
  }
  .bonus-balance{
    background: transparent;
  }
  .u-balance td {
    color: #fff;
    font-weight: bold;
    justify-content: center;
    align-items: center;
    height: 1rem;
    border-radius: 1px;
    justify-content: center;
    align-items: center;
    text-align: center;
    /*border: #efc624 1px solid;*/
  }
  .u-button-exit{
    display: flex;
    border: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;
  }
</style>
