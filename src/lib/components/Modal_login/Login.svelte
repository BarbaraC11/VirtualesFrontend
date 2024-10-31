<script>
  import EventManager from "../../../js/EventManager";
  import Configuration from "../../../config";
  export let showMainLoading;

  export let username = "";
  export let password = "";
  export let onSubmitted;
  export let onForgotPassword;

  const conf = Configuration.getConfiguration();


  const loginEnter = e => {
    if(e.charCode === 13) login();
  };

  const login = async () => {
    if( !username || !password ){ 
      EventManager.publish("notify", {mode:"error", msg:"Credenciales imcompletas"});
      return;
    }
    let info = {username, password}
    onSubmitted(info)
  };  
</script>

  <div class="u-login">
    <img class="logo" src="{conf.ASSETS}/coliseosport/logo.png" alt="" />
    <span
      >Bienvenido a <span class="name" style="color: #ff6200;">Coliseosport</span
      ></span
    >
    <!--select class="u-select-language ">
      <option selected>Seleccione</option>
      <option value="1">Español</option>
      <option value="2">English</option>
      <option value="3">Frances</option>
    </select-->
  
    <div class="u-form">
      <div class="u-sub-form">
        <span>Usuario:</span>
        <input
          type="text"
          id="username-text"
          placeholder="Usuario"
          bind:value={username}
          on:keypress={loginEnter}
        />
      </div>
      <div class="u-sub-form">
        <span>Clave:</span>
        <input
          type="password"
          id="password-text"
          placeholder="Contraseña"
          bind:value={password}
          on:keypress={loginEnter}
        />
      </div>
    </div>
    <div class="u-buttons">
      <button id="modal-login-btn" class="u-btn btn-primary play" disabled={showMainLoading}  on:click={login}>Entrar</button>
      <button class="u-btn password" on:click={onForgotPassword}
        >Olvidé mi contraseña</button
      >
    </div>
  </div>


<style>
 #modal-login-btn:disabled, #modal-login-btn[disabled]{
    background:gray;
 }
  @media only screen and (max-width: 1200px) {
    .u-login {
      border-radius: 0.5rem;
      display: flex;
      flex-direction: column;
      gap: 15px;
      justify-content: center;
      align-items: center;
      background: #000;
      border: 1px solid #ff6200;
    }
    .logo {
      width: 150px;
      align-items: center;
      justify-content: center;
      margin-top: 30px;
    }
    .u-form {
      display: flex;
      flex-direction: column;
      gap: 10px;
      align-items: center;
    }
    .u-sub-form{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      text-align: right;
      width: 100%;
    }
    input {
      height: 35px;
      width: 150px;
      border-radius: 5px;
    }
    .u-buttons {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 10px;
      margin-bottom: 30px;
    }
    .u-btn {
      color: black;
      font-weight: 500;
      padding: 0.5em 1.2em;
    }
    .play {
      background: #ff6200;
      border: none;
      transition: all 1s cubic-bezier(0.19, 1, 0.12, 1);
      text-align: center;
      justify-content: center ;
      width: 6.5rem;
      border-radius: 20px;
      font-size: 16px;
      cursor: pointer;
    }
    .play:active {
      box-shadow: inset 0 0 20px rgba(241, 252, 39, 0.445),
        0 0 20px rgba(203, 247, 28, 0.4);
      outline-color: rgba(49, 138, 172, 0);
      outline-offset: -10px;
      text-shadow: 1px 1px 6px rgb(157, 166, 58);
    }
    .password {
      background: none;
      border: none;
      color: #8e9ca9;
      cursor: pointer;
    }
  }

  @media only screen and (min-width: 1200px) {
    .u-login {
      border-radius: 0.5rem;
      display: flex;
      flex-direction: column;
      gap: 15px;
      justify-content: center;
      align-items: center;
      background: #000;
      border: 1px solid #ff6200;
    }
    .logo {
      width: 200px;
      align-items: center;
      justify-content: center;
      margin-top: 30px;
    }
    .u-form {
      display: flex;
      flex-direction: column;
      gap: 10px;
      align-items: center;
      margin-bottom: 60px;
    }
    .u-sub-form{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      text-align: right;
      width: 100%;
    }
    input {
      height: 35px;
      width: 220px;
      border-radius: 5px;
    }
    .u-buttons {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 10px;
      margin-bottom: 30px;
    }
    .u-btn {
      color: black;
      font-weight: 500;
      padding: 0.5em 1.2em;
    }
    .play {
      background: #ff6200;
      border: none;
      transition: all 1s cubic-bezier(0.19, 1, 0.12, 1);
      text-align: center;
      justify-content: center ;
      width: 6.5rem;
      border-radius: 20px;
      font-size: 16px;
      cursor: pointer;
    }
    .play:active {
      box-shadow: inset 0 0 20px rgba(241, 252, 39, 0.445),
        0 0 20px rgba(203, 247, 28, 0.4);
      outline-color: rgba(49, 138, 172, 0);
      outline-offset: -10px;
      text-shadow: 1px 1px 6px rgb(157, 166, 58);
    }
    .password {
      background: none;
      border: none;
      color: #8e9ca9;
      cursor: pointer;
    }
  }
</style>
