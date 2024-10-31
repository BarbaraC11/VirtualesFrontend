<script>
  import backend from "../../../server";
  import EventManager from "../../../js/EventManager";
  import Configuration from "../../../config";

  export let email = "";
  export let onSubmitted;
  export let open = false;
  export let onClosed;

  const conf = Configuration.getConfiguration();

  const modalClose = (data) => {
    open = false;
    if (onClosed) {
      onClosed(data);
    }
  };

  const sendPassword = async () => {
    let isEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(email);
    if( ! email ){ 
      EventManager.publish("notify", {mode:"error", msg:"El e-mail no puede ser vacio"});
      return; 
    } else if(!isEmail){
      EventManager.publish("notify", {mode:"error", msg:"Formato de e-mail incorrecto"});
      return;
    } 
    try {
      const data = await backend.sendPassword(email);
      onSubmitted(data);
    } catch (e) {
      console.log(e);
    }
  };

</script>

<div class="u-main-wrapp">
  <div class="u-send-password">
    <div>
      <img class="logo" src="{conf.ASSETS}/coliseosport/logo.png" alt="" />
    </div>
    <span>Bienvenido a 
      <span class="name" style="color: #ff6200;">Coliseosport</span>
    </span>
    <span style="color: #ff6200; font-weight: bold;">¿Has olvidado tu contraseña?</span>
    <span>Complete su dirección de correo electrónico y les enviaremos instrucciones sobre cómo restablecer su contraseña por correo electrónico. </span>
    <span>Pongansé en
      <span class="name" style="color: #ff6200;">contacto</span>
      con nosotros a través de Soporte si necesita ayuda. 
    </span>
    <div class="u-form">
      <input class="u-input-email" type="text"  bind:value={email}/>
      <label class="u-email" for="email" >Correo electrónico</label>
    </div>
    <div class="u-buttons">
      <button class="u-btn u-btn-primary" on:click={sendPassword}>
        RESTABLECER CONTRASEÑA
      </button>
      <button class="u-sub-button">
        <span style="color: #ff6200;">¿No recibiste instrucciones de desbloqueo?</span>
      </button>
      <button class="u-sub-button">
        <span style="color: #ff6200;">
          ¿No recibió las instrucciones de confirmación?
        </span>
      </button>
    </div>
  </div>
</div>

<style>
  @media only screen and (max-width: 768px) {
    .u-main-wrapp {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .u-send-password {
      border-radius: 0.5rem;
      width: 100%;
      padding: 2rem;
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 15px;
      background: linear-gradient(20deg, #1d5f65, #100d3a);
    }
    .u-form {
      display: flex;
      padding: 2rem;
    }
    .logo {
      width: 180px;
      align-items: center;
      justify-content: center;
    }
    input {
      background-color: white;
      color: black;
      height: 1.5rem;
      border: none;
    }
    .u-btn {
      cursor: pointer;
      background-color: #0369aa;
      color: white;
      width: 8rem;
      height: 1.5rem;
      border-radius: 12px;
      font-size: 16px;
    }
  }
  @media only screen and (max-width: 768px) and (orientation: landscape) {
    .u-main-wrapp {
      display: flex;
      align-items: center;
      justify-content: center;
    }
   
    .u-send-password {
      border-radius: 0.5rem;
      width: 100%;
      padding: 2rem;
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 15px;
      background: linear-gradient(20deg, #1d5f65, #100d3a);
    }
    .u-form {
      display: flex;
      padding: 2rem;
    }
    .logo {
      width: 200px;
      align-items: center;
      justify-content: center;
    }
    input {
      background-color: white;
      color: black;
      height: 1.5rem;
      border: none;
    }
    .u-btn {
      cursor: pointer;
      background-color: #0369aa;
      color: white;
      width: 8rem;
      height: 1.5rem;
      border-radius: 12px;
      font-size: 16px;
    }
  }
  @media only screen and (min-width: 768px) {
    .u-main-wrapp {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .u-send-password {
      border-radius: 0.5rem;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 15px;
      background: #181824;
      font-size: 16px;
      padding: 1rem;
      border:1px solid #f3ff09;
      text-align: center;
    }
    .u-form {
      display: flex;
    }
    .logo {
      width: 200px;
      align-items: center;
      justify-content: center;
    }
    .u-input-email{
      border: 1.5px solid #f3ff09;
      border-radius: 1rem;
      background:none;
      padding: 1rem;
      font-size: 1rem;
      color: white;
      width: 25rem;
      transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    .u-email{
      position: absolute;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      color: #c1bdbd;
      pointer-events: none;
      transform: translateY(1rem);
      transition:150ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    .u-input-email:focus{
      outline: none;
      border: 1.5px solid #fffb00;
    }
    .u-input-email:focus ~.u-email{
      transform: translateY(-10%) scale(0.8);
      background-color: #ebf43ee4;
      border-radius: 0.2rem;
      color: rgb(7, 7, 7);
    }
    .u-buttons{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
    }
    .u-btn {
      cursor: pointer;
      background-color: #ff6200;
      color: black;
      height: 2rem;
      border-radius: 5px;
      font-size: 16px;
      padding: 0.5rem;
    }
    .u-sub-button{
      background: none;
      border: none;
      cursor: pointer;
    }
  }
</style>
