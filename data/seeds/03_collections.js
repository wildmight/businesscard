exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('collections').del()
    .then(function () {
      // Inserts seed entries
      return knex('collections').insert([
        { user_id: '1', card_id: '1', event_id:'1'},
      
      ]);
    });
};


