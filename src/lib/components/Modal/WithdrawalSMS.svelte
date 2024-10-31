<script>
  // @ts-nocheck

  export let open;

  
  const closeModal = () => {
    open = false;
  };

</script>

<div class="u-main-payments">
    <div>
      <div class="u-wrapp-payments">
        <h2 class="w-100 u-title bd">CONTACTE CON SU CAJERO</h2>
        <span>
            Nota: 
            <b>Por favor comunicarse con su cajero correspondiente para procesar su Depósito o Retiro</b>
        </span>
        </div>
      </div>
  <button class="u-close" on:click={closeModal}>X</button>
</div>

<style>
  .u-title.bd {
    border-bottom: 1px solid #6d6d6d;
    padding-bottom: 0.5rem;
  }
  
  .w-100 {
    width: 100%;
  }

  @media only screen and (max-width: 1200px) {
    .u-main-payments {
      display: flex;
      gap: 0.2rem;
      height: 85vh;
    }
    .u-title {
      padding: 0;
      margin: 0;
    }
    .u-close {
      position: absolute;
      left: 90%;
      background: #bc001e;
      color: white;
      width: 40px;
      height: auto;
      font-size: 22px;
      font-weight: 800;
      border-radius: 0.5rem;
    }
    .u-wrapp-payments {
      background: white;
      width: auto;
      color: black;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-radius: 0.5rem;
      padding: 0.5rem;
      gap: 0.5rem;
    }
    
  }
  @media only screen and (min-width: 1200px) {
    
    .u-main-payments {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: center;
      gap: 0.5rem;
      height: 100%;
    }
    .u-close {
      position: absolute;
      left: 100%;
      background: #bc001e;
      color: white;
      width: auto;
      text-align: center;
      height: auto;
      font-size: 28px;
      font-weight: 800;
      border: 1px solid white;
      border-radius: 0.5rem;
      cursor: pointer;
    }
    .u-wrapp-payments {
      background: white;
      width: 100%;
      color: black;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-radius: 0.5rem;
      padding: 1rem;
      gap: 1rem;
    }
    
  }
  .u-wrapp-payments *{
    color: black;
  }
</style>
