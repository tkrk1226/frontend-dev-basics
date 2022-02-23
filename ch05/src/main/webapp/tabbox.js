var tabBox = {
	
	_onWindowLoad: function(){
	
		var divTabBox = document.getElementsByClassName("tab-box")[0];
		var ul = divTabBox.childNodes[1];
		var liTabs = ul.getElementsByTagName("li");
	
		for(var i = 0; i < liTabs.length; i++){
			liTabs[i].addEventListener('click', this._onTabClicked); // Event Handler
		} 
	},
	
	_onTabClicked: function(){
	// 객체 내부에서만 쓰기에 관례적으로 _를 맨앞에 써준다.			
		// unselected
		var lisSelected = document.getElementsByClassName("selected");
		
		(lisSelected.length === 1) && (lisSelected[0].className = "");
		
		// select
		this.className = 'selected';
	},
	
	init: function(){
		window.addEventListener('load', this._onWindowLoad.bind(this));
		// this는 js의 tabbox 그 자체를 의미			
	}
}

