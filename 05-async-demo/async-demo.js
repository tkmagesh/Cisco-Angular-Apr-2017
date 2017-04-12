var app = (function(){

	//Sync
	function addSync(x,y){
		console.log('	[Service] processing ', x , ' and ', y);
		var result = x + y;
		console.log('	[Service] returning result');
		return result;
	}

	function addSyncClient(x,y){
		console.log('[Client] triggering addSync');
		var result = addSync(x,y);
		console.log('[Client] result = ', result);
	}

	//Async
	function addAsyncCallback(x,y, callback){
		console.log('	[Service] processing ', x , ' and ', y);
		setTimeout(function(){
			var result = x + y;
			console.log('	[Service] returning result');
			if (typeof callback === 'function')
				callback(result);
		}, 5000);
	}

	function addAsyncCallbackClient(x,y){
		console.log('[Client] triggering addAsyncCallback');
		addAsyncCallback(x,y, function(result){
			console.log('[Client] result = ', result);	
		});
		
	}

	function addAsyncPromise(x,y){
		console.log('	[Service] processing ', x , ' and ', y);
		var promise = new Promise(function(resolveFn, rejectFn){
			setTimeout(function(){
				var result = x + y;
				console.log('	[Service] returning result');
				resolveFn(result);
			}, 5000);	
		});
		return promise;
	}

	return {
		addSyncClient : addSyncClient,
		addAsyncCallbackClient : addAsyncCallbackClient,
		addAsyncPromise : addAsyncPromise
	}
})();