function PaginationHelper(collection, itemsPerPage) {
	this.collection = collection;
	this.itemsPerPage = itemsPerPage;
	this.pages = [];
  
	this._start = 0;
  
	for(let i = 1; i < this.collection.length; i++) {
	  if(i % itemsPerPage === 0) {
		  let clone = this.collection.slice();
		  this.pages.push(clone.slice(this._start, i))
		  this._start = i;
	  }
	}
	let clone = this.collection.slice();
	if(this.collection.length > 0) {
		this.pages.push(clone.slice(this._start, this.collection.length))
	} 
  }
  
  // returns the number of items within the entire collection
  PaginationHelper.prototype.itemCount = function() {
	return this.collection.length;
  }
  
  // returns the number of pages
  PaginationHelper.prototype.pageCount = function() {
	return this.pages.length;
  }
  
  // returns the number of items on the current page. page_index is zero based.
  // this method should return -1 for pageIndex values that are out of range
  PaginationHelper.prototype.pageItemCount = function(pageIndex) {
	  const result = this.pages[pageIndex]
	  return result ? result.length : -1;
  }
  
  // determines what page an item is on. Zero based indexes
  // this method should return -1 for itemIndex values that are out of range
  PaginationHelper.prototype.pageIndex = function(itemIndex) {
	  if(itemIndex > this.itemCount() || itemIndex < 0 || this.pageCount() === 0) {
		  return -1;
	  } 
	  
	  const result = Math.floor(itemIndex / this.itemsPerPage) 
	  return result <= this.pages.length ? result : -1;
  }