(function () {
	'use strict';

	angular.module('ShoppingList', [])
	.controller('ShoppingListController1', ShoppingListController1)
	.controller('ShoppingListController2', ShoppingListController2)
	.service('ShoppingListService', ShoppingListService);

	ShoppingListController1.inject = ['ShoppingListService'];
	function ShoppingListController1(ShoppingListService) {
		var Showlist = this;
		Showlist.ItemsToBuy = ShoppingListService.getItemsToBuy();
		Showlist.removeItem = function(index) {
			ShoppingListService.removeItem(index);
		}
	}	

	ShoppingListController2.inject = ['ShoppingListService'];
	function ShoppingListController2(ShoppingListService) {
		var ctrl = this;
		ctrl.ItemsBought = ShoppingListService.getItemsBrought();
	}

	function ShoppingListService() {
		var service = this;

		var ItemsToBuy = [
		{
			name : "Cookies",
			quantities: 10
		},
		{
			name : "Banana",
			quantities: 10
		},
		{
			name: "Chips",
			quantities: 20
		},
		{
			name: "Soft Drinks",
			quantities: 3
		},
		{
			name: "Cake",
			quantities: 8
		},
		{
			name: "Ice Cream",
			quantities: 5
		}];

		var ItemsBought = [];

		service.getItemsToBuy = function() {
			return ItemsToBuy;
		}

		service.getItemsBrought = function() {
			return ItemsBought;
		}
		 
		service.removeItem = function(index) {
			var item = ItemsToBuy[index];
			ItemsBought.push(item);
			ItemsToBuy.splice(index, 1);			
		}
	}
})();