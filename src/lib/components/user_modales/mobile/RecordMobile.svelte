<script>
import backend from "../../../../server"
import EventManager from "../../../../js/EventManager";
import { onMount } from 'svelte';
import moment from "moment-timezone";

export let user;

let from = new Date(), dayFrom, monthFrom, yearFrom;
let to = new Date(), dayTo, monthTo, yearTo;
let dateStringFrom, dateStringTo;
let filter;
let movements=[]

onMount(()=> {
  monthFrom = '' + (from.getMonth() + 1),
  dayFrom = '' + (from.getDate() - from.getDate() +1),
  yearFrom = from.getFullYear();

  monthTo = '' + (to.getMonth() + 1),
  dayTo = '' + to.getDate(),
  yearTo = to.getFullYear();

  if (monthFrom.length < 2) monthFrom = '0' + monthTo;
  if (dayFrom.length < 2) dayFrom = '0' + dayFrom;
  dateStringFrom = [yearFrom, monthFrom, dayFrom].join('-');

  if (monthTo.length < 2) monthTo = '0' + monthTo;
  if (dayTo.length < 2) dayTo = '0' + dayTo;
  dateStringTo = [yearTo, monthTo, dayTo].join('-');
});

const convertDateTimeZone = (lfecha) => {
    var date = new Date(lfecha * 1000);
    let month = "0"+ (date.getMonth()+1);
    let day = "0"+ date.getDate();
    let hours = "0"+ date.getHours();
    let minutes = "0"+ date.getMinutes();
    let seconds = "0"+ date.getSeconds();
    return  date.getFullYear() + '-' + month.substr(-2) +'-'+ day.substr(-2) + ' ' +  hours.substr(-2) + ':' + minutes.substr(-2) + ':' + seconds.substr(-2) +'.'+date.getMilliseconds();
  }

  const getMovements = async ()=>{
    try {
        let data = await backend.getMovements(user.token, dateStringFrom, dateStringTo, filter );
        movements = data;
        movements.map((m) => {
          m.currentDate = moment(m.lfecha*1000).tz('America/Santiago').format("YYYY-MM-DD HH:mm:ss");
        })
      } catch (error) {
        let msg = "Error"
        EventManager.publish("notify", {mode:"error", msg: msg});
      }
  };

</script>

<div class="u-form-movements">
  <div class="u-form-info">
    <div class="u-info">
      <label for="">Desde:</label>
      <input class="u-form-control u-input" type="date" bind:value={dateStringFrom}/>
    </div>
    <div class="u-info">
      <label for="">Hasta:</label>
      <input class="u-form-control u-input" type="date" bind:value={dateStringTo}/>
    </div>
    <div class="u-info">
      <label for="">Concepto:</label>
      <select class="u-form-control" bind:value={filter}>
        <option value="TT">TODOS</option>
        <option value="DE">DEPOSITOS</option>
        <option value="RE">RETIROS</option>
        <option value="PR">PREMIOS</option>
      </select>
    </div>
    <div class="u-info">
      <label for="exampleFormControlSelect1">Consultar:</label>
      <button class="u-consult-button" on:click={getMovements}>Consultar</button>
    </div>
  </div>
  <div class="u-show-info">
        {#if !movements.length }
        <div class="u-no-record">
            <span class="u-no-record-title">No hay nada aquí todavía</span>
            <span>Las transacciones aparecerán cuando deposite o retire dinero</span>
        </div>
        {:else}

        <div class="u-show-data">
          {#each movements as mov}
            <div class="u-data-info"> 
              <div class="u-data-ID">
                <span>ID:</span>  
                <div>{mov.id}</div>
              </div>
              <div class="u-item">
                <span>Reference:</span> 
                <div class="u-data-information">{mov.ref_op}</div> 
              </div>
              <div class="u-item">
                <span>fecha:</span>  
                <div class="u-data-information">{mov.currentDate}</div>
              </div>
              <div class="u-item">
                <span>operacion:</span>
                <div class="u-data-information">{mov.tipo_operacion}</div> 
              </div>
              <div class="u-item">
                <span>monto:</span> 
                <div class="u-data-information">{mov.monto.toFixed(2)}</div>
              </div>
            </div>
          {/each}
        </div>
        {/if}
    </div>

</div>


<style>
  .u-data-information{
    font-size: 0.9rem;
    width: 100%;
  }
  .u-form-movements{
    padding: 1rem;
  }
  .u-form-info{
    display: grid;
    gap: 0.5rem;
    grid-template-columns: 1fr 1fr;
  }
  .u-input{
    width: max-content;
  }
  .u-info{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
  }
  .u-consult-button{
    width: 100%;
    background-color: #57d874;
    height: 2.2rem;
    border: none;
    border-radius: 0.5rem;
  }
  .u-show-data{
    overflow: scroll;
    height: 30vh;
  }
  .u-show-info{
    margin-top: 1rem;
    border: 1px solid black;
  }
  .u-data-info{
    flex-direction: column;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0.5rem;
    border: 1px solid black;
    padding: 0.5rem;
    overflow: hidden;
  }
  .u-data-ID{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    color: black;
    font-weight: 800;
    width: 100%;
  }
  .u-item{
    width: 100%;
    color: black;
    display: grid;
    grid-template-columns: 30% 65%;
    align-items: center;
    justify-content:space-between;
    gap: 0.5rem; 
  }
  .u-no-record{
    padding: 1rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: black;
  }
</style>
