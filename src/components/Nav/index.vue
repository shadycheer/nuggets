
<style lang="less" scoped>
@import '@/assets/less/index';

.nav-comp {
  position: fixed;
  top: 0;
  width: 100%;
  .first-navComp {
    background-color: #fff;
    height: 60px;
    border-bottom: 1px solid #f1f1f1;
  }

  .second-navComp {
    background-color: #fff;
    border-bottom: 1px solid #f1f1f1;
    .nav-list {
      max-width: 960px;
      height: 100%;
      margin: auto;
      display: flex;
      align-items: center;
      line-height: 1;

      .nav-item {
        height: 45px;
        align-items: center;
        display: flex;
        flex-shrink: 0;
        color: #71777c;
        padding: 0 1rem;
        cursor: pointer;
      }
    }
  }
}

.nav-comp:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}



.nav-main {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  color: #909090;

  a {
    margin-right: 1rem;
    margin-left: 24px;
    display: inline-block;
    height: 22px;
    width: auto;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    flex-direction: row-reverse;
    height: 100%;
    margin: 0;
    width: 100%;

    .nav-list {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      height: 100%;
      margin: 0;
      padding: 0;
    }

    .nav-item {
      color: #515767;
      padding: 0 1rem;
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      height: 60px;
    }

    .search-add {
      flex: 1 1 auto;
      height: 5rem;
      display: flex;
      justify-content: flex-end;
    }

    .right-side-nav {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      position: relative;
      height: 100%;
      margin: 0;
      order: 0;
    }

    .vip-entry .vip-title {
      display: flex;
      align-items: center;
    }

    .vip-entry .vip-content {
      position: absolute;
      width: 275px;
      background: rgba(0, 0, 0, .8);
      border: 0.5px solid rgba(255, 244, 227, .5);
      z-index: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: default;
      border-radius: 8px;
      color: var(--juejin-font-white);
      top: 90%;
      left: -4px;
      right: 0;
      transform: translateX(-31%);
    }

    ul {
      display: flex;
      justify-content: center;
      align-items: center;

      li {
        cursor: pointer;
        list-style: none;
        display: inline-block;
        white-space: nowrap;
      }
    }
  }
}

.login-button {
  font-size: 14px;

  background: rgba(30, 128, 255, .05);
  border: 1px solid rgba(30, 128, 255, .3);
  color: #007fff;
}

.add-group {
  width: 140px
}

.add-group .add-btn {
  height: 100%;
  color: #fff;
  background-color: #1e80ff;
  border-radius: 3px;
  transition: background-color .1s linear .05s;
}

.navOn {
  transition: all 0.3s ease-in-out 0.3s;
  transform: translateZ(0);
}

.navOff {
  transition: all 0.3s ease-in-out 0.3s;
  transform: translate3d(0, -60px, 0);
}
</style>

<template>
  <div class="nav-comp" :class="[navShow ? 'navOn' : 'navOff']">
    <div class="first-navComp">
      <div class="nav-main" :ref="ref_NavMain">
        <a href="">
          <img src="	https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg"
            width="107" height="22">
        </a>
        <nav role="navigation" class="main-nav">
          <ul class="nav-list">
            <!---->
            <li class="main-nav-list">
              <ul class="phone-hide isResourceVisible">
                <li class="nav-item link-item route-active ">首页</li>
                <li class="nav-item link-item activities">
                  <span class="text">
                    <span>沸点</span>
                  </span>
                </li>
                <li class="nav-item link-item book">
                  <span>课程</span>
                </li>
                <li class="nav-item link-item"><span>直播</span></li>
                <li class="nav-item link-item"><span>活动</span></li>
                <li class="nav-item link-item">
                  <span>商城</span>
                </li>
                <li class="nav-item link-item download-icon"><span>APP</span></li>
                <li class="nav-item link-item extension-icon"><span>插件</span></li>
                <li tag="li" class="nav-item link-item"><img
                    src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7482b3ad2cd14edda31f05399c2ae759~tplv-k3u1fbpfcp-zoom-1.image?"
                    style="max-width: 115px; vertical-align: middle"></li>
              </ul>
            </li>
            <ul class="right-side-nav">
              <li class="search-add">
                <ul class="search-add-ul isResourceVisible">
                  <li class="nav-item search">
                    <el-input class="w-50 m-2" placeholder="搜索你想要的内容" />

                  </li>
                  <li class="nav-item add creator-item">
                    <div class="add-group">
                      <el-dropdown  split-button class="add-btn" type="primary" @click="() => { }">
                        创作者中心
                        <template #dropdown >
                          <el-dropdown-menu >
                            <el-dropdown-item>
                              <img
                                src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/a0c8073862f04c2925249fd397763fd3.svg"
                                alt="">
                              <span>写文章</span>
                            </el-dropdown-item>
                            <el-dropdown-item>
                              <img
                                src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e5381c85b5939d984a4b0c0edf102122.svg"
                                alt="">
                              <span>发沸点</span>
                            </el-dropdown-item>
                            <el-dropdown-item> <img
                                src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/a547852cf8e252e15f59b5a765d77d4b.svg"
                                alt="">
                              <span>写代码</span>
                            </el-dropdown-item>
                            <el-dropdown-item> <img
                                src="	https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/6ed78c4e98d68a142e3814b295189480.svg"
                                alt="">
                              <span>草稿箱</span>
                            </el-dropdown-item>
                          </el-dropdown-menu>
                        </template>
                      </el-dropdown>
                    </div>
                  </li>
                </ul>
              </li>
              <!---->
              <li class="nav-item vip-entry">
                <div class="vip-title"><img
                    src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/24127194d5b158d7eaf8f09a256c5d01.svg"
                    alt="vip" class="vip-img">
                  <div class="vip-words">会员</div>
                </div>
                <div class="vip-content" style="display:none;"><img
                    src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/a0ef799e93fdbfcffe8553ecf2beb5ba.svg"
                    alt="doll" class="icon">
                  <div class="content"><span>掘金会员，重磅登场</span> <span>限时五折，已预约用户享专属抵扣</span></div> <svg width="18"
                    height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="close">
                    <path d="M14.3029 3.69629L8.99959 8.99957L3.69629 14.3029" stroke="#8A919F" stroke-width="1.5"
                      stroke-linecap="round"></path>
                    <path d="M3.69629 3.69629L8.99959 8.99957L14.3029 14.3029" stroke="#8A919F" stroke-width="1.5"
                      stroke-linecap="round"></path>
                  </svg>
                </div>
              </li>
              <li class="nav-item auth">
                <el-button class="login-button">登录</el-button>
              </li>
            </ul>
          </ul>
        </nav>
      </div>
    </div>
    <div class="second-navComp">
      <div class="nav-list left">
        <div class="nav-item">综合</div>
        <div class="nav-item">后端</div>
        <div class="nav-item">前端</div>
        <div class="nav-item">Android</div>
        <div class="nav-item">ios</div>
        <div class="nav-item">人工智能</div>
        <div class="nav-item">开发工具</div>
        <div class="nav-item">代码人生</div>
        <div class="nav-item">阅读</div>
      </div>
    </div>
  </div>

</template>

<script lang="ts" setup>
import { ref, watch, onMounted } from "vue";
const top = ref(0)
const topClone = ref(0)
const navShow = ref(true)
onMounted(() => {
  window.addEventListener('scroll', () => {
    top.value = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
  })
})
watch(top, (curVal, preVal) => {
  if (curVal > preVal) {
    if (Math.abs(top.value - topClone.value) > 120) {
      navShow.value = false
      topClone.value = top.value
    }
  } else {
    if (Math.abs(top.value - topClone.value) > 120) {
      navShow.value = true
      topClone.value = top.value
    }
  }

})
const ref_NavMain = ref()


</script>