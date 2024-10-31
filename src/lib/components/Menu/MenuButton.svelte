<script>
    export let buttonConfig

</script>

<div class="menuButton">
    <img src="{buttonConfig.icon}" alt=""/>
    <p>{buttonConfig.name}</p>
</div>

<style>

    .menuButton {
        background: #000000;
        width: 24%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 80px;
        border-radius: 4px;
        cursor: pointer;
    }
    img {
        height: 30px;
    }

    p {
        font-size: 0.8rem;
        text-align: center;
        height: 20px;
        margin:0;
    }

</style>