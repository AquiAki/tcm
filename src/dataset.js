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
    { content: "中府（ちゅうふ）", nextId: "chufu" },
    { content: "雲門（うんもん）", nextId: "unmon" },
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