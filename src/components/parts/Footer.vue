<template>
  <div id="footer">
    <nav>
        <li>{{ lang('footer.node_version', node_version) }}</li>
        <li>{{ lang('footer.node_version', electron_version) }}</li>
        <li>{{ lang('footer.node_version', move_tool_version) }}</li>
    </nav>
  </div>
</template>

<script>

import {lang} from '@/core/lang';

export default {
  name: 'Footer',
  data() {
    return {
        node_version:'',
        electron_version:'',
        move_tool_version:''
    }
  },
  methods:{
    lang
  }
}
</script>

<style scoped>

#footer{
    position:fixed;
    bottom:0;
    text-align: center;
    width:100%;
}
#footer nav{
    text-decoration: none;
    list-style-type: none;
    display: flex;
    font-size:12px;
    background: #ddd;
    justify-content: center;
    width:100%;
}
#footer nav li{
    padding:8px 4px;
    color: #001;
}

</style>