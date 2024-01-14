<template>

    <!-- Modal -->
 <div class="modal fade" :id="'exampleModal_' + pokename" tabindex="-1" :aria-labelledby="'exampleModalLabel_' + pokename" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header" style="background-image: url('images/modal_bg.png');">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
          </button>
          <img :src="pokedata.img" class="img-responsive" width="180px"/>
        </div>
        <div class="modal-body">
          <ul>
            <li>
              <b>Name:</b>&nbsp;&nbsp;<p>{{ pokedata.name }}</p>
            </li>
            <li>
              <b>Weight:</b>&nbsp;&nbsp;<p>{{ pokedata.weight }}</p>
            </li>
            <li>
              <b>Height:</b>&nbsp;&nbsp;<p>{{ pokedata.height }}</p>
            </li>
            <li>
              <b>Types:</b>&nbsp;&nbsp;<p>{{ pokedata.type }}</p>
            </li>
          </ul>
        </div>
        <div class="modal-footer">
          <div data-bs-dismiss="modal">
            <BtnCommon @click="clipboardEvent" text="Share to my friends" :disabled="false"></BtnCommon>
          </div>
          <StarFav @click="handleFav" :isFav="isFav"/>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import axios from 'axios';
import BtnCommon from './BtnCommon.vue';
import StarFav from './StarFav.vue';
import Swal from 'sweetalert2'

export default{
    name: 'ModalBox',
    components: {
      BtnCommon,
      StarFav
    },
    props: {
        pokename: String,
        isFav: Boolean
    },
    data() {
        return {
            pokedata: {
                name: '',
                weight: '',
                height: '',
                type: '',
                img:'',
                copy: ''
            }
        };
    },
    emits: ['favHandler'],
    methods: {
        handleFav() {
            this.$emit('favHandler', this.pokename);
        },

        clipboardEvent(){
          if (navigator.clipboard) {
            navigator.clipboard.writeText(this.pokedata.copy)
              .then(() => {
                Swal.fire({
                  title: 'Pokemon copied to clipboard!',
                  text: "You've catched it!",
                  icon: 'success',
                  confirmButtonText: 'Got it!'
                })
              })
              .catch((err) => {
                Swal.fire({
                  title: 'Pokemon not copied...',
                  text: "Don't let it go!",
                  icon: 'error',
                  confirmButtonText: 'Got it!'
                });
                console.log(err);
              });
          } else {
         
          console.warn('Clipboard API has no support on your browser.');
          }
        }
    },
    mounted() {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${this.pokename}`)
            .then(res => {
            if (this.pokename === res.data.forms[0].name) {
                this.pokedata.name = this.pokename,
                this.pokedata.weight = res.data.weight,
                this.pokedata.height = res.data.height,
                this.pokedata.type = res.data.types.map((e) => e.type.name).join(", ");
                this.pokedata.img = res.data.sprites.other['official-artwork'].front_default;
                this.pokedata.copy = `${this.pokedata.name}, ${this.pokedata.weight}, ${this.pokedata.height}, ${this.pokedata.type}`
            }
            else {
                console.log('This pokemon has no data');
            }
        });
    }
}

</script>

<style scoped>
  .modal-header{
    background-size: cover;
    background-repeat: no-repeat;
    height: 220px;
    display: block;
    text-align: end;
  }

  li p{
    text-transform: capitalize;
    display: inline-flex;
    align-items: center;
  }

  ul{
    list-style-type: none;
    text-align: left;
    padding-inline-start: 0px;
    padding: 0px 10px;
  }

  ul li{
    padding: 10px;
    border-bottom: 1px solid var(--white_gray);
  }

  b{
    font-size: 18px;
  }

  .modal-body{
    padding: 10px 15px 0px;
  }

  .modal-footer{
    border-top: none;
    justify-content: space-between;
    padding: 0px 20px 10px;
  }

  .btn-close{
    position: absolute;
    right: 20px;
  }

  .btn-close{
    --bs-btn-close-focus-shadow: none;
  }

  img{
    margin: auto;
    display: block;
  }
</style>