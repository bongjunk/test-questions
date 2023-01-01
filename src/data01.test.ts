import { formatInTimeZone } from "date-fns-tz";

const dataDump = {
  부과내역: [
    {
      전자납부번호: "1135024022000766863",
      부과대상:
        "101하2715 /위반장소:서울특별시 노원구 동일로 1449 노원구청고가주변 /위반일시:2022.12.07 08:44",
      위반항목: "",
      부과연월일: "20221212",
      납기일: "20230116",
      상세내역: [
        {
          과목: "[구특별]주정차위반과태료",
          부과금액: "32000",
          가산금액: "0",
          납부금액: "32000",
        },
        {
          과목: "합계",
          부과금액: "",
          가산금액: "",
          납부금액: "32000",
        },
      ],
    },
    {
      전자납부번호: "4111022261016607293",
      부과대상: "101하2711",
      위반항목: "위반장소:영통구 망포동 484-1 /위반일시:20221122 1414",
      부과연월일: "20221211",
      납기일: "20230131",
      상세내역: [
        {
          과목: "주정차위반과태료",
          부과금액: "32000",
          가산금액: "0",
          납부금액: "32000",
        },
        {
          과목: "합계",
          부과금액: "",
          가산금액: "",
          납부금액: "32000",
        },
      ],
    },
    {
      전자납부번호: "1168024022103358585",
      부과대상:
        "101호2728 /위반장소:학동로6길 48 주변 /위반일시:2022.11.30 14:42",
      위반항목: "",
      부과연월일: "20221208",
      납기일: "20230113",
      상세내역: [
        {
          과목: "[구특별]주정차위반과태료",
          부과금액: "96000",
          가산금액: "0",
          납부금액: "96000",
        },
        {
          과목: "합계",
          부과금액: "",
          가산금액: "",
          납부금액: "96000",
        },
      ],
    },
    {
      전자납부번호: "1154522022711827375",
      부과대상: "70하1126",
      위반항목: "",
      부과연월일: "20221026",
      납기일: "20230102",
      상세내역: [
        {
          과목: "[구일반]자동차관리법(검사미필)위반과태료",
          부과금액: "144200",
          가산금액: "0",
          납부금액: "144200",
        },
        {
          과목: "합계",
          부과금액: "",
          가산금액: "",
          납부금액: "144200",
        },
      ],
    },
    {
      전자납부번호: "2811022271500701401",
      부과대상:
        "101하8451 /위반장소:인천공항 2터미널 1층 진출부 승용라인 /위반일시:2022.11.10 09:04",
      위반항목: "",
      부과연월일: "20221207",
      납기일: "20230109",
      상세내역: [
        {
          과목: "주정차위반과태료",
          부과금액: "32000",
          가산금액: "0",
          납부금액: "32000",
        },
        {
          과목: "합계",
          부과금액: "",
          가산금액: "",
          납부금액: "32000",
        },
      ],
    },
    {
      전자납부번호: "4136022261501827606",
      부과대상: "101하2710 /위반장소:백병원옆 /위반일시:2022.11.01 14:59",
      위반항목:
        "단속차량: 101하2710 /위반장소:진접읍 백병원옆 /위반일시:2022.11.01 14:59",
      부과연월일: "20221207",
      납기일: "20221222",
      상세내역: [
        {
          과목: "주정차위반과태료",
          부과금액: "8000",
          가산금액: "0",
          납부금액: "8000",
        },
        {
          과목: "합계",
          부과금액: "",
          가산금액: "",
          납부금액: "8000",
        },
      ],
    },
    {
      전자납부번호: "4139022261500561573",
      위반항목: "",
      부과연월일: "20220504",
      납기일: "20230102",
      상세내역: [
        {
          과목: "주정차위반과태료",
          부과금액: "40000",
          가산금액: "4080",
          납부금액: "44080",
        },
        {
          과목: "합계",
          부과금액: "",
          가산금액: "",
          납부금액: "44080",
        },
      ],
    },
    {
      전자납부번호: "4113322261500770415",
      부과대상: "101하6211 /위반장소:광명로 성남동 /위반일시:2022.11.24 18:05",
      위반항목:
        "단속차량: 101하6211 /위반장소:광명로 성남동 /위반일시:2022.11.24 18:05",
      부과연월일: "20221130",
      납기일: "20221229",
      상세내역: [
        {
          과목: "주정차위반과태료",
          부과금액: "32000",
          가산금액: "0",
          납부금액: "32000",
        },
        {
          과목: "합계",
          부과금액: "",
          가산금액: "",
          납부금액: "32000",
        },
      ],
    },
    {
      전자납부번호: "1144024022101066788",
      부과대상:
        "101하2720 /위반장소:서울 마포구 성산동 275-3 /위반일시:2022.08.07 15:51",
      위반항목: "",
      부과연월일: "20221109",
      납기일: "20230102",
      상세내역: [
        {
          과목: "[구특별]주정차위반과태료",
          부과금액: "40000",
          가산금액: "0",
          납부금액: "40000",
        },
        {
          과목: "합계",
          부과금액: "",
          가산금액: "",
          납부금액: "40000",
        },
      ],
    },
    {
      전자납부번호: "1144024022101066617",
      부과대상:
        "101하2720 /위반장소:서울 마포구 성산동 81-108 /위반일시:2022.08.05 15:54",
      위반항목: "",
      부과연월일: "20221109",
      납기일: "20230102",
      상세내역: [
        {
          과목: "[구특별]주정차위반과태료",
          부과금액: "40000",
          가산금액: "0",
          납부금액: "40000",
        },
        {
          과목: "합계",
          부과금액: "",
          가산금액: "",
          납부금액: "40000",
        },
      ],
    },
    {
      전자납부번호: "4128522261500850840",
      부과대상:
        "101하2720 /위반장소:장항동 장백로(고양지원)주변 /위반일시:2022.08.16 10:45",
      위반항목:
        "단속차량: 101하2720 /위반장소:장항동 장백로(고양지원)주변 /위반일시:2022.08.16 10:45",
      부과연월일: "20221102",
      납기일: "20230102",
      상세내역: [
        {
          과목: "주정차위반과태료",
          부과금액: "40000",
          가산금액: "0",
          납부금액: "40000",
        },
        {
          과목: "합계",
          부과금액: "",
          가산금액: "",
          납부금액: "40000",
        },
      ],
    },
  ],
};

const expectData = [
  {
    전자납부번호: "1135024022000766863",
    부과연월일: "2022-12-12 00:00:00+09:00",
    납기일: "2023-01-16 00:00:00+09:00",
    단속차량: "101하2715",
    위반장소: "서울특별시 노원구 동일로 1449 노원구청고가주변",
    위반일시: "2022-12-07 08:44:00+09:00",
    총납부금액: 32000,
  },
  {
    전자납부번호: "4111022261016607293",
    부과연월일: "2022-12-11 00:00:00+09:00",
    납기일: "2023-01-31 00:00:00+09:00",
    단속차량: "101하2711",
    위반장소: "영통구 망포동 484-1",
    위반일시: "2022-11-22 14:14:00+09:00",
    총납부금액: 32000,
  },
  {
    전자납부번호: "1168024022103358585",
    부과연월일: "2022-12-08 00:00:00+09:00",
    납기일: "2023-01-13 00:00:00+09:00",
    단속차량: "101호2728",
    위반장소: "학동로6길 48 주변",
    위반일시: "2022-11-30 14:42:00+09:00",
    총납부금액: 96000,
  },
  {
    전자납부번호: "1154522022711827375",
    부과연월일: "2022-10-26 00:00:00+09:00",
    납기일: "2023-01-02 00:00:00+09:00",
    단속차량: "70하1126",
    총납부금액: 144200,
  },
  {
    전자납부번호: "2811022271500701401",
    부과연월일: "2022-12-07 00:00:00+09:00",
    납기일: "2023-01-09 00:00:00+09:00",
    단속차량: "101하8451",
    위반장소: "인천공항 2터미널 1층 진출부 승용라인",
    위반일시: "2022-11-10 09:04:00+09:00",
    총납부금액: 32000,
  },
  {
    전자납부번호: "4136022261501827606",
    부과연월일: "2022-12-07 00:00:00+09:00",
    납기일: "2022-12-22 00:00:00+09:00",
    단속차량: "101하2710",
    위반장소: "진접읍 백병원옆",
    위반일시: "2022-11-01 14:59:00+09:00",
    총납부금액: 8000,
  },
  {
    전자납부번호: "4139022261500561573",
    부과연월일: "2022-05-04 00:00:00+09:00",
    납기일: "2023-01-02 00:00:00+09:00",
    총납부금액: 44080,
  },
  {
    전자납부번호: "4113322261500770415",
    부과연월일: "2022-11-30 00:00:00+09:00",
    납기일: "2022-12-29 00:00:00+09:00",
    단속차량: "101하6211",
    위반장소: "광명로 성남동",
    위반일시: "2022-11-24 18:05:00+09:00",
    총납부금액: 32000,
  },
  {
    전자납부번호: "1144024022101066788",
    부과연월일: "2022-11-09 00:00:00+09:00",
    납기일: "2023-01-02 00:00:00+09:00",
    단속차량: "101하2720",
    위반장소: "서울 마포구 성산동 275-3",
    위반일시: "2022-08-07 15:51:00+09:00",
    총납부금액: 40000,
  },
  {
    전자납부번호: "1144024022101066617",
    부과연월일: "2022-11-09 00:00:00+09:00",
    납기일: "2023-01-02 00:00:00+09:00",
    단속차량: "101하2720",
    위반장소: "서울 마포구 성산동 81-108",
    위반일시: "2022-08-05 15:54:00+09:00",
    총납부금액: 40000,
  },
  {
    전자납부번호: "4128522261500850840",
    부과연월일: "2022-11-02 00:00:00+09:00",
    납기일: "2023-01-02 00:00:00+09:00",
    단속차량: "101하2720",
    위반장소: "장항동 장백로(고양지원)주변",
    위반일시: "2022-08-16 10:45:00+09:00",
    총납부금액: 40000,
  },
];

// 테스트가 통과되도록 transformData를 구현하세요.
// 라이브러리는 자유롭게 설치 및 사용 가능
// 가산점: 처리속도, 코드 가독성
test("데이터 변환", () => {
  console.log("start");

  const dateFormat = (date: Date | any) => {
    return formatInTimeZone(
      date.replace(/\./g, "-"),
      "Asia/Seoul",
      "yyyy-MM-dd HH:mm:ssXXX"
    );
  };

  const transformData = (data: any) => {
    console.log("data", data);
    const dataObj = [];
    const charge = data?.부과내역;
    const chargeMap = charge.map((dp: any, idx: any) => {
      const 전자납부번호 = dp?.전자납부번호;
      const 부과연월일 = dp?.부과연월일;
      const 납기일 = dp?.납기일;
      const 단속차량 = dp?.부과대상 ? dp?.부과대상?.slice(0, 9) : "";
      const 위반항목 = dp?.위반항목;
      const 부과대상 = dp?.부과대상;
      const 위반장소 =
        위반항목?.search("위반장소:") > -1
          ? 위반항목?.slice(
              위반항목?.indexOf("/위반장소:") + 6,
              위반항목?.lastIndexOf(" /위반일시")
            )
          : 부과대상?.search("위반장소:") > -1
          ? 부과대상?.slice(
              부과대상?.indexOf("/위반장소:") + 6,
              부과대상?.lastIndexOf(" /위반일시")
            )
          : "";
      const 위반일시 =
        위반항목?.search("위반일시:") > 1
          ? 위반항목?.substr(위반항목?.lastIndexOf("/위반일시:") + 6)
          : 부과대상?.search("위반일시:") > 1
          ? 부과대상?.substr(부과대상?.lastIndexOf("/위반일시:") + 6)
          : "";
      const 상세내역 = dp?.상세내역;
      const 납부금액 = 상세내역?.find((data: any, idx: any) => {
        if (data?.과목 === "합계") {
          return data;
        }
      });
      const 총남부금액 = Number(납부금액?.납부금액);

      dataObj.push({
        전자납부번호: 전자납부번호,
        부과연월일: 부과연월일 && dateFormat(부과연월일),
        납기일: 납기일 && dateFormat(납기일),
        단속차량: 단속차량 && 단속차량.trim(),
        위반장소: 위반장소,
        위반일시: 위반일시 && dateFormat(위반일시),
        총납부금액: 총남부금액,
      });
    });

    dataObj.filter((obj: any, idx: any) => {
      Object.keys(obj).forEach((key) => obj[key] == "" && delete obj[key]);
    });

    return dataObj;
  };

  transformData(dataDump);

  expect(transformData(dataDump)).toEqual(expectData);

  console.log("end");
});
