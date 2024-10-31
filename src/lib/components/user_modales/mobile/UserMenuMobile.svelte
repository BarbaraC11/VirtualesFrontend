<script>
    export let user;
    export let onOpenProfile;
    export let onOpenDeposit;
    export let onShowWithdrawalSMS;
    
</script>
<button class="userBalanceBlock " >
  <!-- <div class="in-mobile Ganawin s-TvGQVPlMjDHL">
    {#if user.id_ca == "6681"}
    <button on:click={onOpenDeposit} class="btn deposit efectt s-TvGQVPlMjDHL" style="color: rgb(255, 255, 255);">Recarga</button>
    {:else}
    <button on:click={onShowWithdrawalSMS} class="btn deposit efectt s-TvGQVPlMjDHL" style="color: rgb(255, 255, 255);">Recarga</button>
    {/if}
  </div> -->
    <!--svg
      fill="whitee"
      width="25px"
      height="25px"
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 512 512">
      <path d="M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0S112 64.5 112 144s64.5 144 144 144zm-94.7 32C72.2 320 0 392.2 0 481.3c0 17 13.8 30.7 30.7 30.7H481.3c17 0 30.7-13.8 30.7-30.7C512 392.2 439.8 320 350.7 320H161.3z"/>
    </svg-->
   <div style="display: flex;gap:0.25rem;" on:click={onOpenProfile}>
    <img class="usericon1" src="https://assetsapiusoft.s3.us-west-2.amazonaws.com/BetsAmerica/icon/Perfil.png" alt="">
    <svg class="arrow-ic" xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24"><path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"/></svg>
   </div>
    <span id="balance">{user.balance} <span class="currency">{user.currency}</span></span>
</button>
<style>
  .usericon1{
    width: 1.8rem;
    border-radius: 0.25rem;
  
  }
.arrow-ic{
  width: 0.8rem;
    height: auto;
   

}
  .currency{
  color: #ffc781;}
    .userBalanceBlock {
      height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row-reverse;
    gap: 5px;
    background-color: transparent;
    border: #743ad5;
    color: white;
    padding-top: 0.5rem;
  }
  #balance {
    font-size: 0.8rem;
  }
</style>