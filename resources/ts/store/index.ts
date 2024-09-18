import Vue from 'vue';
import Vuex from 'vuex';
// @ts-ignore
import {IQuestionState, Questions} from "./modules/Questions.ts";


Vue.use(Vuex);

export interface IState {
    questions: IQuestionState;
}

export interface IPayload {
    force?: boolean;
}

const store = new Vuex.Store<IState>({
    strict: true,
    modules: {
        questions: Questions,
    }
})

export default store;