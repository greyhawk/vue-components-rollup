<template>
<div v-show="show" v-bind:class="{
      'alert':		true,
      'alert-success':(type == 'success'),
      'alert-warning':(type == 'warning'),
      'alert-info':	(type == 'info'),
      'alert-danger':	(type == 'danger'),
      'top': 			(placement === 'top'),
      'top-right': 	(placement === 'top-right')
    }" transition="fade" v-bind:style="{width:width}" role="alert">
  <button v-show="dismissable" type="button" class="close" @click="show = false">
      <span>&times;</span>
    </button>
  <slot></slot>
</div>
</template>

<script>
import {
  coerce
} from './utils/utils.js'
export default {
  props: {
    type: {
      type: String
    },
    dismissable: {
      type: Boolean,
      coerce: coerce.boolean,
      default: false
    },
    show: {
      type: Boolean,
      coerce: coerce.boolean,
      default: true,
      twoWay: true
    },
    duration: {
      type: Number,
      coerce: coerce.number,
      default: 0
    },
    width: {
      type: String
    },
    placement: {
      type: String
    }
  },
  watch: {
    show(val) {
      if (this._timeout) clearTimeout(this._timeout)
      if (val && Boolean(this.duration)) {
        this._timeout = setTimeout(() => {
          this.show = false
        }, this.duration)
      }
    }
  }
}
</script>
