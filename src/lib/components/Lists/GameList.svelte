<script>
  import backend from "../../../server";
  import { onMount, beforeUpdate, afterUpdate } from "svelte";
  import util from "../../../js/util";
  import Configuration from "../../../config";
  import EventManager from "../../../js/EventManager";
  
  export let id = Math.floor(Math.random() * 1000000);
  export let games;
  export let favGames;
  export let title;
  export let prefix = "";
  export let userState;
  export let category;
  export let section;
  export let user = {};
  export let onOpenGame;
  export let search=false;
  export let searchValue=null;
  export let isFinalPage=false;

  const conf = Configuration.getConfiguration();
  let notifyMesssage;
  export let page = 1;
  let showNotifyMesssage = false;
  let assets = conf.ASSETS;
  let imageName = "fuego.svg";

  //$:isFinalPage=!showViewMore;
   
  const imageNameSelected = (title) =>{
    if(title == "FAVORITOS" || title == "Juegos" || title == "& Wins" || title == "RULETA" || title == "WHEEL" || title == "SHOWS") imageName = "Estrella.svg";
  };

  beforeUpdate(() => {
    if (favGames && favGames.length) {
      games = util.checkSetIsFav(games, favGames);
    }
  });

  const openGame = (game) => {
    onOpenGame(game);
    console.log("gameeee",game);
  };

  const viewMore = async () => {
    isFinalPage=false;
    page++;
    if( search ) section={search:searchValue}
    if (category == "searchAll") section = {searchAll:title}
    
    const data = await backend.getGameList(category, section, page);
    if( data.length) games = games.concat(data);
    //showViewMore=false;
    isFinalPage= data.length < 20 ;
  };

  const saveFav = async (gameId, action) => {
    if (userState == "logout") {
      console.log("not loggedIn");
      return;
    }
    if (!favGames) {
      notifyMesssage = EventManager.publish("notify", {mode:"error", msg:"No se pudo cambiar tus favoritos"});
      showNotifyMesssage = true;
      return;
    }
    if (action == "add") {
      favGames.push(games.find((e) => e.id == gameId));
      favGames = favGames;
    } else {
      favGames = favGames.filter((e) => e.id != gameId);
    }
    const data = await backend.saveFav(user.agregatorToken, gameId, action);
    notifyMesssage = `${
      action == "add" ? EventManager.publish("notify", {mode:"success", msg:"Agregado a tus favoritos"}): EventManager.publish("notify", {mode:"success", msg:"Eliminado de tus favoritos"})
    } Favoritos`;
    showNotifyMesssage = true;
  };
  imageNameSelected(title);

  onMount(()=>{
    console.log("mount");
  });

  
</script>

{#if games.length}
  <div id="{id+''}">
    <article class="cat-top-games">
      <div class="cat-title">
        <img loading="lazy" class="u-icon-title" src="{conf.ASSETS}/golden/{imageName}" alt="">
        <span style="color:white">{prefix}</span>
        <span class="category-subtitle">{title}</span>
      </div>
      {#if section == "TOP"}
      <div style="overflow: auto;">
        <div class="game-list top">
          {#each games as game}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="game-block">
              <div class="game_inner">
                {#if game.min_bet > 0 }
                <div class="lazo-maxbet" >
                  {user.currency||''} {game.min_bet.toFixed(2)}
                </div>
                {/if}
                {#if section == 'NEW' || game.isNew==1}
                <div class="lazo-maxbet" >
                  NUEVO
                </div>
                {/if}
                {#if game.jackpot > 0 }
                <div class="lazo-jackpot" >
                  {user.currency||''} {game.jackpot.toFixed(2)}
                </div>
                {/if}
                  
                <img loading="lazy" class="game-img" on:click={() => openGame(game)}  src={util.getImgUrl(assets, game)} alt="" on:error={(e) => (e.target.src = `${conf.ASSETS}/us_img_games/_no_game1.png`)} />

                <div class="play-top" on:click={() => openGame(game)}>Juega Ahora</div>
              </div>  
              
        
            </div>
          {/each}
        </div>
      </div>
      {:else}
      <div class="game-list">
        {#each games as game}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <div class="game-block" >
            <div class="game_inner">
              {#if game.min_bet > 0 }
              <div class="lazo-maxbet" >
                {user.currency||''} {game.min_bet.toFixed(2)}
              </div>
              {/if}
              {#if section == 'NEW' || game.isNew==1}
              <div class="lazo-maxbet" >
                NUEVO
              </div>
              {/if}
              {#if game.jackpot > 0 }
              <div class="lazo-jackpot" >
                {user.currency||''} {game.jackpot.toFixed(2)}
              </div>
              {/if}

              <div style="position: relative; width:100%" >
                <img loading="lazy" class="game-img" on:click={() => openGame(game)}  src={util.getImgUrl(assets, game)} alt="" on:error={(e) => (e.target.src = `${conf.ASSETS}/us_img_games/_no_game1.png`)} />
                <div class="game_overlay" on:click={() => openGame(game)}>
                  <div class="game_provider">
                    <!--img loading="lazy" class="img-fluid" src={util.getProviderImgUrl(assets, game)} alt=""/-->
                    <div class="game_now">!Empieza ahora¡</div>
                  </div>
                </div>
              </div>
              
            </div>
            
            <div class="u-game-content-fav">
              <div class="gG_cont" on:click={() => openGame(game)}>
                <b class="u-game-title">{game.name}</b>
                <p class="brand_mt">{game.brand}</p>
              </div>
              <div class="u-like-game">
                {#if game.isFav}
                  <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" x="0px" y="0px" on:click={() => saveFav(game.id, "remove")}>
                  <style type="text/css">
                  .st0 {fill: url(#SVGID_1_);}
                  </style>
                  <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="439.7742" y1="35.4318" x2="100.8358" y2="321.7496" >
                  <stop offset="0" style="stop-color:#b20b24" />
                  <stop offset="0.5422" style="stop-color:#b20b24" />
                  <stop offset="1" style="stop-color:#b20b24" />
                  </linearGradient>
                  <path class="st0" d="M466.26,73.53c-56.07-56.07-146.98-56.07-203.05,0l-7.68,7.68l-7.68-7.68c-56.07-56.07-146.98-56.07-203.05,0
	                  C-11.27,129.6-11.27,220.5,44.8,276.58l109.2,109.2l101.52,101.53l101.52-101.52l109.2-109.2 C522.33,220.5,522.33,129.6,466.26,73.53z" /></svg>
                  {:else}
                    <svg fill="#b20b24" height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" on:click={() => saveFav(game.id, "add")} >
                      <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" />
                    </svg>
                {/if}
              </div>
            </div>
          </div>
        {/each}
      </div>
      {/if}
     



      {#if !isFinalPage && (games.length >= 20 && games.length % 20 == 0) }
        <div class="show-more">
          <button class="btn-show" on:click={viewMore}>
            <span class="view-more">Ver Más</span>
            <!--svg
              stroke="#fff"
              fill="#000"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z"
              />
            </svg-->
          </button>
        </div>
      {/if}
    </article>
  </div>
{/if}

<style>
  .brand_mt{
    font-size: 0.8rem;
  }
  .gG_cont{
    padding: 0.25rem 0.5rem;
    text-align: start;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .stb-button._custom-button .custom-button--primary {
    color: rgb(var(--brownColor));
    background: var(--yellow100Gradient);
    box-shadow: inset 0 3px 12px rgba(255,230,204,.6);
}
.game-block:hover .gG_cont,.game-block:hover .brand_mt{
  color: #f5c20a;
}
.play-top {
    text-transform: uppercase;
    background: #e2b200;
    padding: 0.5rem 1rem;
    border-radius: 0 0 5px 5px;
    cursor: pointer;
    font-size: 14px;
    width: 100%;
    font-weight: 700;
    color: #000;
    text-align: center;
    box-shadow: inset 0 3px 12px rgba(255, 224, 204, 0.6);
}
  .play-top:hover{
    background: #e2b200;
  }
  .u-game-ttop{
    font-size: 1rem;
    font-weight: 600;
  }
  .u-game-ttopB{
    font-size: 14px;
    color: rgb(216 127 255);
  }
  .container-top{
    display: grid;
    justify-items: center;
    gap: 0.5rem;
    font-size: 1.2rem;
  }
.game_overlay.top{
  padding: 0.5rem;
}
.u-like-game.top{
  text-align: end;
}
.game_inner{
  cursor: pointer;
}
      .u-game-content-fav {
        background-color: #3a3a48;
      }
   .game-block{
    position: relative;
    overflow: hidden;
   }
  .lazo-maxbet{
    color: white;
    position: absolute;
    right: -25px;
    top: 15px;
    background: #d02120;
    width: 100px;
    text-align: center;
    transform: rotate(45deg);
    z-index: 0;
    font-weight: bold;
    font-size: 14px;
    text-shadow: 1px 1px 3px black;
  }
  .lazo-jackpot {
    position: absolute;
    text-align: center;
    background: url(https://d2zzz5z45zl95g.cloudfront.net/casino/images/chapa.png);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    color: white;
    font-weight: 600;
    padding: 2.3rem;
    font-size: 9px;
    border-radius: 20px;
    top: 2px;
    left: -22px;
    transform: rotate(-15deg);
    text-shadow: 1px 1px 3px black;
  }

  @media only screen and (max-width: 800px) {
    .u-icon-title{
      width: 25px;
      height: 25px;
    }
    .cat-title{
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.4rem;
      margin-left: 1rem;
      margin-top: 1rem;
      margin-bottom: 0.5rem;
      font-size: 1.2rem;
    }
    .game_inner {
      display: contents;
      position: relative;
      border-radius: 8px 8px 0 0;
      overflow: hidden;
      background-position: center;
      background-size: cover;
      height: 100%;
    }
    .category-subtitle {
      color: #2980b9;
    }
    .cat-top-games {
      padding-left: 10px;
      padding-right: 10px;
   
    }
    .game-list {
      width: 100%;
      display: grid;
      grid-template-columns: 47% 47%;
      justify-content: space-around;
      gap: 1rem;
      padding-bottom: 30px;
    }
    .game-list.top {
      width: 200%;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    .game-block {
      background-color: #323235;
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items: center;
      border-radius: 0.4rem;
    }
    .game-block img {
      width: 100%;
      height: 100%;
    }
    .u-game-content-fav {
      display: grid;
      grid-template-columns: 1fr 3rem;
      justify-content: space-around;
      align-items: center;
      text-align: center;
      width: 100%;
    }
    .u-game-title{
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 80%;
    }
    .u-like-game{
      padding-top: 0.2rem;
    }
    .game_overlay {

      /*position: absolute;*/
      display: none;
      top: 0;
      left: 0;
      /*background: rgba(39, 42, 49, 0.75);**/
      -webkit-animation: fadeIn 0.33s;
      animation: fadeIn 0.33s;
      border-radius: 8px 8px 0 0;
      width: 100%;
      height: 100%;
      /*backdrop-filter: blur(4px);*/
    }
    
    
    .show-more {
      width: 100%;
      text-align: center;
      padding: 10px 0;
      padding-bottom: 0;
      z-index: 1;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      padding-bottom: 2rem;
    }
    .btn-show {
      background: rgb(163 10 33);
      position: relative;
    z-index: 1;
      align-items: center;
      justify-content: center;
      color: #fff;
      border: none;
      display: flex;
      gap: 0.4rem;
      padding: 0.5rem 2rem;
      font-weight: bold;
      margin: 0 2px;
      cursor: pointer;
      border-radius: 5px;
      width: 12rem;
        height: 35px;
      height: 35px;
    }
    .btn-show:hover{
      background: rgb(163 10 33);
    }
  }

  @media only screen and (min-width: 800px) {
    .u-icon-title{
      width: 25px;
      height: 25px;
    }
    .cat-title{
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.4rem;
      margin-left: 1rem;
      margin-top: 1rem;
      margin-bottom: 0.5rem;
      font-size: 1.2rem;
    }
    .game_inner {
      display: contents;
      position: relative;
      border-radius: 8px 8px 0 0;
      overflow: hidden;
      background-position: center;
      background-size: cover;
      height: 100%;
    }
    .category-subtitle {
      color: #2980b9;
    }
    .cat-top-games {
      padding-left: 10px;
      padding-right: 10px;
     
    }
    .game-list {
      width: 100%;
      display: grid;
      grid-template-columns: 30% 30% 30%;
      justify-content: space-around;
      gap: 1rem;
      padding-bottom: 100px;
    }
    .game-block {
      background-color: #323235;
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items: center;
      border-radius: 0.4rem;
    }
    .game-block img {
      width: 100%;
      height: 100%;
    }
    .u-game-content-fav {
      width: 100%;
      display: grid;
    grid-template-columns: 1fr 3rem;
      justify-content: space-around;
      align-items: center;
      text-align: center;
    }
    .u-game-title{
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 80%;
    }
    .u-like-game{
      padding-top: 0.2rem;
    }
    .game_overlay {
      position: absolute;
      display: none;
      top: 0;
      left: 0;
      background: rgba(39, 42, 49, 0.75);
      -webkit-animation: fadeIn 0.33s;
      animation: fadeIn 0.33s;
      border-radius: 8px 8px 0 0;
      width: 100%;
      height: 100%;
      backdrop-filter: blur(4px);
    }
    .game_inner:hover .game_overlay {
      display: block;
      cursor: pointer;
    }
    
    
    .show-more {
      width: 100%;
      text-align: center;
      padding: 10px 0;
      padding-bottom: 0;
      z-index: 1;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      padding-bottom: 2rem;
    }
    .btn-show {
      background: #bc001e;
      align-items: center;
      justify-content: center;
      color: #fff;
      border: none;
      display: flex;
      gap: 0.4rem;
      padding: 0.5rem 2rem;
      font-weight: bold;
      margin: 0 2px;
      cursor: pointer;
      border-radius: 5px;
      width: 12rem;
        height: 35px;
      cursor: pointer;
    }
    .btn-show:hover{
      background-color: rgb(163 10 33);
    }
        .game_provider {
      
      width: 100%;
      left: 0;
      bottom: 0;
      text-align: center;
      padding: 2px 0;
      background: -webkit-linear-gradient(
        rgba(0, 0, 0, 0.18),
        rgba(0, 0, 0, 0.72)
      );
      background: -o-linear-gradient(
        rgba(0, 0, 0, 0.18) 0,
        rgba(0, 0, 0, 0.72) 100%
      );
      background: linear-gradient(rgba(0, 0, 0, 0.18), rgba(0, 0, 0, 0.72));
      border-radius: 0 0 2px 2px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      font-size: 1.4rem;
      line-height: 2;
      font-weight: bold;
      background: #f5c20a;
        width: auto;
        padding: 0.25rem 0.75rem;
        border-radius: 4px;
        font-size: 16px;
        color: #000;
    }
        .game_inner:hover .game_overlay {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media only screen and (min-width: 1200px) {
    
    .u-icon-title{
      width: 35px;
      height: 35px;
    }
    .cat-title{
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.4rem;
      margin-left: 1rem;
      margin-top: 1rem;
      margin-bottom: 0.5rem;
      font-size: 2rem;
      font-weight: 600;
    }
    .game_inner {
      display: contents;
      
      position: relative;
      border-radius: 8px 8px 0 0;
      overflow: hidden;
      background-position: center;
      background-size: cover;
      height: 100%;
    }
    .category-subtitle {
      color: #2980b9;
      font-size: 2rem;
    }
    .game-list {
      display: grid;
      grid-template-columns: 22% 22% 22% 22%;
      width: 100%;
      justify-content: space-around;
      flex-wrap: wrap;
      gap: 2rem 0.2rem;
      padding-bottom: 80px;
    }
    .game-block {
      background-color: #3d3d4c;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      height: 100%;
      border-radius: 0.5rem;
    }
    .game-block img {
      width: 100%;
      height: 100%;
    }
    .u-game-content-fav {
      width: 100%;
      display: grid;
    grid-template-columns: 1fr 3rem;
      justify-content: space-around;
      align-items: center;
      text-align: center;
      width: 100%;
      height: 3rem;
      font-size: 1.2rem;
    }
    .u-game-title{
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 80%;
    }
    .u-like-game{
      padding-top: 0.2rem;
    }
    .u-like-game:hover svg {
      transform: scale(1.2);
      transition: 0.3s all;
      cursor: pointer;
    }
    .game_overlay {
      position: absolute;
      display: none;
      top: 0;
      left: 0;
      background: rgba(39, 42, 49, 0.75);
      -webkit-animation: fadeIn 0.33s;
      animation: fadeIn 0.33s;
      border-radius: 8px 8px 0 0;
      width: 100%;
      height: 100%;
      backdrop-filter: blur(4px);
    }
    .game_inner:hover .game_overlay {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .show-more {
      width: 96%;
      text-align: center;
      padding: 10px 0;
      padding-bottom: 0;
      z-index: 1;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      padding-bottom: 2rem;
    }
    .btn-show {
      background: rgb(163 10 33);
      position: relative;
    z-index: 1;
      color: #fff;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.4rem;
      padding: 0.5rem 2rem;
      font-weight: bold;
      font-size: 1.2rem;
      margin: 0 2px;
      cursor: pointer;
      border-radius: 5px;
      width: 16rem;
      height: 50px;
    }
    .btn-show:hover{
      background: rgb(163 10 33);
    }
    .game_provider {
      
      width: 100%;
      left: 0;
      bottom: 0;
      text-align: center;
      padding: 2px 0;
      background: -webkit-linear-gradient(
        rgba(0, 0, 0, 0.18),
        rgba(0, 0, 0, 0.72)
      );
      background: -o-linear-gradient(
        rgba(0, 0, 0, 0.18) 0,
        rgba(0, 0, 0, 0.72) 100%
      );
      background: linear-gradient(rgba(0, 0, 0, 0.18), rgba(0, 0, 0, 0.72));
      border-radius: 0 0 2px 2px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      font-size: 1.4rem;
      line-height: 2;
      font-weight: bold;
      background: #f5c20a;
        width: auto;
        padding: 0.25rem 0.75rem;
        border-radius: 4px;
        font-size: 16px;
        color: #000;
    }
   
  }

  @media only screen and (min-width: 1800px) {

    .cat-top-games{
      padding-left: 12rem;
      padding-right: 12rem;
    }
    
    .u-icon-title{
      width: 55px;
      height: 55px;
    }
    .cat-title{
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.4rem;
      margin-left: 1rem;
      margin-top: 1rem;
      margin-bottom: 0.5rem;
      font-size: 2.5rem;
    }
    .game_inner {
      display: contents;
      position: relative;
      border-radius: 8px 8px 0 0;
      overflow: hidden;
      background-position: center;
      background-size: cover;
      height: 100%;
    }
    .category-subtitle {
      color: #2980b9;
      font-size: 2.5rem;
    }
    .game-list {
      display: grid;
      grid-template-columns: 22% 22% 22% 22%;
      width: 100%;
      justify-content: space-around;
      flex-wrap: wrap;
      gap: 2rem 0.2rem;
      padding-bottom: 30px;
    }
    .cat-title{
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.4rem;
      margin-left: 1rem;
      margin-top: 1rem;
      margin-bottom: 0.5rem;
      font-size: 1.2rem;
    }
    .u-icon-title{
      width: 25px;
      height: 25px;
    }
    .game-block {
      background-color: #3d3d4c;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      height: 100%;
      border-radius: 0.5rem;
    }
    .game-block img {
      width: 100%;
      height: 100%;
    }
    .u-game-content-fav {
      width: 100%;
      display: grid;
    grid-template-columns: 1fr 3rem;
      justify-content: space-around;
      align-items: center;
      text-align: center;
      width: 100%;
      height: 3rem;
      font-size: 1.2rem;
    }
    .u-game-title{
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 80%;
    }
    .u-like-game{
      padding-top: 0.2rem;
    }
    .u-like-game:hover svg {
      transform: scale(1.2);
      transition: 0.3s all;
      cursor: pointer;
    }
    .game_overlay {
      position: absolute;
      display: none;
      top: 0;
      left: 0;
      background: rgba(39, 42, 49, 0.75);
      -webkit-animation: fadeIn 0.33s;
      animation: fadeIn 0.33s;
      border-radius: 8px 8px 0 0;
      width: 100%;
      height: 100%;
      backdrop-filter: blur(4px);
    }
    .game_inner:hover .game_overlay {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .show-more {
      width: 96%;
      text-align: center;
      padding: 10px 0;
      padding-bottom: 0;
      z-index: 1;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      padding-bottom: 2rem;
    }
    .btn-show {
      background: rgb(163 10 33);
      position: relative;
    z-index: 1;
      color: #fff;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.4rem;
      padding: 0.5rem 2rem;
      font-weight: bold;
      font-size: 1.2rem;
      margin: 0 2px;
      cursor: pointer;
      border-radius: 5px;
      width: 12rem;
      height: 35px;
    }
    .btn-show:hover{
      background: rgb(163 10 33);
    }
    .game_provider {
      
      width: 100%;
      left: 0;
      bottom: 0;
      text-align: center;
      padding: 2px 0;
      background: -webkit-linear-gradient(
        rgba(0, 0, 0, 0.18),
        rgba(0, 0, 0, 0.72)
      );
      background: -o-linear-gradient(
        rgba(0, 0, 0, 0.18) 0,
        rgba(0, 0, 0, 0.72) 100%
      );
      background: linear-gradient(rgba(0, 0, 0, 0.18), rgba(0, 0, 0, 0.72));
      border-radius: 0 0 2px 2px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      font-size: 1.4rem;
      line-height: 2;
      font-weight: bold;
      background: #f5c20a;
      width: auto;
      padding: 0.25rem 0.75rem;
      border-radius: 4px;
      font-size: 16px;
      color: #000;

    }
    .cat-top-games{
      padding-bottom: 100px;
    }
  }
</style>
