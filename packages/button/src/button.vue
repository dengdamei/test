<template>
  <button
    class="mc-button"
    @click="handleClick"
    :class="[
            `mc-button--${type}`,
            {
                'is-plain':plain,
            }
        ]"
  >
    <i :class="icon" v-if="icon"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>
<script>
export default {
  name: "McButton",
  props: {
    type: {
      type: String,
      defalut: "default".default
    },
    plain: {
      type: Boolean,
      default: false
    },
    icon:{
        type:String,
        default:''
    }

  },
  methods:{
          handleClick(e){
            console.log('123')
              this.$emit('click',e)
          }
  }
};
</script>
<style lang="scss">
.mc-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;

  &:hover，, &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }

  &.is-plain:hover, &.is-plain:focus {
    background: #fff;
    border-color: #409eff;
    color: #409eff;
  }
  &--success {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;
    &:hover,
    &:focus {
      background: #85ce61;
      border-color: #85ce61;
      color: #fff;
    }
    &.is-plain {
      color: #67c23a;
      background: #f0f9eb;
      border-color: #c2e7b0;
      &:hover,
      &:focus {
        background: #67c23a;
        border-color: #67c23a;
        color: #fff;
      }
    }
  }
}
</style>
