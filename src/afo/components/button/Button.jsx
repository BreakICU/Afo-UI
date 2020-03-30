import { Button as AButton } from 'ant-design-vue';
import { Button as EButton } from 'element-ui';

import buttonTypes from './buttonTypes'
const props = buttonTypes();

export default {
  name: "button-counter-container",
  data() {
    return {
      count: 0
    };
  },
  props,
  methods: {
    onChange(val) {
      this.count = val;
    }
  },
  render() {
    const { type, uiType } = this;
    console.log("this",this)
    console.log("type",this.type)
    console.log("uiType", this.uiType, uiType)

    const Button = uiType === "antd" ? AButton : EButton;
    console.log(Button)
    return (
      <div>
        <Button type={type}>123</Button>
       <p>123</p>
      </div>
    );
  }
};