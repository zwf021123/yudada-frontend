declare namespace API {
  type AiGenerateQuestionRequest = {
    appId?: number;
    optionNumber?: number;
    questionNumber?: number;
  };

  type AppCreateRequest = {
    appDesc?: string;
    appIcon?: string;
    appName?: string;
    appType?: number;
    scoringStrategy?: number;
  };

  type AppDetailVO = {
    appIcon?: string;
    appName?: string;
    appType?: number;
    appTypeName?: string;
    createTime?: string;
    createUser?: string;
    id?: number;
    reviewMessage?: string;
    reviewStatus?: number;
    reviewStatusName?: string;
    reviewTime?: string;
    reviewer?: string;
    scoringStrategy?: number;
    scoringStrategyName?: string;
  };

  type AppQueryRequest = {
    appName?: string;
    appType?: number[];
    createBeginTime?: string;
    createEndTime?: string;
    createUser?: string;
    current?: number;
    pageSize?: number;
    reviewStatus?: number[];
    scoringStrategy?: number[];
    sortField?: string;
    sortOrder?: string;
  };

  type AppReviewRequest = {
    id?: number;
    reviewMessage?: string;
    reviewStatus?: number;
  };

  type AppUpdateRequest = {
    appDesc?: string;
    appIcon?: string;
    appName?: string;
    appType?: number;
    id?: number;
    scoringStrategy?: number;
  };

  type AppVO = {
    appDesc?: string;
    appName?: string;
    appType?: number;
    appTypeName?: string;
    createTime?: string;
    createUser?: string;
    id?: number;
    reviewStatus?: number;
    reviewStatusName?: string;
    scoringStrategy?: number;
    scoringStrategyName?: string;
  };

  type BaseResponseAppDetailVO_ = {
    code?: number;
    data?: AppDetailVO;
    message?: string;
  };

  type BaseResponseBoolean_ = {
    code?: number;
    data?: boolean;
    message?: string;
  };

  type BaseResponseListQuestionContent_ = {
    code?: number;
    data?: QuestionContent[];
    message?: string;
  };

  type BaseResponseLoginUserVO_ = {
    code?: number;
    data?: LoginUserVO;
    message?: string;
  };

  type BaseResponseLong_ = {
    code?: number;
    data?: number;
    message?: string;
  };

  type BaseResponsePageResultAppVO_ = {
    code?: number;
    data?: PageResultAppVO_;
    message?: string;
  };

  type BaseResponsePageResultScoringResultVO_ = {
    code?: number;
    data?: PageResultScoringResultVO_;
    message?: string;
  };

  type BaseResponsePageResultUserAnswerVO_ = {
    code?: number;
    data?: PageResultUserAnswerVO_;
    message?: string;
  };

  type BaseResponsePageUser_ = {
    code?: number;
    data?: PageUser_;
    message?: string;
  };

  type BaseResponsePageUserVO_ = {
    code?: number;
    data?: PageUserVO_;
    message?: string;
  };

  type BaseResponseQuestionVO_ = {
    code?: number;
    data?: QuestionVO;
    message?: string;
  };

  type BaseResponseScoringResultDetailVO_ = {
    code?: number;
    data?: ScoringResultDetailVO;
    message?: string;
  };

  type BaseResponseString_ = {
    code?: number;
    data?: string;
    message?: string;
  };

  type BaseResponseUser_ = {
    code?: number;
    data?: User;
    message?: string;
  };

  type BaseResponseUserVO_ = {
    code?: number;
    data?: UserVO;
    message?: string;
  };

  type deleteAppUsingGETParams = {
    /** appId */
    appId: number;
  };

  type deleteQuestionUsingGETParams = {
    /** questionId */
    questionId: number;
  };

  type DeleteRequest = {
    id?: number;
  };

  type deleteScoringResultUsingGETParams = {
    /** scoringResultId */
    scoringResultId: number;
  };

  type deleteUserAnswerUsingGETParams = {
    /** userAnswerId */
    userAnswerId: number;
  };

  type detailAppUsingGETParams = {
    /** appId */
    appId: number;
  };

  type detailQuestionUsingGETParams = {
    /** questionId */
    questionId: number;
  };

  type detailScoringResultUsingGETParams = {
    /** scoringResultId */
    scoringResultId: number;
  };

  type getUserByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getUserVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type LoginUserVO = {
    createTime?: string;
    id?: number;
    updateTime?: string;
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type Option = {
    key?: string;
    result?: string;
    score?: number;
    value?: string;
  };

  type OrderItem = {
    asc?: boolean;
    column?: string;
  };

  type PageResultAppVO_ = {
    records?: AppVO[];
    size?: number;
    total?: number;
  };

  type PageResultScoringResultVO_ = {
    records?: ScoringResultVO[];
    size?: number;
    total?: number;
  };

  type PageResultUserAnswerVO_ = {
    records?: UserAnswerVO[];
    size?: number;
    total?: number;
  };

  type PageUser_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: User[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUserVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: UserVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type QuestionAddRequest = {
    appId?: number;
    questionContents?: QuestionContent[];
  };

  type QuestionContent = {
    options?: Option[];
    title?: string;
  };

  type QuestionEditRequest = {
    id?: number;
    questionContents?: QuestionContent[];
  };

  type QuestionVO = {
    appId?: number;
    appName?: string;
    createTime?: string;
    id?: number;
    questionContent?: QuestionContent[];
    userId?: number;
    userName?: string;
  };

  type ScoringResultAddRequest = {
    appId?: number;
    resultDesc?: string;
    resultName?: string;
    resultProp?: string[];
    resultScoreRange?: number;
  };

  type ScoringResultDetailVO = {
    appId?: number;
    appName?: number;
    createTime?: string;
    id?: number;
    resultDesc?: string;
    resultName?: string;
    resultProp?: string[];
    resultPropStr?: string;
    resultScoreRange?: number;
    userId?: number;
    userName?: string;
  };

  type ScoringResultQueryRequest = {
    current?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
  };

  type ScoringResultUpdateRequest = {
    id?: number;
    resultDesc?: string;
    resultName?: string;
    resultProp?: string[];
    resultScoreRange?: number;
  };

  type ScoringResultVO = {
    appId?: number;
    appName?: number;
    createTime?: string;
    id?: number;
    resultDesc?: string;
    resultName?: string;
    resultProp?: string[];
    resultPropStr?: string;
    resultScoreRange?: number;
    userId?: number;
    userName?: string;
  };

  type uploadFileUsingPOSTParams = {
    biz?: string;
  };

  type User = {
    createTime?: string;
    id?: number;
    isDelete?: number;
    updateTime?: string;
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userPassword?: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserAddRequest = {
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userRole?: string;
  };

  type UserAnswerAddRequest = {
    appId?: number;
    choices?: string[];
    id?: number;
  };

  type UserAnswerQueryRequest = {
    current?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
  };

  type UserAnswerVO = true;

  type UserLoginRequest = {
    userAccount?: string;
    userPassword?: string;
  };

  type UserQueryRequest = {
    current?: number;
    id?: number;
    mpOpenId?: string;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    unionId?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserRegisterRequest = {
    checkPassword?: string;
    userAccount?: string;
    userPassword?: string;
  };

  type UserUpdateMyRequest = {
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
  };

  type UserUpdateRequest = {
    id?: number;
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserVO = {
    createTime?: string;
    id?: number;
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };
}
