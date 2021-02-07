<template>
  <section class="section_category">
    <div class="container">
      <div class="category_title">
        <h2>Шары для боулинга</h2>
      </div>
      <div class="sort">

      </div>
      <div class="category">
        <div class="filter_block">
          <div class="filter">
            <h3>Фильтр</h3>
            <div class="filter_nav">
              <div @click="showCompany = !showCompany" class="category_link">
                <p href="#">Производитель</p>
                <div class="arrow-8"></div>
              </div>
              <div v-show="showCompany" class="category_link_accordion">
                <CheckBox v-bind:name="'Storm'" v-bind:type="'company'" @checkBox="checkBox"/>
                <CheckBox v-bind:name="'Hammer'" v-bind:type="'company'" @checkBox="checkBox"/>
                <CheckBox v-bind:name="'Motive'" v-bind:type="'company'" @checkBox="checkBox"/>
                <CheckBox v-bind:name="'Track'" v-bind:type="'company'" @checkBox="checkBox"/>
                <CheckBox v-bind:name="'DV8'" v-bind:type="'company'" @checkBox="checkBox"/>
                <CheckBox v-bind:name="'Radical'" v-bind:type="'company'" @checkBox="checkBox"/>
                <CheckBox v-bind:name="'Roto Grip'" v-bind:type="'company'" @checkBox="checkBox"/>
                <CheckBox v-bind:name="'Global'" v-bind:type="'company'" @checkBox="checkBox"/>
                <CheckBox v-bind:name="'Brunswick'" v-bind:type="'company'" @checkBox="checkBox"/>
                <CheckBox v-bind:name="'Ebonite'" v-bind:type="'company'" @checkBox="checkBox"/>
                <CheckBox v-bind:name="'Columbia'" v-bind:type="'company'" @checkBox="checkBox"/>
              </div>
              <div @click="showOil = !showOil" class="category_link">
                <p href="#">Масло</p>
                <div class="arrow-8"></div>
              </div>
              <div v-show="showOil" class="category_link_accordion">
                <CheckBox v-bind:name="'Добивочный'" v-bind:type="'oil'" @checkBox="checkBox"/>
                <CheckBox v-bind:name="'Легкое масло'" v-bind:type="'oil'" @checkBox="checkBox"/>
                <CheckBox v-bind:name="'Средне легкое масло'" v-bind:type="'oil'" @checkBox="checkBox"/>
                <CheckBox v-bind:name="'Среднее масло'" v-bind:type="'oil'" @checkBox="checkBox"/>
                <CheckBox v-bind:name="'Средне тяжелое масло'" v-bind:type="'oil'" @checkBox="checkBox"/>
                <CheckBox v-bind:name="'Тяжелое масло'" v-bind:type="'oil'" @checkBox="checkBox"/>
              </div>
              <div @click="showWeight = !showWeight" class="category_link">
                <p href="#">Вес</p>
                <div class="arrow-8"></div>
              </div>
              <div v-show="showWeight" class="category_link_accordion">
                <CheckBox v-bind:name="'6'" v-bind:type="'weight'" @checkBox="checkBox"/>
                <CheckBox v-bind:name="'7'" v-bind:type="'weight'" @checkBox="checkBox"/>
                <CheckBox v-bind:name="'8'" v-bind:type="'weight'" @checkBox="checkBox"/>
                <CheckBox v-bind:name="'9'" v-bind:type="'weight'" @checkBox="checkBox"/>
                <CheckBox v-bind:name="'10'" v-bind:type="'weight'" @checkBox="checkBox"/>
                <CheckBox v-bind:name="'11'" v-bind:type="'weight'" @checkBox="checkBox"/>
                <CheckBox v-bind:name="'12'" v-bind:type="'weight'" @checkBox="checkBox"/>
                <CheckBox v-bind:name="'13'" v-bind:type="'weight'" @checkBox="checkBox"/>
                <CheckBox v-bind:name="'14'" v-bind:type="'weight'" @checkBox="checkBox"/>
                <CheckBox v-bind:name="'15'" v-bind:type="'weight'" @checkBox="checkBox"/>
                <CheckBox v-bind:name="'16'" v-bind:type="'weight'" @checkBox="checkBox"/>
              </div>
            </div>
          </div>
        </div>
        <Preloader v-if="isLoading"/>
        <ProductsItems v-else v-bind:cart="sortedCart"/>
      </div>
    </div>
  </section>
</template>

<script>
import ProductsItems from "@/components/ProductsItems"
import CheckBox from "@/components/CheckBox"
import Preloader from "@/components/Preloader"
import {mapGetters, mapActions} from 'vuex'

export default {
  name: "Bowls",
  data() {
    return {
      showCompany: false,
      showOil: false,
      showWeight: false,
      sortedCart: [],
      sort: {
        company: [],
        oil: [],
        weight: [],
      },
    }
  },

  components: {ProductsItems, CheckBox, Preloader},
  computed: mapGetters(['allProducts', 'isLoading']),
  methods: {
    ...mapActions(['getProducts']),
    checkBox(name, type) {
      this.sort[type].indexOf(name) === -1 ? this.sort[type].push(name) : this.sort[type].splice(this.sort[type].indexOf(name), 1)
      this.sortCart()
    },
    sortCart() {
      this.sortedCart = this.allProducts
      if (this.sort.company.length) {
        this.sortedCart = this.sortedCart.filter(product => {
          return this.sort.company.some(company => product.company === company)
        })
      }
      if (this.sort.oil.length) {
        this.sortedCart = this.sortedCart.filter(product => {
          return this.sort.oil.some(oil => product.oil === oil)
        })
      }
      if (this.sort.weight.length) {
        this.sortedCart = this.sortedCart.filter(product => {
          return this.sort.weight.some(weight => product.weight.some(item => weight == item))
        })
      }
    }
  },
  watch: {
    allProducts: function () {
      this.sortedCart = this.allProducts
    }
  },
  mounted() {
    this.getProducts('balls')
  },
}
</script>

<style scoped>
.category_title {
  width: 100%;
  margin-top: 40px;
}

.category_title h2 {
  text-align: center;
}

.category {
  display: flex;
  margin-top: 40px;
  position: relative;
}

.filter_block {
  width: 20%;
}

.filter_block > h3 {
  padding-bottom: 15px;
  margin-bottom: 10px;
  border-bottom: 1px solid #cccccc;
  text-transform: uppercase;
}

.filter > h3 {
  margin-top: 40px;
  padding-bottom: 15px;
  margin-bottom: 10px;
  border-bottom: 1px solid #cccccc;
  text-transform: uppercase;
}

.category_link {
  display: flex;
  justify-content: space-between;
  padding: 7px 0;
  cursor: pointer;
}

.category_link p:hover {
  color: #929292;
  transition: color 0.3s ease;
}

.category_link_accordion {
  display: flex;
  flex-direction: column;
  padding-left: 15px;
}

.category_link_accordion > a {
  padding: 7px 0;
  text-decoration: none;
  color: #101010;
}

.category_link_accordion > a:hover {
  color: #929292;
  transition: color 0.3s ease;
}

.filter_nav {
  padding-bottom: 10px;
  border-bottom: 1px solid #cccccc;
}
</style>