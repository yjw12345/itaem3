import Vuex from "vuex"
import Vue from "vue"
// 使用插件
const state = () => ({
    // 设置位置
    location: 2,
    aligei: "sb",
});
const getters = {
    fathermove: (state) => {
        // 这里计算父元素的移动距离
        return -(state.location * 600 - 150)
    },
    sonmove: (state) => {
        // 这里计算父元素的移动距离
        let location = state.location
        // 定义子数组
        let child = []
        for (let i = 0; i < 11; i++) {
            // 定义图片距离中心图片的位置数
            let a = Math.abs(i - location)
            let xmove = 20 * (i - location)
            let zmove = -300 * a
            child.push({ xmove, zmove })
        }
        return child
    },
    // 计算第一个轮播图的子函数
};

const mutations = {
    change(state, value) {
        state.location = value
    },
    mouse(state, value) {
        let k = (value) / 400
        // 计算location的系数
        state.location -= k
        //
    },
    mouseup(state) {
        state.location = Math.round(state.location)
    },
    bian(state, value) {
        if (value) {
            state.location++
            if (state.location >= 9) {
                state.location = 2
            }
        } else {
            state.location--
            if (state.location <= 2) {
                state.location = 9
            }
        }

    }
};

const actions = {

};

Vue.use(Vuex)
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})