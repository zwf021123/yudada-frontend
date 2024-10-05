// @ts-ignore
/* eslint-disable */
import request from '@/request';

/** addUserAnswer POST /aiaq/userAnswer/add */
export async function addUserAnswerUsingPost(
  body: API.UserAnswerAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong_>('/aiaq/userAnswer/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteUserAnswer GET /aiaq/userAnswer/delete/${param0} */
export async function deleteUserAnswerUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUserAnswerUsingGETParams,
  options?: { [key: string]: any },
) {
  const { userAnswerId: param0, ...queryParams } = params;
  return request<API.BaseResponseBoolean_>(`/aiaq/userAnswer/delete/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** listUserAnswer POST /aiaq/userAnswer/list */
export async function listUserAnswerUsingPost(
  body: API.UserAnswerQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageResultUserAnswerVO_>('/aiaq/userAnswer/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
