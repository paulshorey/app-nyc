angular.module('ionicApp.services', [])

.factory('AccountService', ["$q", function($q) {
  return {
    currentUser : function() {
      var def = $q.defer();
      Stamplay.User.currentUser()
      .then(function(response) {
        if(response.user === undefined) {
          def.resolve(false);
        } else {
          def.resolve(response.user);
        }
      }, function(error) {
        def.reject();
      }
    )
    return def.promise;
  }
}
}])



.factory('QueryService', ["$rootScope", "$q", function($rootScope, $q) {

  return {
    getGuestQuerys : function(query) {
      var deffered = $q.defer();
      Stamplay.Query("object", "query")
      .notExists("owner")
      .exec()
      .then(function(response) {
        deffered.resolve(response)
      }, function(error) {
        deffered.reject(err);
      })
      return deffered.promise;
    },

    getUsersQuerys : function(query) {
      var deffered = $q.defer();

      Stamplay.Object("query")
      .findByCurrentUser(["owner"])
      .then(function(response) {
        deffered.resolve(response)
      }, function(err) {
        deffered.reject(err);
      })
      return deffered.promise;
    },

    getQuery : function(id) {
        var deffered = $q.defer();
        Stamplay.Object("query").get({ _id : id })
        .then(function(response) {
          deffered.resolve(response)
        }, function(error) {
          deffered.reject(err);
        })
        return deffered.promise;
    },

    addNew : function(query) {
      var deffered = $q.defer();

      Stamplay.Object("query").save(query)
      .then(function(response) {
        deffered.resolve(response)
      }, function(err) {
        deffered.reject(err);
      })
      return deffered.promise
    },
    deleteQuery : function(id) {
      var deffered = $q.defer();
      Stamplay.Object("query").remove(id)
      .then(function(response) {
        deffered.resolve(response)
      }, function(err) {
        deffered.reject(err);
      })
      return deffered.promise;
    },
    updateQuery : function(query) {
      var deffered = $q.defer();
      Stamplay.Object("query").update(query._id, query)
      .then(function(response) {
        deffered.resolve(response)
      }, function(err) {
        deffered.reject(err);
      })
      return deffered.promise;
    }

  }
}])



.factory('TaskService', ["$rootScope", "$q", function($rootScope, $q) {

  return {
    getGuestTasks : function(query) {
    	console.log('get GUEST tasks');
      var deffered = $q.defer();
      Stamplay.Query("object", "task")
      .notExists("owner")
      .exec()
      .then(function(response) {
        deffered.resolve(response)
      }, function(error) {
        deffered.reject(err);
      })
      return deffered.promise;
    },

    getUsersTasks : function(query) {
    	console.log('get USER tasks');
      var deffered = $q.defer();

      Stamplay.Object("task")
      .findByCurrentUser(["owner"])
      .then(function(response) {
        deffered.resolve(response)
      }, function(err) {
        deffered.reject(err);
      })
      return deffered.promise;
    },

    getTask : function(id) {
        var deffered = $q.defer();
        Stamplay.Object("task").get({ _id : id })
        .then(function(response) {
          deffered.resolve(response)
        }, function(error) {
          deffered.reject(err);
        })
        return deffered.promise;
    },

    addNew : function(task) {
      var deffered = $q.defer();

      Stamplay.Object("task").save(task)
      .then(function(response) {
        deffered.resolve(response)
      }, function(err) {
        deffered.reject(err);
      })
      return deffered.promise
    },
    deleteTask : function(id) {
      var deffered = $q.defer();
      Stamplay.Object("task").remove(id)
      .then(function(response) {
        deffered.resolve(response)
      }, function(err) {
        deffered.reject(err);
      })
      return deffered.promise;
    },
    updateTask : function(task) {
      var deffered = $q.defer();
      Stamplay.Object("task").update(task._id, task)
      .then(function(response) {
        deffered.resolve(response)
      }, function(err) {
        deffered.reject(err);
      })
      return deffered.promise;
    },
    patchTask : function(task) {
      var deffered = $q.defer();
      Stamplay.Object("task").patch(task._id, { complete: task.complete})
      .then(function(response) {
        deffered.resolve(response)
      }, function(err) {
        deffered.reject(err);
      })
      return deffered.promise;
    }

  }
}]);
