/**
 * Description: 请输入文件描述
 * Author: liuyongsheng
 * Date: 2020-09-01 17:07:40
*/
/*
    <div class="nav-tab">
            <div class="nav-tab-wrap" ref="navTab">
                <ul>
                    <li class="tab-item"
                        v-for="(item, index) in listData"
                        @click="scrollToTitle(item, index)"
                        :key="index">{{item}}</li>
                </ul>
            </div>
        </div>
*/

this.tabScroll = new IScroll(this.$refs.navTab, {
    scrollX: true,
    scrollY: false,
    click: true,
    disablePointer: true, // 指针事件
    disableTouch: false, // 禁止触摸事件解决滑动卡顿问题
    disableMouse: false, // 禁止鼠标事件解决滑动卡顿问题
    tap: true
});