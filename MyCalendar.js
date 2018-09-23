(function(window, $){

	'use strict';

	$.fn.MyCalendar = function(options){

		/**
			預設值 default
			與呼叫時候傳入的物件合併成 setting
		*/
		var defaults = {
			//當下月份
			tarDate: new Date(),
			language: "zh_tw_full",
			supportedLangs: ['zh_tw'],
			//欄位樣式
			class_week: {
				0:'sun',
				6:'sat',
				1:'mon',
				2:'tue',
				3:'wed',
				4:'thu',
				5:'fri'
			},
			//行事曆table樣式
			table_set:{
				width:'100%',
				border:'0',
				cellspacing:'0',
				cellpadding:'',
				class:'table calendar-table'
			},
			calendar_mode:'month'
		}

		let setting  = $.extend( {}, defaults, options);

		/**
			設定變數
			today 當天
			toolBlock 預設放置工具列區塊
			dataBlock 預設放置行事曆內容區塊
			calendarMonth 當前月份
			calendarYear 當前年份
			currIndex 開始的日期，為當月首日所在的當週第一天
			week_text 週數的文字
			firstDay  目前月份第一天星期
			currMonth 月曆目前月份
			self 將 this 存到 self
		*/

		let self = this;
		let today 			= new Date();
		let toolBlock 		= "toolBlock";
		let dataBlock 		= "dataBlock";
		let week_text		= {
				zh_tw : ['日','一','二','三','四','五','六'],
				zh_tw_full : ['星期日','星期一','星期二','星期三','星期四','星期五','星期六']
			};
		
		let calendarMonth 	= getCurrMonth();
		let calendarYear 	= getCurrYear();
		let currIndex 		= getBegin();
		let currMonth 		= getCurrMonth();
	    let firstDay 		= getFirstDay();

		//日期格式
		function date_format(date){
			return date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate();
		}

		//建立行事曆 table th thead
		function settable()
		{
			var table = $("<table />");
			table.attr(setting.table_set);
			table.append($("<caption />"));
			
			//製作 thead
			var header = $("<tr />");

			for(let i=0; i<7;)
			{
				var th_tmp = $("<th />").attr({ 
					class:setting.class_week[i], 
					'data-week':i
				}).html(week_text[setting.language][i++]);
				header.append(th_tmp);
			}
		    
		    header = $("<thead />").append(header);
		    table.append(header);
		    return table;
		}	    

		//取得當下月份日期，目前月份第一天 00:00:00(object)
		function getFDate()
		{
			return new Date(new Date(setting.tarDate.setDate(1)).setHours(0,0,0,0));
		}

		//取得當下月份的第一天是星期幾
		function getFirstDay()
		{
			return getFDate().getDay();  
		}

		//取得當下月份
		function getCurrMonth()
		{
			return getFDate().getMonth();
		}

		//取得當下年份
		function getCurrYear()
		{
			return getFDate().getFullYear();
		}

		//取得當下月份行事曆的開始日期，以該月份該週的第一天
		function getBegin()
		{
			var begin;
			if(getFirstDay()==0){
		        begin = new Date(getFDate().getTime()-86400*7*1000);
		    }
		    else{
		        begin = new Date(getFDate().getTime()-86400*getFirstDay()*1000);
		    }
		    return begin;
		}

		//綁定下一個月事件
		function bindNextMonth(selector)
		{
			//綁定下個月
			self.find(selector).off().on('click', function(){

				var next;
		
				if(currMonth==11){
			        next = 1;
			        calendarYear++;
			    }
			    else{
			        next = currMonth+2;
			    }

			    // currIndex 		= getBegin();
			    setting.tarDate = new Date(new Date().setFullYear(calendarYear, next, 0));

			    calendarMonth 	= getCurrMonth();
				calendarYear 	= getCurrYear();
				currIndex 		= getBegin();
				currMonth 		= getCurrMonth();
			    firstDay 		= getFirstDay();

			    setToolBlock();
		    	setDateBlock();
			});
		}	

		//綁定上一個月事件
		function bindPreMonth(selector)
		{
			self.find(selector).off().on('click', function(){

				var prev;

				if(currMonth==0){
			        prev = 12;
			        calendarYear--;
			    }
			    else{
			        prev = currMonth;
			    }

			    setting.tarDate = new Date(new Date().setFullYear(calendarYear, prev, 0));

			    calendarMonth 	= getCurrMonth();
				calendarYear 	= getCurrYear();
				currIndex 		= getBegin();
				currMonth 		= getCurrMonth();
			    firstDay 		= getFirstDay();
			    
			   	setToolBlock();
		    	setDateBlock();
			});
		}


		//建立按鈕工具列
		function setToolBlock()
		{
			// 工具列html
			var tool_tmp = '<div class="cal-header"><div class="prev-month"><button class="week_prev"><i class="fa fa-angle-double-left pr-2"></i>上一個月</button></div><div class="now-month"></div><div class="next-month"><button class="week_next">下一個月<i class="fa fa-angle-double-right pl-2"></i></button></div></div>';

			//工具列內容
			self.find("."+toolBlock).empty().append(tool_tmp);

			//綁定下個月
			bindNextMonth(".week_next");

			//綁定上個月
			bindPreMonth(".week_prev");

			//切換年月標題
			self.find(".now-month").html(calendarYear+'年'+((currMonth+1)<10 ? '0'+(currMonth+1) : (currMonth+1))+'月');


			//行事曆模式切換按鈕綁定事件
			self.find("#calendar_on").on('click', function(){
			    
			    //清空內容
			    self.empty();
			    self.MyCalendar({ tarDate :new Date(new Date().setFullYear(calendarYear, currMonth+1, 0))});

			});

			self.find("#calendar_list").on('click', function(){
			    
			    self.empty();
			    // self.MyCalendar({ tarDate :new Date(new Date().setFullYear(calendarYear, currMonth+1, 0))});
			});
		}

		//建立月份行事曆
		function generate_month_view(){

			var table_body = $("<tbody />");
			for(let i=0; i<6; i++)
			{
		        let tr = $("<tr />");
		        for(let j=0; j<7; j++)
		        {	        	
		        	let td = $("<td />");
		        	let div_date = $("<div />");

		        	td.attr({
						valign: 'top',
						class: setting.class_week[j],
						'data-date': date_format(currIndex)
					});
		           
					div_date.attr({class:'day'}).html(currIndex.getDate()+'日');

		            td.append(div_date);

					if(currIndex.getMonth()!=currMonth)
					{
						td.addClass('other-month');
					}

		            table_body.append(tr.append(td));

		            //增加一天
		            currIndex = new Date(currIndex.getTime()+86400*1000);
		        }
		    }
		    
		    //設定第當天css
		    table_body.find("[data-date='"+date_format(today)+"']").addClass('today');

		    return table_body;	    	
		}

		function generate_week_view(){

		}

		/*
			檢查 ajax 處理 function 是否存在，若存在將資料放在 talbe 中
		*/
		function setdata(){

			if( typeof $.fn.MyCalendar_ajax !== "undefined" && typeof $.fn.MyCalendar_ajax === "function" ){

				//取得 ajax 資料
		    	var data = $.fn.MyCalendar_ajax(calendarYear, currMonth+1);

				for(var x in data)
				{
					self.find("[data-date='"+data[x]["date"]+"']").append('<div class="'+data[x]["class"]+'">'+data[x]["title"]+'</div>');
				}
			}
		}

		/*
			建立行事曆得畫面，依照 setting.calendar_mode 條件來決定執行的結果
		*/
		function setDateBlock()
		{
			let table_body;
			
			//篩選建立行事曆內容
			switch(setting.calendar_mode){
				case 'month':
					table_body = generate_month_view();
					break;
				case 'week':
					table_body = generate_week_view();
					break;
				default:
					table_body = generate_month_view();
			}

			
	    	self.find("."+dataBlock).empty().append(settable().append(table_body));

	    	setdata();
			
		}

		/*
			建立顯示畫面，產生工具列區域、產生行事曆區域
		*/
		(function(){
			
	    	self.append($("<div />").addClass(toolBlock));
	    	setToolBlock();

	    	
	    	self.append($("<div />").addClass(dataBlock));
	    	setDateBlock();

		})();

	    return self;
	};

	//預設 ajax 顯示資料只負責顯示資料
	$.fn.MyCalendar_ajax = function(){

		var year = arguments[0];
		var month = arguments[1];
		var data = [
			{date:"2018/8/1", title:"測試資料1", href:"#", class:'cal-category-1'},
			{date:"2018/8/1", title:"測試資料2", href:"#", class:'cal-category-2'},
			{date:"2018/8/3", title:"測試資料3", href:"#", class:'cal-category-3'},
			{date:"2018/8/4", title:"測試資料4", href:"#", class:'cal-category-4'},
			{date:"2018/8/5", title:"測試資料5", href:"#", class:'cal-category-5'},
			{date:"2018/8/6", title:"測試資料6", href:"#", class:'cal-category-6'},
			{date:"2018/8/7", title:"測試資料7", href:"#", class:'cal-category-7'},
		];

		return data;
	};

})(window, jQuery);

$(function(){
	$("[data-calendar='']").MyCalendar({
		// calendar_mode:'week'
	});
});