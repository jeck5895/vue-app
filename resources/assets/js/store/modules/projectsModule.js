/*
    You can also extract the authModule objects[state, mutations, getters, actions] by file  by using extract default
*/

export default {
    state: {
        projects:[],
    },
    mutations: {
       getProjects:(state, data) => {
            state.projects = data;
       }
    },
    actions: {
        // the difference between action and mutation is async functions are placed in action
        // and action will commit the mutation its a bad practice to place ajax calls on mutations
        getProjects: context => {
            axios.get('api/projects', this.$headersConfig)
            .then(
                response => { 
                    context.commit('getProjects',response.data);
                }
            );          
        }
    },
    getters: { 
        loadProjects:state => {
            return state.projects;
        }
        //it's a computed property for store
        //always return an object
        //i.e Display an featured projects "map" function is used to loop an array
        /*
            getFeaturedProjects: state => {
                let featuredProjects = state.projects.map(project =>{
                    if(project.isFeatured == 1){
                        return {
                            project_name = project.project_name,
                            description = project.description
                        }
                    }
                })
            } 
        */
    }
}