export interface IQuestionList {
    questions: IQuestion[];
    isLoaded: boolean;
}

export interface IQuestion {
    question: string,
    answer: string
}

export class defaultQuestionList implements IQuestionList {
    questions: IQuestion[];
    isLoaded: boolean;

    constructor() {
        this.questions = [{
            question: '',
            answer: ''
        }];
        this.isLoaded = false;
    }
}

