(function(window, $){

	'use strict';

	//function call constructor 呼叫建構子
	var DCalendar = function(e){
		return new DCalendar.init(e);
	};

	//var
	let calendarMonth;  // 月曆當前月份
	let calendarYear;   // 月曆當前年份
	let tdCurrMonthStart;   // 月曆當前月份TD起始index
	let tdCurrMonthEnd; // 月曆當前月份TD結束"隔天"index
	let begin;	//開始
	let currIndex;	//目前索引
	let week='';	
	let language;
	let supportedLangs = ['zh-tw'];//語言
	let class_week = ['week_sun', '', '', '', '', '', 'week_sat'];

	//week 文字
	let week_text = {
		zh_tw : ['日','一','二','三','四','五','六'],
		zh_tw_full : ['星期日','星期一','星期二','星期三','星期四','星期五','星期六']
	};

	//原型
	DCalendar.prototype = {

		//ajax handler
		ajax_data : function(){

		},

		//選單計時器
		timer : {},

		weekTH : function(){
			for(let i=0; i<7;)
			{
			    week += '<th' + (' class="' + class_week[i] + '" ') + '>' + week_text[this.language][i++] + '</td>';
			}
			week = '<tr>' + week + '</tr>';
			return this;
		},

		//製作行事曆
		makeCalendar : function(tarDate){

			let currDate_tmp;
			if(typeof tarDate=='undefined')
			{
		        currDate_tmp = new Date();
		    }
		    else
		    {
		        currDate_tmp = tarDate;
		    }

		    let currDate = new Date(new Date(currDate_tmp.setDate(1)).setHours(0,0,0,0));   // 目前月份1日 00:00:00(object)
		    let firstDay = currDate.getDay();   // 目前月份1日星期
    		let currMonth = currDate.getMonth();    // 目前月份
    		// 月曆起始日期(上個月最後一周)
		    if(firstDay==0)
		    {
		        begin = new Date(currDate.getTime()-86400*7*1000);
		    }
		    else
		    {
		        begin = new Date(currDate.getTime()-86400*firstDay*1000);
		    }
		    currIndex = begin;  // 當前日期指標
		    calendarMonth = currMonth;  // 月曆當前月份
    		calendarYear = currDate.getFullYear();  // 月曆當前年份

			let dates = '';
			let tdIndex = 0;
			tdCurrMonthStart = 0;
    		tdCurrMonthEnd = 0;

    		for(let i=0; i<6; i++)
    		{
		        let tr = '';
		        for(let j=0; j<7; j++)
		        {
		            if(currIndex.getMonth()!=currMonth)
		            {
		                if(i>0)
		                {
		                    tdCurrMonthEnd = tdCurrMonthEnd || tdIndex;
		                }
		                tr += '<td valign="top" '+((j==0 || j==6) ? (j==0 ? ' class="week_sun"' : ' class="week_sat"') : '')+' ><div class="date">'+currIndex.getDate()+'日</div><div id="dateTd_'+(tdIndex++)+'"></div></td>';
		            }
		            else
		            {
		                tdCurrMonthStart = tdCurrMonthStart || tdIndex;
		                tr += '<td valign="top" '+((j==0 || j==6) ? (j==0 ? ' class="week_sun"' : ' class="week_sat"') : '')+' ><div class="date">'+currIndex.getDate()+'日</div><div id="dateTd_'+(tdIndex++)+'"></div></td>';
		            }
		            currIndex = new Date(currIndex.getTime()+86400*1000);
		        }
		        dates += '<tr>'+tr+'</tr>';
		    }
		    return dates;
		}
	};

	//constructor 建構子
	DCalendar.init = function(e){

		//referer 建立
		let self = this;
		self.language = language || 'zh_tw_full';
		self.weekTH();
		var dates = self.makeCalendar();
		e.html('<table width="100%" border="0" cellspacing="0" cellpadding="0" class="week"><caption>課程行事曆</caption>'+week+dates+'</table>');
		// $("#dateList").html('<table width="100%" border="0" cellspacing="0" cellpadding="0" class="week"><caption>課程行事曆</caption>'+week+'</table>');
	};

	DCalendar.init.prototype = DCalendar.prototype;

	window.DCalendar = window.DC$ = DCalendar;

})(window, jQuery);

$(function(){

	//測試
	var dcalendar = DC$($("#dateList"));
});