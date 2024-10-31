<script>
  import EventManager from "../../../../js/EventManager";
  import backend from "../../../../server.js";
  import Configuration from "../../../../config";

  export let showPasswordChangeModal;
  export let user;
  export let onClosed;

  let user_data = {};
  
  const conf = Configuration.getConfiguration();

  const closeModal = () => {
    console.log("cerrando modal");
    onClosed("");
    //document.body.classList.remove("fixed-scroll");
  };

  const changePassword = async () => {
    console.log("USUARIO",user);
    if (user_data.new_password != user_data.newpassword) {
      EventManager.publish("notify", {mode:"error", msg:"Las claves no coinciden"});
      return;
    }
    try {
      let response =  await backend.changePassword(user.token, user_data.newpassword, user_data.current_password);
    } catch (error) {
      console.log(error);
      if(error.message.indexOf("Token incorrecto")>=0 ){
        EventManager.publish("notify", {mode:"error", msg:"Clave actual incorrecta"});
      }else  EventManager.publish("notify", {mode:"error", msg:"Error al cambiar clave "});
     return;
    }
    close();
  };
  const close = () => {
    showPasswordChangeModal=false;
  };
</script>

<div class="u-main-form">
  <div class="u-form">
    <div class="u-form-password">
      <label for="">Contraseña Actual</label>
      <input
        type="password"
        class="u-form-control"
        bind:value={user_data.current_password}
      />
    </div>

    <div class="u-form-password">
      <label for="">Nueva Contraseña</label>
      <input
        type="password"
        class="u-form-control"
        bind:value={user_data.new_password}
      />
    </div>

    <div class="u-form-password">
      <label for="">Repetir Contraseña</label>
      <input
        type="password"
        class="u-form-control"
        bind:value={user_data.newpassword}
      />
    </div>

    <div class="u-button-content">
      <div class="u-botton-control">
        <button class="u-btn save" on:click={changePassword}>Guardar</button>
      </div>
    </div>
  </div>
  <!--<div class="u-form">
    <div class="u-info-security">
      <img class="u-icon-change-password" src="{conf.ASSETS}/golden/ChangePassword.svg" alt="">
      <span class="u-title">CAMBIA LA CONTRASEÑA</span>
      <span>¿Quieres cambiar la contraseña?</span>
      <span>Simplemente haga clic en el botón de abajo</span>
    </div>
    <button class="u-control-button">CAMBIAR LA CONTRASEÑA</button>
  </div>-->
  <!--div class="u-form">
    <div class="u-info-security">
      <img class="u-icon-change-password" src="{conf.ASSETS}/golden/Question.svg" alt="">
      <span class="u-title">PREGUNTA DE SEGURIDAD</span>
      <span>En caso de que pierda su contraseña, la pregunta de seguridad es la única forma de recuperar el acceso a tu cuenta</span>
    </div>
    <button class="u-control-button">CONFIGURAR UNA PREGUNTA DE SEGURIDAD</button>
  </div-->
  <!--div class="u-form">
    <div class="u-info-security">
      <img class="u-icon-change-password" src="{conf.ASSETS}/golden/VerificarNumber.svg" alt="">
      <span class="u-title">VERIFICACIÓN DE NÚMERO DE TELÉFONO</span>
      <span>Verifique su número de teléfono rápido y fácil haciendo clic en el botón de abajo</span>
    </div>
    <button class="u-control-button">VERIFICA DE NUMERO DE TELEFONO</button>
  </div-->

</div>

<style>
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
    border-radius: 0.4rem;
    width: 100%;
    padding: 1rem;
    padding-right: 2rem;
  }
  .save{
    background-color: #bc001e;
    padding: 0.5rem;
    border: none;
    border-radius: 0.2rem;
    color: white;
  }
  
  
</style>
