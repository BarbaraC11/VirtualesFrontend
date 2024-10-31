<script>
import backend from "../../../../server";
import EventManager from "../../../../js/EventManager";


export let user;
export let onSubmitted;


function phoneOnlyNumber(event) {
  let isNumber = /\d/.test(event.key);
  if (isNumber && user.phone.length < 9) user.phone += event.key;
  console.log(user.phone.length);
};

const saveMyAccount = async (event) => {
    //let isEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(user.email);
    //if (!isEmail) {
    //  EventManager.publish("notify", {mode:"error", msg:"Formato de e-mail incorrecto"});
    //  return;
    //}
    if (!user.document || !user.city || !user.address) {
      onSubmitted("error","Completa todos los datos")
      return;
    }
    if(user.document.length != 12 ){
      onSubmitted("error","Formato de RUT, incorrecto")
      return;
    }
    try {
      user.serial_api_casino = user.serial;
      //close();  
      await backend.saveMyAccount(user);
      onSubmitted("ok")
    } catch (e) {
      console.log(e)
      onSubmitted("error",e)
    }
    
};
console.log("USER DATA DESK",user);
  let userNew = user;
</script>

  <div class="u-main-form">
    <label>Correo Electronico:
      <input type="email" class="u-form-control u-disabled" bind:value={user.email} disabled>
    </label>
    <label>Nombre de Usuario:
      <input class="u-form-control u-disabled" bind:value={user.username} disabled>
    </label>
    <label>Nombre:
      <input class="u-form-control u-disabled" bind:value={user.name} disabled>
    </label>
    <label>Fecha de Nacimiento:
      <input class="u-form-control u-disabled" bind:value={user.birthday} disabled>
    </label>
    <label>Telefono:
      <input class="u-form-control" on:keypress|preventDefault={(e)=>phoneOnlyNumber(e)} bind:value={user.phone} disabled>
    </label>
   
    {#if user.id_ca == "6681"}
    <label >RUT: {#if !userNew.document}<span class="nimys">Ejemplo: 15.363.225-1</span>{/if}
      {#if !userNew.document}
        <input class="u-form-control" bind:value={user.document}>
      {:else}
        <input class="u-form-control" bind:value={user.document} disabled>
      {/if}
    </label>
    <label >Ciudad:
      {#if !userNew.city}
      <input class="u-form-control" bind:value={user.city}>
      {:else}
      <input class="u-form-control" bind:value={user.city} disabled>
      {/if}
      
    </label>
    <label >Direccion:
      {#if !userNew.address}
      <input class="u-form-control" bind:value={user.address}>
      {:else}
      <input class="u-form-control" bind:value={user.address} disabled>
      {/if}
      
    </label>
    {/if}
  </div>
  {#if user.id_ca == "6681"}
    {#if !userNew.document || !userNew.city || !userNew.address} 
    <div class="u-control-button">
      <button class="u-control-button-save" on:click={saveMyAccount}>Guardar</button>
    </div>
    {/if}
    {/if}
  

<style>
 .nimys{
  color: #27b4c5 !important;
    font-size: 10px;
 }
  input:focus-visible{
    outline: 0;
  }
  label, input{
    color: #000;
  }
  select:focus-visible{
    outline: 0;
  }

  .u-main-form{
    padding: 0.6rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
    color: black;
  }
  .u-main-form *{
    color: black;
  }
  
  .u-control-button{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 1.5rem;
  }
  .u-control-button-save{
    width: 50%;
    padding: 0.5rem;
    /*background: linear-gradient(70deg, #a00078, #330a59);*/
    background-color: #28A745;
    border: 1px solid #9EA4AE;
    font-weight:700;
    border-radius: 0.4rem; 
    color: white; 
    cursor: pointer;
  }
  .u-control-button-save:hover{
    background:linear-gradient(70deg, #026c8a, #0a0b59);
    color: white;
    cursor: pointer;
  }
  
  
  
  
</style>
