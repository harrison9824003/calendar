(function(window, $){

	'use strict';

	$.fn.MyCalendar = function(options){

		/**
			預設值 default
			與呼叫時候傳入的物件合併成 setting
		*/
		var defaults = {
			tarDate: new Date(),
			language: "zh_tw_full",
			supportedLangs: ['zh_tw'],
			class_week: {
				0:'sun',
				6:'sat',
				1:'mon',
				2:'tue',
				3:'wed',
				4:'thu',
				5:'fri'
			},
			table_set:{
				width:'100%',
				border:'0',
				cellspacing:'0',
				cellpadding:'',
				class:'table calendar-table'
			}
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

		let today 			= new Date();
		let toolBlock 		= "toolBlock";
		let dataBlock 		= "dataBlock";
		let calendarMonth 	= getCurrMonth();
		let calendarYear 	= getCurrYear();
		let currIndex 		= getBegin();
		let week_text		= {
				zh_tw : ['日','一','二','三','四','五','六'],
				zh_tw_full : ['星期日','星期一','星期二','星期三','星期四','星期五','星期六']
			};
	    let firstDay 	= getFirstDay();
		let currMonth 	= getCurrMonth();
		let self = this;

		//日期格式
		function date_format(date){
			return date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate();
		}

		//建立 table th thead
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

		//取得當下月份日期
		function getFDate()
		{
			return new Date(new Date(setting.tarDate.setDate(1)).setHours(0,0,0,0));   // 目前月份第一天 00:00:00(object)
		}

		//取得檔下月份星期幾
		function getFirstDay()
		{
			return getFDate().getDay();   // 目前月份第一天星期
		}

		//取得檔下月份
		function getCurrMonth()
		{
			return getFDate().getMonth();    // 目前月份
		}

		//取得當下年份
		function getCurrYear()
		{
			return getFDate().getFullYear();    // 目前年份
		}

		//取得開始日期
		function getBegin()
		{
			var begin;
			if(getFirstDay()==0)
		    {
		        begin = new Date(getFDate().getTime()-86400*7*1000);
		    }
		    else
		    {
		        begin = new Date(getFDate().getTime()-86400*getFirstDay()*1000);
		    }
		    return begin;
		}

		//綁定下一個月事件
		function bindNextMonth(selector)
		{
			//綁定下個月
			self.find(selector).on('click', function(){

				var next;
		
				if(currMonth==11)
				{
			        next = 1;
			        calendarYear++;
			    }
			    else{
			        next = currMonth+2;
			    }
			    
			    self.empty();
			    self.MyCalendar({ tarDate :new Date(new Date().setFullYear(calendarYear, next, 0))});
			});
		}	

		//綁定上一個月事件
		function bindPreMonth(selector)
		{
			self.find(selector).on('click', function(){

				var prev;

				if(currMonth==0)
				{
			        prev = 12;
			        calendarYear--;
			    }
			    else{
			        prev = currMonth;
			    }
			    
			    self.empty();
			    self.MyCalendar({ tarDate :new Date(new Date().setFullYear(calendarYear, prev, 0))});
			});
		}


		//建立按鈕工具列
		function setToolBlock()
		{

			var tool_tmp = '<div class="cal-header"><div class="prev-month"><button class="week_prev"><i class="fa fa-angle-double-left pr-2"></i>上一個月</button></div><div class="now-month"></div><div class="next-month"><button class="week_next">下一個月<i class="fa fa-angle-double-right pl-2"></i></button></div></div>';

			self.find("."+toolBlock).append(tool_tmp);

			//切換年月標題
			self.find(".now-month").html(calendarYear+'年'+((currMonth+1)<10 ? '0'+(currMonth+1) : (currMonth+1))+'月');

			//綁定下個月
			bindNextMonth(".week_next");

			//綁定上個月
			bindPreMonth(".week_prev");

			//行事曆切換
			// self.append('<div class="class_type"><button id="calendar_on" tabindex="100">月曆</button><button id="calendar_list" tabindex="100">列表</button></div><br/>');

			self.find("#calendar_on").on('click', function(){
			    
			    self.empty();
			    self.MyCalendar({ tarDate :new Date(new Date().setFullYear(calendarYear, currMonth+1, 0))});

			});

			self.find("#calendar_list").on('click', function(){
			    
			    self.empty();
			    // self.MyCalendar({ tarDate :new Date(new Date().setFullYear(calendarYear, currMonth+1, 0))});		    
			});
		}

		function setDateBlock()
		{
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

	    	// 放入天數欄位
	    	self.find("."+dataBlock).append(settable().append(table_body));

	    	//ajax資料
	    	self.MyCalendar_ajax(calendarYear, currMonth+1);
		}

		//建立顯示
		(function(){

			//產生工具列
	    	self.append($("<div />").addClass(toolBlock));
	    	self.append($("<div />").addClass(dataBlock));
	    	setToolBlock();
	    	setDateBlock();

		})();

	    return self;
	};

	$.fn.MyCalendar_ajax = function(){

		var year = arguments[0];
		var month = arguments[1];
		var data = [
			{date:"2018/8/1", title:"科技產業 - 我是小小工程師", href:"#", class:'cal-category-1'},
			{date:"2018/8/1", title:"青年創業之3D列印(上)", href:"#", class:'cal-category-2'},
			{date:"2018/8/3", title:"真幌站前多田便利屋", href:"#", class:'cal-category-3'},
			{date:"2018/8/4", title:"青年創業之3D列印(上)", href:"#", class:'cal-category-4'},
			{date:"2018/8/5", title:"真幌站前多田便利屋", href:"#", class:'cal-category-5'},
			{date:"2018/8/6", title:"青年創業之3D列印(上)", href:"#", class:'cal-category-6'},
			{date:"2018/8/7", title:"真幌站前多田便利屋", href:"#", class:'cal-category-7'},
		];

		for(var x in data)
		{
			$("[data-date='"+data[x]["date"]+"']").append('<div class="'+data[x]["class"]+'">'+data[x]["title"]+'</div>');
		}

		// return this;
	};

})(window, jQuery);

$(function(){
	$("[data-calendar='']").MyCalendar();
});