<template> 

     <div id="container404">
        <h1 id="h1404">404</h1>
        <h2 id="h2404">Page non trouvée</h2>
        <h3 id="h3404">La page que vous tentez d’afficher n’existe pas. Vous pouvez revenir à la page précédente ou aller à la page d’accueil.</h3>
    </div>  
   
</template>

<script>
import axios from 'axios';

export default {

    name:'Page404',
    data(){
        return{
        };
    },

    created(){
        axios.get('http://localhost:8090');
    }
}

</script>

<style scoped src = "./404.css">

</style>
