

const variables =  {
// время в секундах с момента последнего производства здания
    timeOfResourceProduce: 1, // разница времени в производстве
    fiveSeconds: 5000, // 5 сек в м-сек
    fiveMinutes: 60000, // 1 мин (тестовые скорости производства) в м-сек
    // fiveMinutes: 300000, // 5 минут в м-сек
    oneDayInMilliseconds: 86400000,
    productionPower: 5,   // количество руд, произведенных за единицу времени

// ресурсы
    metalOreId: 1,
    organicOreId: 2,
    mineralOreId: 3,

    altahMineralId: 7,
    delitiumMineralId: 4,
    quantiumMineralId: 5,
    telluriumMineralId: 6,

// базовые ресурсы
    crudeMineralOreId: 9,
    crudeOreId: 8,


// материалы
    constructionMaterialsId: 9,
    steelId: 4,
    vetturId: 2,
    telluriumId: 6,
    quantiumId: 5,
    delitiumId: 4,

// здания
    colonyId: 1,
    buildingStationId: 5,
    accumulationStationsId: 14,
    waveStationsId: 15,
    oreCleanersId: 16,
    mineralSynthesizerId: 17,
    reinforcedConcretePlantId: 18,
    oreMineralPlantId: 19,
}
export default variables

