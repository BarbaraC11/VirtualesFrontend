<script>
  //export let open;
  import backend from "../../../../server";
  import Configuration from "../../../../config";
  import UploadFile from "../../UploadFile.svelte";
  export let user;
  
  let identityfile;
  let identityfileName = "GOLD-"+user.username+"-identity"

  const conf = Configuration.getConfiguration();

  const sendFile = async (fileName, base64file) => {
    let data = await backend.uploadFile(fileName, base64file);
  }
  



</script>

<div class="u-main-form">
  <div class="u-form one">
    <div class="u-info-security">
      <img class="u-icon-change-password" src="{conf.ASSETS}/golden/Identity.svg" alt="">
      <span class="u-title">IDENTIDAD</span>
      <span>Pasaporte, licencia de conducir o tarjeta de identificación oficial emitida por el gobierno</span>
    </div>
    <UploadFile onFileLoaded={ (file) => identityfile=file} ></UploadFile>
    <button class="btn-save" on:click={ ()=> sendFile(identityfileName, identityfile)}>guardar</button>
  </div>

  <div class="u-form two">
    <div class="u-info-security">
      <img class="u-icon-change-password" src="{conf.ASSETS}/golden/Adress.svg" alt="">
      <span class="u-title">DIRECCIÓN</span>
      <span>En caso de que pierda su contraseña, la pregunta de seguridad es la única forma de recuperar el acceso a tu cuenta</span>
    </div>
    <UploadFile onFileLoaded={ (file) => identityfile=file} ></UploadFile>
    <button class="btn-save" on:click={ ()=> sendFile(identityfileName, identityfile)}>guardar</button>
  </div>
  <!--div class="u-form three">
    <div class="u-info-security">
      <img class="u-icon-change-password" src="{conf.ASSETS}/golden/Deposit.svg" alt="">
      <span class="u-title">DEPÓSITO</span>
      <span>Verifique su número de teléfono rápido y fácil haciendo clic en el botón de abajo</span>
    </div>
    <button class="contenedor-btn-file u-control-button">
      <i class="fas fa-file"></i>SUBIR DOCUMENTO
      <label for="btn-file"></label>
      <input type="file" id="btn-file">
    </button>
  </div-->
  <!--div class="u-form four">
    <div class="u-info-security">
      <img class="u-icon-change-password" src="{conf.ASSETS}/golden/Payment_Method.svg" alt="">
      <span class="u-title">MÉTODO DE PAGO</span>
      <span>Verifique su número de teléfono rápido y fácil haciendo clic en el botón de abajo</span>
    </div>
    <button class="contenedor-btn-file u-control-button">
      <i class="fas fa-file"></i>SUBIR DOCUMENTO
      <label for="btn-file"></label>
      <input type="file" id="btn-file">
    </button>
  </div-->

  <div class="u-form five">
    <div class="u-info-security">
      <img class="u-icon-change-password" src="{conf.ASSETS}/golden/Other.svg" alt="">
      <span class="u-title">OTRO</span>
      <span>Verifique su número de teléfono rápido y fácil haciendo clic en el botón de abajo</span>
    </div>
    <UploadFile onFileLoaded={ (file) => identityfile=file} ></UploadFile>
    <button class="btn-save" on:click={ ()=> sendFile(identityfileName, identityfile)}>guardar</button>
  </div>
</div>

<style>
  .u-main-form{
    display: flex;
    flex-direction: column;
  }
  .u-form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 0.4rem;
    padding: 1rem;
    padding-right: 2rem;
  }
  .u-info-security{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .u-icon-change-password{
    width: 35px;
    height: 35px;
  }
  .u-title{
    font-size: 0.8rem;
    color: black;
  }
  span{
    font-size: 0.8rem;
    color: rgb(172, 171, 171);
  }
  .btn-save{
  width: 100%;
  height: 2rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
}

</style>
