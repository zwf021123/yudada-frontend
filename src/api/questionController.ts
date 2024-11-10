// @ts-ignore
/* eslint-disable */
import request from "@/request";

/** addQuestion POST /aiaq/question/add */
export async function addQuestionUsingPost(
  body: API.QuestionAddRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseLong_>("/aiaq/question/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** aiGenerateQuestion POST /aiaq/question/ai_generate */
export async function aiGenerateQuestionUsingPost(
  body: API.AiGenerateQuestionRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseListQuestionContent_>(
    "/aiaq/question/ai_generate",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: body,
      ...(options || {}),
    }
  );
}

/** aiGenerateQuestion POST /aiaq/question/ai_generate/sse */
export async function aiGenerateQuestionUsingBySSEPost(
  params: API.AiGenerateQuestionRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseListQuestionContent_>(
    "/aiaq/question/ai_generate/sse",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      params,
      ...(options || {}),
    }
  );
}

/** deleteQuestion GET /aiaq/question/delete/${param0} */
export async function deleteQuestionUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteQuestionUsingGETParams,
  options?: { [key: string]: any }
) {
  const { questionId: param0, ...queryParams } = params;
  return request<API.BaseResponseBoolean_>(`/aiaq/question/delete/${param0}`, {
    method: "GET",
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** listQuestion GET /question/detail/{appId} */
export async function listQuestionUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listQuestionUsingGetParams,
  options?: { [key: string]: any }
) {
  const { appId: param0, ...queryParams } = params;
  return request(`/aiaq/question/detail/${param0}`, {
    method: "GET",
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** detailQuestion GET /aiaq/question/detail/${param0} */
export async function detailQuestionUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.detailQuestionUsingGETParams,
  options?: { [key: string]: any }
) {
  const { questionId: param0, ...queryParams } = params;
  return request<API.BaseResponseQuestionVO_>(
    `/aiaq/question/detail/${param0}`,
    {
      method: "GET",
      params: { ...queryParams },
      ...(options || {}),
    }
  );
}

/** editQuestion POST /aiaq/question/edit */
export async function editQuestionUsingPost(
  body: API.QuestionEditRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/aiaq/question/edit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}
