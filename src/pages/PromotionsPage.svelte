<script>

    const showPromotions = (cat) => {
        let filters = ['hipismo', 'casino', 'novedades', 'todos'];
        let currentFilters = filters.filter(f => f != cat);
        let objFather = document.getElementById("images-div");
        let total = objFather.getElementsByTagName("button").length;

        for(let i = 0; i<filters.length; i++){
            for(let j = 1; j <= total ; j++){
                let item = document.getElementById(filters[i]+j)  
                if(item){item.removeAttribute("style")}
            }
        }

        if(cat != "todos"){
            for (let i = 0; i < currentFilters.length; i++) {
                for (let j = 1; j <= total; j++) {
                    let item = document.getElementById(currentFilters[i]+j)                
                    if(item){item.style.display="none"}
                }
            }  
        }
    }

</script>

<div class="content-promo">
    <div class="header">
        <span class="title">Promociones</span>
        <div class="btns">
            <button class="btn gb-btn-all" on:click={()=>showPromotions("todos")}>
                <span>TODOS</span>
            </button>
            <button class="btn gb-btn-hipica" on:click={()=>showPromotions("hipismo")} >
                <span>HÍPISMO</span>
            </button>
            <button class="btn gb-btn-slot" on:click={()=>showPromotions("casino")}>
                <span>CASINO</span>
            </button>
            <button class="btn gb-btn-new" on:click={()=>showPromotions("novedades")}>
                <span>NOVEDADES</span>
            </button>
        </div>
    </div>

    <div class="u-wrapp" id="images-div">
        <button id="hipismo1" >
            <img class="img" src="https://universalrace.net/betuniversal/images/promocion/novedades1.png" alt="">
        </button>
        <button id="hipismo2" >
            <img class="img" src="https://universalrace.net/betuniversal/images/promocion/novedades5.png" alt="">
        </button>
        <button id="casino1" >
            <img class="img" src="https://universalrace.net/betuniversal/images/promocion/novedades3.png" alt="">
        </button>
        <button id="novedades1" >
            <img class="img" src="https://universalrace.net/betuniversal/images/promocion/novedades2.png" alt="">
        </button>
    </div>

</div>

<style>

@media only screen and (max-width: 1200px) {
.content-promo{
    background-color: white;
    height: 85vh;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0.5rem;
}
.header{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: #000;
}
.btns{
    display: flex;
    flex-direction: row;
    overflow: scroll;
    gap: 0.5rem;
}
.u-wrapp{
    display: grid;
    gap: 0.5rem;
    grid-template-columns: 30% 30% 30%;
    overflow: scroll;
}
.title{
    font-size: 1.2rem;
    font-weight: 800;
}
.img{
    width: 100%;
    height: 100%;
}
.btn{
    border-radius: 0.5rem;
    border: none;
    padding: 0.3rem;
    width: 7rem;
}
.gb-btn-all{
    background-color: darkgoldenrod;
    color: white;
}
.gb-btn-new{
    background-color: #000;
    color: white;
}
.gb-btn-slot , .gb-btn-hipica{
    border: 1px solid black;
}
button{
    padding: 0;
    cursor: pointer;
}
}
@media only screen and (min-width: 1200px) {
    .content-promo{
    background-color: white;
    height: 80vh;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0.5rem;
    }
    .header{
    display: flex;
    flex-direction: row;
    gap: 1rem;
    color: #000;
    }
    .u-wrapp{
    display: grid;
    gap: 1rem;
    grid-template-columns: 30% 30% 30%;
    overflow: scroll;
    }
    .title{
    font-size: 1.2rem;
    font-weight: 800;
    }
    .img{
    width: 100%;
    height: 100%;
    }
    .btn{
    border-radius: 0.5rem;
    border: none;
    padding: 0.3rem;
    width: 7rem;
    }
    .gb-btn-all{
    background-color: darkgoldenrod;
    color: white;
    }
    .gb-btn-new{
    background-color: #000;
    color: white;
    }
    .gb-btn-slot , .gb-btn-hipica{
    border: 1px solid black;
    }
    button{
    padding: 0;
    cursor: pointer;
    }
}

</style>