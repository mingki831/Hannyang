import axios from "axios";
import getInstance from "./Request";
import { basePath } from "./Request";

// TOKEN_TYPE, ACCESS_TOKEN은 로그인 이후 값이 할당되어 사용
// 회원가입 단계에서는 필요 없음
// const TOKEN_TYPE = localStorage.getItem("tokenType");
// let ACCESS_TOKEN = localStorage.getItem("accessToken");

//'Authorization': `${TOKEN_TYPE} ${ACCESS_TOKEN}`,
// 보통 'Authorization': 'Bearer {token}'의 형태

axios.defaults.withCredentials = true;

/**  로그인  */
export const login = async ({ email, password }) => {
    const loginRes =
        await getInstance().post(
            `/api/${basePath}/auth/login`,
            JSON.stringify({
                'email': email,
                'password': password}));
    console.log(loginRes);
    return loginRes.status;
};

/**  회원가입  */
export const signUp = async ({ role, email, password, nickname }) => {
    const SignUpRes =
        await getInstance().post(
            `/api/${basePath}/auth/signup`,
            JSON.stringify({
                'role': role,
                'email': email,
                'password': password,
                'nickname': nickname }));
    return SignUpRes.status;                
};

/** 이메일 중복확인 API */
export const emailDouble = async (email) => {
    const emailDbRes =
        await getInstance().get(
            `/api/${basePath}/member/email/${email}`);
    return emailDbRes.data;
}

/** 닉네임 중복확인 API */
export const nickDouble = async (nick) => {
    const nickDbRes =
        await getInstance().get(
            `/api/v1/member/nickname/${nick}`);
    return nickDbRes.data;
}

/**  토큰 재발급  */
const statusError = {
    status: false,
    headers: {
        error: {
            code: 'NO_CONNECTION',
            message: '네트워크 연결이 원활하지 않습니다.'
        }
    }
}

const TIME_OUT = 300 * 1000;

const timeoutPromise = () => {
    return new Promise((_, reject) =>
        setTimeout(() => reject(new Error('timeout')), TIME_OUT));
};

const getPromise = async (requestPromise) => {
    return await Promise.race([requestPromise(), timeoutPromise()]);
};

export const refreshToken = async () => {
    const refreshPromise = () => {
        return getInstance().post(`/api/${basePath}/auth/refresh`);
    }

    const data = await getPromise(refreshPromise).catch(() => {
        return statusError;
    })

    if (parseInt(Number(data.status) / 100) === 2) {
        const status = data.data.success;
        const code = data.status;
        const text = status
            ? JSON.stringify(data.headers)
            : JSON.stringify(data.data.error);
        const headers = text.length ? JSON.parse(text) : '';
        const userInfo = data.data.data;

        return {
            status, code, headers, userInfo
        };
    } else {
        return statusError;
    }
};

/**  로그아웃  */

