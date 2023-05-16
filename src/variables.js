

const variables =  {
// время в секундах с момента последнего производства здания
    timeOfResourceProduce: 1, // разница времени в производстве
    tenSeconds: 10000, // 10 сек в м-сек
    oneMinute: 60000, // 1 мин (тестовые скорости производства) в м-сек
    fiveMinutes: 10000, // 5 минут в м-сек
    // fiveMinutes: 300000, // 5 минут в м-сек
    oneHour: 3600000,
    oneDayInMilliseconds: 86400000,
    productionPower: 5,   // количество руды/материала, произведенных за единицу времени

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

// модули
    solarSailModuleId: 4,
    rocketEngineId: 5,
    nuclearEngineId: 6,
    nanoEngineId: 7,
    chemicalReactorId: 1,
    nuclearReactorId: 2,
    altahReactorId: 3,

// типы модулей
    moduleTypeEngine: 1,
    moduleTypeReactor: 2,

// здания
    colonyId: 1,
    buildingStationId: 5,
    accumulationStationsId: 14,
    waveStationsId: 15,
    oreCleanersId: 16,
    mineralSynthesizerId: 17,
    reinforcedConcretePlantId: 18,
    oreMineralPlantId: 19,
    polymersPlantId: 20,
    chemicalComplexId: 21,
    enrichmentComplexId: 22,
    engineFactoryId: 27,
    reactorFactoryId: 28,

// Типы зданий
    buildingTypeMaterials: 4,
    buildingTypeModules: 6,
}
export default variables

