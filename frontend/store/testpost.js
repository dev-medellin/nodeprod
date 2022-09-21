const state = () => ({
    list    : [],
})

const getters =  {
    list    : state => state.list
}

const mutations = {
    SET_LIST(state, list) {
        state.list = list
    }
}

const actions  = {
    async getOrders({ commit }) {
        return await new Promise((resolve, reject) => {
            this.$axios.get('/quote/fetchAll').then(response => {
               
                    commit("SET_LIST", response)
                    resolve(response);
            }, error => {
                reject(error);
            })
        })
    },
    async createQuotes({ commit }, params) {
        return await this.$axios.post('/quote/post', { params }).then( (res) => {
            commit('SET_LIST', res.data);
        });
    },
    async removeList({ commit }, params){
        return await new Promise((resolve, reject) => {
            this.$axios.delete('/quote/removeList/'+params).then(response => {
                commit("SET_LIST", response)
                resolve(response);
        }, error => {
                reject(error);
            })
        })
    }
}

export default { state, getters, mutations, actions }