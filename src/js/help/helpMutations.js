export default {
    openInfo(helpStore, param){
        switch (param){
            case 'resourcesInfo' : helpStore.resourcesInfo = !helpStore.resourcesInfo;
            break;
        }
    }
}