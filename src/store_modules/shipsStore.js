import {createStore} from "vuex";
import {ref} from "vue";

export default createStore({
    state: {
        bonusToTonnage: ref(1),
        bonusToEnergy: ref(1),
        bonusToSpeed: ref(1),
        bonusToHp: ref(1),
        bonusToDamage: ref(1),
        massEconomy: ref(1),

    },
})