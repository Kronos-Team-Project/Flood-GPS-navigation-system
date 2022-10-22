var url = "https://apis.data.go.kr/B552895/LocalGovPriceInfoService/getSourcePriceResearchSearch?serviceKey=K5fygs3Ao38zhEsyxA2qi4TnFk1O6Q4Rpwok1XdloMNXSfLFOf1VNbuUV7zKFSIZZvgnFw8Iz2cCqzO0Eyvoyw%3D%3D&numOfRows=5000&pageNo=1&_returnType=json&examin_de=20221020";

fetch(url).then(res => res.json()).then(toJson => {
    price_info = toJson.list;
});

