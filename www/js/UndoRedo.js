  var history = {
    redo_list: [],
    undo_list: [],
    saveState: function(canvas, list, keep_redo) {
      keep_redo = keep_redo || false;
      if(!keep_redo) {
        this.redo_list = [];
      }
      
      (list || this.undo_list).push(canvas.toJSON());   
    },
    undo: function(canvas) {
      this.restoreState(canvas, this.undo_list, this.redo_list);
    },
    redo: function(canvas) {
      this.restoreState(canvas, this.redo_list, this.undo_list);
    },
    restoreState: function(canvas, pop, push) {
      if(pop.length) {
        this.saveState(canvas, push, true);
        var restore_state = pop.pop();
        canvas.clear();
        canvas.loadFromJSON(restore_state);
        
      
          
        }
      }
    };
 
 

  $('#undo-canvas').addEvent('click', function() {
    history.undo(canvas);
  });
  
  $('#redo-canvas').addEvent('click', function() {
    history.redo(canvas);
  });

  
