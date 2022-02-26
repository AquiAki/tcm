const defaultDataset = {
  init: [
    { content: "経絡経穴概論", nextId: "acu_points" },
    { content: "東洋医学概論", nextId: "tcm" },
    { content: "はり理論及び東洋医学臨床論", nextId: "theory" },
    { content: "解剖学", nextId: "anatomy" },
  ],
  acu_points: [
    { content: "手の太陰肺経", nextId: "lung" },
    { content: "手の陽明大腸経", nextId: "large_intestine" },
    { content: "足の陽明胃経", nextId: "stomach" },
    { content: "足の太陰脾経", nextId: "spleen" },
  ],
  lung: [
    { content: "中府（ちゅうふ）", nextId: "list_chufu" },
    { content: "雲門（うんもん）", nextId: "list_unmon" },
    { content: "天府（てんぷ）", nextId: "tenpu" },
    { content: "俠白（きょうはく)", nextId: "kyohaku" },
    { content: "尺沢（しゃくたく）", nextId: "syakutaku" },
    { content: "孔最（こうさい）", nextId: "kousai" },
    { content: "列缺（れっけつ）", nextId: "rekketu" },
    { content: "経渠（けいきょ）", nextId: "keikyo" },
    { content: "太淵（たいえん)", nextId: "taien" },
    { content: "魚際（ぎょさい）", nextId: "gyosai" },
    { content: "少商（しょうしょう)", nextId: "syousyou" },
  ],
  list_chufu: [
    {
      image:
        "data:image/jpeg;base64,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",
      content: "中府（ちゅうふ）",
      place: "雲門穴の下1寸、華蓋穴の外方6寸",
      point: "肺経の募穴",
      muscle: "大胸筋、小胸筋",
      nerve: "運動神経 : 胸筋神経",
    },
  ],

  list_unmon: [
    {
      content: "雲門（うんもん）",
      place: "鎖骨下窩にあり、烏口突起の内縁、腋窩動脈拍動部",
      point: "",
      muscle: "三角筋と大胸筋の間",
      nerve: "胸筋神経、腋窩神経",
    },
  ],

  tcm: [
    { content: "東洋医学の特徴", nextId: "features" },
    { content: "生理と病理", nextId: "pathology" },
    { content: "東洋医学の思想", nextId: "ideology" },
    { content: "四診", nextId: "diagnose" },
  ],
  theory: [
    { content: "治療総論", nextId: "general_remarks" },
    { content: "治療各論", nextId: "details" },
    { content: "スポーツ医学における鍼灸療法", nextId: "sport" },
    { content: "老年医学における鍼灸療法", nextId: "old" },
  ],

  anatomy: [
    { content: "人体の構成", nextId: "human" },
    { content: "循環器系", nextId: "cardiovascular" },
    { content: "呼吸器系", nextId: "respiratory" },
    { content: "消化器系", nextId: "digestive" },
  ],
};


export default defaultDataset;