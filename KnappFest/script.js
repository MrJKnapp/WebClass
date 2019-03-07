$.getJSON('https://spreadsheets.google.com/feeds/list/1_yOQokl_bl9lp2c-tp7jYUgkgvq5uROToi4S4ZndQN8/od6/public/values?alt=json',
	function (data) {
		var d = data.feed.entry;
		var first = true;
		var s = '';
		$.each(d, function () {
			if (this['gsx$day']['$t'] === "Sunday" || first){
				s += '<div class="row">';
				first = false;
			}
			s += '<div class="card"><div class="card-body"><h5 class="card-title">' 
				+ this['gsx$date']['$t'] + '</h5>' 
				+ '<p>' + this['gsx$morning']['$t'] + '</p>'
				+ '<p>' + this['gsx$lunch']['$t'] + '</p>'
				+ '<p>' + this['gsx$afternoon']['$t'] + '</p>'
				+ '<p>' + this['gsx$dinner']['$t'] + '</p>'
				+ '<p>' + this['gsx$evening']['$t'] + '</p>'
				+ '<p>' + this['gsx$notes']['$t'] + '</p></div>'
				+ '<div class="vertical">' + this['gsx$day']['$t'] + '</div>'
				+ '</div>';
			if (this['gsx$day']['$t'] === "Saturday"){
				s += '</div>'
			}
			
		})
		s += '</div>'
		$('#schedule').append(s);
	})