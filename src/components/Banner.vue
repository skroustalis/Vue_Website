<template>
    <div class="banner">
        <div class="banner-text">
            <h2>Vue Project</h2>
        </div>
    </div>
</template>

<script>
export default{
    name: 'Banner'
};
</script>


<style lang="scss" scoped>
    .banner{
    padding-top: 5%;
    background-image: url("../assets/whiteback.webp");
    background-attachment: fixed;
    position: relative;
    height: 40vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .banner-text{
        position:relative;
        color: #3a393a;
        
        h2{
            text-transform: uppercase;
            font-size: 30px;
            
        }
    }

    @media (max-width: 768px) {
        .banner{
            height: 70vh;
        }

        .banner-text{
            h2{
                font-size: 30px;
            }
        }
    }
}
</style>