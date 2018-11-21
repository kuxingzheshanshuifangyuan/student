<template>
  <div class="user-select-school">
    <Dropdown>
      <span class="lxr-class">百万校区</span>
      <Icon type="ios-arrow-down" :size="18" color="#fff"/>
      <DropdownMenu slot="list">
        <DropdownItem name="logout">万向校区</DropdownItem>
        <DropdownItem name="logout">万向校区</DropdownItem>
        <DropdownItem name="logout">万向校区</DropdownItem>
        <DropdownItem name="logout">万向校区</DropdownItem>
        <DropdownItem name="logout">万向校区</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.user-select-school{
  float:right;
  height:80px;
  line-height: 80px;
  color:#fff;
  font-size: 14px;
  margin-right:20px;
  padding-left:20px;
  position: relative;
  &:before{
    position: absolute;
    content:'';
    width:1px;
    height:14px;
    background:#f6f6f6;
    top:33px;
    left:0;
  }
  .lxr-class{
    margin-right:10px;
  }
}
</style>
