// @ts-ignore
/* eslint-disable */
import request from '@/request';

/** addScoringResult POST /aiaq/scoringResult/add */
export async function addScoringResultUsingPost(
  body: API.ScoringResultAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong_>('/aiaq/scoringResult/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteScoringResult GET /aiaq/scoringResult/delete/${param0} */
export async function deleteScoringResultUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteScoringResultUsingGETParams,
  options?: { [key: string]: any },
) {
  const { scoringResultId: param0, ...queryParams } = params;
  return request<API.BaseResponseBoolean_>(`/aiaq/scoringResult/delete/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** detailScoringResult GET /aiaq/scoringResult/detail/${param0} */
export async function detailScoringResultUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.detailScoringResultUsingGETParams,
  options?: { [key: string]: any },
) {
  const { scoringResultId: param0, ...queryParams } = params;
  return request<API.BaseResponseScoringResultDetailVO_>(`/aiaq/scoringResult/detail/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** listScoringResult POST /aiaq/scoringResult/list/page */
export async function listScoringResultUsingPost(
  body: API.ScoringResultQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageResultScoringResultVO_>('/aiaq/scoringResult/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateScoringResult POST /aiaq/scoringResult/update */
export async function updateScoringResultUsingPost(
  body: API.ScoringResultUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/aiaq/scoringResult/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
