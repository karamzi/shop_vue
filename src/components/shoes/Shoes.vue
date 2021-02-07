<template>
  <section class="section_category">
    <div class="container">
      <div class="category_title">
        <h2>Обувь для боулинга</h2>
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
                <CheckBox v-bind:name="'Dexter'" v-bind:type="'company'" @checkBox="checkBox"/>
                <CheckBox v-bind:name="'Etonic'" v-bind:type="'company'" @checkBox="checkBox"/>
                <CheckBox v-bind:name="'Banff'" v-bind:type="'company'" @checkBox="checkBox"/>
                <CheckBox v-bind:name="'Brunswick'" v-bind:type="'company'" @checkBox="checkBox"/>
              </div>
              <div @click="showSize = !showSize" class="category_link">
                <p href="#">Размер</p>
                <div class="arrow-8"></div>
              </div>
              <div v-show="showSize" class="category_link_accordion">
                <CheckBox v-bind:name="'36.0'" v-bind:type="'size'" @checkBox="checkBox"/>
                <CheckBox v-bind:name="'36.5'" v-bind:type="'size'" @checkBox="checkBox"/>
                <CheckBox v-bind:name="'37.0'" v-bind:type="'size'" @checkBox="checkBox"/>
                <CheckBox v-bind:name="'37.5'" v-bind:type="'size'" @checkBox="checkBox"/>
                <CheckBox v-bind:name="'38.0'" v-bind:type="'size'" @checkBox="checkBox"/>
                <CheckBox v-bind:name="'38.5'" v-bind:type="'size'" @checkBox="checkBox"/>
                <CheckBox v-bind:name="'39.0'" v-bind:type="'size'" @checkBox="checkBox"/>
                <CheckBox v-bind:name="'39.5'" v-bind:type="'size'" @checkBox="checkBox"/>
                <CheckBox v-bind:name="'40.0'" v-bind:type="'size'" @checkBox="checkBox"/>
                <CheckBox v-bind:name="'40.5'" v-bind:type="'size'" @checkBox="checkBox"/>
                <CheckBox v-bind:name="'41.0'" v-bind:type="'size'" @checkBox="checkBox"/>
                <CheckBox v-bind:name="'41.5'" v-bind:type="'size'" @checkBox="checkBox"/>
                <CheckBox v-bind:name="'42.0'" v-bind:type="'size'" @checkBox="checkBox"/>
                <CheckBox v-bind:name="'42.5'" v-bind:type="'size'" @checkBox="checkBox"/>
                <CheckBox v-bind:name="'43.0'" v-bind:type="'size'" @checkBox="checkBox"/>
                <CheckBox v-bind:name="'43.5'" v-bind:type="'size'" @checkBox="checkBox"/>
                <CheckBox v-bind:name="'44.0'" v-bind:type="'size'" @checkBox="checkBox"/>
                <CheckBox v-bind:name="'44.5'" v-bind:type="'size'" @checkBox="checkBox"/>
                <CheckBox v-bind:name="'45.0'" v-bind:type="'size'" @checkBox="checkBox"/>
                <CheckBox v-bind:name="'45.5'" v-bind:type="'size'" @checkBox="checkBox"/>
                <CheckBox v-bind:name="'46.0'" v-bind:type="'size'" @checkBox="checkBox"/>
              </div>
              <div @click="showSex = !showSex" class="category_link">
                <p href="#">Пол</p>
                <div class="arrow-8"></div>
              </div>
              <div v-show="showSex" class="category_link_accordion">
                <CheckBox v-bind:name="'Мужские'" v-bind:type="'sex'" @checkBox="checkBox"/>
                <CheckBox v-bind:name="'Женские'" v-bind:type="'sex'" @checkBox="checkBox"/>
              </div>
              <div @click="showHand = !showHand" class="category_link">
                <p href="#">Левша/Правша</p>
                <div class="arrow-8"></div>
              </div>
              <div v-show="showHand" class="category_link_accordion">
                <CheckBox v-bind:name="'Левша'" v-bind:type="'hand'" @checkBox="checkBox"/>
                <CheckBox v-bind:name="'Правша'" v-bind:type="'hand'" @checkBox="checkBox"/>
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
import {mapActions, mapGetters} from "vuex"

export default {
  name: "Shoes",
  data() {
    return {
      showCompany: false,
      showSize: false,
      showHand: false,
      showSex: false,
      sortedCart: [],
      sort: {
        company: [],
        size: [],
        hand: [],
        sex: [],
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
      if (this.sort.size.length) {
        this.sortedCart = this.sortedCart.filter(product => {
          return this.sort.size.some(size => product.size.some(item => size == item))
        })
      }
      if (this.sort.hand.length) {
        this.sortedCart = this.sortedCart.filter(product => {
          return this.sort.hand.some(hand => product.hand === hand || product.hand === null)
        })
      }
      if (this.sort.sex.length) {
        this.sortedCart = this.sortedCart.filter(product => {
          return this.sort.sex.some(sex => product.sex === sex)
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
    this.getProducts('shoes')
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