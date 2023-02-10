import {appSchema, tableSchema} from '@nozbe/watermelondb';

export const schema = appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'workouts',
      columns: [{name: 'created_at', type: 'number'}],
    }),
    tableSchema({
      name: 'workout_exercises',
      columns: [
        {name: 'workout_id', type: 'string', isIndexed: true},
        {name: 'exercise_id', type: 'string'},
        {name: 'position', type: 'number'},
      ],
    }),
    tableSchema({
      name: 'sets',
      columns: [
        {name: 'workout_exercise_id', type: 'string', isIndexed: true},
        {name: 'weight', type: 'number'},
        {name: 'reps', type: 'number'},
        {name: 'position', type: 'number'},
      ],
    }),
    tableSchema({
      name: 'templates',
      columns: [{name: 'name', type: 'string'}],
    }),
    tableSchema({
      name: 'template_exercises',
      columns: [
        {name: 'template_id', type: 'string', isIndexed: true},
        {name: 'exercise_id', type: 'string'},
        {name: 'position', type: 'number'},
      ],
    }),
    tableSchema({
      name: 'exercises',
      columns: [{name: 'name', type: 'string'}],
    }),
  ],
});
