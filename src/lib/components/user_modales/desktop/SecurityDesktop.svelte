<script>
  import EventManager from "../../../../js/EventManager";
  import backend from "../../../../server.js";
  export let showPasswordChangeModal;
  export let user;

  let securityData = {};
  securityData.current_password = "";
  securityData.new_password = "";

  const cleanInputs = () =>{
    securityData.current_password = "";
    securityData.new_password = "";
    securityData.newpassword = "";
  }

  const changePassword = async () => {
    if(!securityData.current_password || securityData.current_password ==""){
      //EventManager.publish("notify", {mode:"error", msg:"Ingrese la contraseña actual"});
      alert("Ingrese la contraseña actual");
      return;
    }
    if(securityData.new_password.length < 6 || securityData.new_password ==""){
      //EventManager.publish("notify", {mode:"error", msg:"Mínimo 6 caracteres para las contraseñas"});
      alert("Mínimo 6 caracteres para las contraseñas");
      return;
    }
    if (securityData.new_password != securityData.newpassword) {
      //EventManager.publish("notify", {mode:"error", msg:"La nueva contraseña no coincide"});
      alert("La nueva contraseña no coincide");
      return;
    }
    try {
      let response =  await backend.changePassword(user.token, securityData.newpassword, securityData.current_password);
      console.log("resp: ", response);
      if(response.errorCode == "CHANGE_PASSWORD_FAILED") {
        //EventManager.publish("notify", {mode:"error", msg:"Contraseña actual incorrecta"});
        alert("Contraseña actual incorrecta");
      }else{
        //EventManager.publish("notify", {mode:"error", msg:"Contraseña cambiada exitosamente"});
        alert("Contraseña cambiada exitosamente");
        cleanInputs();
      }
    } catch (error) {
      console.log(error);
    }
    close();
  };
  const close = () => {
    showPasswordChangeModal=false;
  };
</script>

<div class="u-main-form">
  
  <form class="u-form" autocomplete="off" method="post" action="" on:submit={(e)=>{e.preventDefault()}}>
  <div class="d-wrapp" >
    <div class="u-form-password">
      <label for="sec-pass">Contraseña Actual</label>
      <input
        type="password"
        class="u-form-control"
        autocomplete="off"
        bind:value={securityData.current_password}
      />
    </div>

    <div class="u-form-password">
      <label for="">Nueva Contraseña</label>
      <input
        type="password"
        id='new-pass'
        class="u-form-control"
        autocomplete="off"
        bind:value={securityData.new_password}
      />
    </div>

    <div class="u-form-password">
      <label for="">Repetir Contraseña</label>
      <input
        type="password"
        class="u-form-control"
        autocomplete="off"
        bind:value={securityData.newpassword}
      />
    </div>
    <div class="u-botton-control">
      <button class="u-btn save" id="button-change-pass" on:click={changePassword}>Guardar</button>
    </div>
  </div>
</form>
</div>

<style>
  label,.u-form-control{
    color: #000;
  }
  .u-main-form{
    padding: 0.6rem;
    display: flex;
    flex-direction: row;
    gap: 0.8rem;
  }
  .u-form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    background-color: white;
    border-radius: 0.4rem;
    width: 100%;
    height: 30vh;
    padding: 1rem;
    padding-right: 2rem;
  }
  .d-wrapp{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 0.7rem;
}
 
  .u-botton-control{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .u-btn{
    background-color: #28A745;
    width: 90%;
    color: white;
    border: none;
    height: 1.8rem;
    border-radius: 0.5rem;
  }

</style>
