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
['破防', '直傷', '破防直傷', '屬性剋制改變', '排珠', '延長轉珠時間'],
['增傷', '界王拳', '攻擊轉屬', '增回', '我方攻擊力吸收', '共鳴'],
['對人類增傷', '對獸類增傷', '對妖精類增傷', '對龍類增傷', '對神族增傷', '對魔族增傷', '對機械族增傷'],
['增加Combo', '增加Ex.Combo', '延遲', '減CD', '回復EP', '附加消除', '龍脈儀蓄能', '行動值提升', '隨時關閉', '變身', '合體'],
['無法行動', '敵方轉屬', '凍結敵方', '點燃敵方', '石化敵方', '電擊敵方', '寄生敵方', '敵方中毒', '魅惑敵方', '暈擊敵方'],
['解鎖', '防鎖', '防毒', '防爆', '防反擊', '無視燃燒', '無視黏腐', '無視暴風', '黑白還原', '碎裂還原', '無視拼圖盾', '無視攻前盾', '無視三屬盾', '無視四屬盾', '無視五屬盾', '無視固定連擊盾', '無視追擊零化', '無視連擊法印'],
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
['防毒', '無視燃燒', '無視黏腐', '無視暴風', '無視電擊', '無視射擊', '無視拼圖盾', '無視攻前盾', '無視三屬盾', '無視五屬盾', '無視固定連擊盾'],
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
['墮天', '三國', '大和', '圓桌騎士', '武者烈魂', '耀脈星芒', '妖嬈花夢', '宇宙序章', '三國 ‧ 貳', '八仙', '印度神', '神貓大盜', '科研敍論', '妖魔傾城', '上古諸神', '魔幻寶石', '遙古三族', '代偶規條', '神魔審判', '魔法閣沙蘿耶', '次元英雄', '丹心魂夢', ],
['希臘神', '希臘神煉化', '希臘神幻化', '究極希臘神', '北歐神', '北歐神煉化', '北歐神幻化', '究極北歐神', '埃及神', '埃及神煉化', '埃及神幻化', '中國神', '中國神煉化', '中國神幻化', '究極中國神', '巫女', '黃道十二宮', '不死英雄', '龍僕', '龍僕煉化', '龍僕幻化', '鮮紅恩典', '鮮紅恩典煉化', '鮮紅恩典幻化', '封神演義', '機偶使者', '魔像', '劍靈', '武魂附體', '百鬼夜行 ‧ 惡鬼', '古蹟源龍', '巴比倫主神', '巴比倫主神煉化', '巴比倫主神幻化', '玩具精靈', '新革童話', '諸界看守者', '聖酒女武神', '自然德魯依', '北域遺族', '魔族始源', '古希臘神', '革新英雄', '靈獸役使', '天竺', '金屬生命', '魔族賢者', '神魔天后', '歡聚聖誕', '七十二柱魔神', ],
['誓約之花', '神話創世', '夢幻聖物', '機械城的守護者', '幻變之花', '傾世霸主', '東方戰神', '遺世君王', ],
['地精', '精靈', '蜥蜴戰士', '魔法女孩', '史萊姆', '狼人', '希臘神像', '希臘妖獸', '龍牙棋', '修道仙妖', '異神使徒', '要塞兵團', '風格樂團', '百鬼夜行 ‧ 怪譚', '神界守衛', '鐵皮部隊', '傳教士', '笨小魔', '魔幼龍', '寧芙', '三國小兵', '無名勇士', '英靈地精', '英靈女孩', '黑鐵學徒', '動能兵', ],
['遠古神龍', '貓公爵傭兵團', '七原罪', '星詠之歌姬', '魔境住民', '慶節精靈', '遠古的恐懼', '機龍', '修驗道式神', '機偶夥伴', '百鬼夜行 ‧ 妖魅', '巴比倫神明', '童話仙蹤', '碎羽墮落者', '北域巨人', '死亡騎士', '魔變凶龍', '都市傳說', '海上霸者', '獸伴', '死物附靈', '科學少女', '高手隱士', '逐願邪星', '奇想典故', '魔境入侵者', '追擊始源', '機械神兵', '畫緣相遇', '奧羅茲遺族', '願望果園精靈', '毛毛三姐弟', '科學與哲理', '財迷塵世', '北斗星', '自然之花', '剝落的寶石', '奇幻馬戲團', '異獸使者', '頑童生態特輯', '慌失失瑞獸團', '傳說魔物', '邪馬台國', ],
['主角', '中國神獸', '防龍', '命運女神', '遊俠', '巨像', '機械獸', '西方魔獸', '妖女', '異界龍', '荒誕精靈', '靈殿狛犬', '新手夥伴', '超獸魔神', '部落精獸', '機偶合體', '巨神兵', '約誓之翼', '吉祥物', '強力武裝', '協助者', '隱士支配者', '神魔員工', '北域霸獸', '憶念', '創塔者們', '機械小兵', '戰鬥魔導士', '鋼鐵神獸', '魔境造物', '埃及皇權', '希冀', '化物器獸', '百變騎士', '塔之魔神', '魂揚樂器', '異想科學', '騰雲逸龍', '純白承諾', '好運招來', '絢爛過去', '時空之門', '引導者', '審判者', '愛心暖郵', '傳奇生物', '愚人', '紳士俊郎團', '歡騰慶節', '變形金屬', '暴風妖魔', '明搶明偷', '魔軍領率', '龍王么子', '海洋神女', '甜美海歌', '迴廊之主', '妹妹諾拉'],
['遠洋的英雄', '遠洋的旅人', '旅人的夥伴', 'B.Duck', '鬼魅奸佞', '幻境惡棍', '魔幻嘍囉', 'BIGBANG元素師', '傳世神器', '軒轅列傳', '軒轅仙獸', '仙劍靈傑', '仙劍列傳', '仙劍靈獸', '列王之爭', '怪物彈珠', '怪物彈珠 ‧ 英雄', '大富翁', '大富翁 ‧ 神明', '霹靂布袋戲', '三教頂峰', '布袋小偶', '拳皇', '大蛇的眷屬', '街頭流氓', '粉碎亂鬥', '粉碎狂熱', '女王之塔', '果實精靈', '獵人×獵人', '蜘蛛×魔術師', '王的護衛', '幻影旅團', '蜘蛛成員', '永遠的朋友', '至強頂點', '幽☆遊☆白書', '武術大會參賽者', '靈界獸', '美好世界', '美好異想', '異世界生物', '巨型蟾蜍', 'Android 機械人', 'FAIRY TAIL', '魔導之眾', '艾克希特', '聖鬥士星矢', '聖域的戰士們', '白銀聖鬥士', '光之巨人', '超人', '侵略者', '不祥凶獸', '虛擬歌手', '永遠青春', '真理追尋者', '鍊金賢者', '人造人', '雪碧', '天元突破', '大紅蓮團', '顏面合體', '螺旋王四天王', '超巨大宇宙戰艦', '約定的婚禮', '眾神的逆鱗', '傲慢之罪', '光之聖痕的叛徒', '魔神', '女神族', '新世紀福音戰士石抽', '使徒', 'WILLE隊員', 'Mark. 09', 'ROCKMAN X DiVE', '究極裝甲艾克斯', '霸法 (棕熊號)', '黑傑洛', '極地部隊', '鬼滅之刃', '竈門家長女', '鬼殺隊培育者', '下弦之壹', '天竺鼠車車', '機械鯊魚', '怪獸', '拉頓', '假面騎士', '假面騎士ZI-O', '假面騎士Thouser & Genm', '假面騎士Ex-Aid', ], 
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

const monster_notification = ''
const craft_notification = ''