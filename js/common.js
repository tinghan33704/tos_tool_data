
$(window).resize(() => {
    $('.side_navigation').css(
        {
            top: (parseInt($('#top-bar').css('height'))-20)+'px'
        }
    );
});

function init() {
    $(".row.result-row").hide();
    
    $('#toTop-btn').click(() => { 
        $('html,body').animate({
            scrollTop: 0
        }, 300);
    });
    
    $(window).scroll(() => {
        if ($(this).scrollTop() > 300) $('#toTop-btn').fadeIn(200);
        else $('#toTop-btn').stop().fadeOut(200);
    }).scroll();
    
    $('#changeTheme-btn').click(() => { 
        changeTheme();
    });
    
    $('.side_navigation').html(() => {
        return createSideNavigation();
    })
    $('.side_navigation').css(
        {
            top: (parseInt($('#top-bar').css('height'))-20)+'px'
        }
    );
    
    switch(tool_id) {
        case 'active_skill':
            createFilterButtonRow("filter", skill_type_string);
            createKeywordRow();
            createFilterButtonRow("tag", tag_string);
            createFilterButtonRow("attr", attr_type_string);
            createFilterButtonRow("race", race_type_string);
            createFilterButtonRow("star", star_type_string, ' ★');
            createFilterButtonRow("charge", charge_type_string);
        break;
        case 'team_skill':
            createFilterButtonRow("filter", team_skill_type_string);
            createKeywordRow();
            createFilterButtonRow("activate", team_skill_activate_string);
            createFilterButtonRow("attr", attr_type_string);
            createFilterButtonRow("race", race_type_string);
            createFilterButtonRow("star", star_type_string, ' ★');
        break;
        case 'craft':
            createFilterButtonRow("filter", craft_skill_type_string);
            createKeywordRow();
            createFilterButtonRow("mode", craft_mode_type_string);
            createFilterButtonRow("attr", craft_attr_type_string);
            createFilterButtonRow("race", craft_race_type_string);
            createFilterButtonRow("star", craft_star_type_string, ' ★');
            createFilterButtonRow("charge", craft_charge_type_string);
        break;
    }
	
	/*$(".btn-shell label").each((index, ele) => {
		const svg = $(ele).find("svg")[0];
		const text = $(svg).find("text")[0];
		
		const divWidth = ele.getBoundingClientRect().width;
		$(svg).attr('viewBox', `0 0 ${divWidth} 30`)
		
		const textLength = text ? text.getComputedTextLength() : 0;
		console.log(divWidth, textLength)
		if(textLength < divWidth) {
			$(svg).attr('viewBox', `0 0 ${Math.ceil(textLength).toString()} 30`)
		}
	})*/
    
    or_filter = true;
    keyword_search = false;

    $(".copyright").length && $(".copyright").html(() =>  {
        let year = new Date().getFullYear();
        return "Copyright © 2019-" + year + " 蒼曜"
    });
    
    $("#start_filter").length && $("#start_filter").on("click", startFilter);
    $("#and_or_filter").length && $("#and_or_filter").on("click", andOrChange);
    $("#sort_by_result").length && $("#sort_by_result").on("click", sortByChange);
    $("#reset_all").length && $("#reset_all").on("click", clearAll);
    $("#reset_skill").length && $("#reset_skill").on("click", clearFilterButtonRow('filter'));
    $("#reset_activate").length && $("#reset_activate").on("click", clearFilterButtonRow('activate'));
    $("#reset_attr").length && $("#reset_attr").on("click", clearFilterButtonRow('attr'));
    $("#reset_race").length && $("#reset_race").on("click", clearFilterButtonRow('race'));
    $("#reset_star").length && $("#reset_star").on("click", clearFilterButtonRow('star'));
    $("#reset_charge").length && $("#reset_charge").on("click", clearFilterButtonRow('charge'));
    $("#reset_tag").length && $("#reset_tag").on("click", clearFilterButtonRow('tag'));
    $("#reset_mode").length && $("#reset_mode").on("click", clearFilterButtonRow('mode'));
    $("#reset_keyword").length && $("#reset_keyword").on("click", clearKeyword);
    $("#keyword-switch").length && $("#keyword-switch").on("click", keywordSwitch);
    $("#optionPanel").length && $('#optionPanel').on('hide.bs.modal', recordOption);
    $("#switch_display").length && $('#switch_display').on("click", displaySwitch);
    
    $("#option-btn").length && $('#option-btn').click(() => {
        let hasSelectedSkill = false;
        $(".filter-row .filter").each(function() {
            if($(this).prop('checked'))
            {
                hasSelectedSkill = true;
                return false;
            }
        });
        if(hasSelectedSkill) openOptionPanel();
        else errorAlert(2);
    });
}

function createSideNavigation() {
    return `
        <a ${tool_id === 'active_skill' ? `href="#"` : `target="_blank" href="https://tinghan33704.github.io/tos_skill_filter/tos_skill_filter.html"` }>主動技搜尋器</a>
        <a ${tool_id === 'team_skill' ? `href="#"` : `target="_blank" href="https://tinghan33704.github.io/tos_team_skill_filter/tos_team_skill_filter.html"` }>隊伍技搜尋器</a>
        <a ${tool_id === 'craft' ? `href="#"` : `target="_blank" href="https://tinghan33704.github.io/tos_craft_filter/tos_craft_filter.html"` }>龍刻搜尋器</a>
    `
}

function createFilterButtonRow(name, data, postAppend = '') {
    $(`.${name}-row`).html(() =>
    {
        let str = $(`.${name}-row`).html();
        
        if(!$.isArray(data[0])) {
            $.each(data, (index, skill) => {
                str += 
                `<div class='col-6 col-md-4 col-lg-2 btn-shell'>
                    <input type='checkbox' class='filter' id='${name}-${index}'>
                    <label class='p-1 w-100 text-center ${name}-btn' for='${name}-${index}'>${skill}${postAppend}</label>
                </div>`;
            })
        }
        else {
            $.each(data, (index_group, group) => {
                str += "<div class='col-12 my-2'></div>";
                $.each(group, (index, skill) => {
                    str += 
                    `<div class='col-6 col-md-4 col-lg-2 btn-shell'>
                        <input type='checkbox' class='filter' id='${name}-${index_group}-${index}'>
                        <label class='p-1 w-100 text-center ${name}-btn' for='${name}-${index_group}-${index}'>${skill}${postAppend}</label>
                    </div>`;
                })
            })
        }
		
		/* 	Possible SVG solution for automatic font sizing
		<svg width="100" height="30" viewBox="0 0 100 30"'>
			<text x="50%" y="50%" alignment-baseline="middle" text-anchor="middle">${skill}${postAppend}</text>
		</svg>
		*/
        
        return str;
    });
}

function createKeywordRow() {
    $(".keyword-row").html(() => {
        let str = $(".keyword-row").html();
        str += `
        <div class='col-12 my-2'></div>
        <div class='col-12 col-md-4 col-lg-2 btn-shell'>
            <input type='checkbox' class='filter' id='keyword-switch'>
            <label class='p-1 w-100 text-center keyword-btn' for='keyword-switch'>關鍵字搜尋</label>
        </div>
        <div class='col-12 col-md-8 col-lg-10 btn-shell'>
            <input type='text' class='form-control keyword-input' id='keyword-input' placeholder='輸入技能關鍵字' maxlength=${input_maxlength} disabled>
        </div>`;
        return str;
    });
}

function clearFilterButtonRow(name) {
    return function() {
        $(`.${name}-row .filter`).prop('checked', false);
        filter_set.clear();
    }
}

function checkKeyword() {
    /* keyword input check */
    let keyword_group = textSanitizer($('#keyword-input').val());
        
    if(keyword_group.length <= 0)
    {
        errorAlert(3);
        return;
    }
    else if(keyword_group.length > input_maxlength)
    {
        errorAlert(4);
        return;
    }
    
    /* keyword input split */
    let keyword_set = new Set();
    
    keyword_set.clear();
    
    let keywords = keyword_group.split(',');
    $.each(keywords, (index, keyword) => {
        if(keyword.length > 0 && keyword.length <= input_maxlength) keyword_set.add(keyword);
    });
    
    if(keyword_set.size <= 0)
    {
        errorAlert(3);
        return;
    }
    
    return keyword_set;
}

function clearKeyword()
{
    $("#keyword-input").val('');
}

function clearAll()
{
    clearFilterButtonRow('filter')();
    clearFilterButtonRow('attr')();
    clearFilterButtonRow('race')();
    clearFilterButtonRow('star')();
    clearFilterButtonRow('charge')();
    clearFilterButtonRow('tag')();
    clearKeyword();
}

function keywordSwitch()
{
    let useKeyword = $("#keyword-switch").prop('checked')
    
    keyword_search = useKeyword;
    $('#keyword-input').attr('disabled', !useKeyword);
    
    $('#keyword-input').css(
        { 
            borderColor: useKeyword ? 'var(--text_color)' : 'var(--button_keyword_color_input_unable)',
            backgroundColor: useKeyword ? 'var(--button_keyword_color_input_able)' : 'var(--button_keyword_color_input_unable)'
        }
    );
    
    $(".filter-row .filter").each(function() {
        $(this).attr('disabled', useKeyword);
        
        if(useKeyword) {
            $(this).next().css(
                {
                    border: '1px solid var(--button_keyword_color_unable)', 
                    color: '#AAAAAA', 
                    backgroundColor: 'var(--button_keyword_color_unable)', 
                    cursor: 'default', 
                    fontWeight: 'normal'
                }
            );
        }
        else {
            $(this).next().removeAttr('style');
        }
    });
}

function getSelectedButton(name, getFirstOnly = false) {
    let result_set = new Set();
    let hasSelected = false;
    
    $(`.${name}-row .filter`).each(function() {
        if($(this).prop('checked'))
        {
            result_set.add(getFirstOnly ? parseInt($(this).next("label").text()[0]) : $(this).next("label").text());
            hasSelected = true;
        }
    });
    
    return [result_set, hasSelected]
}

function andOrChange()
{
    or_filter = !or_filter;
    
    $("#and_or_filter").removeClass(or_filter ? "btn-danger" : "btn-warning").addClass(or_filter ? "btn-warning" : "btn-danger").text(or_filter ? "OR 搜尋" : "AND 搜尋");
}

function renderTags(data, classType, postAppend = "") {
    let tag_html = "";
    
    [...data].forEach((element) => {
        tag_html += `
            <div class="tag_wrapper">
                <div class="${classType}_tag" title="${element}${postAppend}">${element}${postAppend}</div>
            </div>
        `;
    });
    
    return tag_html;
}

function paddingZeros(x, num)
{
    const str = x.toString();
    return str.length < num ? "0".repeat(num-str.length) + str : str;
}

function getPosition(id)
{
    let element = $(`#${id}`).get(0);
    let left = 0;
    let top = 0;
    const top_padding_offset = 90;

    do {
        left += element.offsetLeft;
        top += element.offsetTop;
    } while(element = element.offsetParent);

    return [0, top - top_padding_offset];
}

function jumpTo(id)
{
    window.scrollTo(getPosition(id)[0], getPosition(id)[1]);
}

function toggleSideNavigation() {
    const sideNav = $(".side_navigation")[0];
    sideNav.style.width = sideNav.style.width == "250px" ? "0px" : "250px";
}

function errorAlert(index)
{
    switch(index) {
        case 1:
            alert("[Error Code "+paddingZeros(index, 2)+"] 請檢查網址是否正確");
        break;
        case 2:
            alert("[Error Code "+paddingZeros(index, 2)+"] 請先選擇功能");
        break;
        case 3:
            alert("[Error Code "+paddingZeros(index, 2)+"] 請輸入技能關鍵字");
        break;
        case 4:
            alert("[Error Code "+paddingZeros(index, 2)+"] 技能關鍵字數量不得超過 "+input_maxlength);
        break;
        default:
            
    }
}

function textSanitizer(text)
{
    return text.replace(/<br>/g,'').replace(/\s/g,'').toLowerCase();
}



function encode(type)
{
    let cnt = 1, enc_bin = 0;
    let str = "";
    
    $(`${type} .filter`).each(function() {
        enc_bin = enc_bin * 2 + ($(this).prop('checked') ? 1 : 0);
        if(cnt % 6 == 0)
        {
            str += encode_chart[enc_bin];
            enc_bin = 0;
        }
        cnt ++;
    });
    
    while(cnt % 6 != 1)     // padding for zeros
    {
        enc_bin = enc_bin * 2;
        if(cnt % 6 == 0)
        {
            str += encode_chart[enc_bin];
            enc_bin = 0;
        }
        cnt ++;
    }

    return str;
}

function decode(data)
{
    let bin_str = "";
    
    $.each([...data], (data_index, input) => {
        $.each(encode_chart, (code_index, code) => {
            if(input === code)
            {
                let bin_str_part = "";
                Array.from(Array(6)).forEach(() => {
                    bin_str_part += (code_index % 2).toString();
                    code_index = Math.trunc(code_index / 2);
                })
                bin_str += bin_str_part.split('').reverse().join('');
            }
        })
    })

    return bin_str;
}

function isTypeSelected(type) {
	let checked = false;
	$(`${type} .filter`).each(function() {
        if($(this).prop('checked')) {
			checked = true;
			return;
		}
    });
	return checked
}

function setButtonFromUrl(type, data, callback)
{
    callback();
    
    let cnt = 0;
    $(`${type} .filter`).each(function(){
        if(data[cnt] == '1') $(this).click();
        cnt ++;
    });
}

function setInputFromUrl(element, data)
{
    $(element).val(data);
}

function changeUrl()
{
    let search_str = (isTypeSelected(".filter-row") && !keyword_search) ? `search=${encode(".filter-row")}&` : ''
    let keyword_str = (escape(textSanitizer($('#keyword-input').val())).length > 0 && keyword_search) ? `keyword=${escape(textSanitizer($('#keyword-input').val()))}&` : ''
    let attr_str = isTypeSelected(".attr-row") ? `attr=${encode(".attr-row")}&` : ''
    let race_str = isTypeSelected(".race-row") ? `race=${encode(".race-row")}&` : ''
    let star_str = isTypeSelected(".star-row") ? `star=${encode(".star-row")}&` : ''
    let charge_str = isTypeSelected(".charge-row") ? `chrg=${encode(".charge-row")}&` : ''
    let tag_str = isTypeSelected(".tag-row") ? `tag=${encode(".tag-row")}&` : ''
    let mode_str = isTypeSelected(".mode-row") ? `mode=${encode(".mode-row")}&` : ''
    let actv_str = isTypeSelected(".activate-row") ? `actv=${encode(".activate-row")}&` : ''
    let or_str = `or=${or_filter ? `1` : `0`}&`
	
	let queryStr = `${search_str}${keyword_str}${attr_str}${race_str}${star_str}${charge_str}${or_str}${tag_str}${mode_str}${actv_str}`
	queryStr = 	queryStr.length > 0 ? 
					queryStr.endsWith('&') ? 
						`?${queryStr.slice(0, -1)}` :
						`?${queryStr}`
						
				: ''
	
    window.history.pushState(null, null, queryStr);
}

function readUrl()
{   
    let code_array = location.search.split("&").map(x => x.split("=")[1]);
    let code_name_array = location.search.split("?")[1].split("&").map(x => x.split("=")[0]);
	
	let inputQuery = {};
	location.search.split("?")[1].split("&").forEach(query => inputQuery[query.split('=')[0]] = query.split('=')[1])
    
    if('search' in inputQuery && 'keyword' in inputQuery)
    {
        errorAlert(1);
        return;
    }
    
    if('search' in inputQuery) {
		setButtonFromUrl(".filter-row", decode(inputQuery['search']), clearFilterButtonRow('filter'));
	}
    else if('keyword' in inputQuery) {
		setInputFromUrl(".keyword-input", unescape(inputQuery['keyword']));
        
        $("#keyword-switch").click();
        keywordSwitch();
	}
    
	'attr' in inputQuery && setButtonFromUrl(".attr-row", decode(inputQuery['attr']), clearFilterButtonRow('attr'));
	'race' in inputQuery && setButtonFromUrl(".race-row", decode(inputQuery['race']), clearFilterButtonRow('race'));
	'star' in inputQuery && setButtonFromUrl(".star-row", decode(inputQuery['star']), clearFilterButtonRow('star'));
	'chrg' in inputQuery && setButtonFromUrl(".charge-row", decode(inputQuery['chrg']), clearFilterButtonRow('charge'));
	'tag' in inputQuery && setButtonFromUrl(".tag-row", decode(inputQuery['tag']), clearFilterButtonRow('tag'));
	'actv' in inputQuery && setButtonFromUrl(".activate-row", decode(inputQuery['actv']), clearFilterButtonRow('activate'));
	'mode' in inputQuery && setButtonFromUrl(".mode-row", decode(inputQuery['mode']), clearFilterButtonRow('mode'));
	'or' in inputQuery && inputQuery['or'] == '0' && andOrChange();
    
    startFilter();
    
    window.history.pushState(null, null, location.pathname);    // clear search parameters
}

function changeTheme()
{
    let theme_string = [
        '--background_color', 
        '--text_color', 
        '--text_color_anti', 
        '--button_color', 
        '--button_text_color_checked', 
        '--button_filter_color_checked', 
        '--button_keyword_color_checked', 
        '--button_keyword_color_unable', 
        '--button_keyword_color_input_able', 
        '--button_keyword_color_input_unable', 
        '--button_tag_color_checked', 
        '--button_other_color_checked', 
        '--button_sortby', 
        '--button_primary',
        '--button_warning',
        '--button_danger',
        '--button_success',
        '--button_secondary',
        '--text_tag_color', 
        '--monsterid_color', 
        '--text_monsterid_color', 
        '--tooltip_color', 
        '--text_tooltip_color', 
        '--text_name_tooltip_color', 
        '--text_refine_tooltip_color', 
        '--text_recall_tooltip_color', 
        '--text_charge_tooltip_color',
        '--text_charge_sort_color',
        '--table_border',
        '--table_border_center',
		'--text_monster_name_water_color',
		'--text_monster_name_fire_color',
		'--text_monster_name_earth_color',
		'--text_monster_name_light_color',
		'--text_monster_name_dark_color',
    ];
    
    theme = (theme == 'normal') ? 'dark' : 'normal';
    
    $.each(theme_string, (index, name) => {
        document.documentElement.style.setProperty(name, `var(${name}_${theme})`);
    });
}