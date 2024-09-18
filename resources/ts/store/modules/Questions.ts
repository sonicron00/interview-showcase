import { ActionContext } from "vuex";
import axios from 'axios';
import {IPayload, IState} from "../";
// @ts-ignore
import {IQuestionList, defaultQuestionList, IQuestion} from "../../models/QuestionList.ts";
// @ts-ignore
import {ICachedRequest, StoreRequestCache} from "../StoreRequestCache.ts";

type Context = ActionContext<IQuestionState, IState>;

export interface IQuestionState extends ICachedRequest {
    questions: IQuestionList;
}

const QuestionsModule = {
    namespaced: true,
    state: (): IQuestionState => ({
        questions: new defaultQuestionList(),
        ...StoreRequestCache.state(),
    }),
    getters: {
        getQuestions(state: IQuestionState): IQuestion[] {
            return state.questions.questions;
        },
        isLoading(state: IQuestionState): boolean {
            return !state.questions.isLoaded;
        }
    },
    mutations: {
        setQuestions(state: IQuestionState, questions: any) {
            state.questions.questions = questions.data;
        },
    },
    actions: {
        async loadQuestions(context: Context, payload?: IPayload) {
            if (!payload?.force && context.state.questions.isLoaded) {
                return new Promise((resolve, reject) => {
                    resolve(context.state.questions);
                });
            }
            return axios.get('/api/v1/questions').then((response) => {
                context.commit("setQuestions", response);
            });
        },
    },
};

export const Questions = StoreRequestCache.cacheRequests(QuestionsModule, [
    "loadQuestions"
])