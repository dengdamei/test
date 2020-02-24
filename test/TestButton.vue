<template>
    <div class="app">
        <div class="row">
            <mc-button>按钮</mc-button>
            <mc-button icon='mc-icon-check' type="success">按钮</mc-button>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        jump(e){
            console.log(e)
            alert(123)
        }
    }
}
</script>
<style lang="scss" scoped>
.appp{
    width:600px;
    height:200px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-top:100px;
}
.row{
    padding:10px 0;
}
.mc-button{
    margin-left:10px;
}
</style>