<script>
  // @ts-nocheck
  import backend from "../../../server";
  import ProfileMobile from "../user_modales/mobile/ProfileMobile.svelte";
  import Modal from "../Modal/Modal.svelte";
  import NoLoginMenu from "./NoLoginMenu.svelte";
  import ProfileDesktop from "../user_modales/desktop/ProfileDesktop.svelte";
  import RegisterUserEmail from "../Modal_login/RegisterUserEmail.svelte";
  import UserMenuDesktop from "../user_modales/desktop/UserMenuDesktop.svelte";
  import UserMenuMobile from "../user_modales/mobile/UserMenuMobile.svelte";
  import HamburguerMenu from "../Menu/HamburguerMenu.svelte";
  import Configuration from "../../../config";
  import ModalProfileMobile from "../Modal/ModalProfileMobile.svelte";
  import ModalProfileDesktop from "../Modal/ModalProfileDesktop.svelte";
  import ModalEstadistic from "../Modal/ModalEstadistic.svelte";
  import {UserRegisterStepbyStep, ServerConnection, Depositx, Withdrawalw} from "u-library";
  import {t,locale,Promotions,Profile,Login,Modal as Modalv2,Utils as utils, Notifier,ServerConnection as ServerConnectionSass,Deposit,Signup, WithdrawalW, RecoverPassword, WithdrawalX} from 'u-library-sass';
  import { onMount } from 'svelte';

  import ModalPay from "../Modal/ModalPay.svelte";
  import WithdrawalSMS from "../Modal/WithdrawalSMS.svelte";
  import { construct_svelte_component } from "svelte/internal";
  
  export let openCategoryAciertala;
  export let userState;
  export let active_view;
  export let user = {};
  export let showLoginModal = false;
  export let onLogin;
  export let showMainLoading;
  export let category
  export let username =""
  export let password =""
  export let onCategoryChange;
  export let loginModalOpen;
  export let openChatLive;
  category = "slot";
  export let gameselect;
  export let onOpenPromotions;
  
  console.log("selectgame",gameselect);
  

  let showUserCreation = false;
  let showRegisterModal = false;
  let showProfileModalMobile = false;
  let showProfileModalDesktop = false;
  let showPasswordChangeModal = false;
  let resetpassModalOpen=false;
  let showRstadistic = false;
  let countryCodes=["51","1","113", "593", "57", "58"];
  
  
  //notify.setEM(EventManager);
  const conf = Configuration.getConfiguration();
  let logoUrl= conf.ASSETS+"/BetsAmerica/logo.png";

  ServerConnection.setConfig(conf);
  ServerConnectionSass.setConfig(conf);


  const onOpenRecoverPassword = () => { 
    loginModalOpen=false; 
    resetpassModalOpen=true;  
    modalOpened = "recoverPassword";
  }
  
  const onShowUserCreation = () => {
    user = {};
    showUserCreation = true;
  };



  const onShowRegisterModal = (ev) => {
    showRegisterModal = true;
  };

  const onShowLoginModal = () => {
    showLoginModal = true;
  };

  //const onDepositOk = (data) => {
  //  console.log("data",data);
  //  notify.success("Deposito Correcto");
  //};

  //const onDepositError = (e) => {
  //  console.log(e);
  //  notify.error("Código incorrecto");
  //};

  //const onCategoryChange=(cat)=>{
  //  if ( /horses|esports/.test(cat) && userState == "logout") { showLoginModal = true; return; }
  //  active_view=cat
  //  util.setUrlPage(active_view)
  //};

  const onWithdrawalError = async (error)=>{
        notify = {};
        notify = await utils.showNotify("error",error);
       
    }
    const onWithdrawalOk = async (data)=>{
        notify = await utils.showNotify("success",data);
        depositModalOpen = false;
    }

  const onProfileModalMobile = async () => {
    try {
      showProfileModalMobile = true;
      const data = await backend.getMyAccount(user.token);
      let serial_api_casino = user.serial_api_casino;
      let token = user.token;
      let agregatorToken = user.agregatorToken;
      user = { ...user, ...data };
      user.serial_api_casino = serial_api_casino;
      user.token = token;
      user.agregatorToken= agregatorToken;
    } catch (error) {
     // notify.error("Oops! ocurrió un error");
    }
  };

  const onLogout = () => {
    userState = "logout";
    active_view = "home";
    sessionStorage.removeItem("user");
    showProfileModalMobile = false;
    location.reload();
  };
  


  const onOpenMyAccount = async () => {
    showProfileModalDesktop = true;
    document.body.style.overflow="hidden";
    const data = await backend.getMyAccount(user.token);
    let serial_api_casino = user.serial_api_casino;
    let token = user.token;
    let agregatorToken = user.agregatorToken;
    user = { ...user, ...data };
    user.serial_api_casino=serial_api_casino;
    user.token=token;
    user.agregatorToken= agregatorToken;
  };

  const onPasswordChangeModal = () => {
    showPasswordChangeModal = true;
  };
  let scrollPosition = 0;
  let divClass = '';  
  const handleScroll = () => {
    scrollPosition = window.scrollY;
  
    if (scrollPosition < 60) {
      divClass = 'class-a';
    } else {
      divClass = 'class-b';
    }
  };
  onMount(() => {

    let currentUrl = window.location.href;
    console.log("domain",currentUrl);
    if(/resetPassword/.test(currentUrl)) {
      resetpassModalOpen=true;
      modalOpened = "recoverPassword";
    }else if (/afiliados/.test(currentUrl)) {//afiliado
            onOpenSignup();
        }
        
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  

//
let depositModalOpen = false;
export let signupModalOpen;
let withdrawalModalOpen = false;
export let modalOpened;
let platform = "BetsAmerica";
let notify = {};
 //Deposit Modal
export let amountsFav = [5000, 10000, 30000, 50000];
let assetsUrl="https://assets.apiusoft.com"+"";

export let onOpenLogin;
export let onOpenSignup;
export let openLive;

const configWithdrawal = {
        dataType : "static",
        messageOptional : "",
        formVerification : "https://docs.google.com/forms/d/e/1FAIpQLSdavkfXrBSGXI6glFExbZ3HWWMBnbeXlu8Hcc935upcP-3WeA/viewform?usp=sf_link",
        platform,
        banksNames: [
          
        ],
        typeAccount: [
           
        ], 
        linksChats: [
        //  {name: "Whatssap", url:"https://wa.me/525632540205"}
        ]
    };


  
  
  const configSignup = conf.configSignup;
  const configProfile = conf.configProfile;

const onOpenDeposit = () => { 
  depositModalOpen = true; 
  modalOpened = "deposit";  
  showProfileModalDesktop = false; 
  setTimeout(() => {
    document.body.removeAttribute('style');
  }, 100);
}

const onOpenWithdrawal = () => { 
    console.log("ola");
    withdrawalModalOpen = true; 
    modalOpened = "withdrawal" ;
    setTimeout(() => {
      document.body.removeAttribute('style');
    }, 100); 
  }
const onLoginOk = async (user_)=>{
        user = user_;
        notify = await utils.showNotify("success","Bienvenido a BetsAmerica");
        loginModalOpen = false;
        userState = "loggedIn";
        active_view = "home";
        let data = await backend.getBalance(user.agregatorToken);
        console.log("dataUpdate",data);
        user.balance = data.balance;
        user.bonus_cab = data.bo_general;
        onLogin();
    }
    const onLoginError = async (error)=>{
        notify = {};
        notify = await utils.showNotify("error",error);
    }

    const onSignupOk = async (user_) => {
    if (typeof user_ === "string") {
      notify = await utils.showNotify("success",user_);
    } else {
      user = user_;
      notify = await utils.showNotify("success","Registro exitoso, bienvenido a "+platform);
     
      signupModalOpen = false;
      const { data } = await ServerConnectionSass.users.login(
        user.username,
        user.password
      );
      if (data.username == "") throw "USER_NOT_FOUND";
      let date = new Date();
      date.setDate(date.getDate() + 1);
      data.expireToken = date.getTime();
      sessionStorage.setItem("user", JSON.stringify(data));
      onLoginOk(data);
    }
  };

  const onSignupError = async (error) => {
    notify = {};
        notify = await utils.showNotify("error",error);
  };

    const onDepositError = async (error)=>{
        notify = {};
        notify = await utils.showNotify("error",error);
      
    }
    const onDepositOk = async (data)=>{
       notify = await utils.showNotify("success",data);
        depositModalOpen = false;

      
    }
    const onRecoverPasswordOk = async (data)=>{
        notify = await utils.showNotify("success",data);
      
    }
    const onRecoverPasswordError = async (error)=>{
        notify = {};
        notify = await utils.showNotify("error",error);
    }

    function openPrivacyPolicies() {
      let enlace = `${assetsUrl}/Ganawin/politica.pdf`;
      let nuevaVentana = window.open('about:blank');
      if (nuevaVentana) {
        nuevaVentana.location.href = enlace;
      } else {
        window.location.href = enlace;
      }
    }
    function openTermsConditions() {
      let enlace = `${assetsUrl}/Ganawin/t&cofD&W.pdf`;
      let nuevaVentana = window.open('about:blank');
      if (nuevaVentana) {
        nuevaVentana.location.href = enlace;
      } else {
        window.location.href = enlace;
      }
    }

    const onShowEstadisticnModal = () => {
    if (userState !== 'loggedIn') {
      onOpenLogin();
    }else{

      showRstadistic = true;
    }

  };
let showWithdrawalModalSMS = false;
  const onShowWithdrawalSMS = ()=>{
    showWithdrawalModalSMS = true;
    showProfileModalDesktop = false;
    showProfileModalMobile = false;
  }

  const onOpenProfile = () => {
      profileModalOpen = true;
      modalOpened = "profile";
      setTimeout(() => {
    document.body.removeAttribute('style');
  }, 100);
  }
  let profileModalOpen = false; 

  const onProfileOk = async (data)=>{
        notify = await utils.showNotify("success",data);
    }
    const onProfileError = async (error)=>{
        notify = {};
        notify = await utils.showNotify("error",error);
        if (error == $t("msg.duplicatedSession")){
            onLogout();
            profileModalOpen = false;
        }
    }
    function abrirVentanaCompletaConEspacio() {
    const ancho = window.outerWidth;
    const alto = window.outerHeight - 216; // Resta 64px para dejar el espacio en la parte superior
    const posicionTop = 216; // Desplaza la ventana hacia abajo 64px
    console.log("alto",alto,"ancho",ancho);

    const nuevaVentana = window.open(
        "https://www.pe.aciertala.com/sport", // URL de la página que quieres abrir
        "_blank", // Nombre de la ventana
        `width=${ancho},height=${alto},left=0,top=${posicionTop}`
    );

    const verificarCierre = setInterval(() => {
    if (nuevaVentana.closed) {
        clearInterval(verificarCierre); // Detiene el intervalo cuando la ventana está cerrada
        openCategoryAciertala("deportes")
        // Aquí puedes realizar alguna acción cuando se detecte el cierre
    }
}, 500); // Verifica cada 500ms si la ventana está cerrada
  }
  


</script>

<div class="user-header {gameselect} {divClass} {active_view=='virtual' && userState != 'logout'?'virtual':''}" id="user-header">  
  <div class="user-header-principal">
      <!-- <HamburguerMenu 
      bind:active_view
      bind:userState
     {onOpenLogin}
     {onOpenPromotions}
     {onShowEstadisticnModal}
      onCategoryChange={onCategoryChange}>
    </HamburguerMenu>
   -->
      <!-- <button class="content-logo" on:click={() => (active_view = "home")}>
        <img class="smll_lg logo" src="{conf.ASSETS}/BetsAmerica/logo.png" alt="" />
        <img class="tall_lg logo" src="{conf.ASSETS}/BetsAmerica/logo_ba.png" alt="" />
        </button> -->
<button class= "btn" on:click={()=>openCategoryAciertala("deportes")}>
<video class="gif" muted autoplay loop src="https://assetsapiusoft.s3.us-west-2.amazonaws.com/aciertalaTech/banner.mp4" alt=""> </video>
</button>
        <div class="header_games">
          <button class="btn game dep {gameselect==='deportes'?'u-category-select1':''}" on:click={()=>openCategoryAciertala("deportes")}>
            <p class="text btn"> DEPORTES </p>
          </button> 
          <button class="btn game vivo {gameselect==='envivo'?'u-category-select2':''} " on:click={()=>openCategoryAciertala("envivo")}>
            <span class= "text btn"> VIVO </span>
          </button>
          <button class="btn game vir {gameselect==='virtuales'?'u-category-select3':''}" on:click={()=>openCategoryAciertala("virtuales")}>
            <span class= "text btn"> VIRTUALES </span>
          </button>
          <button class="btn game web {gameselect==='aciertalaweb'?'u-category-select4':''} aciertala" on:click={()=>{openCategoryAciertala("aciertalaweb");abrirVentanaCompletaConEspacio()}}>
            <span class= "text btn"> ACIERTALA WEB </span>
          </button>
          <button class="btn game result {gameselect==='resultados'?'u-category-select5':''}" on:click={()=>openCategoryAciertala("resultados")}>
            <span class= "text btn"> RESULTADO EN VIVO </span>
          </button>
          <button class="btn game estad {gameselect==='estaditicas'?'u-category-select6':''}" on:click={()=>openCategoryAciertala("estaditicas")}>
            <span class= "text btn"> ESTADITICAS </span>
          </button>
        </div>

      <div style="margin-right: 2rem;" >
        <!-- <svg width="1.25rem" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M32 271.692v192c0 17.664 14.368 32 32 32h160v-224H32zM480 143.692H378.752c7.264-4.96 13.504-9.888 17.856-14.304 25.824-25.952 25.824-68.192 0-94.144-25.088-25.28-68.8-25.216-93.856 0-13.888 13.92-50.688 70.592-45.6 108.448h-2.304c5.056-37.856-31.744-94.528-45.6-108.448-25.088-25.216-68.8-25.216-93.856 0-25.792 25.952-25.792 68.192-.032 94.144 4.384 4.416 10.624 9.344 17.888 14.304H32c-17.632 0-32 14.368-32 32v48c0 8.832 7.168 16 16 16h208v-64h64v64h208c8.832 0 16-7.168 16-16v-48c0-17.632-14.336-32-32-32zm-257.888-1.056s-1.344 1.056-5.92 1.056c-22.112 0-64.32-22.976-78.112-36.864-13.408-13.504-13.408-35.52 0-49.024 6.496-6.528 15.104-10.112 24.256-10.112 9.12 0 17.728 3.584 24.224 10.112 21.568 21.696 43.008 77.12 35.552 84.832zm73.664 1.056c-4.544 0-5.888-1.024-5.888-1.056-7.456-7.712 13.984-63.136 35.552-84.832 12.896-13.024 35.456-13.088 48.48 0 13.44 13.504 13.44 35.52 0 49.024-13.792 13.888-56 36.864-78.144 36.864zM288 271.692v224h160c17.664 0 32-14.336 32-32v-192H288z"></path></svg>
        <span class="game_txt">Promociones</span> -->
      </div>
  </div>
  <div class="u-control">
      {#if userState == "loggedIn"}
      <div class="in-mobile">
        <UserMenuMobile bind:user  {onOpenProfile} {onLogout}/>
      </div>
      <div class="balance in-desktop">
        <UserMenuDesktop
          bind:active_view
          bind:user
          {onOpenProfile}
          {onLogout}
        />
      </div>
    {:else}
      <div class="buttons">
        <NoLoginMenu
          {onShowLoginModal}
          {onShowRegisterModal}
          {onShowUserCreation}
          {onOpenLogin}
          {onOpenSignup}
          {openCategoryAciertala}
          bind:gameselect
          bind:showMainLoading
          bind:user
          bind:username
          bind:password
        />
      </div>
    {/if}
  </div>
</div>

<!--Modal bind:open={showLoginModal} modalSize="small">
  <Login
    onSubmitted={(data)=>onLogingClic(data, 'modal')}
    {onForgotPassword}
    bind:showMainLoading
  />
</Modal-->
<div class="Ganawin">
  <Modalv2 bind:open={loginModalOpen} bind:modalOpened >
    <Login onOk={onLoginOk} onError={onLoginError} {assetsUrl} {onOpenRecoverPassword} {onOpenSignup} bind:platform t={$t}/>
  </Modalv2>

  <Modalv2 bind:open={resetpassModalOpen} bind:modalOpened title={$t("recoverPassword.title")}>
    <RecoverPassword onOk={onRecoverPasswordOk} onError={onRecoverPasswordError} bind:open={resetpassModalOpen} t={$t}/>
  </Modalv2>

  <Modalv2 bind:open={signupModalOpen} bind:modalOpened title="Registrate Aquí">
    <Signup {configSignup} {openPrivacyPolicies} onOk={onSignupOk} onError={onSignupError}  {onOpenLogin} t={$t}/>
  </Modalv2>

  <Modalv2 bind:open={profileModalOpen} bind:modalOpened title="Mi cuenta">
      <Profile {configProfile} {onLogout}  onError={onProfileError} onOk={onProfileOk} bind:user t={$t}/>
  </Modalv2>



  <Notifier bind:notify/>

  <ModalPay bind:open={showWithdrawalModalSMS}>
    <WithdrawalSMS
      bind:open={showWithdrawalModalSMS}></WithdrawalSMS>
  </ModalPay>
  

  <Modal bind:open={showProfileModalDesktop} >
    <ProfileDesktop
      bind:user
      bind:open={showProfileModalDesktop}
      {onOpenDeposit}
      {onOpenWithdrawal}
      {onShowWithdrawalSMS}
    />
  </Modal>

</div>


<Modal bind:open={showRegisterModal}>
  <RegisterUserEmail bind:userState 
  {onPasswordChangeModal}
  />
</Modal>

<ModalProfileMobile bind:open={showProfileModalMobile}>
  <ProfileMobile
    bind:userState
    bind:user
    {onOpenDeposit}
    {onOpenWithdrawal}
    {onShowWithdrawalSMS}
    onLogout={() => onLogout()}
    onClosed={() => {
      showProfileModalMobile = false;
      document.body.style.overflowY = "scroll";
    }}
  />
</ModalProfileMobile>
<ModalEstadistic bind:open={showRstadistic}>
  <div>Holaaa</div>
</ModalEstadistic>

<!--ModalRegister  bind:open={showUserCreation} bind:user>
  <UserRegisterStepbyStep {logoUrl} bind:open={showUserCreation} bind:user userType={"X"} {countryCodes} {currencies} onOk={onRegisterOk} platform={"Ganawin"} />
</ModalRegister-->

<!--ModalPayments bind:open={showDeposit}>
  <Depositx bind:user bind:open={showDeposit} onOk={onDepositOk} onError={onDepositError} />
</ModalPayments-->
<!-- ESTO NO SIRVE FALTA HACER VALIDACIONES ERROR  -->
<!--Modal bind:open={showWithdrawal} showCloseButton={false}>
  <Withdrawalw
    bind:user
    bind:open={showWithdrawal}
    bind:pendingWhitdrawall 
    onOk={onWithdrawalOk}
    onError={onWithdrawalError}
  />
</Modal-->

<style>
.content-logo{
  position: relative;
}
.smll_lg{

  width: 9rem;
}
@media (min-width:401px){
        .smll_lg{
          display:block;
        }
        .tall_lg{
          display:none;
        }

      }
      @media (max-width:400px){
        .smll_lg{
          display:none;
        }
        .tall_lg{
          width: 2.25rem !important;
          display:block;
        }

      }
.estanew{
    position: absolute;
    top: -5px;
    right: 0;
    background: red;
    font-weight: 500;
    font-size: 14px;
    font-family: system-ui;
    border-radius: 0.25rem;
    padding: 0 0.25rem;
  }
  @media (max-width:1440px){
    .game_txt{
      display: none;
    }
  }
.games_top{
  display: flex;
    width: 8rem;
    gap: 0.5rem;
}
.game_img{
  cursor: pointer;
  border-radius: 10px;
    display: flex;
    align-items: center;
    font-weight: 600;
   padding: 0.25rem 1rem;
  }
.game_img img{
  width: 3rem;
   
  }
  .game_img.studio{
    background: linear-gradient(to right, rgb(28, 30, 43), rgb(2, 2, 117));
  }
  .game_img.aviator{
    background: linear-gradient(to right, rgb(28, 30, 43), rgb(180, 8, 48));
  }
.estuditc.prom {
    margin-right: 0;
    margin-left: 1rem;
    display: flex;
    justify-content: center;
    gap: 5px;
    align-items: center;
}
.estuditc {
    margin: 1rem;
    margin-left: 0;
    background: #870c1f;
    padding: .5rem;
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    gap: 5px;
}

  .class-b{
    background-color: #313439 !important;
    position: fixed;
    z-index: 6;
    top: 0;
  }
  /*.user-header.virtual{
    position: fixed;
    z-index: 101;
    top: 0;
  }*/
  .user-header {
    background-color: #313439;
  }
  @media only screen and (max-width: 1022px) {

    .estuditc, .estuditc.prom, .in-desktop,.games_top {
    display: none;
}
    .user-header {
      width: 100%;
      /*background-color: #050505;*/
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 3.5rem;
    }
    .user-header-principal {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left: 0.5rem;
      gap: 0.5rem;
    }
    .content-logo{
      max-width: 7.5rem;
      height: 50px;
      padding: 0;
      background-color: transparent;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
    }
    .logo {
      width: 6.5rem;
      top: 0;
      height: auto;
    }
  }
  @media only screen and (min-width: 1024px) {
    .in-mobile {
      display: none;
    }
    .user-header {
      width: 100%;
      /*background-color: #050505;*/
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 3.5rem;
    }
    .user-header-principal {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left: 0.5rem;
      gap: 0.25rem;
    }
    .content-logo{
      background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    padding: 0;
    width: 8rem;
    }
    .logo{
      width: 9rem;
      
    }
  }
  .user-header *{
    font-size: 13px;
  }
  .header_games{
    display: flex;
    padding: 0 0 0 2rem;
  }
  
  .text.btn{
    color: white;
    font-size: 16px;
    font-family: "Inter", sans-serif;
    font-style: normal;
    line-height: normal;
    border:none;
  
  }

  .class-b{
    display: flex;
  }
  .game{
    border-radius: 5px;
    background: #3E3E3E;
    box-shadow: 0px 21px 9.5px -13px rgba(209, 209, 209, 0.25) inset, 0px -13px 11px -5px rgba(0, 0, 0, 0.27) inset;
    width: 144px;
    height: 48px;
    margin: 0.2rem;
    padding: 0;
  }
  .game.result{
    width: 200px;

  }
  .gif{
    width: 16rem;
    border-radius: 0.5rem;
  }
  .btn{
    background: transparent;
    border: none;
  }
  .aciertala{
      width: 188px;
    }
    .btn.game.dep:hover,
    .u-category-select1{
background-color: #276dd4;
/* width: 8rem; */
}
.btn.game.vivo:hover,
    .u-category-select2{
background-color: #229B26;
/* width: 8rem; */
}
.btn.game.vir:hover,
    .u-category-select3{
background-color: #AFAF24;
/* width: 8rem; */
}
.btn.game.web:hover,
    .u-category-select4{
background-color:#5898ff;
/* width: 8rem; */
}
.btn.game.estad:hover,
    .u-category-select6{
background-color: #5E24AF;
/* width: 8rem; */
}
.btn.game.result:hover,
    .u-category-select5{
background-color: #AF2424;
/* width: 8rem; */
}
.user-header.virtuales{
  border-bottom: 2px solid #AFAF24;
}
.user-header.envivo{
  border-bottom: 2px solid #229B26;
}
.user-header.deportes{
  border-bottom: 2px solid #276dd4;
}
.user-header.aciertalaweb{
  border-bottom: 2px solid #5898ff;
}
.user-header.estaditicas{
  border-bottom: 2px solid #5E24AF;
}
.user-header.resultados{
  border-bottom: 2px solid #AF2424;
}
</style>
