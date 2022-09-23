<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        Welcome {{getEmail}}
      </h1>
      <div class="links">
        <form method="post" class="custom_form" @submit.prevent="submitPasswordChange">
          <div class="col-md-12">
            <div class="cold-md-6">
              <label for="">Name</label>
              <input type="text" v-model="name">
            </div>
            <div class="cold-md-6">
              <label for="">Quote</label>
              <input type="text" v-model="quotes">
            </div>
            <div class="buttons">
               <button type="submit" class="btn btn-primary w-30">Submit</button>
            </div>
            <ul class="lst" style="list-style: none;" v-for="list in getList.data" :key="list._id">
              <li><span class="font-weight-bold">{{list.name}}</span> <a href="javascript:void(0);" @click.prevent="removeList(list._id)"><span>Delete</span></a></li>
            </ul>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

</style>
<script>

import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
      return {
        name :'',
        quotes: ''
      }
  },
  computed : {
      ...mapGetters({
          getList     : 'testpost/list',
      }),
      getEmail(){
        if(this.$store.getters.isAuthenticated){
          return this.$auth.user.email
        }
      }
  },
      mounted() {  
        this.getOrders()
    },
  methods:{
    	...mapActions({
				setFeaturedItem		: 'testpost/createQuotes',
        getOrders         : 'testpost/getOrders',
        removeLists        : 'testpost/removeList'
			}),
    submitPasswordChange: function(){

      var data = {
        'name' : this.name,
        'quotes' : this.quotes
      };

      this.setFeaturedItem(data).then( (response) => {
        this.getOrders()
      }).catch((err) => {
        console.log(err)
      })
    },
    removeList: function(id){
      this.removeLists(id).then((response) => {
        this.getOrders()
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>