/* skill filter */

const skill_type_string = [
['符石轉水', '符石轉火', '符石轉木', '符石轉光', '符石轉暗', '符石轉心', '五屬版面', '五屬心版面'],
['符石轉水強化', '符石轉火強化', '符石轉木強化', '符石轉光強化', '符石轉暗強化', '符石轉心強化'],
['水轉其他', '火轉其他', '木轉其他', '光轉其他', '暗轉其他', '心轉其他', '指定符石轉其他'],
['符石兼具水', '符石兼具火', '符石兼具木', '符石兼具光', '符石兼具暗', '符石兼具心'],
['水屬追打', '火屬追打', '木屬追打', '光屬追打', '暗屬追打', '無屬追打', '自身追打', '全隊追打'],
['引爆', '整版引爆', '直行引爆', '橫行引爆', 'X型引爆', '多次引爆', '水符石引爆', '火符石引爆', '木符石引爆', '光符石引爆', '暗符石引爆', '心符石引爆', '水外符石引爆', '火外符石引爆', '木外符石引爆', '光外符石引爆', '暗外符石引爆', '心外符石引爆', '指定符石引爆', '指定符石外引爆'],
['人族符石製造', '獸族符石製造', '妖族符石製造', '龍族符石製造', '神族符石製造', '魔族符石製造', '機械族符石製造'],
['符石強化', '大幅轉版', '固定版面', '還原版面', '移除符石', '禁珠', '改變掉落機率', '強制掉落', '改變消除方式', '增加符石'],
['減傷', '意志', '敵方減攻', '迴避', '回血', '我方傷害吸收', '敵方傷害吸收'],
['破防', '屬性剋制改變', '排珠', '延長轉珠時間'],
['直傷', '破防直傷', '破強化直傷', '破拼圖直傷', '破攻前直傷', '破固定連擊直傷', '無視技能直傷'],
['增傷', '界王拳', '攻擊轉屬', '增回', '我方攻擊力吸收', '共鳴'],
['對人類增傷', '對獸類增傷', '對妖精類增傷', '對龍類增傷', '對神族增傷', '對魔族增傷', '對機械族增傷'],
['增加Combo', '增加Ex.Combo', '延遲', '減CD', '回復EP', '附加消除', '龍脈儀蓄能', '行動值提升', '隨時關閉', '變身', '合體'],
['無法行動', '敵方轉屬', '凍結敵方', '點燃敵方', '石化敵方', '電擊敵方', '寄生敵方', '敵方中毒', '魅惑敵方', '暈擊敵方'],
['解鎖', '防鎖', '防毒', '防爆', '防反擊', '無視燃燒', '無視黏腐', '無視暴風', '無視射擊', '無視致命步伐', '黑白還原', '碎裂還原', '無視拼圖盾', '無視攻前盾', '無視二屬盾', '無視三屬盾', '無視四屬盾', '無視五屬盾', '無視固定連擊盾', '無視追擊零化', '無視連擊法印', '無視反首消盾'],
['風化符石處理', '凍結符石處理', '弱化符石處理', '電擊符石處理', '石化符石處理', '化血符石處理'],
['我方減攻', '我方減回', '我方扣血', '限制成員攻擊', '我方受傷增加']
];

/* team skill filter */

const team_skill_type_string = [
['增攻', '增回', '增血',  ],
['主動技改變', '組合技能', '隊長技改變', '兼具隊長技能', '龍脈儀能力', ],
['召喚獸轉水', '召喚獸轉火', '召喚獸轉木', '召喚獸轉光', '召喚獸轉暗', ],
['符石轉水', '符石轉火', '符石轉木', '符石轉光', '符石轉暗', '符石轉心'],
['符石轉水強化', '符石轉火強化', '符石轉木強化', '符石轉光強化', '符石轉暗強化', '符石轉心強化'],
['人族符石製造', '獸族符石製造', '妖族符石製造', '龍族符石製造', '神族符石製造', '魔族符石製造', '機械族符石製造'],
['符石強化', '固定版面'],
['符石兼具水', '符石兼具火', '符石兼具木', '符石兼具光', '符石兼具暗', '符石兼具心',],
['水兼具其他', '火兼具其他', '木兼具其他', '光兼具其他', '暗兼具其他', '心兼具其他',],
['水屬追打', '火屬追打', '木屬追打', '光屬追打', '暗屬追打', '無屬追打'],
['減傷', '護盾', '意志', '迴避', '回血', '我方傷害吸收', '敵方傷害吸收', '敵方減攻'],
['破防', '引爆', '直傷', '爆擊', '溢補攻擊', '屬性剋制改變', '我方攻擊力吸收', '攻擊力共鳴', '回復力共鳴'],
['符石掉落率提升', '強制掉落', '符石效果提升', '強化珠效果提升', '改變消除方式'],
['進場減CD', '永久減CD', '開技減CD', '其他減CD'], 
['增加Combo', '增加Ex.Combo', '延長轉珠時間', '龍脈儀蓄能', '行動值提升'],
['對人類增傷', '對獸類增傷', '對妖精類增傷', '對龍類增傷', '對神族增傷', '對魔族增傷', '對機械族增傷'],
['無法行動', '寄生敵方', '暈擊敵方', '敵方中毒'],
['防毒', '無視燃燒', '無視黏腐', '無視暴風', '無視電擊', '無視射擊', '無視拼圖盾', '無視攻前盾', '無視二屬盾', '無視三屬盾', '無視四屬盾', '無視五屬盾', '無視固定連擊盾', '無視連擊相等盾'],
['凍結符石處理', '弱化符石處理', '電擊符石處理', '石化符石處理', '化血符石處理'],
['物品掉落增加'],
['我方減攻', '我方減回'],
];

const team_skill_activate_string = [
['指定隊長', '指定戰友', '指定雙隊長', '指定隊長戰友', '指定成員', '指定屬性成員', '指定種族成員', '指定稀有度成員', '等級下限', '昇華下限', '裝備龍刻'],
];

const tag_string = [
['自家', '合作'], 
['地獄魔王', '封王', '侵蝕 ‧ 封王', '公會任務', '討伐戰', '競技場', '修羅場', '戰慄級', '武術大賽', '世界募集', '公會戰', '魔神戰', '迎擊戰', '召喚師 Bingo', ],
['墮天', '三國', '大和', '圓桌騎士', '武者烈魂', '耀脈星芒', '妖嬈花夢', '宇宙序章', '三國 ‧ 貳', '八仙', '印度神', '神貓大盜', '科研敍論', '妖魔傾城', '上古諸神', '魔幻寶石', '遙古三族', '代偶規條', '神魔審判', '魔法閣沙蘿耶', '次元英雄', '丹心魂夢', '召喚師候選者', '初次相遇', '並肩夥伴', ],
['希臘神', '希臘神煉化', '希臘神幻化', '究極希臘神', '北歐神', '北歐神煉化', '北歐神幻化', '究極北歐神', '埃及神', '埃及神煉化', '埃及神幻化', '中國神', '中國神煉化', '中國神幻化', '究極中國神', '巫女', '黃道十二宮', '不死英雄', '龍僕', '龍僕煉化', '龍僕幻化', '鮮紅恩典', '鮮紅恩典煉化', '鮮紅恩典幻化', '封神演義', '機偶使者', '劍靈', '武魂附體', '百鬼夜行 ‧ 惡鬼', '古蹟源龍', '巴比倫主神', '巴比倫主神煉化', '巴比倫主神幻化', '究極巴比倫主神', '玩具精靈', '新革童話', '諸界看守者', '聖酒女武神', '自然德魯依', '北域遺族', '魔族始源', '古希臘神', '革新英雄', '靈獸役使', '天竺', '金屬生命', '魔族賢者', '神魔天后', '歡聚聖誕', '夏日奔放', '校園物語', '七十二柱魔神', ],
['誓約之花', '神話創世', '夢幻聖物', '機械城的守護者', '幻變之花', '傾世霸主', '東方戰神', '遺世君王', '輝煌英雄', '天道炎旌', ],
['地精', '精靈', '蜥蜴戰士', '魔法女孩', '史萊姆', '狼人', '希臘神像', '希臘妖獸', '龍牙棋', '修道仙妖', '異神使徒', '要塞兵團', '風格樂團', '百鬼夜行 ‧ 怪譚', '神界守衛', '鐵皮部隊', '傳教士', '笨小魔', '魔幼龍', '寧芙', '三國小兵', '無名勇士', '英靈地精', '英靈女孩', '黑鐵學徒', '動能兵', '邪惡軍兵', '放逐野獸', '奇異幻妖', '袖珍龍類', '虔敬神使', '五色魔怪', '變異機芯', ],
['遠古神龍', '貓公爵傭兵團', '七原罪', '星詠之歌姬', '魔境住民', '慶節精靈', '遠古的恐懼', '機龍', '修驗道式神', '機偶夥伴', '百鬼夜行 ‧ 妖魅', '巴比倫神明', '童話仙蹤', '碎羽墮落者', '北域巨人', '死亡騎士', '魔變凶龍', '都市傳說', '海上霸者', '獸伴', '死物附靈', '科學少女', '高手隱士', '逐願邪星', '奇想典故', '魔境入侵者', '追擊始源', '機械神兵', '畫緣相遇', '奧羅茲遺族', '願望果園精靈', '毛毛三姐弟', '科學與哲理', '財迷塵世', '北斗星', '自然之花', '剝落的寶石', '奇幻馬戲團', '異獸使者', '頑童生態特輯', '慌失失瑞獸團', '傳說魔物', '邪馬台國', '伊阿宋', '獅心武術館', '七輪會職員', '智能機械', ],
['主角', '中國神獸', '防龍', '命運女神', '遊俠', '巨像', '魔像', '機械獸', '西方魔獸', '妖女', '異界龍', '荒誕精靈', '靈殿狛犬', '新手夥伴', '超獸魔神', '部落精獸', '機偶合體', '巨神兵', '約誓之翼', '吉祥物', '強力武裝', '協助者', '隱士支配者', '神魔員工', '北域霸獸', '憶念', '創塔者們', '機械小兵', '戰鬥魔導士', '鋼鐵神獸', '魔境造物', '埃及皇權', '希冀', '化物器獸', '百變騎士', '塔之魔神', '魂揚樂器', '異想科學', '騰雲逸龍', '純白承諾', '好運招來', '絢爛過去', '時空之門', '引導者', '審判者', '愛心暖郵', '傳奇生物', '愚人', '紳士俊郎團', '歡騰慶節', '變形金屬', '暴風妖魔', '明搶明偷', '魔軍領率', '龍王么子', '海洋神女', '甜美海歌', '迴廊之主', '妹妹諾拉', '命運三姊妹', '一曲傾心'],
['遠洋的英雄', '遠洋的旅人', '旅人的夥伴', 'B.Duck', '鬼魅奸佞', '幻境惡棍', '魔幻嘍囉', 'BIGBANG元素師', '傳世神器', '軒轅列傳', '軒轅仙獸', '仙劍靈傑', '仙劍列傳', '仙劍靈獸', '列王之爭', '怪物彈珠', '怪物彈珠 ‧ 英雄', '大富翁', '大富翁 ‧ 神明', '霹靂布袋戲', '三教頂峰', '布袋小偶', '拳皇', '大蛇的眷屬', '街頭流氓', '粉碎亂鬥', '粉碎狂熱', '女王之塔', '果實精靈', '獵人×獵人', '蜘蛛×魔術師', '王的護衛', '幻影旅團', '蜘蛛成員', '永遠的朋友', '至強頂點', '幽☆遊☆白書', '武術大會參賽者', '靈界獸', '美好世界', '美好異想', '異世界生物', '巨型蟾蜍', 'Android 機械人', 'FAIRY TAIL', '魔導之眾', '艾克希特', '聖鬥士星矢', '聖域的戰士們', '白銀聖鬥士', '光之巨人', '超人', '侵略者', '不祥凶獸', '虛擬歌手', '永遠青春', '真理追尋者', '鍊金賢者', '人造人', '雪碧', '天元突破', '大紅蓮團', '顏面合體', '螺旋王四天王', '超巨大宇宙戰艦', '約定的婚禮', '眾神的逆鱗', '傲慢之罪', '光之聖痕的叛徒', '魔神', '女神族', '新世紀福音戰士石抽', '使徒', 'WILLE隊員', 'Mark. 09', 'ROCKMAN X DiVE', '究極裝甲艾克斯', '霸法 (棕熊號)', '黑傑洛', '極地部隊', '鬼滅之刃', '竈門家長女', '鬼殺隊培育者', '下弦之壹', '天竺鼠車車', '機械鯊魚', '怪獸', '拉頓', '假面騎士', '假面騎士ZI-O', '假面騎士Thouser & Genm', '假面騎士Ex-Aid', '聖鬥士星矢冥界篇', '地妖星與天英星', '冥界使者', '城戶沙織', '雄英高校', ], 
['素材', '進化素材', '強化素材', '潛能解放素材', '異空轉生素材', '究極融煉素材', '瘋頭', '八仙素材', '忠誠侍童', '魂寵', '靈魂精髓', '豐腴珍獸', '可口羊駝', '珍饈美點', '雅緻甜點', '時空元素', '靈石', ]
];
const attr_type_string = ['水', '火', '木', '光', '暗'];
const race_type_string = ['人類', '獸類', '妖精類', '龍類', '神族', '魔族', '機械族', '進化素材', '強化素材'];
const star_type_string = ['1', '2', '3', '4', '5', '6', '7', '8'];
const charge_type_string = ['CD', 'EP'];
const option_text = ['單回合', '跨回合', '常駐'];

/* craft filter */
const craft_skill_type_string = [
['符石轉水', '符石轉火', '符石轉木', '符石轉光', '符石轉暗', '符石轉心', '符石強化'],
['直行轉水', '直行轉火', '直行轉木', '直行轉光', '直行轉暗', '直行轉心'],
['水屬追打', '火屬追打', '木屬追打', '光屬追打', '暗屬追打', '無屬追打'],
['減傷', '意志', '迴避', '回血', '我方傷害吸收'],
['直傷', '全體直傷', '單體破防直傷'],
['增傷', '增回', '破防', '反擊'],
['對水增傷', '對火增傷', '對木增傷', '對光增傷', '對暗增傷'],
['延遲', '減CD', '單體轉全體', '無視屬性相剋'],
['無視拼圖盾', '無視五屬盾', '無視攻前盾']
];

const craft_mode_type_string = ['連鎖龍紋', '轉動龍印', '破碎龍咒', '映照龍符', '疾速龍玉', '裂空龍刃', '落影龍璃', '擴散龍結', '鏡像龍丸', '節奏龍弦'];

const craft_attr_type_string = ['沒有限制', '水', '火', '木', '光', '暗'];

const craft_race_type_string = ['沒有限制', '人類', '獸類', '妖精類', '龍類', '神族', '魔族', '機械族'];

const craft_star_type_string = ['1', '2', '3'];

const craft_charge_type_string = ['消除水符石', '消除火符石', '消除木符石', '消除光符石', '消除暗符石', '消除心符石', '消除符石', '發動攻擊', '受到攻擊', '4 Combo以上']

/* backpack viewer */
const sealContent = {
	'古幣封印': {
		'黑金': [
			[1189, 1371, 1372], [1190, 1373, 1374],
			[1439, 2379], [1440, 2244], [1626, 2545], [1719, 2634], [1818, 2739], 1983,
			2081, 2149, 
			2207, 2305, 2380, 2480,
			2595,
			2660,
			10062,
			10117
		],
		'獨立封印大獎': [
			[1244, 1245, 2086], 
			[1236, 1237, 2082], 
			[1238, 1239, 2083], 
			[1276, 1277, 2259], 
			[1278, 1279, 2269], 
			[1290, 1291, 2266],
			[1426, 1427, 2486], 
			[1428, 1429, 2487], 
			[1430, 1431, 2488],
			[1452, 1453], 
			[1454, 1455], 
			[1460, 1461], 
			[1473, 1474], 
			[1475, 1476], 
			[1477, 1478], 
			[1540, 1541], 
			[1536, 1537], 
			[1544, 1545], 
			[1601, 1602], 
			[1603, 1604], 
			[1609, 1610], 
			[1644, 1645], 
			[1638, 1639], 
			[1642, 1643], 
			[1673, 1674, 2275], 
			[1671, 1672, 2273], 
			[1679, 1680, 2272], 
			1703, 1704, 1705, 
			[1838, 1839], 
			[1836, 1837], 
			[1844, 1845], 
			[1927, 1928], 
			[1925, 1926], 
			[1929, 1930], 
			[2006, 2007], 
			[2010, 2011], 
			[2014, 2015], 
			[2053, 2054], 
			[2057, 2058], 
			[2059, 2060], 
			2131, 2130, 2132, 
			[2222, 2223], 
			[2218, 2219], 
			[2220, 2221], 
			2306, 2307, 2310, 
			2383, 2381, 2385, 
			2498, 2497, 2499, 
			2570, 2567, 2568, 
			2637, 2639, 2640, 
			2688, 2689, 2690, 
		],
		'機械城的守護者': [1868, 1869, 1870],
		'中國神': [
			[221, 222, 591, 1081, 1082, 2181], 
			[223, 224, 592, 1083, 1084, 2182], 
			[225, 226, 593, 1085, 1086, 2183], 
			[227, 228, 594, 1087, 1088, 2184], 
			[229, 230, 595, 1089, 1090, 2185]
		],
		'其他': [
			1562, 2099, 2176, 2177,
		],
	},
	'魔法石封印': {
		'希臘神': [
			[191, 192, 941, 1356, 1357, 2431], 
			[193, 194, 942, 1358, 1359, 2432], 
			[195, 196, 943, 1360, 1361, 2433], 
			[197, 198, 944, 1362, 1363, 2434], 
			[199, 200, 945, 1364, 1365, 2435]
		],
		'北歐神': [
			[201, 202, 506, 1021, 1022, 2001], 
			[203, 204, 507, 1023, 1024, 2002], 
			[205, 206, 508, 1025, 1026, 2003], 
			[207, 208, 509, 1027, 1028, 2004], 
			[209, 210, 510, 1029, 1030, 2005]
		],
		'埃及神': [
			[211, 212, 641, 1380, 1381], 
			[213, 214, 642, 1382, 1383], 
			[215, 216, 643, 1384, 1385], 
			[217, 218, 644, 1386, 1387], 
			[219, 220, 645, 1388, 1389]
		],
		'中國神': [
			[221, 222, 591, 1081, 1082, 2181], 
			[223, 224, 592, 1083, 1084, 2182], 
			[225, 226, 593, 1085, 1086, 2183], 
			[227, 228, 594, 1087, 1088, 2184], 
			[229, 230, 595, 1089, 1090, 2185]
		],
		'巫女': [
			[344, 345, 1046], 
			[346, 347, 1047], 
			[348, 349, 1048]
		],
		'黃道十二宮': [
			[355, 356, 816], 
			[357, 358, 817], 
			[359, 360, 818], 
			[361, 362, 819], 
			[363, 364, 820], 
			[365, 366, 821], 
			[367, 368, 822], 
			[369, 370, 823], 
			[371, 372, 824], 
			[373, 374, 825], 
			[375, 376, 826], 
			[377, 378, 827]
		],
		'不死英雄': [
			[388, 389, 2546], 
			[390, 391, 2547], 
			[392, 393, 2548], 
			[394, 395, 2549], 
			[396, 397, 2550]
		],
		'龍僕': [
			[413, 414, 1066, 2601, 2602], 
			[415, 416, 1067, 2603, 2604], 
			[417, 418, 1068, 2605, 2606], 
			[419, 420, 1069, 2607, 2608], 
			[421, 422, 1070, 2609, 2610]
		],
		'鮮紅恩典': [
			[466, 467, 711, 1326, 1327], 
			[468, 469, 712, 1328, 1329], 
			[470, 471, 713, 1330, 1331], 
			[472, 473, 714, 1332, 1333], 
			[474, 475, 715, 1334, 1335]
		],
		'封神演義': [
			[531, 532, 1041], 
			[533, 534, 1042], 
			[535, 536, 1043], 
			[537, 538, 1044], 
			[539, 540, 1045]
		],
		'機偶使者': [
			[596, 597, 1366], 
			[598, 599, 1367], 
			[600, 601, 1368], 
			[602, 603, 1369], 
			[604, 605, 1370]
		],
		'劍靈': [
			[716, 2551], 
			[717, 2552], 
			[718, 2553], 
			[719, 2554], 
			[720, 2555]
		],
		'百鬼夜行 ‧ 惡鬼': [
			[726, 727, 1126], 
			[728, 729, 1127], 
			[730, 731, 1128], 
			[732, 733, 1129], 
			[734, 735, 1130]
		],
		'古蹟源龍': [
			[790, 791, 1181], 
			[792, 793, 1182], 
			[794, 795, 1183], 
			[796, 797, 1184], 
			[798, 799, 1185]
		],
		'巴比倫主神': [
			[801, 802, 1216, 1821, 1822, 2731], 
			[803, 804, 1217, 1823, 1824, 2732], 
			[805, 806, 1218, 1825, 1826, 2733], 
			[807, 808, 1219, 1827, 1828, 2734], 
			[809, 810, 1220, 1829, 1830, 2735]
		],
		'玩具精靈': [
			[861, 862, 1191], 
			[863, 864, 1192], 
			[865, 866, 1193], 
			[867, 868, 1194], 
			[869, 870, 1195]
		],
		'新革童話': [
			[881, 882, 1266], 
			[883, 884, 1267], 
			[885, 886, 1268], 
			[887, 888, 1269], 
			[889, 890, 1270]
		],
		'諸界看守者': [
			[946, 947, 1261], 
			[948, 949, 1262], 
			[950, 951, 1263], 
			[952, 953, 1264], 
			[954, 955, 1265]
		],
		'聖酒女武神': [
			[986, 987, 1311], 
			[988, 989, 1312], 
			[990, 991, 1313], 
			[992, 993, 1314], 
			[994, 995, 1315]
		],
		'自然德魯依': [
			[1031, 1032, 1406], 
			[1033, 1034, 1407], 
			[1035, 1036, 1408], 
			[1037, 1038, 1409], 
			[1039, 1040, 1410]
		],
		'北域遺族': [
			[1056, 1057, 1336], 
			[1058, 1059, 1337], 
			[1060, 1061, 1338], 
			[1062, 1063, 1339], 
			[1064, 1065, 1340]
		],
		'魔族始源': [
			[1101, 1102, 1351], 
			[1103, 1104, 1352], 
			[1105, 1106, 1353], 
			[1107, 1108, 1354], 
			[1109, 1110, 1355]
		],
		'古希臘神': [
			[1136, 1137, 1375], 
			[1138, 1139, 1376], 
			[1140, 1141, 1377], 
			[1142, 1143, 1378], 
			[1144, 1145, 1379]
		],
		'革新英雄': [
			[1166, 2041], 
			[1168, 2043], 
			[1170, 2045], 
			[1172, 2047], 
			[1174, 2049]
		],
		'靈獸役使': [
			[1221, 1222, 1390], 
			[1223, 1224, 1391], 
			[1225, 1226, 1392], 
			[1227, 1228, 1393], 
			[1229, 1230, 1394]
		],
		'天竺': [1666, 1667, 1668, 1669, 1670],
		'金屬生命': [1720, 1721, 1722, 1723, 1724],
		'埃及皇權': [1916, 1917, 1918, 1919],
		'魔族賢者': [1811, 1812, 1813, 1814, 1815],
		'黑金': [
			[1189, 1371, 1372], [1190, 1373, 1374],
			[1404, 1981], [1405, 1982],
			[1439, 2379], [1440, 2244], [1626, 2545], [1719, 2634], 1818, 1983,
			2081, 2149, 
			2207, 2305, 2380, 2480,
			2584, 2585,
			2595,
			2660,
			10062
		],
		'幻變之花': [2176, 2177],
		'神魔天后': [2099],
		'歡聚聖誕': [2586, 2587, 2588, 2589, 2590],
		'夏日奔放': [2724, 2725, 2727, 2728, 2729],
		'暢遊校園': [10112, 10113, 10114, 10115, 10116]
	},
	'獨立封印': {
		'墮天': [
			[1244, 1245, 2086], 
			[1236, 1237, 2082], 
			[1238, 1239, 2083], 
			[1240, 1241, 2084], 
			[1242, 1243, 2085], 
			[1246, 1247, 2087], 
			[1248, 1249, 2088], 
			[1250, 1251, 2089]
		],
		'三國': [
			[1276, 1277, 2259], 
			[1278, 1279, 2269], 
			[1290, 1291, 2266],
			[1280, 1281, 2261], 
			[1282, 1283, 2271], 
			[1284, 1285, 2262], 
			[1286, 1287, 2274], 
			[1288, 1289, 2277], 
		],
		'大和': [
			[1426, 1427, 2486], 
			[1428, 1429, 2487], 
			[1430, 1431, 2488],
			[1416, 1417, 2481], 
			[1418, 1419, 2482], 
			[1420, 1421, 2483], 
			[1422, 1423, 2484], 
			[1424, 1425, 2485], 
		],
		'圓桌騎士': [
			[1452, 1453, 2746], 
			[1454, 1455, 2743], 
			[1460, 1461, 2742], 
			[1446, 1447, 2740], 
			[1448, 1449, 2744], 
			[1450, 1451, 2741], 
			[1456, 1457, 2747], 
			[1458, 1459, 2745]
		],
		'武者烈魂': [
			[1473, 1474], 
			[1475, 1476], 
			[1477, 1478], 
			[1471, 1472], 
			[1479, 1480], 
			[1481, 1482], 
			[1483, 1484], 
			[1485, 1486]
		],
		'耀脈星芒': [
			[1540, 1541], 
			[1536, 1537], 
			[1544, 1545], 
			[1538, 1539], 
			[1542, 1543], 
			[1546, 1547], 
			[1548, 1549], 
			[1550, 1551]
		],
		'妖嬈花夢': [
			[1601, 1602], 
			[1603, 1604], 
			[1609, 1610], 
			[1605, 1606], 
			[1607, 1608], 
			[1611, 1612], 
			[1613, 1614], 
			[1615, 1616]
		],
		'宇宙序章': [
			[1644, 1645], 
			[1638, 1639], 
			[1642, 1643], 
			[1636, 1637], 
			[1640, 1641], 
			[1646, 1647], 
			[1648, 1649], 
			[1650, 1651]
		],
		'三國 ‧ 貳': [
			[1673, 1674, 2275], 
			[1671, 1672, 2273], 
			[1679, 1680, 2272], 
			[1675, 1676, 2263], 
			[1677, 1678, 2264], 
			[1681, 1682, 2268], 
			[1683, 1684, 2276], 
			[1685, 1686, 2265]
		],
		'八仙': [1703, 1704, 1705, 1701, 1702, 1706, 1707, 1708],
		'印度神': [
			[1838, 1839], 
			[1836, 1837], 
			[1844, 1845], 
			[1840, 1841], 
			[1842, 1843], 
			[1846, 1847], 
			[1848, 1849], 
			[1850, 1851]
		],
		'神貓大盜': [
			[1927, 1928], 
			[1925, 1926], 
			[1929, 1930], 
			[1921, 1922], 
			[1923, 1924], 
			[1931, 1932], 
			[1933, 1934], 
			[1935, 1936]
		],
		'科研敍論': [
			[2006, 2007], 
			[2010, 2011], 
			[2014, 2015], 
			[2008, 2009], 
			[2012, 2013], 
			[2016, 2017], 
			[2018, 2019], 
			[2020, 2021]
		],
		'妖魔傾城': [
			[2053, 2054], 
			[2057, 2058], 
			[2059, 2060], 
			[2051, 2052], 
			[2055, 2056], 
			[2061, 2062], 
			[2063, 2064], 
			[2065, 2066]
		],
		'上古諸神': [2131, 2130, 2132, 2129, 2133, 2134, 2135, 2136],
		'魔幻寶石': [
			[2222, 2223], 
			[2218, 2219], 
			[2220, 2221], 
			[2216, 2217], 
			[2224, 2225], 
			[2226, 2227], 
			[2228, 2229], 
			[2230, 2231]
		],
		'遙古三族': [2306, 2307, 2310, 2308, 2309, 2311, 2312, 2313],
		'代偶規條': [2383, 2381, 2385, 2382, 2384, 2386, 2387, 2388],
		'神魔審判': [2498, 2497, 2499, 2496, 2500, 2501, 2502, 2503],
		'魔法閣沙蘿耶': [2570, 2567, 2568, 2566, 2569, 2571, 2572, 2573],
		'次元英雄': [2637, 2639, 2640, 2636, 2638, 2641, 2642, 2643],
		'丹心魂夢': [2688, 2689, 2690, 2686, 2687, 2691, 2692, 2693],
		'召喚師候選者': [10036, 10037, 10038, 10039, 10040, 10041, 10042, 10043, 10044, 10045],
		'初次相遇': [10047, 10048, 10049, 10050],
		'並肩夥伴': [10100, 10101, 10102, 10103, 10118, 10119]
	},
	'合作封印': {
		'遠洋的英雄': [
			[432, 433], 
			[434, 435], 
			[436, 437]
		],
		'鬼魅奸佞': [
			[8013, 8014], 
			[8005, 8006], 
			[8011, 8012], 
			[8001, 8002], 
			[8003, 8004], 
			[8007, 8008], 
			[8009, 8010]
		],
		'傳世神器': [
			[762, 763], 
			[746, 747], 
			[754, 755], 
			[764, 765], 
			[748, 749], 
			[750, 751], 
			[752, 753], 
			[756, 757], 
			[758, 759], 
			[760, 761], 
			[766, 767]
		],
		'仙劍靈傑': [
			[895, 896], 
			[891, 892], 
			[893, 894], 
			[899, 900], 
			[907, 908], 
			[897, 898], 
			[901, 902], 
			[903, 904], 
			[905, 906], 
			[909, 910], 
			[911, 912], 
			[913, 914], 
			[915, 916]
		],
		'怪物彈珠 ‧ 英雄': [1097, 1091, 1092, 1093, 1094, 1095, 1096],
		'大富翁': [1207, 1206, 1208, 1201, 1202, 1203, 1204, 1205],
		'霹靂布袋戲': [1506, 1509, 1510, 1507, 1508, 1511, 1512, 1513],
		'拳皇': [1572, 1575, 1576, 1571, 1573, 1574, 1577, 1578],
		'粉碎狂熱': [1728, 1726, 1729, 1727, 1730, 1731, 1732, 1733, 1734],
		'獵人×獵人': [1762, 1764, 1766, 1759, 1760, 1768, 1769],
		'幽☆遊☆白書': [1786, 1790, 1793, 1788, 1792, 1795, 1796, 1797],
		'美好世界': [1883, 1882, 1885, 1884, 1886, 1887, 1888, 1889],
		'FAIRY TAIL': [1956, 1955, 1958, 1957, 1959, 1960, 1961, 1962],
		'聖鬥士星矢': [2107, 2101, 2105, 2103, 2109, 2111, 2112, 2113],
		'光之巨人': [2154, 2150, 2157, 2152, 2153, 2155, 2156, 2159],
		'虛擬歌手': [2188, 2186, 2189, 2187, 2190, 2191, 2192, 2193],
		'蜘蛛×魔術師': [2285, 2281, 2282, 2283, 2284, 2286, 2287, 2288, 2289],
		'真理追尋者': [2338, 2337, 2339, 2336, 2340, 2341, 2342, 2343],
		'天元突破': [[2407, 2422], 2408, 2411, 2406, 2409, 2410, 2412, 2413],
		'眾神的逆鱗': [2454, 2451, 2452, 2453, 2456, 2457, 2458, 2459],
		'新世紀福音戰士石抽': [2516, [2518, 2536], 2520, [2519, 2538], 2521, 2522, 2523, 2524],
		'ROCKMAN X DiVE': [[2611, 2620, 2621], 2612, 2616, 2614, 2615, 2617, 2618, 2619],
		'鬼滅之刃': [2661, 2663, 2667, 2668, 2664, 2665, 2666, 2669, 2670],
		'假面騎士': [[2701, 2719, 2720], 2699, 2702, 2704, 2706, 2707, 2708, 2709],
		'聖鬥士星矢冥界篇': [10072, 10068, 10074, 10066, 10070, 10076, 10077, 10078],
		'雄英高校': ['?-1', '?-2', '?-3', '?-4', '?-5', '?-6', '?-7', '?-8']
	},
}

const activate_num = team_skill_activate_string.length;
const craft_skill_num = craft_skill_type_string.length;
const craft_mode_num = craft_mode_type_string.length;
const craft_attr_num = craft_attr_type_string.length;
const craft_race_num = craft_race_type_string.length;
const craft_star_num = craft_star_type_string.length;
const craft_charge_num = craft_charge_type_string.length;


const blue_str = 'rgb(100, 100, 255)';
const green_str = 'rgb(50, 155, 50)';
const white_str = 'rgb(255, 255, 255)';
const black_str = 'rgb(0, 0, 0)';


const encode_chart = [
    '0','1','2','3','4','5','6','7','8','9',
    'a','b','c','d','e','f','g','h','i','j',
    'k','l','m','n','o','p','q','r','s','t',
    'u','v','w','x','y','z','A','B','C','D',
    'E','F','G','H','I','J','K','L','M','N',
    'O','P','Q','R','S','T','U','V','W','X',
    'Y','Z','+','-'
];

const attr_zh_to_en = {'水': 'w', '火': 'f', '木': 'e', '光': 'l', '暗': 'd'};
const race_zh_to_en = {'人類': 'human', '獸類': 'beast', '妖精類': 'elf', '龍類': 'dragon', '神族': 'god', '魔族': 'demon', '機械族': 'machina', '進化素材': 'evolve', '強化素材': 'level_up'};

const attr_color = {'水': '#3E85D6', '火': '#FC2F28', '木': '#0F9611', '光': '#F8C50E', '暗': '#9B08CA'};

const input_maxlength = 50;
const uid_maxlength = 11;
const veri_maxlength = 6;

const monster_notification = ''
const craft_notification = ''

const myAuth = 'NTk1NjM2MzUxNDk0NTk3'