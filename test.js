this.id = (+new Date()).toString(16) + 
        (Math.random() * 100000000 | 0).toString(16) +
        ECS.Entity.prototype._count;
