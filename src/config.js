
const Configuration = ( ()=>{
    const dev={
        CLIENTID: "121",
        GAMEAPI_URL:"https://prod-nd.apiusoft.com/api",
        //GAMEAPI_URL: "https://prod2.apiuniversalsoft.com/api",
        API:"https://lobby-bff.apiusoft.com",
        CLIENT_AUTH:"AMPEBETSAMERICAPEBETSAMERICAPEN123",
        CLIENT_CODE:"AMPE",
        LOBBY_GAMES_API:"https://lobby.apiusoft.com",
        ASSETS:"https://assets.apiusoft.com",
        WS_URL:"wss://lobby-bff.apiusoft.com/lobbybff",
        country:"+56",
        operatorId:"123",
        domain:"http://betsamerica.bet/",
        API_GAMES_NODE: "https://prod-nd.apiusoft.com",
        org:"AMPE",
        platform: "BetsAmerica",
        currency:7,//ARS
        configSignup:{
            platform:'BetsAmerica',
            typeSignup: "codeAgent", //codeAgent / selectCurrency /  mixed (codeAgent and selectCurrency)
            userType: "X",// X / W
            currencies: [ 
                {id: "", agent:""},//
            ],
            countries: [
                //{prefix:"+216",flag:"tnz"},
                {prefix:"+51",flag:""},
            ]
        },    
        configProfile : {
            id_banca: [] ,//disitribidor - almacena otros cajeros
            id_ca: [],//caja dentro de un distribuidor principal
            doctype:[],
            timezone:'America/Argentina/Buenos_Aires',//for movementes
            activePromotions: false,
        }
    }
    const local={
        CLIENTID: "121",
        GAMEAPI_URL:"https://prod-nd.apiusoft.com/api",
        //GAMEAPI_URL:"https://prod2.apiuniversalsoft.com/api",
        //API:"http://192.168.1.35:5000",
        API:"https://lobby-bff.apiusoft.com",
        CLIENT_AUTH:"AMPEBETSAMERICAPEBETSAMERICAPEN123",
        CLIENT_CODE:"AMPE",
        LOBBY_GAMES_API:"https://lobby.apiusoft.com",
        ASSETS:"https://assets.apiusoft.com",
        WS_URL:"wss://lobby-bff.apiusoft.com/lobbybff",
        country:"+56",
        operatorId:"123",
        platform: "BetsAmerica",
        domain:"http://betsamerica.bet/",
        API_GAMES_NODE: "https://prod-nd.apiusoft.com",
        org:"AMPE",
        currency:7,//ARS
        configSignup:{
            platform:'BetsAmerica',
            typeSignup: "codeAgent", //codeAgent / selectCurrency /  mixed (codeAgent and selectCurrency)
            userType: "X",// X / W
            currencies: [ 
                {id: "", agent:""},//
            ],
            countries: [
                //{prefix:"+216",flag:"tnz"},
                {prefix:"+54",flag:"ars"},
                
                 
            ]
        },
        configProfile : {
            id_banca: [] ,//disitribidor - almacena otros cajeros
            id_ca: [],//caja dentro de un distribuidor principal
            doctype:[],
            timezone:'America/Argentina/Buenos_Aires',//for movementes
            activePromotions: false,
        }

    }
    const prod={
        CLIENTID: "121",
        GAMEAPI_URL:"https://prod-nd.apiusoft.com/api",
        //GAMEAPI_URL: "https://prod2.apiuniversalsoft.com/api",
        API:"https://lobby-bff.apiusoft.com",
        CLIENT_AUTH:"AMPEBETSAMERICAPEBETSAMERICAPEN123",
        CLIENT_CODE:"AMPE",
        LOBBY_GAMES_API:"https://lobby.apiusoft.com",
        ASSETS:"https://assets.apiusoft.com",
        WS_URL:"wss://lobby-bff.apiusoft.com/lobbybff",
        country:"+56",
        platform: "BetsAmerica",
        operatorId:"123",
        domain:"http://betsamerica.bet/",
        API_GAMES_NODE: "https://prod-nd.apiusoft.com",
        org:"AMPE",
        currency:7,//ARS
        configSignup:{
            platform:'BetsAmerica',
            typeSignup: "codeAgent", //codeAgent / selectCurrency /  mixed (codeAgent and selectCurrency)
            userType: "X",// X / W
            currencies: [ 
                {id: "", agent:""},//
            ],
            countries: [
                //{prefix:"+216",flag:"tnz"},
                {prefix:"+54",flag:"ars"},
                
                 
            ]
        },
        configProfile : {
            id_banca: [] ,//disitribidor - almacena otros cajeros
            id_ca: [],//caja dentro de un distribuidor principal
            doctype:[],
            timezone:'America/Argentina/Buenos_Aires',//for movementes
            activePromotions: false,
        }
    } 
    const prod_CO = {
        CLIENT_AUTH: "AMCOBESTAMERICACOBESTAMERICACOP123",
        CLIENT_CODE: "AMCO",
        country: "CO",
        org: "AMCO",
        currency: 0,//ARS
        operatorId: "",
        configProfile : {
            id_banca: [] ,//disitribidor - almacena otros cajeros
            id_ca: [],//caja dentro de un distribuidor principal
            doctype:[],
            timezone:'America/Bogota',//for movementes
            activePromotions: false,
        }
    }


    const prod_PE = {
        CLIENT_AUTH: "AMPEBETSAMERICAPEBETSAMERICAPEN123",
        CLIENT_CODE: "AMPE",
        country: "PE",
        org: "AMPE",
        currency: 0,//ARS
        operatorId: "",
        configProfile : {
            id_banca: [] ,//disitribidor - almacena otros cajeros
            id_ca: [],//caja dentro de un distribuidor principal
            doctype:[],
            timezone:'America/Lima',//for movementes
            activePromotions: false,
        }
    }

    const prod_AR = {
        CLIENT_AUTH: "AMARBESTAMERICAARBETSAMERICAARS123",
        CLIENT_CODE: "AMAR",
        country: "AR",
        org: "AMAR",
        currency: 0,//ARS
        operatorId: "",
        configProfile : {
            id_banca: [] ,//disitribidor - almacena otros cajeros
            id_ca: [],//caja dentro de un distribuidor principal
            doctype:[],
            timezone:'America/Argentina/Buenos_Aires',//for movementes
            activePromotions: false,
        }
    }

    const prod_EC = {
        CLIENT_AUTH: "AMUSBESTAMERICAUSBESTAMERICAUSD123",
        CLIENT_CODE: "AMUS",
        country: "EC",
        org: "AMUS",
        currency: 0,//ARS
        operatorId: "",
        configProfile : {
            id_banca: [] ,//disitribidor - almacena otros cajeros
            id_ca: [],//caja dentro de un distribuidor principal
            doctype:[],
            timezone:'America/Guayaquil',//for movementes
            activePromotions: false,
        }
    }
    const prod_US = {
        CLIENT_AUTH: "LJUSLAJOYAUS2024LAJOYAUSA123",
        CLIENT_CODE: "LJUS",
        country: "US",
        org: "LJUS",
        currency: 0,//ARS
        operatorId: "",
        configProfile : {
            id_banca: [] ,//disitribidor - almacena otros cajeros
            id_ca: [],//caja dentro de un distribuidor principal
            doctype:[],
            timezone:'America/New_York',//for movementes
            activePromotions: false,
        }
    }
    const prod_UY = {
        CLIENT_AUTH: "AMUYBETSAMERICAURBETSAMERICAURU123",
        CLIENT_CODE: "AMUY",
        country: "UY",
        org: "AMUY",
        currency: 0,//ARS
        operatorId: "",
        configProfile : {
            id_banca: [] ,//disitribidor - almacena otros cajeros
            id_ca: [],//caja dentro de un distribuidor principal
            doctype:[],
            timezone:'America/Montevideo',//for movementes
            activePromotions: false,
        }
        
    }
    const prod_CL = {
        CLIENT_AUTH: "AMCLBETSAMERICACLBETSAMERICACLP123",
        CLIENT_CODE: "AMCL",
        country: "UY",
        org: "AMCL",
        currency: 0,//ARS
        operatorId: "",
        configProfile : {
            id_banca: [] ,//disitribidor - almacena otros cajeros
            id_ca: [],//caja dentro de un distribuidor principal
            doctype:[],
            timezone:'America/Montevideo',//for movementes
            activePromotions: false,
        }
        
    }


    const configMap=new Map()
    configMap.set("local",local)
    configMap.set("dev",dev)
    configMap.set("prod",prod)

    configMap.set("prod_CO", prod_CO)

    configMap.set("prod_PE", prod_PE)

    configMap.set("prod_AR", prod_AR)

    configMap.set("prod_EC", prod_EC)

    configMap.set("prod_UY", prod_UY)

    configMap.set("prod_US", prod_US)

    configMap.set("prod_cl", prod_CL)

    const getEnv=()=>{
        const host=window.location.toString()
        const env = /localhost|127.0.0.1/.test(host) ? 'local' : /dev/.test(host) ? 'dev' : 'prod';
        return env;
    }

    const getConfiguration=()=>{
        const host = window.location.toString()
        const env = getEnv()
        let country = null;
        //console.log("host", host);
        
        if (/co./.test(host)){
            country = "CO";
        }
        else if (/pe./.test(host)){
            country = "PE";
        }
        else if (/ar./.test(host)){
            country = "AR";
        }
        else if (/ec./.test(host)){
            country = "EC";
        }
        else if (/us./.test(host)){
            country = "US";
        }
        else if (/uy./.test(host)){
            country = "UY";
        }
        else if (/cl./.test(host)){
            country = "CL";
        }
        const defaultConfig = configMap.get(env)
        let customConfig = {};
        if (country) customConfig = configMap.get(env + '_' + country);
        //console.log("customConfig", customConfig);
        const config = { ...defaultConfig, ...customConfig };
        //console.log(country,config);
        return config;
    }
    return {getConfiguration, getEnv}
}) (  )

export default Configuration