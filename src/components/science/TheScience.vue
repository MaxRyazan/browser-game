<template>
    <Dialog :closable="false" header="header" v-model:visible="planetStore.state.visibilityScienceMenu"
            :style="{width: '95vw',height: '85vh', border: '2px solid white', background: 'black'}">
        <div class="science_wrapper">
            <reusable-science-card top="10" left="10" name="Математика" lvl="1" picture="" />
            <reusable-science-card top="140" left="10" name="Физика" lvl="1" picture="" />
            <reusable-science-card top="270" left="10" name="Биология" lvl="1" picture="" />
            <reusable-science-card top="400" left="10" name="Химия" lvl="1" picture="" />
            <reusable-science-card top="530" left="10" name="Машиностроение" lvl="1" picture="" />
            <reusable-science-card top="660" left="10" name="" lvl="1" picture="" />

            <reusable-horizontal-line svg_left="240" svg_top="560" polyline_points="0,10 140,10"  />

            <reusable-science-card top="530" left="380" name="Промышленные роботы" lvl="1" picture="" />
        </div>
    </Dialog>
</template>

<script setup>
import Dialog from "primevue/dialog";
import planetStore from "@/store_modules/planetStore.js";
import ReusableScienceCard from "@/components/science/reusable/ReusableScienceCard.vue";
import ReusableHorizontalLine from "@/components/science/reusable/ReusableHorizontalLine.vue";

window.addEventListener('keydown', (e) => {
    if (e.code === 'KeyC') {
        planetStore.state.visibilityScienceMenu = !planetStore.state.visibilityScienceMenu
    }
})
</script>
<style scoped lang="scss">
.science_wrapper{
    padding: 0;
    margin: 0;
    width: 100%;
    min-height: calc(85vh - 28px);
  &::after{
    z-index: -1;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    content: "";
    background: url("@/assets/images/backgrounds/sc_bg.jpg") no-repeat center;
    background-size: cover;
    opacity: .5;
  }
}


</style>