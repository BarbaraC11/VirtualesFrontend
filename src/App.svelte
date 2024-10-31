<script>
  // @ts-nocheck

  import { DuplicatedSessionListener } from "u-library-sass";
  // @ts-nocheck
  import backend from "./server.js";
  import HomePage from "./pages/HomePage.svelte";
  import ProvidersPage from "./pages/ProvidersPage.svelte";
  import SlotPage from "./pages/SlotPage.svelte";
  import SlotLivePage from "./pages/SlotLivePage.svelte";
  import JackpotsPage from "./pages/JackpotsPage.svelte";
  import TopBar from "./lib/components/NavBar/TopBar.svelte";
  //import Footer from "./lib/components/Footer/Footer.svelte";
  import ModalGame from "./lib/components/Modal/ModalGame.svelte";
  import MenuCategoryPage from "../src/lib/components/Menu/MenuCategoryPage.svelte";
  import util from "./js/util";
  import Configuration from "./config";
  import Loading from "./lib/Loading.svelte";
  import SearchGamePage from "./pages/SearchGamePage.svelte";
  import ScratchPage from "./pages/ScratchPage.svelte";
  import CrashPage from "./pages/CrashPage.svelte";
  import VirtualGamePage from "./pages/VirtualGamePage.svelte";
  import ESportsPage from "./pages/ESportsPage.svelte";
  import Notifier from "./lib/components/Notifier.svelte";
  //import SportbookPage from "./pages/SportbookPage.svelte";
  import HorsesPage from "./pages/HorsesPage.svelte";
  import ServerConnector from "./js/server-connector.js";
  import EventManager from "./js/EventManager.js";
  import { onMount, onDestroy } from "svelte";
  import { watchResize } from "svelte-watch-resize";
  import BodyScrollUp from "./lib/components/Footer/BodyScrollUp.svelte";
  import Conditions from "./pages/Conditions.svelte";
  import axios from "axios";
  import MenuCategoryPage2 from "../src/lib/components/Menu/MenuCategoryPage2.svelte";

  import {
    t,
    Promotions,
    // Footer,
    ChatLive,
    ExpireSession,
    Modal as Modalv2,
    UserHelper,
    ScreenGames,
    SportbookPage,
  } from "u-library-sass";
  import NoLoginMenu from "./lib/components/NavBar/NoLoginMenu.svelte";
  import { bind } from "svelte/internal";

  let promotionsModalOpen = false;
  const onOpenPromotions = () => {
    promotionsModalOpen = true;
    modalOpened = "promotions";
  };

  const conf = Configuration.getConfiguration();
  const urlParams = new URLSearchParams(window.location.search);
  const defaultView = urlParams.get("v") || "home";

  let userState = "logout";
  let user;
  let usertoken = null;
  let agregatorToken = null;
  let horseGameUrl = "";
  let esportsGameUrl = "";
  let sportbookGameUrl = "";
  let showLoginModal = false;
  let showMainLoading = true;
  let active_view = defaultView;
  let sectionActive;
  let url_game = "";
  let searchValue;
  let searchGames = [];
  let topGames = [];
  let popGames = [];
  let newGames = [];
  let dropGames = [];
  let otherGames = [];
  let slotFavGames = [];
  let slotliveFavGames = [];
  let virtualFavGames = [];
  let scratchFavGames = [];
  let slotAutoSelected = null;
  let slotliveAutoSelected = null;
  let virtualAutoselected = null;
  let scratchAutoSelected = null;
  let crashAutoSelected = null;
  let mainLoadingMessage = "";
  let GAMEAPI_URL = conf.GAMEAPI_URL;
  let sportbookOptions;
  let gameselect = "";
  let f2Pressed = false;
  let urlAciertalaModalOpen = false;
  if (!localStorage.getItem("urlAciertalaRegister")) {
    localStorage.setItem("urlAciertalaRegister", "");
  }
  let urlAciertalaRegister = localStorage.getItem("urlAciertalaRegister");
  let urlAciertalaLocalStorage = localStorage.getItem("urlAciertalaRegister");

  let screenGamesOpen = false;
  let platform = "BetsAmerica";

  let heightMainContainer;
  const resizeMainContainer = () => {
    heightMainContainer = visualViewport.height - 56 + "px";
    console.log("hola", heightMainContainer);
  };

  window.addEventListener("popstate", (e) => {
    active_view = e.state ? e.state.name : defaultView;
  });
  window.addEventListener("resize", resizeMainContainer);
  onDestroy(() => {
    window.removeEventListener("resize", resizeMainContainer);
  });
  function configUrlAciertala(params) {
    urlAciertalaModalOpen = true;
    modalOpened = "configUrl";
  }

  onMount(async () => {
    window.addEventListener("resize", resizeMainContainer);
    console.log("mounr conf", conf);
    user = await UserHelper.checkAndLoadUserLogged(conf);
    console.log("USERHELPER:", user);
    if (user) {
      usertoken = user.token;
      agregatorToken = user.agregatorToken;
      userState = "loggedIn";
      getFavGames();
      updateBalance();
      windowLoad = false;
      //   configFooter.country.name=subContry;
      // configFooter.country.flag=subflag;
    }
    getTopGames();
    getPopGames();
    getNewGames();
    getDropGames();
    getOtherGames();
    showMainLoading = false;

    if (sessionStorage.getItem("user")) {
      updateTimeSession();
      windowLoad = false;
      //         configFooter.country.name=subContry;
      // configFooter.country.flag=subflag;
    }
    fetchData();
    getCountries();

    configFooter.country.name = subContry;
    configFooter.country.flag = subflag;
    console.log(configFooter);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "F2") f2Pressed = true;

    if ((f2Pressed && e.key === "r") || (f2Pressed && e.key === "R")) {
      f2Pressed = false;
      configUrlAciertala();
    }
    if (e.key !== "F2" && e.key !== "r") f2Pressed = false;
  });

  const updateTimeSession = async () => {
    expireSessionModalOpen = false;
    let user = JSON.parse(sessionStorage.getItem("user"));
    let oldBalance = user.balance;
    setTimeout(async () => {
      await updateBalance(user);
      let newBalance = JSON.parse(sessionStorage.getItem("user")).balance;
      oldBalance == newBalance ? onOpenExpireSession() : updateTimeSession();
    }, 1800000);
  };
  const getTopGames = async () => {
    const data = await backend.getGameList("slot", "TOP");
    topGames = data;
  };
  const getPopGames = async () => {
    const data = await backend.getGameList("slot", "POP");
    popGames = data;
  };
  const getNewGames = async () => {
    const data = await backend.getGameList("slot", "NEW");
    newGames = data;
  };
  const getDropGames = async () => {
    const data = await backend.getGameList("slot", "DROP");
    dropGames = data;
  };
  const getOtherGames = async () => {
    const data = await backend.getGameList("slot", "CLAS");
    otherGames = data;
  };

  const getFavGames = async () => {
    if (userState !== "logout") {
      const data = await backend.getFavGames(user.agregatorToken, "slot");
      slotFavGames = data.filter((e) => e.category == "slot");
      slotliveFavGames = data.filter((e) => e.category == "slot_live");
      virtualFavGames = data.filter((e) => e.category == "virtual");
      scratchFavGames = data.filter((e) => e.category == "scratch");
    }
  };

  const updateBalance = async () => {
    let data = JSON.parse(sessionStorage.getItem("user"));
    let updateBalance = await backend.getBalance(data.agregatorToken);
    const { balance, bonus_global, bonus_horses, bonus_slot, bonus_sportbook } =
      updateBalance;
    data.balance = balance;
    data.bonus_global = bonus_global;
    data.bonus_horses = bonus_horses;
    data.bonus_slot = bonus_slot;
    data.bonus_sportbook = bonus_sportbook;
    data.bonus_sumTotal =
      bonus_global + bonus_horses + bonus_slot + bonus_sportbook;
    sessionStorage.setItem("user", JSON.stringify(data));
    user = data;
  };

  const onLogin = async () => {
    getFavGames();
    console.log(user, conf);
    await UserHelper.connectToLobbySocket(user, conf);
    let currentUrl = window.location.href;
    let url = new URL(currentUrl);
    let urlOriginal = url.origin;
    window.location.href = urlOriginal;
    //location.reload();
  };

  const onLogout = () => {
    userState = "logout";
    active_view = "home";
    sessionStorage.removeItem("user");
    //showProfileModalMobile = false;
    location.reload();
    ServerConnector.disconnect();
  };

  const onOpenProviders = async (provider) => {
    console.log("provider", provider);
    if (provider.name == "UniversalRace" && userState == "logout") {
      onOpenLogin();
      return;
      //}
      //else if (provider.name == "Technamin" && userState == "logout") {
      //  showLoginModal = true;
      //  return;
    } else if (provider.name == "AVIATRIX") {
      active_view = "crash";
      crashAutoSelected = { filter: "brand", brand: provider };
    } else if (
      provider.name == "Beter" ||
      provider.name == "EVOLUTION" ||
      provider.name == "tvBet"
    ) {
      active_view = "slotlive";
      slotliveAutoSelected = { filter: "brand", brand: provider };
    } else if (provider.name == "GoldenRace") {
      active_view = "virtual";
      virtualAutoselected = { filter: "brand", brand: provider };
    } else if (provider.name == "Technamin" || provider.name == "Novus Bet") {
      active_view = "sportbook";
    } else if (provider.name == "UniversalRace") {
      active_view = "horses";
    } else {
      active_view = "slot";
      slotAutoSelected = { filter: "brand", brand: provider.code };
    }
  };

  const onCloseGameModal = async () => {
    let data = await backend.getBalance(user.agregatorToken);
    user.balance = data.balance;
  };

  const openGame = async (game) => {
    if (userState == "logout") {
      if (active_view != "sportbook" && active_view != "sportbooklive") {
        onOpenLogin();
      }
      return;
    }
    horseGameUrl = "";
    sportbookGameUrl = "";
    esportsGameUrl = "";
    url_game = "";

    if (
      active_view != "sportbook" &&
      active_view != "sportbooklive" &&
      active_view != "horses"
    ) {
      screenGamesOpen = true;
      document.body.style = "";
    } else {
      showMainLoading = true;
    }

    let gameToken = await backend.authInGame(user.agregatorToken);
    let url;
    url = util.getGameURL(conf.GAMEAPI_URL, game, gameToken.val.token);
    console.log("URL gte", url);
    if (game.provider == "ho") horseGameUrl = url;
    else if (game.provider == "bt") esportsGameUrl = url;
    else if (/edg/.test(game.provider)) {
      url = url + (game.page == "sportbooklive" ? "&currentgame=live" : "");
      sportbookGameUrl = url;
    } else if (
      game.provider == "adm" ||
      game.provider == "avt" ||
      game.provider == "sw"
    ) {
      let url_adm = await backend.getURLNovus(url); //esto es temporal
      url_game = url_adm.url;
    } else {
      url_game = url;
    }
    showMainLoading = false;
  };

  const onCategoryChange = async (cat, options) => {
    if (cat == "") {
      return;
    }
    if (util.categoryAllowedChange(cat, userState)) {
      onOpenLogin();
      return;
    } else {
      if (cat === "slot_Jokers Jewels") {
        let data = await backend.getGameList("slot", "DROP");
        let slot = {
          id: 91543,
          gameid: "vs10jokerhot",
          provider: "pg",
          name: "Jokers JewelsHot",
          description: "Se cargó a BD el 17/09/2024",
          type: "DROP",
          urlimage: ".png",
          mode: "wb",
          brand: "Pragmatic Play",
          status: 1,
          position: 1,
          category: "slot",
          reg_date: "2024-10-22T21:10:27.072+00:00",
          currency: null,
          isNew: 1,
          min_bet: 0,
          max_bet: 0,
          jackpot: 0,
        };
        openGame(slot);
      } else if (cat === "crash_Sumo Food Fest") {
        let brandFilter = { brand: "Vibra Gaming" };
        const data = await backend.getGameList("crash", brandFilter);
        let crashGame = data.find((item) => item.name === "Sumo Food Fest");
        openGame(crashGame);
      } else if (cat === "slot_High Flyer") {
        let brandFilter = { brand: "Pragmatic Play" };
        const data = await backend.getGameList("crash", brandFilter);
        let crashGame = data.find((item) => item.name === "High Flyer");
        openGame(crashGame);
      } else if (cat === "slot_It's Multi Time") {
        let data = await backend.getGameList("slot", "CLAS");
        let slot = {
          id: 91540,
          gameid: "256_NGT",
          provider: "ngt",
          name: "It's Multi Time",
          description: "Se cargó a BD el 17/09/2024",
          type: "CLAS",
          urlimage: ".png",
          mode: "wb",
          brand: "7777 GAMING",
          status: 1,
          position: 1,
          category: "slot",
          reg_date: "2024-09-17T12:07:25.620+00:00",
          currency: null,
          isNew: 0,
          min_bet: 0,
          max_bet: 0,
          jackpot: 0,
        };
        openGame(slot);
      } else if (cat === "slot_Fruit Invaders") {
        let data = await backend.getGameList("slot", "CLAS");
        let slot = {
          id: 91424,
          gameid: "amigo_FruitInvaders@AMIGO",
          provider: "agmg",
          name: "Fruit Invaders",
          description: "Se cargo a BD el 31/07/2024",
          type: "CLAS",
          urlimage: ".png",
          mode: "wb",
          brand: "Amigo Gaming",
          status: 1,
          position: 1,
          category: "slot",
          reg_date: "2024-10-23T17:24:58.521+00:00",
          currency: null,
          isNew: 1,
          min_bet: 0,
          max_bet: 0,
          jackpot: 0,
        };
        openGame(slot);
      } else if (cat === "slot_Aztec Riches") {
        let data = await backend.getGameList("slot", "CLAS");
        let slot = {
          id: 91541,
          gameid: "163_EUP",
          provider: "eu",
          name: "Aztec Riches",
          description: "Se cargó a BD el 17/09/2024",
          type: "CLAS",
          urlimage: ".png",
          mode: "wb",
          brand: "Eurasian",
          status: 1,
          position: 1,
          category: "slot",
          reg_date: "2024-09-17T12:08:05.706+00:00",
          currency: null,
          isNew: 0,
          min_bet: 0,
          max_bet: 0,
          jackpot: 0,
        };
        openGame(slot);
      } else if (cat === "slotlive_Football Studio") {
        const data = await backend.getGameList("slot_live", "", 1, "PEN", 150);
        let slotLiveGame = data.find((item) => item.name === "Football Studio");
        openGame(slotLiveGame);
      } else if (cat === "crash_Aviator") {
        let data = await backend.getGameList("crash", "FAST");
        let crashGame = data.find((item) => item.name === "Aviator");
        openGame(crashGame);
      } else if (cat === "amigo_gaming") {
        onOpenProviders({ code: "Amigo Gaming", name: "Amigo Gaming" });
      } else if (cat === "wild_gaming") {
        onOpenProviders({ code: "WILD GAMING", name: "WILD GAMING" });
      } else {
        if (cat === "sportbook" || cat === "sportbooklive") {
          //         if (conf.CLIENT_CODE == "LJPE") {
          //   typeSportbook="betsw3_2024";
          // } else {
          //   typeSportbook="8042022_digitain"
          // }
          let typeSportbook =
            conf.CLIENT_CODE == "LJPE" ? "betsw3_2024" : "8042022_digitain";
          sportbookOptions = options ? options : { gameid: typeSportbook };
          if (userState != "logout") {
            const gameToken = await backend.authInGame(user.agregatorToken);
            sportbookOptions.gameToken = gameToken.val.token;
          }
          active_view = cat;
        } else {
          active_view = cat;
          document.body.style.overflow = "auto";
          util.setUrlPage(active_view);
        }
      }
    }
  };

  async function fetchData() {
    let urlActual = window.location.href;
    if (
      urlActual == "https://betsamerica.bet" ||
      urlActual == "https://betsamerica.bet/" ||
      urlActual == "https://www.betsamerica.bet" ||
      urlActual == "https://www.betsamerica.bet/"
    ) {
      try {
        const response = await axios.get(
          "https://memxpwwdzm.us-west-2.awsapprunner.com/country"
        );
        console.log("subflagsubflagsubflag", response);
        let data = response.data;
        console.log("info: ", data.country);
        if (data && data.country == "PE")
          window.location.href = "https://pe.betsamerica.bet";
        else if (data && data.country == "AR")
          window.location.href = "https://ar.betsamerica.bet";
        else if (data && data.country == "US")
          window.location.href = "https://us.betsamerica.bet";
        else if (data && data.country == "EC")
          window.location.href = "https://ec.betsamerica.bet";
        else if (data && data.country == "CO")
          window.location.href = "https://co.betsamerica.bet";
        else if (data && data.country == "UY")
          window.location.href = "https://uy.betsamerica.bet";
        else windowLoad = "unlock";
      } catch (error) {
        console.log(error);
        windowLoad = "unlock";
      }
    } else {
      windowLoad = false;
    }
  }

  let subContry = "";
  let subflag = "";
  let windowLoad = sessionStorage.getItem("user") ? false : true;

  const getCountries = () => {
    console.log("GET COUNTRY", conf.country);
    if (conf.country == "" || conf.country == "AR") {
      subContry = "Argentina";
      subflag = "ars";
    } else if (conf.country == "CO") {
      subContry = "Colombia";
      subflag = "col";
    } else if (conf.country == "PE") {
      subContry = "Perú";
      subflag = "pe";
    } else if (conf.country == "EC") {
      subContry = "Ecuador";
      subflag = "ecu";
    } else if (conf.country == "US") {
      subContry = "USA";
      subflag = "usa";
    } else if (conf.country == "UY") {
      subContry = "Uruguay";
      subflag = "uy";
    }
    configFooter.country.name = subContry;
    configFooter.country.flag = subflag;
    //console.log(countries);
  };

  let loginModalOpen = false;
  let signupModalOpen = false;
  let modalOpened = "login";

  const onOpenLogin = () => {
    loginModalOpen = true;
    signupModalOpen = false;
    modalOpened = "login";
    setTimeout(() => {
      document.body.removeAttribute("style");
    }, 100);
  };
  const onOpenSignup = () => {
    signupModalOpen = true;
    modalOpened = "signup";
    loginModalOpen = false;
    setTimeout(() => {
      document.body.removeAttribute("style");
    }, 100);
  };

  const configFooter = {
    platform: "BetsAmerica",
    country:
      conf.country == "" || conf.country == "AR"
        ? { name: "Argentina", flag: "ars" }
        : conf.country == "CO"
          ? { name: "Colombia", flag: "col" }
          : conf.country == "PE"
            ? { name: "Perú", flag: "pe" }
            : conf.country == "EC"
              ? { name: "Ecuador", flag: "ecu" }
              : conf.country == "US"
                ? { name: "USA", flag: "usa" }
                : conf.country == "UY"
                  ? { name: "Uruguay", flag: "uy" }
                  : { name: "Argentina", flag: "ars" },

    isChat: false,
    createdIn: 2024,
    categoryGames:
      conf.country == "EC"
        ? [
            "slot",
            "slotlive",
            "crash",
            "scratch",
            "sportbook",
            "sportbooklive",
            "horses",
            "virtual",
          ]
        : [
            "slot",
            "slotlive",
            "sportbook",
            "sportbooklive",
            "horses",
            "virtual",
          ],
    //"slot","slotlive","crash","scratch","sportbook","sportbooklive","horses","virtual"
    payments: [],
    social: [
      //ASEGURATO DE COLOCAR EL NOMBRE EN MINUSCULA Y EL ENLACE CORRECTO!!!
      //{name:"facebook", url:"https://www.facebook.com/coliseosportoficial"},
      //{name:"instagram", url:"https://www.instagram.com/coliseosportoficial"},
      //social: []//si no hay redes sociales
    ],
    email: "",
    bonus: [
      //{name:"Bono Deportivas"}
    ],
    linksChats: [
      // {name: "Whatssap", url:"https://wa.me/525632540205"}
    ],
  };

  let chatLiveUrl = "https://tawk.to/chat/660c7316a0c6737bd127962c/1hqga34fk";
  let chatLiveModalOpen = false;

  let expireSessionModalOpen = false;

  const onOpenExpireSession = () => {
    expireSessionModalOpen = true;
    subModalOpened = "expireSession";
    chatLiveModalOpen = false;
  };

  let subModalOpened;
  const openChatLive = () => {
    chatLiveModalOpen = true;
    subModalOpened = "chatLive";
  };
  let urlAciertala = "https://readonly.aciertala.pe/sport";

  function openCategoryAciertala(params) {
    gameselect = params;
    console.log("gameselect", gameselect);

    if (params == "deportes") {
      urlAciertala = "https://readonly.aciertala.pe/sport";
    } else if (params == "envivo") {
      urlAciertala = "https://readonly.aciertala.pe/live?sportId=1";
    } else if (params == "virtuales") {
      urlAciertala = "";
    }
    // else if (params == "aciertalaweb"){
    //   urlAciertala = "https://www.pe.aciertala.com/sport";
    // }
    else if (params == "resultados") {
      urlAciertala = "https://statsinfo.co/live/1/";
    } else if (params == "estaditicas") {
      urlAciertala = "https://statsinfo.co/stats/1/c/26/";
    }
    // else if (params == "promociones"){
    //   urlAciertala = "https://peru.aciertala.com/promociones";
    // }
  }
  function saveUrlAciertalaRegister(params) {
    localStorage.setItem("urlAciertalaRegister", urlAciertalaRegister);
    location.reload();
  }
</script>

{#if windowLoad}
  {#if windowLoad == "unlock"}
    <div class="blockpais">Esta pagina esta bloqueada en tu pais</div>
  {:else}
    <div class="Ganawin">
      <div class="detectCountry">
        <b class="loading"><b><b></b></b></b>
      </div>
    </div>
  {/if}
{:else}
  <div>
    {#if urlAciertalaLocalStorage != ""}
      <!--{#if active_view != "sportbook" && active_view != "horses" && active_view != "esports"}-->
      <TopBar
        bind:loginModalOpen
        bind:signupModalOpen
        bind:modalOpened
        bind:userState
        bind:active_view
        bind:user
        bind:showLoginModal
        bind:showMainLoading
        bind:gameselect
        {openCategoryAciertala}
        {openChatLive}
        {onLogin}
        {onOpenLogin}
        {onOpenSignup}
        {onCategoryChange}
        {onOpenPromotions}
      />

      <!--{/if}-->
      <!--div class="games_top">
          <div class="game_img aviator">
            <img width="100%" src="https://images.virtualsoft.tech/m/msjT1695306094.gif" alt="">
          </div>
          <div class="game_img studio">
            <img width="100%" src="https://images.virtualsoft.tech/m/msj0212T1705529369.gif" alt="">
          </div>
        </div-->
      <div class="main-content">
        <!--{#if url_game != ""}
          <ModalGame
            bind:url_game
            bind:active_view
            bind:userState
            onCloseModal={onCloseGameModal}
          />
        {/if}-->

        {#if active_view == "home"}
          <div class="">
            <iframe
              src={urlAciertala}
              frameborder="0"
              style="min-height:{heightMainContainer}"
              width="100%"
              use:watchResize={resizeMainContainer}
            ></iframe>
          </div>
        {/if}
      </div>
      {#if active_view != "sportbook" && active_view != "sportbooklive" && active_view != "horses" && active_view != "esports"}
        <div class="Ganawin" style="width: 100%;">
          <Modalv2
            bind:open={promotionsModalOpen}
            bind:modalOpened
            title="Promociones"
          ></Modalv2>
        </div>
      {/if}
      {#if active_view != "sportbook" && active_view != "sportbooklive" && active_view != "horses" && active_view != "esports"}
        <BodyScrollUp></BodyScrollUp>
      {/if}
    {:else}
      <div class="princiblock">
        <div class="contentblock">
          <h1 class="textter">ACTIVAR <br> TERMINAL</h1>
          <img class="loginblock" src="https://assetsapiusoft.s3.us-west-2.amazonaws.com/aciertalaTech/tuercas.gif" alt="" />
        </div>
      </div>
    {/if}
  </div>
{/if}

<Loading bind:showMainLoading />
<Notifier />
<DuplicatedSessionListener bind:active_view bind:userState t={$t} />

<div class="Ganawin">
  <Modalv2
    bind:open={chatLiveModalOpen}
    bind:subModalOpened
    title="Chat en vivo"
  >
    <ChatLive bind:chatLiveUrl />
  </Modalv2>

  <Modalv2 bind:open={expireSessionModalOpen} bind:subModalOpened>
    <ExpireSession {updateTimeSession} bind:platform {onLogout} />
  </Modalv2>

  <ScreenGames
    bind:open={screenGamesOpen}
    bind:platform
    bind:url_game
    {updateBalance}
  />
  <div class="Ganawin" style="width: 100%;">
    <Modalv2 bind:open={urlAciertalaModalOpen} bind:modalOpened title="">
      <div class="configUrl__container">
        <input type="text" class="ipt" bind:value={urlAciertalaRegister} />
        <button class="btn save" on:click={() => saveUrlAciertalaRegister()}
          >GUARDAR</button
        >
      </div>
    </Modalv2>
  </div>
</div>

<style>
  /*.games_top{
    background: black;
    position: absolute;
    z-index: 1;
    top: 12.5rem;
    left: 0;
    width: 5.5rem;
    padding: 0.5rem;
    display: grid;
    gap: 0.5rem;
    border-radius: 0 10px 10px 0;
  }*/
  .game_img {
    border-radius: 10px;
  }
  .game_img.studio {
    background: linear-gradient(to right, rgb(28, 30, 43), rgb(2, 2, 117));
  }
  .game_img.aviator {
    background: linear-gradient(to right, rgb(28, 30, 43), rgb(180, 8, 48));
  }

  @media only screen and (max-width: 1200px) {
  }
  @media only screen and (min-width: 1200px) {
    .main-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .main-content {
      width: 100%;
    }
  }
  .loginblock {
    width: 30rem;
  }
  .princiblock {
    text-align: center;
    margin: 0;
    justify-content: center;
    align-items: center;
    background-image: url("https://assetsapiusoft.s3.us-west-2.amazonaws.com/aciertalaTech/bg-tuerca.png");
    background-size: cover;
    height: 100vh;
    display: flex;
  }
 
  .contentblock{
    display: flex;
    justify-content: center;
    align-items: center;
    gap:15rem;
  }
  .textter{
    font-size: 3rem;
    text-align: start;
  }
</style>
