import {createStore} from "vuex";

export default createStore({
    state: {
        player: {
            login: '',
            playerPlanets: {
                homePlanet: {},
                colonies: []
            },
            playerScience: {
                summaryScience: 10,
                alreadyLearned: [
                    {
                        science: {},
                        lvl: 0
                    }
                    ],
                inLearnNow: {
                    science: {},
                    endTime: Date.now()
                }
            },
            playerProjects: [
                {
                    projectName: '',
                    projectId: Date.now(),
                }
            ],


        }
    },

})