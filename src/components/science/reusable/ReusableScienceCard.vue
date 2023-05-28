<template>
    <div class="sc_card_wrapper" :style="{top: top + 'px', left: left + 'px'}">
        <div class="sc_text">
            {{ name }}
        </div>
        <div class="sc_img">
            {{ picture ? picture : 'img' }}
        </div>
        <div class="sc_lvl">
            {{lvl}}
        </div>
        <button class="sc_button" @click="learnTech(name, lvl)">Изучить</button>
    </div>
</template>

<script setup>
defineProps(['name', 'picture', 'top', 'left', 'lvl'])
function learnTech(name, lvl){
    console.log(name)
    console.log(lvl)
}
</script>
<style scoped lang="scss">
.sc_lvl {
    text-align: center;
    border-bottom: 1px solid rgba(43, 211, 237);
    border-right: 1px solid rgba(43, 211, 237);
    width: 40px;
    height: 20px;
    position: absolute;
    left: 0;
    top: 0;
}

.sc_text {
    padding: 0 5px;
}

.sc_card_wrapper {
    color: #daa548;
    position: absolute;
    width: 230px;
    height: 60px;
    border: 1px solid rgba(43, 211, 237);
    background: radial-gradient(ellipse 90% 90%, rgba(5, 45, 51, 0.5), rgba(5, 45, 51, 0.2)) no-repeat, url(@/assets/images/value_bg_blue.png) repeat padding-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
}
.sc_button{
    color: #daa548;
    position: absolute;
    top:100%;
    left: -1px;
    width: calc(100% + 2px);
    border: 1px solid rgba(43, 211, 237);
    background: radial-gradient(ellipse 90% 90%, rgba(5, 45, 51), rgba(5, 45, 51)) no-repeat, repeat padding-box;
    &:hover{
      background: radial-gradient(ellipse 90% 90%, rgba(5, 45, 51), rgba(5, 15, 51)) no-repeat, repeat padding-box;
     }
  &:active{
    background: radial-gradient(ellipse 90% 90%, rgba(5, 45, 51), rgba(5, 35, 51)) no-repeat, repeat padding-box;
  }
}
</style>