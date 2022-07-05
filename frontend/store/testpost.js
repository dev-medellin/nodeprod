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
    async createQuotes({ commit }, params) {
        return await this.$axios.post('/', { params }).then( (res) => {
            return res.data
        });
    }
}

export default { state, getters, mutations, actions }