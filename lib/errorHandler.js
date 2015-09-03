'use strict';

var responseErrorsCodeMessage = {

  '501': 'niepoporawna metoda żądania, dopuszczalne: POST lub GET',
  '502': 'niepoporawna wartość api_key lub api_secret',
  '503': 'niepoprawny numer telefonu w parametrze to',
  '504': 'pusta wiadomość w parametrze message',
  '505': 'nieważny abonament',
  '506': 'przekroczono limit wiadomości na kluczu przekazanym w parametrze api_key',
  '507': 'za długa wiadomość w parametrze message - maksymalnie 918 (lub 402) znaków',
  '508': 'przekroczono dzienny limit wiadomości - 2.500 SMS - na kluczu przekazanym w parametrze api_key',
  '509': 'błąd serwera SMS - spróbuj ponownie później',
};

module.exports = function (httpRequestError, httpResponseBody) {
  httpResponseBody = JSON.parse(httpResponseBody);
  return httpRequestError ? httpRequestError : httpResponseBody.code !== 100 ?
    responseErrorsCodeMessage[httpResponseBody.code] : null;
};