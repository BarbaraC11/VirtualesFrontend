<script>
  import { onMount } from "svelte";

  export let onShowLoginModal;
  export let onShowUserCreation;
  export let onSubmitted;
  export let onOpenLogin;
  export let onOpenSignup;
  export let user = {};
  export let openCategoryAciertala;
  export let gameselect;
  export let abrirVentanaCompletaConEspacioREGISTRO;
export let botonesDeshabilitados;
export let abrirVentana;

  let username = user && user.usernme;
  let password = user && user.password;

  const loginEnter = (e) => {
    if (e.charCode === 13) onLoginClick();
  };

  const onLoginClick = async () => {
    if (!username && user.username) username = user.username;
    if (!password && user.password) password = user.password;

    if( !username || !password ){ onShowLoginModal(); return;}
    let info = {username, password}
    onSubmitted(info)
  };

  onMount(() => {
    if (user == null) {
      user = {};
    }
  });

 

</script>
<div class="u-main-no-login">
  <!-- <div>
  <button class="bottom signup promo" on:click={()=>openCategoryAciertala("promociones")} >
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">  <g clip-path="url(#clip0_36_171)">    <path d="M12.0125 3.19881C12.9809 3.19881 13.935 3.19881 14.8821 3.19881C15.1313 3.19881 15.352 3.2558 15.5514 3.4054C15.8362 3.61198 15.9858 3.89694 15.9929 4.246C16 4.97263 16 5.69925 15.9929 6.42588C15.9929 7.0029 15.5229 7.4517 14.9462 7.46595C14.8963 7.46595 14.8465 7.46595 14.7966 7.46595C10.2608 7.46595 5.72497 7.46595 1.18914 7.46595C0.427236 7.46595 0 7.03852 0 6.2834C0 5.62801 0 4.97263 0 4.31724C0 3.65473 0.455719 3.19881 1.12506 3.19881C2.02225 3.19881 2.91233 3.19881 3.80952 3.19881C3.86649 3.19881 3.93057 3.19881 3.9733 3.19881C3.89497 2.92098 3.8024 2.6574 3.75256 2.38669C3.58166 1.29676 4.4219 0.192572 5.51135 0.0358486C5.96707 -0.0282654 6.3943 0.0358486 6.8073 0.228191C7.46952 0.541637 7.76858 1.10441 7.89675 1.7883C7.9466 2.05188 7.97508 2.31546 7.99644 2.4793C8.06765 2.14449 8.13173 1.70994 8.2599 1.28963C8.55897 0.313676 9.61282 -0.0923793 10.389 0.0216011C11.9128 0.242438 12.696 1.71706 12.0409 3.12044C12.0338 3.14182 12.0267 3.16319 12.0125 3.20593V3.19881ZM6.94971 3.19881C6.93547 2.65027 6.94259 2.11599 6.75745 1.6102C6.70761 1.46773 6.57944 1.3395 6.45839 1.24689C5.97419 0.904949 5.31197 1.04742 4.98442 1.53897C4.62127 2.0875 4.84201 2.86399 5.4259 3.04921C5.91722 3.19881 6.42991 3.18456 6.95683 3.19881H6.94971ZM9.03605 3.19168C9.23542 3.19168 9.38496 3.19881 9.52737 3.19168C9.81931 3.17031 10.1113 3.14182 10.4032 3.1062C11.1437 3.00646 11.3146 2.26559 11.158 1.80254C11.0085 1.34662 10.5599 1.0403 10.0828 1.07592C9.71963 1.10442 9.26391 1.27539 9.17846 1.88803C9.11438 2.31546 9.08589 2.74288 9.03605 3.19168Z" fill="white"/>    <path d="M7.17047 16C7.10639 16 7.04942 16 6.99246 16C5.40456 16 3.81667 16 2.22877 16C1.50247 16 1.06812 15.5583 1.06812 14.8388C1.06812 12.8014 1.06812 10.764 1.06812 8.7266C1.06812 8.66961 1.06812 8.6055 1.06812 8.54138H7.17047V16Z" fill="white"/>    <path d="M8.78687 16V8.54138H14.9248C14.9248 8.59837 14.9248 8.65536 14.9248 8.71235C14.9248 10.7569 14.9248 12.8014 14.9248 14.8459C14.9248 15.5583 14.4833 15.9929 13.7713 15.9929C12.1692 15.9929 10.5741 15.9929 8.972 15.9929C8.91504 15.9929 8.86519 15.9929 8.78687 15.9929V16Z" fill="white"/>  </g>  <defs>    <clipPath id="clip0_36_171">      <rect width="16" height="16" fill="white"/>    </clipPath>  </defs></svg>
    <p>PROMOCIONES</p>
  </button>
  </div> -->
  <button class="bottom signup" on:click={() => abrirVentana(2, localStorage.getItem("urlAciertalaRegister"))} disabled={botonesDeshabilitados[2]}>REGISTRO</button>
</div>

<style>
.bottom.signup{
        border-radius: 5px;
        background: #B19626;
        box-shadow: 0px 21px 9.5px -13px rgba(209, 209, 209, 0.25) inset, 0px -13px 11px -5px rgba(0, 0, 0, 0.27) inset;
        font-family: "Inter", sans-serif;
        color: white;
        font-style: normal;
        font-size: 18px;
        }
.bottom{
  height: 48px;
  width: 144px;
  border: none;
}
.Ganawin{
  background: transparent;
}
.Ganawin .btn.login {
  background: #00ab47;
    box-shadow: 0 0 6px #00ab47, inset 0 -6px 10px #00ab47, inset 0 6px 10px #ffffff73, inset 0 0 11px #00ab47;
}
.Ganawin .imgss2{
  width: 2.75rem;
  border-radius: 100%;
  border: 4px solid #f54b00;
}
  button{
    font-family: inherit;
  }
  body{
    font-family: Roboto,sans-serif;
  }
  @media only screen and (max-width: 999px) {
    .imgss2{
      display: none;
    }
    .u-main-no-login {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: end;
      background-color: transparent;
      padding-right: 0.2rem;
      height: 2rem;
      gap: 1.5rem;
      margin-left: 0.5rem;
    }
    .u-second {
      display: none;
    }
    .u-buttons {
      display: flex;
      flex-direction: row;
      gap: 0.5rem;
      justify-content: space-between;
      align-items: center;
      height: 80%;
    }

  }

  @media only screen and (min-width: 1000px) {
    .Ganawin .btn.login,.Ganawin .btn.signup{
      width: 6rem;
    }
    .u-main-no-login {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: end;
      background-color: transparent;
      margin-right: 1rem;
      height: 2rem;
      gap: 0.5rem;
    }
    .u-input-second {
      height: 1.6rem;
      border-radius: 0.4rem;
      background-color: #000;
      border: 1px solid #3d3d4c;
      color: white;
      padding-left: 0.5rem;
    }
    .u-input-third {
      height: 1.6rem;
      border-radius: 0.4rem;
      background-color: #000;
      border: 1px solid #3d3d4c;
      color: white;
      padding-left: 0.5rem;
    }
    .u-second {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      height: 2rem;
    }
    .u-buttons {
      display: flex;
      flex-direction: row;
      gap: 0.5rem;
      justify-content: space-between;
      align-items: center;
      height: 1.8rem;
    }
    
  }
  .button-star {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.45rem;
      border: none;
      color: black;
      background-color: #f54b00;
      font-size: 0.8rem;
      width: max-content;
    }
    .button-check-in {
      display: flex;
      color: white;
      border: none;
      padding: 0.45rem;
      background-color: #004a14;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    .bottom.promo{
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        background: #1947DF;
        box-shadow: 0px 21px 9.5px -13px rgba(209, 209, 209, 0.25) inset, 0px -13px 11px -5px rgba(0, 0, 0, 0.27) inset;
    }
    .bottom.promo svg{
    width: 1.5rem;
    height: 3rem;
    }
    .bottom.promo p{
      padding: 0.5rem;
      color: white;
      color: #FFF;
      font-family: "Inter",sans-serif;
      font-size: 13px;
      font-style: normal;
      font-weight: 600;
     line-height: normal;
    }
</style>
