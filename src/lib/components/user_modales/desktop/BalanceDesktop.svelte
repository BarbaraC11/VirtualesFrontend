<script>
  export let user;
</script>

<div class="u-main-content">
  <div class="wrap-content">
    <div class="u-title">
      <span class="u-title-info">SALDO</span>
    </div>
    <div class="u-info-balance">
      <div class="u-title-balance">{user.balance.toFixed(2)} {user.currency} </div>
    </div>
  </div>
</div>




<style>
  .u-main-content{
    
    padding: 0.5rem;
  }
  .wrap-content{
    background-color: rgb(255, 255, 255);
    border: 1px solid gray;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 65%;
    height: 35%;
    padding: 0.5rem;
    border-radius: 0.4rem;
  }
  .u-title-info{
    color: rgb(144, 144, 144);
  }
  .u-info-balance{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .u-title-balance{
    color: black;
    font-size: 2rem;
  }
</style>
