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
  export let urlAciertala;
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
    document.body.style.overflow="hidden";
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

    let disableOpenWindow = false;

    let nuevaVentana;

    function abrirVentanaCompletaConEspacio() {
    const ancho = window.outerWidth;
    const alto = window.outerHeight - 216; // Resta 64px para dejar el espacio en la parte superior
    const posicionTop = 216; // Desplaza la ventana hacia abajo 64px
    console.log("alto",alto,"ancho",ancho);

     nuevaVentana = window.open(
        "https://www.pe.aciertala.com/sport", // URL de la página que quieres abrir
        "_blank", // Nombre de la ventana
        `width=${ancho},height=${alto},left=0,top=${posicionTop}`
    );
    disableOpenWindow = true;

    const verificarCierre = setInterval(() => {
        if (nuevaVentana.closed) {
          disableOpenWindow = false;
            clearInterval(verificarCierre); // Detiene el intervalo cuando la ventana está cerrada
            openCategoryAciertala("deportes")
            closewindow()
            // Aquí puedes realizar alguna acción cuando se detecte el cierre
        }
    }, 500); // Verifica cada 500ms si la ventana está cerrada
  }

  let nuevaVentanaREGISTER;
  function abrirVentanaCompletaConEspacioREGISTRO() {
    const ancho = window.outerWidth;
    const alto = window.outerHeight - 216; // Resta 64px para dejar el espacio en la parte superior
    const posicionTop = 216; // Desplaza la ventana hacia abajo 64px
    console.log("alto",alto,"ancho",ancho);
    urlAciertala = "logo";
     nuevaVentanaREGISTER = window.open(
        localStorage.getItem("urlAciertalaRegister"), // URL de la página que quieres abrir
        "_blank", // Nombre de la ventana
        `width=${ancho},height=${alto},left=0,top=${posicionTop}`
    );

    const verificarCierre = setInterval(() => {
        if (nuevaVentanaREGISTER.closed) {
          disableOpenWindow = false;
            clearInterval(verificarCierre); // Detiene el intervalo cuando la ventana está cerrada
            openCategoryAciertala("deportes")
            // Aquí puedes realizar alguna acción cuando se detecte el cierre
        }
    }, 500); // Verifica cada 500ms si la ventana está cerrada

  }

  let ventanaEmergente = null; // Almacena la referencia de la ventana emergente
  let botonesDeshabilitados = [false, false, false,false]; // Estado de los botones (habilitado/deshabilitado)
  const isWinWebview = () => window["chrome"] && window["chrome"]["webview"] ? true : false;
  function abrirVentana(index, url) {

    if (index == 0) {
      gameselect = 'aciertalaweb';
    }else if (index == 1) {
      gameselect = 'transmision';
    }else if (index == 3) {
      gameselect = 'navegador';
    }
    console.log("gameselect",gameselect,ventanaEmergente,index);
    
    const posicionTop = isWinWebview()?86:146;
    const ancho = window.innerWidth;
    const alto = window.innerHeight - posicionTop;
    
        // Cierra la ventana existente si ya hay una abierta
        if (ventanaEmergente && !ventanaEmergente.closed) {
            ventanaEmergente.close();
        }
        urlAciertala = "logo";

        // Abre la nueva ventana emergente y deshabilita el botón correspondiente
        ventanaEmergente = window.open(url, "_blank", `width=${ancho},height=${alto},left=0,top=${posicionTop}`);
        botonesDeshabilitados = botonesDeshabilitados.map((_, i) => i === index);
        
        // Monitorea el cierre de la ventana cada segundo
        const intervalID = setInterval(() => {
            if (ventanaEmergente.closed) {
                habilitarTodosLosBotones();
                openCategoryAciertala("deportes");
                clearInterval(intervalID);
            }
        }, 1000);
    }

    function habilitarTodosLosBotones() {
        // Restablece el estado de los botones para habilitarlos todos
        botonesDeshabilitados = [false, false, false,false];
        console.log(botonesDeshabilitados);
        console.log(botonesDeshabilitados[3]);
        
        
    }



  function closewindow(params) {
    ventanaEmergente.close();
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
          <button class="btn game dep {gameselect==='deportes'?'u-category-select1':''}" on:click={()=>{openCategoryAciertala("deportes");closewindow()}}>
            <p class="text btn"> DEPORTES </p>
          </button> 
          <button class="btn game vivo {gameselect==='envivo'?'u-category-select2':''} " on:click={()=>{openCategoryAciertala("envivo");closewindow()}}>
            <span class= "text btn"> VIVO </span>
          </button>
          <button class="btn game vir {gameselect==='virtuales'?'u-category-select3':''}" on:click={()=>{openCategoryAciertala("virtuales"),closewindow()}}>
            <span class= "text btn"> VIRTUALES </span>
            <div class="nextanun yellow">Golden Race</div>
          </button>
          <button class="btn game result {gameselect==='resultados'?'u-category-select5':''}" on:click={()=>{openCategoryAciertala("resultados");closewindow()}}>
            <span class= "text btn"> RESULTADO EN VIVO </span>
          </button>
          <button class="btn game estad {gameselect==='estaditicas'?'u-category-select6':''}" on:click={()=>{openCategoryAciertala("estaditicas");closewindow()}}>
            <span class= "text btn"> ESTADITICAS </span>
          </button>
          <button class="btn game web {gameselect==='aciertalaweb'?'u-category-select4':''} aciertala"  on:click={() => abrirVentana(0, 'https://www.pe.aciertala.com/sport')} disabled={botonesDeshabilitados[0]}>
            <span class= "text btn"> ACIERTALA WEB </span>
            <div class="nextanun green">Login</div>
          </button>
          <button class="btn game web {gameselect==='transmision'?'u-category-select6':''} aciertalaxd" on:click={() => abrirVentana(1, 'https://365livesport.org/')} disabled={botonesDeshabilitados[1]}>
            <span class= "text btn"> TRANSMISIÓN </span>
          </button>
          <button class="btn game web {gameselect==='navegador'?'u-category-select7':''} chrome" on:click={() => abrirVentana(3, 'https://www.google.com/')} disabled={botonesDeshabilitados[3]}>
            <span class= "text btn fee">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 400 400">
                <defs>
                  <style>
                    .cls-1 {
                      fill: #fff;
                    }
                  </style>
                </defs>
                <!-- Generator: Adobe Illustrator 28.7.1, SVG Export Plug-In . SVG Version: 1.2.0 Build 142)  -->
                <g>
                  <g id="Capa_1">
                    <g>
                      <path class="cls-1" d="M14.47,189.85c1.21-8.58,2.09-17.22,3.71-25.72,4.27-22.38,12.75-43.12,25.3-62.93.84,1.66,1.49,2.87,2.09,4.11,21.74,44.95,43.44,89.91,65.21,134.84,11.69,24.13,29.52,41.84,54.83,51.45,16.75,6.36,33.99,7.81,51.62,4.52.58-.11,1.17-.18,2.39-.37-1.14,1.46-1.9,2.49-2.72,3.49-20.99,25.73-42.02,51.43-62.92,77.23-1.7,2.1-3.11,2.19-5.44,1.5-38.21-11.38-69.64-32.83-94.34-63.99-18.28-23.06-30.41-49.15-36.02-78.1-1.51-7.79-2.11-15.76-3.15-23.65-.15-1.18-.39-2.35-.58-3.53,0-6.28,0-12.56,0-18.85Z"/>
                      <path class="cls-1" d="M211.63,14.44c6.42.91,12.86,1.65,19.24,2.77,40.33,7.11,74.37,25.94,102.65,55.39,3.67,3.83,7.02,7.96,10.51,11.97.22.25.29.63.62,1.36-7.18.81-14.17,1.62-21.17,2.37-26.39,2.86-52.79,5.7-79.18,8.55-18.24,1.97-36.48,3.84-54.71,5.93-40.35,4.63-72.52,32.01-83.6,71.02-.26.91-.55,1.81-1.02,3.32-.8-1.45-1.39-2.39-1.86-3.38-14.31-29.91-28.59-59.83-42.96-89.72-1.01-2.11-1.04-3.47.64-5.36,29.34-32.98,65.48-53.9,109.06-61.63,6.39-1.13,12.88-1.75,19.32-2.61,7.49,0,14.98,0,22.47,0Z"/>
                      <path class="cls-1" d="M176.16,383.72c6.11-7.49,11.8-14.49,17.51-21.48,27.42-33.57,54.76-67.2,82.27-100.7,34.43-41.94,27.44-104.89-15.47-138.16-2.25-1.74-4.55-3.42-7.48-5.62,8.29-.91,15.78-1.74,23.28-2.54,26.4-2.83,52.8-5.61,79.19-8.55,3.14-.35,4.83.29,6.48,3.27,16.29,29.37,24.61,60.81,23.5,94.35-1.89,57.37-25.65,104.27-69.99,140.49-28.09,22.95-60.59,35.93-96.66,39.82-13.97,1.51-27.94,1.21-42.63-.9Z"/>
                      <path class="cls-1" d="M199.57,276.1c-42.09-.43-76.01-34.75-75.64-76.54.38-41.97,34.83-76.02,76.55-75.66,41.96.37,76.07,34.88,75.65,76.55-.43,42.01-34.9,76.07-76.56,75.65ZM200.21,232.59c17.72-.15,32.51-15.07,32.42-32.69-.1-17.77-14.89-32.51-32.6-32.49-17.88.03-32.86,15.13-32.59,32.87.28,17.87,15.07,32.46,32.77,32.32Z"/>
                    </g>
                  </g>
                </g>
              </svg>
              Google </span>
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
          {abrirVentana}
          {openCategoryAciertala}
          bind:botonesDeshabilitados
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

  .nextanun{
    position: absolute;
    right: 0.15rem;
    border-radius: 0.5rem;
    font-size: 10px;
    padding: 0.1rem 0.2rem;
  }
  .nextanun.yellow{
    background: #f4ff00;
  }
  .nextanun.green{
    background: #00d234;
  }
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
  .text.btn.fee{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
  .text.btn svg{
    width: 1.75rem;
  }

  .class-b{
    display: flex;
  }
  .game{
    position: relative;
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
.btn.game.aciertalaxd:hover,
    .u-category-select6{
background-color: #a324af;
/* width: 8rem; */
}
.btn.game.chrome:hover,
    .u-category-select7{
background-color: #da6623;
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
