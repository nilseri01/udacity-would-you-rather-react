export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const SAVE_QUESTION = 'SAVE_QUESTION';
export const SAVE_QUESTION_ANSWER_TO_QUESTION =
  'SAVE_QUESTION_ANSWER_TO_QUESTION';

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
}

export function addQuestion(question) {
  return {
    type: SAVE_QUESTION,
    question
  };
}

export function addQuestionAnswerToQuestion(info) {
  const { authedUser, qid, answer } = info;
  return {
    type: SAVE_QUESTION_ANSWER_TO_QUESTION,
    qid,
    authedUser,
    answer
  };
}
