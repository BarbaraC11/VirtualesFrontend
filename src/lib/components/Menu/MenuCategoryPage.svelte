<script>
  import PromotionsPage from "../../../pages/PromotionsPage.svelte";
  import Configuration from "../../../config";
  import ModalPromotions from "../Modal/ModalPromotions.svelte";


  export let onCategoryChange;
  export let active_view;
  export let onOpenPromotions;
  export let showSportbookOptions;

  let showModalPromotion=false;

  // @ts-ignore
  const onShowModalPromotion = () => {
    showModalPromotion = true;
  };

  const conf = Configuration.getConfiguration();
  console.log("SPORT",conf.CLIENT_CODE);
  let typeSportbook;
  if (conf.CLIENT_CODE == "LJPE") {
    typeSportbook="betsw3_2024";
  } else {
    typeSportbook="8042022_digitain"
  }
  
  let modfBtn = false;
  if(active_view == 'sportbook' || active_view == 'horses' || active_view == 'esports' || active_view == 'sportbooklive' || active_view == 'conditions'){
    modfBtn = true;
  }
  function selectOption(option) {
    showSportbookOptions = option;
    onCategoryChange("sportbook",option);
    console.log("showSportbookOptions",showSportbookOptions);
    
  }
  function selectOption2(option) {
    showSportbookOptions = option;
    onCategoryChange("sportbooklive",option);
  
  }


</script>

<div class="container {modfBtn== true?'c-btn':''}" id="navbar-container">
  <button class="li-game svelte-nmjye li_img {active_view=='home'?'':''}" on:click={  ()=>onCategoryChange("home") }>
    <img class="img_game svelte-nmjye" src="https://assets.apiusoft.com/BetsAmerica/icon/home.png" alt="">
    <span class="u-span-li-games s-7bMzO3aghYpi">Inicio</span>
  </button>
 
    

      <button  on:click={() => selectOption({gameid:typeSportbook})} class="li-game svelte-nmjye li_img {active_view=='sportbook'?'u-category-select':''}" >
        <!-- <linearGradient x1="585.97" x2="585.97" y1="-696.746" y2="-667.894" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 -1 -566.97 -667.906)">
          
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 72.371 72.372" style="enable-background:new 0 0 72.371 72.372;" xml:space="preserve">
            <g>
              <path d="M22.57,2.648c-4.489,1.82-8.517,4.496-11.971,7.949C7.144,14.051,4.471,18.08,2.65,22.568C0.892,26.904,0,31.486,0,36.186   c0,4.699,0.892,9.281,2.65,13.615c1.821,4.489,4.495,8.518,7.949,11.971c3.454,3.455,7.481,6.129,11.971,7.949   c4.336,1.76,8.917,2.649,13.617,2.649c4.7,0,9.28-0.892,13.616-2.649c4.488-1.82,8.518-4.494,11.971-7.949   c3.455-3.453,6.129-7.48,7.949-11.971c1.758-4.334,2.648-8.916,2.648-13.615c0-4.7-0.891-9.282-2.648-13.618   c-1.82-4.488-4.496-8.518-7.949-11.971s-7.479-6.129-11.971-7.949C45.467,0.891,40.887,0,36.187,0   C31.487,0,26.906,0.891,22.57,2.648z M9.044,51.419c-1.743-1.094-3.349-2.354-4.771-3.838c-2.172-6.112-2.54-12.729-1.101-19.01   c0.677-1.335,1.447-2.617,2.318-3.845c0.269-0.379,0.518-0.774,0.806-1.142l8.166,4.832c0,0.064,0,0.134,0,0.205   c-0.021,4.392,0.425,8.752,1.313,13.049c0.003,0.02,0.006,0.031,0.01,0.049l-6.333,9.93C9.314,51.579,9.177,51.503,9.044,51.419z    M33.324,68.206c1.409,0.719,2.858,1.326,4.347,1.82c-6.325,0.275-12.713-1.207-18.36-4.447L33,68.018   C33.105,68.085,33.212,68.149,33.324,68.206z M33.274,65.735L17.12,62.856c-1.89-2.295-3.59-4.723-5.051-7.318   c-0.372-0.66-0.787-1.301-1.102-1.99l6.327-9.92c0.14,0.035,0.296,0.072,0.473,0.119c3.958,1.059,7.986,1.812,12.042,2.402   c0.237,0.033,0.435,0.062,0.604,0.08l7.584,13.113c-1.316,1.85-2.647,3.69-4.007,5.51C33.764,65.155,33.524,65.446,33.274,65.735z    M60.15,60.149c-1.286,1.287-2.651,2.447-4.08,3.481c-0.237-1.894-0.646-3.75-1.223-5.563l8.092-15.096   c2.229-1.015,4.379-2.166,6.375-3.593c0.261-0.185,0.478-0.392,0.646-0.618C69.374,46.561,66.104,54.196,60.15,60.149z    M59.791,40.571c0.301,0.574,0.598,1.154,0.896,1.742l-7.816,14.58c-0.045,0.01-0.088,0.02-0.133,0.026   c-4.225,0.789-8.484,1.209-12.779,1.229l-7.8-13.487c1.214-2.254,2.417-4.517,3.61-6.781c0.81-1.536,1.606-3.082,2.401-4.627   l16.143-1.658C56.29,34.495,58.163,37.457,59.791,40.571z M56.516,23.277c-0.766,2.023-1.586,4.025-2.401,6.031l-15.726,1.615   c-0.188-0.248-0.383-0.492-0.588-0.725c-1.857-2.103-3.726-4.193-5.592-6.289c0.017-0.021,0.034-0.037,0.051-0.056   c-0.753-0.752-1.508-1.504-2.261-2.258l4.378-13.181c0.302-0.08,0.606-0.147,0.913-0.18c2.38-0.242,4.763-0.516,7.149-0.654   c1.461-0.082,2.93-0.129,4.416-0.024l10.832,12.209C57.314,20.943,56.95,22.124,56.516,23.277z M60.15,12.221   c2.988,2.99,5.302,6.402,6.938,10.047c-2.024-1.393-4.188-2.539-6.463-3.473c-0.354-0.146-0.717-0.275-1.086-0.402L48.877,6.376   c0.074-0.519,0.113-1.039,0.129-1.563C53.062,6.464,56.864,8.936,60.15,12.221z M25.334,4.182c0.042,0.031,0.062,0.057,0.086,0.064   c2.437,0.842,4.654,2.082,6.744,3.553l-4.09,12.317c-0.021,0.006-0.041,0.012-0.061,0.021c-0.837,0.346-1.69,0.656-2.514,1.031   c-3.395,1.543-6.705,3.252-9.823,5.301l-8.071-4.775c0.012-0.252,0.055-0.508,0.141-0.736c0.542-1.444,1.075-2.896,1.688-4.311   c0.472-1.09,1.01-2.143,1.597-3.172c0.384-0.424,0.782-0.844,1.192-1.254c3.833-3.832,8.363-6.553,13.186-8.162   C25.384,4.098,25.358,4.139,25.334,4.182z" style="fill: URL(#SVGID_slots3);"/>
            </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
          </svg>
        </linearGradient> -->
        <img class="img_game svelte-nmjye" src="https://assets.apiusoft.com/BetsAmerica/icon/Sportbook.png" alt="">
        <span class="u-span-li-games">Deportes</span>  
      </button>


 
   
   
        <button on:click={() => selectOption2({gameid:typeSportbook})}  class="li-game svelte-nmjye li_img {active_view=='sportbooklive'?'u-category-select':''}">
          <img class="img_game svelte-nmjye" src="https://assets.apiusoft.com/BetsAmerica/icon/LIVE.png" alt="" style="margin: 0 auto;">
          <span class="u-span-li-games">En vivo</span>  
        </button>
  

  <button on:click={onCategoryChange("horses")} class="li-game svelte-nmjye li_img {active_view=='horses'?'u-category-select':''}"> 
    <!-- <svg xmlns="http://www.w3.org/2000/svg" width="22.642" height="15.486" viewBox="0 0 22.642 15.486">
      <path id="Race_Hourse" fill="#ffa42a" data-name="Race Hourse" d="M135.621,307.025c.475,1.044.92,2.074,1.411,3.082.295.606.094.835-.535.834a1.107,1.107,0,0,1-1.03-.5,7.835,7.835,0,0,0-.765-.925,6.8,6.8,0,0,1-1.416-2.257c-.1-.249-.245-.479-.323-.731-.1-.341-.408-.485-.632-.706-.035-.035-.131-.021-.2-.01-.58.1-1.158.214-1.739.3a3.7,3.7,0,0,1-2.869-.707c-.232-.17-.479-.32-.733-.489a1.692,1.692,0,0,0-.07.169,3.4,3.4,0,0,1-.912,1.516c-.43.427-.852.86-1.286,1.281a.366.366,0,0,0-.119.353c.106.707.2,1.415.309,2.121.059.391-.08.557-.481.559-.188,0-.377,0-.566,0a.411.411,0,0,1-.445-.335c-.263-.888-.531-1.774-.8-2.66-.026-.088-.055-.174-.1-.305a5.559,5.559,0,0,0-.554.353c-.67.547-1.329,1.1-1.994,1.657-.27.224-.422.215-.672-.032-.212-.21-.425-.42-.633-.634a.382.382,0,0,1-.019-.6q1.086-1.274,2.18-2.541a.936.936,0,0,1,.283-.2c.558-.285,1.121-.564,1.67-.839-.05-.421-.1-.83-.154-1.287a2.308,2.308,0,0,0-.279.4,2.4,2.4,0,0,1-2.243,1.553c-.477.036-.951.112-1.426.176-.221.03-.415,0-.51-.227s.033-.369.2-.5c.539-.445,1.073-.9,1.613-1.342a2.163,2.163,0,0,0,.658-.931,2.715,2.715,0,0,1,2.725-1.882,2.654,2.654,0,0,0,.98-.209,4.343,4.343,0,0,1,3.261.055,5.7,5.7,0,0,0,1.24.232c.071.011.153-.057.231-.088-.005-.024-.011-.048-.016-.072-.391-.179-.783-.357-1.174-.536a1.341,1.341,0,0,1-.464-2.243,3.409,3.409,0,0,1,2.325-1.1c.282-.026.561-.077.842-.1.24-.016.482,0,.75,0,.009-.037.028-.118.047-.2a1.313,1.313,0,0,1,1.228-1.024,1.343,1.343,0,0,1,1.325.937c.028.086.128.145.186.224.084.112.222.231.222.346s-.139.234-.222.346c-.059.078-.155.138-.186.224-.1.266-.191.4-.661.842.65-.24,1.2-.258,1.577.367l1.842-.691c-.016-.072-.042-.161-.057-.252a.369.369,0,0,1,.515-.42c.519.242,1.029.5,1.538.767a.557.557,0,0,1,.19.2q.9,1.426,1.787,2.856a.411.411,0,0,1-.068.625q-.4.4-.8.8c-.245.242-.4.246-.672.019l-2.1-1.778c-.493.5-.982.984-1.465,1.478a.3.3,0,0,0-.06.19c0,.511,0,1.022-.006,1.533,0,.139.054.188.175.227.575.186,1.148.375,1.718.576a.979.979,0,0,1,.353.218q1.424,1.41,2.837,2.832c.339.34.253.638-.219.759-.418.108-.84.2-1.255.317a.538.538,0,0,1-.542-.121c-.569-.483-1.145-.958-1.718-1.437A1.305,1.305,0,0,0,135.621,307.025Zm3.813,1.032c-.059-.062-.111-.12-.166-.175-.706-.706-1.408-1.414-2.12-2.114a1.091,1.091,0,0,0-.389-.244c-.584-.207-1.174-.4-1.762-.591-.411-.137-.444-.187-.454-.621a2.318,2.318,0,0,0-1.142-2.018c-.045-.028-.089-.058-.152-.1l.35-.694.927.7a1.076,1.076,0,0,1,.14-.233q.927-.939,1.865-1.868a.369.369,0,0,1,.532-.021c.047.036.1.069.112.081l.921-1.363-.719-.379c.064.272.113.482.166.714l-.72.18c-.047-.169-.089-.317-.135-.483a2.229,2.229,0,0,0-.314.067c-.529.2-1.056.4-1.583.6a.347.347,0,0,0-.17.112,1.1,1.1,0,0,1-.907.51,6.686,6.686,0,0,0-2.175.631v2.233l.35-.071c.1.394.188.784.3,1.168a2.489,2.489,0,0,0,2.01,1.892c.668.139,1.341.256,2.014.369a1.3,1.3,0,0,1,.67.306c.481.417,1,.791,1.455,1.234A.818.818,0,0,0,139.433,308.057Zm-15.579-5.928a2.352,2.352,0,0,0,.016,3.249.376.376,0,0,1-.037.566c-.263.271-.527.54-.8.8a.276.276,0,0,0-.084.327c.287.937.566,1.877.849,2.816a1.415,1.415,0,0,0,.066.153c-.054-.655-.137-1.3-.241-1.942a.571.571,0,0,1,.18-.549c.5-.489.992-.985,1.484-1.482a2.594,2.594,0,0,0,.51-3.116c-.086-.175-.173-.348-.265-.535l.673-.331.405.8v-1.762a3.224,3.224,0,0,0-2.025.064,5.1,5.1,0,0,1-1.647.323,1.759,1.759,0,0,0-1.7,1.176,3.887,3.887,0,0,1-1.37,1.781c-.083.061-.157.134-.268.23a1.756,1.756,0,0,0,1.87-1.109,2.054,2.054,0,0,1,1.089-1.062.782.782,0,0,0,.263-.24c.168-.222.321-.455.49-.7Zm2.967,1.622c.081.164-.072.36.167.479a8.45,8.45,0,0,1,.988.583,3.334,3.334,0,0,0,1.259.553,7.673,7.673,0,0,0,2.508-.249l-.447-1.367Zm3.434-5.946c.684.569,1.338,1.118,2,1.658a.429.429,0,0,0,.292.087c.4-.052.805-.125,1.207-.194.134-.023.256-.079.217-.244s-.169-.158-.3-.124c-.281.071-.565.13-.844.21a.437.437,0,0,1-.514-.175c-.334-.426-.677-.845-1.012-1.27a.794.794,0,0,0-.782-.328c-.178.025-.36.033-.537.063-.393.067-.786.136-1.176.22-.06.013-.152.112-.145.158.033.2.1.4.146.6h.971A3.012,3.012,0,0,1,130.255,297.8Zm-10.784,11.1c.475-.4.926-.787,1.394-1.156.331-.261.68-.5,1.033-.73.118-.077.206-.125.209-.292a.522.522,0,0,1,.171-.294c.261-.271.534-.532.808-.8l-.138-.186c-.437.219-.86.442-1.293.642a2.17,2.17,0,0,0-.788.609c-.537.654-1.1,1.29-1.65,1.936ZM133.9,306.7l-.058.045a13.692,13.692,0,0,0,.827,1.535c.432.612.95,1.163,1.445,1.756,0-.043.011-.06.005-.072q-.679-1.5-1.363-3a.253.253,0,0,0-.146-.13C134.381,306.778,134.142,306.742,133.9,306.7Zm-3.365-6.106c.078-.319.021-.45-.237-.562-.617-.268-1.235-.535-1.856-.8a.5.5,0,0,1-.331-.391c-.041-.2-.1-.4-.158-.607-.611.442-.47,1.046.11,1.239a9.674,9.674,0,0,1,.921.412Zm-3.149.83v1.563c.478.041.478.041.658-.379l.138-.323.29-.677Zm11.049-.192c.214-.22.418-.425.613-.639a.191.191,0,0,0,.027-.174c-.169-.29-.351-.572-.534-.865a3.1,3.1,0,0,0-.735,1.16l.523.443C138.356,301.175,138.383,301.191,138.44,301.231Zm-9.015,1.758c-.23-.37-.227-.406.047-.774l.713-.953-.619-.28-.859,2.006Zm.7-.381c.242.1.3.452.636.38v-1.228Zm1.822-6.035h1.05a.561.561,0,0,0-1.05,0Zm1.043.767h-1.034C132.292,297.838,132.739,297.834,132.987,297.341Zm6.219,4.555.515-.461-.162-.248-.539.544Zm-8.758-2.64a1.309,1.309,0,0,1,.834.775l.338-.139C131.19,299.679,131,299.163,130.448,299.255Z" transform="translate(-117.944 -295.456)" />
    </svg> -->
    <img class="img_game svelte-nmjye" src="https://assets.apiusoft.com/BetsAmerica/icon/HORSE.png" alt="" style="margin: 0 auto;">
    <span class="u-span-li-games">Hípica</span>  
  </button>
  <!--button on:click={onCategoryChange("esports")} class="li-game {active_view=='esports'?'u-category-select':''}"> 
    <img class="u-menubar-icon" src="{conf.ASSETS}/golden/Esports.svg" alt="">
    <span  class="u-span-li-games u-span-sport" >E-Sports</span> 
  </button-->
  <button on:click={onCategoryChange("slot")} class="li-game svelte-nmjye li_img {active_view=='slot'?'u-category-select':''}"> 
    <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 28.8" style="stroke-width: 17px;width: 2rem;">
      <linearGradient id="SVGID_slots3" x1="585.97" x2="585.97" y1="-696.746" y2="-667.894" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 -1 -566.97 -667.906)">
        <stop offset="0" stop-color="#FF9220"></stop>
        <stop offset=".389" stop-color="#FFA82C"></stop>
        <stop offset=".443" stop-color="#FCCB8E"></stop>
        <stop offset=".493" stop-color="#FFD38A"></stop>
        <stop offset="1" stop-color="#FFCC63"></stop>
      </linearGradient>
      <path class="st0" d="M35.8 28.8h-7.4c-1.2.1-2.3-.8-2.4-2V2c.1-1.2 1.2-2.1 2.4-2h7.4C37 0 38 .9 38 2.1v24.6c0 1.2-1 2.1-2.2 2.1zM28 2s.9 1 4 1 4-1 4-1h-8zm8 7.9h-8v2h4l-3 8h3l4-10zm-4 15.9c-3.1 0-4 1-4 1h8s-.9-1-4-1zm-9.3 3h-7.4c-1.2.1-2.2-.8-2.3-2V2c.1-1.2 1.1-2.1 2.3-2h7.4c1.2-.1 2.2.8 2.3 2v24.9c-.1 1.1-1.1 2-2.3 1.9zM15 2s.9 1 4 1 4-1 4-1h-8zm8 7.9h-8v2h4l-3 8h3l4-10zm-4 15.9c-3.1 0-4 1-4 1h8s-.9-1-4-1zm-9.4 3H2.2C1 28.8 0 27.9 0 26.7V2.1C0 .9 1 0 2.2 0h7.4c1.2-.1 2.3.8 2.4 2v24.9c-.1 1.1-1.2 2-2.4 1.9zM2 2s.9 1 4 1 4-1 4-1H2zm8 7.9H2v2h4l-2.9 8H6l4-10zM6 25.8c-3.1 0-4 1-4 1h8s-.9-1-4-1z" style="fill: URL(#SVGID_slots3);"></path>
    </svg> -->
    <img class="img_game svelte-nmjye" src="https://assets.apiusoft.com/BetsAmerica/icon/slot.png" alt="" style="margin: 0 auto;">
    <span class="u-span-li-games">Casino</span>  
  </button>
  <button on:click={onCategoryChange("slotlive")} class="li-game svelte-nmjye li_img {active_view=='slotlive'?'u-category-select':''}">
    <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 30.8">
      <linearGradient id="SVGID_tables" x1="754.359" x2="754.359" y1="-695.753" y2="-664.92" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 -1 -738.875 -664.906)">
          <stop offset="0" stop-color="#FF9220"></stop>
          <stop offset=".439" stop-color="#FFA82C"></stop>
          <stop offset=".48" stop-color="#FCCB8E"></stop>
          <stop offset=".525" stop-color="#FFD38A"></stop>
          <stop offset="1" stop-color="#FFCC63"></stop>
      </linearGradient>
      <path style="fill: URL(#SVGID_tables);" class="st0" d="M27.3 25.5C21.7 32 12 32.7 5.5 27.2-1.1 21.6-1.8 12 3.6 5.5c0 0 0-.1.1-.1C9.3-1.1 19-1.8 25.6 3.7c6.4 5.5 7.2 15.2 1.7 21.8 0-.1 0-.1 0 0zm-20.8.4c1.8 1.5 4 2.6 6.3 3l1-4.9c-1.9-.4-3.7-1.4-5-2.8L5 24.5c.5.5 1 .9 1.5 1.4zM2.4 11c-1 2.9-1 6 0 8.9l4.7-1.6c-.6-1.8-.6-3.8 0-5.7L2.4 11zm10.4-9.1C9.8 2.5 7 4 5 6.4l3.8 3.3c1.3-1.5 3-2.5 5-2.8l-1-5zm5.3 27c3-.6 5.8-2.2 7.8-4.5l-3.8-3.3c-1.3 1.5-3 2.5-5 2.8l1 5zM24.5 5c-1.8-1.5-4-2.6-6.3-3l-1 4.9c1.9.4 3.7 1.4 5 2.8L26 6.4c-.5-.5-1-1-1.5-1.4zm4.1 6l-4.7 1.6c.6 1.8.6 3.8 0 5.7l4.7 1.6c.9-2.9.9-6 0-8.9zm-1.7 5.2c-.5 0-.8-.4-.8-.8 0-.5.4-.8.8-.8.5 0 .8.4.8.8.1.5-.3.8-.8.8zm-5.7-9.8c-.5 0-.8-.4-.8-.8 0-.5.4-.8.8-.8.5 0 .8.4.8.8s-.4.8-.8.8zm.9 18.9c0 .5-.4.8-.8.8-.5 0-.8-.4-.8-.8 0-.5.4-.8.8-.8.4-.1.8.3.8.8zM8.9 5.6c0-.5.4-.8.8-.8.5 0 .8.4.8.8 0 .5-.4.8-.8.8s-.8-.4-.8-.8zM4 16.3c-.5 0-.8-.4-.8-.8 0-.5.4-.8.8-.8.5 0 .8.4.8.8.1.4-.3.8-.8.8zm5.8 8.2c.5 0 .8.4.8.8 0 .5-.4.8-.8.8-.5 0-.8-.4-.8-.8-.1-.5.3-.8.8-.8z"></path>
   </svg>
    --><img class="img_game svelte-nmjye" src="https://assets.apiusoft.com/BetsAmerica/icon/slot_live.png" alt="" style="margin: 0 auto;">
    <span class="u-span-li-games u-span-slotlive">Casino en Vivo</span>  
  </button>
  <button on:click={onCategoryChange("crash")} class="li-game svelte-nmjye li_img {active_view=='crash'?'u-category-select':''}">
    <!-- <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 40 40" style="enable-background:new 0 0 40 40;" xml:space="preserve">
      <style type="text/css">
        .st0{fill:#E9A944 !important;enable-background:new    ;}
        .st1{fill:#F6B44B;enable-background:new    ;}
        .st2{fill:#F08D2C;enable-background:new    ;}
        .st3{fill:#CD6A08;enable-background:new    ;}
      </style>
      <g>
        <path class="st0" d="M29.4,3.3C21.8,4.7,17.1,8.9,14.2,13c-1.9,2.7-3.1,5.3-3.7,7.2c-0.5,1.4-0.7,2.3-0.7,2.3c0,0,0,0,0,0
          c0.8,0.2,1.5,0.4,2.1,0.7c3.2,1.3,4.6,3.4,5.2,5.1c0.4,1.3,0.4,2.2,0.4,2.2c1-0.3,1.9-0.6,2.8-0.9c2.7-1,5-2.2,6.9-3.5
          c6.3-4.4,8.8-10.4,9.7-15.2L29.4,3.3z M26.1,19.6c-3,0-5.5-2.5-5.5-5.5s2.5-5.5,5.5-5.5s5.5,2.5,5.5,5.5S29.1,19.6,26.1,19.6z"></path>
        <path class="st1" d="M37,10.8l-7.6-7.5c2.4-0.5,5-0.6,8-0.4C37.4,2.8,37.8,6.3,37,10.8z"></path>
        <path class="st2" d="M17.6,30.4c-2.6,4.6-7.5,4.4-7.5,4.4l0.1-1.6c-1.8,1.3-4.3,1.1-4.3,1.1c-0.1-2.6,1.1-4.4,1.1-4.4l-1.5,0.3
          c-0.1-4.4,2.7-6.7,4.4-7.7c0.8,0.2,1.5,0.4,2.1,0.7c-4.3,1.5-4.8,5.3-4.8,5.3C7.5,28.3,9.8,28,9.8,28s-1.8,2.6-2.5,4.8
          c1.1,0,4.8-2.3,4.8-2.3s-0.2,1.7-0.5,2.7c4.3-0.9,5.4-4.9,5.4-4.9l0-0.1C17.6,29.4,17.6,30.4,17.6,30.4z"></path>
        <path class="st3" d="M10.8,29.1c0,0,0.7-5.3,9-8.9c0,0-0.7,3.2-4.4,6.5C15.5,26.7,13.4,28.7,10.8,29.1z"></path>
        <path class="st3" d="M14.2,13c-1.9,2.7-3.1,5.3-3.7,7.2c-3.5-0.1-5.3,1.7-7.4,3.3C5.3,14.1,11.9,13.1,14.2,13z"></path>
        <path class="st3" d="M27.3,26c-1.4,10.6-10.8,11.3-10.8,11.3c2.4-1.3,3.4-5.3,3.9-7.7C23,28.5,25.3,27.3,27.3,26z"></path>
        <circle class="st1" cx="26.1" cy="14" r="3.6"></circle>
      </g>
      </svg> -->
    <img class="img_game svelte-nmjye" src="https://assets.apiusoft.com/BetsAmerica/icon/crash.png" alt="" style="margin: 0 auto;">
    <span class="u-span-li-games u-span-crash">Crash Games</span>  
  </button>
  <button on:click={onCategoryChange("scratch")} class="li-game svelte-nmjye li_img {active_view=='scratch'?'u-category-select':''}">
    <img class="img_game svelte-nmjye" src="https://assets.apiusoft.com/BetsAmerica/icon/scrach.png" alt="" style="margin: 0 auto;">
    <span class="u-span-li-games u-span-scratch">Raspa y Gana</span>  
  </button>
  <button on:click={onCategoryChange("virtual")} class="li-game svelte-nmjye li_img {active_view=='virtual'?'u-category-select':''}">
    <img class="img_game svelte-nmjye" src="https://assets.apiusoft.com/BetsAmerica/icon/virtual.png" alt="" style="margin: 0 auto;">
    <span class="u-span-li-games u-span-virtual">Juegos virtuales</span> 
  </button>
  <button on:click={onCategoryChange("providers")} class="li-game svelte-nmjye li_img {active_view=='providers'?'u-category-select':''}"> 
    <img class="img_game svelte-nmjye" src="https://assets.apiusoft.com/BetsAmerica/icon/prov.png" alt="" style="margin: 0 auto;">
    <span class="u-span-li-games">Proveedores</span>  
  </button>
  <!--button class="{active_view=='promotions'?'u-category-select':''}"  on:click={onShowModalPromotion}>
    <img class="u-menubar-icon" src="{conf.ASSETS}/golden/Promociones.svg" alt=""> 
    <span >Promociones </span> 
  </button-->
</div>

{#if modfBtn == false}
<div class="hero"> 
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
</div>
  <!--div class="container__balls">
    <div class="animation-wrapper">
      <div class="sphere-animation">
        <svg class="sphere" viewBox="0 0 440 440" stroke="rgba(80,80,80,.35)">
          <defs>
            <linearGradient id="sphereGradient" x1="5%" x2="5%" y1="0%" y2="15%">
              <stop stop-color="#373734" offset="0%"/>
              <stop stop-color="#242423" offset="50%"/>
              <stop stop-color="#0D0D0C" offset="100%"/>
            </linearGradient>
          </defs>
          <path d="M361.604 361.238c-24.407 24.408-51.119 37.27-59.662 28.727-8.542-8.543 4.319-35.255 28.726-59.663 24.408-24.407 51.12-37.269 59.663-28.726 8.542 8.543-4.319 35.255-28.727 59.662z"/>
          <path d="M360.72 360.354c-35.879 35.88-75.254 54.677-87.946 41.985-12.692-12.692 6.105-52.067 41.985-87.947 35.879-35.879 75.254-54.676 87.946-41.984 12.692 12.692-6.105 52.067-41.984 87.946z"/>
          <path d="M357.185 356.819c-44.91 44.91-94.376 68.258-110.485 52.149-16.11-16.11 7.238-65.575 52.149-110.485 44.91-44.91 94.376-68.259 110.485-52.15 16.11 16.11-7.239 65.576-52.149 110.486z"/>
          <path d="M350.998 350.632c-53.21 53.209-111.579 81.107-130.373 62.313-18.794-18.793 9.105-77.163 62.314-130.372 53.209-53.21 111.579-81.108 130.373-62.314 18.794 18.794-9.105 77.164-62.314 130.373z"/>
          <path d="M343.043 342.677c-59.8 59.799-125.292 91.26-146.283 70.268-20.99-20.99 10.47-86.483 70.269-146.282 59.799-59.8 125.292-91.26 146.283-70.269 20.99 20.99-10.47 86.484-70.27 146.283z"/>
          <path d="M334.646 334.28c-65.169 65.169-136.697 99.3-159.762 76.235-23.065-23.066 11.066-94.593 76.235-159.762s136.697-99.3 159.762-76.235c23.065 23.065-11.066 94.593-76.235 159.762z"/>
          <path d="M324.923 324.557c-69.806 69.806-146.38 106.411-171.031 81.76-24.652-24.652 11.953-101.226 81.759-171.032 69.806-69.806 146.38-106.411 171.031-81.76 24.652 24.653-11.953 101.226-81.759 171.032z"/>
          <path d="M312.99 312.625c-73.222 73.223-153.555 111.609-179.428 85.736-25.872-25.872 12.514-106.205 85.737-179.428s153.556-111.609 179.429-85.737c25.872 25.873-12.514 106.205-85.737 179.429z"/>
          <path d="M300.175 299.808c-75.909 75.909-159.11 115.778-185.837 89.052-26.726-26.727 13.143-109.929 89.051-185.837 75.908-75.908 159.11-115.778 185.837-89.051 26.726 26.726-13.143 109.928-89.051 185.836z"/>
          <path d="M284.707 284.34c-77.617 77.617-162.303 118.773-189.152 91.924-26.848-26.848 14.308-111.534 91.924-189.15C265.096 109.496 349.782 68.34 376.63 95.188c26.849 26.849-14.307 111.535-91.923 189.151z"/>
          <path d="M269.239 267.989c-78.105 78.104-163.187 119.656-190.035 92.807-26.849-26.848 14.703-111.93 92.807-190.035 78.105-78.104 163.187-119.656 190.035-92.807 26.849 26.848-14.703 111.93-92.807 190.035z"/>
          <path d="M252.887 252.52C175.27 330.138 90.584 371.294 63.736 344.446 36.887 317.596 78.043 232.91 155.66 155.293 233.276 77.677 317.962 36.521 344.81 63.37c26.85 26.848-14.307 111.534-91.923 189.15z"/>
          <path d="M236.977 236.61C161.069 312.52 77.867 352.389 51.14 325.663c-26.726-26.727 13.143-109.928 89.052-185.837 75.908-75.908 159.11-115.777 185.836-89.05 26.727 26.726-13.143 109.928-89.051 185.836z"/>
          <path d="M221.067 220.7C147.844 293.925 67.51 332.31 41.639 306.439c-25.873-25.873 12.513-106.206 85.736-179.429C200.6 53.786 280.931 15.4 306.804 41.272c25.872 25.873-12.514 106.206-85.737 179.429z"/>
          <path d="M205.157 204.79c-69.806 69.807-146.38 106.412-171.031 81.76-24.652-24.652 11.953-101.225 81.759-171.031 69.806-69.807 146.38-106.411 171.031-81.76 24.652 24.652-11.953 101.226-81.759 171.032z"/>
          <path d="M189.247 188.881c-65.169 65.169-136.696 99.3-159.762 76.235-23.065-23.065 11.066-94.593 76.235-159.762s136.697-99.3 159.762-76.235c23.065 23.065-11.066 94.593-76.235 159.762z"/>
          <path d="M173.337 172.971c-59.799 59.8-125.292 91.26-146.282 70.269-20.991-20.99 10.47-86.484 70.268-146.283 59.8-59.799 125.292-91.26 146.283-70.269 20.99 20.991-10.47 86.484-70.269 146.283z"/>
          <path d="M157.427 157.061c-53.209 53.21-111.578 81.108-130.372 62.314-18.794-18.794 9.104-77.164 62.313-130.373 53.21-53.209 111.58-81.108 130.373-62.314 18.794 18.794-9.105 77.164-62.314 130.373z"/>
          <path d="M141.517 141.151c-44.91 44.91-94.376 68.259-110.485 52.15-16.11-16.11 7.239-65.576 52.15-110.486 44.91-44.91 94.375-68.258 110.485-52.15 16.109 16.11-7.24 65.576-52.15 110.486z"/>
          <path d="M125.608 125.241c-35.88 35.88-75.255 54.677-87.947 41.985-12.692-12.692 6.105-52.067 41.985-87.947C115.525 43.4 154.9 24.603 167.592 37.295c12.692 12.692-6.105 52.067-41.984 87.946z"/>
          <path d="M109.698 109.332c-24.408 24.407-51.12 37.268-59.663 28.726-8.542-8.543 4.319-35.255 28.727-59.662 24.407-24.408 51.12-37.27 59.662-28.727 8.543 8.543-4.319 35.255-28.726 59.663z"/>
        </svg>
      </div>
    </div>
  </div-->

{/if}
<ModalPromotions bind:open={showModalPromotion}>
           <PromotionsPage>
           </PromotionsPage>
         </ModalPromotions>
<style>

    button:hover{
      background: linear-gradient(180deg, transparent, transparent, transparent, transparent, transparent, transparent, transparent, #a30a21);
     transform: skewX(-10deg);
    }
   
    .u-category-select{
      background: linear-gradient(180deg, transparent, transparent, transparent, transparent, transparent, transparent, transparent, #a30a21);
    background-color: #f50a0a57 !important;
    transform: inherit;
    }
  .u-span-li-games{
    text-align: center;
    overflow: hidden;
    font-size: 14px;
    line-height: 1;
    width: 100%;
    position: absolute;
    bottom: 1rem; 
    font-weight: 600;

  }
  .li-game {
    height: 5rem;
    /* background-color: rgba(32, 37, 44, 0.7); */
    color: #fff;
    position: relative;
    border-radius: 8px;
    flex-grow: 1;
    flex-basis: 260px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 8px;
    min-width: 6rem;
    transition: 0.5s;
    
    
    }
    .li-game svg{
      width: 2rem;
      height: 2rem;
    }
    
    .li-game.u-category-select span{
      animation: neonGlow 2s infinite alternate cubic-bezier(0.455, 0.030, 0.515, 0.955);
    }

    @keyframes neonGlow {
  0% {
    text-shadow: 0 0 10px rgba(255,255,255,.5),
                 0 0 20px rgba(255,255,255,.5),
                 0 0 22px  rgba(255,255,255,.5),
                 0 0 40px  rgba(66,220,219,.0),
                 0 0 60px  rgba(66,220,219,.0),
                 0 0 80px  rgba(66,220,219,.0),
                 0 0 100px rgba(66,220,219,.0),
                 0 0 140px rgba(66,220,219,.0),
                 0 0 200px rgba(66, 220, 220, 0);
  }
  100% {
    text-shadow: 0 0 2px rgba(255,255,255,.5),
                 0 0 8px rgba(255,255,255,.5),
                 0 0 10px rgba(255,255,255,0),
                 0 0 20px rgba(66, 220, 220, 0),
                 0 0 30px rgba(66, 220, 220, 0),
                
               
                
  }
}
.li_img{
    height: 15rem;
    padding: 0;
    display: flex !important;
  }
  .img_game{
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }


  @media only screen and (max-width: 1023px) {
    .li_img{
     height: 10rem;
    }

    .in-d{
      display: none !important;
    }
    .container{
      display: flex;
      flex-direction: row;
      background-color: transparent;
      align-items: center;
      justify-content: start;
      padding: 0.5rem;
      margin-top: 0rem;
      gap: 0.5rem;
      width: auto;
      overflow: auto;
      position: relative;
      z-index: 5;
    }

    button{
      border: none;
      background-color: transparent;
      color: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      height: 100%;
      padding-bottom: 0.5rem;
      width: 5rem;
    }



    .u-menubar-icon{
      width: 25px;
      height: 25px;
      display: flex;
      align-items: center;
      /* filter: invert(81%) sepia(223%) saturate(3227%) hue-rotate(-103deg) brightness(97%) contrast(158%)*/
      filter: invert(50%) sepia(39%) saturate(4219%) hue-rotate(8deg) brightness(101%) contrast(104%);
    }
   
  }
  @media only screen and (min-width: 1024px) {

    .in-d{
      display: block;
    }
    .u-span-li-games{
    text-transform: uppercase;
  }

  .container{
      display: flex;
      gap: 0.75rem;
      flex-direction: row;
      background-color: transparent;
      align-items: center;
      justify-content: start;
      padding: 1rem;
      position: relative;
      z-index: 3;
      overflow: hidden;
    }


    button{
      border: none;
      background-color: transparent;
      color: white;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 0.2rem;
      cursor: pointer;
      padding-bottom: 0.5rem;
      font-size: 1rem;
    }

    .u-menubar-icon{
      width: 25px;
      height: 25px;
      display: flex;
      align-items: center;
      filter: invert(50%) sepia(39%) saturate(4219%) hue-rotate(8deg) brightness(101%) contrast(104%);
    }
    .u-menubar-icon.re{
      width: 2.5rem;
      height: 2.5rem;
    }   
  }
  @media only screen and (min-width: 1800px) {
    .container{
      padding: 2rem;
    }  
  }

</style>
