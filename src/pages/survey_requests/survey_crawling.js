import getInstance from "./Request";
import { basePath } from "./Request";

// url 저장하기
export const saveUrl = async ({ link }) => {
    const linkRes =
        await getInstance().post(
            `/survey-requests/step1`,
            JSON.stringify({
                'googleFormLink': link}));
    console.log(linkRes);
    return linkRes.status;
};

// 설문 정보 저장하기 (크롤링 전)
export const saveInfoBefo = async ({ surveyName,googleFormLink,rewardPoints,deadline,account }) => {
    const saveInfoRes =
        await getInstance().post(
            `/survey`,
            JSON.stringify({
                'surveyName':surveyName,
                'googleFormLink': googleFormLink,
                'rewardPoints':rewardPoints,
                'deadline':deadline,
                'account':account
            }));
    console.log(saveInfoRes);
    return saveInfoRes.status;
};

// 설문 정보 저장하기 (크롤링 후)
export const saveInfo = async ({ surveyName,requesterOrganization,questionCount,restrictions }) => {
    const saveInfoRes =
        await getInstance().post(
            `/survey`,
            JSON.stringify({
                'surveyName':surveyName,
                'requesterOrganization':requesterOrganization,
                'questionCount':questionCount, // 질문 개수 세서 자동으로 넣을 수 있도록
                'restrictions':restrictions,
            }));
    console.log(saveInfoRes);
    return saveInfoRes.status;
};

// 전체 질문 저장하기
export const saveAllQuestions = async ({ surveyName,googleFormLink,requesterOrganization,questionCount,restrictions,questions }) => {
    const linkRes =
        await getInstance().post(
            `/survey`,
            JSON.stringify({
                'googleFormLink': link}));
    console.log(linkRes);
    return linkRes.status;
};

// 질문 저장하기
export const saveQuestion = async ({ content,type}) => {
    const linkRes =
        await getInstance().post(
            `/survey`,
            JSON.stringify({
                'googleFormLink': link}));
    console.log(linkRes);
    return linkRes.status;
};

// choice 저장하기
export const saveChoice = async ({content}) => {
    const linkRes =
        await getInstance().post(
            `/survey`,
            JSON.stringify({
                'googleFormLink': link}));
    console.log(linkRes);
    return linkRes.status;
};