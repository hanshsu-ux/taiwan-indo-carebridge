// 台印照護好幫手｜常用句（分類）
// 由 index.html 載入：併入 careData.dialogueSentences，並在「發音板」頁加上分類常用句區塊。
// 新增句子：在 extraSentences 尾端追加，id 接續 s_N，category 用「NN 分類名」，speaker 為「家人→看護」或「看護→媽媽」。
(function () {
  const extraSentences = [
    {"id": "s_33", "category": "01 日常照護", "speaker": "家人→看護", "id_text": "Tolong mandikan Nenek.", "id_zh_approx": "多龍・曼地干・內內", "zh": "請幫媽媽洗澡。", "zh_pinyin": "qǐng bāng mā ma xǐ zǎo", "zh_indo_spell": "cing bang ma ma syi tsau"},
    {"id": "s_34", "category": "01 日常照護", "speaker": "家人→看護", "id_text": "Tolong pindahkan Nenek ke tempat tidur.", "id_zh_approx": "多龍・賓達干・內內・克・談巴地都爾", "zh": "幫媽媽放到床上。", "zh_pinyin": "bāng mā ma fàng dào chuáng shàng", "zh_indo_spell": "bang ma ma fang dau cuang syang"},
    {"id": "s_35", "category": "01 日常照護", "speaker": "家人→看護", "id_text": "Tolong ganti popok Nenek.", "id_zh_approx": "多龍・干地・波波・內內", "zh": "請幫媽媽換尿布。", "zh_pinyin": "qǐng bāng mā ma huàn niào bù", "zh_indo_spell": "cing bang ma ma huan niau bu"},
    {"id": "s_36", "category": "01 日常照護", "speaker": "家人→看護", "id_text": "Tolong balikkan badan Nenek.", "id_zh_approx": "多龍・巴利干・巴丹・內內", "zh": "請幫媽媽翻身。", "zh_pinyin": "qǐng bāng mā ma fān shēn", "zh_indo_spell": "cing bang ma ma fan syen"},
    {"id": "s_37", "category": "01 日常照護", "speaker": "家人→看護", "id_text": "Tolong sikat gigi dan cuci muka Nenek.", "id_zh_approx": "多龍・西卡基基・丹・朱基母卡・內內", "zh": "請幫媽媽刷牙洗臉。", "zh_pinyin": "qǐng bāng mā ma shuā yá xǐ liǎn", "zh_indo_spell": "cing bang ma ma syua ya syi lien"},
    {"id": "s_38", "category": "01 日常照護", "speaker": "家人→看護", "id_text": "Tolong ganti baju Nenek.", "id_zh_approx": "多龍・干地・巴朱・內內", "zh": "請幫媽媽換衣服。", "zh_pinyin": "qǐng bāng mā ma huàn yī fu", "zh_indo_spell": "cing bang ma ma huan i fu"},
    {"id": "s_39", "category": "01 日常照護", "speaker": "家人→看護", "id_text": "Bantu Nenek duduk di kursi roda.", "id_zh_approx": "班度・內內・都督・地・庫爾西羅達", "zh": "扶媽媽坐到輪椅上。", "zh_pinyin": "fú mā ma zuò dào lún yǐ shàng", "zh_indo_spell": "fu ma ma tsuo dau lun i syang"},
    {"id": "s_40", "category": "01 日常照護", "speaker": "家人→看護", "id_text": "Biarkan Nenek tidur siang.", "id_zh_approx": "比阿爾干・內內・地都爾・西昂", "zh": "讓媽媽睡個午覺。", "zh_pinyin": "ràng mā ma shuì ge wǔ jiào", "zh_indo_spell": "rang ma ma syuei ge u ciau"},
    {"id": "s_41", "category": "02 飲食餵食", "speaker": "家人→看護", "id_text": "Beri Nenek minum air.", "id_zh_approx": "貝利・內內・米農・愛爾", "zh": "給媽媽喝水。", "zh_pinyin": "gěi mā ma hē shuǐ", "zh_indo_spell": "gei ma ma he syuei"},
    {"id": "s_42", "category": "02 飲食餵食", "speaker": "家人→看護", "id_text": "Beri Nenek makan bubur.", "id_zh_approx": "貝利・內內・馬乾・布布爾", "zh": "給媽媽吃粥。", "zh_pinyin": "gěi mā ma chī zhōu", "zh_indo_spell": "gei ma ma ce jou"},
    {"id": "s_43", "category": "02 飲食餵食", "speaker": "家人→看護", "id_text": "Makanannya dipotong kecil-kecil.", "id_zh_approx": "馬卡南釀・地波東・克基爾克基爾", "zh": "食物要切碎一點。", "zh_pinyin": "shí wù yào qiē suì yì diǎn", "zh_indo_spell": "sye u yau cie suei i dien"},
    {"id": "s_44", "category": "02 飲食餵食", "speaker": "家人→看護", "id_text": "Suapi pelan-pelan, sedikit-sedikit.", "id_zh_approx": "蘇阿比・波藍波藍，斯迪基斯迪基", "zh": "慢慢餵，一小口一小口。", "zh_pinyin": "màn màn wèi yì xiǎo kǒu yì xiǎo kǒu", "zh_indo_spell": "man man uei i syiau kou i syiau kou"},
    {"id": "s_45", "category": "02 飲食餵食", "speaker": "家人→看護", "id_text": "Airnya hangat, jangan dingin.", "id_zh_approx": "愛爾釀・杭阿，講安・丁銀", "zh": "水要溫的，不要冰的。", "zh_pinyin": "shuǐ yào wēn de bú yào bīng de", "zh_indo_spell": "syuei yau uen de bu yau bing de"},
    {"id": "s_46", "category": "02 飲食餵食", "speaker": "家人→看護", "id_text": "Setelah makan, tolong catat berapa banyak.", "id_zh_approx": "斯特拉・馬乾，多龍・查達・貝拉巴・巴釀", "zh": "吃完請記錄吃了多少。", "zh_pinyin": "chī wán qǐng jì lù chī le duō shǎo", "zh_indo_spell": "ce uan cing ci lu ce le duo syau"},
    {"id": "s_47", "category": "02 飲食餵食", "speaker": "家人→看護", "id_text": "Nenek tersedak, berhenti dulu.", "id_zh_approx": "內內・特爾斯達，貝爾亨地・都魯", "zh": "媽媽嗆到了，先停下來。", "zh_pinyin": "mā ma qiàng dào le xiān tíng xià lái", "zh_indo_spell": "ma ma ciang dau le syien ting syia lai"},
    {"id": "s_48", "category": "02 飲食餵食", "speaker": "家人→看護", "id_text": "Setelah makan, Nenek duduk istirahat setengah jam.", "id_zh_approx": "斯特拉・馬乾，內內・都督・伊斯地拉哈・斯登阿・醬", "zh": "飯後讓媽媽坐著休息半小時。", "zh_pinyin": "fàn hòu ràng mā ma zuò zhe xiū xí bàn xiǎo shí", "zh_indo_spell": "fan hou rang ma ma tsuo je syiou syi ban syiau sye"},
    {"id": "s_49", "category": "03 外出活動", "speaker": "家人→看護", "id_text": "Ajak Nenek jalan-jalan ke luar.", "id_zh_approx": "阿架・內內・架藍架藍・克・魯阿爾", "zh": "帶媽媽到外面散步。", "zh_pinyin": "dài mā ma dào wài miàn sàn bù", "zh_indo_spell": "dai ma ma dau uai mien san bu"},
    {"id": "s_50", "category": "03 外出活動", "speaker": "家人→看護", "id_text": "Ajak Nenek berjemur.", "id_zh_approx": "阿架・內內・貝爾者母爾", "zh": "帶媽媽去曬太陽。", "zh_pinyin": "dài mā ma qù shài tài yáng", "zh_indo_spell": "dai ma ma cyu syai tai yang"},
    {"id": "s_51", "category": "03 外出活動", "speaker": "家人→看護", "id_text": "Kalau keluar, bawa air dan jaket.", "id_zh_approx": "卡勞・克魯阿爾，巴瓦・愛爾・丹・加克", "zh": "出門記得帶水和外套。", "zh_pinyin": "chū mén jì de dài shuǐ hé wài tào", "zh_indo_spell": "cu men ci de dai syuei he uai tau"},
    {"id": "s_52", "category": "03 外出活動", "speaker": "家人→看護", "id_text": "Cuaca terlalu panas, hari ini jangan keluar.", "id_zh_approx": "朱阿查・特爾拉魯・巴納斯，哈利衣尼・講安・克魯阿爾", "zh": "天氣太熱，今天不要出門。", "zh_pinyin": "tiān qì tài rè jīn tiān bú yào chū mén", "zh_indo_spell": "tien ci tai re cin tien bu yau cu men"},
    {"id": "s_53", "category": "03 外出活動", "speaker": "家人→看護", "id_text": "Dorong kursi roda pelan-pelan, hati-hati jalannya.", "id_zh_approx": "多隆・庫爾西羅達・波藍波藍，哈地哈地・架藍釀", "zh": "推輪椅要慢，注意路面。", "zh_pinyin": "tuī lún yǐ yào màn zhù yì lù miàn", "zh_indo_spell": "tuei lun i yau man ju i lu mien"},
    {"id": "s_54", "category": "03 外出活動", "speaker": "家人→看護", "id_text": "Jalan-jalan setengah jam, lalu pulang.", "id_zh_approx": "架藍架藍・斯登阿・醬，拉魯・布朗", "zh": "散步半小時就回來。", "zh_pinyin": "sàn bù bàn xiǎo shí jiù huí lái", "zh_indo_spell": "san bu ban syiau sye ciou huei lai"},
    {"id": "s_55", "category": "03 外出活動", "speaker": "家人→看護", "id_text": "Jangan biarkan Nenek keluar sendirian.", "id_zh_approx": "講安・比阿爾干・內內・克魯阿爾・森迪利安", "zh": "不要讓媽媽一個人出門。", "zh_pinyin": "bú yào ràng mā ma yí ge rén chū mén", "zh_indo_spell": "bu yau rang ma ma i ge ren cu men"},
    {"id": "s_56", "category": "04 家事交辦", "speaker": "家人→看護", "id_text": "Nanti tolong buang sampah.", "id_zh_approx": "南地・多龍・布昂・山巴", "zh": "待會請幫忙倒垃圾。", "zh_pinyin": "dāi huì qǐng bāng máng dào lā jī", "zh_indo_spell": "dai huei cing bang mang dau la ci"},
    {"id": "s_57", "category": "04 家事交辦", "speaker": "家人→看護", "id_text": "Tolong cuci baju Nenek.", "id_zh_approx": "多龍・朱基・巴朱・內內", "zh": "請把媽媽的衣服洗一洗。", "zh_pinyin": "qǐng bǎ mā ma de yī fu xǐ yì xǐ", "zh_indo_spell": "cing ba ma ma de i fu syi i syi"},
    {"id": "s_58", "category": "04 家事交辦", "speaker": "家人→看護", "id_text": "Setelah dicuci, bajunya dijemur.", "id_zh_approx": "斯特拉・地朱基，巴朱釀・地者母爾", "zh": "衣服洗好要曬乾。", "zh_pinyin": "yī fu xǐ hǎo yào shài gān", "zh_indo_spell": "i fu syi hau yau syai gan"},
    {"id": "s_59", "category": "04 家事交辦", "speaker": "家人→看護", "id_text": "Tolong bersihkan kamar Nenek.", "id_zh_approx": "多龍・貝爾西幹・卡馬爾・內內", "zh": "請把媽媽房間打掃乾淨。", "zh_pinyin": "qǐng bǎ mā ma fáng jiān dǎ sǎo gān jìng", "zh_indo_spell": "cing ba ma ma fang cien da sau gan cing"},
    {"id": "s_60", "category": "04 家事交辦", "speaker": "家人→看護", "id_text": "Tolong pel lantai.", "id_zh_approx": "多龍・貝爾・蘭泰", "zh": "請拖地。", "zh_pinyin": "qǐng tuō dì", "zh_indo_spell": "cing tuo di"},
    {"id": "s_61", "category": "04 家事交辦", "speaker": "家人→看護", "id_text": "Sampah dipisah, daur ulang taruh di sini.", "id_zh_approx": "山巴・地比沙，道爾烏朗・達魯・地西尼", "zh": "垃圾要分類，回收放這裡。", "zh_pinyin": "lā jī yào fēn lèi huí shōu fàng zhè lǐ", "zh_indo_spell": "la ci yau fen lei huei syou fang je li"},
    {"id": "s_62", "category": "04 家事交辦", "speaker": "家人→看護", "id_text": "Truk sampah datang jam delapan malam.", "id_zh_approx": "德魯・山巴・達當・醬・德拉潘・馬藍", "zh": "垃圾車晚上八點來。", "zh_pinyin": "lā jī chē wǎn shàng bā diǎn lái", "zh_indo_spell": "la ci ce uan syang ba dien lai"},
    {"id": "s_63", "category": "05 關心看護", "speaker": "家人→看護", "id_text": "Tina, kamu perlu beli apa? Mau saya antar belanja?", "id_zh_approx": "地娜，卡木・波爾魯・貝利・阿巴？茂・沙呀・安達爾・貝蘭加？", "zh": "Tina，你需要買什麼東西？要帶你去買嗎？", "zh_pinyin": "Tina nǐ xū yào mǎi shén me dōng xi yào dài nǐ qù mǎi ma", "zh_indo_spell": "Tina ni syu yau mai syen me dong syi yau dai ni cyu mai ma"},
    {"id": "s_64", "category": "05 關心看護", "speaker": "家人→看護", "id_text": "Tina, sudah makan?", "id_zh_approx": "地娜，蘇達・馬乾？", "zh": "Tina，你吃飯了嗎？", "zh_pinyin": "Tina nǐ chī fàn le ma", "zh_indo_spell": "Tina ni ce fan le ma"},
    {"id": "s_65", "category": "05 關心看護", "speaker": "家人→看護", "id_text": "Kalau capek, istirahat dulu.", "id_zh_approx": "卡勞・查貝，伊斯地拉哈・都魯", "zh": "累了就休息一下。", "zh_pinyin": "lèi le jiù xiū xí yí xià", "zh_indo_spell": "lei le ciou syiou syi i syia"},
    {"id": "s_66", "category": "05 關心看護", "speaker": "家人→看護", "id_text": "Kalau tidak enak badan, bilang saya.", "id_zh_approx": "卡勞・地達・恩納・巴丹，比朗・沙呀", "zh": "身體不舒服要告訴我。", "zh_pinyin": "shēn tǐ bù shū fu yào gào sù wǒ", "zh_indo_spell": "syen ti bu syu fu yau gau su uo"},
    {"id": "s_67", "category": "05 關心看護", "speaker": "家人→看護", "id_text": "Terima kasih atas kerja kerasmu hari ini.", "id_zh_approx": "特里馬卡西・阿達斯・克爾加・克拉斯木・哈利衣尼", "zh": "今天辛苦了，謝謝你。", "zh_pinyin": "jīn tiān xīn kǔ le xiè xie nǐ", "zh_indo_spell": "cin tien syin ku le syie syie ni"},
    {"id": "s_68", "category": "05 關心看護", "speaker": "家人→看護", "id_text": "Boleh telepon keluarga di rumah.", "id_zh_approx": "波勒・特勒蓬・克魯阿爾嘎・地・魯馬", "zh": "可以打電話回家。", "zh_pinyin": "kě yǐ dǎ diàn huà huí jiā", "zh_indo_spell": "ke i da dien hua huei cia"},
    {"id": "s_69", "category": "05 關心看護", "speaker": "家人→看護", "id_text": "Kalau ada barang yang habis, tulis di kertas.", "id_zh_approx": "卡勞・阿達・巴朗・央・哈比斯，都利斯・地・克爾達斯", "zh": "缺什麼日用品寫在紙上。", "zh_pinyin": "quē shén me rì yòng pǐn xiě zài zhǐ shàng", "zh_indo_spell": "cyue syen me re yong pin syie tsai je syang"},
    {"id": "s_70", "category": "06 失智照護提醒", "speaker": "家人→看護", "id_text": "Nenek pikun, tidak bisa bilang apa yang dia mau.", "id_zh_approx": "內內・比棍，地達・比沙・比朗・阿巴・央・迪亞・茂", "zh": "媽媽失智，說不出自己要什麼。", "zh_pinyin": "mā ma shī zhì shuō bù chū zì jǐ yào shén me", "zh_indo_spell": "ma ma sye je syuo bu cu tse ci yau syen me"},
    {"id": "s_71", "category": "06 失智照護提醒", "speaker": "家人→看護", "id_text": "Tolong perhatikan wajah dan gerakan Nenek.", "id_zh_approx": "多龍・波爾哈地干・瓦架・丹・格拉幹・內內", "zh": "請多注意媽媽的表情和動作。", "zh_pinyin": "qǐng duō zhù yì mā ma de biǎo qíng hé dòng zuò", "zh_indo_spell": "cing duo ju i ma ma de biau cing he dong tsuo"},
    {"id": "s_72", "category": "06 失智照護提醒", "speaker": "家人→看護", "id_text": "Kalau Nenek mengerutkan dahi, mungkin ada yang sakit.", "id_zh_approx": "卡勞・內內・盟俄魯幹・達希，蒙金・阿達・央・沙基", "zh": "媽媽皺眉，可能是哪裡不舒服。", "zh_pinyin": "mā ma zhòu méi kě néng shì nǎ lǐ bù shū fu", "zh_indo_spell": "ma ma jou mei ke neng sye na li bu syu fu"},
    {"id": "s_73", "category": "06 失智照護提醒", "speaker": "家人→看護", "id_text": "Antar Nenek ke toilet secara rutin.", "id_zh_approx": "安達爾・內內・克・多伊勒・斯查拉・魯丁", "zh": "定時帶媽媽上廁所。", "zh_pinyin": "dìng shí dài mā ma shàng cè suǒ", "zh_indo_spell": "ding sye dai ma ma syang tse suo"},
    {"id": "s_74", "category": "06 失智照護提醒", "speaker": "家人→看護", "id_text": "Kalau Nenek tanya berulang-ulang, jawab dengan sabar.", "id_zh_approx": "卡勞・內內・丹雅・貝爾烏朗烏朗，架瓦・登安・沙巴爾", "zh": "她重複問，請耐心回答。", "zh_pinyin": "tā chóng fù wèn qǐng nài xīn huí dá", "zh_indo_spell": "ta cong fu uen cing nai syin huei da"},
    {"id": "s_75", "category": "06 失智照護提醒", "speaker": "家人→看護", "id_text": "Kunci pintu, Nenek bisa keluar sendiri.", "id_zh_approx": "滾吉・賓度，內內・比沙・克魯阿爾・森迪利", "zh": "門要鎖好，媽媽會自己走出去。", "zh_pinyin": "mén yào suǒ hǎo mā ma huì zì jǐ zǒu chū qù", "zh_indo_spell": "men yau suo hau ma ma huei tse ci tsou cu cyu"},
    {"id": "s_76", "category": "06 失智照護提醒", "speaker": "家人→看護", "id_text": "Kalau Nenek tidak mau makan, jangan dipaksa.", "id_zh_approx": "卡勞・內內・地達・茂・馬乾，講安・地巴沙", "zh": "媽媽不肯吃的時候，不要勉強。", "zh_pinyin": "mā ma bù kěn chī de shí hòu bú yào miǎn qiǎng", "zh_indo_spell": "ma ma bu ken ce de sye hou bu yau mien ciang"},
    {"id": "s_77", "category": "06 失智照護提醒", "speaker": "家人→看護", "id_text": "Kalau Nenek terlihat aneh, segera kasih tahu saya.", "id_zh_approx": "卡勞・內內・特爾利哈・阿內，斯格拉・卡西・達烏・沙呀", "zh": "媽媽有奇怪的狀況，馬上告訴我。", "zh_pinyin": "mā ma yǒu qí guài de zhuàng kuàng mǎ shàng gào sù wǒ", "zh_indo_spell": "ma ma you ci guai de juang kuang ma syang gau su uo"},
    {"id": "s_78", "category": "07 對媽媽說（安撫）", "speaker": "看護→媽媽", "id_text": "Nenek, kita mandi ya.", "id_zh_approx": "內內，基達・曼地・呀", "zh": "媽媽，我們去洗澡喔。", "zh_pinyin": "mā ma wǒ men qù xǐ zǎo o", "zh_indo_spell": "ma ma uo men cyu syi tsau o"},
    {"id": "s_79", "category": "07 對媽媽說（安撫）", "speaker": "看護→媽媽", "id_text": "Nenek, ayo minum.", "id_zh_approx": "內內，阿喲・米農", "zh": "媽媽，來喝水。", "zh_pinyin": "mā ma lái hē shuǐ", "zh_indo_spell": "ma ma lai he syuei"},
    {"id": "s_80", "category": "07 對媽媽說（安撫）", "speaker": "看護→媽媽", "id_text": "Nenek, ayo makan.", "id_zh_approx": "內內，阿喲・馬乾", "zh": "媽媽，吃飯了。", "zh_pinyin": "mā ma chī fàn le", "zh_indo_spell": "ma ma ce fan le"},
    {"id": "s_81", "category": "07 對媽媽說（安撫）", "speaker": "看護→媽媽", "id_text": "Jangan takut, saya di sini.", "id_zh_approx": "講安・達固，沙呀・地・西尼", "zh": "不要怕，我在這裡。", "zh_pinyin": "bú yào pà wǒ zài zhè lǐ", "zh_indo_spell": "bu yau pa uo tsai je li"},
    {"id": "s_82", "category": "07 對媽媽說（安撫）", "speaker": "看護→媽媽", "id_text": "Kita jalan-jalan, mau?", "id_zh_approx": "基達・架藍架藍，茂？", "zh": "我們去散步好不好？", "zh_pinyin": "wǒ men qù sàn bù hǎo bù hǎo", "zh_indo_spell": "uo men cyu san bu hau bu hau"},
    {"id": "s_83", "category": "07 對媽媽說（安撫）", "speaker": "看護→媽媽", "id_text": "Pelan-pelan, tidak apa-apa.", "id_zh_approx": "波藍波藍，地達・阿巴阿巴", "zh": "慢慢來，沒關係。", "zh_pinyin": "màn màn lái méi guān xi", "zh_indo_spell": "man man lai mei guan syi"},
    {"id": "s_84", "category": "07 對媽媽說（安撫）", "speaker": "看護→媽媽", "id_text": "Nenek hebat!", "id_zh_approx": "內內・赫巴", "zh": "媽媽好棒！", "zh_pinyin": "mā ma hǎo bàng", "zh_indo_spell": "ma ma hau bang"},
    {"id": "s_85", "category": "07 對媽媽說（安撫）", "speaker": "看護→媽媽", "id_text": "Sudah waktunya tidur, selamat malam.", "id_zh_approx": "蘇達・瓦克度釀・地都爾，斯拉馬・馬藍", "zh": "要睡覺了，晚安。", "zh_pinyin": "yào shuì jiào le wǎn ān", "zh_indo_spell": "yau syuei ciau le uan an"}
  ];
  const seen = new Set(careData.dialogueSentences.map(s => s.zh));
  extraSentences.forEach(s => { if (!seen.has(s.zh)) { careData.dialogueSentences.push(s); seen.add(s.zh); } });
  careData.summary.totalSentences = careData.dialogueSentences.length;

  let sentCat = null;
  const esc = s => String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  function mountSection() {
    const board = document.getElementById('tabContentBoard');
    if (!board || document.getElementById('sentenceSection')) return;
    const box = document.createElement('div');
    box.id = 'sentenceSection';
    box.className = 'bg-emerald-50/60 border border-emerald-200 rounded-2xl p-4 shadow-xs';
    box.innerHTML = `
      <div class="flex items-center justify-between mb-3">
        <div>
          <h3 class="text-sm font-bold text-emerald-900 flex items-center space-x-1.5"><span>💬</span><span>常用句 (Kalimat Sehari-hari)</span></h3>
          <p class="text-xs text-emerald-700">點句子播放；長輩模式播印尼文，看護模式播中文</p>
        </div>
        <span id="sentenceCount" class="text-xs bg-emerald-200 text-emerald-800 px-2 py-0.5 rounded-md font-bold"></span>
      </div>
      <div id="sentencePills" class="flex overflow-x-auto space-x-2 pb-2 mb-2 text-xs scrollbar-none"></div>
      <div id="sentenceList" class="space-y-2.5"></div>`;
    const quick = document.getElementById('quickCardsGrid');
    const anchor = quick ? quick.parentElement : null;
    if (anchor && anchor.nextSibling) board.insertBefore(box, anchor.nextSibling); else board.appendChild(box);
  }

  function categories() {
    const cats = [...new Set(careData.dialogueSentences.map(s => s.category))];
    const numbered = cats.filter(c => /^\d\d /.test(c)).sort();
    return [...numbered, ...cats.filter(c => !/^\d\d /.test(c))];
  }

  window.renderSentences = function () {
    mountSection();
    const cats = categories();
    if (!sentCat || !cats.includes(sentCat)) sentCat = cats[0];
    const pills = document.getElementById('sentencePills');
    pills.innerHTML = '';
    cats.forEach(c => {
      const b = document.createElement('button');
      const on = c === sentCat;
      b.className = 'whitespace-nowrap px-3 py-1.5 rounded-full font-bold border transition ' +
        (on ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-white text-slate-600 border-slate-200 hover:border-emerald-300');
      b.textContent = c;
      b.onclick = () => { sentCat = c; window.renderSentences(); };
      pills.appendChild(b);
    });

    const isElder = (typeof currentMode === 'undefined' ? 'elder' : currentMode) === 'elder';
    const list = document.getElementById('sentenceList');
    const items = careData.dialogueSentences.filter(s => s.category === sentCat);
    document.getElementById('sentenceCount').textContent = `${careData.dialogueSentences.length} 句`;
    list.innerHTML = '';
    items.forEach(s => {
      const toElder = s.speaker === '看護→媽媽';
      const card = document.createElement('div');
      card.className = 'bg-white rounded-xl p-3 border border-emerald-100 flex items-center justify-between cursor-pointer hover:bg-emerald-50/50 transition';
      const tag = s.speaker ? `<span class="text-[10px] font-bold px-1.5 py-0.5 rounded ${toElder ? 'bg-rose-100 text-rose-700' : 'bg-sky-100 text-sky-700'}">${esc(s.speaker)}</span>` : '';
      card.innerHTML = `
        <div class="space-y-0.5 pr-2">
          <div class="flex items-center flex-wrap gap-1.5">${tag}
            <span class="${isElder ? 'text-base font-bold text-slate-900' : 'text-sm font-semibold text-slate-700'}">${esc(s.zh)}</span>
          </div>
          <div class="${!isElder ? 'text-base font-bold text-emerald-700' : 'text-sm text-emerald-800 font-medium'}">${esc(s.id_text)}</div>
          <div class="text-[11px] text-slate-400">${isElder ? '家人念：' + esc(s.id_zh_approx) : '看護念中文：' + esc(s.zh_indo_spell)}</div>
        </div>
        <div class="flex flex-col space-y-1 shrink-0">
          <button data-l="id" class="px-2 py-1 text-xs bg-emerald-50 text-emerald-700 hover:bg-emerald-100 rounded-md font-bold">ID</button>
          <button data-l="zh" class="px-2 py-1 text-xs bg-amber-50 text-amber-700 hover:bg-amber-100 rounded-md font-bold">中</button>
        </div>`;
      card.querySelector('[data-l="id"]').onclick = e => { e.stopPropagation(); speakText(s.id_text, 'id-ID'); };
      card.querySelector('[data-l="zh"]').onclick = e => { e.stopPropagation(); speakText(s.zh, 'zh-TW'); };
      card.onclick = () => {
        // 看護對媽媽說的句子：一律播中文（給媽媽聽）
        if (toElder || !isElder) speakText(s.zh, 'zh-TW'); else speakText(s.id_text, 'id-ID');
      };
      list.appendChild(card);
    });
  };

  const origToggle = window.toggleMode;
  if (typeof origToggle === 'function') {
    window.toggleMode = function () { origToggle.apply(this, arguments); window.renderSentences(); };
  }
  window.addEventListener('DOMContentLoaded', () => window.renderSentences());
})();
