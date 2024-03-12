import { mainApiUrl } from "../commonComps/Constants";

export const getServices = async (token) => {
  let myHeaders = new Headers();
  myHeaders.append("Authorization", `${token}`);
  const data = await fetch(`${mainApiUrl}/getservices?format=table`, {
    method: "GET",
    headers: myHeaders,
  });
  const sData = await data.json();
  console.log(sData);
  return sData;
};

export const addService = async (serviceName, status) => {
  const apiUrl = mainApiUrl + "/addService";

  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let bodyData = {
    service_name: serviceName,
    isActive: status === "Active",
  };
  console.log(bodyData);

  const response = await fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify(bodyData),
    headers: myHeaders,
  });
  const data = await response.json();
  console.log(data);
  return data;
};

export const getApis = async (token) => {
  const apiUrl = mainApiUrl + "/getapis?format=table";

  let myHeaders = new Headers();
  myHeaders.append("Authorization", `${token}`);

  const response = await fetch(apiUrl, {
    method: "GET",
    headers: myHeaders,
  });
  return response.json();
};

export const addApis = async (apiDetails, callBack) => {
  const apiUrl = mainApiUrl + "/addapi";
  const {
    apiType,
    apiName,
    apiBalance,
    statusName,
    apiDomain,
    statusCheckUrl,
    balanceCheckUrl,
    billFetchUrl,
    successValue,
    failedValue,
    pendingValue,
    refidValue,
    operatorId,
    apiUsername,
    apiKey,
    lapuNo,
    remainBalance,
    remark,
    method,
    format,
  } = apiDetails;
  const {
    statusValue,
    successValue2,
    failedValue2,
    refidValue2,
    operatorId2,
    remark2,
    method2,
    status,
  } = callBack;

  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let body = JSON.stringify({
    type: apiType,
    name: apiName,
    username: apiUsername,
    password: "",
    key: apiKey,
    domain: apiDomain,
    balance: apiBalance,
    status_name: statusName,
    success_value: successValue,
    failed_value: failedValue,
    pending_value: pendingValue,
    refid_value: refidValue,
    remain_balance: remainBalance,
    method: method,
    format: format,
    isActive: true,
    remark: remark,
    callback: {
      status_value: statusValue,
      success_value: successValue2,
      failed_value: failedValue2,
      refid_value: refidValue2,
      operator_id: operatorId2,
      remark: remark2,
      method: method2,
      status: status,
    },
  });

  const response = await fetch(apiUrl, {
    method: "POST",
    body: body,
    headers: myHeaders,
  });
  return await response.json();
};

export const getProviders = async (token) => {
  const apiUrl = mainApiUrl + "/getproviders?format=table";

  let myHeaders = new Headers();
  myHeaders.append("Authorization", `${token}`);

  const response = await fetch(apiUrl, {
    method: "GET",
    headers: myHeaders,
  });
  return response.json();
};

export const addProvider = async (providerDetails) => {
  const apiUrl = mainApiUrl + "/addprovider";
  const { providerName, serviceName, api, backupApi, status, state, logo } =
    providerDetails;

  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let bodyData = {
    provider: providerName,
    service: serviceName,
    api: { name: api },
    backup_api: { name: backupApi },
    isActive: status,
  };

  const response = await fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify(bodyData),
    headers: myHeaders,
  });
  console.log(response);
  return await response.json();
};

export const addApiProviderCodes = async (apiProviderCode) => {
  const apiUrl = mainApiUrl + "/addApiProviderCodes";

  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const response = await fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify(apiProviderCode),
    headers: myHeaders,
  });
  console.log(response);
  return await response.json();
};

export const addApiCircleCodes = async (apiCircleCode) =>{
  const apiUrl = mainApiUrl + "/addApiCircleCodes";

  let myHeaders = new Headers ();
  myHeaders.append("Content-Type", "application/json");
  console.log(apiCircleCode)

  const response = await fetch(apiUrl,{
    method:"POST",
    body: JSON.stringify(apiCircleCode),
    headers: myHeaders,
  })
  console.log(response);
  return await response.json();
}